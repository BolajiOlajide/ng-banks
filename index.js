const banks = require('./banks');

module.exports = {
  getBanks: function() {
    return banks;
  },

  getBank: function (param) {
    const isSlug = isNaN(param);
    const queryType = isSlug ? 'slug' : 'code';

    return banks.find(function(bank) {
      if (bank[queryType] === param) {
        return bank;
      }
    })
  }
}
