/* 
    Input: nums = [3,0,1]

    Output: 2

    Explanation:

    n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
*/

function quickSort(
  array,
  left = 0,
  right = array.length - 1,
  readNumbers = {}
) {
  if (left >= right) {
    return;
  }

  const pivot = array[right];

  let i = left;

  for (let j = left; j < right; j++) {
    if (!readNumbers[array[j]]) {
      readNumbers[array[j]] = true;
    }

    if (array[j] <= pivot) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
  }

  [array[i], array[right]] = [array[right], array[i]];

  quickSort(array, left, i - 1, readNumbers);
  quickSort(array, i + 1, right, readNumbers);

  return array;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let readNumbers = {};

  nums = quickSort(nums, 0, nums.length - 1, readNumbers);

  console.log(readNumbers);
};

const numsParam = [9, 6, 4, 2, 3, 5, 7, 0, 1];

const result = missingNumber(numsParam);
