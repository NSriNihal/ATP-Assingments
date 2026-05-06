/**
 * Assignment 2: Online Course Name Processor
 * 
 * Topic: Array Higher-Order Methods with Strings
 * 
 * Scenario: Preparing a course list for display on a website.
 * 
 * Tasks:
 *   1. filter() courses with name length > 5
 *   2. map() to convert course names to uppercase
 *   3. reduce() to generate a single pipe-separated string
 *   4. find() the course "react"
 *   5. findIndex() of "node"
 * 
 * Concepts: filter, map, reduce with strings, find, findIndex
 */

const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. Filter courses whose name length is greater than 5 characters
const lengthAbove5 = courses.filter((name) => name.length > 5);
console.log("Courses with length > 5:", lengthAbove5);

// 2. Map to convert all course names to uppercase
const upperCase = courses.map((name) => name.toUpperCase());
console.log("Uppercase courses:", upperCase);

// 3. Reduce to generate a single pipe-separated string
// Using reduce to concatenate all names with " | " separator
const singleString = courses.reduce((acc, name, index) => {
  // Avoid trailing separator by checking if it's the last element
  return index === 0 ? name : acc + " | " + name;
}, "");
console.log("Combined string:", singleString.toUpperCase());

// 4. Find the course "react"
const findReact = courses.find((name) => name === "react");
console.log("Found course:", findReact);

// 5. Find the index of "node"
const findNode = courses.findIndex((name) => name === "node");
console.log("Index of node:", findNode);