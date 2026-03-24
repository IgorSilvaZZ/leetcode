/* 
  Input: s = ["h","e","l","l","o"]
  Output: ["o","l","l","e","h"]
*/

const input = ["h", "e", "l", "l", "o"];

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = (s) => {
	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		const aux = s[left];
		const aux2 = s[right];

		s[left] = aux2;
		s[right] = aux;

		left++;
		right--;
	}
};

reverseString(input);

console.log(input);
