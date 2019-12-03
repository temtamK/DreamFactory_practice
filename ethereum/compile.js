// @note: this compile.js will be usually executed once unless the contract file is changed.
// path module to read soliditi files
const path = require("path");
// solidity compiler module
const solc = require("solc");
// file system extra functionality
const fs = require("fs-extra");
// import assert module to test with assertion
const assert = require("assert");

// get the build directory using the path module
// build directory is used to re-use the compiled code when no change occurs
// __dirname will indicate the root directory where the oxmpile.js occurs
const build_path = path.resolve(__dirname, "build");
// delete the build directory
fs.removeSync(build_path);

// get the contract file path
const contract_path = path.resolve(__dirname, "contracts", "DreamFactory.sol");
// read the contract file
const contract_src = fs.readFileSync(contract_path, "utf8");

// compiled output, extract only contracts part
console.log("now compiling the contract code ...");
const compile_output = solc.compile(contract_src, 1).contracts;
assert(compile_output[":DreamFactory"]);
assert(compile_output[":DreamStory"]);
console.log("compiled");

// create the build directory
fs.ensureDirSync(build_path);

// create build files looping over contracts
for (let contract in compile_output) {
  // create a contract json file
  fs.outputJsonSync(
    path.resolve(build_path, contract.replace(":", "") + ".json"),
    compile_output[contract]
  );
}
