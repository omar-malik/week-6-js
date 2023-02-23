const checkLength = (number) => {
 return (number.length <= 10);
}

const filterLongNumbers = (array) => {
  return array.filter(checkLength);
}

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd'
];

console.log(filterLongNumbers(numbers));
console.log(filterLongNumbers([]));

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages = (nameAndDiscount) => {
  return `Hi ${nameAndDiscount.name}! ${nameAndDiscount.discount}% off our best candies for you today!`;
}

console.log(namesAndDiscounts.map(generateMessages));

