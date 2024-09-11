// singleton  ->  objects which will be created with the help of constructor
// Object.create

// object literals
const mySym=Symbol("key1")
const jsUser={
    name: "sahil",
    "full Name":"sahilBhandari",
    age:20,
    [mySym]:"myKey1",                 // Using symbol as key
    location:"dehradun",
    email:"xyz@gmail.com" ,
    isLoggedIn:false,
    LastLoginDays:["Monday","tuesday","wednesday"]
}

// Accessing objects keys and values
console.log(jsUser.name); 
console.log(jsUser["email"]);


// console.log(jsUser."full Name");          not accessible using . operator
console.log(jsUser["full Name"]);           //    accessible using this

console.log(jsUser[mySym]);                // accessing symbol using this

// reassignign values

jsUser.email="sahilbhandari@gmail.com"
console.log(jsUser.email);
//Object.freeze(jsUser)                // you cannot change the value of an object
jsUser.email="safjk"
console.log(jsUser);

jsUser.greeting=function () {
   console.log("hello how are you");
}
jsUser.greeting2=function () {
    console.log("hello how are you",this.name);
 }
console.log(jsUser.greeting);
console.log(jsUser.greeting());

console.log(jsUser.greeting2());


