/*There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
 */

function correctPolishLetters (string) { 
    var r=string;
    console.log(string);
   r = r.replace(new RegExp("ś", 'g'),"s");
    r = r.replace(new RegExp("ą", 'g'),"a");
    r = r.replace(new RegExp("ę", 'g'),"e");
    r = r.replace(new RegExp("ł", 'g'),"l");
    r = r.replace(new RegExp("ć", 'g'),"c");
    r = r.replace(new RegExp("ś", 'g'),"s");
    r = r.replace(new RegExp("ń", 'g'),"n");                            
    r = r.replace(new RegExp("ó", 'g'),"o");
    r = r.replace(new RegExp("ź", 'g'),"z");
    r = r.replace(new RegExp("ż", 'g'),"z");
    return r;
};

//////////////////////

function correctPolishLetters (string) {
    var dict = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
    return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
  }