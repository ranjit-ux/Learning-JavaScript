let sum = (a,b) =>{
    console.log(a+b);
}
let subtract = (a,b) =>{
    console.log(a-b);
}
let multiply = function(a,b){
    return a*b;
}

let divide =(a,b) =>{
    return console.log(a/b);
}

// let calulator = funciton(a,b,sumcallback){
//     sum(a,b)
// }

function calculator(a,b,operation){
    return operation(a,b);
}

calculator(5,7,sum);
calculator(5,7,subtract);

// setTimeout(()=>{
//     console.log("after 5 seconds multiply",calculator(5,7,multiply));
    
// },5000);

console.log(calculator(5,7,multiply));
calculator(5,7,divide);
calculator(5,7,(a,b)=>{
    console.log(a%b);
})

function getdata(dataid,getnextdata){
    setTimeout(()=>{
        console.log("data",dataid);
        if(getnextdata){
            getnextdata();
        }
    },2000);
}

// getdata(1,getdata(2));  //not like this

//callback hell -> nested callback -> callback in callback in callback -> form pyramid strucutre -> pyramid of doom
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3);
    });
});


//for solving callback hell we have promises