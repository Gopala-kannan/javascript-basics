// Function Declaration

function greet(name){
    return `Hello, ${name}`;
}

// Function Expression

const greet = function(name){
    return `Hello, ${name}`;
};

//Arrow Function

const greet = (name) => `Hello, ${name}`;
//or
const greet = (name) => {
    return `Hello, ${name}`; 
}

//Parameters and Arguments

function greet(name = 'guest'){
    return `Hello, ${name}`;
}

function sum(...numbers){ // Arguments ...args
    return numbers.reduce((a,b) => a+b);
}

// Ruturn Values

function add(a,b){
    return a + b;
}
const result = add(5, 3);

// Function Scope

(function(){
    console.log("Hello world!");
})();

// Callback Functions

function sayHello(name, callback){
    console.lof(`Hello, ${name}`);
    callback();
}

function afterGreeting(){
    console.log("This runs after greeting.");
}

sayHello("Alice", afterGreeting);

// Higher-Order Functions

function multiplyBy(factor){
    return function(number){
        return number * factor;
    }
}

const double = multiplyBy(2);
console.log(double(5));

//Recursion 

function factorial(n){
    if(n <= 1) return1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

//Closures

function outer(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const increment = outer();
console.log(increment());
