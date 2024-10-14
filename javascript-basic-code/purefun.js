//pure function

// let obj = { a:0}

// const pure = (input) => {
//     //does not modify obj
//     let output = input.a +1
//     return output;
// }

// let b = pure(obj);
// console.log(b)

let obj = { x:7}

const pure = (input) => {
    let output = input.x * 7;
    return output;
}

let z = pure(obj);
console.log(z)