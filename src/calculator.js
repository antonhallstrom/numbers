const initialState = {
  previous: '',
  current: '',
  operation: null,
}

class Calculator {
  constructor() {
    this.state = {
      current: '',
      previous: '',
      operation: null
    }
    this.setState = this.setState.bind(this)
    this.result = this.result.bind(this)
    this.selectOperator = this.selectOperator.bind(this)
    this.clear = this.clear.bind(this)
    this.latest = this.latest.bind(this)
    this.changeSign = this.changeSign.bind(this)
    this.toPercent = this.toPercent.bind(this)
    this.add = this.add.bind(this)
    this.subtract = this.subtract.bind(this)
    this.multiply = this.multiply.bind(this)
    this.divide = this.divide.bind(this)
  }

  setState(nextState) {
    return Object.assign(this.state, nextState)
  }

  latest() {
    return this.state.operation ? {
      key: 'previous',
      value: this.state.previous
    } : {
      key: 'current',
      value: this.state.current
    }
  }

  clear() {
    return this.state.operation ? this.setState({ previous: '', operation: null }) : this.setState({ current: '' })
  }

  insert(entry) {
    if (this.state.operation) {
      return this.setState({ previous: `${this.state.previous}${entry}` })
    }
    return this.setState({ current: `${this.state.current}${entry}` })
  }

  result() {
    this.setState({
      previous:  this.state.operation(parseFloat(this.state.previous), parseFloat(this.state.current)),
      current: initialState.current,
      operation: initialState.operation
    })

    return this.state.previous
  }

  selectOperator(operation) {
    if (this.state.operation) {
      return this.result()
    }

    return this.setState({ operation })
  }

  changeSign() {
   const entry = this.latest()
   const number = parseFloat(entry.value)

   if (number) {
    if (Math.sign(number) === 0) return

     if (Math.sign(number) === 1) {
       return this.setState({ [entry.key]: -entry.value })
     }

     if (Math.sign(number) === -1) {
      return this.setState({ [entry.key]: Math.abs(entry.value) })
     }
   }
  }

  decimalPoint() {
    const entry = this.latest()
    const number = parseFloat(entry.value)

    if (number >= 0 && number % 1 === 0) {
      return this.setState({ [entry.key]: `${entry.value}.` })
    }
  }

  toPercent() {
    const entry = this.latest()
    const number = parseFloat(entry.value)

    if (number) {
      return this.setState({ [entry.key]: entry.value * 0.01 })
    }
  }

  add(augend, addend) {
    return augend + addend
  }

  subtract(minuend, subtrahend) {
    return minuend - subtrahend
  }

  multiply(multiplicand, multiplier) {
    return multiplicand * multiplier
  }

  divide(dividend, divisor) {
    return dividend / divisor
  }
}

module.exports = Calculator
