export const GET_RATES_START = 'rates/GET_RATES_START'
export const GET_RATES_SUCCESS = 'rates/GET_RATES_SUCCESS'
export const GET_RATES_FAIL = 'rates/GET_RATES_FAIL'

const initialState = {
  hasError: false,
  isOnFetch: true,
  isInitialFetched: false
}

export default function rates(state = initialState, { type, payload }) {
  switch (type) {
    case GET_RATES_START:
      return {
        ...state,
        hasError: false,
        isOnFetch: true
      }

    case GET_RATES_SUCCESS:
      return {
        ...state,
        hasError: false,
        isOnFetch: false,
        isInitialFetched: true,
        [payload.base]: {
          ...payload.rates
        }
      }

    case GET_RATES_FAIL:
      return {
        ...state,
        hasError: true,
        isOnFetch: false
      }

    default:
      return state
  }
}
