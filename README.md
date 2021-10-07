# Card Sharp #

Card Sharp is a utility for simulating a deck of playing cards in Node.js.  It 
is a work in progress and may change significantly before it reaches version 
1.0.

## Quick Start ##

To get started using Card Sharp quickly, you can use the default ESM export.  
(Sorry, CommonJS is not supported at this time.  Let me know if that's a 
feature you want.)

Initialize deck:
```Javascript
import sharp from "card-sharp";

let deck = sharp();
```

This will give you a simulated deck of 54 French-style playing cards, including 
ace through king in four suits (clubs, diamonds, hearts, spades) and two jokers.

From there, you draw cards from this deck, return them to a discard pile, 
shuffle the deck (optionally returning the discard pile to the deck), or deal 
cards to multiple players simultaneously.

Note that the deck is not initially shuffled.

Shuffle, draw, and discard:
```Javascript
deck.shuffle(); // initial shuffle

let hand = deck.draw(5); // take 5 cards from the deck

deck.discard(hand); // put all 5 cards in the discard pile

deck.shuffle(true); // shuffle again, including discards
```

Deal to multiple players:
```Javascript
let players = deck.deal(2, 5); // deal two cards each to 5 separate players

deck.discard(players[3]); // player 4 folds

let community = deck.draw(3); // deal the flop
```

This readme is under construction.
