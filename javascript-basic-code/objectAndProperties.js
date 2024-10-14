// Objects and Properties

// Defining an Object

let person = {
    firstName: "Gopala",
    lastName: "Kannan",
    age:30,
    job: "Developer"
};

// Accessing Object Properties
// Dot Notation
console.log(person.firstName);
console.log(person.age);

// Bracket Notation
console.log(person["lastName"]); 
console.log(person["job"]);

let propertyName = "age";
console.log(person[propertyName]);

// Modifying Object Properties 

person.age = 31;
person["job"] = "Full Stack Web Developer";

// Adding New Properties

person.country = "Tamil Nadu";
person["city"] = "Tirunelveli";

// Deleting Properties
delete person.age;
console.log(person.age);

// checking for Properties

console.log("firstName" in person);
console.log(person.hasOwnProperty("age"));

// Looping Through Object Properties

for(let key in person){
    console.log(key + ": " + person[key]);
}

// Object Methods

let person1 = {
    firstName:"Gopala",
    lastName: "Kannan",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(person1.fullName());