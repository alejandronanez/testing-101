const assert = require('assert');
const myModule = require('../index');

// [1,2,3] => [2, 4, 6]

describe('Example module', function() {
    it('should double the contents of an array', function() {
        const result = myModule.doubleArray([1,2,3]);

        assert.deepEqual(result, [2,4,6]);
    });

    it('should sum 2 numbers', function() {
        const result = myModule.sum(1, 2);

        assert.deepEqual(result, 3);
    });

    it('should subtract 2 numbers', function() {
        const result = myModule.subtract(1, 2);

        assert.deepEqual(result, -1);
    });

    it('should return true if it is an empty character', function() {
        const result = myModule.isEmptyCharacter(' ');
        assert.deepEqual(result, true);
    });

    it('should return false if it is not an empty character', function() {
        const result = myModule.isEmptyCharacter('a');
        assert.deepEqual(result, false);
    });

    it('should return the string reversed without spaces', function() {
        const result = myModule.getStringReversed('A but tuba');

        assert.deepEqual(result, 'abuttuba');
    });

    it('should return the string without spaces', function() {
        const result = myModule.getStringNoSpaces('A but tuba');

        assert.deepEqual(result, 'abuttuba');
    });

    it('should return true if the string is a palindrome', function() {
        const result = myModule.isPalindrome('A but tuba');

        assert.equal(result, true);
    });

    it('should return false if the string is not a palindrome', function() {
        const result = myModule.isPalindrome('el tigre');

        assert.equal(result, false);
    });
});
