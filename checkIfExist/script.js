/* 
    Input: arr = [10,2,5,3] [2, 3, 5, 10] 
    [7, 1, 14, 11] [1, 7, 11, 14]
    Output: true
    Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const hashNumbers = {};

  for (const item of arr) {
    if (hashNumbers[item / 2] !== undefined || hashNumbers[item * 2]) {
      return true;
    }

    hashNumbers[item] = true;
  }

  return false;
};

const arrParam = [10, 2, 5, 3];

const resultCheckIfExist = checkIfExist(arrParam);
