// ************************  Dates ************************ //
let myDate=new Date();   
console.log(myDate.toString());               // day , date ,time int 24 hours format  other datails like time zone
console.log(myDate.toDateString());            // day , date
console.log(myDate.toISOString());               // date , time 
console.log(myDate.toJSON());                    // date, time
console.log(myDate.toLocaleDateString())          // only date
console.log(myDate.toLocaleString());            // date and time
                                
let newDate=new Date(2023,11,23,4,3)           //  year,month ,date ,hour,min               month starts from 0 to 11
console.log(newDate.toLocaleString())

let tempDate=new Date("2023-01-30")           // you can also use  "01-10-2023"
console.log(tempDate.toDateString())
console.log(tempDate.getTime());             // gives you the time in milliseconds from 1 jan 1970 to assigned date


let myTimeStamp= Date.now();                  // in milliseconds
console.log(Math.floor((myTimeStamp)/1000));  // in seconds


let newieDate=new Date();
console.log(newieDate);
console.log(newieDate.getDay());           
console.log(newieDate.getMonth()+1);       //  from 0 to 11


console.log(newieDate.toLocaleString('default',{                            // to locale string takes string(internationalization) and objects as arguements
    weekday:"long" ,         // with the help of this object you can modify date style as per the requirements in a better way
}))