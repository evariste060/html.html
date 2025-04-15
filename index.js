
const button = document.getElementById("button");
const dice = document.getElementById("label");
let number;
let max = 6;
let min = 1;
button.onclick = function(){
    number = Math.floor(Math.random() * max)+ min ;
    dice.textContent = number;
}

