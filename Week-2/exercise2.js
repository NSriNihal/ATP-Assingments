/**
 * Exercise 2: Update User Object
 * 
 * Topic: Spread Operator with Objects
 * 
 * Goal: Learn object cloning & adding new properties
 * 
 * Tasks:
 *   1. Create a new object updatedUser
 *   2. Copy all properties from user
 *   3. Add a new property age: 25
 *   4. Print both objects — original should remain unchanged
 * 
 * Concepts: Object spread operator, immutable object updates
 */

let user = {
  name: "Ravi",
  city: "Hyderabad",
};

// Create a new object by spreading user properties and adding age
// The spread operator copies all key-value pairs into the new object
let updatedUser = { ...user, age: 25 };

console.log("Original:", user);       // { name: "Ravi", city: "Hyderabad" }
console.log("Updated:", updatedUser); // { name: "Ravi", city: "Hyderabad", age: 25 }
