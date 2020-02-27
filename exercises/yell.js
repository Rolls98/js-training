'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

 function yell(str){
     return str.toUpperCase();
 }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(yell.length, 1)
assert.deepStrictEqual(yell('test'), 'TEST')
assert.deepStrictEqual(yell('bonjour'), "BONJOUR")

// assert.fail('You must write your own tests')
// End of tests */
