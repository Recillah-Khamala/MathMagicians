import calculate from './calculate';

describe('calculate', () => {
  test('should return an object', () => {
    const data = {
      total: '21',
      next: '7',
      operation: null,
    };
    const result = { total: '7', next: null, operation: '/' };
    expect(calculate(data, '/')).toEqual(result);
  });

  test('should return an object', () => {
    const data = {
      total: '3',
      next: '4',
      operation: null,
    };
    const result = { total: null, next: null, operation: null };
    expect(calculate(data, 'AC')).toEqual(result);
  });

  test('should return an object', () => {
    const data = {
      total: '2',
      next: '2',
      operation: '+',
    };
    const result = { total: '4', next: null, operation: null };
    expect(calculate(data, '=')).toEqual(result);
  });

  test('should return an object', () => {
    const data = {
      total: '-8',
      next: null,
      operation: null,
    };
    const result = { total: '8', next: null, operation: null };
    expect(calculate(data, '+/-')).toEqual(result);
  });

  test('should return an object', () => {
    const data = {
      total: '4',
      next: '2.0',
      operation: null,
    };
    const result = { total: '4', next: '2.0', operation: null };
    expect(calculate(data, '.')).toEqual(result);
  });

});
