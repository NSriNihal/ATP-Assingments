/**
 * Exercise 1: Find the Bigger Number
 * 
 * Topic: Conditional Statements (if-else)
 * 
 * Problem: Given two numbers, determine which one is greater
 *          or if they are equal.
 * 
 * Concepts: if-else if-else, template literals, comparison operators
 */

let a = 10;
let b = 20;

// Compare the two numbers using if-else chain
if (a > b) {
  console.log(`${a} is greater`);
} else if (a < b) {
  console.log(`${b} is greater`);
} else {
  // Both numbers are the same
  console.log("Both are equal");
}