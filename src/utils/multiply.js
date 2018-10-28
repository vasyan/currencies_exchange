function countFractionDigits(number = 0) {
  const fractionDigits = number.toString().split('.')[1]
  return fractionDigits ? fractionDigits.length : 0
}

function floatMultiply(a, b) {
  const getFactor = number => Math.pow(10, countFractionDigits(number))
  const factor = Math.max(getFactor(a), getFactor(b))
  return (Math.round(a * factor) * Math.round(b * factor)) / (factor * factor)
}

function isNumeric(value) {
  return !isNaN(parseInt(value)) && isFinite(value)
}

function isFloat(value) {
  return isNumeric(value) && !Number.isInteger(value)
}

export default function multiply(a, b) {
  return isFloat(a) || isFloat(b) ? floatMultiply(a, b) : a * b
}
