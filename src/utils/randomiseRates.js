import multiply from 'utils/multiply'

export default function randomiseRates(response) {
  const { rates } = response
  const newRates = {}

  Object.keys(response.rates).forEach(key => {
    const factor = Math.random() < 0.5 ? -1 : 1
    const shift = (Math.floor(Math.random() * 5) + 1) / 1000

    newRates[key] = multiply(rates[key], 1 + shift * factor)
  })

  return {
    ...response,
    rates: newRates
  }
}
