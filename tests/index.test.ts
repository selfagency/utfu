import * as he from 'he';
import { describe, expect, test } from 'vitest';

import { hex, htx, txt } from '../src/index';
import mappings from '../src/mappings.js';

describe('mappings', () => {
  mappings.forEach((mapping: any) => {
    const str = mapping.misrender.chars;
    test(`hex: replace ${str} with ${mapping.utf8.hex}`, () => {
      expect(hex(str)).toBe(mapping.utf8.hex);
    });
  });

  mappings.forEach((mapping: any) => {
    const str = mapping.misrender.chars;
    const html = he.encode(mapping.utf8.chars);

    test(`htx: replace ${str} with ${html}`, () => {
      expect(htx(str)).toBe(html);
    });
  });

  mappings.forEach((mapping: any) => {
    const str = mapping.misrender.chars;

    test(`txt: replace ${str} with ${mapping.utf8.chars}`, () => {
      expect(txt(str)).toBe(mapping.utf8.chars);
    });
  });
});
