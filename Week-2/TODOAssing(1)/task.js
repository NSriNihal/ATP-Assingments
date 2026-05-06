/**
 * Task Module — Core Task Operations
 * 
 * Part of: Task Management System (TODO App)
 * 
 * This module handles task CRUD operations:
 *   - addTask: Validates input and adds a new task to the list
 *   - getAllTasks: Displays all current tasks
 *   - completeTask: Removes a task by its position (1-based index)
 * 
 * Concepts: ES6 Modules (import/export), array manipulation, validation
 */

import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

// In-memory task storage
let tasks = [];

/**
 * Adds a new task after validating all inputs
 * @param {string} title - Task title (min 3 chars)
 * @param {string} priority - Priority level: "low", "medium", or "high"
 * @param {string} dueDate - Due date string
 */
function addTask(title, priority, dueDate) {
  // Fixed: pass arguments to validator functions (previously called without args)
  if (!validateTitle(title) || !validatePriority(priority) || !validateDueDate(dueDate)) {
    console.log("Invalid task — validation failed");
    return "Invalid task";
  }

  // Add the validated task to the tasks array
  tasks.push({ title, priority, dueDate });
  console.log("Added Successfully");
}

/**
 * Displays all current tasks
 */
function getAllTasks() {
  console.log("Current tasks:", tasks);
}

/**
 * Removes a task by its 1-based position
 * @param {number} taskId - 1-based task position in the array
 */
function completeTask(taskId) {
  tasks.splice(taskId - 1, 1); // Convert 1-based ID to 0-based index
  console.log("Removed the task from TODO");
}

export { addTask, getAllTasks, completeTask };
