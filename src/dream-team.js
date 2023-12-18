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
function createDreamTeam(members) {
  if (Array.isArray(members) == false) {
    return false
  } else {
  members = members.map(function (el) {
    if (typeof el === 'string') {
    return el.trim().toUpperCase();
    }
    else {
      return false
    }
  })
 members.sort();
 let result = '';
 members.forEach((item) => {
   if (typeof item === 'string') {
     result += item[0]
   }
 })
  return result
    }
}

module.exports = {
  createDreamTeam
};
