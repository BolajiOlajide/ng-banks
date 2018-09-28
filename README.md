# NG-BANKS

[![NPM](https://nodei.co/npm/ng-banks.png)](https://nodei.co/npm/ng-banks/)
[![npm version](https://badge.fury.io/js/ng-banks.svg)](https://badge.fury.io/js/ng-banks)

NG-BANKS is a lightweight zero-dependency npm package that can be used to get the list of banks in my great country, Nigeria.

## Installation

```bash
> npm install ng-banks --save
```

### Usage

The package is very simple and as of the time of writing has only one method which is to get a list of banks and their corresponding shortcode.

The list of banks contains all banks recognized by the Central Bank of Nigeria (CBN).

Now that we've gotten this out of the way here's an example

```js
const ngBanks = require('ng-banks');

const banks = ngBanks.getBanks();
const singleBank = ngBanks.getBank('UBA');
```

### License

MIT
