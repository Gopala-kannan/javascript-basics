//JavaScript Functions
// function transform(fn, arr){
//     let result = [];
//     for (let el of arr){
//         result.push(fn(el));
//     }
//     return result;
// }

// console.log(transform(x => x* 2, [1, 2, 3, 4]));

function transform(fn, arr){
    let result = [];
    for(let el of arr){
        result.push(fn(el));
    }
    return result;
}
console.log(transform(a => a + 3, [1, 2, 3, 4, 5])) // another way console.log([1,2,3,4].map(x => x*2))