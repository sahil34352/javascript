// var c=200

let a=300
if(true){
    let a =10
    const b=20
    var c=30
   // console.log("inner",a)
}

//console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "sahil"

    function two(){
         const website = "youtube"
        //  console.log(username);
    }
     
    // console.log(website)
   two()
}
 one()

 // ++++++++++++++ interesting +++++++++++++++++
 addone(5)                 // no error in this way of function writing
 function addone(num){
    return num+1
 }
 
 addTwo(5)                  // generate error as calling the function before declaration of the function
const addTwo =  function(num){      
    return num + 2
}
