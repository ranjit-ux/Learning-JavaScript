function sayMyName(){
    console.log("Ranjit");
}
sayMyName();

//arrow function

/*
const functionName = (parameter 1, parameter 2,...) => {

    //do work

}
*/

const sum = (a,b) => {
    console.log(a+b);
}

sum(5,7);

const avg = (a,b,c) => {
    console.log(`average: ${(a+b+c)/3}`);
}
avg(2,5,8);

const printHellow = () => {
    console.log("Hello World");
}


function findVowels(str){
    let count=0;
    for(const char of str){
        if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'
            ||char=='A'||char=='E'||char=='I'||char=='O'||char=='U'
        ){
            count+=1;
        }
    }
    return count;
}

const total = findVowels("webdevelopment");
console.log(total);

const totalcount =(str) =>{
    let count=0;
    for(const char of str){
        if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'
            ||char=='A'||char=='E'||char=='I'||char=='O'||char=='U'
        ){
            count+=1;
        }
    }
    return count;
}

console.log(totalcount("webdevelopment"));


//for each
console.log("forEach");

// let arr = [1,2,3,4,5,6,7,8,9];
// arr.forEach(function printVal(val,idx,arr){  //every item of arr is passed as value in function named printVal
//     console.log(val)
// })

let cities=['patna','mumbai','banglore','delhi','surat'];
cities.forEach((city,idx,arr)=>{
    console.log(city,idx,arr);
})


/*
Higher Order Function/Method --> the functions which take another function as parameter or return another function
eg. forEach function
*/


let num = [6,4,8,3,5,9];
num.forEach(function square(val){
    console.log(val*val);
});

console.log("same with forEach loop");

num.forEach((val,idx,num)=>{
    console.log(val*val,idx,num);
})

/*

map-->create a new array with the results of some operation. The value its callback reutrns are used to form new array
map is similar to forEach loop but the only difference is map create new array for the performed task

arr.map(callbackFnx(value,index,array))

*/

let newarray = num.map((val)=>{
    return val*5;
})
console.log(newarray);


/*
filter-->creates a new array of elements that give true for a condition/filter
*/

let anotherarray=newarray.filter((val)=>{
    return val%2!=0;
})

console.log(anotherarray);


/*
reduce-->performs some operations and reduces the array to a single value. It returns that single value
*/

let output = num.reduce((previous,curr)=>{
    return previous+curr;
})

console.log(output);

let largest = num.reduce((prev,curr)=>{
    return prev>curr ? prev:curr;
});
console.log(largest);