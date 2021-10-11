## Modules

<dl>
<dt><a href="#module_card-sharp">card-sharp</a></dt>
<dd><p>Main entrypoint module</p>
</dd>
<dt><a href="#module_card-sharp/lib/card">card-sharp/lib/card</a></dt>
<dd><p>Card module</p>
</dd>
<dt><a href="#module_card-sharp/lib/deck">card-sharp/lib/deck</a></dt>
<dd><p>Deck module</p>
</dd>
<dt><a href="#module_card-sharp">card-sharp</a></dt>
<dd><p>Main entrypoint module</p>
</dd>
</dl>

<a name="module_card-sharp"></a>

## card-sharp
**Author**: Adam Lacoste <adam.lacoste@hotmail.com>  
Main entrypoint module

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
 of cards dealt would be A, B, C, A, B, C, A, B, C.

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
<a name="module_card-sharp"></a>

## card-sharp
**Author**: Adam Lacoste <adam.lacoste@hotmail.com>  
Main entrypoint module

