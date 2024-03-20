const CODE_LANGUE = {
  //Vietnamses "Việt"
  vi: {
    separator: " ", //Đơn vị khoảng cách
    filter: "", //Đơn vị lọc
    odd: "linh", //Số lẻ
    base: {
      //base: Các số cơ bản và số đặc biệt
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
      100: "một trăm",
    },
    units: {
      //Đơn vị
      2: "mươi",
      3: "trăm",
      4: "nghìn",
      7: "triệu",
      10: "tỷ",
    },
  },
  //English "Anh"
  en: {
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
      3: "hundred", // trăm
      4: "thousand", // nghìn
      7: "million", // triệu
      10: "billion", // tỉ
    },
  },
  //China "Trung"
  zh: {
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
      100: "一百", //1 trăm
      200: "两百",
      1000: "一千", //1 nghìn
      2000: "两千",
      10000: "一万", //1 vạn = 10 nghìn
      20000: "两万",
      100000: "十万", //10 vạn
      200000: "两十万",
      1000000: "一百万", //100 vạn
      2000000: "两百万",
      10000000: "一千万", //1000 vạn
      20000000: "两千万",
      100000000: "一亿", //10000 vạn
      2000000000: "两亿",
      10000000000: "十亿", //1 tỉ
      200000000000: "两十亿",
    },
    units: {
      2: "十", //chục
      3: "百", //1 trăm
      4: "千", //1 ngàn
      5: "万", //1 vạn = 10 ngàn
      6: "十万", //10 vạn = 100 nghìn
      7: "百万", //1 triệu = 100 vạn
      8: "千万", //10 triệu = 1000 vạn
      9: "亿", //100 triệu
      10: "十亿", //1 tỉ
    },
  },
  //Japanese, kanji "Nhật"
  ja: {
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
      1000: "千", //1 nghìn
      10000: "一万", //1 vạn = 10 nghìn
      100000: "十万", //10 vạn
      1000000: "百万", //100 vạn
      10000000: "千万", //1000 vạn
      100000000: "一億", //10000 vạn
      10000000000: "十億", //1 tỉ
    },
    units: {
      2: "十", //10
      3: "百", //1 trăm
      4: "千", //1 nghìn
      5: "万", //1 man = 10 nghìn
      6: "十万", //10 man
      7: "百万", //100 man
      8: "千万", //1000 man
      9: "億", //10000 man
      10: "十億", //1 tỉ
    },
  },
  //Korean "Hàn"
  ko: {
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
      100: "백", //1 trăm
      1000: "천", //1 nghìn
      10000: "만", //10 nghìn
      100000: "십만", //100 nghìn
      1000000: "백만", //1 triệu
      10000000: "천만", //10 triệu
      100000000: "억", //100 triệu
      1000000000: "십억", //1 tỉ
    },
    units: {
      2: "일", //10
      3: "백", //1 trăm
      4: "천", //1 nghìn
      5: "만", //1 vạn
      6: "십만", //10 vạn
      7: "백만", //100 vạn
      8: "천만", //1000 vạn
      9: "억", //10000 vạn
      10: "십억", //1 tỉ
    },
  },
  //Francais "Pháp"
  fr: {
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
      1000: "mille", //1 nghìn
      10000: "dix mille", //10 nghìn
      100000: "cent mille", //100 nghìn
      1000000: "un million", //1 triệu
      10000000: "dix millions", //10 triệu
      100000000: "cent millions", //100 triệu
      1000000000: "un milliard", //1 tỉ
    },
    units: {
      2: "dix",
      3: "cent", //1 trăm
      4: "mille", //1 nghìn
      5: "dix mille", //10 nghìn
      6: "cent mille", //100 nghìn
      7: "million", //1 triệu
      8: "dix million", //10 triệu
      9: "cent million", //100 triệu
      10: "milliard", //1 tỉ
    },
  },
  //Italiano "Ý"
  it: {
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
      3: "cento", //1 trăm
      4: "mille", //1 nghìn
      7: "milioni", //1 triệu
      10: "miliardo", //1 tỉ
    },
  },
  //Spanish "Tây ban nha"
  es: {
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
      3: "cien", //1 trăm
      4: "mil", //1 nghìn
      7: "millón", //1 triệu
      10: "billón", //1 tỉ
    },
  },
  //Pyccknn "Nga"
  ru: {
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
      4: "тысяча", //1 nghìn
      7: "миллион", //1 triệu
      10: "миллиард", //1 tỉ
    },
  },
  //Deutsch "Đức"
  de: {
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
      4: "eintausend", //1 nghìn
      7: "million", //1 triệu
      10: "milliarde", //1 tỉ
    },
  },
};

