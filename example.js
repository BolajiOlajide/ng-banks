const ngBanks = require('./');

// get all banks
console.log(ngBanks.getBanks());

// get bank by slug or code
console.log(ngBanks.getBank('EPB')); // { name: 'ENTERPRISE BANK', code: '084', slug: 'EPB' }
console.log(ngBanks.getBank('063')); // { name: 'DIAMOND BANK PLC', code: '063', slug: 'DMB' }