"use strict";

let highscore=0;
let secretnumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
document.querySelector(".number").textContent = secretnumber;
document.querySelector(".number").textContent="?";


const displaymessage = function(message){
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
 

    displaymessage("No number!");
  } else if (guess === secretnumber) {
    displaymessage("CORRECT NUMBER!");
    document.querySelector("body").style.backgroundColor = "#60b347";

    const collection = document.getElementsByClassName("number");
    collection[0].style.width = "30rem";
   
    document.querySelector(".number").textContent=secretnumber

    if(score>highscore){
      highscore=score;
      document.querySelector(".highscore").textContent=highscore;
    }
    //When guess is wrong
  } else if (guess !==secretnumber){
    if (score > 1) { 
      
      displaymessage(guess>secretnumber ?"Bit high": "Bit low");
      score--;
      document.querySelector(".score").textContent = score;
     ;
    } else {
      displaymessage("You lost the Game");
    }

  } 


document.querySelector(".again").addEventListener("click",function(){
    score=20;
    //New value is assigned to the secretnumber and score global variable
    secretnumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width="15rem";
    document.querySelector(".number").style.width="?";
    document.querySelector(".score").textContent=score;
    document.querySelector(".guess").value="";

});
