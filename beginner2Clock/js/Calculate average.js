/**Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

const find_average = (array) => array.reduce((a, b) => a + b) / array.length;
