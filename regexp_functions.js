function maskify(cc) {
  if (cc.length <= 4) {
    // return cc
    console.log(cc);
  } else {
    let reg = /^.*(?=....)/g;
    // return cc.replace(reg, '#')
    // console.log(cc.replace(reg, '#'));
    // console.log(cc.match(reg));
    // console.log(
    //   '#'.repeat(cc.match(reg)[0].length).concat(cc.replace(reg, ''))
    // );
    console.log(
      cc.replace(reg, match => {
        return '#'.repeat(match.length);
      })
    );
  }
}

// maskify('4556364607935616');
// maskify('64607935616');
// maskify('1');
// maskify('');

function remove(s) {
  let reg = /(\w+)!*/gi;
  // return s.replace(reg, '$1');
  console.log(s.replace(reg, '$1'));
}

// remove('Hi!');
// remove('Hi!!!');
// remove('!Hi');
// remove('!Hi!');
// remove('Hi! Hi!');
// remove('!!!Hi !!Hi!!! !hi');

function duplicateCount(text) {
  let reg = /(.)(?=.*\1)/gi;
  // return new Set(text.match(reg)).size
  console.log(new Set(text.toLowerCase().match(reg) ?? []).size);
}

function duplicateCount2(text) {
  return (
    text
      .toLowerCase()
      .split()
      .sort()
      .join()
      .match(/(.)\1+/g) ?? []
  ).length;
}

duplicateCount('abcde');
duplicateCount('aabbcde');
duplicateCount('aabBcde');
duplicateCount('aA11');
