const API_KEY = process.env.API_KEY

export default {
  getRates() {
    return Promise.resolve({
      disclaimer: 'Usage subject to terms: https://openexchangerates.org/terms',
      license: 'https://openexchangerates.org/license',
      timestamp: 1540637928,
      base: 'USD',
      rates: {
        EUR: 0.8763,
        GBP: 0.77918,
        USD: 1
      }
    })
    // return fetch(
    //   `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}&symbols=USD,EUR,GBP`
    // )
  }
}
