//Vqriable Rules
//variable name are case sensative
//only letter digit underscore and $ are allowed in naming (not space)
//first character can't be digit
//reserved words cannot be variable names

age =24;
console.log(age);

/*
let/const/var
const is used for declaring
var->can be re-declared -> Global Scope
let->cannot be re-declard but can be updated -> Block Scope (valid only between curly brackets)
cosnt->cannot be re-declared or updated -> Block Scope
*/

// Data Types

/*
Primitive data types -> fixed data types
Number
String
Boolean
Undefined
Null
BigInt
Symbol
*/

let marks = 20; //number
console.log(typeof marks);

let price=100.5;  //number
console.log(typeof price);

let fullname="Ranjit";   //string
console.log(typeof fullname);

let isFollow = true;   //boolean
console.log(typeof isFollow);

/*
 Non-primitive data types -> objects == collection of values
(key,value)
*/

const student={
    fullname: "Ranjit Kumar Singh",
    age:22,
    cgpa:8.05,
    isPass:true,
};
console.log(student);
console.log(typeof student);

console.log(student.fullname);

student["cgpa"]=8.5;
console.log("new CGPA: ",student["cgpa"]);