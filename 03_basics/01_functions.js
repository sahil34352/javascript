// function 
function sayMyName(){
    console.log("sahil")
}

// sayMyName()     

function addTwoNumbers(number1,number2){
//   if(typeof number1 == "number" && typeof number2 == "number")
//    console.log(number1+number2);
   let result=number1+number2
    return result
}

const result=addTwoNumbers(3,1);
// console.log("Result: " ,result);


function loginUserMessage(username="hello"){         // if no value passed then "hello" will be used
    if(!username){                              // undefined ->  false    empty string -> false
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in `
}
const name=loginUserMessage("")
console.log(name);

function calculateCartPrice(val1,val2,...num1){          //  rest operator (...)  ->  pass value as an array
   return num1
}
console.log(calculateCartPrice(2,23,4,3,2))

const user={
     username:"sahil",
     price:199
}
function handleObject(anyobject){
  console.log(`Username is ${anyobject.username}  and price is ${anyobject.price}`);
  
}
// handleObject(user)

handleObject({
   username:"sahil",
   price:100 
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
