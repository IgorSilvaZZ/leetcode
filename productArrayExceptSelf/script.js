/* 
    Input: nums = [1,2,3,4]
    Output: [24,12,8,6]
*/

const numsParam = [1, 2, 3, 4];

var productExceptSelf = function (nums) {
  let someRightProduct = 1;
  let someLeftProduct = 1;

  let newNumbers = [];

  // For para coletar da esquerda
  for (let index = 0; index < nums.length; index++) {
    if (index === 0) {
      someLeftProduct *= 1;
    } else {
      someLeftProduct *= nums[index - 1];
    }

    newNumbers[index] = someLeftProduct;
  }

  // For para coletar da direita
  for (let index = nums.length - 1; index >= 0; index--) {
    if (index === nums.length - 1) {
      someRightProduct = 1;
    } else {
      someRightProduct *= nums[index + 1];
    }

    newNumbers[index] *= someRightProduct;
  }

  return newNumbers.map((item) => (item === 0 ? 0 : item));
};

const resultProductExceptSelf = productExceptSelf(numsParam);

console.log({ resultProductExceptSelf });
