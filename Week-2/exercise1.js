/**
 * Exercise 1: Copy & Extend an Array
 * 
 * Topic: Spread Operator with Arrays
 * 
 * Goal: Learn array copying with spread operator
 * 
 * Tasks:
 *   1. Create a new array moreFruits
 *   2. Copy all fruits from the original array
 *   3. Add "orange" at the end using spread
 *   4. Print both arrays — original should NOT change
 * 
 * Concepts: Spread operator (...), immutable array operations
 */

let fruits = ["apple", "banana"];

// Create a new array by spreading the original and adding "orange"
// The spread operator (...) copies all elements into the new array
let moreFruits = [...fruits, "orange"];

console.log("Original:", fruits);    // ["apple", "banana"] — unchanged
console.log("Extended:", moreFruits); // ["apple", "banana", "orange"]
