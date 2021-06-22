'use strict';


// document.querySelector('.again');
// document.querySelector('.check');
let turn = document.querySelector('.score');
let hiScore = document.querySelector('.highscore');
let userInput = document.querySelector('guess');



let secretNumber = Math.trunc(Math.random() * 20) + 1;
// aiNumber.textContent = secretNumber;
let score = 20;
let highscore = 0;

// mini functions
let bgColor = function (color) {
    document.body.style.backgroundColor = color;
}

let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

let aiNumber = function (width, display) {
    document.querySelector('.number').style.width = width;
    document.querySelector('.number').textContent = display;
}




// Main function

document.querySelector('.check').addEventListener('click', function () {
    let userInput = Number(document.querySelector('.guess').value);

    //when there is no input
    if (!userInput) {
        displayMessage('⛔ No Number');

        //when player wins    
    } else if (userInput === secretNumber) {
        // document.querySelector('.message').textContent = ' 🥳 Correct Number!';
        displayMessage('🥳 Correct Number!');
        bgColor('#60b347');
        aiNumber('30rem', secretNumber);
        // aiNumber.textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when the guess is wrong
    } else if (userInput !== secretNumber) {
        if (score > 1) {
            displayMessage(userInput > secretNumber ? '📈 too high' : '📉 too low');
            score--;
            turn.textContent = score;
        }
        else {
            displayMessage('😆 you lost!');
            turn.textContent = 0;
            bgColor('#DB271A');
        }

    }

    //-------------------- Before refactoring ----------------------

    // else if (userInput > secretNumber) {
    //     if (score > 1) {
    //         displayMessage();
    //         score--;
    //         turn.textContent = score;
    //     } 

    // } else if (userInput < secretNumber) {
    //     if (score > 1) {
    //         displayMessage();
    //         score--;
    //         turn.textContent = score;
    //     } else {
    //         displayMessage('😆 you lost!');
    //         turn.textContent = 0;
    //         document.body.style.backgroundColor = '#DB271A';
    //     }
    // }

});

// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color(#222) and number width(15rem)


//this works

// document.querySelector('.again').addEventListener('click', function () {
//     score = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;

//     // document.querySelector('.message').textContent = 'Start guessing...';
//     displayMessage('Start guessing...');
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').value = '';
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';
// });

//this does not

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // aiNumber.textContent = "?";
    aiNumber(undefined, "?");  // undefine is to skip a parameter
    displayMessage('Start guessing...');
    turn.textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});