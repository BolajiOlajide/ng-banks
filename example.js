const ngBanks = require('./');

// get all banks
console.log(ngBanks.getBanks());
ngBanks.getBanks(function(err, banks) {
  console.log(err, banks);
});

// get bank by slug or code
console.log(ngBanks.getBank('EPB')); // { name: 'ENTERPRISE BANK', code: '084', slug: 'EPB' }
console.log(ngBanks.getBank('063')); // { name: 'DIAMOND BANK PLC', code: '063', slug: 'DMB' }
ngBanks.getBank('063', function(err, bank) {
  console.log(bank);
});
