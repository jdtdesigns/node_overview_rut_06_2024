const Bike = require('./lib/Bike');
const Motorcycle = require('./lib/Motorcycle');

const rad = new Bike(1, 'green', 'Shimano', 7);
const ninja = new Motorcycle(2, 'red', 'cool', 'dirt');

const radTireAmount = rad.getTireAmount();
const ninjaTireAmount = ninja.getTireAmount();

console.log(radTireAmount);
console.log(ninjaTireAmount);
