// Available coupons
const coupons = {
    WELCOME10: { type: 'percentage', value: 10, minAmount: 1000 },
    FLAT500: { type: 'flat', value: 500, minAmount: 5000 },
    ELECTRONICS20: { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

export function validateCoupon(couponCode, cartTotal, cartItems) {
    const coupon = coupons[couponCode]

    if (!coupon) {
        return false
    }

    if (cartTotal < coupon.minAmount) {
        return false
    }

    if (coupon.category) {
        const hasRequiredCategory = cartItems.some((item) => item.category === coupon.category)

        if (!hasRequiredCategory) {
            return {
                valid: false,
               
            };
        }
    }

    return true
}

export function calculateDiscount(couponCode, cartTotal) {
    const coupon = coupons[couponCode]

    if (!coupon) {


        return 0;
    }

    if (coupon.type === 'percentage') {


        return (cartTotal * coupon.value) / 100
    }

    if (coupon.type === 'flat') {


        return Math.min(coupon.value, cartTotal)
    }

    return 0;
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
    if (!couponCode) {
        return {
            originalTotal: cartTotal,
            discount: 0,
            finalTotal: cartTotal,
            message: 'No coupon applied'
        }
    }

    const validation = validateCoupon(couponCode, cartTotal, cartItems)

    if (!validation.valid) {
        return {
            originalTotal: cartTotal,
            discount: 0,
            finalTotal: cartTotal,
            message: validation.message
        }
    }

    const discount = calculateDiscount(couponCode, cartTotal)

    return {
        originalTotal: cartTotal,
        discount,
        finalTotal: cartTotal - discount,
        message: `Coupon ${couponCode} applied successfully`
    }
}
