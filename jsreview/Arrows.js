// Javascript review

/* 
Let has different scoping than var  
*/
const name = "Max";
let age = 50;

/*
Arrow functions don't define execution context
Normally this keyword is dynamic and can refer to various things depending on context
Arrow function resolves this lexically
Example normal outer function inner arrow function, inner arrow function always uses the same this as outer
 */
const summarizeUser = (userName, userAge) => ('Name is ' + userName + ', age is ' + userAge + '.');

console.log(summarizeUser(name, age))