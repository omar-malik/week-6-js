const Candy = require('./candy')

describe('Candy', () => {
  it('returns the name Mars with a price 4.99', () => {
    const candy = new Candy('Mars', 4.99);

    expect(candy.getName()).toBe('Mars')
    expect(candy.getPrice()).toBe(4.99)
  })
})