import {
  selectRates,
  selectMainCurrency,
  selectIsInitialFetched
} from './rates'

describe('Rates selector', () => {
  describe('selectRates', () => {
    const ratesCollection = {}
    const mockState = {
      collections: { rates: ratesCollection }
    }

    it('should select rates collection', () => {
      const selected = selectRates(mockState)

      expect(selected).toBe(ratesCollection)
    })
  })

  describe('selectMainCurrency', () => {
    it('should return USD as main currency', () => {
      expect(selectMainCurrency()).toBe('USD')
    })
  })

  describe('selectIsInitialFetched', () => {
    it('should return initial fetch mark', () => {
      expect(
        selectIsInitialFetched({
          collections: { rates: { isInitialFetched: true } }
        })
      ).toBe(true)
      expect(
        selectIsInitialFetched({
          collections: { rates: { isInitialFetched: false } }
        })
      ).toBe(false)
    })
  })
})
