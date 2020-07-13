/**Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
    var vowelsCount = 0;
    
  var x;
    var map =new Map([
    ['a', 1],
    ['e', 1],
    ['i', 1],
     ['o',1],
     ['u',1]
  ]);
    
  for (x of str) {
    console.log(x)
    map.forEach( (value, key) => {
     if(x===key){
       vowelsCount+=value
       
     }
  })
  }
    
    return vowelsCount;
  }
  