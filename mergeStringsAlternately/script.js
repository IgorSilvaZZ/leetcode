/*
    Entrada: word1 = "abc", word2 = "pqr"
    Saida: "apbqcr"
*/

/* 
    word1:  a   b   c
    word2:    p   q   r
    merged: a p b q c r
*/

const word1Param = "abcd";
const word2Param = "pq";

var mergeAlternately = function (word1, word2) {
  const word1Length = word1.length;
  const word2Length = word2.length;

  let isFullyRead1 = false;
  let isFullyRead2 = false;

  let indexWord1 = 0;
  let indexWord2 = 0;

  let mergedString = "";

  while (true) {
    if (indexWord1 === word1Length) {
      isFullyRead1 = true;
    } else {
      mergedString += word1[indexWord1];

      indexWord1++;
    }

    if (indexWord2 === word2Length) {
      isFullyRead2 = true;
    } else {
      mergedString += word2[indexWord2];

      indexWord2++;
    }

    if (isFullyRead1 && isFullyRead2) {
      break;
    }
  }

  return mergedString;
};

const stringMergedAlternately = mergeAlternately(word1Param, word2Param);

console.log({ stringMergedAlternately });
