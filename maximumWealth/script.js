/* 
    Entrada: contas = [[1,2,3],[3,2,1]]
    Saída: 6
*/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let maxBalanceAccount = 0;

  for (let lineIndex = 0; lineIndex < accounts.length; lineIndex++) {
    let someAccount = 0;

    for (
      let columnIndex = 0;
      columnIndex < accounts[lineIndex].length;
      columnIndex++
    ) {
      const balanceAccount = accounts[lineIndex][columnIndex];

      someAccount += balanceAccount;
    }

    if (someAccount > maxBalanceAccount) {
      maxBalanceAccount = someAccount;
    }
  }

  return maxBalanceAccount;
};

const accountsParam = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];

const resultMaximumWealth = maximumWealth(accountsParam);

console.log({ resultMaximumWealth });
