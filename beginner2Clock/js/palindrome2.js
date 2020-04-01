/* Given a string, return true if the string is a palindrome and false if it isn’t. 
Include spaces and punctuation in deciding if the string is a palindrome.*/


function palindrome ( str ){
    if( str === str.split('').reverse('').join('')){
  return true
  }else if( str.includes("'",".","!","?")){
  return false;
  } else{
  return false;
  }
  }
  
  console.log(palindrome(''));