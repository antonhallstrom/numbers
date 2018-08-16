const Calculator = require('./calculator')

describe('calculator', () => {
  it('stores entries', () => {
    // arrange
    const calculator = new Calculator()
    const entry = 1

    // act
    calculator.insert(entry)
    const inserted = calculator.latest()

    // assert
    expect(parseInt(inserted.value)).toEqual(1)
  })

  it('changes sign of entry', () => {
    // arrange
    const calculator = new Calculator()
    const entry = -1

    // act
    calculator.insert(entry)
    calculator.changeSign()
    const result = calculator.latest()

    // assert
    expect(parseFloat(result.value)).toEqual(1)
  })

  it('converts entry to percentage', () => {
    // arrange
    const calculator = new Calculator()
    const entry = 100

    // act
    calculator.insert(entry)
    calculator.toPercent()
    const result = calculator.latest()

    // assert
    expect(result.value).toEqual(1)
  })

  it('performs addition', () => {
    // arrange
    const calculator = new Calculator()
    const entryA = 1
    const entryB = 2

    // act
    calculator.insert(entryA)
    calculator.selectOperator(calculator.add)
    calculator.insert(entryB)

    const sum = calculator.result()

    // assert
    expect(sum).toEqual(3)
  })

  it('performs subtraction', () => {
    // arrange
    const calculator = new Calculator()
    const entryA = 3
    const entryB = 3

    // act
    calculator.insert(entryA)
    calculator.selectOperator(calculator.subtract)
    calculator.insert(entryB)
    const difference = calculator.result()

    // assert
    expect(difference).toEqual(0)
  })

  it('performs multiplication', () => {
    // arrange
    const calculator = new Calculator()
    const entryA = 3
    const entryB = 3

    // act
    calculator.insert(entryA)
    calculator.selectOperator(calculator.multiply)
    calculator.insert(entryB)
    const product = calculator.result()

    // assert
    expect(product).toEqual(9)
  })

  it('performs division', () => {
    // arrange
    const calculator = new Calculator()
    const entryA = 2
    const entryB = 10

    // act
    calculator.insert(entryA)
    calculator.selectOperator(calculator.divide)
    calculator.insert(entryB)
    const quotient = calculator.result()

    // assert
    expect(quotient).toEqual(5)
  })

  it('clears last entry', () => {
    // arrange
    const calculator = new Calculator()
    calculator.insert(1)
    calculator.selectOperator(calculator.add)
    calculator.insert(2)

    // act
    calculator.clear()
    const entry = calculator.latest()

    // assert
    expect(parseFloat(entry.value)).toBe(1)
  })

  it('clears all entries', () => {
    // arrange
    const calculator = new Calculator()
    calculator.insert(1)
    calculator.selectOperator(calculator.add)
    calculator.insert(2)

    // act
    calculator.clear()
    calculator.clear()
    const entry = calculator.latest()

    // assert
    expect(entry.value).toBe('')
  })
})
