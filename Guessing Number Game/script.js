'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);
*/
const min = 1;
const max = 20;
var secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

//Adding event listener for check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess);

  //If there is no input number
  if (!guess) {
    console.log('No input number');
    document.querySelector('.score').textContent = --score;
  }
  //If the correct number is provided
  else if (Number(guess) == secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!!!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score >= highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
  //if the entered number is greater than secret number
  else if (Number(guess) > secretNumber) {
    if (score > 1) {
      document.querySelector('.score').textContent = --score;
      document.querySelector('.message').textContent = 'Too high!!!';
    } else {
      document.querySelector('.score').textContent = --score;
      document.querySelector('.message').textContent = 'You Lost the Game!!!';
    }
  }
  //if the entered number is less than secret number
  else if (Number(guess) < secretNumber) {
    if (score > 1) {
      document.querySelector('.score').textContent = --score;
      document.querySelector('.message').textContent = 'Too Low!!!';
    } else {
      document.querySelector('.score').textContent = --score;
      document.querySelector('.message').textContent = 'YOu Lost the Game!!!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
