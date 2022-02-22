module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) {
    return false;
  }
  let array = str.split('');
  arrayConfig = new Set([...array]);
  
  let bracketsConfigFlat = bracketsConfig.flat();
  let open = [], close = [], stack = [];
  let openIndex, closeIndex, nullIndex,
    k1 = 0, k7 = 0, k8 = 0; 
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
      switch (array[i])    {
        case '|' : 
                      if (k1 == 0) {
                        k1 = 1;
                        stack.push(openIndex);
                        continue;
                      } else {
                        k1 = 0;
                      } 
        break;
        case '7' : 
                      if (k7 == 0) {
                        k7 = 1;
                        stack.push(openIndex);
                        continue;
                      } else {
                        k7 = 0;
                    } 
        break;
        case '8' : 
                      if (k8 == 0) {
                        k8 = 1;
                        stack.push(openIndex);
                        continue;
                      } else {
                        k8 = 0;
                      } 
        break;
        default :   
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
