/**
 * Assignment 5: Bank Transaction Analyzer
 * 
 * Topic: Array Higher-Order Methods — Financial Data
 * 
 * Scenario: Building a bank statement summary.
 * 
 * Tasks:
 *   1. filter() all credit transactions
 *   2. map() to extract only transaction amounts
 *   3. reduce() to calculate final account balance
 *   4. find() the first debit transaction
 *   5. findIndex() of transaction with amount 10000
 * 
 * Concepts: filter, map (extraction), reduce (sum), find, findIndex
 */

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 },
];

// 1. Filter all credit transactions
let creditTransactions = transactions.filter((txn) => txn.type === "credit");
console.log("Credit transactions:", creditTransactions);

// 2. Map to extract only the transaction amounts (ignore id and type)
let amounts = transactions.map((txn) => txn.amount);
console.log("Transaction amounts:", amounts);

// 3. Reduce to calculate the final account balance
// Sum all transaction amounts (note: this sums all, not accounting for debit/credit sign)
let finalAmount = transactions.reduce((acc, txn) => acc + txn.amount, 0);
console.log("Total amount:", finalAmount);

// 4. Find the first debit transaction
let firstDebit = transactions.find((txn) => txn.type === "debit");
console.log("First debit:", firstDebit);

// 5. Find the index of the transaction with amount 10000
let findingAmount10000 = transactions.findIndex((txn) => txn.amount === 10000);
console.log("Index of amount 10000:", findingAmount10000);
