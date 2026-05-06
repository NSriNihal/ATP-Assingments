/**
 * Server Entry Point — Express.js Backend
 * 
 * Week 3: Node.js & Express.js REST API Development
 * 
 * This file sets up the Express application with:
 *   - JSON body parser middleware
 *   - User API routes (mounted at /user-api)
 *   - Product API routes (mounted at /product-api)
 * 
 * Dependencies: express
 * Run: node server.js (or use nodemon for auto-reload)
 */

import exp from "express";
import { userApp } from "./API/userAPI.js";
import { productApp } from "./API/productAPI.js";

// Create the Express application instance
const app = exp();

// Body parser middleware — converts incoming JSON to JavaScript objects
app.use(exp.json());

// Set the port number for the HTTP server
const port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Server listening on port: ${port}`));

// Mount API routers as middleware
// Forward requests starting with /user-api to the user router
app.use("/user-api", userApp);
// Forward requests starting with /product-api to the product router
app.use("/product-api", productApp);
