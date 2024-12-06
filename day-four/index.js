const fs = require('fs')
const path = require('path')
const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')

function findMatches(input) {
  const words = ['XMAS', 'SAMX']
  let matches = 0

  // Convert input to 2D array
  const rows = input.split('\n')
  const height = rows.length
  const width = rows[0].length

  // Check if string contains any of the words
  const checkString = (str) => {
    if (!str || str.length < 4) return 0
    const numberOfMatches = str.match(new RegExp(`(?=(${words.join("|")}))`, "gi")) || []
    return numberOfMatches.length
  }
  
  // Send horizontal strings to checkString
  for (let row = 0; row < height; row++) {
    matches += checkString(rows[row])
  }

  // Send vertical strings to checkString
  for (let col = 0; col < width; col++) {
    const verticalString = rows.map(row => row[col]).join('')
    matches += checkString(verticalString)
  }

  // Check diagonals (top-left to bottom-right)
  for (let row = 0; row <= height - 4; row++) {
    for (let col = 0; col <= width - 4; col++) {
      let diagonalStr = ''
      for (let i = 0; i < 4; i++) {
        diagonalStr += rows[row + i][col + i]
      }
      matches += checkString(diagonalStr)
    }
  }

  // Check diagonals (top-right to bottom-left)
  for (let row = 0; row <= height - 4; row++) {
    for (let col = width - 1; col >= 3; col--) {
      let diagonalStr = ''
      for (let i = 0; i < 4; i++) {
        diagonalStr += rows[row + i][col - i]
      }
      matches += checkString(diagonalStr)
    }
  }

  return matches
}

console.log(findMatches(input))

module.exports = { findMatches }