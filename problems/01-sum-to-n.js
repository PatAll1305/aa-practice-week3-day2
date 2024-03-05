/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

***********************************************************************/


function sumToN(n) {
  if (n <= 0) return null

  return n + sumToN(n - 1)
}


// sumToN(5) // returns 15
// sumToN(1)  // returns 1
// sumToN(9)  // returns 45
// sumToN(-8)  // returns null
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
