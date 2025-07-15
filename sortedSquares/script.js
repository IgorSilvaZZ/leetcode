/* 
    Input: nums = [-4,-1,0,3,10]
    Output: [0,1,9,16,100]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const numsOrder = [];

  let pointer1 = 0;
  let pointer2 = nums.length - 1;

  let lastMaxValuePosition = pointer2;

  while (pointer1 <= pointer2) {
    const absolutePointer1Value = Math.abs(nums[pointer1]);
    const absolutePointer2Value = Math.abs(nums[pointer2]);

    const squarePointer1Value = nums[pointer1] * nums[pointer1];
    const squarePointer2Value = nums[pointer2] * nums[pointer2];

    if (absolutePointer2Value > absolutePointer1Value) {
      numsOrder[lastMaxValuePosition] = squarePointer2Value;

      pointer2--;
    } else {
      numsOrder[lastMaxValuePosition] = squarePointer1Value;

      pointer1++;
    }

    lastMaxValuePosition--;
  }

  return numsOrder;
};

const numsParam = [-4, -1, 0, 3, 10];

const resultSortedSquares = sortedSquares(numsParam);

console.log({ resultSortedSquares });
