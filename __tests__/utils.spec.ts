import { isCallback, isNumber } from '../utils';

describe('Utils', function () {
  it('should validate a callback function', () => {
    expect(isCallback(function () {})).toBe(true);
  });

  it('should note validate a callback function', () => {
    expect(isCallback(Object.create(null))).toBe(false);
  });

  it('should validate a number string', () => {
    expect(isNumber('0123456789')).toBe(true);
  });

  it('should note validate a string', () => {
    expect(isCallback('12ff')).toBe(false);
  });
});
