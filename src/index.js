module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) {
    return false;
  }
  // else {
  //   return true;
  // }
  let array = str.split('');
  arrayConfig = new Set([...array]);
  
  let bracketsConfigFlat = bracketsConfig.flat();
  let open = [], close = [], stack = [];
  let openIndex, closeIndex, nullIndex,
    k = 0;
  bracketsConfig.forEach(element => {
    open.push(element[0]);
    close.push(element[1]);
  });
  
  arrayConfig.forEach(element => {
    if (!bracketsConfigFlat.includes(element)) {
      return false;
    }
  })
  
  for (let i = 0, len = array.length; i < len; i++) {
    openIndex = open.indexOf(array[i]);
    if (openIndex !== -1) {
      // continue;
      if (array[i] == '|') {
        if (k == 0) {
          k = 1;
          stack.push(openIndex);
          continue;
        } else {
          k = 0;
          // continue;
        }
      } else {
        stack.push(openIndex);
        continue;
      }
    }
    closeIndex = close.indexOf(array[i]);
    if (closeIndex !== -1) {
        openIndex = stack.pop();
        if (closeIndex !== openIndex) {
          return false;
        }
      }

    }
    if (stack.length !== 0) {
      return false;
    }
    return true;
  
}

  // for (let i = 0; i < bracketsConfig.length; i++) {

  // }



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
