
let chai = require('chai');

const assert = require('assert');describe('Simple Math Test', () => {
    it('should return 3', () => {
           assert.equal(2 + 1, 3);
       });
    it('should return 12', () => {
           assert.equal(4 * 3, 12);
       });
   });