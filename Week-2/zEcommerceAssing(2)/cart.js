/**
 * Cart Module — Shopping Cart Operations
 * 
 * Part of: E-Commerce Shopping Cart System
 * 
 * Manages the user's shopping cart with functions for:
 *   - Adding items (with stock validation and duplicate handling)
 *   - Removing items
 *   - Updating quantities
 *   - Viewing cart contents and total
 * 
 * Concepts: ES6 Modules, array CRUD, optional chaining, object mapping
 */

import { getProductById, checkStock } from "./product.js";

// In-memory cart storage
let cartItems = [];

/**
 * Add a product to the cart
 * Handles: stock validation, duplicate detection (updates quantity)
 * @param {number} productId - Product ID to add
 * @param {number} quantity - Quantity to add
 * @returns {object} Result with success flag and message
 */
export function addToCart(productId, quantity) {
  const product = getProductById(productId);

  // Validate product exists
  if (!product) {
    return { success: false, message: "Product not found" }; // Fixed: return meaningful message
  }

  // Validate quantity is positive
  if (quantity <= 0) {
    return { success: false, message: "Quantity must be greater than 0" };
  }

  // Check if product already exists in cart
  const existingItem = cartItems.find((item) => item.productId === productId);
  const desiredQuantity = (existingItem?.quantity || 0) + quantity;

  // Validate stock availability for total desired quantity
  if (!checkStock(productId, desiredQuantity)) {
    return { success: false, message: "Insufficient stock" };
  }

  if (existingItem) {
    // Update quantity of existing cart item
    existingItem.quantity = desiredQuantity;
    return { success: true, message: `Updated ${product.name} quantity to ${desiredQuantity}` };
  }

  // Add new item to cart
  cartItems.push({ productId, quantity });
  return { success: true, message: `Added ${product.name} to cart` };
}

/**
 * Remove a product from the cart
 * @param {number} productId - Product ID to remove
 * @returns {object} Result with success flag and message
 */
export function removeFromCart(productId) {
  const itemIndex = cartItems.findIndex(
    (item) => item.productId === productId
  );

  if (itemIndex === -1) {
    return { success: false, message: "Product not in cart" };
  }

  cartItems.splice(itemIndex, 1);
  return { success: true, message: "Removed from cart" };
}

/**
 * Update the quantity of a product in the cart
 * If new quantity is 0 or less, removes the item
 * @param {number} productId - Product ID
 * @param {number} newQuantity - New quantity to set
 * @returns {object} Result with success flag and message
 */
export function updateQuantity(productId, newQuantity) {
  const item = cartItems.find(
    (cartItem) => cartItem.productId === productId
  );

  if (!item) {
    return { success: false, message: "Product not in cart" };
  }

  // If new quantity is 0 or less, remove the item entirely
  if (newQuantity <= 0) {
    return removeFromCart(productId);
  }

  // Check stock before updating
  if (!checkStock(productId, newQuantity)) {
    return { success: false, message: "Insufficient stock" };
  }

  item.quantity = newQuantity;
  return { success: true, message: "Quantity updated" };
}

/**
 * Get all cart items with full product details
 * @returns {Array} Cart items with product info and calculated total price
 */
export function getCartItems() {
  return cartItems
    .map((item) => {
      const product = getProductById(item.productId);

      if (!product) {
        return null; // Handle removed/invalid products
      }

      return {
        productId: item.productId,
        name: product.name,
        category: product.category,
        price: product.price,
        quantity: item.quantity,
        totalPrice: product.price * item.quantity, // Computed total
      };
    })
    .filter(Boolean); // Remove null entries
}

/**
 * Calculate the total price of all items in the cart
 * @returns {number} Grand total
 */
export function getCartTotal() {
  return getCartItems().reduce((total, item) => total + item.totalPrice, 0);
}

/**
 * Clear all items from the cart
 */
export function clearCart() {
  cartItems = [];
}