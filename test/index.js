const assert = require('assert');
const fs = require('fs');

const ngBanks = require('..');

describe('NGBank', function() {
  let banks = [];

  before(function(done) {
    banks = JSON.parse(
      fs.readFileSync(process.cwd() + '/db/banks.json', 'utf8')
    );
    done();
  });

  it('should getbanks', function(done) {
    assert.deepStrictEqual(ngBanks.getBanks(), banks);
    done();
  });

  it('should getbanks with callback', function(done) {
    ngBanks.getBanks(function(err, data) {
      assert.deepStrictEqual(data, banks);
      done();
    });
  });

  it('should getbank', function(done) {
    assert.deepStrictEqual(ngBanks.getBank('EPB'), {
      name: 'ENTERPRISE BANK',
      code: '084',
      slug: 'EPB',
      ussd: {
        code: null
      }
    });
    done();
  });

  it('should getbank with callback', function(done) {
    ngBanks.getBank('EPB', function(err, data) {
      assert.deepStrictEqual(data, {
        name: 'ENTERPRISE BANK',
        code: '084',
        slug: 'EPB',
        ussd: {
          code: null
        }
      });
    });
    done();
  });

  it('should have getbank in memory [EPB]', function(done) {
    ngBanks.getBank('EPB');
    assert.deepStrictEqual(ngBanks.store['EPB'], {
      name: 'ENTERPRISE BANK',
      code: '084',
      slug: 'EPB',
      ussd: {
        code: null
      }
    });
    done();
  });

  it('should have getbank in memory [063]', function(done) {
    ngBanks.getBank('063');
    assert.deepStrictEqual(ngBanks.store['063'], {
      name: 'DIAMOND BANK PLC',
      code: '063',
      slug: 'DMB',
      ussd: {
        code: '*710#'
      }
    });
    done();
  });

  it('should have both [EPB] and [063] in memory', function(done) {
    assert.deepStrictEqual(ngBanks.store, {
      EPB: {
        name: 'ENTERPRISE BANK',
        code: '084',
        slug: 'EPB',
        ussd: {
          code: null
        }
      },
      '063': {
        name: 'DIAMOND BANK PLC',
        code: '063',
        slug: 'DMB',
        ussd: {
          code: '*710#'
        }
      }
    });
    done();
  });

  it('should have empty memory', function(done) {
    assert.strictEqual(ngBanks.reset(), true);
    assert.deepStrictEqual(ngBanks.store, {});
    done();
  });

  // TODO: add test to mock and handle JSON parsing error
  it('should parse the banks JSON correctly', function(done) {
    fs.readFile(process.cwd() + '/db/banks.json', 'utf8', (err, data) => {
      const hasError = err ? true : false;
      const parsedData = JSON.parse(data);
      assert.deepStrictEqual(parsedData, banks);
      assert.strictEqual(
        hasError,
        false,
        'Error encountered while prsing JSON'
      );
    });
    done();
  });
});
