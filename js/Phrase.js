/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const phrase = this.phrase.split('');
        
        for(var i = 0; i < phrase.length; i++) {
            if(phrase[i] !== " ") {
                var li = document.createElement('li');
                li.setAttribute('class', 'letter');
                li.textContent = `${phrase[i]}`;
                document.querySelector('#phrase ul').append(li);  
            } else {
                var li = document.createElement('li');
                li.setAttribute('class', 'space');
                li.textContent = `${phrase[i]}`;
                document.querySelector('#phrase ul').append(li); 
            }
        }
       //console.log(phrase); // for testing purposes...
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        const phrase = this.phrase.split('');    
        if (phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const li = document.getElementsByTagName('li');
        for(var i = 0; i < li.length; i++) {
            if (li[i].textContent === letter) {
                li[i].classList.add("show");
            }
        }
    };
 }

 