// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
//
// Implement a function that checks if something is a palindrome.
function isPalindrome(line) {
  if(typeof line=="number"){
  let n = line.toString().split("").reverse().join("")
      if( n == line){
      return true
      } else {
      return false
      }
  } else {
    let reverse = line.split("").reverse().join("")
      if (reverse == line){
      return true
      } else {
      return false
      }
   }
}
