// Higher Order Functions

// map()
// const newArray = array.map(callback(currentValue, index, array));

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
 
console.log(doubled);

// filter()
// const secondArray = array.filter(callback(currentValue, index, array));

const number = [1, 2, 3, 4, 5];
const evens = number.filter(num => num % 2 === 0);

console.log(evens);

const number1 = [1, 2, 3, 4, 5, 6];
const processed = number1.filter(num => num % 2 !== 0).map(num => num * 2);

console.log(processed)