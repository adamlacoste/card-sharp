import Card from "../../lib/card.mjs";

describe("a card...", () => {

    test("...can be created with default data", () => {
        let card = new Card();

        expect(card.rank).toBeNull();
        expect(card.suit).toBeNull();
        expect(card.id).toBeNull();
        expect(card.name).toBeNull();
        expect(card.pretty_name).toBeNull();
    }); // end test closure

    test("...can be created with valid user data", () => {
        let rank = "a",
            suit = "c",
            name = "Ace of Clubs",
            card = new Card({ rank, suit});

        expect(card.rank).toBe(rank);
        expect(card.suit).toBe(suit);
        expect(card.id).toBe(`${rank}${suit}`);
        expect(card.name).toBe(name.toLowerCase());
        expect(card.pretty_name).toBe(name);
    }); // end test closure

    test("...cannot be created with invalid user data", () => {
        expect(() => new Card({ "rank": false })).toThrow();
        expect(() => new Card({ "suit": false })).toThrow();
    }); // end test closure

    test("...is immutable after creation", () => {
        let card = new Card();

        expect(() => card.rank = "a").toThrow();
        expect(() => card.suit = "c").toThrow();
        expect(() => card.id = "ac").toThrow();
        expect(() => card.name = "ace of clubs").toThrow();
        expect(() => card.pretty_name = "Ace of Clubs").toThrow();
        expect(() => card.foo = "bar").toThrow();
    }); // end test closure

    test("...can be converted to a string", () => {
        let rank = "a",
            suit = "c",
            card = new Card({ rank, suit});

        expect(`${card}`).toBe(`${rank}${suit}`);
    }); // end test closure

    test("...can be created from an array of valid user data", () => {
        let cards = Card.fromArray([ { "rank": "a", "suit": "c" }, { "rank": "2", "suit": "d" } ]);

        for (let card of cards) {
            expect(card).toBeInstanceOf(Card);
        } // end for-of
    }); // end test closure

    test("...cannot be created from an array of invalid user data", () => {
        expect(() => Card.fromArray([ { "rank": false }, { "suit": false } ])).toThrow();
    }); // end test closure

}); // end describe closure

