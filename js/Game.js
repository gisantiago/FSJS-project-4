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

 }

 