const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let res = {}

  domains.forEach( elem => {
    let name = elem.split('.')
    let sep = ''

    for (let i = name.length - 1; i >= 0; i-- ) {
      sep += '.' + name[i]
      // console.log('!!!!!', sep)
      if (res[sep]) {
        res[sep]++
      } else {
        res[sep] = 1
      }
    }
  })

  return res
}

module.exports = {
  getDNSStats
};
