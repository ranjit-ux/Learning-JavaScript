// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     resolve(1223);
// })

// function getdata(dataid,getnextdata){
//     setTimeout(()=>{
//         console.log(dataid);
//         if(getnextdata){
//             getdata();
//         }
//     },2000);
// }

// function getdata(dataid,getnextdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataid);
//             resolve("success with data", dataid);
//             // reject("no data")
//             if(getnextdata){
//                 getnextdata();
//             }
//         },5000);
//     });
// }

// const getpromise = () => {
//     return new Promise((resolve,reject) => {
//         console.log("I am a promise");
//         // resolve("promsie resolved");
//         reject("some error occured");
//     });
// };

// let promise = getpromise();

// promise.then((res)=>{
//     console.log("promise had been fulfilled");
// });

// promise.catch((err)=>{
//     console.log("promise had been rejected");
// }) 

//promise chaining

function asyncfunction1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("seccess");
        },4000);
    });
}

function asyncfunction2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success again");
        },4000);
    });
}

console.log("fetching data1");
let p1=asyncfunction1();
p1.then((res)=>{
    console.log("fetching data2");
    let p2=asyncfunction2();
    p2.then((res)=>{
        console.log("seccess");
    });
});