'use strict';
const CODE_LANGUE = require('./langue');
const READ_0 = ["vi", "ko"];
const READ_LENGTH_4 = ["zh", "ko", "ja"];
/**
 * Converts an integer into a string with an ordinal postfix.
 * If number is decimal, the decimals will be removed.
 * @example numberToWords("en", 2, "123") => [ 'one', 'hundred', 'twenty', 'three' ]
 * Language code
 * @param {string} code
 * Reading format. "1" reads split numbers, "2" reads normal numbers.
 * @param {number} type
 * Number to read
 * @param {number|string} number
 * @returns {[string]}
 */
function numberToWords(code, type, number) {
  number = parseInt(number, 10) + "";
  const length = number.length;
  const { base, separator, filter } = CODE_LANGUE[code];

  //Handle numbers 1-99
  if (length <= 2) {
    let words = "";
    const speciel = base[number];
    if (length === 1) return [speciel];
    if (length === 2) {
      words = handleForLength_2(number, base);
      return words.split(separator).filter((i) => i !== filter);
    }
  } else {
    //Handle numbers. > 99
    let words = "";
    if (type === 1) return number.split("").map((num) => base[num]);
    if (type === 2) {
      if (length > 10) return; //Above 7 numbers cannot be read with type = 2
      if (length === 3) words = handleForLength_3(code, number);
      //Handle numbers in the hundreds place (100 - 999)
      else {
        //Handle numbers above thousands 99 billion <= number >= 1000
        if (READ_LENGTH_4.includes(code)) //Read 4 numbers.
          words = handleFor_4(code, number); 
        else words = handleFor_3(code, number); //Read 2 numbers.
      }
    }
    return words.split(separator).filter((i) => i !== filter);
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

module.exports = { 
  numberToWords,
  chunksNumber
}

