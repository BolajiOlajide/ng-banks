# NG-BANKS

[![NPM](https://nodei.co/npm/ng-banks.png)](https://nodei.co/npm/ng-banks/)
[![npm version](https://badge.fury.io/js/ng-banks.svg)](https://badge.fury.io/js/ng-banks)
[![Build Status](https://travis-ci.org/BolajiOlajide/ng-banks.svg?branch=master)](https://travis-ci.org/BolajiOlajide/ng-banks)

NG-BANKS is a lightweight zero-dependency npm package that can be used to get the [list](https://www.cbn.gov.ng/Supervision/Inst-DM.asp) of banks in my great country, Nigeria.

## Installation

```bash
> npm install ng-banks --save
```

### Usage

The package is very simple and as of the time of writing has only one method which is to get a list of banks, their corresponding shortcode and their USSD code.

The list of banks contains all banks recognized by the Central Bank of Nigeria (CBN).

Now that we've gotten this out of the way here's an example

```js
const ngBanks = require('ng-banks');

const banks = ngBanks.getBanks();

// get bank by slug or code
console.log(ngBanks.getBank('EBN')); // { name: 'ECOBANK NIGERIA PLC', code: '050', slug: 'EBN', ussd: {code: '*326#' } }
console.log(ngBanks.getBank('063')); // { name: 'ACCESS(DIAMOND) BANK PLC', code: '063', slug: 'DMB', ussd: {code: '*710#' } }

ngBanks.getBank('EBN', function(err, bank) {
  console.log(err, bank); // { name: 'ECOBANK NIGERIA PLC', code: '050', slug: 'EBN', ussd: {code: '*326#' } }
});
ngBanks.getBank('063', function(err, bank) {
  console.log(err, bank); // { name: 'ACCESS(DIAMOND) BANK PLC', code: '063', slug: 'DMB', ussd: {code: '*710#' } }
});
```

### CONTRIBUTORS

See also the list of [contributors](https://github.com/BolajiOlajide/ng-banks/contributors) who have contributed to this project.

### License

MIT
