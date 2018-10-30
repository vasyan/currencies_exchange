import precisionDecimals from './precisionDecimals'

describe('Float precision utility', () => {
  it('should convert to number drop digits after pointed symbol', () => {
    expect(precisionDecimals(0.42222, 2)).toBe(0.42)
    expect(precisionDecimals(0.42222, 1)).toBe(0.4)
    expect(precisionDecimals(42, 5)).toBe(42)
    expect(precisionDecimals('42.', 5)).toBe(42)
    expect(precisionDecimals('42.0', 5)).toBe(42.0)
  })
})
