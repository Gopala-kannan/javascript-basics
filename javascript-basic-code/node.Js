// variable (var, const, let)
// data types (string, number, Boolean)

var name = "gopal"; // string
var age  = 21 ; // number
var hasHobby = true; // Boolean

function displayUser(userName, userAge, userHasHobby){ //function
    return 'userName is ' + userName + '\n' + 'age is ' + userAge + '\n' + 'has hobby? ' + userHasHobby;
}

console.log(displayUser(name, age, hasHobby));

// Arow function

 function sum(a,b){
    return a + b;
 }
// or
const sum = (a, b) => { // arow function
return a * b;
}
// or 
const sum = (x, y) => x - y;
console.log(sum(3, 2));


// Object {}
const person = {
    name: 'gopal', // it is a key pair value
    age: 21 ,
    greet: function(){ //arow function will not work 
        console.log("Hello " + this.name);
    }
}
person.greet();

// Arrray[]
const hobbies = ['reading', 'writing', 'playing'];

for(const hobby of hobbies){    //for method
console.log(hobby);         
}

console.log(hobbies.map((hobby)=>{  //map(function)
    return 'Hobby: ' + hobby
}));

