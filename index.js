const banks = require('./banks');

module.exports = {
  getBanks: () => {
    return banks;
  },
  getBank: code => {

    const singleBank = banks.find( bank =>  bank.code === code )
    return singleBank

  }
}
