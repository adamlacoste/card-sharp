## Modules
Module | Description
------ | -----------
[card-sharp/lib/deck] | Deck module
[card-sharp/lib/card] | Card module
[card-sharp/lib/deck] | Deck module
[card-sharp] | Main entrypoint module


## card-sharp/lib/deck

Deck module

**Requires**: `module:assert`, [`card-sharp/lib/card`], `module:knuth-shuffle`  
**Author**: Adam Lacoste <adam.lacoste@hotmail.com>  

* [card-sharp/lib/deck]
    * [~Deck]
        * [new Deck(cards)]
        * [new Deck(cards)]
        * [.add(cards)]
        * [.addOne(card)]
        * [.deal(num_cards, num_players)]
        * [.discard(cards)]
        * [.discardOne(card)]
        * [.draw(count)]
        * [.drawOne()]
        * [.remove(cards)]
        * [.removeOne(card)]
        * [.shuffle(include_discards)]
        * [.add(cards)]
        * [.addOne(card)]
        * [.deal(num_cards, num_players)]
        * [.discard(cards)]
        * [.discardOne(card)]
        * [.draw(count)]
        * [.drawOne()]
        * [.remove(cards)]
        * [.removeOne(card)]
        * [.shuffle(include_discards)]
    * [~Deck]
        * [new Deck(cards)]
        * [new Deck(cards)]
        * [.add(cards)]
        * [.addOne(card)]
        * [.deal(num_cards, num_players)]
        * [.discard(cards)]
        * [.discardOne(card)]
        * [.draw(count)]
        * [.drawOne()]
        * [.remove(cards)]
        * [.removeOne(card)]
        * [.shuffle(include_discards)]
        * [.add(cards)]
        * [.addOne(card)]
        * [.deal(num_cards, num_players)]
        * [.discard(cards)]
        * [.discardOne(card)]
        * [.draw(count)]
        * [.drawOne()]
        * [.remove(cards)]
        * [.removeOne(card)]
        * [.shuffle(include_discards)]


### card-sharp/lib/deck~Deck

Deck class

 A deck of French-style playing cards.

**Kind**: inner class of [`card-sharp/lib/deck`]  

* [~Deck]
    * [new Deck(cards)]
    * [new Deck(cards)]
    * [.add(cards)]
    * [.addOne(card)]
    * [.deal(num_cards, num_players)]
    * [.discard(cards)]
    * [.discardOne(card)]
    * [.draw(count)]
    * [.drawOne()]
    * [.remove(cards)]
    * [.removeOne(card)]
    * [.shuffle(include_discards)]
    * [.add(cards)]
    * [.addOne(card)]
    * [.deal(num_cards, num_players)]
    * [.discard(cards)]
    * [.discardOne(card)]
    * [.draw(count)]
    * [.drawOne()]
    * [.remove(cards)]
    * [.removeOne(card)]
    * [.shuffle(include_discards)]


#### new Deck(cards)

Deck constructor


| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to add to the deck |


#### new Deck(cards)

Deck constructor


| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to add to the deck |


#### deck.add(cards)

Add one or more cards to the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to add |


#### deck.addOne(card)

Add one (and only one) card to the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | `Card` | The card to add |


#### deck.deal(num_cards, num_players)

Deal one or more cards to multiple players

 A card is dealt to each player in turn.  If multiple cards are to be 
 dealt to each player, the first player doesn't get a second card until 
 every other player has gotten one.

 When dealing three cards each to three players (A, B, and C), the order 
 of cards dealt would be A, B, C, A, B, C, A, B, C.

 The output is organized by player:

     [
         [ card1, card4, card7 ], // player A's cards
         [ card2, card5, card8 ], // player B's cards
         [ card3, card6, card9 ]  // player C's cards
     ]

**Kind**: instance method of [`Deck`][1]  
**Returns**: `array.<array.<Card>>` - A nested array of cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num_cards | `number` | `1` | The number of cards to deal to each player |
| num_players | `number` | `1` | The number of players who get cards |


#### deck.discard(cards)

Discard one or more cards

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to discard |


