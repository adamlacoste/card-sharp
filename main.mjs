/**
 *  Main entrypoint (ESM) module
 *
 *  @author    Adam Lacoste <adam.lacoste@hotmail.com>
 *  @copyright 2021 Adam Lacoste
 *
 *  @module card-sharp/mjs
 *
 *  @requires deep-extend
 *  @requires card-sharp/lib/card
 *  @requires card-sharp/lib/deck
 */

import extend    from "deep-extend";
import Card      from "./lib/card.mjs";
import Deck      from "./lib/deck.mjs";
import std_deck  from "./config/decks/standard.json";
import stdj_deck from "./config/decks/standard_jokers.json";

const config     = { "decks": { "standard": std_deck, "standard_jokers": stdj_deck } },
    default_opts = { "cards": std_deck };

function init(user_opts = {}) {
    let opts  = extend({}, default_opts, user_opts),
        cards = Card.fromArray(opts.cards);

    return new Deck(cards);
} // end function init

export { Card, Deck, config, init };
export default init;
