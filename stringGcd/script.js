/* 
    Entrada: str1 = "ABCABC", str2 = "ABC"
    Saida: "ABC"
*/

let str1Param = "ABCDEF";
let str2Param = "ABC";

/* Coletar o Maximo divisor comum de cada length das strings */
const getGreatestCommonDivisor = (number1, number2) => {
  let maximumDivisor = 0;

  let maxNumber = number1 > number2 ? number1 : number2;

  for (let i = maxNumber; i >= 1; i--) {
    if (number1 % i === 0 && number2 % i === 0) {
      if (i > maximumDivisor) {
        maximumDivisor = i;
      }
    }
  }

  return maximumDivisor;
};

var gcdOfStrings = function (str1, str2) {
  const greatestCommonDivisor = getGreatestCommonDivisor(
    str1.length,
    str2.length
  );

  let index = 0;

  let someLettersGdcString = "";

  while (index < greatestCommonDivisor) {
    const dividerStr1 = str1.length / greatestCommonDivisor;

    console.log({ dividerStr1 });

    index++;
  }

  return someLettersGdcString;
};

const gdcStringResult = gcdOfStrings(str1Param, str2Param);

console.log({ gdcStringResult });