#### deck.discardOne(card)

Discard one (and only one) card

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | `Card` | The card to discard |


#### deck.draw(count)

Draw one or more cards from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: `array.<Card>` - The drawn cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| count | `number` | `1` | The number of cards to draw |


#### deck.drawOne()

Draw one (and only one) card from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: `Card` - The drawn card  

#### deck.remove(cards)

Remove one or more cards from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to remove |


#### deck.removeOne(card)

Remove one (and only one) card from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | `Card` | The card to remove |


#### deck.shuffle(include_discards)

Shuffle the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This (shuffled) deck  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| include_discards | `bool` | `false` | Return all cards from the discard pile                                   to the deck prior to shuffling |


#### deck.add(cards)

Add one or more cards to the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to add |


#### deck.addOne(card)

Add one (and only one) card to the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | `Card` | The card to add |


#### deck.deal(num_cards, num_players)

Deal one or more cards to multiple players

 A card is dealt to each player in turn.  If multiple cards are to be 
 dealt to each player, the first player doesn't get a second card until 
 every other player has gotten one.

 When dealing three cards each to three players (A, B, and C), the order 
 of cards dealt would be A, B, C, A, B, C, A, B, C.

 The output is organized by player:

     [
         [ card1, card4, card7 ], // player A's cards
         [ card2, card5, card8 ], // player B's cards
         [ card3, card6, card9 ]  // player C's cards
     ]

**Kind**: instance method of [`Deck`][1]  
**Returns**: `array.<array.<Card>>` - A nested array of cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num_cards | `number` | `1` | The number of cards to deal to each player |
| num_players | `number` | `1` | The number of players who get cards |


#### deck.discard(cards)

Discard one or more cards

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to discard |


#### deck.discardOne(card)

Discard one (and only one) card

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | `Card` | The card to discard |


#### deck.draw(count)

Draw one or more cards from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: `array.<Card>` - The drawn cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| count | `number` | `1` | The number of cards to draw |


#### deck.drawOne()

Draw one (and only one) card from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: `Card` - The drawn card  

#### deck.remove(cards)

Remove one or more cards from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to remove |


#### deck.removeOne(card)

Remove one (and only one) card from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | `Card` | The card to remove |


#### deck.shuffle(include_discards)

Shuffle the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This (shuffled) deck  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| include_discards | `bool` | `false` | Return all cards from the discard pile                                   to the deck prior to shuffling |


### card-sharp/lib/deck~Deck

Deck class

 A deck of French-style playing cards.

**Kind**: inner class of [`card-sharp/lib/deck`]  

* [~Deck]
    * [new Deck(cards)]
    * [new Deck(cards)]
    * [.add(cards)]
    * [.addOne(card)]
    * [.deal(num_cards, num_players)]
    * [.discard(cards)]
    * [.discardOne(card)]
    * [.draw(count)]
    * [.drawOne()]
    * [.remove(cards)]
    * [.removeOne(card)]
    * [.shuffle(include_discards)]
    * [.add(cards)]
    * [.addOne(card)]
    * [.deal(num_cards, num_players)]
    * [.discard(cards)]
    * [.discardOne(card)]
    * [.draw(count)]
    * [.drawOne()]
    * [.remove(cards)]
    * [.removeOne(card)]
    * [.shuffle(include_discards)]


#### new Deck(cards)

Deck constructor


| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to add to the deck |


#### new Deck(cards)

Deck constructor


| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to add to the deck |


#### deck.add(cards)

Add one or more cards to the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to add |


#### deck.addOne(card)

Add one (and only one) card to the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | `Card` | The card to add |


#### deck.deal(num_cards, num_players)

Deal one or more cards to multiple players

 A card is dealt to each player in turn.  If multiple cards are to be 
 dealt to each player, the first player doesn't get a second card until 
 every other player has gotten one.

 When dealing three cards each to three players (A, B, and C), the order 
 of cards dealt would be A, B, C, A, B, C, A, B, C.

 The output is organized by player:

     [
         [ card1, card4, card7 ], // player A's cards
         [ card2, card5, card8 ], // player B's cards
         [ card3, card6, card9 ]  // player C's cards
     ]

