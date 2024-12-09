const fs = require('fs')
const path = require('path')
const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')

// Split the input into two lists
const [list1, list2] = input
    .trim()
    .split('\n')
    .reduce((arrays, line) => {
        // Split each line by multiple spaces/tabs and convert to numbers
        const [num1, num2] = line.split(/\s+/).map(Number)
        arrays[0].push(num1)
        arrays[1].push(num2)
        return arrays
    }, [[], []])

// Sort the lists
const sortedList1 = [...list1].sort((a, b) => a - b)
const sortedList2 = [...list2].sort((a, b) => a - b)

// Calculate the running total of absolute differences
const runningTotal = sortedList1.reduce((total, num1, index) => {
  const difference = Math.abs(num1 - sortedList2[index])
  return total + difference
}, 0)

// Calculate the similarity score
let similarityScore = 0

for (let i = 0; i < list1.length; i++) {
  let numberOfMatches = 0

  for (let j = 0; j < list2.length; j++) {
    if (list1[i] === list2[j]) {
      numberOfMatches += 1
    }
  }
  similarityScore += (list1[i] * numberOfMatches)
}

console.log(runningTotal)
console.log(similarityScore)

module.exports = { similarityScore }
