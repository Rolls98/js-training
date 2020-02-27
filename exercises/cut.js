'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

 function cutFirst(str){
     var arr = str.split("");
    arr.splice(0, 2);
     return arr.join("");
 }
function cutLast(str) {
    var arr = str.split("");
   arr.splice(-2, 2)
    return arr.join("");
}

function cutFirstLast(str) {
    return cutFirst(cutLast(str));
}
//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirst("bonjour"), "njour")
assert.strictEqual(cutLast("bonsoir"),"bonso")
assert.strictEqual(cutFirstLast("coooooool"), "ooooo")
//assert.fail('You must write your own tests')
// End of tests */
