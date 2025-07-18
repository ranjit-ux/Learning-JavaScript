const URL="https://official-joke-api.appspot.com/random_joke";

// let promise = fetch(URL);
// console.log(promise);

const jokepara = document.querySelector(".joke")
const btn=document.querySelector(".newjoke");

// const getjoke = async () =>{
//     console.log("fetching data");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     jokepara.innerText = data;
// };

//Promise chaining

function getjoke(){
    fetch(URL)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            // jokepara.innerText = `${data.setup} | ${data.punchline}`;
            // jokepara.innerText=data.punchline;

            //show punchline after delay

            jokepara.innerText=data.setup;
            setTimeout(()=>{
                jokepara.innerText += "\n" + data.punchline;
            },2000);
        });
}

btn.addEventListener("click", getjoke);