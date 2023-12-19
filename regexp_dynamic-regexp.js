// 在每一个符号都加一个 ‘\’
str = 'dea+[]hd';
let reg = /[^\w\s]/g;
str = str.replace(reg, '\\$&');
console.log(str);

console.log(String.raw`\b` === '\\b');
