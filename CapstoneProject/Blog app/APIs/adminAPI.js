/**
 * Admin API Router — User Management Operations
 * 
 * Part of: Capstone Blog Application
 * 
 * Provides routes for admins to manage users and authors:
 *   - Read all non-admin users (USER + AUTHOR)
 *   - Block or activate user/author accounts
 * 
 * All routes are protected by JWT token verification (role: ADMIN)
 * 
 * Endpoints:
 *   GET   /admin-api/users         → Get all users and authors
 *   PATCH /admin-api/users/status  → Block/activate a user account
 */

import exp from "express";
import { UserModel } from "../models/userModel.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export const adminApp = exp.Router();

/**
 * GET /users — Read all non-admin users (USER + AUTHOR roles)
 * Returns only essential fields: name, email, role, active status
 * Protected route: requires ADMIN role
 */
adminApp.get("/users", verifyToken("ADMIN"), async (req, res) => {
  try {
    const usersAndAuthors = await UserModel.find(
      { role: { $in: ["USER", "AUTHOR"] } }, // Filter: only USER and AUTHOR roles
      { firstName: 1, lastName: 1, email: 1, role: 1, isUserActive: 1 } // Projection: selected fields only
    ).lean(); // .lean() returns plain JS objects (better performance)

    res
      .status(200)
      .json({ message: "Users and authors", payload: usersAndAuthors });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error in fetching users", error: err.message });
  }
});

/**
 * PATCH /users/status — Block or activate a user/author account
 * Expects: { userId, isUserActive: boolean } in request body
 * Protected route: requires ADMIN role
 */
adminApp.patch("/users/status", verifyToken("ADMIN"), async (req, res) => {
  try {
    const { userId, isUserActive } = req.body;

    // Validate that isUserActive is a boolean
    if (typeof isUserActive !== "boolean") {
      return res.status(400).json({ message: "isUserActive must be boolean" });
    }

    // Find and update only non-admin users
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: userId, role: { $in: ["USER", "AUTHOR"] } },
      { $set: { isUserActive } },
      {
        new: true,
        runValidators: true,
        projection: {
          firstName: 1,
          lastName: 1,
          email: 1,
          role: 1,
          isUserActive: 1,
        },
      }
    ).lean();

    if (!updatedUser) {
      return res.status(404).json({ message: "User/author not found" });
    }

    res
      .status(200)
      .json({ message: "User status updated", payload: updatedUser });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error in updating status", error: err.message });
  }
});
