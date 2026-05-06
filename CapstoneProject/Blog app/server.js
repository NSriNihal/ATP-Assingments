/**
 * Server Entry Point — Blog Application Backend
 * 
 * Capstone Project: Full-Stack Blog Application (MERN)
 * 
 * This file configures and starts the Express.js server:
 *   - Loads environment variables from .env
 *   - Sets up middleware (JSON parser, CORS, cookie parser)
 *   - Mounts API routers for users, authors, admins, and auth
 *   - Connects to MongoDB via Mongoose
 *   - Handles 404 (invalid paths) and global errors
 * 
 * Dependencies: express, dotenv, mongoose, cookie-parser, cors
 */

import exp from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import { userApp } from "./APIs/userAPI.js";
import { authorApp } from "./APIs/authorAPI.js";
import { adminApp } from "./APIs/adminAPI.js";
import { commonApp } from "./APIs/commonAPI.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = exp();
config(); // Load .env variables into process.env

// --- Middleware Setup ---

// Body parser middleware — parses incoming JSON request bodies
app.use(exp.json());

// CORS middleware — allows cross-origin requests from the frontend
app.use(
  cors({
    origin: process.env.FRONTEND_URL?.replace(/\/$/, ""),
    credentials: true, // Allow cookies to be sent with requests
  })
);

// Cookie parser — parses cookies from incoming requests
app.use(cookieParser());

// --- API Route Mounting ---

app.use("/user-api", userApp); // User routes (read articles, add comments)
app.use("/author-api", authorApp); // Author routes (CRUD articles)
app.use("/admin-api", adminApp); // Admin routes (manage users)
app.use("/auth", commonApp); // Common routes (register, login, logout)

/**
 * Connect to MongoDB and start the HTTP server
 * Uses async/await for clean error handling
 */
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("DB server is connected");
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server listening on ${port}...`));
  } catch (err) {
    console.log("Unable to connect to database:", err);
  }
};
connectDB();

// --- Error Handling ---

// Handle invalid paths (404)
app.use((req, res, next) => {
  res.status(404).json({ message: `Path ${req.url} is invalid` });
});

// Global error handler — catches errors thrown in route handlers
app.use((err, req, res, next) => {
  console.log("Error:", err);

  // Mongoose validation error (e.g., required field missing)
  if (err.name === "ValidationError") {
    return res
      .status(400)
      .json({ message: "Validation Error", error: err.message });
  }

  // Mongoose cast error (e.g., invalid ObjectId format)
  if (err.name === "CastError") {
    return res
      .status(400)
      .json({ message: "Invalid ID Format", error: err.message });
  }

  // Generic server error
  res.status(500).json({ message: "Server Error", error: err.message });
});