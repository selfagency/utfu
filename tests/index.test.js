import { hex, txt } from '../src/index.js'
import { solo, duo, trio } from '../src/mappings'

trio.forEach(mapping => {
  const str = mapping.misrender.chars
  test(`replace ${str} with ${mapping.utf8.char}`, () => {
    expect(txt(str)).toBe(mapping.utf8.char)
  })

  test(`replace ${str} with ${mapping.utf8.hex}`, () => {
    expect(hex(str)).toBe(mapping.utf8.hex)
  })
})

duo.forEach(mapping => {
  const str = mapping.misrender.chars
  test(`replace ${str} with ${mapping.utf8.char}`, () => {
    expect(txt(str)).toBe(mapping.utf8.char)
  })

  test(`replace ${str} with ${mapping.utf8.hex}`, () => {
    expect(hex(str)).toBe(mapping.utf8.hex)
  })
})
