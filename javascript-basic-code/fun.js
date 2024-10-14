//// impure Function
// let obj = { a: 1 }

// const impure = (input) => {
//     //modifies input.a
//     input.a = input.a + 1
//     return input.a
// }

// let b = impure(obj)
// console.log(obj)
// console.log(b)

// impure function
let obj = {x:2}

const impure = (input) => {
    input.x =input.x * 3
    return input.x;
}

let z = impure(obj)
console.log(z)

