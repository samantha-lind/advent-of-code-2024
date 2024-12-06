const { calculateTotal, mul } = require('../../day-three/index')

test('valid mul instructions are calculated', () => {
  expect(calculateTotal('mul(44,46)')).toBe(2024)
  expect(calculateTotal('mul(123,4)mul(123,4)')).toBe(984)
})

test('invalid mul instructions are ignored', () => {
  expect(calculateTotal('mul(4*, mul(6,9!, ?(12,34), or mul ( 2 , 4 ) do nothing.')).toBe(0)
  expect(calculateTotal('mul(123,4)?(12,34)mul( 123, 4)')).toBe(492)
})

test('mul function throws TypeError for non-number inputs', () => {
  expect(() => mul('a', 'b')).toThrow(TypeError)
  expect(() => mul(1, 'b')).toThrow(TypeError)
  expect(() => mul('1', 2)).toThrow(TypeError)
})
