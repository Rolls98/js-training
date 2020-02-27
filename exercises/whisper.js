'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

 function whisper(str){
     return str.toLowerCase();
 }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(whisper.length, 1)
assert.deepStrictEqual(whisper('tESt'), 'test')
assert.deepStrictEqual(whisper('BoNjoUr'), "bonjour")

//assert.fail('You must write your own tests')
// End of tests */
