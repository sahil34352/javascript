// const tinderUser=new Object() // non singleton objects
const tinderUser={}         //  singleton objects
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname: {
        userfullname: {
                firstname:"sahil",
                lastname:"bhandari"
             
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
// const obj3={obj1,obj2}      // merge two objects in one object
// const obj3=Object.assign(obj1,obj2)        // merge both members in one object i.e source here obj2 will get merge in obj2
// console.log(obj3);
// console.log(obj1);

// const obj3=Object.assign({},obj1,obj2)       //  here {} empty objects acts as source so no changes will occur in obj1
// console.log(obj3);
// console.log(obj1);


const obj3={...obj1,...obj2}  // works same as .assign
//console.log(obj3);

const users= [
    {
        id:1,
        email:"xxyz@gmail.com"
    },
    {
        id:1,
        email:"xxyz@gmail.com"
    },
    {
        id:1,
        email:"xxyz@gmail.com"
    }
  
]
console.log(users[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser));          //  creates an array of keys 
console.log(Object.values(tinderUser));       // creates an array of values
console.log(Object.entries(tinderUser));      // converts objects into 2d array [[key,value],[key,value]]         


console.log(tinderUser.hasOwnProperty('isLoggedIn'));          // returns true if key is exist in an object or not 


// *****************         destructuring  of an object  **********************?????????
const course = {
    coursename: "type script",
    price : "999",
    courseInstructor: "sahil"
}
// course.courseInstructor

const {courseInstructor : inst}=course     // destructure of object 
// console.log(courseInstructor);
console.log(inst);
 
      // json format - >  javascript object notation 
      // api uses json format.
// {
//       "name": "sahil",                   
//       "coursename":"js",
//       "price": "free"
// }
