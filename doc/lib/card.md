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

