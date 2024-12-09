const fs = require('fs')
const path = require('path')
const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')

function calculateTotal(input) {
  let total = 0
  let currentIndex = 0
  const regex = /mul\((\d+),(\d+)\)/g

  // Insert do() at the first index and a don't() at the end
  input = "do()" + input + "don't()"

  while (currentIndex < input.length) {
    // Find the next do()
    const doIndex = input.indexOf("do()", currentIndex)
    if (doIndex === -1) break;

    // Find the first don't()
    const dontIndex = input.indexOf("don't()", doIndex)
    if (dontIndex === -1) break

    // Extract everything from do() to don't()
    const chunk = input.substring(doIndex + 4, dontIndex)
    
    // Only find mul matches within this chunk
    const matches = [...chunk.matchAll(regex)]
    matches.forEach(match => {
      const [_, a, b] = match
      total += mul(parseInt(a, 10), parseInt(b, 10))
    })

    // Start looking for the next chunk after this don't()
    currentIndex = dontIndex
  }

  return total
}

function mul(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('mul function expects two numbers')
  }
  return a * b
}

const total = calculateTotal(input)
console.log(total)

module.exports = { calculateTotal, mul }
