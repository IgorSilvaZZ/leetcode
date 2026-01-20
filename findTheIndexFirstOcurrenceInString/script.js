/* 
    Given two strings needle and haystack, return the index of the first 
    occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

const haystackParam = "mississippi";
const needleParam = "issip";

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = (haystack, needle) => {
	let pointer1 = 0; // Apontador para haystack
	let result = -1;

	while (pointer1 < haystack.length) {
		// Coleto parte da string haystack com o tamanho de needle
		const currentSubstring = haystack.slice(pointer1, pointer1 + needle.length);

		// Se a parte da string for extamente igual a nedlee, retorno o índice
		if (currentSubstring === needle) {
			result = pointer1;

			break;
		}

		pointer1++;
	}

	return result;
};

const result = strStr(haystackParam, needleParam);

console.log({ result });
