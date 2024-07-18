const Motorcycle = require('../lib/Motorcycle');

describe('Motorcyle Tests', () => {
  it('Should return the expected getTireAmount result', () => {
    const ninja = new Motorcycle(2, 'green', '4 stroke', 'dirt');

    const result = ninja.getTireAmount();

    expect(result).toBe('2 brake pad');
  });
});