let input = ["H", "a", "n", "n", "a", "h"];

const reverseString = (s) => {
  let pointer1 = 0;
  let pointer2 = s.length - 1;

  while (pointer1 < pointer2) {
    const firstLetter = s[pointer1];
    const secundLetter = s[pointer2];

    s[pointer1] = secundLetter;
    s[pointer2] = firstLetter;

    pointer1++;
    pointer2--;
  }
};

reverseString(input);

console.log({ input });
