/* 
    Input: [0,1,0,3,12]  
    Output: [1,3,12,0,0]
*/

let nums = [0, 1, 0, 3, 12];

let pointer1 = 0;
let pointer2 = 0;

while (pointer2 < nums.length) {
  const pointer1Value = nums[pointer1];
  const pointer2Value = nums[pointer2];

  if (pointer2Value !== 0) {
    nums[pointer1] = pointer2Value;
    nums[pointer2] = pointer1Value;

    pointer1++;
  }

  pointer2++;
}

console.log({ nums });
