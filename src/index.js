module.exports = function check(str, bracketsConfig) {
  const bracketsPairs = {};
  const closeBrackets = [];
  bracketsConfig.forEach(pair => {
    bracketsPairs[pair[0]] = pair[1];
    closeBrackets.push(pair[1]);
  });
  let isStrContainsBracketsPair = true;
  while (isStrContainsBracketsPair) {
    isStrContainsBracketsPair = false;
    for (let i = 0; i < str.length; i++) {
      if (closeBrackets.includes(str[i])) {
        if (bracketsPairs[str[i - 1]] == str[i]) {
          str = str.split('');
          str.splice(i, 1);
          str.splice(i - 1, 1);
          str = str.join('');
          isStrContainsBracketsPair = true;
          break;
        }
      }
    }
  }
  return str ? false : true;
}
