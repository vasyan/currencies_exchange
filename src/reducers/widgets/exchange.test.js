import reducer from './exchange'

describe('Exchange reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('should change currency for exchange', () => {
    expect(
      reducer(undefined, { type: 'exchange/CHANGE_CURRENCY_FROM', payload: 1 })
    ).toMatchSnapshot()
    expect(
      reducer(undefined, { type: 'exchange/CHANGE_CURRENCY_FROM', payload: -1 })
    ).toMatchSnapshot()
  })

  it('should change currency for exchange to', () => {
    expect(
      reducer(undefined, { type: 'exchange/CHANGE_CURRENCY_TO', payload: 1 })
    ).toMatchSnapshot()
    expect(
      reducer(undefined, { type: 'exchange/CHANGE_CURRENCY_TO', payload: -1 })
    ).toMatchSnapshot()
  })
})
