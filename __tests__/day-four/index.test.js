const { findMatches } = require('../../day-four/index')

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

test('Valid matches are found', () => {
  expect(findMatches(input)).toBe(18)
})

test('Invalid matches are not found', () => {
  expect(findMatches('CHAKDOFUJLL')).toBe(0)
})
