/**Your task is to sum the differences between consecutive pairs in the array in descending order.

For example: sumOfDifferences([2, 1, 10]) Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell). */
  
  const sumOfDifferences = (arr) => {
    let newArr = arr.sort(function(a, b) {
      return a - b;
    });
    //console.log('here is newArr: ' + newArr);
    let sortArr = [];
    let change = false;
    let first;
    let second;
    let sum = 0;
  
    if(arr.length < 2) {
      return 0;
    }
  
    //puts the array in reverse order
    for(let i = newArr.length - 1; i > -1; i--) {
      sortArr.push(newArr[i]);
    }
    //console.log('here is the sorted array: ' + sortArr);
  
    //get the sum by looping through the array
    for(let j = 0; j < sortArr.length - 1; j++) {
      if(change === false && j === 0) {
        first = sortArr[j] - sortArr[j + 1];
        change = !change;
        continue;
      }
      if(change === true) {
        second = sortArr[j] - sortArr[j + 1];
        sum = sum + (first + second);
        first = second;
        continue;
      }
    }
  
    console.log('here is sum: ' + sum);
    return sum;
  }