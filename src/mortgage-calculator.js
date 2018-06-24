
// TODO: Implement Continually interval.
const intervalTable = {
  monthly: 12,
  weekly: 52,
  daily: 365,
}


/**
 * Return months left of amortization
 * @param {number} i Monthly intrest rate
 * @param {number} a Principal
 * @param {number} p Monthly Payment
 * @returns {number} ~ number of payments left
 */
function monthsLeftOfAmortization(i, a, p) {
  return - Math.log(1 - (i * a) / p) / Math.log(1 + i)
}


function continousInterval(p, r, t) {
  return p * Math.pow(Math.E, (r / 100) * t)
}

function monthlyPayments(p, r, n) {
  return p * (r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)))
}

/**
 * Returns total payment at a given interval of a mortgage
 * @param {number} principal Principal.
 * @param {number} interestRate Interest rate.
 * @param {number} term Term.
 * @param {string} interval Interval.
 * @returns {Object} result Object.
 * @param {number} result.payment Interval payment
 * @param {number} result.interestRate Intrest rate.
 * @param {number} result.amortizationCompleted Amortization completed.
 */
function mortgageCalculator(principal, interestRate, term, interval, payments = null) {
  const n = term * intervalTable[interval]
  const r = (interestRate / 100) / intervalTable[interval]
  const p = Number(monthlyPayments(principal, r, n).toFixed(2))
  const c = monthsLeftOfAmortization(r, principal, payments ? payments : p)

  return {
    payment: p,
    interestRate: Number(r.toFixed(4)),
    amortizationCompleted: Math.round(c) / intervalTable[interval],
  }
}

module.exports = mortgageCalculator
