import sharp from "../main.mjs";
import Card  from "../lib/card.mjs";
import Deck  from "../lib/deck.mjs";

describe("the package entrypoint module...", () => {

    test("...should have an init function as its default export", () => {
        let deck = sharp();

        expect(deck).toBeInstanceOf(Deck);
        expect(deck.cards[0]).toBeInstanceOf(Card);
    }); // end test closure

}); // end describe closure
