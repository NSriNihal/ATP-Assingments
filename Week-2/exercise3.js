/**
 * Exercise 3: Variadic Sum Function
 * 
 * Topic: Rest Parameters
 * 
 * Problem: Write a function that receives any number of arguments
 *          and returns their sum.
 * 
 * Concepts: Rest parameters (...args), Array.reduce()
 */

function findSum(...args) {
  // Rest parameter (...args) collects all arguments into an array
  // reduce() sums all elements starting from the first value
  let sum = args.reduce((acc, val) => acc + val);
  return sum;
}

// Test with different numbers of arguments
console.log(findSum(10, 20, 30)); // 60