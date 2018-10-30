export const AMOUNT_INPUT = 'exchange/AMOUNT_INPUT'
export const FROM_CURRENCE_CHANGE = 'exchange/FROM_CURRENCE_CHANGE'
export const TO_CURRENCE_CHANGE = 'exchange/TO_CURRENCE_CHANGE'
export const CHANGE_CURRENCY_FROM = 'exchange/CHANGE_CURRENCY_FROM'
export const CHANGE_CURRENCY_TO = 'exchange/CHANGE_CURRENCY_TO'

const CURRENCIES = ['USD', 'EUR', 'GBP']

const defaultState = {
  currencyFrom: CURRENCIES[0],
  currencyTo: CURRENCIES[1],
  amount: ''
}

function getNextCurrencyByDirection(value, occupied, direction) {
  let index = CURRENCIES.indexOf(value) + direction
  const length = CURRENCIES.length - 1

  if (index < 0) {
    index = length
  } else if (index > length) {
    index = 0
  }

  if (CURRENCIES[index] === occupied) {
    return getNextCurrencyByDirection(CURRENCIES[index], occupied, direction)
  }

  return CURRENCIES[index]
}

export default function exchange(state = defaultState, { type, payload }) {
  switch (type) {
    case AMOUNT_INPUT:
      return {
        ...state,
        amount: payload
      }

    case CHANGE_CURRENCY_FROM:
      return {
        ...state,
        currencyFrom: getNextCurrencyByDirection(
          state.currencyFrom,
          state.currencyTo,
          payload
        )
      }

    case CHANGE_CURRENCY_TO:
      return {
        ...state,
        currencyTo: getNextCurrencyByDirection(
          state.currencyTo,
          state.currencyFrom,
          payload
        )
      }

    default:
      return state
  }
}
