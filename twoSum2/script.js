/* 
    Input: numbers = [2,7,11,15], target = 9
    Output: [1,2]
    Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (numbers, target) => {
	let left = 0;
	let right = numbers.length - 1;

	while (left < right) {
		const sum = numbers[right] + numbers[left];

		if (sum === target) {
			return [left + 1, right + 1];
		}

		if (sum < target) {
			left++;
		} else {
			right--;
		}
	}
};

const numbersParam = [2, 7, 11, 15];
const target = 9;

const result = twoSum(numbersParam, target);

console.log(result);
