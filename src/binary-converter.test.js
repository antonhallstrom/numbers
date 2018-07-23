const { binaryToDecimal, decimalToBinary } = require('./binary-converter')

describe('binaryConverter', () => {
  it('converts decimal to binary', () => {
    // arrange
    const decimal = 2

    // act
    const converted = decimalToBinary(decimal)

    // assert
    expect(converted).toEqual(10)
  })

  it('converts decimal to binary', () => {
    // arrange
    const binary = 10

    // act
    const converted = binaryToDecimal(binary)

    // assert
    expect(converted).toEqual(2)
  })
})
