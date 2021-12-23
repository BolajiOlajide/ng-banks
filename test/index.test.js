const assert = require('assert');

const ngBanks = require('..');
const banks = require('../db/banks.json');

describe('NGBank', function() {
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
    assert.deepEqual(ngBanks.getBank('EBN'), {
      "name": "ECOBANK NIGERIA PLC",
      "code": "050",
      "slug": "EBN",
      "ussd": {
        "code": "*326#"
      }
    });
    done();
  });

  it('should getbank with callback', function(done) {
    ngBanks.getBank('EBN', function(err, data) {
      assert.deepEqual(data, {
        "name": "ECOBANK NIGERIA PLC",
        "code": "050",
        "slug": "EBN",
        "ussd": {
          "code": "*326#"
        }
      });
    });
    done();
  });

  it('should have getbank in memory [EBN]', function(done) {
    ngBanks.getBank('EBN');
    assert.deepEqual(ngBanks.store['EBN'], {
      "name": "ECOBANK NIGERIA PLC",
      "code": "050",
      "slug": "EBN",
      "ussd": {
        "code": "*326#"
      }
    });
    done();
  });

  it('should have getbank in memory [063]', function(done) {
    ngBanks.getBank('063');
    assert.deepEqual(ngBanks.store['063'], {
      "name": "ACCESS(DIAMOND) BANK PLC",
      "code": "063",
      "slug": "DMB",
      "ussd": {
        "code": "*710#"
      }
    });
    done();
  });

  it('should have both [EBN] and [063] in memory', function(done) {
    assert.deepEqual(ngBanks.store, {
      "EBN": {
        "name": "ECOBANK NIGERIA PLC",
        "code": "050",
        "slug": "EBN",
        "ussd": {
          "code": "*326#"
        }
      },
      "063": {
        "name": "ACCESS(DIAMOND) BANK PLC",
        "code": "063",
        "slug": "DMB",
        "ussd": {
          "code": "*710#"
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
});
