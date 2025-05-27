/* 
    Entrada: nums = [1,3,5,6], target = 2
    Saida: 1
*/

const numsParam = [1, 3, 5, 6, 8, 10];
const targetParam = 9;

var searchInsert = function (nums, target) {
  let lowIndex = 0;
  let highIndex = nums.length - 1;

  while (lowIndex <= highIndex) {
    const middleIndex = Math.floor((lowIndex + highIndex) / 2);
    const stipulatedValue = nums[middleIndex];

    if (stipulatedValue === target) {
      return middleIndex;
    }

    if (stipulatedValue > target) {
      highIndex = middleIndex - 1;
    } else {
      lowIndex = middleIndex + 1;
    }
  }

  return lowIndex;
};

const searchInsertResult = searchInsert(numsParam, targetParam);

console.log({ searchInsertResult });
