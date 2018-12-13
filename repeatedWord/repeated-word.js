
function repeatedWord(string) {
  let wordArray = string.split(' ');
  for(let i = 0 ; i < string.length ; i++) {
    for(let j = i ; j < string.length ; j++) {
      if(wordArray[i] == wordArray[j]) {
        return wordArray[i];
      }
    }
  }
  return wordArray;
}

module.exports = repeatedWord;