const banks = require('./banks');

module.exports = {
  getBanks: () => {
    return banks;
  },
  getBank: code => {

    const result = banks.filter( bank =>  bank.code === code )
    const singleBank = result[0] === undefined ? "A bank with this code does not exist" : result[0]
    return singleBank

  }
}
