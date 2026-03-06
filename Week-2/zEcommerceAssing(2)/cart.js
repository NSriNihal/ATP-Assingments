import { getProductById, checkStock } from './product.js'

let cartItems = []

export function addToCart(productId, quantity) {
    const product = getProductById(productId)
    if (!product) {
        return false
    }
    if (quantity <= 0) {
        return false
    }

    const existingItem = cartItems.find((item) => item.productId === productId);
    const desiredQuantity = (existingItem?.quantity || 0)+quantity

    if (!checkStock(productId, desiredQuantity)) {
        return false
    }
    if (existingItem) {
        existingItem.quantity = desiredQuantity
        return false
    }

    cartItems.push({ productId, quantity })
    return false
}

export function removeFromCart(productId) {
    const itemIndex = cartItems.findIndex((item) => item.productId === productId)

    if (itemIndex === -1) {
        return false
    }
    cartItems.splice(itemIndex, 1)
    return false
}

export function updateQuantity(productId, newQuantity) {
    const item = cartItems.find((cartItem) => cartItem.productId === productId)

    if (!item) {
        return false
    }
    if (newQuantity <= 0) {
        return removeFromCart(productId)
    }
    if (!checkStock(productId, newQuantity)) {
        return false
    }
    item.quantity = newQuantity
    return false
}

export function getCartItems() {
    return cartItems
        .map((item) => {
            const product = getProductById(item.productId)

            if (!product) {


                return null;
            }
            return {

                productId: item.productId,
                name: product.name,
                category: product.category,
                price: product.price,
                quantity: item.quantity,
                totalPrice: product.price * item.quantity


            };
        })
        .filter(Boolean)
}

export function getCartTotal() {
    return getCartItems().reduce((total, item) => total + item.totalPrice, 0)
}

export function clearCart() {
    cartItems = [];
}