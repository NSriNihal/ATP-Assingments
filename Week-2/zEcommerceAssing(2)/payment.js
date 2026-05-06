/**
 * Payment Module — Payment Processing
 * 
 * Part of: E-Commerce Shopping Cart System
 * 
 * Handles the checkout flow:
 *   1. Gets cart items and calculates total
 *   2. Applies discount if coupon is provided
 *   3. Validates payment method (card, upi, cod)
 *   4. Reduces stock for all purchased items
 *   5. Clears the cart and generates an order summary
 * 
 * Concepts: Module orchestration, transaction flow, order ID generation
 */

import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

/**
 * Process a payment for the current cart
 * @param {string} paymentMethod - Payment method: "card", "upi", or "cod"
 * @param {string|null} couponCode - Optional coupon code
 * @returns {object} Order summary with status and details
 */
export function processPayment(paymentMethod, couponCode = null) {
  const items = getCartItems();

  // Check if cart has items
  if (items.length === 0) {
    return {
      orderId: null,
      items: [],
      subtotal: 0,
      discount: 0,
      total: 0,
      paymentMethod,
      status: "failed",
      message: "Cart is empty",
    };
  }

  // Validate the payment method
  if (!validatePaymentMethod(paymentMethod)) {
    return {
      orderId: null,
      items,
      subtotal: getCartTotal(),
      discount: 0,
      total: getCartTotal(),
      paymentMethod,
      status: "failed",
      message: "Invalid payment method. Use card, upi, or cod",
    };
  }

  // Calculate subtotal and apply discount
  const subtotal = getCartTotal();
  const discountResult = applyDiscount(subtotal, couponCode, items);

  // Reduce stock for each purchased item
  for (const item of items) {
    const stockResult = reduceStock(item.productId, item.quantity);

    if (!stockResult.success) {
      return {
        orderId: null,
        items,
        subtotal,
        discount: 0,
        total: subtotal,
        paymentMethod,
        status: "failed",
        message: `Stock error: ${stockResult.message}`,
      };
    }
  }

  // Clear the cart after successful payment
  clearCart();

  // Return the complete order summary
  return {
    orderId: generateOrderId(),
    items,
    subtotal: discountResult.originalTotal,
    discount: discountResult.discount,
    total: discountResult.finalTotal,
    paymentMethod,
    status: "success",
    message: discountResult.message,
  };
}

/**
 * Validate that the payment method is supported
 * @param {string} method - Payment method to check
 * @returns {boolean} true if valid
 */
export function validatePaymentMethod(method) {
  const validMethods = ["card", "upi", "cod"];
  return validMethods.includes(method);
}

/**
 * Generate a unique order ID using timestamp
 * @returns {string} Order ID (e.g., "ORD1714987654321")
 */
function generateOrderId() {
  return `ORD${Date.now()}`;
}