webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./ethereum/dream_factory.js":
/*!***********************************!*\
  !*** ./ethereum/dream_factory.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./ethereum/web3.js");
/* harmony import */ var _build_DreamFactory_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/DreamFactory.json */ "./ethereum/build/DreamFactory.json");
var _build_DreamFactory_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./build/DreamFactory.json */ "./ethereum/build/DreamFactory.json", 1);
// web3 import
 // import interface, which is abi

 // create dream factory instance

var factory_instance = new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract( // DreamFactory 이름의 JSON파일을 미리 만들어주세요!
// json파일은 ABI를 가져옵니다. 만약 truffle 사용하신다면 이 부분은 필요 없습니다.
JSON.parse(_build_DreamFactory_json__WEBPACK_IMPORTED_MODULE_1__["interface"]), // deployed DreamFactory contract address (change it to yours)
"0x6ddd3f9a918a947bd4e80663a1ec2b570bce715e6c0ae2fe49e8c9fd0c0592ca"); // export the factory instance

/* harmony default export */ __webpack_exports__["default"] = (factory_instance);

/***/ })

})
//# sourceMappingURL=index.js.bec3ada1afc849c63d5d.hot-update.js.map