/* 
    Entrada: s = "Let's take LeetCode contest"
    Saída: "s'teL ekat edoCteeL tsetnoc"
*/

let stringParam = "I love u";

var reverseWords = function (s) {
  let result = "";

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 <= s.length - 1) {
    // Identificando o espaço em branco e se esta na ultima posição da string
    if (s[pointer2] === " " || pointer2 === s.length - 1) {
      let splittedWord = "";

      // Realizar o splice do bloco
      for (let i = pointer1; i < pointer2 + 1; i++) {
        if (s[i] !== " ") {
          splittedWord += `${s[i]}`;
        }
      }

      // Inverter a ordem da string

      for (let i = splittedWord.length - 1; i >= 0; i--) {
        result += `${splittedWord[i]}`;
      }

      // Adiciona espaço em branco, exceto na primeira e ultima posição
      if (pointer2 !== 0 && pointer2 !== s.length - 1) {
        result += " ";
      }

      pointer1 = pointer2 + 1;
    }

    pointer2++;
  }

  return result;
};

const resultReverse = reverseWords(stringParam);

console.log({ resultReverse });
