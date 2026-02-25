/* 
    Entrada: s = "Let's take LeetCode contest"
    Saída: "s'teL ekat edoCteeL tsetnoc"
*/

const stringParam = "rac art";

var reverseWords = (s) => {
	let result = "";

	let left = 0;
	let right = 0;

	while (right < s.length) {
		if (s[right] !== " ") {
			right += 1;
		} else {
			// Invertendo a palavra
			result += s
				.slice(left, right + 1)
				.split("")
				.reverse()
				.join("");

			right += 1;
			left = right;
		}
	}

	result += " ";

	result += s.slice(left, right).split("").reverse().join("");

	return result.trim();
};

const resultReverse = reverseWords(stringParam);

console.log({ resultReverse });
