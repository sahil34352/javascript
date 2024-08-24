// ********************** Array ************************ //
// const myArr=[0,3,false,'sahil']    arrays consists of many datatypes

const myArr=[0,1,2,3,4,5,6]
// const myArr2=new Array(1,2,3,4)
console.log(myArr[0]);

// Array methods
myArr.push(9);                 // add to end
console.log(myArr)

myArr.pop();                    // pop from end
console.log(myArr)

myArr.unshift(9)                // add to start
console.log(myArr)

myArr.shift()                  // remove first element
console.log(myArr)

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr=myArr.join()     //   converted into string

console.log(myArr)             
console.log(typeof(newArr))

// slice , splice

console.log("A",myArr);

const myn1=myArr.slice(1,3)                // index 3 is not included
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)                // index 3 is also included and the elements gets also removed from original array
console.log(myn2);
console.log(myArr)


