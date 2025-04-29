/* 
    Input: nums = [1,2,3,4]
    Output: [24,12,8,6]
*/

const numsParam = [-1, 1, 0, -3, 3];

var productExceptSelf = function (nums) {
  let currentIndex = 0;

  const newNumbers = [];

  while (currentIndex < nums.length) {
    let resultProductFiltered = undefined;

    for (let i = 0; i < nums.length; i++) {
      if (currentIndex != i) {
        let number = nums[i];

        if (resultProductFiltered === undefined) {
          resultProductFiltered = number;
        } else {
          resultProductFiltered *= number;
        }
      }
    }

    if (resultProductFiltered === 0) {
      resultProductFiltered = Math.abs(resultProductFiltered);
    }

    newNumbers.push(resultProductFiltered);

    currentIndex++;
  }

  return newNumbers;
};

const resultProductExceptSelf = productExceptSelf(numsParam);

console.log({ resultProductExceptSelf });
