module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 !== 0) {return false}
  let stack = [];
  let bracketsMap = new Map();
  for(let i = 0; i < bracketsConfig.length; i++) {
    bracketsMap.set(bracketsConfig[i][0], bracketsConfig[i][1])
  }

  for(let i = 0; i < str.length; i++) {
    if(bracketsMap.has(str[i])) {
      if(str[i] === bracketsMap.get(str[i]) && str[i] === stack[stack.length - 1]) {
        let del = stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else {
      if(stack.length !== 0) {
        if(str[i] === bracketsMap.get(stack[stack.length - 1])) {
          let del = stack.pop();
        } else return false;
      } else return false;
    }
  }

  return stack.length === 0;
};
