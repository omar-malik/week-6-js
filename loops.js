for (let i = 1; i <= 20; i++) {
  if (i % 2 === 1) {
    (`${i} is odd`);
  } else if (i % 2 === 0) {
    (`${i} is even`);
  }
};

const fizzbuzzUntil = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0){
      console.log("fizz");
    } else {
      console.log(i)
    }
  }
}

module.exports = fizzbuzzUntil;