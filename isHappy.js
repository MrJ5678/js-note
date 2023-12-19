function isHappy(n) {
  while (n !== 1 && n !== 4) {
    let sum = 0;
    while (n > 0) {
      let digit = n % 10;
      sum += digit * digit;
      n = (n - digit) / 10;
    }

    n = sum;
  }

  return n === 1;
}

// console.log(isHappy(25));
let arr = [
  1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100
];
