import utfu from '../src/index.js'
import mappings from '../src/mappings'

mappings.forEach(mapping => {
  const str = mapping.misrender
  test(`replace ${mapping.misrender} with ${mapping.char}`, () => {
    expect(utfu.hex(str)).toBe(mapping.char)
  })

  test(`replace ${mapping.misrender} with ${mapping.char}`, () => {
    expect(utfu.txt(str)).toBe(mapping.char)
  })
})
