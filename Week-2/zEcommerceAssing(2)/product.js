// Product database (simulated)
const products = [
    { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
    { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
    { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
    { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
    { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

export function getProductById(id) {
    return products.find((product) => product.id === id) || null;
}

export function getAllProducts() {
    return products;
}

export function getProductsByCategory(category) {
    const normalized = String(category).toLowerCase()
    return products.filter((product) => product.category.toLowerCase() === normalized)
}

export function searchProducts(query) {
    const normalized = String(query).toLowerCase()
    return products.filter((product) => product.name.toLowerCase().includes(normalized))
}

export function checkStock(productId, quantity) {
    const product = getProductById(productId);
    return Boolean(product && quantity > 0 && product.stock >= quantity)
}

export function reduceStock(productId, quantity) {
    const product = getProductById(productId);

    if (!product) {
        return { success: false, message: 'Product not found' }
    }

    if (quantity <= 0) {
        return { success: false, message: 'Quantity must be greater than 0' }
    }

    if (product.stock < quantity) {
        return { success: false, message: 'Insufficient stock' }
    }

    product.stock -= quantity;
    return { success: true, message: 'Stock updated successfully' }
}

