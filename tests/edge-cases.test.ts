import { describe, test, expect } from 'vitest'
import { hex, htx, txt } from '../src/index'

describe('edge cases', () => {
  test('functions throw when input is not a string', () => {
    const badValues: any[] = [null, undefined, 123, {}, []]

    for (const v of badValues) {
      expect(() => (hex as any)(v)).toThrow('utfu requires a string to process')
      expect(() => (htx as any)(v)).toThrow('utfu requires a string to process')
      expect(() => (txt as any)(v)).toThrow('utfu requires a string to process')
    }
  })

  test('ASCII-only strings are unchanged', () => {
    const s = 'Hello, world! 12345'
    expect(hex(s)).toBe(s)
    expect(htx(s)).toBe(s)
    expect(txt(s)).toBe(s)
  })

  test('multiple occurrences are all replaced', () => {
    const s = 'â€™ â€™ â€™'
    expect(txt(s)).toBe('’ ’ ’')
  })
})
