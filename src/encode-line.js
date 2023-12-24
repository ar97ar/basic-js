const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  if (str === '') {
    return ''
  }

  let arr = str.split('')
  let cont = 1
  let res = ''

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == arr[i + 1]) {
      cont++;
    } else {
      if (cont === 1) {
        cont = ''
      }
      res += `${cont}${arr[i]}`;
      cont = 1;
    }
  }
  return res;
}


module.exports = {
  encodeLine
};
