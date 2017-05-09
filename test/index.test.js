const assert = require('assert');
const myModule = require('../index');

describe('Example module', function() {
    it('should return -1 when the value is not present', function() {
        assert.equal(-1, [1,2,3,4].indexOf(4));
    });
});