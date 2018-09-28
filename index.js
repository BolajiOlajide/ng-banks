const banks = require('./banks');

module.exports = {
  getBanks: function() {
    return banks;
  },
  getBank: code => {
  	let OneBank = null
  	let allBanks = [...banks]
  	try{
  		allBanks.forEach( singleBank => { singleBank.code === code ? OneBank = singleBank : "Invalid bank code" })
  		return OneBank
  	}catch(error){
  		return "Something went wrong"
  	}
  }
}
