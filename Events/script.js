/*
node.event=()=>{
    //handle here
}
*/


/*
node.event=(evt)={
    //handle here
}

evt.type
evt.target
evt.clientX
evt.clientY
*/

let div=document.querySelector("#block");

div.onmouseover = () => {
    console.log("you are in div");
}


/*
Event Listeners

node.addEventListener(event,callback);

node.removeEventListener(event,callback);

Note: the callback reference should be same to remove

*/

div.addEventListener("click", (evt) => {
    console.log("using EventListener");
    console.log(evt.type);
    console.log(evt.target);
})

let btn1=document.querySelector(".newbutton")
const evnthldr = () => {
    console.log("event is stored in evnthldr");
}

btn1.addEventListener("click",evnthldr);
//removing

btn1.removeEventListener("click",evnthldr);



let themebtn = document.querySelector("#changeTheme");
let currmode="light";

themebtn.addEventListener("click",()=>{
    if(currmode=="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }

    console.log(currmode);
})
let mode = "light";
let mdoebtn = document.querySelector("#changeThemeUsingCSSClasses");
let bodyclass = document.querySelector("body");

mdoebtn.addEventListener("click", ()=>{
    if(mode=="light"){
        mode="dark";
        bodyclass.classList.remove("light");
        bodyclass.classList.add("dark");
    }
    else{
        mode="light";
        bodyclass.classList.remove("dark");
        bodyclass.classList.add("light");
    }
})