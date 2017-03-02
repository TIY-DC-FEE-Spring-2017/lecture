
let cardValues = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];

module.exports = function cardDeck() {
    let deck = [];

    for (let i=0; i<4; i++) {
        deck = deck.concat(cardValues);
    }

    return deck;
};

// console.log(module.exports());
