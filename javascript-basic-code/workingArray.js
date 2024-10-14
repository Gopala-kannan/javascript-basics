function sumArray(arr){
    return arr.reduce((acc, num) => acc + num, 0);
}

function maxElement(arr){
    return Math.max(...arr);
}

function removeDuplicates(arr){
    return [...new set(arr)];
}

function flattenArray(arr){
    return arr.flat();
}

// Object 

function mergeObjects(obj1, obj2){
    return { ...obj1, ...obj2};
}

function countProperties(obj){
    return Object.keys(obj).length;
}

function objectToArray(obj){
    return Object.entries(obj);
}

function isEmptyObject(obj){
    return object.keys(obj).length === 0;
}

// Array and Object Combined Practice

function groupBy(arr, key){
    return arr.reduce((acc, obj) => {
        let keyValue = obj[key];
        if(!acc[keyValue]) {
            acc[keyValue] = [];
        }
        acc[keyValue].push(obj);
        return acc;
    },{})
}