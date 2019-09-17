'use strict';

const toOrdinalSuffix = (function toOrdinalSuffix() {
  const toDigits = (num) => [num % 10, num % 100];
  const suffix = new Map([
    [[11, 12, 13], 'th'],
    [[1], 'st'],
    [[2], 'nd'],
    [[3], 'rd'],
  ]);
  const suffixCache = new Map();
  return (function suffixer(...args) {
    let output = [];
    for (const num of args) {
      const int = parseInt(num, 10);
      if (suffixCache.has(int)) {
        output = [...output, suffixCache.get(int)];
      }
      if (!suffixCache.has(int)) {
        const digits = toDigits(int);
        for (const [keyArr, suff] of suffix) {
          if (keyArr.includes(digits[1]) || keyArr.includes(digits[0])) {
            suffixCache.set(int, `${int}${suff}`);
            output = [...output, suffixCache.get(int)];
            break;
          } else if (suff === 'rd') {
            suffixCache.set(int, `${int}th`);
            output = [...output, suffixCache.get(int)];
          }
        }
      }
    }
    return output;
  });
}());

module.exports = {
  toOrdinalSuffix,
};
