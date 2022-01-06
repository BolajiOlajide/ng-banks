import banks from './banks';
import { isCallback, isNumber } from './utils';

import type { Bank } from './types';

class NGBanks {
  private _cache: Record<string, Bank> = {};
  protected readonly store: Array<Bank> = [];

  constructor() {
    this.store = banks;
  }

  /**
   * `.getBanks`
   *
   * @param {Function} callback
   * @return {Array|Function}
   */
  public getBanks(callback?: Function): Array<Bank> | Function {
    if (callback && isCallback(callback)) {
      return callback(null, this.store);
    }

    return this.store;
  }

  /**
   * `.getBank`
   *
   * @param {String} param
   * @param {Function} callback
   * @return {Object|Function}
   */
  public getBank(codeOrSlug: string, callback?: Function): Bank | undefined {
    if (!codeOrSlug) {
      return undefined;
    }

    const isNumericParam = isNumber(codeOrSlug);
    const queryType = isNumericParam ? 'code' : 'slug';

    if (this._cache[codeOrSlug]) {
      const bank = this._cache[codeOrSlug];

      if (callback && isCallback(callback)) {
        return callback(null, bank);
      }

      return bank;
    }

    return this.store.find((bank) => {
      if (bank[queryType] === codeOrSlug) {
        this._cache[bank.slug] = bank;

        if (callback && isCallback(callback)) {
          return callback(null, bank);
        }

        return bank;
      }
    })
  }

  /**
   * `.reset` test only maybe?
   *
   * @return {Boolean}
   */

  public reset(): void {
    this._cache = {};
  };
}

export default new NGBanks();
