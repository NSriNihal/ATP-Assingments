/**
 * Exercise 3: Sum of Array Elements
 * 
 * Topic: Loops and Arrays
 * 
 * Problem: Calculate the sum of all marks in a given array.
 * 
 * Concepts: for loop, array traversal, accumulator pattern
 */

let arr = [90, 78, 65, 98];

// Initialize accumulator to 0
let sum = 0;

// Iterate through each element and add it to the running total
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}

console.log(`Sum is ${sum}`);