# Card Sharp

Card Sharp is a utility for simulating a deck of playing cards in Node.js.  It 
is a work in progress and may change significantly before it reaches version 
1.0.

## Quick Start

To get started using Card Sharp quickly, you can use the default ESM export to 
instantiate a new deck.  (Sorry, CommonJS is not supported at this time.  Let 
me know if that's a feature you want.)

Initialize deck:
```Javascript
import sharp from "card-sharp";

let deck = sharp();

console.log(deck.cards.length); // the default deck starts with 52 cards
```

This will give you a simulated deck of 52 French-style playing cards, including 
ace through king in four suits: clubs, diamonds, hearts, and spades.  Jokers 
are not included in the default deck.

From there, you can draw cards from this deck, return them to a discard pile, 
shuffle the deck (optionally returning the discard pile to the deck), or deal 
cards to multiple players in turn.

Note that the deck is not initially shuffled.

Shuffle, draw, and discard:
```Javascript
deck.shuffle(); // initial shuffle

let hand = deck.draw(5); // take 5 cards from the deck

console.log(hand.length);       // there are now 5 cards in your hand
console.log(deck.cards.length); // there are 47 cards left in the deck

deck.discard(hand); // discard all 5 cards in your hand

console.log(hand.length);          // your hand is now empty
console.log(deck.cards.length);    // there are still 47 cards in the deck
console.log(deck.discards.length); // there are 5 cards in the discard pile

deck.shuffle(true); // shuffle again, including discards

console.log(deck.cards.length); // there are 52 cards in the deck again
```

Deal to multiple players:
```Javascript
let players = deck.deal(2, 5); // deal two cards each to 5 separate players

deck.discard(players[3]); // player #4 folds

let community = deck.draw(3); // deal the flop
```

## Exports

Card Sharp's default export is an `init` function which sets up a default 
52-card deck for you.  Additionally, the package entrypoint has the following 
named exports:

* Card - the class representing a single playing card
* Deck - the class representing a deck of playing cards
* config - a configuration object containing data which can be used to set up a deck
* init - the initialization function which is also the default export

## Configuration

Card Sharp is designed to give you significant flexibility over the deck you 
build.  Two pre-defined deck configurations are provided: a 52-card standard 
deck (A-K in four suits) and a 54-card version which is the same as the standard 
deck but additionally includes two jokers.  If you call the `init` function 
without any params, it will return a standard 52-card deck.

```Javascript
import { config, init } from "card-sharp";

let std_deck = init(config.decks.standard),        // same as default
    jok_deck = init(config.decks.standard_jokers); // adds 2 jokers
```

Instead of using a prefab deck, you can build your own by providing an array of 
card option objects to the `init` function:

```Javascript
const custom_card_set = [ { "rank": "a", "suit": "c" }, { "rank": "2", "suit": "c" }, ... ];

let custom_deck = init(custom_card_set);
```

## Card API

To do

## Deck API

To do

---

This readme is under construction.
