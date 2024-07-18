const Bike = require('../lib/Bike');

describe('Dummy Tests', () => {
  it('Should add 1 + 1', () => {
    const sum = 1 + 1;

    expect(sum).toBe(2);
  });

  it('Should capitalize a string', () => {
    const cap = str => str[0].toUpperCase() + str.slice(1)

    expect(cap('bob')).toBe('Bob')
  });
});

describe('Bike Tests', () => {
  it('Should return an expected instance object', () => {
    const mongoose = new Bike(2, 'yellow', 'Shimano', 10);

    const example = {
      tireAmount: 2,
      color: 'yellow',
      brakeSystem: 'Shimano',
      gears: 10
    };

    expect(mongoose).toEqual(example);
  });

  it('Should return the correct info', () => {
    const mongoose = new Bike(2, 'yellow', 'Shimano', 10);

    const result = 'My bike has a Shimano brake system and is yellow in color.';

    expect(mongoose.getInfo()).toBe(result);
  });
})
