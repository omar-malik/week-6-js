class Candy {
  constructor(candyName, price) {
    this.candyName = candyName;
    this.price = price;
  }

  getName() {
    return this.candyName;
  }

  getPrice() {
    return this.price;
  }

}

const mars = new Candy('mars', 4.99);
module.exports = Candy;