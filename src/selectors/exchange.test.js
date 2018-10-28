import {
  selectOutput,
  selectRate,
  selectHumanReadableRate,
  selectAmount,
  selectCurrencyFrom,
  selectCurrencyTo
} from './exchange'

describe('Exchange selector', () => {
  describe('selectOutput', () => {
    const mockParams = [1.277774, 42, 'USD']

    const getSelected = (params = mockParams) => {
      return selectOutput.resultFunc.apply(null, params)
    }

    it('should return null if rate is not represend', () => {
      const mockParams = [null, 42, 'USD']
      expect(getSelected(mockParams)).toBe(null)
    })

    it('should leave four digits after point', () => {
      expect(getSelected().split('.')[1].length).toBe(4)
    })

    it('should calculate exchanged amount correctly', () => {
      expect(getSelected()).toBe('53.6665')
    })
  })

  describe('selectRate', () => {
    const mockParams = [
      {
        currencyFrom: 2,
        currencyTo: 0.5
      }
    ]

    it('should calculate rate correctly', () => {
      const selected = selectRate.resultFunc.apply(null, mockParams)

      expect(selected).toBe(0.25)
    })
  })

  describe('selectHumanReadableRate', () => {
    const mockParams = [0.424242]

    it('should leave four digits after point', () => {
      const selected = selectHumanReadableRate.resultFunc.apply(
        null,
        mockParams
      )

      expect(selected.split('.')[1].length).toBe(4)
    })
  })

  describe('selectAmount', () => {
    const mockState = { widgets: { exchange: { amount: '42' } } }

    it('should select amount to exchange ', () => {
      const selected = selectAmount(mockState)

      expect(selected).toBe('42')
    })
  })

  describe('selectCurrencyFrom', () => {
    const mockState = {
      widgets: { exchange: { currencyFrom: '__CURRECY_CODE__' } }
    }

    it('should select currency from exchange', () => {
      const selected = selectCurrencyFrom(mockState)

      expect(selected).toBe('__CURRECY_CODE__')
    })
  })

  describe('selectCurrencyTo', () => {
    const mockState = {
      widgets: { exchange: { currencyTo: '__CURRECY_CODE__' } }
    }

    it('should select currency to exchange', () => {
      const selected = selectCurrencyTo(mockState)

      expect(selected).toBe('__CURRECY_CODE__')
    })
  })
})