**Kind**: instance method of [`Deck`][1]  
**Returns**: `array.<array.<Card>>` - A nested array of cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num_cards | `number` | `1` | The number of cards to deal to each player |
| num_players | `number` | `1` | The number of players who get cards |


#### deck.discard(cards)

Discard one or more cards

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to discard |


#### deck.discardOne(card)

Discard one (and only one) card

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | `Card` | The card to discard |


#### deck.draw(count)

Draw one or more cards from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: `array.<Card>` - The drawn cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| count | `number` | `1` | The number of cards to draw |


#### deck.drawOne()

Draw one (and only one) card from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: `Card` - The drawn card  

#### deck.remove(cards)

Remove one or more cards from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to remove |


#### deck.removeOne(card)

Remove one (and only one) card from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | `Card` | The card to remove |


#### deck.shuffle(include_discards)

Shuffle the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This (shuffled) deck  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| include_discards | `bool` | `false` | Return all cards from the discard pile                                   to the deck prior to shuffling |


#### deck.add(cards)

Add one or more cards to the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to add |


#### deck.addOne(card)

Add one (and only one) card to the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | `Card` | The card to add |


#### deck.deal(num_cards, num_players)

Deal one or more cards to multiple players

 A card is dealt to each player in turn.  If multiple cards are to be 
 dealt to each player, the first player doesn't get a second card until 
 every other player has gotten one.

 When dealing three cards each to three players (A, B, and C), the order 
 of cards dealt would be A, B, C, A, B, C, A, B, C.

 The output is organized by player:

     [
         [ card1, card4, card7 ], // player A's cards
         [ card2, card5, card8 ], // player B's cards
         [ card3, card6, card9 ]  // player C's cards
     ]

**Kind**: instance method of [`Deck`][1]  
**Returns**: `array.<array.<Card>>` - A nested array of cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num_cards | `number` | `1` | The number of cards to deal to each player |
| num_players | `number` | `1` | The number of players who get cards |


#### deck.discard(cards)

Discard one or more cards

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to discard |


#### deck.discardOne(card)

Discard one (and only one) card

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | `Card` | The card to discard |


#### deck.draw(count)

Draw one or more cards from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: `array.<Card>` - The drawn cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| count | `number` | `1` | The number of cards to draw |


#### deck.drawOne()

Draw one (and only one) card from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: `Card` - The drawn card  

#### deck.remove(cards)

Remove one or more cards from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to remove |


#### deck.removeOne(card)

Remove one (and only one) card from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | `Card` | The card to remove |


#### deck.shuffle(include_discards)

Shuffle the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This (shuffled) deck  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| include_discards | `bool` | `false` | Return all cards from the discard pile                                   to the deck prior to shuffling |


## card-sharp/lib/card

Card module

**Requires**: `module:assert`, `module:deep-extend`, `module:just-typeof`  
**Author**: Adam Lacoste <adam.lacoste@hotmail.com>  

* [card-sharp/lib/card]
    * [~Card]
        * [new Card(user_opts)]
        * _instance_
            * [.toString()]
        * _static_
            * [.fromArray(cards)]


### card-sharp/lib/card~Card

Card class

 A single French-style playing card.

**Kind**: inner class of [`card-sharp/lib/card`]  

* [~Card]
    * [new Card(user_opts)]
    * _instance_
        * [.toString()]
    * _static_
        * [.fromArray(cards)]


#### new Card(user_opts)

Card constructor


| Param | Type | Description |
| --- | --- | --- |
| user_opts | `object` | User options for this card |


#### card.toString()

String conversion method

**Kind**: instance method of [`Card`]  
**Returns**: `string` - The card ID  

#### Card.fromArray(cards)

Generate cards from an array of objects

**Kind**: static method of [`Card`]  
**Returns**: `array.<Card>` - The generated cards  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The list of card options |


## card-sharp/lib/deck

Deck module

