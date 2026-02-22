import he from 'he';
import mappings from '../src/mappings.js';

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  return res.text();
}

function normalize(s: unknown): string {
  if (s == null) return '';
  // decode HTML entities, normalize NBSP to space, collapse whitespace
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

  // Build map: misrender (column 4) -> expected char (column 3)
  // Build map keyed by Unicode code point (column 1: U+XXXX) -> { expected, mis }
  const map = new Map();
  for (const cols of rows) {
    // defensive: expect at least 4 columns
    if (cols.length >= 4) {
      const code = cols[0]; // e.g. 'U+20AC'
      const expected = cols[2];
      const mis = cols[3];
      if (code) map.set(code.toUpperCase(), { expected, mis });
    }
  }
  return map;
}

async function main() {
  const url = 'https://www.i18nqa.com/debug/utf8-debug.html';
  console.log('Downloading chart from', url);
  const html = await fetchText(url);

  const chart = parseChartFromHtml(html);

  const mismatches = [];

  for (const entry of mappings) {
    // derive Unicode code point from the utf8 char
    const utfChar = entry.utf8.chars;
    const cp = utfChar && utfChar.length ? utfChar.codePointAt(0) : null;
    const cpStr = cp ? 'U+' + cp.toString(16).toUpperCase().padStart(4, '0') : null;
    if (!cpStr || !chart.has(cpStr)) {
      mismatches.push({ mis: entry.misrender.chars, expected: entry.utf8.chars, reason: 'codepoint-not-in-chart' });
      continue;
    }

    const chartEntry = chart.get(cpStr);
    const chartExpected = normalize(chartEntry.expected);
    const ourExpected = normalize(entry.utf8.chars);
    if (chartExpected !== ourExpected) {
      mismatches.push({
        mis: entry.misrender.chars,
        expected: entry.utf8.chars,
        found: chartExpected,
        reason: 'char-mismatch',
      });
    }
  }

  if (mismatches.length === 0) {
    console.log('All mappings match the i18nqa chart ✅');
    process.exit(0);
  }

  console.log('Found mismatches:');
  for (const mm of mismatches) {
    console.log('-', mm);
  }
  process.exit(2);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
