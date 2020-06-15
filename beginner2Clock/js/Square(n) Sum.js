/**Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */

function squareSum(numbers){
    var numbers2 = numbers.map(square);
    
    function square(value) {
      return value * value;
    }
    let result = numbers2.reduceRight((sum, current) => sum + current, 0);
    return result;
    }