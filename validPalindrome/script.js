/* 

    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = (s) => {
	const wordFormatted = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

	let left = 0;
	let right = wordFormatted.length - 1;

	while (left < right) {
		if (wordFormatted[right] !== wordFormatted[left]) {
			return false;
		}

		left++;
		right--;
	}

	return true;
};

const wordParam = "A man, a plan, a canal: Panama";

const result = isPalindrome(wordParam);

console.log(result);
