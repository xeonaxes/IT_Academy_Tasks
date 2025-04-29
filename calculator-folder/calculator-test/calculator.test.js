const Calculator = require('../calculator');

describe('Test calculator functions', () => {
  let calcul;

  beforeEach(() => {
    calcul = new Calculator();
  });

  test('adds numbers', () => {
    expect(calcul.add(5, 5)).toBe(10);
  });

  test('subtracts numbers', () => {
    expect(calcul.subtraction(10, 5)).toBe(5);
  });

  test('multiplies numbers', () => {
    expect(calcul.multiply(5, 5)).toBe(25);
  });

  test('divides numbers', () => {
    expect(calcul.divide(10, 2)).toBe(5);
  });
});

