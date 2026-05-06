/**
 * Exercise 6: Function to Calculate Sum of an Array
 * 
 * Topic: Functions with Array Parameters
 * 
 * Problem: Write a function that receives an array as an argument
 *          and returns the sum of all its elements.
 * 
 * Concepts: Function parameters, for loop, accumulator pattern
 */

let arr = [10, 20, 30, 40, 50];

function sumOfArray(arr) {
  let sum = 0;

  // Iterate through the array and accumulate the sum
  for (let i = 0; i < arr.length; i++) { // Fixed: added 'let' to loop variable 'i'
    sum = sum + arr[i];
  }

  return sum;
}

// Call the function and print the result
let result = sumOfArray(arr);
console.log(`Sum is ${result}`);