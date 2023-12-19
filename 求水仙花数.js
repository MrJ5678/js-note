// 求水仙花数
function getWidth(n) {
  let num = n;
  let width = 0;
  do {
    let digit = num % 10;
    num = (num - digit) / 10;
    width++;
  } while (num);

  return width;
}

function isNarcissistic(n) {
  let num = n;
  let width = getWidth(n);
  let sum = 0;

  while (num) {
    let digit = num % 10;
    sum += digit ** width;
    num = (num - digit) / 10;
  }

  if (n === sum) return true;
  return false;
}
// console.log(isNarcissistic(370));
function anonymous() {
  for (let i = 0; i < 10000; i++) {
    if (isNarcissistic(i)) console.log(i);
  }
}

anonymous();
