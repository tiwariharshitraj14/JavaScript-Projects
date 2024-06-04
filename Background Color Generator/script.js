//generate random color
const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6 ; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

console.log(randomColor());

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let body = document.querySelector("body");

let intervalId;
let startChangingColor = function (){
    function bgChange(){
        body.style.backgroundColor = randomColor()
    }
    if(!intervalId){
        intervalId = setInterval(bgChange, 1000);
    }
};

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};

start.addEventListener("click", startChangingColor)

stop.addEventListener("click", stopChangingColor)