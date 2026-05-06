/**
 * Discount Module — Coupon and Discount Logic
 * 
 * Part of: E-Commerce Shopping Cart System
 * 
 * Handles coupon validation, discount calculation, and application:
 *   - validateCoupon: Checks coupon existence, minimum amount, and category
 *   - calculateDiscount: Computes discount based on coupon type
 *   - applyDiscount: Orchestrates validation and calculation
 * 
 * Coupon Types:
 *   - 'percentage': Discount as a percentage of cart total
 *   - 'flat': Fixed amount discount (capped at cart total)
 * 
 * Concepts: Object lookups, conditional logic, data validation
 */

// Available coupons database
const coupons = {
  WELCOME10: { type: "percentage", value: 10, minAmount: 1000 },
  FLAT500: { type: "flat", value: 500, minAmount: 5000 },
  ELECTRONICS20: {
    type: "percentage",
    value: 20,
    minAmount: 10000,
    category: "electronics",
  },
};

/**
 * Validate a coupon code against cart conditions
 * @param {string} couponCode - Coupon code to validate
 * @param {number} cartTotal - Current cart total
 * @param {Array} cartItems - Cart items array (for category checks)
 * @returns {object} { valid: boolean, message: string }
 */
export function validateCoupon(couponCode, cartTotal, cartItems) {
  const coupon = coupons[couponCode];

  // Check if coupon exists
  if (!coupon) {
    return { valid: false, message: "Invalid coupon code" }; // Fixed: return object instead of false
  }

  // Check minimum cart amount requirement
  if (cartTotal < coupon.minAmount) {
    return {
      valid: false,
      message: `Minimum cart amount of ₹${coupon.minAmount} required`,
    };
  }

  // Check category-specific requirement (if coupon has one)
  if (coupon.category) {
    const hasRequiredCategory = cartItems.some(
      (item) => item.category === coupon.category
    );

    if (!hasRequiredCategory) {
      return {
        valid: false,
        message: `Cart must contain ${coupon.category} items`,
      };
    }
  }

  return { valid: true, message: "Coupon is valid" };
}

/**
 * Calculate the discount amount for a given coupon
 * @param {string} couponCode - Coupon code
 * @param {number} cartTotal - Current cart total
 * @returns {number} Discount amount
 */
export function calculateDiscount(couponCode, cartTotal) {
  const coupon = coupons[couponCode];

  if (!coupon) {
    return 0;
  }

  // Percentage discount: calculate % of cart total
  if (coupon.type === "percentage") {
    return (cartTotal * coupon.value) / 100;
  }

  // Flat discount: deduct fixed amount (but not more than cart total)
  if (coupon.type === "flat") {
    return Math.min(coupon.value, cartTotal);
  }

  return 0;
}

/**
 * Apply a coupon to the cart — validates and calculates discount
 * @param {number} cartTotal - Current cart total
 * @param {string} couponCode - Coupon code (optional)
 * @param {Array} cartItems - Cart items array
 * @returns {object} { originalTotal, discount, finalTotal, message }
 */
export function applyDiscount(cartTotal, couponCode, cartItems) {
  // No coupon provided
  if (!couponCode) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: "No coupon applied",
    };
  }

  // Validate the coupon
  const validation = validateCoupon(couponCode, cartTotal, cartItems);

  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message,
    };
  }

  // Calculate and apply discount
  const discount = calculateDiscount(couponCode, cartTotal);

  return {
    originalTotal: cartTotal,
    discount,
    finalTotal: cartTotal - discount,
    message: `Coupon ${couponCode} applied successfully`,
  };
}
