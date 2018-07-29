function first(list) {
  return list[0]
}

function last(list) {
  let index = list.length - 1
  return list[index]
}

/**
 * Rearranges a list of items
 * @param {Array} list List of items
 */
function shuffle(list) {
  let indicator = last(list)
  let temp = list.slice(0)
  let shuffled = []

  while(first(temp) !== last(list)) {
    let min = 0
    let max = temp.length - 1
    let idx = Math.min(max, Math.floor(Math.random() * (max - min)) + min)
    let take = temp.splice(idx, 1)
    shuffled.push(take[0])
  }

  let min = 0
  let max = shuffled.length
  let idx = Math.min(max, Math.floor(Math.random() * (max - min)) + min)
  let selection = shuffled.splice(0, idx)

  let ran = Math.min(1, Math.floor(Math.random() * (1 - 0 + 1)) + 0)

  return ran === 1 ? shuffled.concat(last(list)).concat(selection) : selection.concat(last(list)).concat(shuffled)
}

module.exports = shuffle
