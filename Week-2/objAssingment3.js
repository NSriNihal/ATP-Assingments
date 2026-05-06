/**
 * Assignment 3: Employee Payroll Processor
 * 
 * Topic: Array Higher-Order Methods — Salary Processing
 * 
 * Scenario: Building a salary processing module in a company HR app.
 * 
 * Tasks:
 *   1. filter() employees from IT department
 *   2. map() to add netSalary = salary + 10% bonus
 *   3. reduce() to calculate total salary payout
 *   4. find() employee with salary 30000
 *   5. findIndex() of employee "Neha"
 * 
 * Concepts: filter, map (object transformation), reduce (sum), find, findIndex
 */

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" },
];

// 1. Filter employees belonging to the IT department
let ITemployees = employees.filter((emp) => emp.department === "IT");
console.log("IT employees:", ITemployees);

// 2. Map to add 10% bonus — net salary = salary × 1.10
let withBonus = employees.map((emp) => ({
  ...emp,
  netSalary: emp.salary * 1.10, // Adding 10% bonus to base salary
}));
console.log("Employees with bonus:", withBonus);

// 3. Reduce to calculate the total salary payout (sum of all salaries)
let totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
console.log("Total payout:", totalSalary);

// 4. Find the employee with salary 30000
let findEmp = employees.find((emp) => emp.salary === 30000);
console.log("Employee with salary 30000:", findEmp);

// 5. Find the index of employee "Neha"
let findingIndexOfNeha = employees.findIndex((emp) => emp.name === "Neha");
console.log("Index of Neha:", findingIndexOfNeha);