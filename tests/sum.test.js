const { sum } = require("../src/utils/helpers")

let values = [
  [1, 2, 3],
  [2, 3, 5],
  [3, 4, 7],
]

describe("Sum Values Correctly", () => {
  test.each(values)("sum(%i, %i) = %i", (a, b, expected) => {
    expect(sum(a, b)).toBe(expected)
  })
})
