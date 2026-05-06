/**
 * Exam Portal Simulator
 * 
 * Topic: Asynchronous JavaScript — setTimeout
 * 
 * Scenario: Simulate an exam submission flow with timed responses.
 * 
 * Flow:
 *   1. Immediately show: "Exam submitted successfully"
 *   2. After 2 seconds → show: "Evaluating answers…"
 *   3. After 4 seconds → show: "Result: Pass"
 * 
 * Concepts: setTimeout, asynchronous callbacks, event loop
 */

// Step 1: Synchronous — runs immediately
console.log("Exam submitted successfully");

// Step 2: Asynchronous — runs after 2 second delay
setTimeout(() => {
  console.log("Evaluating answers...");
}, 2000);

// Step 3: Asynchronous — runs after 4 second delay
setTimeout(() => {
  console.log("Result: Pass");
}, 4000);
