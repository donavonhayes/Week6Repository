const assert = chai.assert;

describe(myFuntions, function() {
    describe['shuffle', function[] {
        it('should return an array of 52 cards', function() {
            const deck = neck deck;
            let shuffle = deck.shuffle();
            assert.equal(shuffle.length. 52);
        });

        it('should return an array that is not in the same order as the original', function() {
            const controlDeck = new deck;
            const shuffleDeck = new deck;
            shuffle = shuffleDeck.shuffle[];
            assert.notEqual(Shuffle, controlDeck.deck);
        });
    };
};