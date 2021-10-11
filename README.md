# Card Sharp

<img src="https://raw.githubusercontent.com/adamlacoste/vector-playing-cards/bd9cfc6f13674fe9d4c0bd32a5c9ca2c1b56185d/jack_of_hearts.svg" alt="Jack of Hearts" width="50" /> <img src="https://raw.githubusercontent.com/adamlacoste/vector-playing-cards/bd9cfc6f13674fe9d4c0bd32a5c9ca2c1b56185d/queen_of_spades.svg" alt="Queen of Spades" width="50" /> <img src="https://raw.githubusercontent.com/adamlacoste/vector-playing-cards/bd9cfc6f13674fe9d4c0bd32a5c9ca2c1b56185d/king_of_diamonds.svg" alt="King of Diamonds" width="50" /> <img src="https://raw.githubusercontent.com/adamlacoste/vector-playing-cards/bd9cfc6f13674fe9d4c0bd32a5c9ca2c1b56185d/ace_of_clubs.svg" alt="Ace of Clubs" width="50" />

**Card Sharp** is a utility for simulating a deck of playing cards in Node.js.  
It is a work in progress and may change significantly before it reaches version 
1.0.

## Quick Start

To get started using Card Sharp, you can use the default ESM export to 
instantiate a new deck.

**Initialize deck (ESM)**
```Javascript
import sharp from "card-sharp";

let deck = sharp();

console.log(deck.cards.length); // the default deck starts with 52 cards
```

CommonJS users can `require` the module, but should be advised that the module 
export is a promise which will resolve into an object containing the ESM 
module's named exports.

**Initialize deck (CJS)**
```Javascript
require("card-sharp").then((sharp) => {
    let deck = sharp.init(); // the same 52-card deck
});
```

Either method will give you a simulated deck of 52 French-style playing cards, 
including ace through king in four suits: clubs (♣︎), diamonds (♦︎), hearts (♥︎), 
and spades (♠︎).  Jokers are not included in the default deck.

From there, you can `draw` cards from this deck, return them to a `discard` 
pile, `shuffle` the deck (optionally returning the discard pile to the deck), 
or `deal` cards to multiple players in turn.

Note that the deck is not initially shuffled.

**Shuffle, draw, and discard**
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

**Deal to multiple players**
```Javascript
let players = deck.deal(2, 5); // deal two cards each to 5 separate players

deck.discard(players[3]); // player #4 folds

let community = deck.draw(3); // deal the flop
```

## Exports

Card Sharp's default export is an `init` function which sets up a default 
52-card deck for you.  Additionally, the package entrypoint has the following 
named exports:

* `Card` - the class representing a single playing card
* `Deck` - the class representing a deck of playing cards
* `config` - a configuration object containing data which can be used to set up a deck
* `init` - the initialization function which is also the default export

## Configuration

Card Sharp is designed to give you significant flexibility over the deck you 
build.  Two pre-defined deck configurations are provided: a 52-card standard 
deck (A-K in four suits) and a 54-card version which is the same as the standard 
deck but additionally includes two jokers.  If you call the `init` function 
without any params, it will return a standard 52-card deck.

```Javascript
import { config, init } from "card-sharp";

let std_deck = init({ "cards": config.decks.standard }),        // same as default
    jok_deck = init({ "cards": config.decks.standard_jokers }); // adds 2 jokers
```

Instead of using a prefab deck, you can build your own by providing an array of 
card option objects to the `init` function:

```Javascript
const custom_card_set = [ { "rank": "a", "suit": "c" }, { "rank": "2", "suit": "c" }, ... ];

let custom_deck = init(custom_card_set);
```

## Modules

<dl>
<dt><a href="#module_card-sharp/cjs">card-sharp/cjs</a></dt>
<dd><p>Main entrypoint (CommonJS) module</p>
</dd>
<dt><a href="#module_card-sharp/mjs">card-sharp/mjs</a></dt>
<dd><p>Main entrypoint (ESM) module</p>
</dd>
<dt><a href="#module_card-sharp/lib/card">card-sharp/lib/card</a></dt>
<dd><p>Card module</p>
</dd>
<dt><a href="#module_card-sharp/lib/deck">card-sharp/lib/deck</a></dt>
<dd><p>Deck module</p>
</dd>
</dl>

