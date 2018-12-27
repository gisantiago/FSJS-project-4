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

     checkLetter() {

     }

     showMatchedLetter() {
         
     }
 }