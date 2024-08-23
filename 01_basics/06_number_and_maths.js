const score =400
console.log(score);

const balance=new Number(400.8966)// we explicity define the type of variable i.e number although javascript is dynamically typed language
console.log(balance);

console.log(balance.toString().length);        // converting number into string
console.log(balance.toFixed(3))            // toFixed function -> precision upto 2 decimal places

console.log(balance.toPrecision(3))    // toPrecision -> it gives us precised value up to n number; 1<= n <=21

const amount=3000000
console.log(amount.toLocaleString())      // it includes commas to number as per US standard 
console.log(amount.toLocaleString('en-IN'))      // it includes commas to number as per Indian standard 

const maxi=Number.MAX_VALUE                     // assigning number's max value;
const mini=Number.MIN_VALUE                  // assigning number's min value;
console.log(maxi,mini);


// *******************************        Maths        *********************************//   
   
console.log(Math)                // it is an object
console.log(Math.abs(-4))     // negatives values into positive;

console.log(Math.round(3.4))    // gives rounded values
console.log(Math.ceil(3.2))          //  gives nearest greatest value
console.log(Math.floor(2.3))         // gives nearest lowest value
console.log(Math.max(3,2,3,1))
console.log(Math.min(3,2,4,2))
console.log(Math.random())         // gives random value 0 to 1(exclusive)
console.log((Math.random()*10) + 1 )    // gives random value from 1 to 11  includes decimal numbers;
console.log(Math.floor((Math.random()*10)+1))         // gives random value from 1 to 11  excludes decimal numbers;


// Math.random() -> (inclusive) 0 to 1 (exclusive)
// Math.random()*6  ->(inclusive)0 to 6 (exclusive)                    
// Math.random()*6 + 1     ->  (inclusive)1 to 7(exclusive)
const min=10
const max=20
console.log(Math.floor((Math.random()*(max-min+1))+ min ))       // generates value from (inclusive) 10 to 20 (exclusive)