<a name="module_card-sharp/cjs"></a>

## card-sharp/cjs
**Author**: Adam Lacoste <adam.lacoste@hotmail.com>  
Main entrypoint (CommonJS) module

<a name="module_card-sharp/mjs"></a>

## card-sharp/mjs
**Author**: Adam Lacoste <adam.lacoste@hotmail.com>  
Main entrypoint (ESM) module

<a name="module_card-sharp/lib/card"></a>

## card-sharp/lib/card
**Author**: Adam Lacoste <adam.lacoste@hotmail.com>  
Card module


* [card-sharp/lib/card](#module_card-sharp/lib/card)

    * [~Card](#module_card-sharp/lib/card..Card)

        * [new Card(user_opts)](#new_module_card-sharp/lib/card..Card_new)

        * _instance_
            * [.toString()](#module_card-sharp/lib/card..Card+toString)

        * _static_
            * [.fromArray(cards)](#module_card-sharp/lib/card..Card.fromArray)


<a name="module_card-sharp/lib/card..Card"></a>

### *card-sharp/lib/card*~Card
Card class

 A single French-style playing card.


* [~Card](#module_card-sharp/lib/card..Card)

    * [new Card(user_opts)](#new_module_card-sharp/lib/card..Card_new)

    * _instance_
        * [.toString()](#module_card-sharp/lib/card..Card+toString)

    * _static_
        * [.fromArray(cards)](#module_card-sharp/lib/card..Card.fromArray)


<a name="new_module_card-sharp/lib/card..Card_new"></a>

#### new Card(user_opts)

| Param | Type | Description |
| --- | --- | --- |
| user_opts | <code>object</code> | User options for this card |

Card constructor

<a name="module_card-sharp/lib/card..Card+toString"></a>

#### *card*.toString()
String conversion method

**Returns**: <code>string</code> - The card ID  
<a name="module_card-sharp/lib/card..Card.fromArray"></a>

#### *Card*.fromArray(cards)

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The list of card options |

Generate cards from an array of objects

**Returns**: <code>array.&lt;Card&gt;</code> - The generated cards  
<a name="module_card-sharp/lib/deck"></a>

## card-sharp/lib/deck
**Author**: Adam Lacoste <adam.lacoste@hotmail.com>  
Deck module


* [card-sharp/lib/deck](#module_card-sharp/lib/deck)

    * [~Deck](#module_card-sharp/lib/deck..Deck)

        * [new Deck(cards)](#new_module_card-sharp/lib/deck..Deck_new)

        * [.add(cards)](#module_card-sharp/lib/deck..Deck+add)

        * [.addOne(card)](#module_card-sharp/lib/deck..Deck+addOne)

        * [.deal(num_cards, num_players)](#module_card-sharp/lib/deck..Deck+deal)

        * [.discard(cards)](#module_card-sharp/lib/deck..Deck+discard)

        * [.discardOne(card)](#module_card-sharp/lib/deck..Deck+discardOne)

        * [.draw(count)](#module_card-sharp/lib/deck..Deck+draw)

        * [.drawOne()](#module_card-sharp/lib/deck..Deck+drawOne)

        * [.remove(cards)](#module_card-sharp/lib/deck..Deck+remove)

        * [.removeOne(card)](#module_card-sharp/lib/deck..Deck+removeOne)

        * [.shuffle(include_discards)](#module_card-sharp/lib/deck..Deck+shuffle)


<a name="module_card-sharp/lib/deck..Deck"></a>

### *card-sharp/lib/deck*~Deck
Deck class

 A deck of French-style playing cards.


* [~Deck](#module_card-sharp/lib/deck..Deck)

    * [new Deck(cards)](#new_module_card-sharp/lib/deck..Deck_new)

    * [.add(cards)](#module_card-sharp/lib/deck..Deck+add)

    * [.addOne(card)](#module_card-sharp/lib/deck..Deck+addOne)

    * [.deal(num_cards, num_players)](#module_card-sharp/lib/deck..Deck+deal)

    * [.discard(cards)](#module_card-sharp/lib/deck..Deck+discard)

    * [.discardOne(card)](#module_card-sharp/lib/deck..Deck+discardOne)

    * [.draw(count)](#module_card-sharp/lib/deck..Deck+draw)

    * [.drawOne()](#module_card-sharp/lib/deck..Deck+drawOne)

    * [.remove(cards)](#module_card-sharp/lib/deck..Deck+remove)

    * [.removeOne(card)](#module_card-sharp/lib/deck..Deck+removeOne)

    * [.shuffle(include_discards)](#module_card-sharp/lib/deck..Deck+shuffle)


<a name="new_module_card-sharp/lib/deck..Deck_new"></a>

#### new Deck(cards)

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to add to the deck |

Deck constructor

<a name="module_card-sharp/lib/deck..Deck+add"></a>

#### *deck*.add(cards)

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to add |

Add one or more cards to the deck

**Returns**: <code>Deck</code> - This deck  
<a name="module_card-sharp/lib/deck..Deck+addOne"></a>

#### *deck*.addOne(card)

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to add |

Add one (and only one) card to the deck

**Returns**: <code>Deck</code> - This deck  
<a name="module_card-sharp/lib/deck..Deck+deal"></a>

#### *deck*.deal(num_cards, num_players)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num_cards | <code>number</code> | <code>1</code> | The number of cards to deal to each player |
| num_players | <code>number</code> | <code>1</code> | The number of players who get cards |

Deal one or more cards to multiple players

 A card is dealt to each player in turn.  If multiple cards are to be 
 dealt to each player, the first player doesn't get a second card until 
 every other player has gotten one.

 When dealing three cards each to three players (A, B, and C), the order 
 of cards dealt would be A1, B1, C1, A2, B2, C2, A3, B3, C3.

 The output is organized by player:

     [
         [ card1, card4, card7 ], // player A's cards
         [ card2, card5, card8 ], // player B's cards
         [ card3, card6, card9 ]  // player C's cards
     ]

**Returns**: <code>array.&lt;array.&lt;Card&gt;&gt;</code> - A nested array of cards  
<a name="module_card-sharp/lib/deck..Deck+discard"></a>

#### *deck*.discard(cards)

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to discard |

Discard one or more cards

**Returns**: <code>Deck</code> - This deck  
<a name="module_card-sharp/lib/deck..Deck+discardOne"></a>

#### *deck*.discardOne(card)

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to discard |

Discard one (and only one) card

**Returns**: <code>Deck</code> - This deck  
<a name="module_card-sharp/lib/deck..Deck+draw"></a>

#### *deck*.draw(count)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| count | <code>number</code> | <code>1</code> | The number of cards to draw |

Draw one or more cards from the deck

**Returns**: <code>array.&lt;Card&gt;</code> - The drawn cards  
<a name="module_card-sharp/lib/deck..Deck+drawOne"></a>

#### *deck*.drawOne()
Draw one (and only one) card from the deck

**Returns**: <code>Card</code> - The drawn card  
<a name="module_card-sharp/lib/deck..Deck+remove"></a>

#### *deck*.remove(cards)

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to remove |

Remove one or more cards from the deck

**Returns**: <code>Deck</code> - This deck  
<a name="module_card-sharp/lib/deck..Deck+removeOne"></a>

#### *deck*.removeOne(card)

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to remove |

Remove one (and only one) card from the deck

**Returns**: <code>Deck</code> - This deck  
<a name="module_card-sharp/lib/deck..Deck+shuffle"></a>

#### *deck*.shuffle(include_discards)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| include_discards | <code>bool</code> | <code>false</code> | Return all cards from the discard pile                                   to the deck prior to shuffling |

Shuffle the deck

**Returns**: <code>Deck</code> - This (shuffled) deck  
