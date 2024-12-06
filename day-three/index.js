const fs = require('fs')
const path = require('path')
const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')

function calculateTotal(input) {
  let total = 0
  const regex = /mul\((\d+),(\d+)\)/g
  
  const matches = [...input.matchAll(regex)]
  
  matches.forEach(match => {
    const [_, a, b] = match // Destructure the match array
    total += mul(parseInt(a, 10), parseInt(b, 10))
  })
  
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