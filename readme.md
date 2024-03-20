[![NPM](https://nodei.co/npm/nums-to-words.png)](https://www.npmjs.com/package/nums-to-words)

# nums-to-words
Convert numbers to words for popular languages for countries in Asia and Europe. 
Language support: Vietnamese, English, Chinese, Korean, Japanese, French, German, Italian, Spanish, Russian.
## Install
```$xslt
npm i nums-to-words
```
Example Result
```$xslt
"vi" : [ 'một', 'trăm', 'hai', 'mươi' ]
"en" : [ 'one', 'hundred', 'twenty' ]
"zh" : [ '一', '百', '二', '十' ]
"ko" : [ '백', '이', '십' ]
"ja" : [ '百', '二', '十' ]
```
### Use

```js
const { numberToWords } = require('nums-to-words')
const result = numberToWords("vi", 2, "120")
console.log('result:', result)
```
### Type numberToWords(code, type, number)
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