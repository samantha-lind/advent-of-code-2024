const { isValidSequence, checkRow } = require('../../day-two/index')

test('isValidSequence validates whether a row is valid or not', () => {
  expect(checkRow([1, 2, 3, 4, 5], true)).toBe(true)
  expect(checkRow([1, 2, 3, 10, 9, 8], true)).toBe(false)
  expect(checkRow([1, 2, 3, 2, 4, 5], true)).toBe(true)
})

