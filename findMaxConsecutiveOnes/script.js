/* 
    Input: nums = [1,1,0,1,1,1]
    Output: 3
    Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let countSequency = 0;

  let maxSequency = 0;

  for (let number of nums) {
    if (number === 1) {
      countSequency++;

      continue;
    }

    /* Guardar a maior contagem para comparação */
    if (countSequency > maxSequency) {
      maxSequency = countSequency;
    }

    countSequency = 0;
  }

  maxSequency = Math.max(maxSequency, countSequency);

  return maxSequency;
};

const numsParams = [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];

const resultFindMaxConsecutiveOnes = findMaxConsecutiveOnes(numsParams);

console.log({ resultFindMaxConsecutiveOnes });
