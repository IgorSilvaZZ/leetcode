/* 
    Input: nums = [1,2,3,4]
    Output: [1,3,6,10]
    Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  for (let i in nums) {
    if (i > 0) {
      nums[i] = nums[i] + nums[i - 1];
    }
  }

  return nums;
};

const numsParams = [3, 1, 2, 10, 1];

const resultRunningSum = runningSum(numsParams);

console.log({ resultRunningSum });
