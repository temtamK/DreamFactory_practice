webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
// import web3, Web3 is a constructor function
 // declare a variable

var web3; // handle client side rendering and metamask user

if ( true && window.web3 !== "undefined") {
  // we are in the browser and metamask is running,
  // so use the provider injected by metamask without considering the web3 version
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.web3.currentProvider);
} // handle server-side rendering and non-metamask user
// the window variable is undefined
else {
    // we are on the server or the user is not running metamask
    // make own provider through infura
    var provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider( // put your infura api key for rinkeby
    "https://rinkeby.infura.io/v3/6ee87ef7d0d448daba84942b01eeb420");
    web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
  } // export the web3 instance


/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ })

})
//# sourceMappingURL=index.js.167b61714429415ffd4c.hot-update.js.map