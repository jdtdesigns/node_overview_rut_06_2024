// Object Literal
const user = {
  name: 'JD',
  age: 44,
  hobbies: ['pickleball', 'fishing'],
  getAge: function () {
    return this.age;
  },
  haveBirthday: function () {
    this.age++;
  }
};

// user.haveBirthday();


// Constructor Function - Generates Objects
function User(name, age, hobbies) {
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;
}

User.prototype.species = 'human';

User.prototype.getAge = function () {
  return this.age;
}

User.prototype.haveBirthday = function () {
  this.age++;
}

const jd = new User('JD', 44, ['pickleball', 'fishing']);
const bob = new User('Bob', 99, ['bingo', 'sit on the porch']);


console.log(jd.species);
console.log(bob);
// console.log(bob.getAge());
// jd.haveBirthday();
