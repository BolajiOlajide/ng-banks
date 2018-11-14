const assert = require('assert');
const fs = require('fs');

const ngBanks = require('..');

describe('NGBank', function() {
  let banks = [];

  before(function(done) {
    banks = JSON.parse(fs.readFileSync(process.cwd() + '/db/banks.json', 'utf8'));
    done();
  });

  it('should getbanks', function(done) {
    assert.deepEqual(ngBanks.getBanks(), banks);
    done();
  });

  it('should getbanks with callback', function(done) {
    ngBanks.getBanks(function(err, data) {
      assert.deepEqual(data, banks);
      done();
    });
  });

  it('should getbank', function(done) {
    assert.deepEqual(ngBanks.getBank('EPB'), {
      "name": "ENTERPRISE BANK",
      "code": "084",
      "slug": "EPB",
      "ussd": {
        "code": null
      }
    });
    done();
  });

  it('should getbank with callback', function(done) {
    ngBanks.getBank('EPB', function(err, data) {
      assert.deepEqual(data, {
        "name": "ENTERPRISE BANK",
        "code": "084",
        "slug": "EPB",
        "ussd": {
          "code": null
        }
      });
    });
    done();
  });

  it('should have getbank in memory [EPB]', function(done) {
    ngBanks.getBank('EPB');
    assert.deepEqual(ngBanks.store['EPB'], {
      "name": "ENTERPRISE BANK",
      "code": "084",
      "slug": "EPB",
      "ussd": {
        "code": null
      }
    });
    done();
  });

  it('should have getbank in memory [063]', function(done) {
    ngBanks.getBank('063');
    assert.deepEqual(ngBanks.store['063'], {
      "name": "DIAMOND BANK PLC",
      "code": "063",
      "slug": "DMB",
      "ussd": {
        "code": "*710#"
      }
    });
    done();
  });

  it('should have both [EPB] and [063] in memory', function(done) {
    assert.deepEqual(ngBanks.store, {
      "EPB": {
        "name": "ENTERPRISE BANK",
        "code": "084",
        "slug": "EPB",
        "ussd": {
          "code": null
        }
      },
      "063": {
        "name": "DIAMOND BANK PLC",
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
    assert.equal(ngBanks.reset(), true)
    assert.deepEqual(ngBanks.store, {});
    done();
  });

  // TODO: add test to mock and handle JSON parsing error
});
