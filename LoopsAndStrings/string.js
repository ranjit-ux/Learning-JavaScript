//Original String is immutable, for doing any change in string JS make new string

//string create
let str="Ranjit";
let str2='Ranjit';

//str length-->str.length;
console.log(str.length);

//str indecies-->str[0], str[1], and so on

/*
Tamplete literats
`this is a template literal`
*/

let specialString=`This is template literal`;
console.log(specialString);

let obj={
    item:"pen",
    price:25.
}

console.log("the cost of",obj.item,"is",obj.price,"rupees");

console.log("with template literal");

console.log(`the cost of ${obj.item} is ${obj.price} rupees`);

/*
string interpolation

`string text ${expression} string text`

*/

/*
string function
->str.toUppercase()
->str.toLowerCase()
->str.trim()  --> to remove whitespaces of starting and end

->str.slice(start,end) --> end is optional and it is non inclusive
->str1.concat(str2)
->str.replace(searchVal,newVal)
->str.charAt(idx)
*/

let strr="WebdevELOpmenT";
let newstr=strr.toUpperCase();
console.log(newstr);
console.log(strr.toLowerCase());

let tempstr="  Ranjit Kumar   Singh    ";
console.log(tempstr.trim());

console.log(strr.slice(3,8));
console.log(strr.slice(5));


let string="social Media"
console.log(string.replace("Media","Life"));