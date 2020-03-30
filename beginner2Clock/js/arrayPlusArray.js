/*I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */

//my answer
function arrayPlusArray(arr1, arr2) {
    let x =arr1.reduce((sum, current) => sum + current, 0);
    let y= arr2.reduce((sum, current) => sum + current, 0);
    return x + y; //something went wrong
  }
  ///////////////////////////////////////////////////////////

  function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }


  function arrayPlusArray(...arrays) {
    return [].concat(...arrays).reduce((a,b) => a+b,0)
  }