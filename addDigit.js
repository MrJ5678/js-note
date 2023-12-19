function addDigits(num) {
  while (num > 9) {
    let sum = 0;

    while (num > 0) {
      let digit = num % 10;
      sum += digit;
      num = (num - digit) / 10;
    }
    num = sum;
  }
  return num;
}

console.log(addDigits(38));

1111;
1 + 1 + 1 + 1;
