function lcm(m, n) {
  while (m !== 0 && n !== 0) {
    // if (m < n) {
    //   // 变换位置， m 变为 较大值
    //   let t = m;
    //   m = n;
    //   n = t;
    // }
    let t = n;
    n = m % n;
    m = t;
  }

  return m > n ? m : n;
}

// console.log(lcm(12, 3));

function anonymous(m, n) {
  return (m * n) / lcm(m, n);
}

console.log(anonymous(12, 3));
