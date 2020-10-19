/**Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:
10-18-20
name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings. */

const areYouPlayingBanjo = name => {
    let letter = name.charAt(0);
  let word = letter==='R'||letter==='r'? name + " plays banjo" : name + " does not play banjo";
   return word
 }