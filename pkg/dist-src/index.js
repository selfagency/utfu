import { solo, duo, trio } from "./mappings.js";

const hex = str => {
  if (typeof str !== 'string') throw new Error('utfu requires a string to process');
  trio.forEach(mapping => {
    str = str.replace(mapping.misrender.regex, mapping.utf8.hex);
  });
  duo.forEach(mapping => {
    str = str.replace(mapping.misrender.regex, mapping.utf8.hex);
  });
  solo.forEach(mapping => {
    str = str.replace(mapping.misrender.regex, mapping.utf8.hex);
  });
  return str;
};

const txt = str => {
  if (typeof str !== 'string') throw new Error('utfu requires a string to process');
  trio.forEach(mapping => {
    str = str.replace(mapping.misrender.regex, mapping.utf8.char);
  });
  duo.forEach(mapping => {
    str = str.replace(mapping.misrender.regex, mapping.utf8.char);
  });
  solo.forEach(mapping => {
    str = str.replace(mapping.misrender.regex, mapping.utf8.char);
  });
  return str;
};

export { hex, txt };