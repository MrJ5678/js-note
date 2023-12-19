let n = Number(prompt());
let sum = 0;

for (let i = 1; i < n; i++) {
  let j = i;
  while (j > 0) {
    digit = j % 10;
    if (digit === 1) {
      sum++;
    }
    j = (j - digit) / 10;
  }
}
console.log(sum);
