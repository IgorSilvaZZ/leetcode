/* 
    Input: s = "abc", t = "ahbgdc"
    Output: true
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let left = 0;
    let right = 0;

    while (right < t.length) {
        
        if (s[left] === t[right]) {
            left++
        }

        right++ 

    }

    return left === s.length

};

const sParam = "axc"
const tParam = "ahbgdc"

const result = isSubsequence(sParam, tParam)

console.log(result);
