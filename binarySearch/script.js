/* 
    Entrada: nums = [-1,0,3,5,9,12], target = 9
    Saida: 4
*/

const numsParam = [-1, 0, 3, 5, 9, 12];
const targetParam = 9;

var search = function (nums, target) {
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

  return -1;
};

const searchResult = search(numsParam, targetParam);

console.log({ searchResult });
