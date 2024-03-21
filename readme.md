[![NPM](https://nodei.co/npm/words-countries.png)](https://www.npmjs.com/package/words-countries)

# words-countries
Convert numbers to words for popular languages for countries in Asia and Europe. 
Language support: Vietnamese, English, Chinese, Korean, Japanese, French, German, Italian, Spanish, Russian.
## Install
```$xslt
npm i words-countries
```
Example Result
```$xslt
"vi" : [ 'một', 'trăm', 'hai', 'mươi' ]
"en" : [ 'one', 'hundred', 'twenty' ]
"zh" : [ '一', '百', '二', '十' ]
"ko" : [ '백', '이', '십' ]
"ja" : [ '百', '二', '十' ]

{ base: [ 'one', 'hundred', 'twenty' ], words: 'one hundred twenty' }
```
### Use

```js
const { numberToWords } = require('words-countries')
const result = numberToWords({ number: "120" })
console.log('result:', result)
```
### Type numberToWords({code, type, number})
```$xslt
Code : string
{
    "vi" : "Vietnamses"
    "en" : "English"
    "zh" : "China"
    "ko" : "Korean"
    "ja" : "Japanese"
    "fr" : "Francais"
    "it" : "Italiano"
    "es" : "Spanish"
    "ru" : "Pyccknn"
    "de" : "Deutsch"
}

Type [1, 2]: number
1: Read each number. Example: [ 'one', 'two', 'zero' ]
2: Basic. Example: [ 'one', 'hundred', 'twenty' ]

Number : string | number
```