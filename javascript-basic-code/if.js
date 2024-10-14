// If-else Statement

if(condition){
    //code to run if the condition is true
}
else{
    // code is run for the condition is false
}

let age = 21;

if(age >= 18){
    console.log("adult")
}
else{
    console.log("minor")
}

// if, else if, else

let score = 65;

if(score >= 80){
    console.log("grade: A")
}
else if(score >= 70){
    console.log("grade: B")
}
else{
    console.log("greade: F")
}

// Switch Statement

switch(expression){
    case value1:
        //code to run if expression === value1
        break;
    case value2:
        // the code to run if expression == value2
        break;
    default:
        // code to run if none of the cases match
}

let day = 3;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("unkown day")
}