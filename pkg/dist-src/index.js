import he from 'he';
import win from 'windows-1252';
import mappings from './mappings.js';

const hex = str => {
  if (typeof str !== 'string') throw new Error('utfu requires a string to process');
  str = win.decode(win.encode(str));
  mappings.forEach(mapping => {
    str = str.replace(mapping.misrender.regex, mapping.utf8.hex);
  });
  return str;
};

const txt = str => {
  if (typeof str !== 'string') throw new Error('utfu requires a string to process');
  str = win.decode(win.encode(str));
  mappings.forEach(mapping => {
    str = str.replace(mapping.misrender.regex, mapping.utf8.chars);
  });
  return str;
};

const htx = str => {
  if (typeof str !== 'string') throw new Error('utfu requires a string to process');
  str = win.decode(win.encode(str));
  mappings.forEach(mapping => {
    str = str.replace(mapping.misrender.regex, he.encode(mapping.utf8.chars));
  });
  return str;
};

export { hex, txt, htx };