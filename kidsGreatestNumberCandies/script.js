/* 
    Entrada: candies = [2,3,5,1,3], extraCandies = 3
    Saida: [true,true,true,false,true] 
*/

let candiesParam = [2, 3, 5, 1, 3];
let extraCandiesParam = 3;

const getMaxCandy = (candies) => {
  let maxCandyNumber = 0;

  for (let i = 0; i < candies.length; i++) {
    const currentQuantityCandy = candies[i];

    if (currentQuantityCandy >= maxCandyNumber) {
      maxCandyNumber = currentQuantityCandy;
    }
  }

  return maxCandyNumber;
};

var kidsWithCandies = function (candies, extraCandies) {
  const maximumCandyNumber = getMaxCandy(candies);

  const candiesGreatestCandiesList = [];

  for (let i = 0; i < candies.length; i++) {
    const someCandyWithExtraCandies = candies[i] + extraCandies;

    candiesGreatestCandiesList.push(
      someCandyWithExtraCandies >= maximumCandyNumber
    );
  }

  return candiesGreatestCandiesList;
};

const kidsGreatestCandies = kidsWithCandies(candiesParam, extraCandiesParam);

console.log({ kidsGreatestCandies });
