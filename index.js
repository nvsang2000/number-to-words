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
    odd: "linh",
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
  const base = language.base;
  const units = language.units;
  const odd = language.odd;

  if (length <= 2) {
    const specielNum = base?.[number];
    if (length === 1) return [specielNum];
    if (length === 2) {
      if (specielNum) return specielNum?.split(" ");
      else {
        const [numA, numB] = number?.split("");
        const numberToWord = `${base[numA * 10]} ${base[numB]}`;
        return numberToWord.split(" ");
      }
    }
  } else {
    if (type === 1) {
      const nums = number.split("");
      return nums.map((num) => base[num]);
    }
    if (type === 2) {
      if (length === 3) {
        let words = "";
        const [numA, numB, numC] = number.split("");

        if (numB === "0") words = `${base[numA]} ${units[3]} ${odd} ${base[numC]}`;
        else if (numB === "0" && numC == "0") words = `${base[numA]} ${units[3]}`;
        else  {
          const specielNum = numB + numC
          if(base[specielNum]) words = `${base[numA]} ${units[3]} ${base[specielNum]}`;
          else words = `${base[numA]} ${units[3]} ${base[numB * 100]} ${base[numC]}`;
        }
        return words.split(" ");
      } else {
        const chunk = chunksNumber(number);
        let numberToWord = "";

        for (let i = 0; i < chunk.length; i++) {
          const num = chunk[i];
          if (num.length === 1 && i === 0) {
            const position = (chunk.length - 1) * 3 + 1;
            numberToWord = `${base[num[0]]} ${units[position]}`;
          }
          if (num.length === 2 && i === 0) {
            const position = (chunk.length - 1) * 3 + 1;
            const specielNum = base?.[num];
            if (specielNum) numberToWord = `${specielNum} ${units[position]}`;
            else {
              const [numA, numB] = num?.split("");
              numberToWord = `${base[numA * 10]} ${base[numB]} ${
                units[position]
              }`;
            }
          }
          if (num.length === 3) {
            let words = "";
            const position = (chunk.length - i - 1) * 3 + 1;
            const [numA, numB, numC] = num?.split("");

            if (numA === "0" && numB === "0" && numC == "0") continue;
            else if (numB === "0") words = `${base[numA]} ${units[3]} ${odd} ${base[numC]}`;
            else if (numB === "0" && numC == "0") words = `${base[numA]} ${units[3]}`;
            else if (numB !== "0" && numC !== "0") words = `${base[numA]} ${units[3]} ${base[numB * 10]} ${base[numC]}`;
            else  {
              const specielNum = numB + numC
              if(base[specielNum]) {
                console.log('nums', base[specielNum])
                words = `${base[numA]} ${units[3]} ${base[specielNum]}`;
              } else {
                console.log('num', num)
              numberToWord = `${numberToWord} ${words} ${units[position]}`;
              }
              
            }
          }
        }
        console.log("chunk", chunk, numberToWord);
        return numberToWord.split(" ")
      }
    }
  }
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

const result = coverNumberToWords("en", 2, "1130");
console.log("_____________________________");
console.log("result", result);
