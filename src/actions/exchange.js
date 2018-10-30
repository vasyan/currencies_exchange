import Api from 'api'
import {
  AMOUNT_INPUT,
  CHANGE_CURRENCY_FROM,
  CHANGE_CURRENCY_TO
} from 'reducers/widgets/exchange'
import { GET_RATES_START, GET_RATES_SUCCESS } from 'reducers/collections/rates'
import precisionDecimals from 'utils/precisionDecimals'
import randomiseRates from 'utils/randomiseRates'

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

  if (input.match(/\.$/)) {
    return input
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

// rates prodvided with hourly updates. so it's boring
// for better representability mutate data with tiny random value
export function getRates() {
  return dispatch => {
    dispatch({
      type: GET_RATES_START
    })

    return Api.getRates().then(data => {
      dispatch({
        type: GET_RATES_SUCCESS,
        payload: randomiseRates(data)
      })
    })
  }
}
