/**
 * Assignment 1: Shopping Cart Summary
 * 
 * Topic: Array Higher-Order Methods with Objects
 * 
 * Scenario: Building a shopping cart summary for an e-commerce website.
 * 
 * Tasks:
 *   1. filter() to get only inStock products
 *   2. map() to create { name, totalPrice } array
 *   3. reduce() to calculate grand total cart value
 *   4. find() to get details of "Mouse"
 *   5. findIndex() to find position of "Keyboard"
 * 
 * Concepts: filter, map, reduce on arrays of objects, object destructuring
 */

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true },
];

// 1. Filter to get only products that are in stock
let allowed = cart.filter((item) => item.inStock === true);
console.log("In-stock products:", allowed);

// 2. Map to create a new array with name and computed total price
let newArray = cart.map((item) => {
  return {
    itemname: item.name,
    totalprice: item.price * item.quantity, // price × quantity
  };
});
console.log("Name and total price:", newArray);

// 3. Reduce to calculate the grand total of the entire cart
// Accumulates price × quantity for each item, starting from 0
let totalValue = cart.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);
console.log("Grand total:", totalValue);

// 4. Find the item named "Mouse"
let mouse = cart.find((item) => item.name === "Mouse");
console.log("Mouse details:", mouse);

// 5. Find the index of "Keyboard" in the cart array
let findKeyboard = cart.findIndex((item) => item.name === "Keyboard");
console.log("Keyboard index:", findKeyboard);