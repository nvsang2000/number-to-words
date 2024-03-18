const LIST_CODE_LANGUE = {
  //Vietnamses
  vi: {
    unitSeparator: " ", //Đơn vị khoảng cách
    unitFilter: "", //Đơn vị lọc
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
  //English
  en: {
    unitSeparator: " ",
    unitFilter: "",
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
    },
    units: {
      3: "hundred", // trăm
      4: "thousand", // nghìn
      7: "million", // triệu
      10: "billion", // tỉ
    },
  },
  //China
  zh: {
    unitSeparator: "",
    unitFilter: " ",
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
      100000: "十万", //10 vạn = 100 nghìn
      200000: "两十万",
      1000000: "一百万", //1 triệu
      2000000: "两百万",
      10000000: "一千万", //10 triệu
      20000000: "两千万",
      100000000: "一亿", //100 triệu
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
  //Japanese, kanji
  ja: {
    unitSeparator: "",
    unitFilter: " ",
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
      200: "两百",
    },
    units: {
      3: "百", //1 trăm
      4: "千", //1 nghìn
      5: "万", //10 nghìn
      7: "千五", //1 triệu
      10: "十亿", //1 tỉ
    },
  },
  //Korean
  ko: {
    unitSeparator: "",
    unitFilter: " ",
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
      5: "만", //1 man = 10 nghìn
      6: "십만", //10 man = 100 nghìn
      7: "백만", //100 man = 1 triệu
      8: "천만", //10 triệu
      9: "억", //100 triệu
      10: "십억", //1 tỉ
    },
  },
};

//ngôn ngữ đọc số 0
const READ_NUMBER_ZERO = ["vi"];
const CODE_LANGUE = {
  ZH: "zh", //China
  VI: "vi", //Vietnamese
};
//code: string;_____________Mã có trong LIST_CODE_LANGUE
//type: number;_____________Dạng đọc. "1" đọc tách số khi có 3 chữ số trở lên, "2" đọc số bình thường.
//number: string | number;__Số cần đọc.
function coverNumberToWords(code, type, number) {
  number = parseInt(number, 10) + "";
  const length = number.length;
  const { base, units, odd, unitSeparator, unitFilter } =
    LIST_CODE_LANGUE[code];

  const readNumberZero = READ_NUMBER_ZERO.includes(code);
  if (length <= 2) {
    let words = "";
    const speciel = base[number];
    if (length === 1) return [speciel];
    if (length === 2) {
      const [numA, numB] = number.split("");
      speciel
        ? (words = speciel)
        : (words = `${base[+numA * 10]} ${base[numB]}`);
      return words.split(unitSeparator).filter((i) => i !== unitFilter);
    }
  } else {
    if (type === 1) return number.split("").map((num) => base[num]);
    if (type === 2) {
      if (length > 10) return; //trên 7 số ko đọc với type = 2
      if (length === 3) {
        let words = "";
        let hundred = "";
        const [numA, numB, numC] = number.split("");
        const checkB = numB === "0";
        const checkC = numC === "0";
        const speciel = numB + numC;

        if (base[+numA * 100]) hundred = base[+numA * 100];
        else hundred = `${base[numA]} ${units[3]}`;

        if (checkB && checkC) words = `${hundred}`; //số hàng trăm
        else if (base[speciel])
          words = `${hundred} ${base[speciel]}`; //số hàng chục đặc biệt
        else if (+speciel < 10)
          words = `${hundred} ${odd} ${base[numC]}`; //số lẻ
        else words = `${hundred} ${base[+numB * 10]} ${base[numC]}`; //số còn lại

        return words.split(unitSeparator).filter((i) => i !== unitFilter);
      } else {
        let numberToWord = "";

        if (code === CODE_LANGUE.ZH)
          numberToWord = handleForChina(number, base, units, odd);
        else {
          const chunk = chunksNumber(number, 3);

          for (let i = 0; i < chunk.length; i++) {
            const num = chunk[i];
            if (num.length === 1 && i === 0) {
              const position = (chunk.length - 1) * 3 + 1;
              const speciel = base[+num * Math.pow(10, position - 1)];
              if (speciel) numberToWord = `${speciel}`;
              else numberToWord = `${base[num[0]]} ${units[position]}`;
            }
            if (num.length === 2 && i === 0) {
              const [numA, numB] = num.split("");
              const position = (chunk.length - 1) * 3 + 1;
              const specielA = base[+numA * Math.pow(10, position)];
              const specielB = base[+numB * Math.pow(10, position - 1)];
              if (specielA && specielB) numberToWord = `${specielA} ${specielB}`;
              else {
                console.log("numberToWord", numberToWord);
                numberToWord = `${base[+numA * 10]} ${base[numB]} ${
                  units[position]
                }`;
              }
            }
            if (num.length === 3) {
              let words = "";
              let hundred = "";
              const [numA, numB, numC] = num.split("");
              const checkA = numA === "0";
              const checkB = numB === "0";
              const checkC = numC === "0";
              if (checkA && checkB && checkC) continue; //số không đọc

              const position = (chunk.length - i - 1) * 3 + 1; //vị trí hiện tại
              const unit = units[position] ? units[position] : ""; //đơn vị
              const speciel = numB + numC; //số hàng chục đặc biệt.

              if (checkA)
                readNumberZero
                  ? (hundred = `${base[numA]} ${units[3]}`)
                  : (hundred = "");
              else {
                const specielA = base?.[+numA * 10 ** (position + 1)]; //số hàng trăm đặc biệt.
                if (specielA) hundred = `${specielA}`;
                else hundred = `${base[numA]} ${units[3]}`;
              }

              //kiểm tra đọc các số hàng chục và đơn vị.
              if (checkB && checkC) words = `${hundred}`; //số hàng trăm
              else if (checkB && !checkC)
                words = `${hundred} ${odd} ${base[numC]}`; //số lẻ
              else if (base[speciel])
                words = `${hundred} ${base[speciel]}`; //số hàng chục đặc biệt
              else words = `${hundred} ${base[+numB * 10]} ${base[numC]}`; //số còn lại
              numberToWord = `${numberToWord} ${words} ${unit}`;
            }
          }
        }

        const result = numberToWord.split(unitSeparator).filter((i) => i !== unitFilter);
        console.log("result", numberToWord);
        return result
      }
    }
  }
}

