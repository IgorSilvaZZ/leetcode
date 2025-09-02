/* 
  Input: n = 5, bad = 4
  Output: 4
  Explanation:
  call isBadVersion(3) -> false
  call isBadVersion(5) -> true
  call isBadVersion(4) -> true
  Then 4 is the first bad version.
*/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let lowIndex = 1;
    let highIndex = n;

    while (lowIndex <= highIndex) {
      const middleIndex = Math.floor((lowIndex + highIndex) / 2);

      if (isBadVersion(middleIndex)) {
        highIndex = middleIndex - 1;
      } else {
        lowIndex = middleIndex + 1;
      }
    }

    return lowIndex;
  };
};
