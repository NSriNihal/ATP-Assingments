/**
 * Assignment: Employee Array Manipulation
 * 
 * Topic: Array of Objects — splice() operations
 * 
 * Problem:
 *   Given an array of employee objects, perform the following:
 *   1. Insert a new employee at the 2nd position
 *   2. Remove the employee named "Kiran"
 *   3. Update Sneha's last mark from 95 to 75
 * 
 * Concepts: Array.splice() for insert, delete, and replace operations
 */

// Employee data — each object has an employee number, name, and marks array
const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

// 1. Insert new employee at 2nd position (index 1)
// splice(startIndex, deleteCount, newElement) — deleteCount=0 means insert only
employees.splice(1, 0, {
  eno: 201,
  name: "Nihal",
  marks: [99, 88, 71],
});
console.log("After inserting Nihal at position 2:", employees);

// 2. Remove the employee named "Kiran" (now at index 4 after insertion)
employees.splice(4, 1);
console.log("After removing Kiran:", employees);

// 3. Change Sneha's last mark from 95 to 75
// Sneha is now at index 3; replace the entire object with updated marks
employees.splice(3, 1, {
  eno: 103,
  name: "Sneha",
  marks: [88, 92, 75],
});
console.log("After updating Sneha's last mark:", employees);