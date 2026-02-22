import { existsSync, promises as fsPromises } from 'fs';
import * as he from 'he';
import { resolve } from 'path';
import { expect, test } from 'vitest';
import mappings from '../src/mappings.js';

function normalize(s: unknown) {
  if (s == null) return '';
  let out = he.decode(String(s));
  out = out.replace(/\u00A0/g, ' ');
  out = out.replace(/\s+/g, ' ').trim();
  return out;
}

function parseChartFromHtml(html: string) {
  const rows: string[][] = [];
  const trRe = /<tr[\s\S]*?<\/tr>/gi;
  const tdRe = /<t[dh][^>]*>([\s\S]*?)<\/(?:t[dh])>/gi;

  let tr: RegExpExecArray | null;
  while ((tr = trRe.exec(html))) {
    const trHtml = tr[0];
    const cols: string[] = [];
    let td: RegExpExecArray | null;
    tdRe.lastIndex = 0;
    while ((td = tdRe.exec(trHtml))) {
      cols.push(normalize(td[1].replace(/<[^>]+>/g, ' ')));
    }
    if (cols.length) rows.push(cols);
  }

  const map = new Map<string, { expected: string; mis: string }>();
  for (const cols of rows) {
    if (cols.length >= 4) {
      const rawCode = (cols[0] || '').toUpperCase().replace(/\s+/g, '');
      const expected = cols[2];
      const mis = cols[3];

      // Normalize a variety of possible code formats into U+XXXX
      // e.g. "U+00C0", "00C0", "0x00C0", "&#x00C0;"
      let hex: string | null = null;
      const uMatch = rawCode.match(/^U\+([0-9A-F]{1,6})$/i);
      const xMatch = rawCode.match(/^0X([0-9A-F]{1,6})$/i);
      const plainMatch = rawCode.match(/^([0-9A-F]{1,6})$/i);
      const htmlEntityMatch = rawCode.match(/#X?X?([0-9A-F]{1,6})/i) || rawCode.match(/&#x([0-9A-F]+);/i);
      if (uMatch) hex = uMatch[1];
      else if (xMatch) hex = xMatch[1];
      else if (plainMatch) hex = plainMatch[1];
      else if (htmlEntityMatch) hex = htmlEntityMatch[1];

      if (hex) {
        hex = hex.padStart(4, '0').toUpperCase();
        map.set('U+' + hex, { expected, mis });
      }
    }
  }
  return map;
}

test('mappings match i18nqa utf8-debug chart', async () => {
  const snapshotPath = resolve(__dirname, 'fixtures', 'utf8-debug.html');
  let html: string;
  if (existsSync(snapshotPath)) {
    // Prefer a checked-in snapshot in CI to avoid network fragility
    html = await fsPromises.readFile(snapshotPath, 'utf8');
  } else {
    const url = 'https://www.i18nqa.com/debug/utf8-debug.html';
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    html = await res.text();
  }

  const chart = parseChartFromHtml(html);
  const mismatches: Array<any> = [];
  // Build a lookup of our mappings by codepoint (U+XXXX)
  const mappingByCp = new Map<string, any>();
  for (const entry of mappings) {
    const utfChar = entry.utf8.chars;
    const cp = utfChar && utfChar.length ? utfChar.codePointAt(0) : null;
    const cpStr = cp ? 'U+' + cp.toString(16).toUpperCase().padStart(4, '0') : null;
    if (cpStr) mappingByCp.set(cpStr, entry);
  }

  // Iterate the i18nqa chart and ensure we cover each listed codepoint
  for (const pair of Array.from(chart)) {
    const cpStr = pair[0];
    const chartEntry = pair[1];
    const chartExpectedNorm = normalize(chartEntry.expected);
    // skip empty/placeholder expected values (e.g. rows that only show NBSP)
    if (!chartExpectedNorm) continue;

    if (!mappingByCp.has(cpStr)) {
      mismatches.push({
        cp: cpStr,
        reason: 'chart-codepoint-missing-in-mappings',
        expected: chartEntry.expected,
        mis: chartEntry.mis,
      });
      continue;
    }
    const entry = mappingByCp.get(cpStr);
    const chartExpected = chartExpectedNorm;
    const ourExpected = normalize(entry.utf8.chars);
    if (chartExpected !== ourExpected) {
      mismatches.push({
        cp: cpStr,
        reason: 'char-mismatch',
        expected: chartExpected,
        our: ourExpected,
        mis: entry.misrender.chars,
      });
    }
  }

  // If there are mismatches, include them in the failure message for debugging.
  expect(mismatches).toEqual([]);
}, 30_000);
