/**
 * Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
 * 
 * Topic: Object Spread Operator — Shallow Copy
 * 
 * Task:
 *   1. Create a shallow copy of a user object
 *   2. Change the name in the copied object
 *   3. Change preferences.theme in the copied object
 *   4. Observe that primitive changes are isolated, but nested
 *      object changes affect both (because shallow copy only
 *      copies top-level references)
 * 
 * Key Takeaway: Shallow copy with spread (...) only copies the
 *               first level. Nested objects share the same reference.
 */

const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en",
  },
};

// Create a shallow copy using spread operator
let copyUser = { ...user };

// Changing a primitive property — only affects the copy
copyUser.name = "Ramesh";

// Changing a nested object property — affects BOTH original and copy
// because shallow copy shares the same reference for nested objects
copyUser.preferences.theme = "light";

console.log("Original user:", user);
// Notice: user.name is still "Ravi" (primitive — independent copy)
// But:   user.preferences.theme is now "light" (nested — shared reference)

console.log("Copied user:", copyUser);