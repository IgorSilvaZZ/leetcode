/* 
    Entrada: nums = [3,2,2,3], val = 3
    Saída: 2, nums = [2,2,_,_]
*/

let numsParam = [3, 2, 2, 3];
let valParam = 3;

var removeElement = function (nums, val) {
  let pointer1 = 0;
  let pointer2 = 0;
  let k = 0;

  while (pointer2 < nums.length) {
    const pointer1Value = nums[pointer1];
    const pointer2Value = nums[pointer2];

    if (pointer2Value !== val) {
      nums[pointer1] = pointer2Value;
      nums[pointer2] = pointer1Value;

      pointer1++;
      k++;
    }

    pointer2++;
  }

  for (let index in nums) {
    if (nums[index] === val) {
      nums[index] = "_";
    }
  }

  return k;
};

const numbers = removeElement(numsParam, valParam);

console.log({ numsParam, numbers });
