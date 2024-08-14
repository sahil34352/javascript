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
