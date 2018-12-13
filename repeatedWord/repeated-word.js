
function repeatedWord(string) {
  let wordArray = string.split(' ');
  for(let i = 0 ; i < string.length - 1 ; i++) {
    for(let j = i + 1 ; j < string.length ; j++) {
      if(wordArray[i] == wordArray[j]) {
        return wordArray[i];
      }
    }
  }
  return wordArray;
}

module.exports = repeatedWord;