//Sử lí số >= 4
function handleForChina(number, base, units, odd) {
  let numberToWord = "";
  const length = number.length;

  //hàm xử lí chuỗi có 4 số.
  function handleLength_4(numberForLength) {
    let words = "";
    const [numA, numB, numC, numD] = numberForLength;
    const checkA = numA === "0";
    const checkB = numB === "0";
    const checkC = numC === "0";
    const checkD = numD === "0";
    const thousand = !checkA ? `${base[numA]} ${units[4]}` : "";
    const hundred = `${base[numB]} ${units[3]}`;
    if (checkB && checkC && checkD) words = `${thousand}`; // Số hàng nghìn
    else if (!checkB && checkC && checkD)
      words = `${thousand} ${hundred}`; //Số hàng trăm
    else if (checkB && !checkC && !checkD)
      words = `${thousand} ${odd} ${base[numD]}`; //Số lẻ hàng trăm
    else if (!checkB && checkC && !checkD)
      words = `${thousand} ${hundred} ${odd} ${base[numD]}`; //Số lẻ hàng chục
    else if (checkB && checkC && !checkD)
      words = `${thousand} ${odd} ${base[numD]}`; //Số lẻ hàng đơn vị
    else
      words = `${thousand} ${hundred} ${base[numC * 10]} ${!checkD ? base[numD] : ""}`;
    return words;
  }

  if (length === 4) numberToWord = handleLength_4(number);
  else {
    const chunks = chunksNumber(number, 4);
    for (let i = 0; i < chunks.length; i++) {
      const num = chunks[i];
      if (num.length === 1 && i === 0) {
        const position = (chunks.length - 1) * 4 + 1;
        const speciel = base[+num * Math.pow(10, position - 1)];
        if (speciel) numberToWord = `${speciel}`;
        else numberToWord = `${base[num[0]]} ${units[position]}`;
      }
      if (num.length === 2 && i === 0) {
        const [numA, numB] = num.split("");
        const position = (chunks.length - 1) * 4 + 1;
        numberToWord = `${base[+numA * 10]} ${base[numB]} ${units[position]}`;
      }
      if (num.length === 4) {
        const position = (chunks.length - i - 1) * 4 + 1; 
        const words = handleLength_4(num);
        const unit = units[position]
        numberToWord = `${numberToWord} ${words} ${unit ? unit : ''}`
      }
    }
  }
  return numberToWord;
}

//Tách chuỗi số thành một mảng. Bắt đầu tách ngược từ vị trí cuối cùng đến vị trí đầu tiên của chuỗi
//Vidu 1230. thì sẽ bắt đầu đọc từ 0,3,2 thành một chuỗi và 1 thành một chuỗi. Sau đó đảo chuỗi
//Output: ["1", "230"]
//Input: 
//number: string. Chuỗi số cần tách.
//limit: number. Giới hạn của mỗi chuỗi.
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
//console.log("result", coverNumberToWords("zh", 2, '241'));
console.log("result", coverNumberToWords("ko", 2, "364"));
//console.log("result", coverNumberToWords("vi", 2, "3408080906"));

// console.log("result", coverNumberToWords("zh", 2, '109'));
// console.log("result", coverNumberToWords("zh", 2, '109'));
// console.log("result", coverNumberToWords("vi", 1, '81'));
// console.log("result", coverNumberToWords("vi", 2, '109'));
// console.log("result", coverNumberToWords("vi", 1, '109'));
// console.log("result", coverNumberToWords("vi", 2, '12009'));
// console.log("result", coverNumberToWords("vi", 1, '12009'));
// console.log("_____________________________");
// console.log("result", coverNumberToWords("en", 2, '81'));
// console.log("result", coverNumberToWords("en", 1, '81'));
// console.log("result", coverNumberToWords("en", 2, '109'));
// console.log("result", coverNumberToWords("en", 1, '109'));
// console.log("result", coverNumberToWords("en", 2, '12009'));
// console.log("result", coverNumberToWords("en", 1, '12009'));
