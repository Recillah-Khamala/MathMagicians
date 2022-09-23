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
});
