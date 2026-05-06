/**
 * Assignment 2: Student Performance Dashboard
 * 
 * Topic: Array Higher-Order Methods — Grading System
 * 
 * Scenario: Working on a college result analysis system.
 * 
 * Tasks:
 *   1. filter() students who passed (marks >= 40)
 *   2. map() to add a grade field (>=90 → A, >=75 → B, >=60 → C, else → D)
 *   3. reduce() to calculate average marks
 *   4. find() the student who scored 92
 *   5. findIndex() of student "Kiran"
 * 
 * Concepts: filter, map with conditional logic, reduce for averaging
 */

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 },
];

// 1. Filter students who passed (marks >= 40)
const passed = students.filter((student) => student.marks >= 40);
console.log("Passed students:", passed);

// 2. Map to add a grade field based on marks
// Grade thresholds: >=90 → A, >=75 → B, >=60 → C, else → D
let grade = students.map(function (student) {
  if (student.marks >= 90) {
    return { ...student, grade: "A" };
  } else if (student.marks >= 75) {
    // Fixed: was incorrectly checking >=90 instead of >=75
    return { ...student, grade: "B" };
  } else if (student.marks >= 60) {
    // Fixed: was incorrectly checking >=90 instead of >=60
    return { ...student, grade: "C" };
  } else {
    return { ...student, grade: "D" };
  }
});
console.log("Students with grades:", grade);

// 3. Reduce to calculate the average marks across all students
let totalMarks = students.reduce((acc, student) => acc + student.marks, 0);
console.log("Average marks:", totalMarks / students.length);

// 4. Find the student who scored 92
let finding92 = students.find((student) => student.marks === 92);
console.log("Student with 92 marks:", finding92);

// 5. Find the index of student "Kiran"
let findingKiran = students.findIndex((student) => student.name === "Kiran");
console.log("Index of Kiran:", findingKiran);
