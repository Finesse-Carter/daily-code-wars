/**Implement a function which filters out array values which satisfy the given predicate.

reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5] */

function reject(array, predicate) {
    //
  let num=[]
  console.log(arguments )
  for(let i =0;i <array.length; i++){
  if(!predicate(array[i])){
  num.push(array[i])
  console.log(predicate(array[i])) 
  }
  }
    return num
  }
  