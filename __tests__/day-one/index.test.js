const { similarityScore } = require('../../day-one/index')

test('similarityScore function calculates the similarity score', () => {
  expect(similarityScore([1, 2, 3], [4, 5, 6])).toBe(0)
  expect(similarityScore([10, 20, 30], [10, 20, 30])).toBe(60)
})
