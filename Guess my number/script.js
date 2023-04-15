"use strict";
/*
// queryselector is a method available on document object
console.log(document.querySelector(".message").textContent); 
document.querySelector(".message").textContent= "CORRECT NUMBER!";
console.log(document.querySelector(".message").textContent);

//for setting the text content
document.querySelector(".number").textContent=12;
document.querySelector(".score").textContent=0;


//for setting the value
document.querySelector(".guess").value=23;
//for getting input value
console.log(document.querySelector(".guess").value);
*/
let highscore=0;
let secretnumber = Math.floor(Math.random() * 20) + 1;


//snumber from 0.decimal to 19.decimals, math floor removed the decimal and +1 will move the range from
//0-19 to 1-20
let score = 20;
document.querySelector(".number").textContent = secretnumber;
document.querySelector(".number").textContent="?";


const displaymessage = function(message){
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  //Note that every time the user click the eventlisterner is called, thus the function is reinitialized
  //everytime the user makes an event
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    // ! means Logical not, if guess does ! have value inside it, it becomes undefined, nan, false
    //which are falsy values, so we are checking if the guess returns a falsy value,
    // so if guess is left empty (falsy values), the statement becomes true that it has false value
    // document.querySelector(".message").textContent = "No number!";

    displaymessage("No number!");
  } else if (guess === secretnumber) {
    displaymessage("CORRECT NUMBER!");
    document.querySelector("body").style.backgroundColor = "#60b347";

    const collection = document.getElementsByClassName("number");
    collection[0].style.width = "30rem";
    // is same as:
    //document.querySelector(".number").style.width="30rem";
    document.querySelector(".number").textContent=secretnumber

    if(score>highscore){
      highscore=score;
      document.querySelector(".highscore").textContent=highscore;
    }
    //When guess is wrong
  } else if (guess !==secretnumber){
    if (score > 1) { 
      // document.querySelector(".message").textContent = guess>secretnumber ?"Bit high": "Bit low";
      displaymessage(guess>secretnumber ?"Bit high": "Bit low");
      score--;
      document.querySelector(".score").textContent = score;
     ;
    } else {
      displaymessage("You lost the Game");
    }

  } 
  // Reference for ternery operator
  // else if (guess > secretnumber) {
    // if (score > 1) { 
    //   document.querySelector(".message").textContent ="Bit high";
    //   score--;
    //   document.querySelector(".score").textContent = score;
    // } else {
    //   document.querySelector(".message").textContent = "You lost the Game";
    // }
    
  // } else if (guess < secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Bit low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the Game";
  //   }
  // }
});

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