'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

function keepFirst(str) {
   
    return str.split("").splice(0, 2).join("");
}
function keepLast(str) {
    return str.split("").splice(-2, 2).join("");
}

function keepFirstLast(str) {
    return keepFirst(str) + keepLast(str);
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirst("abcdef"), "ab")
assert.strictEqual(keepLast("dsdgaadb"), "db")
assert.strictEqual(keepFirstLast("coooooool"), "cool")

// End of tests */
