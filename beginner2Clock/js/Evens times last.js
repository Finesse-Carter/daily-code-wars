/**Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the sequence is empty, you should return 0. */

const evenLast = numbers => numbers.length === 0 ? 0 :numbers.filter((x,d)=>d%2===0).reduce((y,z)=> y+z)*numbers.slice(-1)
