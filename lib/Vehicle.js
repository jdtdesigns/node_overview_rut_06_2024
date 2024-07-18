class Vehicle {
  constructor(tireAmount, color) {
    this.tireAmount = tireAmount;
    this.color = color;
  }

  getTireAmount() {
    return this.tireAmount;
  }
}

module.exports = Vehicle;