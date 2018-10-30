import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  setAmountInput,
  changeCurrencyFrom,
  changeCurrencyTo,
  getRates
} from './exchange'

jest.mock('api/index', () => {
  return {
    getRates: jest.fn().mockImplementation(() => {
      return Promise.resolve({
        rates: {
          EUR: 0.8763,
          GBP: 0.77918,
          USD: 1
        }
      })
    })
  }
})

jest.mock('utils/randomiseRates', () => {
  return jest.fn().mockImplementation(data => data)
})

const middlewares = [thunk]
const store = configureMockStore(middlewares)()

describe('Exchange actions', () => {
  beforeEach(() => {
    store.clearActions()
  })

  describe('setAmountInput', () => {
    it('should dispatch normalized input value', () => {
      expect(store.dispatch(setAmountInput('42.12345'))).toEqual({
        payload: '42.12',
        type: 'exchange/AMOUNT_INPUT'
      })

      expect(setAmountInput('42.1')).toEqual({
        payload: '42.1',
        type: 'exchange/AMOUNT_INPUT'
      })

      expect(setAmountInput('42.')).toEqual({
        payload: '42.',
        type: 'exchange/AMOUNT_INPUT'
      })

      expect(setAmountInput('.')).toEqual({
        payload: '',
        type: 'exchange/AMOUNT_INPUT'
      })
    })
  })

  describe('changeCurrencyFrom', () => {
    it('should dispatch gotten currency code', () => {
      expect(changeCurrencyFrom('FOO')).toEqual({
        payload: 'FOO',
        type: 'exchange/CHANGE_CURRENCY_FROM'
      })
    })
  })

  describe('changeCurrencyTo', () => {
    it('should dispatch gotten currency code', () => {
      expect(changeCurrencyTo('BAR')).toEqual({
        payload: 'BAR',
        type: 'exchange/CHANGE_CURRENCY_TO'
      })
    })
  })

  describe('getRates', () => {
    it('should dispatch start and success', async () => {
      await store.dispatch(getRates())
      const expectedActions = store.getActions()

      expect(expectedActions.length).toBe(2)
      expect(expectedActions).toContainEqual({
        type: 'rates/GET_RATES_START'
      })
      expect(expectedActions).toContainEqual({
        type: 'rates/GET_RATES_SUCCESS',
        payload: {
          rates: {
            EUR: 0.8763,
            GBP: 0.77918,
            USD: 1
          }
        }
      })
    })
  })
})
