import multiply from 'utils/multiply'
import Api from 'api'
import {
  AMOUNT_INPUT,
  CHANGE_CURRENCY_FROM,
  CHANGE_CURRENCY_TO
} from 'reducers/widgets/exchange'
import { GET_RATE_START, GET_RATE_SUCCESS } from 'reducers/collections/rates'
import precisionDecimals from 'utils/precisionDecimals'

function normalizeAmount(value) {
  const input = value
    .replace(/,/g, '.')
    .replace(/[^\d,.]/g, '')
    .replace(/[.]/g, function(match, offset, all) {
      return match === '.' ? (all.indexOf('.') === offset ? '.' : '') : ''
    })

  if (input === '.') {
    return ''
  }

  return String(precisionDecimals(input, 2))
}

export function setAmountInput(value) {
  return {
    type: AMOUNT_INPUT,
    payload: normalizeAmount(value)
  }
}

export function changeCurrencyFrom(direction) {
  return {
    type: CHANGE_CURRENCY_FROM,
    payload: direction
  }
}

export function changeCurrencyTo(direction) {
  return {
    type: CHANGE_CURRENCY_TO,
    payload: direction
  }
}

function randomiseRates(response) {
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

// rates prodvided with hourly updates. so it's boring
// for better representability mutate data with tiny random value
export function getRates() {
  return dispatch => {
    dispatch({
      type: GET_RATE_START
    })

    Api.getRates().then(data => {
      dispatch({
        type: GET_RATE_SUCCESS,
        payload: randomiseRates(data)
      })
    })
  }
}
