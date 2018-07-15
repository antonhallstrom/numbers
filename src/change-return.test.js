const { changeReturn, greedyMakeChange } = require('./change-return')

describe('greedyMakeChange', () => {
  it('returns coin needed for the given amount', () => {
    // arrange
    const denominations = [25, 12, 5, 1]
    const amount = 16

    // act
    const change = greedyMakeChange(amount, denominations)

    // assert
    expect(change).toEqual([12, 1, 1, 1, 1])
  })
})

describe('changeReturn', () => {
  it('returns minimum coin needed for the given amount', () => {
    // arrange
    const denominations = [25, 12, 5, 1]
    const cost = 16
    const amount = 32

    // act
    const change = changeReturn(cost, amount, denominations)

    // assert
    expect(change).toEqual([5, 5, 5, 1])
  })
})
