import he from 'he'

import { hex, htx, txt } from '../src/index.js'
import mappings from '../src/mappings.js'

mappings.forEach(mapping => {
  const str = mapping.misrender.chars
  test(`hex: replace ${str} with ${mapping.utf8.hex}`, () => {
    expect(hex(str)).toBe(mapping.utf8.hex)
  })
})

mappings.forEach(mapping => {
  const str = mapping.misrender.chars
  const html = he.encode(mapping.utf8.chars)

  test(`htx: replace ${str} with ${html}`, () => {
    expect(htx(str)).toBe(html)
  })
})

mappings.forEach(mapping => {
  const str = mapping.misrender.chars

  test(`txt: replace ${str} with ${mapping.utf8.chars}`, () => {
    expect(txt(str)).toBe(mapping.utf8.chars)
  })
})
