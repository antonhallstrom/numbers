const floorTilesCalculator = require('./floor-tiles-calculator')

describe('floorTilesCalculator', () => {
  it ('returns total cost and total tiles', () => {
    // arrange
    const tile = {
      width: 10,
      height: 10,
      unit: 'cm',
      price: 2,
    }
    const floorPlan = {
      width: 5,
      height: 5,
      unit: 'm'
    }

    // act
    const result = floorTilesCalculator(tile, floorPlan)

    // assert
    expect(result.cost).toBe(5000)
    expect(result.tiles).toBe(2500)
  })
})
