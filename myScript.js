'use strict';

let aiNumber = document.querySelector('.number');
// document.querySelector('.again');
// document.querySelector('.check');
let turn = document.querySelector('.score');
let hiScore = document.querySelector('.highscore');
let userInput = document.querySelector('guess');



let secretNumber = Math.trunc(Math.random() * 20) + 1;
// aiNumber.textContent = secretNumber;
let score = 20;
let highscore = 0;

// console.log(secretNumber);

let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    let userInput = Number(document.querySelector('.guess').value);

    if (!userInput) {
        displayMessage('⛔ No Number');

    } else if (userInput === secretNumber) {
        document.querySelector('.message').textContent = ' 🥳 Correct Number!';
        document.body.style.backgroundColor = '#60b347';
        aiNumber.style.width = '30rem';
        aiNumber.textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


    } else if (userInput > secretNumber) {
        if (score > 1) {
            displayMessage('📈 too high');
            score--;
            turn.textContent = score;
        } else {
            displayMessage('😆 you lost!');
            turn.textContent = 0;
            document.querySelector('body').style.backgroundColor = '#DB271A';
        }

    } else if (userInput < secretNumber) {
        if (score > 1) {
            displayMessage('📉 too low');
            score--;
            turn.textContent = score;
        } else {
            displayMessage('😆 you lost!');
            turn.textContent = 0;
            document.body.style.backgroundColor = '#DB271A';
        }
    }

})

// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color(#222) and number width(15rem)


//this works

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

//this does not

// document.querySelector('.again').addEventListener('click', function () {
//     score = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     // aiNumber.textContent = "?";
//     displayMessage('Start guessing...');
//     turn.textContent = score;
//     document.querySelector('.guess').value = '';
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';

// });