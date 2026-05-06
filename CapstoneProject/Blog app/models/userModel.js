/**
 * User Model — Mongoose Schema for Users
 * 
 * Part of: Capstone Blog Application
 * 
 * Defines the schema for users, authors, and admins.
 * All user types share the same model with role-based differentiation.
 * 
 * Fields:
 *   - firstName (required)
 *   - lastName (optional)
 *   - email (required, unique)
 *   - password (required, stored as bcrypt hash)
 *   - role (USER | AUTHOR | ADMIN)
 *   - profileImageUrl (Cloudinary URL)
 *   - isUserActive (default: false — admin must activate)
 * 
 * Options:
 *   - timestamps: auto-adds createdAt and updatedAt
 *   - versionKey: disabled (__v field removed)
 *   - strict: "throw" — rejects unknown fields with an error
 */

import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: ["USER", "AUTHOR", "ADMIN"],
      required: [true, "{VALUE} is an invalid role"],
    },
    profileImageUrl: {
      type: String,
    },
    isUserActive: {
      type: Boolean,
      default: false, // New users must be activated by admin
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
    versionKey: false, // Removes the __v field
    strict: "throw", // Throws error if extra fields are provided
  }
);

// Create and export the User model (maps to 'users' collection)
export const UserModel = model("user", userSchema);