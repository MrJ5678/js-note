var result = '';
for (var i = 0; i < 7; i++) {
  var line = '';
  for (var j = 0; j <= i; j++) {
    // 每一行
    line += '#';
  }
  if (i < 6) {
    result += line + '\n';
  } else {
    result += line;
  }
}
console.log(result);

// var result = '';
// for (let i = 0; i < 7; i++) {
//   result += '#';
// }
// console.log(result);
