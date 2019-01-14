/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



 class Game {
     constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [
            new Phrase("A bird in the hand is worth two in the bush"),
            new Phrase("Busy as a bee"),
            new Phrase("As happy as Larry"),
            new Phrase("kill two birds with one stone"),
            new Phrase("Bring home the bacon")
        ];

        return phrases;
    };

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randPhrase;
    };

    /**
    * Begins the game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlayDIV = document.querySelector('#overlay');
        overlayDIV.style.display = "none";

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.missed = 0;
        //console.log(this.activePhrase); **** for testing purposes ****
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {

        const letterClass = document.querySelectorAll('.letter').length;
        const showClass = document.querySelectorAll('.letter.show').length;

        if (letterClass === showClass) {
            return true;
        }
    };

    /**
    * Increases the value of the missed property (stores value in the missed property)
    * Removes a life from the scoreboard (replace a liveHeart.png with lostHeart.png)
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed ++;
        const hearts = document.querySelectorAll('.tries');
   
        hearts[5 - this.missed].firstElementChild.src = "images/lostHeart.png";
            
        if (this.missed === 5) {
            this.gameOver(false);
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlayDIV = document.querySelector('#overlay');
        const h1 = document.querySelector('#overlay h1');
        overlayDIV.style.display = "block";

        if (gameWon === false) {
            overlayDIV.className = 'lose';
            h1.textContent = "Sorry you lost. Try again...";
        } else {
            overlayDIV.className = 'win';
            h1.textContent = "Great Job! You Won.";
        }
    };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        const letter = button.textContent;
       
        button.disabled = true;

        if (this.activePhrase.checkLetter(letter)){
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);
            if (this.checkForWin()) {
                this.gameOver();
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    };

 }

 