const { checkRules, sumMiddle, findCorrectPages, correctPages } = require('../../day-five/index')

const input = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`

// Split the rules and pages
let [rules, pages] = input.split('\n\n').map(x => x.split("\n"))

// Convert the pages and rules to arrays of numbers
pages = pages.map(page => page.split(',').map(Number))
rules = rules.map(rule => rule.split('|').map(Number))

test('Rules are found', () => {
  expect(pages).toEqual(
    [[75, 47, 61, 53, 29], [97, 61, 53, 29, 13], [75, 29, 13], [75, 97, 47, 61, 53], [61, 13, 29], [97, 13, 75, 29, 47]]
  )
})

test('Each rule is checked to see whether the numbers in the rule are present in the pages list and if they are in the correct order', () => {
  console.log(rules[0], pages[0])
  expect(checkRules(rules[0], pages[0])).toEqual([true])
  expect(checkRules(rules[0], pages[2])).toEqual([true])
  expect(checkRules(rules[18], pages[5])).toEqual([false])
})

test('Sum of middle numbers of correct pages', () => {
  expect(sumMiddle(pages)).toEqual(278)
})
