/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
* app.js */



/*** Step 2 */
//  const phrase = new Phrase();
//  const game = new Game();


/*** Step 3 */
//  const phrase = new Phrase('LIFE is like a box of chocolates');
//  console.log(`Phrase - phrase: ${phrase.phrase}`);

/*** Step 4 */
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
//     });


/*** Step 5 */
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// }

// const game = new Game();

// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

/*** Step 6 */
// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

/*** Step 7 */
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
var game = new Game();
const rstButton = document.querySelector('#btn__reset');
const buttons = document.querySelectorAll('button');

const image = () => {
    const hearts = document.querySelectorAll('.tries');
    for (var i = 0; i < hearts.length; i++) {
        hearts[i].firstElementChild.src = "images/liveHeart.png";
    }
}

/*** Step 8 */


rstButton.addEventListener('click', () => {
    
    // remove all "li" elements from the Phrase's "ul" element
    const ul = document.querySelector('ul')
    const li = ul.getElementsByTagName('li');
    const button = document.querySelectorAll('button');
   
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

/*** Step 10 */

document.addEventListener('click', (e) => {
    if(e.target.matches('.key')) {
        game.handleInteraction(e.target);
        console.log(e.target);
    }
});

document.addEventListener('keypress', (e) => {
    for (var i = 0; i < buttons.length; i++) {
        if (e.key === buttons[i].textContent && !buttons[i].classList.contains('wrong')) {
            game.handleInteraction(buttons[i]);
        }
    }
});