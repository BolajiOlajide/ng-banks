import banks from './banks';
import { isCallback, isNumber } from './utils';

import type { Bank, Callback } from './types';

class NGBanks {
  private _cache: Record<string, Bank> = {};
  protected readonly store: Array<Bank> = [];

  constructor() {
    this.store = banks;
  }

  /**
   * `.getBanks`
   *
   * @param {Callback} callback
   * @return {Array|Function}
   */
  public getBanks(callback?: Callback<Array<Bank>>): Array<Bank> | void {
    if (callback && isCallback(callback)) {
      return callback(null, this.store);
    }

    return this.store;
  }

  /**
   * `.getBank`
   *
   * @param {String} param
   * @param {Callback} callback
   * @return {Object|Function}
   */
  public getBank(codeOrSlug: string, callback?: Callback<Bank>): void | Bank | undefined {
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
