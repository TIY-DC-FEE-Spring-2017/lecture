
let createDeck = require('./deck.js');
let cardValues = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];

function warGame() {
    let deck = createDeck();

    let numberOfWinsForPlayerOne = 0;
    let numberOfWinsForPlayerTwo = 0;
    let numberOfTies = 0;

    for (let i=0; i<52; i+=2) {
        // console.log( deck[i], deck[i+1] );
        if (cardValues.indexOf(deck[i]) > cardValues.indexOf(deck[i+1])) {
            // console.log('player 1 wins the hand');
            numberOfWinsForPlayerOne++;
        } else if (cardValues.indexOf(deck[i]) < cardValues.indexOf(deck[i+1])) {
            // console.log('player 2 wins the hand');
            numberOfWinsForPlayerTwo++;
        } else {
            // console.log('they tied!');
            numberOfTies++;
        }
    }

    console.log('player 1 wins', numberOfWinsForPlayerOne);
    console.log('player 2 wins', numberOfWinsForPlayerTwo);
    console.log('ties', numberOfTies);
}

warGame();
