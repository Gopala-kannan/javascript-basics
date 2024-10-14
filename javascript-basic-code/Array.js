// Array []
let fruits = ["Apple", "Banana", "Mango"];

// Common Array Methods

// push()

fruits.push("Orange"); // adding methods 
console.log(fruits);

// pop()
fruits.pop(); // remove last one
console.log(fruits);

// unshift()
fruits.unshift("Pineappple"); // add first
console.log(fruits); 

// shift()
fruits.shift();
console.log(fruits); // remove first one

// slice()
let citrus = fruits.slice(1, 2);
console.log(citrus); // show the position

// splice()
fruits.splice(1, 1, "Grapes");
console.log(fruits); // it is use change position and place

// concat()
let moreFurits = ["peach", "Kiwi"];
let allFruits = fruits.concat(moreFurits);
console.log(allFruits); // it adding more elements in the arrays

// indexOf()
let index = fruits.indexOf("Mango");
console.log(index); // it is show  on the position number

// includes()
let hasApple = fruits.includes("Apple");
console.log(hasApple); // true it is tell as ture or false

// join()
let fruitString = fruits.join(",");
console.log(fruitString); // it is show as without array

// reverse()
fruits.reverse();
console.log(fruits); // it is show as reverse 

// sort()
fruits.sort();
console.log(fruits);

// Map()
let numbers = [1, 2, 3];
let doubled = numbers.map(x => x* 2);
console.log(doubled); 

// filter()
let bigNumbers = numbers.filter(x => x > 1);
console.log(bigNumbers);

// reduce()
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);