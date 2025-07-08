/* 
    Input: num = 14
    Output: 6
    Explanation: 
    Step 1) 14 is even; divide by 2 and obtain 7. 
    Step 2) 7 is odd; subtract 1 and obtain 6.
    Step 3) 6 is even; divide by 2 and obtain 3. 
    Step 4) 3 is odd; subtract 1 and obtain 2. 
    Step 5) 2 is even; divide by 2 and obtain 1. 
    Step 6) 1 is odd; subtract 1 and obtain 0.  
*/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  const countStepNumber = (number) => {
    if (number <= 0) {
      return 0;
    }

    const newNumberParam = number % 2 === 0 ? number / 2 : number - 1;

    const newCount = countStepNumber(newNumberParam);

    return 1 + newCount;
  };

  const countStepsNumber = countStepNumber(num);

  return countStepsNumber;
};

const numParam = 123;

const resultNumberOfSteps = numberOfSteps(numParam);

console.log({ resultNumberOfSteps });
