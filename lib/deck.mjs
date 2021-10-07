/**
 *  Deck module
 *
 *  @author Adam Lacoste <adam.lacoste@hotmail.com>
 */

import {strict as assert } from "assert";
import { knuthShuffle    } from "knuth-shuffle";
import Card                from "./card.mjs";

/**
 *  Deck class
 *
 *  A deck of French-style playing cards.
 */
class Deck {

    /**
     *  Deck constructor
     *
     *  @param {array} cards The cards to add to the deck
     */
    constructor(cards = []) {
        assert(Array.isArray(cards),                        "Invalid cards used to initialize deck.");
        assert(cards.every((card) => card instanceof Card), "Invalid card used to initialize deck.");

        this.cards    = [ ...cards ];
        this.discards = [];

        Object.seal(this);
    } // end constructor

    /**
     *  Add one or more cards to the deck
     *
     *  @param  {array} cards The cards to add
     *
     *  @return {Deck} This deck
     */
    add(cards = []) {
        assert(Array.isArray(cards),                        "Invalid cards added to deck.");
        assert(cards.every((card) => card instanceof Card), "Invalid card added to deck.");

        this.cards.push(...cards);

        return this;
    } // end method add

    /**
     *  Add one (and only one) card to the deck
     *
     *  @param  {Card} card The card to add
     *
     *  @return {Deck} This deck
     */
    addOne(card) {
        return this.add([card]);
    } // end method addOne

    /**
     *  Deal one or more cards to multiple players
     *
     *  A card is dealt to each player in turn.  If multiple cards are to be 
     *  dealt to each player, the first player doesn't get a second card until 
     *  every other player has gotten one.
     *
     *  When dealing three cards each to three players (A, B, and C), the order 
     *  of cards dealt would be A, B, C, A, B, C, A, B, C.
     *
     *  The output is organized by player:
     *
     *      [
     *          [ card1, card4, card7 ], // player A's cards
     *          [ card2, card5, card8 ], // player B's cards
     *          [ card3, card6, card9 ]  // player C's cards
     *      ]
     *
     *  @param  {number} num_cards   The number of cards to deal to each player
     *  @param  {number} num_players The number of players who get cards
     *
     *  @return {array<array<Card>>} A nested array of cards 
     */
    deal(num_cards = 1, num_players = 1) {
        let cards = [];

        for (let c = 0; c < num_cards; c++) {
            for (let p = 0; p < num_players; p++) {
                if (cards.length <= p) {
                    cards.push([]);
                } // end if

                cards[p].push(this.drawOne());
            } // end for
        } // end for

        return cards;
    } // end method deal

    /**
     *  Discard one or more cards
     *
     *  @param  {array} cards The cards to discard
     *
     *  @return {Deck} This deck
     */
    discard(cards = []) {
        assert(Array.isArray(cards),                        "Invalid cards discarded.");
        assert(cards.every((card) => card instanceof Card), "Invalid card discarded.");

        while (cards.length) {
            this.discards.push(cards.shift());
        } // end while

        return this;
    } // end method discard

    /**
     *  Discard one (and only one) card
     *
     *  @param  {Card} card The card to discard
     *
     *  @return {Deck} This deck
     */
    discardOne(card) {
        return this.discard([card]);
    } // end method discardOne

    /**
     *  Draw one or more cards from the deck
     *
     *  @param  {number} count The number of cards to draw
     *
     *  @return {array<Card>} The drawn cards
     */
    draw(count = 1) {
        let cards = [];

        for (let i = 0; i < count; i++) {
            cards.push(this.cards.shift());
        } // end for

        return cards;
    } // end method draw

    /**
     *  Draw one (and only one) card from the deck
     *
     *  @return {Card} The drawn card
     */
    drawOne() {
        return this.draw(1).shift();
    } // end method drawOne

    /**
     *  Remove one or more cards from the deck
     *
     *  @param  {array} cards The cards to remove
     *
     *  @return {Deck} This deck
     */
    remove(cards = []) {
        assert(Array.isArray(cards),                        "Invalid cards removed from deck.");
        assert(cards.every((card) => card instanceof Card), "Invalid card removed from deck.");

        for (card of cards) {
            this.cards.splice(this.cards.indexOf(card), 1);
        } // end for-of

        return this;
    } // end method remove

    /**
     *  Remove one (and only one) card from the deck
     *
     *  @param  {Card} card The card to remove
     *
     *  @return {Deck} This deck
     */
    removeOne(card) {
        return this.remove([card]);
    } // end method removeOne

    /**
     *  Shuffle the deck
     *
     *  @param  {bool} include_discards Return all cards from the discard pile 
     *                                  to the deck prior to shuffling
     *
     *  @return {Deck} This (shuffled) deck
     */
    shuffle(include_discards = true) {
        let cards = this.cards;

        if (include_discards) {
            cards = cards.concat(this.discards);
        } // end if

        this.cards    = knuthShuffle(cards);
        this.discards = [];

        return this;
    } // end method shuffle

} // end class Deck

export default Deck;
