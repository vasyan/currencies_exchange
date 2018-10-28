import Api from '../api'
import {
  AMOUNT_INPUT,
  CHANGE_CURRENCY_FROM,
  CHANGE_CURRENCY_TO
} from 'reducers/widgets/exchange'
import { GET_RATE_START, GET_RATE_SUCCESS } from 'reducers/collections/rates'

function normalizeAmount(value) {
  return value
    .replace(/,/g, '.')
    .replace(/[^\d,.]/g, '')
    .replace(/[.]/g, function(match, offset, all) {
      return match === '.' ? (all.indexOf('.') === offset ? '.' : '') : ''
    })
    .replace(/(\d+\.\d{2,2})(\d+)$/, '$1')
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

export function getRates() {
  return (dispatch, getState) => {
    dispatch({
      type: GET_RATE_START
    })

    Api.getRates().then(data => {
      dispatch({
        type: GET_RATE_SUCCESS,
        payload: data
      })
    })
  }
}