**Requires**: `module:assert`, [`card-sharp/lib/card`], `module:knuth-shuffle`  
**Author**: Adam Lacoste <adam.lacoste@hotmail.com>  

* [card-sharp/lib/deck]
    * [~Deck]
        * [new Deck(cards)]
        * [new Deck(cards)]
        * [.add(cards)]
        * [.addOne(card)]
        * [.deal(num_cards, num_players)]
        * [.discard(cards)]
        * [.discardOne(card)]
        * [.draw(count)]
        * [.drawOne()]
        * [.remove(cards)]
        * [.removeOne(card)]
        * [.shuffle(include_discards)]
        * [.add(cards)]
        * [.addOne(card)]
        * [.deal(num_cards, num_players)]
        * [.discard(cards)]
        * [.discardOne(card)]
        * [.draw(count)]
        * [.drawOne()]
        * [.remove(cards)]
        * [.removeOne(card)]
        * [.shuffle(include_discards)]
    * [~Deck]
        * [new Deck(cards)]
        * [new Deck(cards)]
        * [.add(cards)]
        * [.addOne(card)]
        * [.deal(num_cards, num_players)]
        * [.discard(cards)]
        * [.discardOne(card)]
        * [.draw(count)]
        * [.drawOne()]
        * [.remove(cards)]
        * [.removeOne(card)]
        * [.shuffle(include_discards)]
        * [.add(cards)]
        * [.addOne(card)]
        * [.deal(num_cards, num_players)]
        * [.discard(cards)]
        * [.discardOne(card)]
        * [.draw(count)]
        * [.drawOne()]
        * [.remove(cards)]
        * [.removeOne(card)]
        * [.shuffle(include_discards)]


### card-sharp/lib/deck~Deck

Deck class

 A deck of French-style playing cards.

**Kind**: inner class of [`card-sharp/lib/deck`]  

* [~Deck]
    * [new Deck(cards)]
    * [new Deck(cards)]
    * [.add(cards)]
    * [.addOne(card)]
    * [.deal(num_cards, num_players)]
    * [.discard(cards)]
    * [.discardOne(card)]
    * [.draw(count)]
    * [.drawOne()]
    * [.remove(cards)]
    * [.removeOne(card)]
    * [.shuffle(include_discards)]
    * [.add(cards)]
    * [.addOne(card)]
    * [.deal(num_cards, num_players)]
    * [.discard(cards)]
    * [.discardOne(card)]
    * [.draw(count)]
    * [.drawOne()]
    * [.remove(cards)]
    * [.removeOne(card)]
    * [.shuffle(include_discards)]


#### new Deck(cards)

Deck constructor


| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to add to the deck |


#### new Deck(cards)

Deck constructor


| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to add to the deck |


#### deck.add(cards)

Add one or more cards to the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to add |


#### deck.addOne(card)

Add one (and only one) card to the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | [`Card`] | The card to add |


#### deck.deal(num_cards, num_players)

Deal one or more cards to multiple players

 A card is dealt to each player in turn.  If multiple cards are to be 
 dealt to each player, the first player doesn't get a second card until 
 every other player has gotten one.

 When dealing three cards each to three players (A, B, and C), the order 
 of cards dealt would be A, B, C, A, B, C, A, B, C.

 The output is organized by player:

     [
         [ card1, card4, card7 ], // player A's cards
         [ card2, card5, card8 ], // player B's cards
         [ card3, card6, card9 ]  // player C's cards
     ]

**Kind**: instance method of [`Deck`][1]  
**Returns**: `array.<array.<Card>>` - A nested array of cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num_cards | `number` | `1` | The number of cards to deal to each player |
| num_players | `number` | `1` | The number of players who get cards |


#### deck.discard(cards)

Discard one or more cards

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to discard |


#### deck.discardOne(card)

Discard one (and only one) card

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | [`Card`] | The card to discard |


#### deck.draw(count)

Draw one or more cards from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: `array.<Card>` - The drawn cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| count | `number` | `1` | The number of cards to draw |


#### deck.drawOne()

