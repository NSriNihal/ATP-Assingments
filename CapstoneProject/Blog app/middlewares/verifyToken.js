/**
 * JWT Token Verification Middleware
 * 
 * Part of: Capstone Blog Application
 * 
 * Verifies JWT tokens from HTTP-only cookies and checks role-based access.
 * Supports multiple allowed roles via rest parameters.
 * 
 * Usage: verifyToken("USER", "AUTHOR") — allows both roles
 */

import jwt from "jsonwebtoken";
import { config } from "dotenv";
const { verify } = jwt;

config();

/**
 * Creates a middleware that verifies JWT and checks user roles
 * @param {...string} allowedRoles - Roles permitted to access the route
 * @returns {Function} Express middleware function
 */
export const verifyToken = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      // Extract token from cookies
      const token = req.cookies?.token;

      if (!token) {
        return res.status(401).json({ message: "Please Login" });
      }

      // Verify and decode the JWT token
      let decodedToken = verify(token, process.env.SECRET_KEY);

      // Check if the user's role is in the allowed roles list
      if (!allowedRoles.includes(decodedToken.role)) {
        return res.status(403).json({ message: "You are not authorised" });
      }

      // Attach decoded token to request for downstream use
      req.user = decodedToken;
      next();
    } catch (err) {
      res.status(401).json({ message: "Invalid token" });
    }
  };
};