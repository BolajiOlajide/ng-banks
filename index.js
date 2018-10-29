const banks = require('./banks');

module.exports = {
  getBanks: function() {
    return banks;
  },
  getBank: function(code) {

    const singleBank = banks.find( bank =>  bank.code === code )
    return singleBank

  }
}