Draw one (and only one) card from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Card`] - The drawn card  

#### deck.remove(cards)

Remove one or more cards from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to remove |


#### deck.removeOne(card)

Remove one (and only one) card from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | [`Card`] | The card to remove |


#### deck.shuffle(include_discards)

Shuffle the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This (shuffled) deck  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| include_discards | `bool` | `false` | Return all cards from the discard pile                                   to the deck prior to shuffling |


#### deck.add(cards)

Add one or more cards to the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to add |


#### deck.addOne(card)

Add one (and only one) card to the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | [`Card`] | The card to add |


#### deck.deal(num_cards, num_players)

Deal one or more cards to multiple players

 A card is dealt to each player in turn.  If multiple cards are to be 
 dealt to each player, the first player doesn't get a second card until 
 every other player has gotten one.

 When dealing three cards each to three players (A, B, and C), the order 
 of cards dealt would be A, B, C, A, B, C, A, B, C.

 The output is organized by player:

     [
         [ card1, card4, card7 ], // player A's cards
         [ card2, card5, card8 ], // player B's cards
         [ card3, card6, card9 ]  // player C's cards
     ]

**Kind**: instance method of [`Deck`][1]  
**Returns**: `array.<array.<Card>>` - A nested array of cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num_cards | `number` | `1` | The number of cards to deal to each player |
| num_players | `number` | `1` | The number of players who get cards |


#### deck.discard(cards)

Discard one or more cards

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to discard |


#### deck.discardOne(card)

Discard one (and only one) card

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | [`Card`] | The card to discard |


#### deck.draw(count)

Draw one or more cards from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: `array.<Card>` - The drawn cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| count | `number` | `1` | The number of cards to draw |


#### deck.drawOne()

Draw one (and only one) card from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Card`] - The drawn card  

#### deck.remove(cards)

Remove one or more cards from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to remove |


#### deck.removeOne(card)

Remove one (and only one) card from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | [`Card`] | The card to remove |


#### deck.shuffle(include_discards)

Shuffle the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This (shuffled) deck  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| include_discards | `bool` | `false` | Return all cards from the discard pile                                   to the deck prior to shuffling |


### card-sharp/lib/deck~Deck

Deck class

 A deck of French-style playing cards.

**Kind**: inner class of [`card-sharp/lib/deck`]  

* [~Deck]
    * [new Deck(cards)]
    * [new Deck(cards)]
    * [.add(cards)]
    * [.addOne(card)]
    * [.deal(num_cards, num_players)]
    * [.discard(cards)]
    * [.discardOne(card)]
    * [.draw(count)]
    * [.drawOne()]
    * [.remove(cards)]
    * [.removeOne(card)]
    * [.shuffle(include_discards)]
    * [.add(cards)]
    * [.addOne(card)]
    * [.deal(num_cards, num_players)]
    * [.discard(cards)]
    * [.discardOne(card)]
    * [.draw(count)]
    * [.drawOne()]
    * [.remove(cards)]
    * [.removeOne(card)]
    * [.shuffle(include_discards)]


#### new Deck(cards)

Deck constructor


| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to add to the deck |


#### new Deck(cards)

Deck constructor


| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to add to the deck |


#### deck.add(cards)

Add one or more cards to the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to add |


#### deck.addOne(card)

Add one (and only one) card to the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | [`Card`] | The card to add |


#### deck.deal(num_cards, num_players)

Deal one or more cards to multiple players

 A card is dealt to each player in turn.  If multiple cards are to be 
 dealt to each player, the first player doesn't get a second card until 
 every other player has gotten one.

 When dealing three cards each to three players (A, B, and C), the order 
 of cards dealt would be A, B, C, A, B, C, A, B, C.

 The output is organized by player:

     [
         [ card1, card4, card7 ], // player A's cards
         [ card2, card5, card8 ], // player B's cards
         [ card3, card6, card9 ]  // player C's cards
     ]

**Kind**: instance method of [`Deck`][1]  
**Returns**: `array.<array.<Card>>` - A nested array of cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num_cards | `number` | `1` | The number of cards to deal to each player |
| num_players | `number` | `1` | The number of players who get cards |


#### deck.discard(cards)

