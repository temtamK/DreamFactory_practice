// import assert module to test with assertion
const assert = require("assert");
// local ethereum test network
const ganache = require("ganache-cli");
// web3 constructor function. note that it is Web3 not web3
const Web3 = require("web3");
// create web3 instance to connect local test network
const web3 = new Web3(ganache.provider());
// bytecode and api (interface) of compiled contract
const compiled_contract = require("../ethereum/build/Dreamstory.json");

//// global variables
// ethereum accounts
let accounts;
// deployed contract
let dream_story;
//initial values for tests
//initial minimum downldad price to wei
const INIT_MIN_DOWN_PRICE = 100;
// setup code before running a test
beforeEach(async () => {
  // get all the accounts
  accounts = await web3.eth.getAccounts();

  // create a contract instance with arguments and deploy it
  // parse the json interface, so the javascript object can be used for contract
  dream_story = await new web3.eth.Contract(
    JSON.parse(compiled_contract.interface)
  )
    // tell web3 that we want to deploy a new conpy of the contract.
    // do not forget about the arguments that the constructor of the contract requires
    // calling deploy does not deploy the contract, it creates an object to be deployed
    .deploy({
      data: compiled_contract.bytecode,
      arguments: [INIT_MIN_DOWN_PRICE]
    })
    // send transaction that creates the contract
    .send({ from: accounts[0], gas: "1000000" });
});

