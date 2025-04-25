/* 
    Input: s = "the sky is blue"
    Output: "blue is sky the"
*/

let sParam = "a good   example";

var reverseWords = function (s) {
  let resultReverseWordsIn = String(s)
    .split(" ")
    .filter((item) => {
      if (item !== " ") {
        return item;
      }
    });

  let pointer1 = 0;
  let pointer2 = resultReverseWordsIn.length - 1;

  while (pointer1 < pointer2) {
    const pointer1Value = resultReverseWordsIn[pointer1];
    const pointer2Value = resultReverseWordsIn[pointer2];

    if (pointer1Value !== "" && pointer2Value !== "") {
      resultReverseWordsIn[pointer1] = pointer2Value;
      resultReverseWordsIn[pointer2] = pointer1Value;
    }

    pointer1++;
    pointer2--;
  }

  return resultReverseWordsIn.join(" ");
};

let reverseWordsInResult = reverseWords(sParam);

console.log(reverseWordsInResult);
