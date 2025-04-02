/* 
    Entrada: flowerbed = [1,0,0,0,1], n = 1
    Saida: true
*/

let flowerbedParam = [0, 0];

let nParam = 1;

var canPlaceFlowers = function (flowerbed, n) {
  let pointer1 = 0;

  let sumFlowerbed = 0;

  if (flowerbed.length === 1 && flowerbed[pointer1] === 0) {
    return true;
  }

  while (pointer1 < flowerbed.length) {
    let isPositionFlowerbed = 0;

    const pointer1Value = flowerbed[pointer1];

    if (pointer1 === flowerbed.length - 1) {
      const previousValue = flowerbed[pointer1 - 1];

      if (previousValue === 0 && pointer1Value === 0) {
        isPositionFlowerbed = true;
      }
    } else {
      const previousValue = flowerbed[pointer1 - 1];
      const nextValue = flowerbed[pointer1 + 1];

      if (previousValue === 0 && pointer1Value === 0 && nextValue === 0) {
        isPositionFlowerbed = true;
      }
    }

    if (isPositionFlowerbed) {
      flowerbed[pointer1] = 1;

      sumFlowerbed++;
    }

    pointer1++;
  }

  if (sumFlowerbed === n) {
    return true;
  }

  return false;
};

const canPlaceFlowerResult = canPlaceFlowers(flowerbedParam, nParam);

console.log({ canPlaceFlowerResult });
