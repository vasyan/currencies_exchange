import { selectShowError, selectIsOnLoading } from './app'

describe('App selector', () => {
  describe('selectShowError', () => {
    const getSelected = params => {
      return selectShowError.resultFunc.apply(null, params)
    }

    it('should return true on initial fetch rates error', () => {
      expect(getSelected([false, true, false])).toBe(true)
    })
  })

  describe('selectIsOnLoading', () => {
    const getSelected = params => {
      return selectIsOnLoading.resultFunc.apply(null, params)
    }

    it('should return true on initial fetch rates', () => {
      expect(getSelected([false, true])).toBe(true)
    })
  })
})
