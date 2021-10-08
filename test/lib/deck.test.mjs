import Card from "../../lib/card.mjs";
import Deck from "../../lib/deck.mjs";
import stdj from "../../config/decks/standard_jokers.json";

const CARDS = [];

describe("a deck...", () => {

    beforeAll(() => {
        CARDS.push(...Card.fromArray(stdj)); // populate the cards array with the standard+jokers set
    }); // end beforeAll closure

    test("...can be created empty", () => {
        let deck = new Deck();

        expect(deck.cards).toHaveLength(0);
        expect(deck.discards).toHaveLength(0);
    }); // end test closure

    test("...can be created populated with valid user data", () => {
        let deck = new Deck(CARDS);

        expect(deck.cards).toHaveLength(54);
        expect(deck.discards).toHaveLength(0);
    }); // end test closure

    test("...cannot be created populated with invalid user data", () => {
        expect(() => new Deck("a card")).toThrow();
        expect(() => new Deck([ "a card", "another card" ])).toThrow();
    }); // end test closure

    test("...is immutable after creation", () => {
        let deck = new Deck();

        expect(() => deck.foo = "bar").toThrow();
    }); // end test closure

    test("...can draw a card", () => {
        let deck = new Deck(CARDS),
            card = deck.drawOne();

        expect(card).toBe(CARDS[0]);
        expect(deck.cards).toHaveLength(53);
    }); // end test closure

    test("...can draw multiple cards", () => {
        let deck = new Deck(CARDS),
            hand = deck.draw(3);

        expect(hand).toHaveLength(3);
        expect(deck.cards).toHaveLength(51);
    }); // end test closure

    test("...can discard a valid card", () => {
        let deck = new Deck();

        deck.discardOne(CARDS[0]);

        expect(deck.discards).toHaveLength(1);
    }); // end test closure

    test("...can discard multiple valid cards", () => {
        let deck = new Deck(),
            hand = CARDS.slice(0, 3);

        deck.discard(hand);

        expect(hand).toHaveLength(0);
        expect(deck.discards).toHaveLength(3);
    }); // end test closure

    test("...cannot discard an invalid card", () => {
        let deck = new Deck();

        expect(() => deck.discard("a card")).toThrow();
        expect(() => deck.discard([ "a card", "another card" ])).toThrow();
    }); // end test closure

    test("...can be shuffled with the discard pile", () => {
        let deck = new Deck();

        deck.cards.push(CARDS[0], CARDS[1], CARDS[2]);
        deck.discards.push(CARDS[3], CARDS[4], CARDS[5]);

        deck.shuffle(true);

        expect(deck.cards).toHaveLength(6);
        expect(deck.discards).toHaveLength(0);
    }); // end test closure

    test("...can be shuffled without the discard pile", () => {
        let deck = new Deck();

        deck.cards.push(CARDS[0], CARDS[1], CARDS[2]);
        deck.discards.push(CARDS[3], CARDS[4], CARDS[5]);

        deck.shuffle(false);

        expect(deck.cards).toHaveLength(3);
        expect(deck.discards).toHaveLength(3);
    }); // end test closure

    test("...can deal cards to multiple players", () => {
        let deck    = new Deck(CARDS),
            players = deck.deal(2, 3);

        expect(players).toHaveLength(3);

        for (let player of players) {
            expect(player).toHaveLength(2);
        } // end for-of

        expect(deck.cards).toHaveLength(48);
    }); // end test closure

    test("...can add a valid card", () => {
        let deck = new Deck();

        deck.addOne(CARDS[0]);

        expect(deck.cards).toHaveLength(1);
    }); // end test closure

    test("...can add multiple valid cards", () => {
        let deck = new Deck();

        deck.add([ CARDS[0], CARDS[1], CARDS[2] ]);

        expect(deck.cards).toHaveLength(3);
    }); // end test closure

    test("...cannot add an invalid card", () => {
        let deck = new Deck();

        expect(() => deck.addOne("a card")).toThrow();
    }); // end test closure

    test("...can remove a valid card from play", () => {
        let deck = new Deck();

        deck.cards.push(CARDS[0], CARDS[1], CARDS[2]);
        deck.discards.push(CARDS[0], CARDS[4], CARDS[5]);

        deck.removeOne(CARDS[0]);

        expect(deck.cards).toHaveLength(2);
        expect(deck.discards).toHaveLength(2);
    }); // end test closure

    test("...can remove multiple valid cards from play", () => {
        let deck = new Deck();

        deck.cards.push(CARDS[0], CARDS[1], CARDS[2]);
        deck.discards.push(CARDS[0], CARDS[1], CARDS[5]);

        deck.remove([ CARDS[0], CARDS[1] ]);

        expect(deck.cards).toHaveLength(1);
        expect(deck.discards).toHaveLength(1);
    }); // end test closure

    test("...cannot remove an invalid card from play", () => {
        let deck = new Deck();

        expect(() => deck.removeOne("a card")).toThrow();
    }); // end test closure

}); // end describe closure
