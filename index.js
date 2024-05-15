"use strict";
const CODE_LANGUE = {
  vi: {
    name: "Vietnamese",
    separator: " ",
    filter: "",
    odd: "linh",
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
      35: "ba mươi lăm",
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
      100: "một trăm",
    },
    units: {
      2: "mươi",
      3: "trăm",
      4: "nghìn",
      7: "triệu",
      10: "tỷ",
    },
  },
  en: {
    name: "English",
    separator: " ",
    filter: "",
    odd: "and",
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
      100: "one hundred",
    },
    units: {
      3: "hundred",
      4: "thousand",
      7: "million",
      10: "billion",
    },
  },
  zh: {
    name: "China",
    separator: "",
    filter: " ",
    odd: "零",
    base: {
      0: "零",
      1: "一",
      2: "二",
      3: "三",
      4: "四",
      5: "五",
      6: "六",
      7: "七",
      8: "八",
      9: "九",
      10: "十",
      20: "二十",
      30: "三十",
      40: "四十",
      50: "五十",
      60: "六十",
      70: "七十",
      80: "八十",
      90: "九十",
      99: "九十九",
      100: "一百",
      200: "两百",
      1000: "一千",
      2000: "两千",
      10000: "一万",
      20000: "两万",
      100000: "十万",
      200000: "两十万",
      1000000: "一百万",
      2000000: "两百万",
      10000000: "一千万",
      20000000: "两千万",
      100000000: "一亿",
      2000000000: "两亿",
      10000000000: "十亿",
      200000000000: "两十亿",
    },
    units: {
      2: "十",
      3: "百",
      4: "千",
      5: "万",
      6: "十万",
      7: "百万",
      8: "千万",
      9: "亿",
      10: "十亿",
    },
  },
  ja: {
    name: "Japanese",
    separator: "",
    filter: " ",
    odd: "",
    base: {
      0: "零",
      1: "一",
      2: "二",
      3: "三",
      4: "四",
      5: "五",
      6: "六",
      7: "七",
      8: "八",
      9: "九",
      10: "十",
      20: "二十",
      30: "三十",
      40: "四十",
      50: "五十",
      60: "六十",
      70: "七十",
      80: "八十",
      90: "九十",
      99: "九十九",
      100: "百",
      1000: "千",
      10000: "一万",
      100000: "十万",
      1000000: "百万",
      10000000: "千万",
      100000000: "一億",
      10000000000: "十億",
    },
    units: {
      2: "十",
      3: "百",
      4: "千",
      5: "万",
      6: "十万",
      7: "百万",
      8: "千万",
      9: "億",
      10: "十億",
    },
  },
  ko: {
    name: "Korean",
    separator: "",
    filter: " ",
    odd: "",
    base: {
      0: "영",
      1: "일",
      2: "이",
      3: "삼",
      4: "사",
      5: "오",
      6: "육",
      7: "칠",
      8: "팔",
      9: "구",
      10: "십",
      11: "십일",
      20: "이십",
      30: "삼십",
      40: "사십",
      50: "오십",
      60: "육십",
      70: "칠십",
      80: "팔십",
      90: "구십",
      100: "백",
      1000: "천",
      10000: "만",
      100000: "십만",
      1000000: "백만",
      10000000: "천만",
      100000000: "억",
      1000000000: "십억",
    },
    units: {
      2: "일",
      3: "백",
      4: "천",
      5: "만",
      6: "십만",
      7: "백만",
      8: "천만",
      9: "억",
      10: "십억",
    },
  },
  fr: {
    name: "Francais",
    separator: " ",
    filter: "",
    odd: "",
    base: {
      0: "zéro",
      1: "un",
      2: "deux",
      3: "trois",
      4: "quatre",
      5: "cinq",
      6: "six",
      7: "sept",
      8: "huit",
      9: "neuf",
      10: "dix",
      11: "onze",
      12: "douze",
      13: "treize",
      14: "quatorze",
      15: "quinze",
      16: "seize",
      17: "dix sept",
      18: "dix huit",
      19: "dix neuf",
      20: "vingt",
      21: "vingt et un",
      30: "trente",
      31: "trente et un",
      40: "quarante",
      41: "quarante et un",
      50: "cinquante",
      51: "cinquante et un",
      60: "soixante",
      61: "soixante et un",
      70: "soixante dix",
      71: "soixante et onze",
      72: "soixante douze",
      73: "soixante treize",
      74: "soixante quatorze",
      75: "soixante quinze",
      76: "soixante seize",
      77: "soixante dix sept",
      78: "soixante dix huit",
      79: "soixante dix neuf",
      80: "quatre vingts",
      81: "quatre vingt un",
      82: "quatre vingt deux",
      83: "quatre vingt trois",
      84: "quatre vingt quatre",
      85: "quatre vingt cinq",
      86: "quatre vingt six",
      87: "quatre vingt sept",
      88: "quatre vingt huit",
      89: "quatre vingt neuf",
      90: "quatre vingt dix",
      91: "quatre vingt onze",
      92: "quatre vingt douze",
      93: "quatre vingt treize",
      94: "quatre vingt quatorze",
      95: "quatre vingt quinze",
      96: "quatre vingt seize",
      97: "quatre vingt dix sept",
      98: "quatre vingt dix huit",
      99: "quatre vingt dix neuf",
      100: "cent",
      1000: "mille",
      10000: "dix mille",
      100000: "cent mille",
      1000000: "un million",
      10000000: "dix millions",
      100000000: "cent millions",
      1000000000: "un milliard",
    },
    units: {
      2: "dix",
      3: "cent",
      4: "mille",
      5: "dix mille",
      6: "cent mille",
      7: "million",
      8: "dix million",
      9: "cent million",
      10: "milliard",
    },
  },
  it: {
    name: "Italiano",
    separator: " ",
    filter: "",
    odd: "",
    base: {
      0: "zero",
      1: "uno",
      2: "due",
      3: "tre",
      4: "quattro",
      5: "cinque",
      6: "sei",
      7: "sette",
      8: "otto",
      9: "nove",
      10: "dieci",
      11: "undici",
      12: "dodici",
      13: "tredici",
      14: "quattordici",
      15: "quindici",
      16: "sedici",
      17: "diciassette",
      18: "diciotto",
      19: "diciannove",
      20: "venti",
      21: "ventuno",
      23: "ventitré",
      28: "ventotto",
      30: "trenta",
      31: "trentuno",
      33: "trentatré",
      38: "trentotto",
      40: "quaranta",
      41: "quarantuno",
      43: "quaranta­tré",
      48: "quarantotto",
      50: "cinquanta",
      51: "cinquantuno",
      53: "cinquantatré",
      58: "cinquantotto",
      60: "sessanta",
      61: "sessantuno",
      63: "sessanta­tré",
      68: "sessantotto",
      70: "settanta",
      71: "settantuno",
      73: "settantatré",
      78: "settantotto",
      80: "ottanta",
      81: "ottantuno",
      83: "ottantatré",
      88: "ottantotto",
      90: "novanta",
      91: "novantuno",
      93: "novantatré",
      98: "novantotto",
      100: "cento",
      101: "centuno",
      108: "centootto",
      180: "centottanta",
      201: "duecentuno",
      301: "tre­cent­uno",
      401: "quattro­cent­uno",
      501: "cinque­cent­uno",
      601: "sei­cent­uno",
      701: "sette­cent­uno",
      801: "otto­cent­uno",
      901: "nove­cent­uno",
      1000: "mille",
      1000000: "un milioni",
    },
    units: {
      3: "cento",
      4: "mille",
      7: "milioni",
      10: "miliardo",
    },
  },
  es: {
    name: "Spanish",
    separator: " ",
    filter: "",
    odd: "",
    base: {
      0: "cero",
      1: "uno",
      2: "dos",
      3: "tres",
      4: "cuatro",
      5: "cinco",
      6: "seis",
      7: "siete",
      8: "ocho",
      9: "nueve",
      10: "diez",
      11: "once",
      12: "doce",
      13: "trece",
      14: "catorce",
      15: "quince",
      16: "dieciséis",
      17: "diecisiete",
      18: "dieciocho",
      19: "diecinueve",
      20: "veinte",
      21: "veintiuno",
      22: "veintidós",
      23: "veintitrés",
      24: "veinticuatro",
      25: "veinticinco",
      26: "veintiséis",
      27: "veintisiete",
      28: "veintiocho",
      29: "veintinueve",
      30: "treinta",
      40: "cuarenta",
      50: "cincuenta",
      60: "sesenta",
      70: "setenta",
      80: "ochenta",
      90: "noventa",
      100: "cien",
      200: "doscientos",
      300: "trescientos",
      400: "cuatrocientos",
      500: "quinientos",
      600: "seiscientos",
      700: "setecientos",
      800: "ochocientos",
      900: "novecientos",
      1000: "mil",
    },
    units: {
      3: "cien",
      4: "mil",
      7: "millón",
      10: "billón",
    },
  },
  ru: {
    name: "Pyccknn",
    separator: " ",
    filter: "",
    odd: "",
    base: {
      0: "ноль",
      1: "один",
      2: "два",
      3: "три",
      4: "четыре",
      5: "пять",
      6: "шесть",
      7: "семь",
      8: "восемь",
      9: "девять",
      10: "десять",
      11: "одиннадцать",
      12: "двенадцать",
      13: "тринадцать",
      14: "четырнадцать",
      15: "пятнадцать",
      16: "шестнадцать",
      17: "семнадцать",
      18: "восемнадцать",
      19: "девятнадцать",
      20: "двадцать",
      30: "тридцать",
      40: "сорок",
      50: "пятьдесят",
      60: "шестьдесят",
      70: "семьдесят",
      80: "восемьдесят",
      90: "девяносто",
      100: "сто",
      200: "двести",
      300: "триста",
      400: "четыреста",
      500: "пятьсот",
      600: "шестьсот",
      700: "семьсот",
      800: "восемьсот",
      900: "девятьсот",
    },
    units: {
      4: "тысяча",
      7: "миллион",
      10: "миллиард",
    },
  },
  de: {
    name: "Deutsch",
    separator: " ",
    filter: "",
    odd: "",
    base: {
      0: "null",
      1: "eins",
      2: "zwei",
      3: "drei",
      4: "vier",
      5: "fünf",
      6: "sechs",
      7: "sieben",
      8: "acht",
      9: "neun",
      10: "zehn",
      11: "elf",
      12: "zwölf",
      13: "dreizehn",
      14: "vierzehn",
      15: "fünfzehn",
      16: "sechzehn",
      17: "siebzehn",
      18: "achtzehn",
      19: "neunzehn",
      20: "zwanzig",
      21: "einundzwanzig",
      30: "dreißig",
      37: "siebenunddreißig",
      40: "vierzig",
      50: "fünfzig",
      59: "neunundfünfzig",
      60: "sechzig",
      67: "siebenundsechzig",
      70: "siebzig",
      76: "sechsundsiebzig",
      80: "achtzig",
      84: "vierundachtzig",
      90: "neunzig",
      93: "dreiundneunzig",
      100: "hundert",
      159: "hundertneunundfünfzig",
      232: "zweihundertzweinundzwanzig",
      333: "dreihundertdreiunddreißig",
      391: "dreihunderteinundneunzig",
      536: "fünfhundertsechsunddreißig",
      717: "siebenhundertsiebzehn",
      784: "siebenhundertvierundachtzig",
      1000: "tausendeintausend",
      10000: "zehntausend",
      100000: "einhunderttausend",
      1000000: "eine million",
      10000000: "zehn millionen",
      100000000: "einhundert millionen",
      1000000000: "eine milliarde",
    },
    units: {
      3: "hundert", //trăm
      4: "eintausend",
      7: "million",
      10: "milliarde",
    },
  },
};
const READ_0 = ["vi", "ko"];
const READ_LENGTH_4 = ["zh", "ko", "ja"];
/**
 * Converts an integer into a string with an ordinal postfix.
 * If number is decimal, the decimals will be removed.
   @param {Object} options
 * @param {number|string} options.number Number to read
 * @param {string} options.code Language code
 * @param {number} options.type Reading format. "1" reads split numbers, "2" reads normal numbers.
 
 * @returns {[string]}
 */
