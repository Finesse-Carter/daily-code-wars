/**
 * Positive integers have so many gorgeous features. Some of them could be expressed as a sum of two or more consecutive positive numbers.

Consider an Example :
10 , could be expressed as a sum of 1 + 2 + 3 + 4.
 */
let consecutiveDucks = num => !Number.isInteger( Math.log2(num))