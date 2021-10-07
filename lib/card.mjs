/**
 *  Card module
 *
 *  @author Adam Lacoste <adam.lacoste@hotmail.com>
 *
 *  @module card-sharp/lib/card
 *
 *  @requires assert
 *  @requires deep-extend
 *  @requires just-typeof
 */

import { strict as assert } from "assert";
import extend               from "deep-extend";
import type                 from "just-typeof";
import card_ranks           from "../config/cards/properties/ranks.json";
import card_suits           from "../config/cards/properties/suits.json";

const DEFAULT_OPTS = { "image": null, "rank": null, "suit": null };

/**
 *  Card class
 *
 *  A single French-style playing card.
 */
class Card {

    /**
     *  Card constructor
     *
     *  @param  {object} user_opts User options for this card
     */
    constructor(user_opts = {}) {
        let opts = extend({}, DEFAULT_OPTS, user_opts);

        // validate and set card image
        assert(opts.image === null || type(opts.image) === "string", "Invalid card image.");
        this.image = opts.image;

        // validate and set card rank
        assert(opts.rank === null || card_ranks.hasOwnProperty(opts.rank), "Invalid card rank.");
        this.rank = opts.rank;

        // validate and set card suit
        assert(opts.suit === null || card_suits.hasOwnProperty(opts.suit), "Invalid card suit.");
        this.suit = opts.suit;

        // validate and set card ID, if provided; otherwise, extrapolate
        if (opts.id) {
            assert(type(opts.id) === "string", "Invalid card ID.");
            this.id = opts.id.toLowerCase();
        } else {
            this.id = this.rank + this.suit;
        } // end if

        // validate and set card name, if provided; otherwise, extrapolate
        if (opts.name) {
            assert(type(opts.name) === "string", "Invalid card name.");
            this.name = opts.name.toLowerCase();
        } else {
            let rank = card_ranks[this.rank].name,
                suit = card_suits[this.suit].name;

            this.name = `${rank} of ${suit}s`;
        } // end if

        // extrapolate pretty name
        this.pretty_name = this.name.replace(/\w{3,}/g, (match) => match.substring(0, 1).toUpperCase() + match.substring(1));

        // freeze the object so it can't be tampered with further
        Object.freeze(this);
    } // end constructor

    /**
     *  String conversion method
     *
     *  @return {string} The card ID
     */
    toString() {
        return this.id;
    } // end method toString

    /**
     *  Generate cards from an array of objects
     *
     *  @static
     *
     *  @param  {array} cards The list of card options
     *
     *  @return {array<Card>} The generated cards
     */
    static fromArray(cards = []) {
        assert(Array.isArray(cards),                           "Invalid input: cards must be an array of objects.");
        assert(cards.every((opts) => type(opts) === "object"), "Invalid input: cards must be an array of objects.");

        return cards.map((opts) => new Card(opts));
    } // end static method from

} // end class Card

export default Card;
