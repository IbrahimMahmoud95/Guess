'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 5;
let highScore;
document.querySelector('.score').textContent = score;
/////////Again Button//////
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 5;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = `Start guessing...`;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
});
///////// Check Button////////
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //////////// No Number Inserted or Srting Is Inserted////////
    if (!guess) {
        document.querySelector('.message').textContent = `Please,Guess a Number 🔁`;
    }
    /////////////////// Right Number Guessed//////
    else if (guess === secretNumber) {
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.message').textContent = `Correct 👏,Hit Again To Play One More Time`;
        ///////First HighScore////
        if (!highScore || guess >= highScore) {
            highScore = guess;
            document.querySelector('.highscore').textContent = highScore;
        }
        ///////HighScore Value Comparison/////
        else if (guess < highScore) {
            document.querySelector('.highscore').textContent = highScore;
        }
        /////Reset Score After Winnig
        score=5;
        document.querySelector('.score').textContent=5;
    } else if (guess > secretNumber && score > 1) {
        document.querySelector('.message').textContent = `Too High 📈`;
        score--;
        document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber && score > 1) {
        document.querySelector('.message').textContent = `Too Low 📉`;
        score--;
        document.querySelector('.score').textContent = score;
    }
    ///////////Losing The Game///////////
    else {
        document.querySelector('body').style.backgroundColor = 'darkblue';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        score = 0;
        highScore = 0;
        document.querySelector('.score').textContent = score;
        document.querySelector(
            '.message'
        ).textContent = `You Lost The Game 😢,Hit Again Button `;
        document.querySelector('.highscore').textContent = 0;
    }
});
