const Vehicle = require('./Vehicle');

class Motorcycle extends Vehicle {
  constructor(tireAmount, color, engine, type) {
    super(tireAmount, color);

    this.engine = engine;
    this.type = type;
  }

  getTireAmount() {
    return this.tireAmount + ' brake pad';
  }

  getInfo() {
    return `My motorcyle is ${this.type} bike and is ${this.color} in color.`
  }
}

module.exports = Motorcycle;