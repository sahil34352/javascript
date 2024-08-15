let score="45"
console.log(typeof(score));
let convert_to_num=Number(score)       // type cast to number datatype from string 
 // if string consist of a number as well as characters then it will print NaN 
 // NaN is not a number
console.log(typeof(convert_to_num));  
console.log(convert_to_num);
//  for null
let a=null
let num=Number(a)
console.log(typeof(num))
console.log(num);

/* conversion to Number */
// "45" -> 45
// "45abc" -> NaN
// true -> 1 , false -> 0

/* conversion to Boolean */
 // 1 -> true , 0 -> false
 // "" -> false
 // "sahil" -> true;

 let some_number=22
 let string_number=String(some_number)
 console.log(string_number)
 console.log(typeof(string_number))

 // **************  operations ************** //
 let value=3
 let negValue=-value
 console.log(negValue);
 
//  console.log(2+2);
//  console.log(2-2);
//  console.log(2*2);
//  console.log(2**3);
//  console.log(2/3);
//  console.log(2%3);

// concatinations of strings

let str1="hello"
let str2=" world"
let str3=str1+str2
console.log(str3);

   // associtivity left to right

// console.log("1"+2);     // "1" and 2 both are different datatypes
// console.log("2"+1);   //  here as well
// console.log("1"+ 2 +2 );     // here compiler goes from left to right first print 1 then 2 then 2
// console.log(2 + 2 + "1")   // here compiler takes two numbers from left side and add them

// do not write this type of code cause it only leads to unreadibility 
// and also difficult to understand

console.log(+true);   // here + operator is applied to the boolean so it will be treated as 1
// console.log(true+) not valid
console.log(+"");      // when addition operator is applied to an empty string then it converts it into 0

let num1,num2,num3
num1=num2=num3=2+2   // readibility decreases

let gameCounter=100
gameCounter++;      // postfix operator -> increases the value after usuage
++gameCounter;      //prefix operator  -> increases the value before usuage
console.log(gameCounter);

// comparison operators

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);   // "2" converts into 2 number

// console.log(null>0);        // here null converts into 0
// console.log(null==0);       // confusing
// console.log(null>=0);       // here null converts into 0

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

// console.log("2"===2)     // === checks value as well as datatype


// avoid these kind of comparisons stated above







 

 
