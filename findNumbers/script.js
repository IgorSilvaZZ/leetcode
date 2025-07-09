/* 
    Input: nums = [12,345,2,6,7896]
    Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let countEvenNumbers = 0;

  for (let number of nums) {
    if (String(number).length % 2 === 0) {
      countEvenNumbers++;
    }
  }

  return countEvenNumbers;
};

const numsParams = [555, 901, 482, 1771];

const resultFindNumbers = findNumbers(numsParams);

console.log({ resultFindNumbers });
