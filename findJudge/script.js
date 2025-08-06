/* 
    Input: n = 2, trust = [[1,2]]
    Output: 2
*/

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if (trust.length === 0 && n === 1) {
    return 1;
  }

  const trustGiven = {}; /* Numero de pessoas que cada pessoa confia */
  const trustReceived =
    {}; /* Numero de pessoas que cada pessoa recebe confiança */

  for (const item of trust) {
    const firstPerson = item[0]; /* Quem confia */
    const secundPerson = item[1]; /* Pessoa que recebe a confiança */

    if (!trustGiven[firstPerson]) {
      trustGiven[firstPerson] = 1;
    } else {
      trustGiven[firstPerson] = trustGiven[firstPerson] + 1;
    }

    if (!trustReceived[secundPerson]) {
      trustReceived[secundPerson] = 1;
    } else {
      trustReceived[secundPerson] = trustReceived[secundPerson] + 1;
    }
  }

  for (let i = 1; i <= n; i++) {
    if (trustGiven[i] === undefined && trustReceived[i] === n - 1) {
      return i;
    }
  }

  return -1;
};

const nParam = 3;
const trustParam = [
  [1, 3],
  [2, 3],
];

const resultFindJudge = findJudge(nParam, trustParam);

console.log({ resultFindJudge });
