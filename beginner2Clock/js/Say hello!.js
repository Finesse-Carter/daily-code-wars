/**Say hello!

Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

Example:

greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null */

function greet(name) {
    console.log(arguments)
      var str1 = 'hello '
    var str3='!'
    var res = str1.concat(name, str3);
    
    if(name===null){
      return null
    }else if( name.length>0){
       return res
    }else{
      return null
    }
    }