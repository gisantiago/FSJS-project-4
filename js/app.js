/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
* app.js */


// Global Variables
var game = new Game();
const rstButton = document.querySelector('#btn__reset');
const buttons = document.querySelectorAll('button');

/**
 * the 'image' function loops over the scoreboard li and applies the "liveHeart.png" image over all the li's
**/
const image = () => {
    const hearts = document.querySelectorAll('.tries');
    for (var i = 0; i < hearts.length; i++) {
        hearts[i].firstElementChild.src = "images/liveHeart.png";
    }
}

/*** 
 * The 'rstButton' start the game the first time the page is loaded. 
 * It also restarts the game after the user finish (win/lose) the game. 
***/


rstButton.addEventListener('click', () => {
    
    const ul = document.querySelector('ul')
    const li = ul.getElementsByTagName('li');
    const button = document.querySelectorAll('button');
   
    // remove all "li" elements from the Phrase's "ul" element after a game has reached the 'GameOver' stage. 
    if (ul.hasChildNodes()) {
        while(li.length > 0) {
            ul.removeChild(li[0]);
        }
    }
    for (var i = 0; i < button.length; i++) {
        button[i].disabled = false;
        button[i].classList.remove('chosen', 'wrong');
    }

    image();
    game.startGame();
});

/***
 * This event listener calls the 'handleInteraction' in the Game class, 
 * based on the user clicks (aka event.target). 
***/

document.addEventListener('click', (e) => {
    if(e.target.matches('.key')) {
        game.handleInteraction(e.target);
        console.log(e.target);
    }
});

/***
 * This event listener calls the 'handleInteraction' in the Game class, 
 * based on the user's keyboard selection (aka event.key). 
***/

document.addEventListener('keypress', (e) => {
    for (var i = 0; i < buttons.length; i++) {
        if (e.key === buttons[i].textContent && !buttons[i].classList.contains('wrong')) {
            game.handleInteraction(buttons[i]);
        }
    }
});