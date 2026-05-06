/**
 * Product Module — Product Catalog
 * 
 * Part of: E-Commerce Shopping Cart System
 * 
 * Manages the product database with functions for:
 *   - Retrieving products (by ID, all, by category, search)
 *   - Stock management (check and reduce stock)
 * 
 * Concepts: ES6 Modules, array methods, encapsulated data
 */

// Simulated product database
const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10, category: "electronics" },
  { id: 2, name: "Phone", price: 30000, stock: 15, category: "electronics" },
  { id: 3, name: "Headphones", price: 2000, stock: 25, category: "accessories" },
  { id: 4, name: "Mouse", price: 500, stock: 50, category: "accessories" },
  { id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" },
];

/**
 * Find a product by its unique ID
 * @param {number} id - Product ID
 * @returns {object|null} Product object or null if not found
 */
export function getProductById(id) {
  return products.find((product) => product.id === id) || null;
}

/**
 * Get all available products
 * @returns {Array} Complete product list
 */
export function getAllProducts() {
  return products;
}

/**
 * Filter products by category (case-insensitive)
 * @param {string} category - Category name (e.g., "electronics", "accessories")
 * @returns {Array} Filtered products
 */
export function getProductsByCategory(category) {
  const normalized = String(category).toLowerCase();
  return products.filter(
    (product) => product.category.toLowerCase() === normalized
  );
}

/**
 * Search products by name (case-insensitive partial match)
 * @param {string} query - Search term
 * @returns {Array} Matching products
 */
export function searchProducts(query) {
  const normalized = String(query).toLowerCase();
  return products.filter((product) =>
    product.name.toLowerCase().includes(normalized)
  );
}

/**
 * Check if a product has enough stock for the requested quantity
 * @param {number} productId - Product ID
 * @param {number} quantity - Desired quantity
 * @returns {boolean} true if sufficient stock exists
 */
export function checkStock(productId, quantity) {
  const product = getProductById(productId);
  return Boolean(product && quantity > 0 && product.stock >= quantity);
}

/**
 * Reduce a product's stock after purchase
 * @param {number} productId - Product ID
 * @param {number} quantity - Quantity to deduct
 * @returns {object} Result with success flag and message
 */
export function reduceStock(productId, quantity) {
  const product = getProductById(productId);

  if (!product) {
    return { success: false, message: "Product not found" };
  }
  if (quantity <= 0) {
    return { success: false, message: "Quantity must be greater than 0" };
  }
  if (product.stock < quantity) {
    return { success: false, message: "Insufficient stock" };
  }

  // Deduct stock
  product.stock -= quantity;
  return { success: true, message: "Stock updated successfully" };
}
