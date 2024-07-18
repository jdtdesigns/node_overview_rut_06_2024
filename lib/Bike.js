const Vehicle = require('./Vehicle');

class Bike extends Vehicle {
  constructor(tireAmount, color, brakeSystem, gears) {
    super(tireAmount, color);

    this.brakeSystem = brakeSystem;
    this.gears = gears;
  }

  getInfo() {
    return `My bike has a ${this.brakeSystem} brake system and is ${this.color} in color.`
  }
}

module.exports = Bike;