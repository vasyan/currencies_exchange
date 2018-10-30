import reducer from './rates'

describe('Rates reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('should change currency for exchange to', () => {
    expect(
      reducer(undefined, {
        type: 'rates/GET_RATES_SUCCESS',
        payload: { base: 'FOO', rates: { BAR: 42 } }
      })
    ).toMatchSnapshot()
  })
})
