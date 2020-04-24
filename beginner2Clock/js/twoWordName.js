/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F */

function abbrevName(name){
    // let x = /[A-Z]/g;
    //   let b = name.match(x);  
    // let f= b.join(".");
    // return f ; 
    // }
        var nameArray = name.split(' ');
        var first = nameArray[0].charAt(0).toUpperCase();
        var last = nameArray[1].charAt(0).toUpperCase();
        return `${first}.${last}`
    }

    //////////////////////////
    function abbrevName(name){

        var nameArray = name.split(" ");
        return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
      }