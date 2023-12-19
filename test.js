// function make(n) {
//   let result = '';
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       result += '*';
//     }
//     result += '\n';
//   }

//   return result;
// }

// console.log(make(7));

// function moveZeros(nums) {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i]) {
//       nums[j++] = nums[i];
//     }
//   }
//   while (j < nums.length) {
//     nums[j++] = 0;
//   }
//   console.log(j);
// }

// var arr = [1, 2, 0, 0, 3, 4, 0, 5];
// moveZeros(arr);
// console.log(arr);

// function foo(a, b) {
//   b = b ?? 9;
//   console.log(b);
//   console.log(a + b);
// }

// foo(1, 0);

// function findSolution(target) {
//   console.log(target);
//   function find(start, history) {
//     if (start == target) {
//       // console.log(history);
//       return history;
//     }
//     if (start > target) {
//       return null;
//     }
//     if (start < target) {
//       return (
//         find(start * 3, '(' + history + ')*3') ||
//         find(start + 5, history + '+5')
//       );
//     }
//   }
//   find(1, '1');
// }
// findSolution(102);

// function powern(x, n) {
//   let t = x;
//   let exp = 1;
//   let rest = n;
//   let result = 1;
//   while (condition) {
//     if (exp * 2 > n) {
//       result = result * t;
//       rest = rest - exp;
//       t = x;
//       exp = 1;
//     } else {
//       t = t * t;
//       exp = exp * 2;
//     }
//   }
// }

// function foo(a, b, c) {
//   console.log(Math.max(...arguments));
// }

// foo(1, 2, 3);

// function bar() {
//   try {
//     2();
//   } catch (error) {
//     3();
//     console.log(error);
//   }
//   console.log('continue...');
// }

// function baz() {
//   try {
//     bar();
//   } catch (error) {
//     console.log(error);
//   }
// }

// [
//   parseInt(['110', '101', '11101'], 0, '110', 2),
//   parseInt(['110', '101', '11101'], 1, '101', 2),
//   parseInt(['110', '101', '11101'], 2, '11101', 2)
// ];

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('1111111');
//     reject(new Error('ocurred error'));
//   }, 2000);
// });

// p.then(res => {
//   console.log(res);
// }).catch(e => {
//   console.log(e);
// });

// let p1 = p.then(
//   () => {},
//   e => {
//     console.log('then of p second function ', e);
//     return 'p second return value';
//   }
// );

// let p2 = p1.then(res => {
//   console.log(res);
//   // return Promise.resolve('promise p2 return value');
//   return Promise.reject('promise p2 reject value');
// });

// p2.then(
//   res => {
//     console.log(res);
//   },
//   e => {
//     console.log(e);
//   }
// );

// Promise.myResolve = function (value) {
//   return new Promise(resolve => {
//     resolve(value);
//   });
// };

// Promise.myRace = function (promises) {
//   return new Promise((resolve, reject) => {
//     for (const p of promises) {
//       Promise.resolve(p).then(resolve, reject);
//     }
//   });
// };

// Promise.myAll = function (promises) {
//   return new Promise((resolve, reject) => {
//     let ary = [];
//     let completed = 0;
//     if (promises.length == 0) {
//       resolve([]);
//     }

//     for (let i = 0; i < promises.length; i++) {
//       promises[i].then(
//         val => {
//           ary[i] = val;
//           completed++;
//           if (completed == promises.length) {
//             resolve(ary);
//           }
//         },
//         reason => {
//           reject(reason);
//         }
//       );
//     }
//   });
// };

// Promise.myAllSettled = function (promises) {
//   return new Promise((resolve, reject) => {
//     let ary = [];
//     let completed = 0;
//     if (promises.length == 0) {
//       resolve([]);
//     }

//     for (let i = 0; i < promises.length; i++) {
//       promises[i].then(
//         value => {
//           ary[i] = {
//             value,
//             status: 'fullfilled'
//           };
//           completed++;
//           if (completed == promises.length) {
//             resolve(ary);
//           }
//         },
//         reason => {
//           ary[i] = {
//             status: 'rejected',
//             reason
//           };
//           completed++;
//           if (completed == promises.length) {
//             resolve(ary);
//           }
//         }
//       );
//     }
//   });
// };

// Promise.prototype.cache = function (f) {
//   return this.then(null, f);
// };

// Promise.prototype.finally = function (f) {
//   return this.then(
//     val => {
//       f();
//       return val;
//     },
//     reason => {
//       f();
//       throw reason;
//     }
//   );
// };

// function getValue(value) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(value);
//     }, 2000);
//   });
// }

// async function test() {
//   const data = await getValue(2);
//   console.log(data);
// }

// function logEachItemInArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }

// function logEachItemInArray(array, action) {
//   for (let i = 0; i < array.length; i++) {
//     action(array[i]);
//   }
// }

// function maskify(cc) {
//   let reg = /.(?=....)/gm
//   return cc.replace(reg, "#")
// }

// function maskify(cc) {
//   let reg = /.+(?=....$)/g;
//   return cc.replace(reg, (match) => {
//     return "#".repeat(match.length);
//   });
// }

// function duplicateCount(text) {
//   let reg = /(.)(?=.*?\1)/gi;
//   return new Set(text.toLowerCase.match(reg) ?? []).size;
// }
// function getJSON(url) {
//   return get(url).then(JSON.parse)
// }

// getJSON.then(res => {
//   console.log(res);
// })

// Promise.myResolve = function (val) {
//   return new Promise(resolve => {
//     resolve(val);
//   });
// };

// Promise.myReject = function (reason) {
//   return new Promise((_, reject) => {
//     reject(reason);
//   });
// };

// return storyUrls.map(getJson).reduce((p, promise) => {
//   return p
//     .then(() => {
//       return promise;
//     })
//     .then(chapter => {
//       addToHtml(chapter.html);
//     });
// }, Promise.resolve());

// async function test() {
//   let res = await new Promise(resolve => {
//     setTimeout(() => {
//       resolve(5);
//     }, 5000);
//   });
//   console.log(res);
// }

// test().then(() => {
//   console.log('test finished...');
// });
function getVal(time, val) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(val);
    }, time);
  });
}

run(function* foo() {
  let a = 1;
  let b = 2;
  let x = yield getVal(2000, 2);
  console.log(x);

  let c = a + b;
  let d = 4;
  let y = yield getVal(2000, 3);
  console.log(y);

  return 6;
}).then(res => {
  console.log(res);
});

function run(generatorFunction) {
  return new Promise((resolve, reject) => {
    let generator = generatorFunction();
    let generated = generator.next();
    step();
    function step() {
      if (!generated.done) {
        generated.value.then(
          value => {
            try {
              generated = generator.next(value);
              step();
            } catch (error) {
              reject(error);
              return;
            }
          },
          reason => {
            try {
              generated = generator.throw(reason);
              step();
            } catch (error) {
              reject(error);
              return;
            }
          }
        );
      } else {
        resolve(generated.value);
      }
    }
  });
}

setTimeout(() => {
  console.log(1);
  Promise.resolve().then(() => console.log('a'));
});
setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => console.log('b'));
});

let start = Date.now();
while (Date.now() - start < 5000) {}
