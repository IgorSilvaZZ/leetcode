/* 
    Write an algorithm to determine if a number n is happy.

    A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.
    Return true if n is a happy number, and false if not.
*/

const nParam = 21;

var isHappy = (n) => {
	let digits = String(n).split("").map(Number);

	let result = 0;

	const processedResults = new Set();

	while (result !== 1) {
		/* Calculando a some dos quadrados dos digitos */
		result = digits.reduce((acc, curr) => acc + curr ** 2, 0);

		digits = String(result).split("").map(Number);

		if (processedResults.has(result)) {
			return false;
		}

		processedResults.add(result);
	}

	return result === 1;
};

const result = isHappy(nParam);

console.log({ result });
