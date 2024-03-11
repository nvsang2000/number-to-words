const LIST_CODE_LANGUE = {
  vi: {
    base: {
      0: "không",
      1: "một",
      2: "hai",
      3: "ba",
      4: "bốn",
      5: "năm",
      6: "sáu",
      7: "bảy",
      8: "tám",
      9: "chín",
      10: "mười",
      15: "mười lăm",
      20: "hai mươi",
      21: "hai mươi mốt",
      25: "hai mươi lăm",
      30: "ba mươi",
      31: "ba mươi mốt",
      40: "bốn mươi",
      41: "bốn mươi mốt",
      45: "bốn mươi lăm",
      50: "năm mươi",
      51: "năm mươi mốt",
      55: "năm mươi lăm",
      60: "sáu mươi",
      61: "sáu mươi mốt",
      65: "sáu mươi lăm",
      70: "bảy mươi",
      71: "bảy mươi mốt",
      75: "bảy mươi lăm",
      80: "tám mươi",
      81: "tám mươi mốt",
      85: "tám mươi lăm",
      90: "chín mươi",
      91: "chín mươi mốt",
      95: "chín mươi lăm",
    },
    units: {
      2: "mươi",
      3: "trăm",
      4: "ngàn",
      7: "triệu",
      10: "tỷ",
    },
    odd: "lẻ",
  },
  en: {
    base: {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
      30: "thirty",
      40: "forty",
      50: "fifty",
      60: "sixty",
      70: "seventy",
      80: "eighty",
      90: "ninety",
    },
    units: {
      3: "hundred",
      4: "thousand",
      7: "million",
      10: "billion",
    },
    odd: "and",
  },
};

function coverNumberToWords(code, type, number) {
  number = parseInt(number, 10) + "";
  const length = number.length;
  const language = LIST_CODE_LANGUE[code];
  const specielNumber = language.base?.[number];

  if (length === 1) return [specielNumber];
  if (length === 2) {
    if (specielNumber) return specielNumber?.split(" ");
    else {
      const [numA, numB] = number?.split("");
      const numberToWord = `${language.base[numA * 10]} ${language.base[numB]}`;
      return numberToWord.split(" ");
    }
  }
  if (length > 2) {
    if (type === 1) {
      const arrayNumber = number.split("");
      return arrayNumber.map((num) => language.base[num]);
    }
    if (type === 2) {
      if (length === 3) {
        const words = handleHasLangthOfThree(number, language);
        return words.split(" ");
      } else {
        const arrayChunk = chunksNumber(number);
        let arrayWords = [];
        for (let i = 0; i < arrayChunk.length; i++) {
          if (arrayChunk[i].length === 3) {
            const words = handleHasLangthOfThree(arrayChunk[i], language);
          }
          if (arrayChunk[i].length === 2) {
            const [numA, numB] = number?.split("");
            const numberToWord = `${language.base[numA * 10]} ${
              language.base[numB]
            }`;
          }
          if (arrayChunk[i].length === 1) {
            const number = language.base?.[number];
          }

          console.log("index", words);
        }
        console.log("array", arrayChunk, length);
      }
    }
  }
}

function handleHasLangthOfThree(number, language) {
  let words;
  const unit = language.units[3];
  const oddNumber = language.odd;

  const [numA, numB, numC] = number.split("");
  if (numB === "0")
    words = `${language.base[numA]} ${unit} ${oddNumber} ${language.base[numC]}`;

  if (numB === "0" && numC == "0") words = `${language.base[numA]} ${unit}`;

  if (numB !== "0" && numC !== "0")
    words = `${language.base[numA]} ${unit} ${language.base[numB * 10]} ${
      language.base[numC]
    }`;

  return words;
}

function chunksNumber(number) {
  const chunks = [];
  let chunk = "";
  for (let i = number.length - 1; i >= 0; i--) {
    chunk = number[i] + chunk;
    if ((number.length - i) % 3 === 0) {
      chunks.unshift(chunk);
      chunk = "";
    }
  }
  if (chunk !== "") chunks.unshift(chunk);
  return chunks;
}

const result = coverNumberToWords("vi", 2, "60900");
console.log("result", result);
