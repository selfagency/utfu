import he from 'he'

import { htx } from '../src/index.js'
import mappings from '../src/mappings'

mappings.forEach(mapping => {
  const str = mapping.misrender.chars
  const html = he.encode(mapping.utf8.chars)

  test(`htx: replace ${str} with ${html}`, () => {
    expect(htx(str)).toBe(html)
  })
})
