import { refs } from './refs.js';
import { randomNumber } from './utils.js';

let secretNumber = randomNumber(20);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  refs.messageElement.textContent = message;
};

const handlerChecButton = function () {
  const guess = Number(refs.guessInput.value);
  if (!guess) {
    displayMessage('⛔ No number');
  } else {
    if (guess === secretNumber) {
      refs.numberElement.textContent = secretNumber;
      displayMessage('🎉Correct Number');
      refs.bodyElement.style.backgroundColor = '#44cc00';
      refs.numberElement.style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        refs.highscoreElement.textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        refs.scoreElement.textContent = score;
      } else {
        displayMessage('😔 You lost the game!');
        refs.scoreElement.textContent = '0';
      }
    }
  }
};

const handlerAgainElement = function () {
  score = 20;
  secretNumber = randomNumber(20);
  displayMessage('Start guessing...');
  refs.scoreElement.textContent = score;
  refs.numberElement.textContent = '?';
  refs.guessInput.value = '';
  refs.bodyElement.style.backgroundColor = '#222';
  refs.numberElement.style.width = '15rem';
};

refs.checkButton.addEventListener('click', handlerChecButton);

refs.againElement.addEventListener('click', handlerAgainElement);
