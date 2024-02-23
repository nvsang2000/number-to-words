const coverNumberToWords = (langue, type, number) => {
  const codeLangue = LIST_CODE_LANGUE[langue];
  const splitNumber = String(number).split("");
  const mappingNumberToWords = splitNumber?.map((num) => {
    return codeLangue[num];
  });

  console.log("codeLangue", codeLangue);
  return mappingNumberToWords;
};

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
    },
  },
  en: {
    useLongScale: false,
    baseSeparator: "-",
    unitSeparator: "and ",
    decimalSeperator: "and ",
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
    units: [
      "hundred",
      "thousand",
      "million",
      "billion",
      "trillion",
      "quadrillion",
      "quintillion",
      "sextillion",
      "septillion",
      "octillion",
      "nonillion",
      "decillion",
      "undecillion",
      "duodecillion",
      "tredecillion",
      "quattuordecillion",
      "quindecillion",
    ],
  },
};
const test = coverNumberToWords("vi", 0, 1203425);
console.log("test", test);
