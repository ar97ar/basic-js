const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!(Array.isArray(arr))){
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  let ar = arr.slice()
  const lengthArr = ar.length
  let res = []

  for (let i = 0; i < lengthArr; i++) {
    switch (ar[i]) {
      case '--double-next':
        if (i < lengthArr - 1) {
          res.push(ar[i + 1]);
        }
        break;
      case '--discard-next':
        i += 2;
        break;
      case '--discard-prev':
        if (i > 0) {
          res.pop();
        }
        break;
      case '--double-prev':
        if (i > 0) {
          res.push(ar[i - 1]);
        }
        break;
      default:
        res.push(ar[i]);
        break;
    }
  }

  return res
}

module.exports = {
  transform
};
