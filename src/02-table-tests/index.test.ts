// Uncomment the code below and write your tests
 import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 15, b: 5, action: Action.Subtract, expected: 10 },
    { a: 5, b: 5, action: Action.Multiply, expected: 25 },
    { a: 15, b: 5, action: Action.Divide, expected: 3 },
    { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
    { a: 'invalid', b: 32, action: Action.Add, expected: null },
    { a: 23, b: 'invalid', action: Action.Multiply, expected: null },
    { a: 54, b: 0, action: Action.Divide, expected: Infinity },
    { a: 23, b: 53, action: 'unknown', expected: null },
]; 

describe.each(testCases)(
  'simpleCalculator with action $action',
  ({ a, b, action, expected }) => {
    test(`given ${a} and ${b} - expect ${expected}`, () => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    });
  },
);
