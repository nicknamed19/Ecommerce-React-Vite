/**
 * This function calculates total price of a new order
 * @param {Array} products products cartProduct: Array of Objects
 * @returns {number} Total price
 */

function totalPrice(products) {
    let total = 0
    products.forEach((product) => total += product.price)
    return total.toFixed(2)
}

export { totalPrice }