Discard one or more cards

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to discard |


#### deck.discardOne(card)

Discard one (and only one) card

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | [`Card`] | The card to discard |


#### deck.draw(count)

Draw one or more cards from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: `array.<Card>` - The drawn cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| count | `number` | `1` | The number of cards to draw |


#### deck.drawOne()

Draw one (and only one) card from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Card`] - The drawn card  

#### deck.remove(cards)

Remove one or more cards from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to remove |


#### deck.removeOne(card)

Remove one (and only one) card from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | [`Card`] | The card to remove |


#### deck.shuffle(include_discards)

Shuffle the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This (shuffled) deck  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| include_discards | `bool` | `false` | Return all cards from the discard pile                                   to the deck prior to shuffling |


#### deck.add(cards)

Add one or more cards to the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to add |


#### deck.addOne(card)

Add one (and only one) card to the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | [`Card`] | The card to add |


#### deck.deal(num_cards, num_players)

Deal one or more cards to multiple players

 A card is dealt to each player in turn.  If multiple cards are to be 
 dealt to each player, the first player doesn't get a second card until 
 every other player has gotten one.

 When dealing three cards each to three players (A, B, and C), the order 
 of cards dealt would be A, B, C, A, B, C, A, B, C.

 The output is organized by player:

     [
         [ card1, card4, card7 ], // player A's cards
         [ card2, card5, card8 ], // player B's cards
         [ card3, card6, card9 ]  // player C's cards
     ]

**Kind**: instance method of [`Deck`][1]  
**Returns**: `array.<array.<Card>>` - A nested array of cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num_cards | `number` | `1` | The number of cards to deal to each player |
| num_players | `number` | `1` | The number of players who get cards |


#### deck.discard(cards)

Discard one or more cards

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to discard |


#### deck.discardOne(card)

Discard one (and only one) card

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | [`Card`] | The card to discard |


#### deck.draw(count)

Draw one or more cards from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: `array.<Card>` - The drawn cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| count | `number` | `1` | The number of cards to draw |


#### deck.drawOne()

Draw one (and only one) card from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Card`] - The drawn card  

#### deck.remove(cards)

Remove one or more cards from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | `array` | The cards to remove |


#### deck.removeOne(card)

Remove one (and only one) card from the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | [`Card`] | The card to remove |


#### deck.shuffle(include_discards)

Shuffle the deck

**Kind**: instance method of [`Deck`]  
**Returns**: [`Deck`] - This (shuffled) deck  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| include_discards | `bool` | `false` | Return all cards from the discard pile                                   to the deck prior to shuffling |


## card-sharp

Main entrypoint module

**Requires**: `module:deep-extend`, [`card-sharp/lib/card`], [`card-sharp/lib/deck`]  
**Author**: Adam Lacoste <adam.lacoste@hotmail.com>  
<!-- LINKS -->

[card-sharp/lib/deck]:#card-sharplibdeck
[card-sharp/lib/card]:#card-sharplibcard
[card-sharp]:#card-sharp
[`card-sharp/lib/card`]:#card-sharplibcard
[~Deck]:#card-sharplibdeckdeck
[`card-sharp/lib/deck`]:#card-sharplibdeck
[`Deck`]:#new-deckcards
[1]:#new-deckcards
[~Card]:#card-sharplibcardcard
[`Card`]:#new-carduser_opts
[new Deck(cards)]:#new-deckcards
[.add(cards)]:#deckaddcards
[.addOne(card)]:#deckaddonecard
[.deal(num_cards, num_players)]:#deckdealnum_cards-num_players
[.discard(cards)]:#deckdiscardcards
[.discardOne(card)]:#deckdiscardonecard
[.draw(count)]:#deckdrawcount
[.drawOne()]:#deckdrawone
[.remove(cards)]:#deckremovecards
[.removeOne(card)]:#deckremoveonecard
[.shuffle(include_discards)]:#deckshuffleinclude_discards
[new Card(user_opts)]:#new-carduser_opts
[.toString()]:#cardtostring
[.fromArray(cards)]:#cardfromarraycards
