export const GET_RATES_START = 'rates/GET_RATES_START'
export const GET_RATES_SUCCESS = 'rates/GET_RATES_SUCCESS'

export default function rates(state = {}, { type, payload }) {
  switch (type) {
    case GET_RATES_SUCCESS:
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
