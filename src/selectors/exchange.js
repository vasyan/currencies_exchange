import { createSelector } from 'reselect'
import { selectRates, selectMainCurrency } from './rates'
import multiply from 'utils/multiply'
import precisionDecimals from 'utils/precisionDecimals'

const selectExchange = state => state.widgets.exchange

export const selectCurrencyFrom = state => selectExchange(state).currencyFrom
export const selectCurrencyTo = state => selectExchange(state).currencyTo
export const selectInput = state => selectExchange(state).input
export const selectOutput = state => selectExchange(state).output

const selectRatesToMainCurrency = createSelector(
  [selectRates, selectMainCurrency, selectExchange],
  (rates, mainCurrency, { currencyFrom, currencyTo }) => {
    if (!rates[mainCurrency]) {
      return null
    }

    return {
      currencyFrom:
        currencyFrom === mainCurrency ? 1 : rates[mainCurrency][currencyFrom],
      currencyTo:
        currencyTo === mainCurrency ? 1 : rates[mainCurrency][currencyTo]
    }
  }
)

export const selectRate = createSelector(
  [selectRatesToMainCurrency],
  ratesToMainCurrency => {
    if (!ratesToMainCurrency) {
      return null
    }

    if (ratesToMainCurrency.currencyFrom === ratesToMainCurrency.currencyTo) {
      return 1
    }

    const rate = multiply(
      1 / ratesToMainCurrency.currencyFrom,
      ratesToMainCurrency.currencyTo
    )

    return rate
  }
)

export const selectHumanReadableRate = createSelector(
  [selectRate],
  rate => {
    if (!rate) {
      return null
    }

    return String(precisionDecimals(rate, 2))
  }
)

const TYPE_INPUT = 'input'
const TYPE_OUTPUT = 'output'

export const makeSelectAmount = type =>
  createSelector(
    [selectRate, selectInput, selectOutput],
    (rate, input, output) => {
      if (!rate) {
        return null
      }

      if (input === null && output === null) {
        return '0'
      }

      if (type === TYPE_OUTPUT && output === null) {
        return String(precisionDecimals(multiply(rate, input), 2))
      }

      if (type === TYPE_OUTPUT && output !== null) {
        return String(output)
      }

      if (type === TYPE_INPUT && input === null) {
        return String(precisionDecimals(output / rate, 2))
      }

      if (type === TYPE_INPUT && input !== null) {
        return String(input)
      }
    }
  )

export const selectAmountInput = makeSelectAmount(TYPE_INPUT)
export const selectAmountOutput = makeSelectAmount(TYPE_OUTPUT)
