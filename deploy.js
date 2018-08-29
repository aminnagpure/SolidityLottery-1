const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
 
const mnemonic = 'typical sleep great admit genre draft tell victory shadow culture circle great';
const rinkebyApiKey = 'https://rinkeby.infura.io/v3/6e8f26fefd004c09af3328009f326941'


const provider = new HDWalletProvider(mnemonic, rinkebyApiKey, 0, 1);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);


// to fix this bug we added '0x' + bytecode

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: '0x' + bytecode })
    .send({gas: '1000000', from: accounts[0]});

  console.log('Contract deployed to', result.options.address);
};


deploy();




// // the only reason  we're using a function here is to access the asyncronous functionality. 
// const deploy = async () => {
// 	// remember our mnumonic creates many accounts, so we store account(s) in the accounts variable 
// 	const accounts = await web3.eth.getAccounts();

// 	console.log('Attempting to deploy from account', accounts[0]);

// 	// first we create a new contract instance from our already created web3 instance. (new keyword is for Contract, not web3)
// 	// also note we pass in the parsed ABI which we get from our compiler named' interface'. 
// 	await new web3.eth.Contract(JSON.parse(interface))
// 	// deploy with bytecode and an array of any arguments we would like. 
// 	.deploy({ data: bytecode, arguments: ['Hi there!'] })
// 	// send actually deployes to the network. Arguments are (i) gas and (ii) accounts. 
// 	.send({ from: accounts[0], gas: '1000000', });

// 	console.log('Contract deployed to', result.options.address);

// };



// deploy();