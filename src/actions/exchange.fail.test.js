import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { getRates } from './exchange'

jest.mock('selectors/app', () => ({
  selectIsOnLoading: jest.fn().mockImplementation(() => false)
}))

jest.mock('api/index', () => {
  return {
    getRates: jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => reject())
    })
  }
})

const middlewares = [thunk]
const store = configureMockStore(middlewares)()

describe('Exchange actions', () => {
  describe('getRates', () => {
    it('should dispatch fail on fetching problems', async () => {
      await store.dispatch(getRates(false))

      const expectedActions = store.getActions()

      expect(expectedActions.length).toBe(2)
      expect(expectedActions).toContainEqual({
        type: 'rates/GET_RATES_START'
      })
      expect(expectedActions).toContainEqual({
        type: 'rates/GET_RATES_FAIL'
      })
    })
  })
})
