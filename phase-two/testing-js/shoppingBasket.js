const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.basket = []
  }

  addItem(item) {
    this.basket.push(item);
  }
  getTotalPrice() {
    let sum = 0
    this.basket.forEach( item => {
      sum += item.getPrice()
    })
    return sum
  }
}

module.exports = ShoppingBasket;