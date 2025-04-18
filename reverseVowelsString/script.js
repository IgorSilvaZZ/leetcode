/* 
    Input: s = "IceCreAm"
    Output: "AceCreIm"
*/

let sParam = "leetcode";

var reverseVowels = function (s) {
  let pointer1 = 0;
  let pointer2 = s.length - 1;

  let resultInvertedVowels = String(s).split("");

  const vowels = ["a", "e", "i", "o", "u"];

  while (pointer1 < pointer2) {
    const pointer1Value = resultInvertedVowels[pointer1];
    const pointer2Value = resultInvertedVowels[pointer2];

    const pointer1NormalizedValue = pointer1Value.toLowerCase();
    const pointer2NormalizedValue = pointer2Value.toLowerCase();

    if (!vowels.includes(pointer1NormalizedValue)) {
      pointer1++;
    }

    if (!vowels.includes(pointer2NormalizedValue)) {
      pointer2--;
    }

    if (
      vowels.includes(pointer1NormalizedValue) &&
      vowels.includes(pointer2NormalizedValue)
    ) {
      resultInvertedVowels[pointer1] = pointer2Value;
      resultInvertedVowels[pointer2] = pointer1Value;

      pointer1++;
      pointer2--;
    }
  }

  return resultInvertedVowels.join("");
};

const reverseVowelsResult = reverseVowels(sParam);

console.log({ reverseVowelsResult });
