import ngBanks from '..';
import banks from '../banks';
import { Bank } from '../types';

describe('NGBank', function() {
  it('should getbanks', () => {
    expect(ngBanks.getBanks()).toHaveLength(banks.length);
  });

  it('should getbanks with callback', (done) => {
    ngBanks.getBanks(function(err, data) {
      expect(err).toBeNull();
      expect(ngBanks.getBanks()).toHaveLength(banks.length);

      done();
    });
  });

  it('should getbank', () => {
    expect(ngBanks.getBank('EBN')).toEqual({
      "name": "ECOBANK NIGERIA PLC",
      "code": "050",
      "slug": "EBN",
      "ussd": {
        "code": "*326#"
      }
    });
  });

  it('should getbank with callback', function(done) {
    expect(ngBanks.getBank('EBN', (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual({
        "name": "ECOBANK NIGERIA PLC",
        "code": "050",
        "slug": "EBN",
        "ussd": {
          "code": "*326#"
        }
      });

      done();
    }));
  });
});
