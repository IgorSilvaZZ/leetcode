/* 
  Input: nums = [0,1,0,3,12]
  Output: [1,3,12,0,0]]
*/

let numsParam = [0, 1, 0, 3, 12];

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let low = 0;
  let fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      const aux = nums[fast]

      nums[fast] = nums[low]
      nums[low] = aux

      low++
    }

    fast++
  }
};

moveZeroes(numsParam)

console.log({ numsParam });
