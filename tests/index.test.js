import Utfu from '../src/index.js'
import mappings from '../src/mappings'

const utfu = new Utfu()

mappings.forEach(mapping => {
  const str = mapping.misrender
  test(`replace ${mapping.misrender} with ${mapping.char}`, () => {
    expect(utfu.hex(str)).toBe(mapping.char)
  })

  test(`replace ${mapping.misrender} with ${mapping.char}`, () => {
    expect(utfu.txt(str)).toBe(mapping.char)
  })
})
