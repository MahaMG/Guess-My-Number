"use strict";

let secertNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener('click', function(){
  let guessNum = Number(document.querySelector(".guess").value);
  // console.log(guessNum, typeof guessNum);

  // When there is no input
  if (!guessNum) {
    document.querySelector(".message").textContent = "No number ⚠️";
    
    // When player wins
  } else if (secertNum === guessNum) {
    document.querySelector(".message").textContent = "Correct guessing 🎉";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secertNum;

    // cheching highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When player guess higher than secertNum
  } else if (guessNum > secertNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high ↗️";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game! 💥";
      document.querySelector(".score").textContent = 0;
    }

    // When player guess lower than secertNum
  } else if (secertNum > guessNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low ↘️";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game! 💥";
      document.querySelector(".score").textContent = 0;
    }
  }
})

document.querySelector(".again").addEventListener('click', function(){
    secertNum = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = '?';
    document.querySelector(".guess").value = '';
})