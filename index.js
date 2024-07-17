class User {
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  getAge() {
    return this.age;
  }

  haveBirthday() {
    this.age++;
  }
}

const jd = new User('JD', 44, ['pickleball', 'fishing']);
const bob = new User('Bob', 99, ['bingo', 'sit on the porch']);

console.log(bob);

