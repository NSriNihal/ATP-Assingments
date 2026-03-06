import { getAllProducts, searchProducts, getProductsByCategory } from './product.js'
import { addToCart, getCartItems, getCartTotal, updateQuantity, removeFromCart } from './cart.js'
import { processPayment } from './payment.js'

console.log('ECommerce Store\n')
console.log('All Products:')
console.log(getAllProducts())
console.log('\nElectronics Products:')
console.log(getProductsByCategory('electronics'))
console.log('\nSearching for phone:')
console.log(searchProducts('phone'))
console.log('\nAdding to Cart')
console.log(addToCart(1, 2))
console.log(addToCart(3, 3))
console.log(addToCart(1, 1))



                          


