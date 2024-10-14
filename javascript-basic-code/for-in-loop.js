// For in loop

for(key in Object){
    // code to run for each key in the object
}

const person = {name:"gopal", age:21, city:"Tirunelveli"}

for (let key in person){
    console.log(key + ":" + person[key]);
}

const object = {work:"nothing", internet: "whatsapps"};

for(let key in object){
    console.log(key + ":" + object[key]);
}