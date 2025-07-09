/* 
    Input: ransomNote = "a", magazine = "b"
    Output: false
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const countMagazineCharacters = {};

  for (let letter of magazine) {
    if (!countMagazineCharacters[letter]) {
      countMagazineCharacters[letter] = 1;
    } else {
      countMagazineCharacters[letter] = countMagazineCharacters[letter] + 1;
    }
  }

  let countLetters = 0;

  for (let letter of ransomNote) {
    if (
      countMagazineCharacters[letter] &&
      countMagazineCharacters[letter] > 0
    ) {
      countMagazineCharacters[letter] = countMagazineCharacters[letter] - 1;
      countLetters++;
    }
  }

  return countLetters === ransomNote.length;
};

const ransomNoteParam = "";
const magazineParam = "qualquer coisa";

const resultCanConstruct = canConstruct(ransomNoteParam, magazineParam);

console.log({ resultCanConstruct });
