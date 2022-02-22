module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) {
    return false;
  }
  // else {
  //   return true;
  // }
  let array = str.split('');
  arrayConfig = new Set([...array]);
  // console.log(arrayConfig);
  let bracketsConfigFlat = bracketsConfig.flat();
  console.log(bracketsConfigFlat);
  arrayConfig.forEach(element => {
    if (!bracketsConfigFlat.includes(element)) {
      return false;
    }       
  })

  // for (let i = 0; i < bracketsConfig.length; i++) {

  // }
}


// check('()', [['(', ')']]) // -> true
// check('((()))()', [['(', ')']]) // -> true
// check('())(', [['(', ')']]) // -> false
// check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
// check('[(])', [['(', ')'], ['[', ']']]) // -> false
// check('[]()', [['(', ')'], ['[', ']']]) // -> true
// check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// // special case: opening and closing bracket can be the same :)

// check('||', [['|', '|']]) // -> true
// check('|()|', [['(', ')'], ['|', '|']]) // -> true
// check('|(|)', [['(', ')'], ['|', '|']]) // -> false
// check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true
