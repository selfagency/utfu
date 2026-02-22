import * as he from 'he';
import * as win from 'windows-1252';

import mappings from './mappings.js';

type Mapping = {
  misrender: { chars: string; hex: string; regex: RegExp };
  utf8: { chars: string; hex: string; regex: RegExp };
};

const err = new Error('utfu requires a string to process');

const notStr = (str: unknown): str is string => typeof str !== 'string';

function runMap(str: string, m: 'hex' | 'chars', html = false): string {
  if (notStr(str)) throw err;

  // Re-encode/decode through windows-1252 to normalize mis-encoded bytes
  str = win.decode(win.encode(str));

  for (const map of mappings as Mapping[]) {
    const replacement = html ? he.encode((map.utf8 as any)[m]) : (map.utf8 as any)[m];
    str = str.replace(map.misrender.regex, replacement);
  }

  return str;
}

export const hex = (str: string): string => runMap(str, 'hex');

export const htx = (str: string): string => runMap(str, 'chars', true);

export const txt = (str: string): string => runMap(str, 'chars');

export default { hex, htx, txt };
