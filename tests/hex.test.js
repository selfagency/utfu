import { hex } from '../src/index.js'
import mappings from '../src/mappings.js'

mappings.forEach(mapping => {
  const str = mapping.misrender.chars
  test(`hex: replace ${str} with ${mapping.utf8.hex}`, () => {
    expect(hex(str)).toBe(mapping.utf8.hex)
  })
})
