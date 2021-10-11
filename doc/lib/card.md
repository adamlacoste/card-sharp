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
