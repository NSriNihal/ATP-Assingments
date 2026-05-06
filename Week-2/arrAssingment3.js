/**
 * Assignment 3: Student Marks List
 * 
 * Topic: Array Higher-Order Methods with Numbers
 * 
 * Scenario: Processing marks received from an exam system.
 * 
 * Tasks:
 *   1. filter() marks >= 40 (pass marks)
 *   2. map() to add 5 grace marks to each student
 *   3. reduce() to find highest mark
 *   4. find() first mark below 40
 *   5. findIndex() of mark 92
 * 
 * Concepts: filter, map, reduce (for max), find, findIndex
 */

const marks = [78, 92, 35, 88, 40, 67];

// 1. Filter marks >= 40 (passing marks)
const passMark = marks.filter((mark) => mark >= 40);
console.log("Passed students' marks:", passMark);

// 2. Map to add 5 grace marks to each student's score
const graceMarks = marks.map((mark) => mark + 5);
console.log("After adding 5 grace marks:", graceMarks);

// 3. Reduce to find the highest mark
// Compares accumulator with each mark, keeping the larger one
let highestMark = marks.reduce((acc, mark) => (acc > mark ? acc : mark));
console.log("Highest mark is:", highestMark);

// 4. Find the first mark below 40 (failing mark)
let firstMarkBelow40 = marks.find((mark) => mark < 40);
console.log("First mark < 40:", firstMarkBelow40);

// 5. Find the index of mark 92 (using strict equality)
let indexOf92 = marks.findIndex((mark) => mark === 92);
console.log("Index of 92:", indexOf92);
