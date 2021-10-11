## Modules

<dl>
<dt><a href="#module_card-sharp/mjs">card-sharp/mjs</a></dt>
<dd><p>Main entrypoint (ESM) module</p>
</dd>
<dt><a href="#module_card-sharp/lib/card">card-sharp/lib/card</a></dt>
<dd><p>Card module</p>
</dd>
<dt><a href="#module_card-sharp/lib/deck">card-sharp/lib/deck</a></dt>
<dd><p>Deck module</p>
</dd>
<dt><a href="#module_card-sharp/mjs">card-sharp/mjs</a></dt>
<dd><p>Main entrypoint (ESM) module</p>
</dd>
</dl>

<a name="module_card-sharp/mjs"></a>

## card-sharp/mjs
Main entrypoint (ESM) module

**Requires**: <code>module:deep-extend</code>, [<code>card-sharp/lib/card</code>](#module_card-sharp/lib/card), [<code>card-sharp/lib/deck</code>](#module_card-sharp/lib/deck)  
**Author**: Adam Lacoste <adam.lacoste@hotmail.com>  
<a name="module_card-sharp/lib/card"></a>

## card-sharp/lib/card
Card module

**Requires**: <code>module:assert</code>, <code>module:deep-extend</code>, <code>module:just-typeof</code>  
**Author**: Adam Lacoste <adam.lacoste@hotmail.com>  

* [card-sharp/lib/card](#module_card-sharp/lib/card)
    * [~Card](#module_card-sharp/lib/card..Card)
        * [new Card(user_opts)](#new_module_card-sharp/lib/card..Card_new)
        * _instance_
            * [.toString()](#module_card-sharp/lib/card..Card+toString) ⇒ <code>string</code>
        * _static_
            * [.fromArray(cards)](#module_card-sharp/lib/card..Card.fromArray) ⇒ <code>array.&lt;Card&gt;</code>

<a name="module_card-sharp/lib/card..Card"></a>

### card-sharp/lib/card~Card
Card class

 A single French-style playing card.

**Kind**: inner class of [<code>card-sharp/lib/card</code>](#module_card-sharp/lib/card)  

* [~Card](#module_card-sharp/lib/card..Card)
    * [new Card(user_opts)](#new_module_card-sharp/lib/card..Card_new)
    * _instance_
        * [.toString()](#module_card-sharp/lib/card..Card+toString) ⇒ <code>string</code>
    * _static_
        * [.fromArray(cards)](#module_card-sharp/lib/card..Card.fromArray) ⇒ <code>array.&lt;Card&gt;</code>

<a name="new_module_card-sharp/lib/card..Card_new"></a>

#### new Card(user_opts)
Card constructor


| Param | Type | Description |
| --- | --- | --- |
| user_opts | <code>object</code> | User options for this card |

<a name="module_card-sharp/lib/card..Card+toString"></a>

#### card.toString() ⇒ <code>string</code>
String conversion method

**Kind**: instance method of [<code>Card</code>](#module_card-sharp/lib/card..Card)  
**Returns**: <code>string</code> - The card ID  
<a name="module_card-sharp/lib/card..Card.fromArray"></a>

#### Card.fromArray(cards) ⇒ <code>array.&lt;Card&gt;</code>
Generate cards from an array of objects

**Kind**: static method of [<code>Card</code>](#module_card-sharp/lib/card..Card)  
**Returns**: <code>array.&lt;Card&gt;</code> - The generated cards  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The list of card options |

<a name="module_card-sharp/lib/deck"></a>

## card-sharp/lib/deck
Deck module

**Requires**: <code>module:assert</code>, [<code>card-sharp/lib/card</code>](#module_card-sharp/lib/card), <code>module:knuth-shuffle</code>  
**Author**: Adam Lacoste <adam.lacoste@hotmail.com>  

* [card-sharp/lib/deck](#module_card-sharp/lib/deck)
    * [~Deck](#module_card-sharp/lib/deck..Deck)
        * [new Deck(cards)](#new_module_card-sharp/lib/deck..Deck_new)
        * [.add(cards)](#module_card-sharp/lib/deck..Deck+add) ⇒ <code>Deck</code>
        * [.addOne(card)](#module_card-sharp/lib/deck..Deck+addOne) ⇒ <code>Deck</code>
        * [.deal(num_cards, num_players)](#module_card-sharp/lib/deck..Deck+deal) ⇒ <code>array.&lt;array.&lt;Card&gt;&gt;</code>
        * [.discard(cards)](#module_card-sharp/lib/deck..Deck+discard) ⇒ <code>Deck</code>
        * [.discardOne(card)](#module_card-sharp/lib/deck..Deck+discardOne) ⇒ <code>Deck</code>
        * [.draw(count)](#module_card-sharp/lib/deck..Deck+draw) ⇒ <code>array.&lt;Card&gt;</code>
        * [.drawOne()](#module_card-sharp/lib/deck..Deck+drawOne) ⇒ <code>Card</code>
        * [.remove(cards)](#module_card-sharp/lib/deck..Deck+remove) ⇒ <code>Deck</code>
        * [.removeOne(card)](#module_card-sharp/lib/deck..Deck+removeOne) ⇒ <code>Deck</code>
        * [.shuffle(include_discards)](#module_card-sharp/lib/deck..Deck+shuffle) ⇒ <code>Deck</code>

<a name="module_card-sharp/lib/deck..Deck"></a>

### card-sharp/lib/deck~Deck
Deck class

 A deck of French-style playing cards.

**Kind**: inner class of [<code>card-sharp/lib/deck</code>](#module_card-sharp/lib/deck)  

* [~Deck](#module_card-sharp/lib/deck..Deck)
    * [new Deck(cards)](#new_module_card-sharp/lib/deck..Deck_new)
    * [.add(cards)](#module_card-sharp/lib/deck..Deck+add) ⇒ <code>Deck</code>
    * [.addOne(card)](#module_card-sharp/lib/deck..Deck+addOne) ⇒ <code>Deck</code>
    * [.deal(num_cards, num_players)](#module_card-sharp/lib/deck..Deck+deal) ⇒ <code>array.&lt;array.&lt;Card&gt;&gt;</code>
    * [.discard(cards)](#module_card-sharp/lib/deck..Deck+discard) ⇒ <code>Deck</code>
    * [.discardOne(card)](#module_card-sharp/lib/deck..Deck+discardOne) ⇒ <code>Deck</code>
    * [.draw(count)](#module_card-sharp/lib/deck..Deck+draw) ⇒ <code>array.&lt;Card&gt;</code>
    * [.drawOne()](#module_card-sharp/lib/deck..Deck+drawOne) ⇒ <code>Card</code>
    * [.remove(cards)](#module_card-sharp/lib/deck..Deck+remove) ⇒ <code>Deck</code>
    * [.removeOne(card)](#module_card-sharp/lib/deck..Deck+removeOne) ⇒ <code>Deck</code>
    * [.shuffle(include_discards)](#module_card-sharp/lib/deck..Deck+shuffle) ⇒ <code>Deck</code>

<a name="new_module_card-sharp/lib/deck..Deck_new"></a>

#### new Deck(cards)
Deck constructor


| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to add to the deck |

<a name="module_card-sharp/lib/deck..Deck+add"></a>

#### deck.add(cards) ⇒ <code>Deck</code>
Add one or more cards to the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to add |

<a name="module_card-sharp/lib/deck..Deck+addOne"></a>

#### deck.addOne(card) ⇒ <code>Deck</code>
Add one (and only one) card to the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to add |

<a name="module_card-sharp/lib/deck..Deck+deal"></a>

#### deck.deal(num_cards, num_players) ⇒ <code>array.&lt;array.&lt;Card&gt;&gt;</code>
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

#### deck.discard(cards) ⇒ <code>Deck</code>
Discard one or more cards

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to discard |

<a name="module_card-sharp/lib/deck..Deck+discardOne"></a>

#### deck.discardOne(card) ⇒ <code>Deck</code>
Discard one (and only one) card

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to discard |

<a name="module_card-sharp/lib/deck..Deck+draw"></a>

#### deck.draw(count) ⇒ <code>array.&lt;Card&gt;</code>
Draw one or more cards from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>array.&lt;Card&gt;</code> - The drawn cards  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| count | <code>number</code> | <code>1</code> | The number of cards to draw |

<a name="module_card-sharp/lib/deck..Deck+drawOne"></a>

#### deck.drawOne() ⇒ <code>Card</code>
Draw one (and only one) card from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Card</code> - The drawn card  
<a name="module_card-sharp/lib/deck..Deck+remove"></a>

#### deck.remove(cards) ⇒ <code>Deck</code>
Remove one or more cards from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The cards to remove |

<a name="module_card-sharp/lib/deck..Deck+removeOne"></a>

#### deck.removeOne(card) ⇒ <code>Deck</code>
Remove one (and only one) card from the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This deck  

| Param | Type | Description |
| --- | --- | --- |
| card | <code>Card</code> | The card to remove |

<a name="module_card-sharp/lib/deck..Deck+shuffle"></a>

#### deck.shuffle(include_discards) ⇒ <code>Deck</code>
Shuffle the deck

**Kind**: instance method of [<code>Deck</code>](#module_card-sharp/lib/deck..Deck)  
**Returns**: <code>Deck</code> - This (shuffled) deck  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| include_discards | <code>bool</code> | <code>false</code> | Return all cards from the discard pile                                   to the deck prior to shuffling |

<a name="module_card-sharp/mjs"></a>

## card-sharp/mjs
Main entrypoint (ESM) module

**Requires**: <code>module:deep-extend</code>, [<code>card-sharp/lib/card</code>](#module_card-sharp/lib/card), [<code>card-sharp/lib/deck</code>](#module_card-sharp/lib/deck)  
**Author**: Adam Lacoste <adam.lacoste@hotmail.com>  