// test groups
describe("DreamStory", () => {
  // unit test: simply print out the deployed contract object
  it("Deploy a DreamStory contract", () => {
    // print out deployed contract object
    console.log(dream_story);
  });

  it("Deployed contract address", () => {
    // use assert.ok function to check if the address exists
    assert.ok(dream_story.options.address);
    // print out the address
    console.log(dream_story.options.address);
  });
  // unit test: check if the minimum download price is the same as the input
  it("Check minimum download price", async () => {
    // get the minimum_down_price_wei of the contract
    // this uses await since it needs to connect the Contract
    // to get the value of state variable, need to use call() function
    const min_down_price_wei = await dream_story.methods
      .min_down_price_wei()
      .call();

    // check if the state variable min_down_price_wei is equal to the intial value
    assert.equal(min_down_price_wei, INIT_MIN_DOWN_PRICE);
    // print out the min_down_price_wei
    console.log(min_down_price_wei);
  });

  // test contribution value in ether
  const INIT_CONTRIBUTE_ETH = "1";
  // test groups: contribute tests
  describe("DreamStory contribute function tests", () => {
    ////// tests: increment of the number of approvers
    //            approvers list
    //            double approvals
    it("Check approvers count and others", async () => {
      // use the second account to contribute
      await dream_story.methods.contribute().send({
        from: accounts[1],
        // amount to contribute. convert the ether into wei
        value: web3.utils.toWei(INIT_CONTRIBUTE_ETH, "ether"),
        // gas limit to execute this function
        gas: 1000000
      });

      //// test: increment of the number of approvers
      // call approveWithdrawal using a contributor's account
      await dream_story.methods.approveWithdrawal().send({
        from: accounts[1],
        // gas limit to execute this function
        gas: 1000000
      });
      // get the summary
      const summary = await dream_story.methods.getSummary().call();
      // check if the number of approvers is increased
      assert.equal(summary[4], 1);
      // print out the approvers_count
      console.log(summary[4]);

      //// test: approver check
      // get the mapping value of the account
      const is_approver = await dream_story.methods
        .approvers(accounts[1])
        .call();
      // assert the result
      assert(is_approver);
      console.log(is_approver);

      //// test: block double approvals
      // call approveWithdrawal using the approver's account
      try {
        await dream_story.methods.approveWithdrawal().send({
          from: accounts[1],
          // gas limit to execute this function
          gas: 1000000
        });
        assert(false);
      } catch (error) {
        // if error occurs, this assert will pass, which is intended
        assert(error);
        console.log("true");
      }
    });
    // unit test: check if the votes_count increase when a user contributes
    //            now the user should be inserted to contributor list
    //            the balance of the contract should increase
    it("Check votes count and others", async () => {
      // get the intial balance of the contract to test balance, which is in string
      let init_balance = await web3.eth.getBalance(dream_story.options.address);
      // convert the wei into ether
      init_balance = web3.utils.fromWei(init_balance, "ether");
      // cast the string to float
      init_balance = parseFloat(init_balance);
      // use the second account to contribute
      await dream_story.methods.contribute().send({
        from: accounts[1],
        // amount to contribute. convert the ether into wei
        value: web3.utils.toWei(INIT_CONTRIBUTE_ETH, "ether"),
        // set gas limit`
        gas: "1000000"
      });
      // get the votes_count of the deployed contract
      const votes_count = await dream_story.methods.votes_count().call();
      // check if the votes_count increased
      assert.equal(votes_count, 1);
      // print out the votes_count
      console.log(votes_count);
      // get the mapping value of the user account
      const is_contributor = await dream_story.methods
        .contributors(accounts[1])
        .call();
      // assert the result
      assert(is_contributor);
      console.log(is_contributor);
      // get the balance of the author now. note that the balance is in string
      let balance = await web3.eth.getBalance(dream_story.options.address);
      // first convert the balance into ether
      balance = web3.utils.fromWei(balance, "ether");
      // cast the string to float
      balance = parseFloat(balance);
      console.log(init_balance);
      console.log(balance);
      // check if it is increased
      assert(balance > init_balance);
    });
  });

  ////// tests: not enough approvals
  //            contract's balance tranfer
  it("Check number of approvals and balance transfer", async () => {
    // get the intial balance of the author, which is accounts[0]
    let init_balance = await web3.eth.getBalance(accounts[0]);
    // convert to ether
    init_balance = web3.utils.fromWei(init_balance, "ether");
    // cast string to float
    init_balance = parseFloat(init_balance);

    // use the second account to contribute
    await dream_story.methods.contribute().send({
      from: accounts[1],
      // amount to contribute. convert the ether into wei
      value: web3.utils.toWei(INIT_CONTRIBUTE_ETH, "ether"),
      // gas limit to execute this function
      gas: 1000000
    });

    // approve by the second account
    await dream_story.methods.approveWithdrawal().send({
      from: accounts[1],
      // gas limit to execute this function
      gas: 1000000
    });

    // use the third account to contribute
    await dream_story.methods.contribute().send({
      from: accounts[2],
      // amount to contribute. convert the ether into wei
      value: web3.utils.toWei(INIT_CONTRIBUTE_ETH, "ether"),
      // gas limit to execute this function
      gas: 1000000
    });
    // no approval by the third account

    // get the summary
    const summary = await dream_story.methods.getSummary().call();
    // print out the votes_count
    console.log(summary[1]);
    // print out the approvers_count
    console.log(summary[4]);

    //// test: not enough number of approvals
    // call executeWithdrawal using the author account
    try {
      await dream_story.methods.executeWithdrawal().send({
        from: accounts[0],
        // gas limit to execute this function
        gas: 1000000
      });
      assert(false);
    } catch (error) {
      // if error occurs, this assert will pass, which is intended
      assert(error);
      console.log("true");
    }

    //// test: balance transfer
    // approve by the thirde account
    await dream_story.methods.approveWithdrawal().send({
      from: accounts[2],
      // gas limit to execute this function
      gas: 1000000
    });
    // get the contract balance before withdrawal
    const contract_balance = await web3.eth.getBalance(
      dream_story.options.address
    );
    // execute the withdrawal by the author
    await dream_story.methods.executeWithdrawal().send({
      from: accounts[0],
      // gas limit to execute this function
      gas: 1000000
    });
    // get the balance of the author, which is accounts[0]
    let balance = await web3.eth.getBalance(accounts[0]);
    // convert to ether
    balance = web3.utils.fromWei(balance, "ether");
    // cast string to float
    balance = parseFloat(balance);
    assert(balance > init_balance);
    // print out contract's balance before withdrawal
    console.log(web3.utils.fromWei(contract_balance, "ether"));
    // print out initial balance
    console.log(init_balance);
    // print out the balance
    console.log(balance);
  });
});

// test groups: approveWithdrawal tests
describe("DreamStory approveWithdrawal function tests", () => {
  //// test: try to approve using a not contributor's account
  it("approver test", async () => {
    // call approveWithdrawal using account[2] which is not a contributor
    try {
      await dream_story.methods.approveWithdrawal().send({
        from: accounts[2],
        // gas limit to execute this function
        gas: 1000000
      });
      assert(false);
    } catch (error) {
      // if error occurs, this assert will pass, which is intended
      assert(error);
      console.log("true");
    }
  });
  // test groups: executeWithdrawal tests
  describe("DreamStory executeWithdrawal function tests", () => {
    //// test: try to execute the withdrawal using no author's account
    it("author test", async () => {
      // call executeWithdrawal using account[2] which is not the author
      try {
        await dream_story.methods.executeWithdrawal().send({
          from: accounts[2],
          // gas limit to execute this function
          gas: 1000000
        });
        assert(false);
      } catch (error) {
        // if error occurs, this assert will pass, which is intended
        assert(error);
        console.log("true");
      }
    });
  });
});
