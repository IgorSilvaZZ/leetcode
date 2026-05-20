/**
 * @param {number[]} arr
 * @param {number} target
 * @return {boolean}
 */
function binarySearch(arr, target) {
	let low = 0;
	let high = arr.length - 1;

	while (low <= high) {
		const middle = Math.floor((low + high) / 2);

		const possibleValue = arr[middle];

		if (possibleValue === target) {
			return true;
		}

		if (possibleValue < target) {
			low = middle + 1;
		} else {
			high = middle - 1;
		}
	}

	return false;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = (nums1, nums2) => {
	const common = new Set([]);

	const nums1Order = nums1.sort((a, b) => a - b);
	const nums2Order = nums2.sort((a, b) => a - b);

	/* Coletando o menor e maior array de comprimento */
	const [smaller, large] =
		nums1Order.length < nums2Order.length
			? [nums1Order, nums2Order]
			: [nums2Order, nums1Order];

	smaller.forEach((item) => {
		if (binarySearch(large, item)) {
			common.add(item);
		}
	});

	return Array.from(common);
};

const nums1Param = [1, 2, 2, 1];
const nums2Param = [2, 2];

const result = intersection(nums1Param, nums2Param);

console.log(result);
