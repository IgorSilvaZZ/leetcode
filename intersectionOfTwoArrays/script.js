/* 
    Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = (nums1, nums2) => {
	/* Precisa aparecer nos dois arrays para ser considerado unico e retornavel */

	const frequenciesNumbers = {};

	for (let i = 0; i < nums1.length; i++) {
		const currentValue = nums1[i];

		if (!frequenciesNumbers[currentValue]) {
			frequenciesNumbers[currentValue] = 1;
		}
	}

	for (let i = 0; i < nums2.length; i++) {
		const currentValue = nums2[i];

		if (frequenciesNumbers[currentValue]) {
			frequenciesNumbers[currentValue] = frequenciesNumbers[currentValue] + 1;
		}
	}

	const duplicatedNumbers = Object.keys(frequenciesNumbers)
		.filter((key) => frequenciesNumbers[key] >= 2)
		.map(Number);

	return duplicatedNumbers;
};

const nums1Param = [1];
const nums2Param = [1];

const result = intersection(nums1Param, nums2Param);

console.log(result);
