/* 
    Entrada: flowerbed = [1,0,0,0,1], n = 1
    Saida: true
*/

let flowerbedParam = [0, 0, 0, 0, 0, 1, 0, 0];

let nParam = 0;

var canPlaceFlowers = function (flowerbed, n) {
  let i = 0;

  let sumFlowerbed = 0;

  if (n === 0) {
    return true;
  }

  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    flowerbed[0] = 1;

    sumFlowerbed++;

    return sumFlowerbed === n;
  }

  while (i < flowerbed.length) {
    const currentValue = flowerbed[i];

    const previousValue = flowerbed[i - 1];
    const nextValue = flowerbed[i + 1];

    const isFirstOrLastPosition = i === 0 || i === flowerbed.length - 1;

    if (isFirstOrLastPosition && currentValue == 0 && nextValue == 0) {
      flowerbed[i] = 1;

      sumFlowerbed++;
    }

    if (isFirstOrLastPosition && currentValue == 0 && previousValue == 0) {
      flowerbed[i] = 1;

      sumFlowerbed++;
    }

    if (previousValue == 0 && currentValue == 0 && nextValue == 0) {
      flowerbed[i] = 1;

      sumFlowerbed++;
    }

    if (sumFlowerbed === n) {
      return true;
    }

    i++;
  }

  return false;
};

const canPlaceFlowerResult = canPlaceFlowers(flowerbedParam, nParam);

console.log({ canPlaceFlowerResult });
