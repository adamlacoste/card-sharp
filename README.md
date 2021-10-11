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

## Card API

Card class

 A single French-style playing card.

<a name="new_module_card-sharp/lib/card..Card_new"></a>

### new Card(user_opts)
Card constructor


| Param | Type | Description |
| --- | --- | --- |
| user_opts | <code>object</code> | User options for this card |

<a name="new_module_card-sharp/lib/card..Card_new"></a>

### new Card(user_opts)
Card constructor


| Param | Type | Description |
| --- | --- | --- |
| user_opts | <code>object</code> | User options for this card |

<a name="module_card-sharp/lib/card..Card+toString"></a>

### card.toString() ⇒ <code>string</code>
String conversion method

**Kind**: instance method of [<code>Card</code>](#module_card-sharp/lib/card..Card)  
**Returns**: <code>string</code> - The card ID  
<a name="module_card-sharp/lib/card..Card+toString"></a>

### card.toString() ⇒ <code>string</code>
String conversion method

**Kind**: instance method of [<code>Card</code>](#module_card-sharp/lib/card..Card)  
**Returns**: <code>string</code> - The card ID  
<a name="module_card-sharp/lib/card..Card.fromArray"></a>

### Card.fromArray(cards) ⇒ <code>array.&lt;Card&gt;</code>
Generate cards from an array of objects

**Kind**: static method of [<code>Card</code>](#module_card-sharp/lib/card..Card)  
**Returns**: <code>array.&lt;Card&gt;</code> - The generated cards  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The list of card options |

<a name="module_card-sharp/lib/card..Card.fromArray"></a>

### Card.fromArray(cards) ⇒ <code>array.&lt;Card&gt;</code>
Generate cards from an array of objects

**Kind**: static method of [<code>Card</code>](#module_card-sharp/lib/card..Card)  
**Returns**: <code>array.&lt;Card&gt;</code> - The generated cards  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The list of card options |


## Deck API

Deck class

 A deck of French-style playing cards.

<a name="new_module_card-sharp/lib/deck..Deck_new"></a>

### new Deck(cards)
Deck constructor


| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to add to the deck |

<a name="new_module_card-sharp/lib/deck..Deck_new"></a>

### new Deck(cards)
Deck constructor


| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to add to the deck |

<a name="module_card-sharp/lib/deck..Deck+add"></a>

### deck.add(cards) ⇒ <code>Deck</code>
Add one or more cards to the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to add |

<a name="module_card-sharp/lib/deck..Deck+addOne"></a>

### deck.addOne(card) ⇒ <code>Deck</code>
Add one (and only one) card to the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to add |

<a name="module_card-sharp/lib/deck..Deck+deal"></a>

### deck.deal(num_cards, num_players) ⇒ <code>array.&lt;array.&lt;Card&gt;&gt;</code>
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

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>array.&lt;array.&lt;Card&gt;&gt;</code> - A nested array of cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num_cards | <code>number</code> | <code>1</code> | The number of cards to deal to each player |
| num_players | <code>number</code> | <code>1</code> | The number of players who get cards |

<a name="module_card-sharp/lib/deck..Deck+discard"></a>

### deck.discard(cards) ⇒ <code>Deck</code>
Discard one or more cards

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to discard |

<a name="module_card-sharp/lib/deck..Deck+discardOne"></a>

### deck.discardOne(card) ⇒ <code>Deck</code>
Discard one (and only one) card

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to discard |

<a name="module_card-sharp/lib/deck..Deck+draw"></a>

### deck.draw(count) ⇒ <code>array.&lt;Card&gt;</code>
Draw one or more cards from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>array.&lt;Card&gt;</code> - The drawn cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| count | <code>number</code> | <code>1</code> | The number of cards to draw |

<a name="module_card-sharp/lib/deck..Deck+drawOne"></a>

### deck.drawOne() ⇒ <code>Card</code>
Draw one (and only one) card from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Card</code> - The drawn card  
<a name="module_card-sharp/lib/deck..Deck+remove"></a>

### deck.remove(cards) ⇒ <code>Deck</code>
Remove one or more cards from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to remove |

<a name="module_card-sharp/lib/deck..Deck+removeOne"></a>

### deck.removeOne(card) ⇒ <code>Deck</code>
Remove one (and only one) card from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to remove |

<a name="module_card-sharp/lib/deck..Deck+shuffle"></a>

### deck.shuffle(include_discards) ⇒ <code>Deck</code>
Shuffle the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This (shuffled) deck  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| include_discards | <code>bool</code> | <code>false</code> | Return all cards from the discard pile                                   to the deck prior to shuffling |

<a name="module_card-sharp/lib/deck..Deck+add"></a>

### deck.add(cards) ⇒ <code>Deck</code>
Add one or more cards to the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to add |

<a name="module_card-sharp/lib/deck..Deck+addOne"></a>

### deck.addOne(card) ⇒ <code>Deck</code>
Add one (and only one) card to the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to add |

<a name="module_card-sharp/lib/deck..Deck+deal"></a>

### deck.deal(num_cards, num_players) ⇒ <code>array.&lt;array.&lt;Card&gt;&gt;</code>
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

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>array.&lt;array.&lt;Card&gt;&gt;</code> - A nested array of cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num_cards | <code>number</code> | <code>1</code> | The number of cards to deal to each player |
| num_players | <code>number</code> | <code>1</code> | The number of players who get cards |

<a name="module_card-sharp/lib/deck..Deck+discard"></a>

### deck.discard(cards) ⇒ <code>Deck</code>
Discard one or more cards

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to discard |

<a name="module_card-sharp/lib/deck..Deck+discardOne"></a>

### deck.discardOne(card) ⇒ <code>Deck</code>
Discard one (and only one) card

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to discard |

<a name="module_card-sharp/lib/deck..Deck+draw"></a>

### deck.draw(count) ⇒ <code>array.&lt;Card&gt;</code>
Draw one or more cards from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>array.&lt;Card&gt;</code> - The drawn cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| count | <code>number</code> | <code>1</code> | The number of cards to draw |

<a name="module_card-sharp/lib/deck..Deck+drawOne"></a>

### deck.drawOne() ⇒ <code>Card</code>
Draw one (and only one) card from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Card</code> - The drawn card  
<a name="module_card-sharp/lib/deck..Deck+remove"></a>

### deck.remove(cards) ⇒ <code>Deck</code>
Remove one or more cards from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to remove |

<a name="module_card-sharp/lib/deck..Deck+removeOne"></a>

### deck.removeOne(card) ⇒ <code>Deck</code>
Remove one (and only one) card from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to remove |

<a name="module_card-sharp/lib/deck..Deck+shuffle"></a>

### deck.shuffle(include_discards) ⇒ <code>Deck</code>
Shuffle the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This (shuffled) deck  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| include_discards | <code>bool</code> | <code>false</code> | Return all cards from the discard pile                                   to the deck prior to shuffling |


## Card API

Card class

 A single French-style playing card.

<a name="new_module_card-sharp/lib/card..Card_new"></a>

### new Card(user_opts)
Card constructor


| Param | Type | Description |
| --- | --- | --- |
| user_opts | <code>object</code> | User options for this card |

<a name="new_module_card-sharp/lib/card..Card_new"></a>

### new Card(user_opts)
Card constructor


| Param | Type | Description |
| --- | --- | --- |
| user_opts | <code>object</code> | User options for this card |

<a name="module_card-sharp/lib/card..Card+toString"></a>

### card.toString() ⇒ <code>string</code>
String conversion method

**Kind**: instance method of [<code>Card</code>](#module_card-sharp/lib/card..Card)  
**Returns**: <code>string</code> - The card ID  
<a name="module_card-sharp/lib/card..Card+toString"></a>

### card.toString() ⇒ <code>string</code>
String conversion method

**Kind**: instance method of [<code>Card</code>](#module_card-sharp/lib/card..Card)  
**Returns**: <code>string</code> - The card ID  
<a name="module_card-sharp/lib/card..Card.fromArray"></a>

### Card.fromArray(cards) ⇒ <code>array.&lt;Card&gt;</code>
Generate cards from an array of objects

**Kind**: static method of [<code>Card</code>](#module_card-sharp/lib/card..Card)  
**Returns**: <code>array.&lt;Card&gt;</code> - The generated cards  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The list of card options |

<a name="module_card-sharp/lib/card..Card.fromArray"></a>

### Card.fromArray(cards) ⇒ <code>array.&lt;Card&gt;</code>
Generate cards from an array of objects

**Kind**: static method of [<code>Card</code>](#module_card-sharp/lib/card..Card)  
**Returns**: <code>array.&lt;Card&gt;</code> - The generated cards  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The list of card options |


## Deck API

Deck class

 A deck of French-style playing cards.

<a name="new_module_card-sharp/lib/deck..Deck_new"></a>

### new Deck(cards)
Deck constructor


| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to add to the deck |

<a name="new_module_card-sharp/lib/deck..Deck_new"></a>

### new Deck(cards)
Deck constructor


| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to add to the deck |

<a name="module_card-sharp/lib/deck..Deck+add"></a>

### deck.add(cards) ⇒ <code>Deck</code>
Add one or more cards to the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to add |

<a name="module_card-sharp/lib/deck..Deck+addOne"></a>

### deck.addOne(card) ⇒ <code>Deck</code>
Add one (and only one) card to the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to add |

<a name="module_card-sharp/lib/deck..Deck+deal"></a>

### deck.deal(num_cards, num_players) ⇒ <code>array.&lt;array.&lt;Card&gt;&gt;</code>
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

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>array.&lt;array.&lt;Card&gt;&gt;</code> - A nested array of cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num_cards | <code>number</code> | <code>1</code> | The number of cards to deal to each player |
| num_players | <code>number</code> | <code>1</code> | The number of players who get cards |

<a name="module_card-sharp/lib/deck..Deck+discard"></a>

### deck.discard(cards) ⇒ <code>Deck</code>
Discard one or more cards

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to discard |

<a name="module_card-sharp/lib/deck..Deck+discardOne"></a>

### deck.discardOne(card) ⇒ <code>Deck</code>
Discard one (and only one) card

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to discard |

<a name="module_card-sharp/lib/deck..Deck+draw"></a>

### deck.draw(count) ⇒ <code>array.&lt;Card&gt;</code>
Draw one or more cards from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>array.&lt;Card&gt;</code> - The drawn cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| count | <code>number</code> | <code>1</code> | The number of cards to draw |

<a name="module_card-sharp/lib/deck..Deck+drawOne"></a>

### deck.drawOne() ⇒ <code>Card</code>
Draw one (and only one) card from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Card</code> - The drawn card  
<a name="module_card-sharp/lib/deck..Deck+remove"></a>

### deck.remove(cards) ⇒ <code>Deck</code>
Remove one or more cards from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to remove |

<a name="module_card-sharp/lib/deck..Deck+removeOne"></a>

### deck.removeOne(card) ⇒ <code>Deck</code>
Remove one (and only one) card from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to remove |

<a name="module_card-sharp/lib/deck..Deck+shuffle"></a>

### deck.shuffle(include_discards) ⇒ <code>Deck</code>
Shuffle the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This (shuffled) deck  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| include_discards | <code>bool</code> | <code>false</code> | Return all cards from the discard pile                                   to the deck prior to shuffling |

<a name="module_card-sharp/lib/deck..Deck+add"></a>

### deck.add(cards) ⇒ <code>Deck</code>
Add one or more cards to the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to add |

<a name="module_card-sharp/lib/deck..Deck+addOne"></a>

### deck.addOne(card) ⇒ <code>Deck</code>
Add one (and only one) card to the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to add |

<a name="module_card-sharp/lib/deck..Deck+deal"></a>

### deck.deal(num_cards, num_players) ⇒ <code>array.&lt;array.&lt;Card&gt;&gt;</code>
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

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>array.&lt;array.&lt;Card&gt;&gt;</code> - A nested array of cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num_cards | <code>number</code> | <code>1</code> | The number of cards to deal to each player |
| num_players | <code>number</code> | <code>1</code> | The number of players who get cards |

<a name="module_card-sharp/lib/deck..Deck+discard"></a>

### deck.discard(cards) ⇒ <code>Deck</code>
Discard one or more cards

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to discard |

<a name="module_card-sharp/lib/deck..Deck+discardOne"></a>

### deck.discardOne(card) ⇒ <code>Deck</code>
Discard one (and only one) card

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to discard |

<a name="module_card-sharp/lib/deck..Deck+draw"></a>

### deck.draw(count) ⇒ <code>array.&lt;Card&gt;</code>
Draw one or more cards from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>array.&lt;Card&gt;</code> - The drawn cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| count | <code>number</code> | <code>1</code> | The number of cards to draw |

<a name="module_card-sharp/lib/deck..Deck+drawOne"></a>

### deck.drawOne() ⇒ <code>Card</code>
Draw one (and only one) card from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Card</code> - The drawn card  
<a name="module_card-sharp/lib/deck..Deck+remove"></a>

### deck.remove(cards) ⇒ <code>Deck</code>
Remove one or more cards from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to remove |

<a name="module_card-sharp/lib/deck..Deck+removeOne"></a>

### deck.removeOne(card) ⇒ <code>Deck</code>
Remove one (and only one) card from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to remove |

<a name="module_card-sharp/lib/deck..Deck+shuffle"></a>

### deck.shuffle(include_discards) ⇒ <code>Deck</code>
Shuffle the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This (shuffled) deck  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| include_discards | <code>bool</code> | <code>false</code> | Return all cards from the discard pile                                   to the deck prior to shuffling |


