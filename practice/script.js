const circle1=document.querySelector('.circle1');
const circle2=document.querySelector('.circle2');

document.querySelector('.container').addEventListener('click', ()=>{
    let r=Math.floor(Math.random() * 256);
    let g=Math.floor(Math.random() * 256);
    let b=Math.floor(Math.random() * 256);

    circle1.style.backgroundColor = `rgb(${r},${g},${b})`;

    let channel = Math.floor(Math.random() * 3);

    let r1=r;
    let g1=g;
    let b1=b;

    if(channel===0){
        r1=clamp(r+(Math.random() < 0.5 ? 10:-10));
    }
    else if(channel===1){
        g1=clamp(g+(Math.random() < 0.5 ? 10:-10));
    }
    else{
        b1=clamp(b+(Math.random() < 0.5 ? 10:-10));
    }

    circle2.style.backgroundColor=`rgb(${r1},${g1},${b1})`;

    function clamp(value){
        return Math.max(0,Math.min(255,value));
    }
});