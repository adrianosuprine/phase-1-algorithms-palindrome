function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;

}
console.log(isPalindrome('abba'));

/* 
  Add your pseudocode here
  start
    declare a variable name that will store 
    the reversed word 
    take the word and split it into characters
    reverse the characters 
    join the reversed characters to make one word/string
    check whether the two words are the same and return the result
  stop
*/

/*
  Add written explanation of your solution here
  the function takes in an argument which is a string,
  the string is the split into characters and reversed .
  the characters are joined back to attain a string 
  the function then returns a result of whether the string is equal to the reversed string
  as a true or false result 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
