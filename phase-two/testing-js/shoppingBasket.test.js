const Candy = require('./candy');
const ShoppingBasket = require('./shoppingBasket');

describe('Shopping Basket', () => {
  it('returns total price of 0', () => {
    const basket = new ShoppingBasket();

    expect(basket.getTotalPrice()).toEqual(0);
  });

  it('returns price of 4.99', () => {
    const candy = new Candy('Mars', 4.99);
    const basket = new ShoppingBasket();
    basket.addItem(candy);

    expect(basket.getTotalPrice()).toEqual(4.99);
  });

  it('returns total price of 12.97', () => {
    const candy = new Candy('Mars', 4.99);
    const basket = new ShoppingBasket();
    basket.addItem(candy);
    basket.addItem(new Candy('Skittle', 3.99));
    basket.addItem(new Candy('Skittle', 3.99));
    expect(basket.getTotalPrice()).toEqual(12.97);
  })
})