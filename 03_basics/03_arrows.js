const user = {
    username : "sahil" ,
    price : 999 , 
    welcomeMessage: function() {
         console.log(`${this.username}  ,  welcome to website`);
         console.log(this)
    }
}
// this -> refers to the current context

//  user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//  console.log(this)         // refers to the empty block {}  // for browser it refers to the window
 
 function chai(){
     let username = "sahil"
     console.log(this.username);            // "this" will not work in functions
 }

//  chai();


// const chai = function () {
//     let username="sahil"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "sahil" 
//     console.log(this)
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2                               // explicit return 
// }

// const addTwo = (num1,num2) =>  num1 + num2            // implicit return in arrow function

// const addTwo = (num1,num2) => (num1 + num2)           //     if we use () then no return keyword is used
                                                      //     if we use {} then we have to use return keyword
const addTwo= (num1,num2) => ({username : "sahil"})    //  returning object

console.log(addTwo(3,4))

const myArray = [2,5,3,7,8]
// myArray.forEach(function () {})
// myArray.forEach(() =>{} )
// myArray.forEach(()=>())      
    