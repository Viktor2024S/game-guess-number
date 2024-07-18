import { refs } from './refs.js';
import { randomNumber } from './utils.js';

let secretNumber = randomNumber(20);
// =================== console.log(secretNumber);
console.log(secretNumber);
// ====================
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  refs.messageElement.textContent = message;
};

refs.checkButton.addEventListener('click', function () {
  const guess = Number(refs.guessInput.value);
  console.log(guess, typeof guess);

  // When no input
  if (!guess) {
    displayMessage('⛔ No number');
    //   When player wins the game
  } else {
    if (guess === secretNumber) {
      refs.numberElement.textContent = secretNumber;
      displayMessage('🎉Correct Number');
      // refs.bodyElement.style.backgroundColor = '#60b347';
      refs.bodyElement.style.backgroundColor = '#9f9';
      refs.numberElement.style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        refs.highscoreElement.textContent = highscore;
      }
    }
    // when guess is wrong
    else if (guess !== secretNumber) {
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
});

refs.againElement.addEventListener('click', function () {
  score = 20;
  secretNumber = randomNumber(20);
  displayMessage('Start guessing...');
  refs.scoreElement.textContent = score;
  refs.numberElement.textContent = '?';
  refs.guessInput.value = '';
  refs.bodyElement.style.backgroundColor = '#222';
  refs.numberElement.style.width = '15rem';
});
