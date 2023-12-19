function myReduce(ary) {
  let initialVal = -Infinity;

  for (let i = 0; i < ary.length; i++) {
    // if(ary[i] > initialVal) initialVal = ary[i]
    initialVal = ary[i] > initialVal ? ary[i] : initialVal;
  }

  return initialVal;
}

function reduce(ary, g, result) {
  let start = 0;
  if (result === undefined) {
    result = ary[0];
    start = 1;
  }
  for (let i = start; i < ary.length; i++) {
    result = g(result, ary[i]);
  }

  return result;
}

reduce(
  [1, 2, 3, 4, 5],
  (result, item) => {
    return result + item;
  },
  0
);

[1, 2, 3, 4, 5].reduce((result, item, index) => {
  return (result * index + item) / (index + 1);
});
