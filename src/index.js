import he from 'he'
import win from 'windows-1252'

import mappings from './mappings.js'

// error msg
const err = new Error('utfu requires a string to process')

// check if string
const notStr = str => {
  return typeof str !== 'string'
}

// parser
const runMap = (str, m, html) => {
  if (notStr(str)) throw err

  str = win.decode(win.encode(str))

  for (let map of mappings) {
    str = str.replace(map.misrender.regex, html ? he.encode(map.utf8[m]) : map.utf8[m])
  }

  return str
}

// hex code replacement
const hex = str => {
  return runMap(str, 'hex')
}

// html replacement
const htx = str => {
  return runMap(str, 'chars', true)
}

// text replacement
const txt = str => {
  return runMap(str, 'chars')
}

export { hex, htx, txt }
