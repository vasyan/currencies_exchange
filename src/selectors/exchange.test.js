import {
  selectAmountInput,
  selectAmountOutput,
  selectRate,
  selectHumanReadableRate,
  selectCurrencyFrom,
  selectCurrencyTo
} from './exchange'

describe('Exchange selector', () => {
  describe('selectAmountOutput', () => {
    const mockParams = [1.277774, 42, null]

    const getSelected = (params = mockParams) => {
      return selectAmountOutput.resultFunc.apply(null, params)
    }

    it('should return 0 if input and output not represented', () => {
      expect(getSelected([1, null, null])).toBe('0')
    })

    it('should return current value if input is not represend', () => {
      expect(getSelected([0.5, null, 42])).toBe('42')
    })

    it('should return calculated value if output is null and input is represend', () => {
      expect(getSelected([0.6, 42, null])).toBe('25.2')
    })

    it('should return null if rate is not represend', () => {
      expect(getSelected([null, 42, null])).toBe(null)
    })

    it('should calculate exchanged amount correctly', () => {
      expect(getSelected([1.277774, 42, null])).toBe('53.66')
    })
  })

  describe('selectAmountInput', () => {
    const getSelected = params => {
      return selectAmountInput.resultFunc.apply(null, params)
    }

    it('should return 0 if input and output not represented', () => {
      expect(getSelected([1, null, null])).toBe('0')
    })

    it('should return current value if output is not represend', () => {
      expect(getSelected([0.5, 42, null])).toBe('42')
    })

    it('should return calculated value if input is null and output is represend', () => {
      expect(getSelected([0.8, null, 42])).toBe('52.5')
    })

    it('should return null if rate is not represend', () => {
      expect(getSelected([null, 42, null])).toBe(null)
    })

    it('should calculate exchanged amount correctly', () => {
      expect(getSelected([1.4, null, 42])).toBe('30')
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

    it('should leave two digits after point', () => {
      const selected = selectHumanReadableRate.resultFunc.apply(
        null,
        mockParams
      )

      expect(selected.split('.')[1].length).toBe(2)
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
