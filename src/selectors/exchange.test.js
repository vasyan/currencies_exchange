import { selectOutput } from './exchange'

describe('Exchange selector', () => {
  describe('selectOutput', () => {
    const mockParams = [1.277774, 42, 'USD']
    it('should return string', () => {
      const selected = selectOutput.resultFunc.apply(null, mockParams)
      expect(typeof selected == 'string').toBeTruthy()
    })

    it('should return null if rate is falsy', () => {
      const mockParams = [null, 42, 'USD']
      const selected = selectOutput.resultFunc.apply(null, mockParams)
      expect(selected).toBe(null)
    })

    it('should leave four digits after point', () => {
      const selected = selectOutput.resultFunc.apply(null, mockParams)
      expect(selected.split('.')[1].length).toBe(4)
    })

    it('should count amount correctly', () => {
      const selected = selectOutput.resultFunc.apply(null, mockParams)
      expect(selected).toBe('53.6665')
    })
  })
})
