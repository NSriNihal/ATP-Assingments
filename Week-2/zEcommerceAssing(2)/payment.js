import { reduceStock } from './product.js'
import { getCartItems, getCartTotal, clearCart } from './cart.js'
import { applyDiscount } from './discount.js'

export function processPayment(paymentMethod, couponCode = null) {
    const items = getCartItems();

    if (items.length === 0) {
        return {
            orderId: null,
            items: [],
            subtotal: 0,
            discount: 0,
            total: 0,
            paymentMethod,
            status: 'failed',
            message: 'Cart is empty'
        };
    }

    if (!validatePaymentMethod(paymentMethod)) {
        return {
            orderId: null,
            items,
            subtotal: getCartTotal(),
            discount: 0,
            total: getCartTotal(),
            paymentMethod,
            status: 'failed',
            message: 'Invalid payment method. Use card, upi, or cod'
        };
    }

    const subtotal = getCartTotal()
    const discountResult = applyDiscount(subtotal, couponCode, items)

    for (const item of items) {
        const stockResult = reduceStock(item.productId, item.quantity)

        if (!stockResult.success) {
            return {
                orderId: null,
                items,
                subtotal,
                discount: 0,
                total: subtotal,
                paymentMethod,
                status: 'failed',
            
            }
        }
    }

    clearCart()

    return {
        orderId: generateOrderId(),
        items,
        subtotal: discountResult.originalTotal,
        discount: discountResult.discount,
        total: discountResult.finalTotal,
        paymentMethod,
        status: 'success',
        message: discountResult.message
    }
}

export function validatePaymentMethod(method) {
    const validMethods = ['card', 'upi', 'cod']
    return validMethods.includes(method);
}

function generateOrderId() {
    return `ORD${Date.now()}`
}