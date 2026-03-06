
// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
// const employees = [
//   { id: 201, name: "Amit", salary: 45000, department: "IT" },
//   { id: 202, name: "Neha", salary: 60000, department: "HR" },
//   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
//   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
// ];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus

//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"

// Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//     1. filter() employees from IT department
let ITemployees = employees.filter((dept)=>dept.department === "IT")
console.log(ITemployees)

//     2. map() to add:
//             netSalary = salary + 10% bonus
let addbonus = employees.map((sal)=>sal.salary*1.10)
console.log(addbonus)

//     3. reduce() to calculate total salary payout
let totalsalary = employees.reduce((Acc , sal)=>Acc+sal.salary,0 )
console.log("Total payout = ",totalsalary)

//     4. find() employee with salary 30000
let findemp = employees.find((sal)=>sal.salary === 30000)
console.log(findemp)

//     5. findIndex() of employee "Neha"
let findingIndexOfNeha = employees.findIndex((value)=>value.name === "Neha")
console.log(findingIndexOfNeha)