import mappings from './mappings'

const hex = str => {
  if (typeof str !== 'string') throw new Error('utfu requires a string to process')
  mappings.forEach(mapping => {
    const hex = new RegExp(`${mapping.utf8}`, 'gu')
    str = str.replace(hex, mapping.char)
  })
  return str
}

const txt = str => {
  if (typeof str !== 'string') throw new Error('utfu requires a string to process')
  mappings.forEach(mapping => {
    const text = new RegExp(`${mapping.misrender}`, 'gu')
    str = str.replace(text, mapping.utf8)
  })
  return str
}

export { hex, txt }
