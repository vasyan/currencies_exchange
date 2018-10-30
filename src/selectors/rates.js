export const selectRates = state => state.collections.rates

// Free plan provides only USD rates
export const selectMainCurrency = () => 'USD'
