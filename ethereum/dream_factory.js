// web3 import
import web3 from "./web3";
// import interface, which is abi
import DreamFactory from "./build/DreamFactory.json";

// create dream factory instance
const factory_instance = new web3.eth.Contract(
  // DreamFactory 이름의 JSON파일을 미리 만들어주세요!
  // json파일은 ABI를 가져옵니다. 만약 truffle 사용하신다면 이 부분은 필요 없습니다.
  JSON.parse(DreamFactory.interface),
  // deployed DreamFactory contract address (change it to yours)
  "0x65fE38A240B73DBAa52De62f7208F85833b0223C"
);

// export the factory instance
export default factory_instance;