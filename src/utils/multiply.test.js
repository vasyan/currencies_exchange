import multiply from './multiply'

describe('Multiply utility', () => {
  it('should calculate floats correctly', () => {
    expect(multiply(0.1, 0.2)).toBe(0.02)
  })
})
