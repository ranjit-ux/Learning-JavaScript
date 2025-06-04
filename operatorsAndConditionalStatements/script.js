/*
operators are used to perform operations
*/
//Arithmetic operator
console.log("Arithmetic Operator");
const a=5;
const b=2;

let A=5;
let B=2;
console.log(a+b); //7 
console.log(a-b); //3
console.log(a*b); //10
console.log(a/b); //2.5

console.log(a%b); //1 //Modulus->Remainder after dividing

console.log(a**b); //25 // Exponential

console.log("Increment");
console.log(A++); //increment
console.log(A);
console.log(++A);

console.log("Decrement");
console.log(B--); // decrement
console.log(B);
console.log(--B);

//assignmnet operator
console.log("Assignment Operator");

console.log(A+=4); //a=a+4
console.log(A-=4);
console.log(A*=4);
console.log(A/=4);
console.log(A**=4);

//comparison operator
console.log("Comparison Operator");

let x=5;
let y=2;

//== -> equal to
//=== -> equal to and type
//!= -> not equal to
//!== -> not equal to and type
//> , >= , < , <=

console.log("x==y",x==y);
console.log("x>y",x>y);

let X=5;
let Y="5";

console.log("X==Y",X==Y);
console.log("X===Y",X===Y);

//logical operators
console.log("Logical Operator");

/*
&& -> Logical AND
|| -> Logical OR
! -> Logical NOT
*/