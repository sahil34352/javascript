const numbers=["one","two","three","four"]
const games=["cricket","football","tennis"]
const colors=["white","black","red"]
// numbers.push(games)              // takes whole array as a single element

// console.log(numbers);
// console.log(numbers[4][0]);       // accessing the pushed array

const newArray=numbers.concat(games,colors)              // concatinates two or more arrays and return a new array
console.log(newArray);

const newArr1=[...numbers,...games]                    // Same as concate
console.log(newArr1);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const flattenArray=anotherArray.flat(Infinity)          // flat method  ->   flattens the array into single element array
                                                          // arguements -> depth in terms of 1,2,3,.....    Infinity
console.log(flattenArray);


console.log(Array.isArray("sahil"));            // .isArray() ->  checks whether the given arguement is array or not
const charArray=Array.from("sahil")              // .from()  -> converts arguements into array
const CharArray=Array.from({name:"sahil"})      // passing objects . output - > empty array 
                                    // because we need to define whether we want to create an array from keys or values
console.log(CharArray);

let score1=100
let score2=200
let score3=300
const formedArray=Array.of(score1,score2,score3)      //  .of()  -> returns a new array consists of elements which were given in arguements
