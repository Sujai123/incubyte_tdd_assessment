const {add} = require('../src/assessment_1.js');

describe('#add', () => {
  describe('when the input is empty', () => {
    it('should return 0', () => {
      expect(add('')).toBe(0);
    });
  })

  describe('when the input is a single number', () => {
    it('should return the number itself', () => {
      expect(add('5')).toBe(5);
    });
  })

  describe('when the input is a list of numbers', () => {
    it('should return the sum of the numbers', () => {
      expect(add('1,2,3')).toBe(6);
    });
  })

})