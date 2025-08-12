/* 
    Input: nums = [1,1,2]
    Output: 2, nums = [1,2,_]
    Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let pointer1 = 0;
  let pointer2 = 1;
  let k = nums.length > 0 ? 1 : 0;

  while (pointer2 < nums.length) {
    const pointer1Value = nums[pointer1];
    const pointer2Value = nums[pointer2];

    if (pointer1Value !== pointer2Value) {
      nums[pointer1 + 1] = pointer2Value;

      pointer1++;

      k++;
    }

    pointer2++;
  }

  return k;
};

const numsParam = [1, 1, 2];

const resultRemoveDuplicates = removeDuplicates(numsParam);

console.log(resultRemoveDuplicates);
