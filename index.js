const fs = require('fs');
const banksDB = require("./db/banks.json");

/**
 * `NGBanks`.
 *
 * @param {Null}
 * @return {Instance}
 */
module.exports = new NGBanks();


function NGBanks() {
  this.store = {};
  this.error = null;

  try {
    this.banks = banksDB;
  } catch(e) {
    this.error = e;
  }
}

/**
 * `.getBanks`
 *
 * @param {Function} callback
 * @return {Array|Function}
 */

NGBanks.prototype.getBanks = function(callback) {
  if (this.isCallback(callback)) {
    return callback(this.error, this.banks);
  }

  return this.banks;
};

/**
 * Check if `val` is a number.
 *
 * @param {Number} val
 * @return {Boolean}
 */

NGBanks.prototype.isNumber = function(val) {
  return isNaN(val)
}

/**
 * Check if `fn` is a function.
 *
 * @param {Function} fn
 * @return {Boolean}
 */

NGBanks.prototype.isCallback = function(fn) {
  return typeof fn === 'function';
}

/**
 * `.getBank`
 *
 * @param {String} param
 * @param {Function} callback
 * @return {Object|Function}
 */

NGBanks.prototype.getBank = function(param, callback) {
  if (!param) {
    return {};
  }

  const isSlug = this.isNumber(param);
  const queryType = isSlug ? 'slug' : 'code';

  if (this.store[param]) {
    const bank = this.store[param];

    if (this.isCallback(callback)) {
      return callback(this.error, bank);
    }

    return bank;
  }

  return this.banks.find(function(bank) {
    if (bank[queryType] === param) {
      this.store[param] = bank;

      if (this.isCallback(callback)) {
        return callback(this.error, bank);
      }

      return bank;
    }
  }, this);
};

/**
 * `.reset` test only maybe?
 *
 * @return {Boolean}
 */

NGBanks.prototype.reset = function() {
  this.store = {};
  return true;
};
