// array is collection of items
//string is immutable but array is mutable it can be changed in Javascript
/*
let heroes = ["ironman", 'batman',"thor","hulk"];
let marks=[96,99,98,85,75];
console.log(marks);

//for length
console.log(marks.length);
console.log(typeof marks);
console.log(heroes[2]);  //array has 0 based index
heroes[2]="shaktiman";
console.log(heroes);


//loop in array
for(let i=0;i<5;i++){
    console.log(marks[i]);
}

for(let hero of heroes){
    console.log(hero);
}
for(let hero of heroes){
    console.log(hero.toUpperCase());
}

//Question
let prices=[250,645,300,900,50];
for(let i=0;i<5;i++){
    prices[i]=prices[i]-0.1*prices[i];
}
console.log(prices);

/*

/*

Array Methods:
arr.push()-->add to end
arr.pop()-->delete from end and return
arr.tostring()-->converts array string
concat()-->joins multiple arrays and return result
unshift()-->add to start
shift-->delete from start and return

arr.slice()-->return a piece of the array
slice(startidx,endidx)

splice()-->change original array(add,remove,replace)
splice(startidx,delcount,newel)

*/

let foodItems=["potato",'apple',"litchi",'tomato'];
foodItems.push("orange");
console.log(foodItems);
foodItems.push('chips',"burger")
console.log(foodItems);
foodItems.pop();
console.log(foodItems);
console.log(foodItems.toString());

let marvel=["thor","spiderman","ironman"];
let dc=["superman","batman"];

let superHeroes=marvel.concat(dc);
console.log(superHeroes);

superHeroes.unshift("loki")
console.log(superHeroes);

console.log(superHeroes.slice(2,4));

console.log(superHeroes.splice(2,2,'captain America','hulk'));
console.log(superHeroes);