//ngôn ngữ đọc số 0
const READ_0 = ["vi", "ko"];
const READ_LENGTH_4 = ["zh", "ko", "ja"];
//code: string;_____________Mã có trong CODE_LANGUE
//type: number;_____________Dạng đọc. "1" đọc tách số khi có 3 chữ số trở lên, "2" đọc số bình thường.
//number: string | number;__Số cần đọc.
function coverNumberToWords(code, type, number) {
  number = parseInt(number, 10) + "";
  const length = number.length;
  const { base, separator, filter } = CODE_LANGUE[code];

  //Xử lí các số 1-99
  if (length <= 2) {
    let words = "";
    const speciel = base[number];
    if (length === 1) return [speciel];
    if (length === 2) {
      words = handleForLength_2(number, base);
      return words.split(separator).filter((i) => i !== filter);
    }
  } else {
    //Xử lí các số trên hàng chục. > 99
    let words = "";
    if (type === 1) return number.split("").map((num) => base[num]);
    if (type === 2) {
      if (length > 10) return; //trên 7 số ko đọc với type = 2
      if (length === 3) words = handleForLength_3(code, number);
      //Xử lí các số hàng trăm (100 - 999)
      else {
        //Xử lí các số trên hàng nghìn 99 tỉ <= number >= 1000
        if (READ_LENGTH_4.includes(code))
          words = handleFor_4(code, number); //Đọc 4 số.
        else words = handleFor_3(code, number); //Đọc 3 số.
      }
    }
    return words.split(separator).filter((i) => i !== filter);
  }
}
//Xử lí chuỗi số có độ dài là 2.
function handleForLength_2(number, base) {
  let result = "";
  const [numA, numB] = number.split("");
  if (base[number]) result = `${base[number]}`;
  else result = `${base[+numA * 10]} ${base[numB]}`;
  return result;
}
//Xử lí chuỗi số có độ dài là 3.
function handleForLength_3(code, number) {
  if (number === "000") return; //số không đọc
  let words = "";
  let hundred = "";
  const { base, units, odd } = CODE_LANGUE[code];
  const read_0 = READ_0.includes(code);
  const [numA, numB, numC] = number.split("");
  const checkA = numA === "0";
  const checkB = numB === "0";
  const checkC = numC === "0";

  const speciel = numB + numC; //số hàng chục đặc biệt.
  if (checkA) {
    if (read_0) hundred = `${base[numA]} ${units[3]}`;
    else hundred = "";
  } else {
    const specielA = base[+numA * 100];
    if (specielA) hundred = `${specielA}`;
    else hundred = `${base[+numA]} ${units[3]}`;
  }
  //kiểm tra đọc các số hàng chục và đơn vị.
  if (speciel === "00") {
    words = `${hundred}`; //số hàng trăm
  } else if (checkB && !checkC) {
    words = `${hundred} ${odd} ${base[numC]}`; //số lẻ
  } else if (base[speciel]) {
    words = `${hundred} ${base[speciel]}`; //số hàng chục đặc biệt
  } else {
    words = `${hundred} ${base[+numB * 10]} ${base[numC]}`; //số còn lại
  }
  return words;
}

//Hàm xử lí 3 số.
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
//Hàm xử lí 4 số.
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
        words = `${thousand}`; //Số hàng nghìn
      } else if (!checkA && !checkB && checkC && checkD) {
        words = `${thousand} ${hundred}`; //Số hàng trăm 1100
      } else if (checkA && checkB && checkC && !checkD) {
        words = `${odd} ${base[numD]}`; //Số lẻ 0001
      } else if (checkA && checkB && !checkC) {
        words = `${odd} ${base[numC * 10]} ${!checkD ? base[numD] : ""}`; //Số lẻ 0010
      } else if (!checkA && checkB && !checkC) {
        words = `${thousand} ${odd} ${base[numC * 10]} ${
          !checkD ? base[numD] : ""
        }`; //Số lẻ 1011
      } else if (!checkA && !checkB && checkC && !checkD) {
        words = `${thousand} ${hundred} ${odd} ${base[numD]}`; //Số lẻ 1101
      } else if (!checkA && checkB && checkC && !checkD) {
        words = `${thousand} ${odd} ${base[numD]}`; //Số lẻ 1001
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

//Tách chuỗi số thành một mảng. Bắt đầu tách ngược từ vị trí cuối cùng đến vị trí đầu tiên của chuỗi
//Vidu 1230. thì sẽ bắt đầu đọc từ 0,3,2 thành một chuỗi và 1 thành một chuỗi. Sau đó đảo chuỗi
//Input: number: string. Chuỗi số cần tách; limit: number. Giới hạn của mỗi chuỗi.
//Output: ["1", "230"]
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

//End code;
console.log("______________End_Code______________");
console.log("result: vi", coverNumberToWords("vi", 2, "2109"));
console.log("result: en", coverNumberToWords("en", 2, "2109"));
console.log("result: zh", coverNumberToWords("zh", 2, "2109"));
console.log("result: ja", coverNumberToWords("ja", 2, "2109"));
console.log("result: ko", coverNumberToWords("ko", 2, "2109"));
console.log("result: fr", coverNumberToWords("fr", 2, "2109"));
console.log("result: it", coverNumberToWords("it", 2, "2109"));
console.log("result: es", coverNumberToWords("es", 2, "2109"));
console.log("result: ru", coverNumberToWords("ru", 2, "2109"));
console.log("result: de", coverNumberToWords("de", 2, "2109"));
