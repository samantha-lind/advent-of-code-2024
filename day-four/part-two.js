const fs = require('fs')
const path = require('path')
const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')

function findPattern(rows, row, col) {
  if (row + 2 >= rows.length || col + 2 >= rows[0].length) return false

  // Left-to-right patterns
  const pattern1 = (
    rows[row][col] === 'M' &&
    rows[row][col + 2] === 'S' &&
    rows[row + 1][col + 1] === 'A' &&
    rows[row + 2][col] === 'M' &&
    rows[row + 2][col + 2] === 'S'
  )

  const pattern2 = (
    rows[row][col] === 'S' &&
    rows[row][col + 2] === 'M' &&
    rows[row + 1][col + 1] === 'A' &&
    rows[row + 2][col] === 'S' &&
    rows[row + 2][col + 2] === 'M'
  )

  const pattern3 = (
    rows[row][col] === 'S' &&
    rows[row][col + 2] === 'S' &&
    rows[row + 1][col + 1] === 'A' &&
    rows[row + 2][col] === 'M' &&
    rows[row + 2][col + 2] === 'M'
  )


  const pattern4 = (
    rows[row][col] === 'M' &&
    rows[row][col + 2] === 'M' &&
    rows[row + 1][col + 1] === 'A' &&
    rows[row + 2][col] === 'S' &&
    rows[row + 2][col + 2] === 'S'
  )

  return pattern1 || pattern2 || pattern3 || pattern4
}

function findMasMatches(input) {
  let matches = 0

  // Convert input to 2D array
  const rows = input.split('\n')
  const height = rows.length
  const width = rows[0].length

  // Check every possible position without skipping
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (findPattern(rows, row, col)) {
        matches++;
      }
    }
  }

  return matches
}

console.log(findMasMatches(input))

module.exports = { findMasMatches }