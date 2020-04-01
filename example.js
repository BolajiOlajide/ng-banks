const ngBanks = require('./');

// get all banks
console.log(ngBanks.getBanks());
ngBanks.getBanks(function(err, banks) {
  console.log(err, banks);
});

// get bank by slug or code
console.log(ngBanks.getBank('EBN')); // { name: 'ECOBANK NIGERIA PLC', code: '050', slug: 'EBN', ussd: {code: '*326#' } }
console.log(ngBanks.getBank('063')); // { name: 'ACCESS(DIAMOND) BANK PLC', code: '063', slug: 'DMB', ussd: {code: '*710#' } }
ngBanks.getBank('063', function(err, bank) {
  console.log(bank);
});