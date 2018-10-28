import { createSelector } from 'reselect'
import { selectRates, selectMainCurrency } from './rates'
import multiply from 'utils/multiply'
import precisionDecimals from 'utils/precisionDecimals'

const selectExchange = state => state.widgets.exchange

export const selectCurrencyFrom = state => selectExchange(state).currencyFrom

export const selectCurrencyTo = state => selectExchange(state).currencyTo

export const selectAmount = state => selectExchange(state).amount

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

    const rate = multiply(
      1 / ratesToMainCurrency.currencyFrom,
      ratesToMainCurrency.currencyTo
    )

    return rate
  }
)

export const selectHumanReadableRate = createSelector([selectRate], rate => {
  if (!rate) {
    return null
  }

  return String(precisionDecimals(rate, 4))
})

export const selectOutput = createSelector(
  [selectRate, selectAmount, selectCurrencyTo],
  (rate, amount = 0, currency) => {
    if (!rate) {
      return null
    }

    return String(precisionDecimals(multiply(rate, amount), 4))
  }
)
