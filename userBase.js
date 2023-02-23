const User = require('./classes')

class UserBase {
  constructor(users) {
    this.users = users;
  }


  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map(x => x.getName());
  }

  getIntroductions() {
    return this.users.map(x => `Hi, my name is ${x.getName()}`);
  }
}

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];
const userBase = new UserBase(users);

console.log(userBase.users);
console.log(userBase.count());
console.log(userBase.getNames());
console.log(userBase.getIntroductions());