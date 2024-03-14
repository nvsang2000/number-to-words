const LIST_CODE_LANGUE = {
  vi: {
    //base: Các số cơ bản và số đặc biệt
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
    //Đơn vị
    units: {
      2: "mươi",
      3: "trăm",
      4: "nghìn",
      7: "triệu",
      10: "tỷ",
    },
    //Số lẻ
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
      if(length > 10) return

      if (length === 3) {
        let words = "";
        const [numA, numB, numC] = number.split("");
        const specielNum = numB + numC
        const numHundred = `${base[numA]} ${units[3]}`

        if (numB === "0" && numC == "0") words = `${numHundred}`;//số hàng trăm
        else if (numB === "0" && numC !== "0") words = `${numHundred} ${odd} ${base[numC]}`;//số lẻ
        else if (base[specielNum]) words = `${numHundred} ${base[specielNum]}`;//số hàng chục đặc biệt
        else words = `${numHundred} ${base[+numB * 10]} ${base[numC]}`;//số còn lại
        
        console.log('words', words)
        return words.trim().split(" ");
      } else {
        let numberToWord = '';
        const chunk = chunksNumber(number);

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
              numberToWord = `${base[+numA * 10]} ${base[numB]} ${units[position]}`;
            }
          }
          if (num.length === 3) {
            let words = '';
            let numHundred = '';
            const [numA, numB, numC] = num.split("");
            const position = (chunk.length - i - 1) * 3 + 1;
            const specielNum = numB + numC;
            const unit = units[position] ? units[position] : '';

            if (numA === "0" && numB === "0" && numC == "0") continue;//số không đọc
            if (numA === "0") readNumberZero ? numHundred = `${base[numA]} ${units[3]}` : numHundred = '';
            else numHundred = `${base[numA]} ${units[3]}`;//kiểm tra đọc số 0 và đọc số hàng trăm.
            
            if (numB === "0" && numC == "0") words = `${numHundred}`;//số hàng trăm
            else if (numB === "0" && numC !== "0")  words = `${numHundred} ${odd} ${base[numC]}`;//số lẻ         
            else if (base[specielNum])  words = `${numHundred} ${base[specielNum]}`;//số hàng chục đặc biệt
            else  words = `${numHundred} ${base[+numB * 10]} ${base[numC]}`;//số còn lại
            numberToWord = `${numberToWord} ${words} ${unit}`;
          }
        }
        console.log('numberToWord', numberToWord)
        const result = numberToWord.split(" ").filter((i) => i !== '')
        return result
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
console.log("result", coverNumberToWords("en", 2, '96'));
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
