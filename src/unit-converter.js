function fahrenheitToCelsius(f) {
  return (f - 32) / 1.8
}

function celsiusToFahrenheit(c) {
  return c * 1.8 + 32
}

const conversionFactors = {
  temperature: {
    metric: {
      name: 'Celsius',
      abbreviation: 'c',
    },
    imperial: {
      name: 'Fahrenheit',
      abbreviation: 'f'
    }
  }
}

for (var property1 in object1) {
  string1 = string1 + object1[property1];
}


const Converter = function (number) {
  this.number = number
}

Converter.prototype.from = function (from) {

}

Converter.prototype.to = function (to) {

}

Converter.prototype.getUnit = function (unit) {

}

const convert = function (value) {
  return new Converter(value)
}

// convert(0).from('c').to('f')

function prop(x, obj) {
  return obj[x]
}

function map(fn, functor) {
  return Object.keys(functor).reduce((acc, key) => {
   acc[key] = fn(functor[key])
   return acc
  }, {})
 }

 map(prop('a'), {a: 1, b: 2})

 function prop(x, obj) {
  return obj[x]
}
 const curriedProp = (a) => ( (b) => prop(a, b) )


 propEq('abbreviation', unit)
