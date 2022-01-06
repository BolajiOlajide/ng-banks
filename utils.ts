/**
 * Check if `fn` is a function.
 *
 * @param {Function} fn
 * @return {Boolean}
 */
export const isCallback = function (arg: any) {
  return typeof arg === 'function';
}

/**
 * Check if `val` is a number.
 *
 * @param {Number} val
 * @return {Boolean}
 */
export const isNumber = function (val: string): boolean {
  return !isNaN(parseInt(val, 10));
}
