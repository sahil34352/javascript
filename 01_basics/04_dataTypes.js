// primitive datatypes 
// string , number , boolean , BigInt , null , undefined , symbol

// Non primitive datatypes
// arrays, objects,functions, 

// Dynamically typed -> variable's type like int boolean defined at run time
// Stastically typed -> variable's type defined at compile time
// javascript is a dynamically typed language

const st="abc"
const num=12
const isLogged=true
const bigNum=3294329843203284n  // end with 'n' character makes that number into big Number
const temp=null
let unDef;
// symbol 
const sym=Symbol('123');      // symbol is used for uniqueness even if we create two symbol with same value it will treat different
const sym1=Symbol('123');
console.log(sym===sym1);


// Non primitive datatypes - > stored by reference and collections of multipe variables

// Array 

const heroes=["hello","world","no","okay"]
console.log(heroes[0]);

  
// objects   -> everything inside curly braces is considered as one object

let myObj={
  name : "sahilbhandari" ,
  rollno : 24,
}
console.log(myObj.name);

// functions
let myFunction=function(){
    console.log("hello world")
}

myFunction()  

// Return type of all primitive and non primitive datatypes
/*
 Return type of variables in JavaScript

1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/