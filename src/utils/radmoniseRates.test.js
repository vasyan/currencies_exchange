import randomiseRates from './randomiseRates'

Math.random = jest.fn().mockImplementation(() => 1)

describe('radmoniseRates', () => {
  it('should shift gotten rates to random precision', () => {
    const rates = randomiseRates({
      rates: {
        FOO: 0.5,
        BAR: 42
      }
    })

    expect(rates).toEqual({ rates: { BAR: 42.252, FOO: 0.503 } })
  })
})
