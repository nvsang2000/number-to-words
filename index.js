const LIST_CODE_LANGUE = {
  vi: {//Vietnamses
    base: { //base: Các số cơ bản và số đặc biệt
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
    units: {//Đơn vị
      2: "mươi",
      3: "trăm",
      4: "nghìn",
      7: "triệu",
      10: "tỷ",
    },
    odd: "linh",  //Số lẻ
  },
  en: {//English
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
      3: "hundred",// trăm
      4: "thousand",// nghìn
      7: "million",// triệu
      10: "billion",// tỉ
    },
    odd: "and",
  },
  zh: {//China
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
      3: "百",//1 trăm
      4: "千",//1 ngàn
      5: "万",//1 vạn = 10 ngàn
      7: "百万",//1 triệu = 100 vạn
      10: "十亿",//1 tỉ
    },
    odd: "零",
  },
  ja: { //Japanese, kanji
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
      200: "两百"
    },
    units: {
      3: "百",//1 trăm
      4: "千",//1 nghìn
      5: "万",//10 nghìn
      7: "千五",//1 triệu
      10: "十亿",//1 tỉ
    },
    odd: "",
  },
  ko: { //Korean
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
      100: "백",//1 trăm
      1000: "천",//1 nghìn
      10000: "만",//10 nghìn
      100000: "십만",//100 nghìn
      1000000: "백만",//1 triệu
      10000000: "천만",//10 triệu
      100000000: "억",//100 triệu
      1000000000: "십억",//1 tỉ
    },
    units: {
      3: "백",//1 trăm 
      4: "천",//1 nghìn
      5: "만",//1 man = 10 nghìn
      6: "십만",//10 man = 100 nghìn
      7: "백만",//100 man = 1 triệu
      8: "천만",//10 triệu
      9: "억",//100 triệu
      10: "십억",//1 tỉ
    },
    odd: "",
  },
};

//ngôn ngữ đọc số 0
const READ_NUMBER_ZERO = ['vi']

//code: string;_____________Mã có trong LIST_CODE_LANGUE
//type: number;_____________Dạng đọc. "1" đọc tách số khi có 3 chữ số trở lên, "2" đọc số bình thường.
//number: string | number;__Số cần đọc.
function coverNumberToWords(code, type, number) {
  number = parseInt(number, 10) + "";
  const length = number.length;
  const language = LIST_CODE_LANGUE[code];
  const base = language.base;
  const units = language.units;
  const odd = language.odd;

  const readNumberZero = READ_NUMBER_ZERO.includes(code)
  if (length <= 2) {
    const specielNum = base?.[number];
    if (length === 1) return [specielNum];
    if (length === 2) {
      if (specielNum) return specielNum.split(" ");
      else {
        const [numA, numB] = number?.split("");
        const numberToWord = `${base[+numA * 10]} ${base[numB]}`;
        return numberToWord.split(" ");
      }
    }
  } else {
    if (type === 1) {
      const nums = number.split("");
      return nums.map((num) => base[num]);
    }
    if (type === 2) {
      if(length > 10) return //trên 7 số ko đọc với type = 2

      if (length === 3) {
        let words = "";
        let numHundred = ""
        const [numA, numB, numC] = number.split("");
        const checkB = numB === "0"
        const checkC = numC === "0"
        const specielNum = numB + numC
    
        //số hàng trăm đặc biệt
        if(base[+numA * 100]) numHundred = base[+numA * 100]
        else numHundred = `${base[numA]} ${units[3]}`

        if (checkB && checkC) words = `${numHundred}`;//số hàng trăm
        else if (checkB && !checkC) words = `${numHundred} ${odd} ${base[numC]}`;//số lẻ
        else if (base[specielNum]) words = `${numHundred} ${base[specielNum]}`;//số hàng chục đặc biệt
        else words = `${numHundred} ${base[+numB * 10]} ${base[numC]}`;//số còn lại 

        return words.trim().split(" ").filter((i) => i !== '')
      } else {
        let numberToWord = '';
        const chunk = chunksNumber(number);

        for (let i = 0; i < chunk.length; i++) {
          const num = chunk[i];
          if (num.length === 1 && i === 0) {
            const position = (chunk.length - 1) * 3 + 1;
            const specielNum = base[+num * 10 ** (position - 1)]
            if(specielNum) numberToWord = `${specielNum}`;
            else numberToWord = `${base[num[0]]} ${units[position]}`;
          }
          if (num.length === 2 && i === 0) {
            const position = (chunk.length - 1) * 3 + 1;
            const specielNum = base?.[num];
            if (specielNum) numberToWord = `${specielNum} ${units[position]}`;
            else {
              const [numA, numB] = num?.split("");
              numberToWord = `${base[+numA * 10]} ${base[numB]} ${units[position]}`;
            }
          }
          if (num.length === 3) {
            let words = '';
            let numHundred = '';
            const [numA, numB, numC] = num.split("");
            const checkA = numA === "0"
            const checkB = numB === "0"
            const checkC = numC === "0"
            if (checkA && checkB && checkC) continue;//số không đọc

            const position = (chunk.length - i - 1) * 3 + 1;//vị trí hiện tại
            const unit = units[position] ? units[position] : '';//đơn vị
            const specielNum = numB + numC;//số hàng chục đặc biệt.

            console.log('specielNum', specielNum, base[specielNum])
            if (checkA) readNumberZero ? numHundred = `${base[numA]} ${units[3]}` : numHundred = '';
            else {
              const specielNumA = base?.[+numA * 10 ** (position + 1)]//số hàng trăm đặc biệt.
              if(specielNumA) numHundred = `${specielNumA}`;
              else  numHundred = `${base[numA]} ${units[3]}`;
            }

            if(checkA && checkB && !checkC) {
              
            }
            //kiểm tra đọc các số hàng chục và đơn vị.
            if (checkB && checkC) words = `${numHundred}`;//số hàng trăm
            else if (checkB && !checkC) words = `${numHundred} ${odd} ${base[numC]}`;//số lẻ        
            else if (base[specielNum])  words = `${numHundred} ${base[specielNum]}`;//số hàng chục đặc biệt
            else  words = `${numHundred} ${base[+numB * 10]} ${base[numC]}`;//số còn lại
            numberToWord = `${numberToWord} ${words} ${unit}`;
          }
        }
        console.log('numberToWord', numberToWord, chunk)
        return numberToWord.split(" ").filter((i) => i !== '')
      }
    }
  }
}
//Tách chuỗi số thành một mảng. Bắt đầu tách ngược từ vị trí cuối cùng đến vị trí đầu tiên của chuỗi
//Vidu 1230. thì sẽ bắt đầu đọc từ 0,3,2 thành một chuỗi và 1 thành một chuỗi. Sau đó đảo chuỗi
//Output: ["1", "230"]
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

//console.log("chunksNumber", chunksNumber('1232543'));
console.log("_____________________________");
//console.log("result", coverNumberToWords("zh", 2, '241'));
console.log("result", coverNumberToWords("zh", 2, '1000001'));
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
