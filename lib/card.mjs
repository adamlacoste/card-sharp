/**
 *  Card module
 *
 *  @author Adam Lacoste <adam.lacoste@hotmail.com>
 */

import { strict as assert } from "assert";
import extend               from "deep-extend";
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
        assert(opts.image === null || typeof opts.image === "string", "Invalid card image.");
        this.image = opts.image;

        // validate and set card rank
        assert(opts.rank === null || card_ranks.hasOwnProperty(opts.rank), "Invalid card rank.");
        this.rank = opts.rank;

        // validate and set card suit
        assert(opts.suit === null || card_suits.hasOwnProperty(opts.suit), "Invalid card suit.");
        this.suit = opts.suit;

        // validate and set card ID, if provided
        if (opts.id) {
            assert(typeof opts.id === "string", "Invalid card ID.");
            this._id = opts.id.toLowerCase();
        } // end if

        // validate and set card name, if provided
        if (opts.name) {
            assert(typeof opts.name === "string", "Invalid card name.");
            this._name = opts.name.toLowerCase();
        } // end if

        Object.freeze(this);
    } // end constructor

    /**
     *  ID property
     *
     *  @type string
     */
    get id() {
        if (this._id) {
            return this._id;
        } // end if

        return this.rank + this.suit;
    } // end property getter id

    /**
     *  Name property
     *
     *  @type string
     */
    get name() {
        if (this._name) {
            return this._name;
        } // end if

        let rank = card_ranks[this.rank].name,
            suit = card_suits[this.suit].name;

        return `${rank} of ${suit}s`;
    } // end property getter name

    /**
     *  Pretty name property
     *
     *  @type string
     */
    get pretty_name() {
        if (this._name) {
            return this._name.split(" ").map((w) => w.substring(0, 1).toUpperCase() + w.substring(1)).join(" ");
        } // end if

        let rank_chars = card_ranks[this.rank].name.split(""),
            suit_chars = card_suits[this.suit].name.split(""),
            rank_char1 = rank_chars.shift().toUpperCase(),
            suit_char1 = suit_chars.shift().toUpperCase(),
            rank       = [ rank_char1, ...rank_chars ].join(""),
            suit       = [ suit_char1, ...suit_chars ].join("");

        return `${rank} of ${suit}s`;
    } // end property getter pretty_name

    /**
     *  String conversion method
     *
     *  @return {string} The card ID
     */
    toString() {
        return this.id;
    } // end method toString

} // end class Card

export default Card;
