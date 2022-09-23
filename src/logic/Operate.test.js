import operate from './operate';

test('should take two numbers and an operation and retrun the result', () => {
  expect(operate(10, 2, '+')).toBe('12');
  expect(operate(10, 2, '-')).toBe('8');
  expect(operate(10, 2, 'x')).toBe('20');
  expect(operate(10, 2, '÷')).toBe('5');
  expect(operate(11, 2, '%')).toBe('1');
  expect(operate(1, 2, '÷')).toBe('0.5');
  expect(operate(10, 0, '÷')).toBe("Can't divide by 0.");
  expect(operate(10, -2, '÷')).toBe('-5');
  expect(operate(10, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
});
