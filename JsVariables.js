//  let, var and const are user for declare variable in javascript

// 1. Var:=> 
// a:=> var is function scope;
// b:=> in javascript variable declared with var they are fully hoisted with their top of scope, they set to undefined is we use befor intilization.
// c:=> variable declared with var are accessible throughout the function scope.

console.log(a) // undefined
var a = 0;
// 2. Let
// a:=> let is blocked scope
// b: variable declared with the let, only accessible in the block {}.
// c: Variable declared with let they are hoisted but in tempareal dead zone
// d: can not be re-declared

console.log(b) // refrence error
let b = 3

// 3: const
// a:=> let is blocked scope
// b: variable declared with the const, only accessible in the block {}.
// c: Variable declared with let they are hoisted but in tempareal dead zone
// d: can not be re-declared and can not be update;

console.log(c) // refrence error
const c = 20