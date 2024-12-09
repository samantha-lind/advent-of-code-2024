const { calculateTotal, mul } = require('../../day-three/index')

test('mul function multiplies two numbers', () => {
  expect(mul(44, 46)).toBe(2024)
  expect(mul(123, 4)).toBe(492)
})

test('valid mul instructions are calculated', () => {
  expect(calculateTotal('do()mul(44,46)don\'t()')).toBe(2024)
  expect(calculateTotal('do()mul(123,4)mul(123,4)don\'t()')).toBe(984)
})

test('invalid mul instructions are ignored', () => {
  expect(calculateTotal('do()mul(4*, mul(6,9!, ?(12,34), or mul ( 2 , 4 ) do nothing.don\'t()')).toBe(0)
  expect(calculateTotal('do()mul(123,4)?(12,34)mul( 123, 4)don\'t()')).toBe(492)
})

test('mul instructions within don\'t() are ignored', () => {
  expect(calculateTotal('don\'t()mul(123,4)?(12,34)mul( 123, 4)')).toBe(0)
  expect(calculateTotal('don\'t()mul(123,4)?(12,34)mul( 123, 4)do()mul(123,4)don\'t()')).toBe(492)
})

test('mul function throws TypeError for non-number inputs', () => {
  expect(() => mul('a', 'b')).toThrow(TypeError)
  expect(() => mul(1, 'b')).toThrow(TypeError)
  expect(() => mul('1', 2)).toThrow(TypeError)
})
