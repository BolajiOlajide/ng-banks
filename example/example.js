const ngBanks = require('../');

console.log('returns all banks', ngBanks.getBanks());

console.log('returns a single bank: ', ngBanks.getBank('UBA'));