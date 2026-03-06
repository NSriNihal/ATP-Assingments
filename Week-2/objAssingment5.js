

// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
// const transactions = [
//   { id: 1, type: "credit", amount: 5000 },
//   { id: 2, type: "debit", amount: 2000 },
//   { id: 3, type: "credit", amount: 10000 },
//   { id: 4, type: "debit", amount: 3000 }
// ];


// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     5. findIndex() of transaction with amount 10000

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//     1. filter() all credit transactions
let creditTransactions = transactions.filter((obj)=>obj.type === "credit")
console.log(creditTransactions)

//     2. map() to extract only transaction amounts
let amm = transactions.map((obj)=>obj.amount)
console.log(amm)

//     3. reduce() to calculate final account balance
let finalammount = transactions.reduce((acc , ammObj)=>acc+ammObj.amount,0)
console.log(finalammount)

//     4. find() the first debit transaction
let firstDebit = transactions.find((obj)=>obj.type === "debit")
console.log(firstDebit)

//     5. findIndex() of transaction with amount 10000
let findingAmmount10000 = transactions.findIndex((obj)=>obj.amount === 10000)
console.log(findingAmmount10000)
