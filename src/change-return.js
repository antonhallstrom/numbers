function greedyMakeChange(amount, denominations) {
  let change = []
  let total = 0

  denominations.forEach(coin => {
    while(total + coin <= amount) {
      change.push(coin)
      total += coin
    }
  })
  return change
}

function isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]'
}

function range(from, to) {
  if (!(isNumber(from) && isNumber(to))) return

  let result = []

  for (let i = from; i < to; i++) {
    result.push(i)
  }
  return result
}

function makeChange(coins, amount) {
  let change = []
  let cache = {}
  let numbers = range(1, amount + 1)
  let s = range(1, amount + 1)

  numbers.forEach(n => {
    coins.forEach(c => {

      if (n % c === 0) {
        if (cache[n] && cache[n] > c) {
         return cache[n]
        } else {
          s[n] = c
          cache[n] = c
        }
      }
    })
  })

  for (var i = s.length - 1; i > 0; i) {
    i -= s[i]
    change.push(s[i])
  }
  return change
}

/**
 * Returns the optimal change return of a purchase,
 * on a finite set of denominations.
 * @param {number} cost Cost of purchase
 * @param {number} amount Amount given to pay the purchase
 * @param {Array} denominations Denominations
 */
function changeReturn(cost, amount, denominations) {
 if (amount === 0) {
   return
 }

 if (amount < cost) {
   return 0
 }

 return makeChange(denominations, amount - cost)
}

module.exports = { changeReturn, greedyMakeChange }
