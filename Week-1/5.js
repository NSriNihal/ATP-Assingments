/**
 * Exercise 5: Function to Find the Biggest of Three Numbers
 * 
 * Topic: Functions with Return Values
 * 
 * Problem: Write a function that receives 3 number arguments
 *          and returns the biggest number.
 * 
 * Concepts: Function declaration, return statement, nested conditionals
 */

function big(a, b, c) {
  if (a > b) {
    // 'a' is greater than 'b', now compare 'a' with 'c'
    if (a > c) {
      return a;
    } else {
      return c;
    }
  } else if (a < b) {
    // 'b' is greater than 'a', now compare 'b' with 'c'
    if (c > b) {
      return c;
    } else {
      return b;
    }
  } else {
    // Fixed: handle the case when a === b
    // When a equals b, just compare either with c
    if (a >= c) {
      return a;
    } else {
      return c;
    }
  }
}

// Test the function
let result = big(120, 1300, 98);
console.log(`The bigger number is ${result}`);