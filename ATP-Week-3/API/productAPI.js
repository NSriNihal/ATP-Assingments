/**
 * Product API Router — CRUD Operations for Products
 * 
 * Part of: Week 3 Express.js REST API
 * 
 * Endpoints:
 *   GET    /product-api/products        → Read all products
 *   GET    /product-api/products/:brand → Read products by brand
 *   POST   /product-api/products        → Create a new product
 *   PUT    /product-api/products/:id    → Update a product by ID
 *   DELETE /product-api/products/:id    → Delete a product by ID
 * 
 * Includes price validation: products must be between ₹10,000 and ₹50,000
 * 
 * Note: Uses in-memory array (no database). Data resets on server restart.
 */

import exp from "express";
export const productApp = exp.Router();

// In-memory product storage
let products = [];

/**
 * Validates that the product price is within the acceptable range
 * @param {number|string} price - Product price to validate
 * @returns {string|undefined} Error message if invalid, undefined if valid
 */
function validatePrice(price) {
  const parsedPrice = Number(price);

  if (parsedPrice < 10000) {
    return "Min price is 10000";
  }
  if (parsedPrice > 50000) {
    return "Max price is 50000";
  }
  // Returns undefined (falsy) if price is valid
}

/**
 * GET /products — Read all products
 */
productApp.get("/products", (req, res) => {
  res.json({ message: "All Products", payload: products });
});

/**
 * GET /products/:brand — Read products filtered by brand name
 */
productApp.get("/products/:brand", (req, res) => {
  let brandName = req.params.brand;
  let product = products.find((prodObj) => prodObj.brand == brandName);

  if (product == undefined) {
    return res.json({ message: "Product not found" });
  }

  res.json({ message: "Product Information", payload: product });
});

/**
 * POST /products — Create a new product
 * Validates price before adding to the collection
 */
productApp.post("/products", (req, res) => {
  const newProduct = req.body;

  // Validate price range
  const priceError = validatePrice(newProduct.price);
  if (priceError) {
    return res.status(400).json({ message: priceError });
  }

  newProduct.price = Number(newProduct.price);
  products.push(newProduct);
  res.json({ message: "Product Added" });
});

/**
 * PUT /products/:id — Update an existing product by ID
 * Validates price before updating
 */
productApp.put("/products/:id", (req, res) => {
  let idOfProduct = Number(req.params.id);
  let modifiedProduct = req.body;

  // Validate price range
  const priceError = validatePrice(modifiedProduct.price);
  if (priceError) {
    return res.status(400).json({ message: priceError });
  }

  modifiedProduct.price = Number(modifiedProduct.price);

  // Fixed: was comparing prodId.id === idOfProduct.id (idOfProduct is a number, not object)
  let index = products.findIndex((prodObj) => prodObj.id === idOfProduct);
  if (index === -1) {
    return res.json({ message: "product not found" });
  }

  products.splice(index, 1, modifiedProduct);
  res.json({ message: "Product updated" });
});

/**
 * DELETE /products/:id — Delete a product by ID
 */
productApp.delete("/products/:id", (req, res) => {
  let idOfProduct = Number(req.params.id);
  let index = products.findIndex((prodObj) => prodObj.id === idOfProduct);

  if (index === -1) {
    return res.json({ message: "product not found" });
  }

  products.splice(index, 1);
  res.json({ message: "Product Deleted" });
});
