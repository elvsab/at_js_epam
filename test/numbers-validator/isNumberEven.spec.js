import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import NumbersValidator from '../../app/numbers_validator.js';

  
  describe('NumbersValidator', function() {
    let validator;
  
    // 'beforeEach' is a hook that runs before each test ('it' block) within this 'describe' block.
    // It's usually used for setting up the test environment.
    beforeEach(function () {
      // Instantiates a new NumbersValidator object before each test and assigns it to 'validator'
      validator = new NumbersValidator();
    });
  
    // 'afterEach' is a hook that runs after each test. It is often used for cleanup activities.
    afterEach(function () {
      // Sets the validator variable to null to clean up memory after each test
      validator = null;
    });
  
    it('should return true for even numbers', function() {
      expect(validator.isNumberEven(2)).to.be.true;
    });
  
    it('should return false for odd numbers', function() {
      expect(validator.isNumberEven(3)).to.be.false;
    });
    it('should throw an error if the input is not a number', function() {
      expect(() => validator.isNumberEven('a')).to.throw('[a] is not of type "Number" it is of type "string"');
    });

    it('should return an array of even numbers', function() {
        const array = [1, 2, 3, 4, 5, 6];
        const result = validator.getEvenNumbersFromArray(array);
        expect(result).to.deep.equal([2, 4, 6]);
    });
    it('should throw an error if the input is not an array of numbers', function() {
      expect(() => validator.getEvenNumbersFromArray([1, 'a', 3])).to.throw('[1,a,3] is not an array of "Numbers"');
    });

    it('should throw an error if the input is not an array', function() {
        expect(() => validator.getEvenNumbersFromArray('not an array')).to.throw('[not an array] is not an array of "Numbers"');
    });

    it('should return true if all elements are numbers', function() {
        const array = [1, 2, 3, 4];
        expect(validator.isAllNumbers(array)).to.be.true;
    });

    it('should return false if any element is not a number', function() {
        const array = [1, 'a', 3, 4];
        expect(validator.isAllNumbers(array)).to.be.false;
    });

    it('should throw an error if the input is not an array', function() {
        expect(() => validator.isAllNumbers('not an array')).to.throw('[not an array] is not an array');
    });

    it('should return true if the number is an integer', function() {
        expect(validator.isInteger(2)).to.be.true;
    });

    it('should return false if the number is not an integer', function() {
        expect(validator.isInteger(2.5)).to.be.false;
    });

    it('should throw an error if the input is not a number', function() {
        expect(() => validator.isInteger('a')).to.throw('[a] is not a number');
    });
});
  