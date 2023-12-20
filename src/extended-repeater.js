const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr =''
  let addStr =''
  if (options.separator === undefined && options.addition === undefined && options.addtionalSeparator === undefined) {
    newStr = (str + "+").repeat(options.repeatTimes -1) + str;
    return newStr;
  } else if (options.addition === undefined && options.addtionalSeparator === undefined) {
    newStr = (str + options.separator).repeat(options.repeatTimes -1) + str;
    return newStr;
  } else if (options.separator === undefined && options.addtionalSeparator === undefined && options.additionRepeatTimes === undefined) {
    addStr = options.addition
    newStr = (str + addStr + "+").repeat(options.repeatTimes - 1) + str + addStr;
    return newStr;
  } else if (options.separator === undefined && options.addtionalSeparator === undefined) {
    addStr = (options.addition + "|").repeat(options.additionRepeatTimes - 1) + options.addition;
    newStr = (str + addStr + "+").repeat(options.repeatTimes - 1) + str + addStr;
    return newStr;
  }
  else { 
    addStr = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition ;
    newStr = (str + addStr + options.separator).repeat(options.repeatTimes - 1) + str + addStr;
    return newStr
       }
}

module.exports = {
  repeater
};
