/**
 * App Module — Main Application Entry Point
 * 
 * Part of: E-Commerce Shopping Cart System
 * 
 * Demonstrates the complete e-commerce flow:
 *   1. Browse and search products
 *   2. Add items to cart
 *   3. View cart and totals
 * 
 * Run: node app.js
 */

import {
  getAllProducts,
  searchProducts,
  getProductsByCategory,
} from "./product.js";
import {
  addToCart,
  getCartItems,
  getCartTotal,
  updateQuantity,
  removeFromCart,
} from "./cart.js";
import { processPayment } from "./payment.js";

// 1. Browse all products
console.log("=== E-Commerce Store ===\n");
console.log("All Products:");
console.log(getAllProducts());

// 2. Filter by category
console.log("\nElectronics Products:");
console.log(getProductsByCategory("electronics"));

// 3. Search for a product
console.log("\nSearching for phone:");
console.log(searchProducts("phone"));

// 4. Add items to cart
console.log("\n=== Adding to Cart ===");
console.log(addToCart(1, 2)); // 2 Laptops
console.log(addToCart(3, 3)); // 3 Headphones
console.log(addToCart(1, 1)); // 1 more Laptop (should update quantity to 3)

// 5. View cart
console.log("\n=== Current Cart ===");
console.log(getCartItems());
console.log("Cart Total:", getCartTotal());
