// wallet provider module
const HDWalletProvider = require("truffle-hdwallet-provider");
// Web3 constructor function
const Web3 = require("web3");
// get the compiled contract of DreamFactory, which will be deployed
const factory_contract = require("./build/DreamFactory.json");
// create a provider
const provider = new HDWalletProvider(
  // put your seed words from metamask
  "seed word",
  // put your infura api key for rinkeby
  "https://rinkeby.infura.io/v3/token"
);
// get the web3 instance using the provider
const web3 = new Web3(provider);
// to use async functionality, it should be inside a function
// async function means the function runs asynchronously.
// like it runs separately from the main event loop. no sync with the main event loop.
// sync function means the function holds the event loop to sync
const deploy = async () => {
  // get all accounts generated from the seed words
  // await means it waits for the result since the handling smart contract takes time.
  const accounts = await web3.eth.getAccounts();

  console.log(
    "balance of accounts[0]: ",
    await web3.eth.getBalance(accounts[0])
  );

  // console log for deployment. use use the first account to deploy the contract
  console.log("Attempting to deploy from account", accounts[0]);
  // create a new contract instance and deploy it
  // web3 does know not about json file but javascript object, so need to parse the json file
  const deployed_factory = await new web3.eth.Contract(
    JSON.parse(factory_contract.interface)
  )
    // deploy the contract using the bytecode
    .deploy({ data: "0x" + factory_contract.bytecode })
    // use the accounts[0] to execute the deployment
    .send({ from: accounts[0] });
  // consonle log for the deployed contract address
  console.log(
    "DreamFactory contract deployed to",
    deployed_factory.options.address
  );
};

// now call the deploy function to deploy the contract
deploy();
