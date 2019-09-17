'use strict';

function uniqRand(num=1) {
  const rSetFactory = () => new Set();
  const rSet = rSetFactory();
  const toRandom = (num) => parseInt(num * Math.random(), 10);
  return function uniqR() {
    let int = toRandom(num);
    const limit = parseInt(num, 10);
    while (rSet.size < limit) {
      if (!rSet.has(int)) {
        rSet.add(int);
        return int;
      }
      int = toRandom(num);
    }
    console.log(
      `
Unique random limit was hit while obtaining a unique random number.
The limit was: ${limit} tries in obtaining an integer up to: ${limit}
Limit was choosen as nearest integer of factory function input: ${num}
rSet values = ${[...rSet.values()]}
rSet is being ${rSet.clear() || 'cleared'}
      `,
    );
    return int;
  };
}
module.exports = {
  uniqRand,
};

/**
 * const unR1 = uniqRand(10);
 * const unR2 = uniqRand(20);
 * const unR3 = uniqRand(30);
 * const unR4 = uniqRand(40);
 * const unR5 = uniqRand(50);
 * unR1();
 * unR2();
 * unR3();
 * unR4();
 * unR5();
 */
