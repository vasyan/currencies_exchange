import config from 'config'

// openexchangerates free plan has a limitation for 1000 request per month
// So you need to pass your API key in GET param
const API_KEY = (window.location.search.match(/api_key=([a-z,0-9]+)/) || [])[1]

const getRates = config.mockGetRatesApi
  ? () =>
      Promise.resolve({
        base: 'USD',
        rates: {
          EUR: 0.8763,
          GBP: 0.77918,
          USD: 1
        }
      })
  : () => fetch(`${config.getRatesUri}?app_id=${API_KEY}&symbols=USD,EUR,GBP`)

export default { getRates }
