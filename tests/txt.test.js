import { txt } from '../src/index.js'
import mappings from '../src/mappings.js'

mappings.forEach(mapping => {
  const str = mapping.misrender.chars

  test(`txt: replace ${str} with ${mapping.utf8.chars}`, () => {
    expect(txt(str)).toBe(mapping.utf8.chars)
  })
})
