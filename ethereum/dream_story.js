// import the web3 instance
import web3 from "./web3";
// import compiled DreamStory which includes interface and bytecode
import DreamStory from "./build/DreamStory.json";

// export a function that creates a new instance using the received address
export default address => {
  return new web3.eth.Contract(JSON.parse(DreamStory.interface), address);
};
