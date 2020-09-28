//Choose a random color
const button = document.querySelector(".btn");
const body   = document.querySelector("body");
const p      = document.querySelector(".rgb-code");

// event listener

button.addEventListener("click", randomNumber);

// create a function that generates random color 
function randomNumber() {
const r = Math.floor(Math.random()* 255);
const g = Math.floor(Math.random()* 255);
const b = Math.floor(Math.random()* 255);


// console.log(color);
body.style.backgroundColor =  "rgb(" + r + "," + g + "," + b + ")";

p.textContent =  [r, g, b];



}
