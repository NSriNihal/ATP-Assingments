/**
 * Exercise 4: Find the Smallest Element in an Array
 * 
 * Topic: Loops and Arrays
 * 
 * Problem: Find and print the minimum value in a marks array.
 * 
 * Concepts: for loop, tracking minimum value, comparison
 */

let marks = [90, 78, 65, 98, 1];

// Assume the first element is the smallest
let min = marks[0]; // Fixed: added 'let' to avoid implicit global

// Compare each remaining element with the current minimum
for (let i = 1; i < marks.length; i++) {
  if (marks[i] < min) {
    min = marks[i]; // Update minimum if a smaller value is found
  }
}

console.log(`Minimum is ${min}`);