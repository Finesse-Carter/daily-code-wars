/**In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

Good luck!

 */

const solve = (arr) => {
    let sortArr = arr.sort(function(a, b) {
      return a - b;
    });
    if(arr.length === 1) {
        return arr[0];
    }
    let index = 0;
    for(let i = sortArr.length - 1; i > 0; i--) {
      if(sortArr[i] === sortArr[index] * -1) {
        index++;
        continue;
      } else {
        if(sortArr[index] * -1 < sortArr[i]) {
          return sortArr[i];
        } else {
          return sortArr[index];
        }
      }
    }
  };