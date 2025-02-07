const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr
  if (Array.isArray(members)){
    arr = members.filter(item => typeof item ==='string' && !parseFloat(item))
  } else {
    return false
  }

  if (arr.length === 0){
    return false
  }

  let res = arr.map(item => item.trim().charAt(0).toUpperCase()).sort()

  return res.join('')
}

module.exports = {
  createDreamTeam
};
