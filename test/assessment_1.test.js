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

  describe('when the input is a list of numbers separated by commas', () => {
    it('should return the sum of the numbers', () => {
      expect(add('1,2,3')).toBe(6);
    });

    it('should return the sum of the numbers', () => {
      expect(add('1,2,,3')).toBe(6);
    });
  })

  describe('when the input is a list of numbers separated by new lines', () => {
    it('should return the sum of the numbers', () => {
      expect(add('1\n2,3')).toBe(6);
    });
    it('should return the sum of the numbers with different delimiters', () => {
      expect(add('1\n2,3\n4')).toBe(10);
    });
    it('should return the sum of the numbers with different delimiters and empty lines', () => {
      expect(add('1\n\n2,3\n4')).toBe(10);
    });
  })

  describe('when the input is a list of numbers separated by other delimiter', () => {
    it('should return the sum of the numbers', () => {
      expect(add('//;\n1;2')).toBe(3);
      expect(add('//#\n1#2#3#4')).toBe(10);
    });
  })

  describe('when negative number is provided', () => {
    it('throws Error', () => {
      expect(() => add('1,-2')).toThrow('negative numbers not allowed -2');
    })
  })

})