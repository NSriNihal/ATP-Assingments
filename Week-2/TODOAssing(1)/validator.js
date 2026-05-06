/**
 * Validator Module — Input Validation Functions
 * 
 * Part of: Task Management System (TODO App)
 * 
 * This module provides validation functions for task properties:
 *   - validateTitle: Ensures title is not empty and has at least 3 characters
 *   - validatePriority: Ensures priority is one of: low, medium, high
 *   - validateDueDate: Placeholder for future date validation
 * 
 * Concepts: ES6 Modules (export), input validation, guard clauses
 */

/**
 * Validates the task title
 * @param {string} title - The task title to validate
 * @returns {boolean} true if valid (non-empty, min 3 chars), false otherwise
 */
function validateTitle(title) {
  if (!title) {
    return false;
  }
  if (title.length <= 3) {
    return false;
  }
  return true;
}

/**
 * Validates the task priority level
 * @param {string} priority - Must be "low", "medium", or "high"
 * @returns {boolean} true if valid priority, false otherwise
 */
function validatePriority(priority) {
  if (priority === "low" || priority === "high" || priority === "medium") {
    return true; // Can also use: ["low", "medium", "high"].includes(priority)
  }
  return false;
}

/**
 * Validates the due date (placeholder — always returns true)
 * @param {string} date - The due date string
 * @returns {boolean} true (future: should check if date is in the future)
 */
function validateDueDate(date) {
  // TODO: Implement proper date validation
  // let dueDate = new Date(date);
  // let today = new Date();
  // return dueDate > today;
  return true;
}

export { validateTitle, validatePriority, validateDueDate };
