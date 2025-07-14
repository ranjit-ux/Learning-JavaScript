async function hello(){
    console.log("hello");
}

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data fetched");
            resolve(200);
        },2000);
    });
}

// await api() -> wrong syntax

async function getWeather(){
    await api(); //1st call -> when first call gets completed only then next call will execute
    await api(); //2nd call
}

function getData(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",dataid);
            resolve("success");
        },2000);
    });
}

async function getAllData(){
    console.log("fetching data 1");
    await getData(1);
    console.log("fetching data 2");
    await getData(2);
    console.log("fetching data 3");
    await getData(3);
}


//IIFE -> Immediately Invoked Function Expression
//just to escapse the calling of function in async, this will directly call the function but it is useable only one time

(async function(){
    console.log("fetching data 1");
    await getData(1);
    console.log("fetching data 2");
    await getData(2);
    console.log("fetching data 3");
    await getData(3);
})();