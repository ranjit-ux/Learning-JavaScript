console.log("one");
let hello=function(){
    console.log("Hello");
}
console.log("two");
setTimeout(hello,5000); //5s=5000ms

console.log("three");
setTimeout(() => {
    console.log("hello wordl");
},6000);

console.log("four");