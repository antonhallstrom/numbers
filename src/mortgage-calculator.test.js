const mortgageCalculator = require('./mortgage-calculator')

describe('mortgageCalculator', () => {
  it('calculates the monthly payments of a fixed term mortgage of a given interest rate', () => {
    // arrange
    const mortgage = 375000
    const term = 30
    const interestRate = 5.5
    const interval = 'monthly'

    // act
    const result = mortgageCalculator(mortgage, interestRate, term, interval)

    // assert
    expect(result.payment).toEqual(2129.21)
    expect(result.interestRate).toEqual(0.0046)
    expect(result.amortizationCompleted).toEqual(30)
  })
  it('returns the total time it takes to pay off the loan', () => {
    // arrange
    const mortgage = 167371
    const term = 30
    const interestRate = 6
    const interval = 'monthly'
    const amortizationCompleted = 20
    const payment = 1199

    // act
    const result = mortgageCalculator(mortgage, interestRate, term, interval, payment)

    // assert
    expect(result.amortizationCompleted).toEqual(amortizationCompleted)
  })
})
