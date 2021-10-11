<a name="module_card-sharp/lib/card"></a>

## card-sharp/lib/card
**Author**: Adam Lacoste <adam.lacoste@hotmail.com>  

Card module


* [card-sharp/lib/card](#user-content-module_card-sharp/lib/card)
  * _Other_
    * [Card](#user-content-module_card-sharp/lib/card..Card)
      * _Methods_
        * [fromArray(cards)](#user-content-module_card-sharp/lib/card..Card.fromArray)
        * [toString()](#user-content-module_card-sharp/lib/card..Card+toString)

<a name="module_card-sharp/lib/card..Card"></a>

### card-sharp/lib/card~Card

Card class

 A single French-style playing card.


* [Card](#user-content-module_card-sharp/lib/card..Card)
  * _Methods_
    * [fromArray(cards)](#user-content-module_card-sharp/lib/card..Card.fromArray)
    * [toString()](#user-content-module_card-sharp/lib/card..Card+toString)

<a name="new_module_card-sharp/lib/card..Card_new"></a>

#### new Card(user_opts)

| Param | Type | Description |
| --- | --- | --- |
| user_opts | <code>object</code> | User options for this card |


Card constructor

<a name="module_card-sharp/lib/card..Card.fromArray"></a>

#### Card.fromArray(cards)

| Param | Type | Description |
| --- | --- | --- |
| cards | <code>array</code> | The list of card options |

**Returns**: <code>array.&lt;Card&gt;</code> - The generated cards  

Generate cards from an array of objects

<a name="module_card-sharp/lib/card..Card+toString"></a>

#### card.toString()
**Returns**: <code>string</code> - The card ID  

String conversion method

