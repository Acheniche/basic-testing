// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const res = simpleCalculator({a: 3, b: 54, action: Action.Add});
    expect(res).toBe(57);
  });

  test('should subtract two numbers', () => {
    const res = simpleCalculator({a: 3, b: 54, action: Action.Subtract});
    expect(res).toBe(-51);
  });

  test('should multiply two numbers', () => {
    const res = simpleCalculator({a: 3, b: 54, action: Action.Multiply});
    expect(res).toBe(162);
  });

  test('should divide two numbers', () => {
    const res = simpleCalculator({a: 50, b: 5, action: Action.Divide});
    expect(res).toBe(10);
  });

  test('should exponentiate two numbers', () => {
    const res = simpleCalculator({a: 3, b: 4, action: Action.Exponentiate});
    expect(res).toBe(81);
  });

  test('should return null for invalid action', () => {
    const res = simpleCalculator({a: 3, b: 54, action: 'invalid'});
    expect(res).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const res = simpleCalculator({a: '3', b: 54, action: Action.Add});
    expect(res).toBeNull();
  });
});
