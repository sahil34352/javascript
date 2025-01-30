//  Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB Connected`)
// }
// chai()
 
(function chai(){                              // named iife
   console.log(`DB CONNECTED`)                // immediately invoked function
})();              // semicolon is required

( (name) => {                          // iife
   console.log(`DB IS CONNECTED ${name}`)
})('sahil');                               // parameters passed