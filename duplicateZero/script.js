/* 
    Entrada: arr = [1,0,2,3,0,4,5,0]
    Saída: [1,0,0,2,3,0,0,4]
*/

let arrParam = [1, 2, 3];

var duplicateZeros = function (arr) {
  let index = 0;

  while (index < arr.length) {
    let currentValue = arr[index];

    if (currentValue !== 0) {
      index++;

      continue;
    }

    for (let j = arr.length - 1; j > index; j--) {
      arr[j] = arr[j - 1];
    }

    index += 2;
  }
};

duplicateZeros(arrParam);

console.log({ arrParam });
