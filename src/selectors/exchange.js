import { createSelector } from 'reselect'
import { selectRates, selectMainCurrency } from './rates'
import multiply from 'utils/multiply'

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

    let rate = 1 / ratesToMainCurrency.currencyFrom

    return rate
  }
)

export const selectOutput = createSelector(
  [selectRate, selectAmount, selectCurrencyTo],
  (rate, amount = 0, currency) => {
    if (!rate) {
      return null
    }

    return String(multiply(rate, amount)).replace(/(\d+\.\d{4,4})(\d+)$/, '$1')
  }
)
