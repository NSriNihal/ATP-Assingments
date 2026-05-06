/**
 * Exercise 7: Linear Search Function
 * 
 * Topic: Functions, Arrays, and Searching
 * 
 * Problem: Write a function that receives an array and a search element
 *          as arguments. It should return the index of the search element
 *          in the array, or "not found" if the element doesn't exist.
 * 
 * Concepts: Linear search algorithm, for loop, early return
 */

let arr = [10, 20, 30, 40];
let ele = 30;

function Search(arr, ele) {
  // Iterate through each element and compare with the search target
  for (let i = 0; i < arr.length; i++) {
    if (ele == arr[i]) {
      return i; // Return the index immediately when found
    }
  }

  // If the loop completes without finding the element, return "not found"
  return "not found";
}

// Test the search function
let result = Search(arr, ele);
console.log(result); // Output: 2 (index of 30)