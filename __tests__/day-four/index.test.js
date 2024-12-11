const { findMatches } = require('../../day-four/part-one')
const { findPattern, findMasMatches } = require('../../day-four/part-two')
const input = 
`MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`

test('Valid "xmas" matches are found', () => {
  expect(findMatches(input)).toBe(18)
})

test('Invalid "xmas" matches are not found', () => {
  expect(findMatches('CHAKDOFUJLL')).toBe(0)
})

test('Valid "mas"matches are found', () => {
  expect(findMasMatches(input)).toBe(9)
})
