/* 
    Input: nums = [3,2,1,5,6,4], k = 2
    Output: 5
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const kMinValue = nums.length - k + 1;

  const quickSelect = (array, kNumber) => {
    if (array.length === 1) {
      return array[0];
    }

    const pivot = array[0];

    const bigger = [];
    const equals = [];
    const smaller = [];

    for (let number of array) {
      if (number === pivot) {
        equals.push(number);
      } else if (number > pivot) {
        bigger.push(number);
      } else {
        smaller.push(number);
      }
    }

    if (kNumber <= smaller.length) {
      return quickSelect(smaller, kNumber);
    } else if (kNumber > smaller.length + equals.length) {
      return quickSelect(bigger, kNumber - smaller.length - equals.length);
    }

    return pivot;
  };

  return quickSelect(nums, kMinValue);
};

const numsParams = [7, 6, 5, 4, 3, 2, 1];
const kParam = 2;

const resultFindKthLargest = findKthLargest(numsParams, kParam);

console.log({ resultFindKthLargest });
