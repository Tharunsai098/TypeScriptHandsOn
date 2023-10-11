//Object
const Address = {
    name : "Tharun",
    age : 23 
};

console.log(Address.name);

// Nested Objects
const Person ={
    id: 1,
    name: "Varun",
    age: 20,
    skils:["java","javascript","typescript"],
    Address:{
        city: "bangalore",
        phonenumber: 9133826423
    }
}
console.log(Person.Address);