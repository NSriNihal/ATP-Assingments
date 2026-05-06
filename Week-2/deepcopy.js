/**
 * Hands-On 2: Deep Copy (Isolation & Safety Use Case)
 * 
 * Topic: structuredClone — Deep Copy
 * 
 * Task:
 *   1. Create a deep copy of an order object
 *   2. Modify the copied object's nested properties
 *   3. Verify the original object remains completely unchanged
 * 
 * Key Takeaway: structuredClone() creates a completely independent copy
 *               at all levels — unlike spread (...) which is shallow.
 */

const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085,
    },
  },
  items: [{ product: "Laptop", price: 70000 }],
};

// Create a deep copy using structuredClone (available in Node.js 17+)
let copyOrder = structuredClone(order);

// Modify nested properties in the copy
copyOrder.customer.address.city = "chennai"; // Changing nested address
copyOrder.items[0].price = 1000; // Changing nested array element

// Verify: original object should remain completely unchanged
console.log("Original order:", order);
// order.customer.address.city is still "Hyderabad"
// order.items[0].price is still 70000

console.log("Copied order:", copyOrder);
// copyOrder.customer.address.city is "chennai"
// copyOrder.items[0].price is 1000
