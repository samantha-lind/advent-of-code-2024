const fs = require('fs')
const path = require('path')
const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
const correctPages = []
const incorrectPages = []

// Split the rules and pages
let [rules, pages] = input.split('\n\n').map(x => x.split("\n"))

// Convert the pages and rules to arrays of numbers
pages = pages.map(page => page.split(',').map(Number))
rules = rules.map(rule => rule.split('|').map(Number))

// Check if each page contains the numbers in the rule in the correct order
function checkRules(rule, page) {
  const [index1, index2] = [page.indexOf(rule[0]), page.indexOf(rule[1])]
  if (index1 !== -1 && index2 !== -1 && index1 > index2) {
    correctPage(rule, page)
    return [false]
  }
  return [true]
}

// Correct pages are pages that contain the numbers in the rule in the incorrect order
function correctPage(rule, page) {
  const [index2] = [page.indexOf(rule[1])]
  // Move number2 to the end of the array
  page.splice(index2, 1)
  page.push(rule[1])

  if (rules.every(rule => checkRules(rule, page)[0])) incorrectPages.push(page)
}

// Push correct pages to correctPages array
for (let i = 0; i < pages.length; i++) {
  if (rules.every(rule => checkRules(rule, pages[i])[0])) correctPages.push(pages[i])
}

// Sum the middle number of each array
function sumMiddle(array) {
  return array.reduce((sum, element) => sum + element[Math.floor(element.length / 2)], 0)
}

// Execute the function
console.log(`Part one: ${sumMiddle(correctPages)}`)
console.log(`Part two: ${sumMiddle(incorrectPages)}`)

module.exports = { checkRules, sumMiddle }