/**
 * Common API Router — Authentication & Shared Operations
 * 
 * Part of: Capstone Blog Application
 * 
 * Provides routes shared across all roles:
 *   - User registration (with profile image upload to Cloudinary)
 *   - Login (JWT token generation, stored in HTTP-only cookie)
 *   - Logout (clear auth cookie)
 *   - Auth check (validate token on page refresh)
 *   - Password change
 * 
 * Endpoints:
 *   POST /auth/users        → Register a new user/author
 *   POST /auth/login        → Login and receive JWT cookie
 *   GET  /auth/logout       → Logout (clear cookie)
 *   GET  /auth/check-auth   → Validate token and return user data
 *   PUT  /auth/password     → Change password
 */

import exp from "express";
import { UserModel } from "../models/userModel.js";
import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";
const { sign } = jwt;
import { config } from "dotenv";
import { verifyToken } from "../middlewares/verifyToken.js";
import cloudinary from "../config/cloudinary.js";
config();
export const commonApp = exp.Router();
import { upload } from "../config/multer.js";
import { uploadToCloudinary } from "../config/cloudinaryUpload.js";

/**
 * POST /users — Register a new user or author
 * Supports profile image upload via multipart/form-data
 * Password is hashed with bcrypt (12 salt rounds) before saving
 */
commonApp.post(
  "/users",
  upload.single("profileImageUrl"),
  async (req, res) => {
    let allowedRoles = ["USER", "AUTHOR"];
    const newUser = req.body;

    // Validate role — only USER and AUTHOR can self-register
    if (!allowedRoles.includes(newUser.role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    let cloudinaryResult;

    try {
      // Upload profile image to Cloudinary (if provided)
      if (req.file) {
        cloudinaryResult = await uploadToCloudinary(req.file.buffer);
      }

      // Set the Cloudinary URL or empty string
      newUser.profileImageUrl = cloudinaryResult?.secure_url || "";

      // Hash the password before storing (12 salt rounds for security)
      newUser.password = await hash(newUser.password, 12);

      // Create and save the user document
      const newUserDoc = new UserModel(newUser);
      await newUserDoc.save();

      res.status(201).json({ message: "User is created" });
    } catch (err) {
      // Cleanup: delete uploaded image from Cloudinary if user creation fails
      if (cloudinaryResult?.public_id) {
        await cloudinary.uploader.destroy(cloudinaryResult.public_id);
      }
      res
        .status(500)
        .json({ message: "Error in user creation", error: err.message });
    }
  }
);

/**
 * POST /login — Authenticate user and issue JWT cookie
 * Compares provided password with stored bcrypt hash
 * Sets HTTP-only cookie with signed JWT token (valid for 1 day)
 */
commonApp.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await UserModel.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ message: "Invalid Email" });
  }

  // Compare the provided password with the stored hash
  const isMatched = await compare(password, user.password);
  if (!isMatched) {
    return res.status(400).json({ message: "Invalid Password" });
  }

  // Sign a JWT token with user info (expires in 1 day)
  const signedToken = sign(
    { userId: user._id.toString(), email: email, role: user.role },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );

  // Set the token as an HTTP-only cookie (prevents XSS access)
  res.cookie("token", signedToken, {
    httpOnly: true,
    secure: false, // Set to true in production (HTTPS)
    sameSite: "lax",
  });

  // Remove password from response payload for security
  let userObj = user.toObject();
  delete userObj.password;

  res.status(200).json({ message: "Login successful", payload: userObj });
});

/**
 * GET /logout — Clear the auth cookie to log out the user
 */
commonApp.get("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
  res.status(200).json({ message: "Logout Success" });
});

/**
 * GET /check-auth — Validate cookie token on page refresh
 * Returns the current user's data if the token is valid
 * Supports all roles: USER, AUTHOR, ADMIN
 */
commonApp.get(
  "/check-auth",
  verifyToken("USER", "AUTHOR", "ADMIN"),
  async (req, res) => {
    try {
      // Find user by decoded token's userId, exclude password
      const user = await UserModel.findById(req.user?.userId)
        .select("-password")
        .lean();

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "Authenticated", payload: user });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error in auth check", error: err.message });
    }
  }
);

/**
 * PUT /password — Change user password
 * Requires: { oldPass, newPass } in request body
 * Validates old password before updating
 * Supports all roles: USER, AUTHOR, ADMIN
 */
commonApp.put(
  "/password",
  verifyToken("USER", "AUTHOR", "ADMIN"),
  async (req, res) => {
    const { oldPass, newPass } = req.body;

    // Prevent same password change
    if (oldPass === newPass) {
      return res.status(400).json({ message: "Both passwords are same" });
    }

    // Get current user from database
    const user = await UserModel.findById(req.user?.userId);

    // Verify old password matches
    const isMatch = await compare(oldPass, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Old password does not match" });
    }

    // Hash and save new password
    user.password = await hash(newPass, 12);
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  }
);
