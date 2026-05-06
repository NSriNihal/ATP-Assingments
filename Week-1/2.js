/**
 * Exercise 2: Find the Biggest of Three Numbers
 * 
 * Topic: Nested Conditional Statements
 * 
 * Problem: Given three numbers, find and print the greatest one.
 * 
 * Concepts: Nested if-else, comparison operators
 */

let a = 1000;
let b = 200;
let c = 30;

// First check if 'a' is greater than 'b'
if (a > b) {
  // If yes, compare 'a' with 'c' to find the overall greatest
  if (a > c) {
    console.log(`${a} is greater`);
  } else {
    console.log(`${c} is greater`);
  }
} else if (a < b) {
  // 'b' is greater than 'a', now compare 'b' with 'c'
  if (c > b) {
    console.log(`${c} is greater`);
  } else {
    console.log(`${b} is greater`);
  }
} else {
  // a === b, so compare either with c
  if (a > c) {
    console.log(`${a} is greater`);
  } else {
    console.log(`${c} is greater`);
  }
}