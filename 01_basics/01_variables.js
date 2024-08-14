const account_id=182873
let account_email="sahilbhandari@gmail.com"
var account_type="23324"
account_city="Dehradun"           // it is allowed but it is a bad practice.
let account_state;                // undefined
// account_id =34232   // not allowed because it is a constant and we cannot reassign it.
account_email="hello@gmail.com"          // it is allowed 
console.log(account_email)
/*
Do not use var
because of block scope and fuctional scope
 */
console.table([account_id,account_email,account_type,account_state])   // to print the multiples variables in tabular form