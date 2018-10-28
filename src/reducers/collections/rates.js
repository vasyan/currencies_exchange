export const GET_RATE_START = 'rates/GET_RATE_START'
export const GET_RATE_SUCCESS = 'rates/GET_RATE_SUCCESS'
export const GET_RATE_FAIL = 'rates/GET_RATE_FAIL'

export default function rates(state = {}, { type, payload }) {
  switch (type) {
    case GET_RATE_SUCCESS:
      return {
        ...state,
        [payload.base]: {
          ...payload.rates
        }
      }

    default:
      return state
  }
}
