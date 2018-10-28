import { selectRates, selectMainCurrency } from './rates'

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
    expect(selectMainCurrency()).toBe('USD')
  })
})
