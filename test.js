const { numberToWords, languages } = require('./index')

console.log("numberToWords", numberToWords({ code: "vi", number: 35, type: 2 }))
console.log("numberToWords", numberToWords({ code: "vi", number: 35000, type: 1 }))
console.log("numberToWords", numberToWords({ code: "vi", number: 58008, type: 2 }))
//console.log("languages", languages())