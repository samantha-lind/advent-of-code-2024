const fs = require('fs')
const path = require('path')
const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')

let validRows = 0

// Helper function to check if a sequence is valid
function isValidSequence(row) {
  const isIncreasing = row[0] < row[1]

  for (let i = 0; i < row.length - 1; i++) {
    const diff = Math.abs(row[i] - row[i + 1])
    if (
      (isIncreasing && row[i] > row[i + 1]) ||
      (!isIncreasing && row[i] < row[i + 1]) ||
      diff < 1 ||
      diff > 3
    ) {
      return false
    }
  }
  return true
}

function checkRow(row) {
  // Check if the original sequence is valid
  if (isValidSequence(row)) {
    return true
  }

  // Try removing one number at a time and check if it makes the sequence valid
  for (let i = 0; i < row.length; i++) {
    const newRow = [...row.slice(0, i), ...row.slice(i + 1)]
    if (isValidSequence(newRow)) {
      return true
    }
  }

  return false
}

// Check each row
for (const row of input.split('\n')) {
  const numbers = row.split(' ').map(Number)
  if (checkRow(numbers)) {
    validRows++
  }
}

console.log(validRows)

module.exports = { isValidSequence, checkRow }