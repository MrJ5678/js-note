// let bar = function () {
//   console.log(a);
// };

// let foo = function () {
//   let a = 1;
//   let b = 2;
//   bar();
// };

// foo();

/**
 * @param {大于1} n
 */
function sqrt(n) {
  let l = 0;
  let r = n;
  let m;
  while (r - l > 0.0000001) {
    m = (l + r) / 2;

    if (m * m === n) {
      return m;
    } else if (m * m > n) {
      r = m;
    } else if (m * m < n) {
      l = m;
    }
  }

  return (l + r) / 2;
}

sqrt(2);

function find(start, history) {
  console.log(start, history);

  if (start < 100) {
    find(start + 5, history + '+5');
    find(start * 3, '(' + history + ')*3');
  }
}

find(1, '1');
