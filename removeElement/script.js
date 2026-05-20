/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = (nums, val) => {
	let low = 0;
	let fast = 0;
	let k = 0;

	while (fast < nums.length) {
		if (nums[fast] !== val) {
			const aux = nums[fast];

			nums[fast] = nums[low];
			nums[low] = aux;

			low++;
			k++;
		}

		fast++;
	}

	return k;
};

const numsParam = [3, 2, 2, 3];
const valParam = 3;

removeElement(numsParam, valParam);
