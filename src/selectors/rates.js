export const selectRates = state => state.collections.rates

export const selectHasError = state => selectRates(state).hasError
export const selectIsOnFetch = state => selectRates(state).isOnFetch
export const selectIsInitialFetched = state =>
  selectRates(state).isInitialFetched

// Free plan provides only USD rates
export const selectMainCurrency = () => 'USD'
