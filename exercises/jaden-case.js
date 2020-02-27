'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */


 function jadenCase(str){
     var tab = str.split(" ");
     var output = "";
     tab.forEach(function(el){
         var elTab = el.split("");
        elTab[0] =elTab[0].toUpperCase(); 
        output += elTab.join("") + " ";
     })
     var testoutput = output.split("");
     testoutput[testoutput.length-1]="";

     return testoutput.join("");
 }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase("How are you ?"), "How Are You ?")
assert.strictEqual(jadenCase("Hello world"), "Hello World")
assert.strictEqual(jadenCase("String test a test"), "String Test A Test")

// End of tests */