function numberToWords({ number, code, type }) {
  number = parseInt(number, 10);
  number = number + "";
  const length = number.length;
  const { base, separator, filter } = CODE_LANGUE[code];

  //Handle numbers 1-99
  if (length <= 2) {
    let words = [];
    const speciel = base[number];
    if (length === 1) return words = [speciel];
    if (length === 2) {
      words = handleForLength_2(number, base);
      words = words.split(separator).filter((i) => i !== filter);
    }
    return words
  } else {
    //Handle numbers. > 99
    let words = "";
    if (type === 1) return number.split("").map((num) => base[num]);
    if (type === 2) {
      if (length > 12) throw new Error('Cannot handle numbers with length greater than 12!');
      if (length === 3) words = handleForLength_3(code, number);
      //Handle numbers in the hundreds place (100 - 999)
      else {
        //Handle numbers above thousands 99 billion <= number >= 1000
        if (READ_LENGTH_4.includes(code))
          //Read 4 numbers.
          words = handleFor_4(code, number);
        else words = handleFor_3(code, number); //Read 2 numbers.
      }
    }
    const result = words.split(separator).filter((i) => i !== filter)
    return result
  }
}
//Handle a string of numbers with length 2.
function handleForLength_2(number, base) {
  let result = "";
  const [numA, numB] = number.split("");
  if (base[number]) result = `${base[number]}`;
  else result = `${base[+numA * 10]} ${base[numB]}`;
  return result;
}
//Handle a string of numbers with length 3.
function handleForLength_3(code, number) {
  if (number === "000") return; //Number not read
  let words = "";
  let hundred = "";
  const { base, units, odd } = CODE_LANGUE[code];
  const read_0 = READ_0.includes(code);
  const [numA, numB, numC] = number.split("");
  const checkA = numA === "0";
  const checkB = numB === "0";
  const checkC = numC === "0";

  const speciel = numB + numC;
  if (checkA) {
    if (read_0) hundred = `${base[numA]} ${units[3]}`;
    else hundred = "";
  } else {
    const specielA = base[+numA * 100];
    if (specielA) hundred = `${specielA}`;
    else hundred = `${base[+numA]} ${units[3]}`;
  }
  //Check reading tens and units.
  if (speciel === "00") {
    words = `${hundred}`; //Hundreds number
  } else if (checkB && !checkC) {
    words = `${hundred} ${odd} ${base[numC]}`; //Odd
  } else if (base[speciel]) {
    words = `${hundred} ${base[speciel]}`; //Special tens number
  } else {
    words = `${hundred} ${base[+numB * 10]} ${base[numC]}`;
  }
  return words;
}

