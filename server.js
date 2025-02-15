console.log("hello world")

// const os = require('os')
// import os from 'os' //TODO: this is ES6 syntax avode to use this method or 
// import {add, sub, mul, div} from './math' //TODO: this method will work.
const path = require('path')

//const math = require('./math') //TODO: this on one method to import
const { add, mul, sub, div } = require('./math') //TODO: this on destructuring  method to import


// console.log(math.add(1, 2))
// console.log(math.mul(1, 3))
// console.log(math.sub(1, 5))
// console.log(math.div(1, 8)) //TODO: this are one of method

console.log(add(1, 2)) 
console.log(mul(1, 3))
console.log(sub(1, 5))
console.log(div(1, 8)) //TODO: this are one of method
