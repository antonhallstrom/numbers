function isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

const unitTable = {
  cm: 1 / 100,
  m: 1,
}

function unitConverter(from, to, measurement) {
  if (unitTable[from] < unitTable[to]) {
    return measurement / 100
  } else {
    return measurement * 100
  }
}

/**
 * Returns the total cost of cover a floor plan of width and height
 * @param {Object} tile Tile
 * @param {number} tile.width Width
 * @param {number} tile.height Height
 * @param {number} tile.price Price
 * @param {number} tile.unit Unit
 * @param {Object} floorPlan Floor plan
 * @param {number} floorPlan.width Width
 * @param {number} floorPlan.height Height
 * @param {number} floorPlan.unit Unit
 * @returns {Object} result Result
 * @param {number} result.cost Total cost
 * @param {number} result.tiles Total number of tiles
 */
function floorTilesCalculator(tile, floorPlan) {
  if (!isObject(tile) && !isObject(floorPlan)) {
    return
  }

  const costPerTile = tile.price
  const areaPerTile = tile.width * tile.height
  const floorPlanWidth = unitConverter(floorPlan.unit, tile.unit, floorPlan.width)
  const floorPlanHeight = unitConverter(floorPlan.unit, tile.unit, floorPlan.height)
  const floorPlanArea = floorPlanWidth * floorPlanHeight
  const numberOfTiles = floorPlanArea / areaPerTile

  return {
    cost: numberOfTiles * tile.price,
    tiles: numberOfTiles
  }
}

module.exports = floorTilesCalculator
