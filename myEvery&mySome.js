// 判断是否每一项都满足条件
function myEvery(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (!func(array[i])) return false;
  }
  return true;
}

// 判断是否有一个能满足条件的项
function mySome(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) return true;
  }
  return false;
}

// for (let index = 0; index < 10; index++) {
//   console.log(index);
//   return false;
// }
