const fizzbuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else if (num % 3 === 0){
    return "fizz";
  } else {
    return num
  }
};

console.log(fizzbuzz(3))
console.log(fizzbuzz(5))
console.log(fizzbuzz(8))
console.log(fizzbuzz(15))
console.log(fizzbuzz(18))
console.log(fizzbuzz(20))

module.exports = fizzbuzz;