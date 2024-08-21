const name="sahil" // another way -> const name='sahil'
const repoCount=40
console.log(`my name is ${name} and my repoCount is ${repoCount}`);        // modern way using ${} and backticks.

const Name=new String('sahil-bhandari')                         // creating a string in the form of object
console.log(Name[0]);
console.log(Name.__proto__);                      // prototype of this string -> object

console.log(Name.toUpperCase());            // Original string doesnot change as string are immutable in javascript
console.log(Name.charAt(2));                    // object
console.log(name.charAt(2));                    // variable
console.log(Name.indexOf('s'));

const newStr=Name.substring(0,5)        // arguements -> starting index and ending index { ending index is not included }
console.log(newStr);

const anotherStr=Name.slice(-4,-1)        // Slice from the fourth-last character to the second-last character
 // end index will not included
 // similar to .substring but we can give negative values as well .

console.log(anotherStr);                //  negative value print the string from lastindex;



const newStrOne="   sahil-hello-okay  "
console.log(newStrOne);
console.log(newStrOne.trimStart());    // trim function removes all the leading spaces.
console.log(newStrOne.trimEnd());        // trim function removes all the trailing spaces.

console.log(newStrOne.trim());      // trim function removes all the leading and trailing spaces from the string


const url="https://sahil40#bhandari.-com-okay"
console.log(url.replace("40#","-"))       //  replace function -> replace a substring to another substring

console.log(url.includes("sahil"))     // include function -> if string contains then true otherwise false

console.log(url.split("-"))         // spit function -> splits the strings on the basis of separator for eg. "-"