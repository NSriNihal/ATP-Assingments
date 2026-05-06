/**
 * App Module — Main Application Entry Point
 * 
 * Part of: Task Management System (TODO App)
 * 
 * This file demonstrates the TODO app by:
 *   1. Adding multiple tasks
 *   2. Displaying all tasks
 *   3. Completing (removing) a task
 *   4. Displaying tasks again to verify removal
 * 
 * Run: node app.js
 */

import { addTask, getAllTasks, completeTask } from "./task.js";

// Add 4 tasks with high priority
addTask("eating1", "high", "2024-12-26");
addTask("eating2", "high", "2024-12-26");
addTask("eating3", "high", "2024-12-26");
addTask("eating4", "high", "2024-12-26");

// Display all tasks
console.log("\n--- All Tasks ---");
getAllTasks();

// Complete (remove) task at position 2
console.log("\n--- Completing task 2 ---");
completeTask(2);

// Display updated task list
console.log("\n--- Tasks After Completion ---");
getAllTasks();