//Function to process 3 numbers.
function handleFor_3(code, number) {
  let result = "";
  const { base, units } = CODE_LANGUE[code];
  const chunk = chunksNumber(number, 3);

  for (let i = 0; i < chunk.length; i++) {
    const num = chunk[i];
    const length = num.length;
    if (length === 1 && i === 0) {
      const position = (chunk.length - 1) * 3 + 1;
      const speciel = base[+num * Math.pow(10, position - 1)];
      speciel
        ? (result = `${speciel}`)
        : (result = `${base[num[0]]} ${units[position]}`);
    }
    if (length === 2 && i === 0) {
      const position = (chunk.length - 1) * 3 + 1;
      const words = handleForLength_2(num, base);
      result = `${words} ${units[position]}`;
    }
    if (length === 3) {
      const position = (chunk.length - i - 1) * 3 + 1;
      const unit = units[position] ? units[position] : "";
      const words = handleForLength_3(code, num);
      if (words) result = `${result} ${words} ${unit}`;
    }
  }
  return result;
}
//Function to process 4 numbers.
function handleFor_4(code, number) {
  let result = "";
  const { base, units, odd } = CODE_LANGUE[code];
  const chunks = chunksNumber(number, 4);
  for (let i = 0; i < chunks.length; i++) {
    const num = chunks[i];
    const length = num.length;
    if (length === 1 && i === 0) {
      const position = (chunks.length - 1) * 4 + 1;
      const speciel = base[+num * Math.pow(10, position - 1)];
      speciel
        ? (result = `${speciel}`)
        : (result = `${base[num[0]]} ${units[position]}`);
    } else if (length === 2 && i === 0) {
      const position = (chunks.length - 1) * 4 + 1;
      const words = handleForLength_2(num, base);
      result = `${words} ${units[position]}`;
    } else if (length === 3 && i === 0) {
      const position = (chunks.length - 1) * 4 + 1;
      const words = handleForLength_3(code, num);
      result = `${words} ${units[position]}`;
    } else if (length === 4) {
      if (num === "0000") continue;
      let words = "";
      let thousand = "";
      const position = (chunks.length - i - 1) * 4 + 1;
      const unit = units[position] ? units[position] : "";
      const [numA, numB, numC, numD] = num;
      const checkA = numA === "0";
      const checkB = numB === "0";
      const checkC = numC === "0";
      const checkD = numD === "0";

      if (!checkA) {
        numA === "1"
          ? (thousand = `${base[+numA * 1000]}`)
          : (thousand = `${base[numA]} ${units[4]}`);
      } else thousand = "";

      const hundred = `${base[numB]} ${units[3]}`;
      if (num.slice(-3) === "000") {
        words = `${thousand}`; //Number 1000
      } else if (!checkA && !checkB && checkC && checkD) {
        words = `${thousand} ${hundred}`; //Number 1100
      } else if (checkA && checkB && checkC && !checkD) {
        words = `${odd} ${base[numD]}`; //Number 0001
      } else if (checkA && checkB && !checkC) {
        words = `${odd} ${base[numC * 10]} ${!checkD ? base[numD] : ""}`; //Number 0010
      } else if (!checkA && checkB && !checkC) {
        words = `${thousand} ${odd} ${base[numC * 10]} ${
          !checkD ? base[numD] : ""
        }`; //Number 1011
      } else if (!checkA && !checkB && checkC && !checkD) {
        words = `${thousand} ${hundred} ${odd} ${base[numD]}`; //Number 1101
      } else if (!checkA && checkB && checkC && !checkD) {
        words = `${thousand} ${odd} ${base[numD]}`; //Number 1001
      } else {
        words = `${thousand} ${hundred} ${base[numC * 10]} ${
          !checkD ? base[numD] : ""
        }`;
      }
      result = `${result} ${words} ${unit}`;
    }
  }
  return result;
}

/**
 * Split a string of numbers into an array.
 * @example chunksNumber("1230", 3) => [ '1', '230' ]
 * Language code
 * @param {string} number
 * Reading format. "1" reads split numbers, "2" reads normal numbers.
 * @param {number} limit
 * @returns {[string]}
 */
function chunksNumber(number, limit) {
  const chunks = [];
  let chunk = "";
  for (let i = number.length - 1; i >= 0; i--) {
    chunk = number[i] + chunk;
    if ((number.length - i) % limit === 0) {
      chunks.unshift(chunk);
      chunk = "";
    }
  }
  if (chunk !== "") chunks.unshift(chunk);
  return chunks;
}

function languages() {
  return Object.keys(CODE_LANGUE).map((code) => ({
    code,
    name: CODE_LANGUE[code].name,
  }));
}

// console.log("numberToWords", numberToWords({ code: "vi", number: 99, type: 2 }))
// console.log("numberToWords", numberToWords({ code: "vi", number: 35, type: 1 }))
// console.log("numberToWords", numberToWords({ code: "vi", number: 5008, type: 2 }))

module.exports = {
  numberToWords,
  chunksNumber,
  languages,
};