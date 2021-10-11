
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

<!-- LINKS -->

[card-sharp/lib/card]:#card-sharplibcard
[~Card]:#card-sharplibcardcard
[`card-sharp/lib/card`]:#card-sharplibcard
[`Card`]:#new-carduser_opts
[new Card(user_opts)]:#new-carduser_opts
[.toString()]:#cardtostring
[.fromArray(cards)]:#cardfromarraycards
