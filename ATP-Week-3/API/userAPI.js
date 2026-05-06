/**
 * User API Router — CRUD Operations for Users
 * 
 * Part of: Week 3 Express.js REST API
 * 
 * Endpoints:
 *   GET    /user-api/users      → Read all users
 *   GET    /user-api/users/:id  → Read user by ID
 *   POST   /user-api/users      → Create a new user
 *   PUT    /user-api/users      → Update an existing user
 *   DELETE /user-api/users/:id  → Delete a user by ID
 * 
 * Note: Uses in-memory array (no database). Data resets on server restart.
 */

import exp from "express";
export const userApp = exp.Router();

// In-memory user storage (simulates a database)
let users = [];

/**
 * GET /users — Read all users
 * Returns the complete list of users
 */
userApp.get("/users", (req, res) => {
  res.json({ message: "all data", payload: users });
});

/**
 * GET /users/:id — Read a specific user by their ID
 * URL parameter 'id' is extracted from req.params
 */
userApp.get("/users/:id", (req, res) => {
  let idOfUrl = Number(req.params.id); // Convert string param to number
  let index = users.findIndex((userObj) => userObj.id === idOfUrl);

  if (index === -1) {
    return res.json({ message: "user not found" });
  }

  res.json({ message: "data", payload: users[index] });
});

/**
 * POST /users — Create a new user
 * Expects user object in request body
 */
userApp.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json({ message: "user Created" });
});

/**
 * PUT /users — Update an existing user
 * Expects modified user object (with id) in request body
 * Uses splice() to replace the user at the found index
 */
userApp.put("/users", (req, res) => {
  let modifiedUser = req.body;
  let index = users.findIndex((userObj) => userObj.id === modifiedUser.id);

  if (index === -1) {
    return res.json({ message: "user not found" });
  }

  // Replace the existing user with the modified one
  users.splice(index, 1, modifiedUser);
  res.json("Updated");
});

/**
 * DELETE /users/:id — Delete a user by their ID
 * URL parameter 'id' is used to find and remove the user
 */
userApp.delete("/users/:id", (req, res) => {
  let idOfUrl = Number(req.params.id);
  let index = users.findIndex((userObj) => userObj.id === idOfUrl);

  if (index === -1) {
    return res.json({ message: "User not found" });
  }

  users.splice(index, 1);
  res.json({ message: "Deleted" });
});
