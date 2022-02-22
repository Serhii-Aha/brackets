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
  let open = [];
  let close = [];
  let openIndex, closeIndex;
  bracketsConfig.forEach(element => {
    open.push(element[0]);
    close.push(element[1]);
  });
  // console.log(bracketsConfigFlat);
  arrayConfig.forEach(element => {
    if (!bracketsConfigFlat.includes(element)) {
      return false;
    }       
  })
  // return true;
for (let i = 0, len = array.length; i < len; i++) {
       openIndex = open.indexOf(array[i]);
       if (openIndex !== -1) {
           stack.push(openIndex);
           continue;
       }
       closeIndex = close.indexOf(array[i]);
       if (closeIndex !== -1) {
           openIndex = stack.pop();
           if (closeIndex !== openIndex) {
               return false;
           }
       }
    }
    // if (stack.length !== 0) {
    //     return false;
    // }
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
