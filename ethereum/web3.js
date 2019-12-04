// import web3, Web3 is a constructor function
import Web3 from "web3";

// declare a variable
let web3;

// handle client side rendering and metamask user
if (typeof window !== "undefined" && window.web3 !== "undefined") {
  // we are in the browser and metamask is running,
  // so use the provider injected by metamask without considering the web3 version
  web3 = new Web3(window.web3.currentProvider);
}
// handle server-side rendering and non-metamask user
// the window variable is undefined
else {
  // we are on the server or the user is not running metamask
  // make own provider through infura
  const provider = new Web3.providers.HttpProvider(
    // put your infura api key for rinkeby
    "https://rinkeby.infura.io/v3/266f4e9dc660472a9dde24c9fe69c10e"
  );
  web3 = new Web3(provider);
}

// export the web3 instance
export default web3;
