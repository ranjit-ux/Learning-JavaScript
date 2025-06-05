/*
for(initialize,stopping,condition){

}
*/
console.log("For Loop");
for(let i=1;i<=5;i++){
    console.log(i);
}

console.log("While Loop");
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

console.log("Do While Loop");
let j=1;
do{
    console.log(j);
    j++;
}while(j<=5);

console.log("For-of Loop");
//for-of is used for loop in strings and arrays
/*
for(let val of strVar){

}
*/
let str="RanjitkumarSingh";
for(let i of str){  //iterator(i)-->characters
    console.log(i);
}

console.log("For-in Loop");
//for-in Loop used for objects
/*
for(let key in objVar){

}
*/

let gameNum=25;
let userNum = prompt("Guess the number:");
while(gameNum!=userNum){
    userNum = prompt("you entered wrong number, guess again: ");
}
console.log("Congratulations, you entered the right value");