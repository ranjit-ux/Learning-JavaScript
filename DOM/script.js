let define = document.getElementById("defination");
console.log(define);
console.dir(define);

let head3=document.getElementsByClassName("practice");
console.log(head3);
console.dir(head3);

let listItems=document.getElementsByTagName("li");
console.log(listItems);


let firstElements = document.querySelector("p"); //tag
console.dir(firstElements);

let allElements = document.querySelector("ul");
console.dir(allElements);

let classQuery = document.querySelector(".practice");
console.log(classQuery);
console.dir(classQuery);

let givenlist = document.querySelector("ol");
console.log(givenlist.innerText);

/*
innerText --> give only text content 
innerHTML --> give text content along with HTML tags
*/


/*

let heading = document.querySelector("h2");
heading.innerText = heading.innerText + "from Ranjit"
console.dir(heading.innerText);

*/