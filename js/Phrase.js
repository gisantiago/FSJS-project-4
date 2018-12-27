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
              var li = `<li class="letter">${phrase[i]}</li>`;
              document.querySelector('#phrase ul').append(li);  
            } else {
                var li = `<li class="space">${phrase[i]}</li>`;
                document.querySelector('#phrase ul').append(li); 
            }
        }
        console.log(phrase); // for testing purposes...
    }

     checkLetter() {

     }

     showMatchedLetter() {
         
     }
 }