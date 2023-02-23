const Candy = require('./candy')

class ShoppingBasket {
  constructor() {
    this.basketContents = [];
  }

  addItem(candy) {
    this.basketContents.push(candy);
  }
  sum = 0;
  getTotalPrice() {
    return this.basketContents.map(item => item.price).reduce((a,b) => a + b, 0);
  }
}

const candy = new Candy('Mars', 4.99);

const basket = new ShoppingBasket();

basket.addItem(candy);
basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));
console.log(basket.basketContents[0].candyName)
console.log(basket.getTotalPrice());

module.exports = ShoppingBasket;