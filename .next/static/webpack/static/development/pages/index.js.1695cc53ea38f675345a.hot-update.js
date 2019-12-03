webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ethereum_dream_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ethereum/dream_factory */ "./ethereum/dream_factory.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");







var _jsxFileName = "c:\\Practice\\dappfront\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
// import react
 // import DreamFactory instance

 // import Card UI component only

 // class based component

var FactoryIndex =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FactoryIndex, _Component);

  function FactoryIndex() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FactoryIndex);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(FactoryIndex).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(FactoryIndex, [{
    key: "renderStories",
    // render card groups to display stories
    value: function renderStories() {
      // map calls the arugment function one time for every element inside stories array
      // fluid option is to extend the component
      var items = this.props.stories.map(function (address) {
        return {
          header: address,
          description: __jsx("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }, "View Story"),
          fluid: true
        };
      });
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Group, {
        items: items,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      });
    } // render the component

  }, {
    key: "render",
    value: function render() {
      // now whenever the component is rendered, the getInitialProps() is called before.
      // so we can access the stories object
      return __jsx("div", {
        style: {
          marginRight: "1400px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), this.renderStories());
    }
  }], [{
    key: "getInitialProps",
    // get initial properties
    // use static to accelerate the rendering.
    // static functions belong not to instance but to class
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var stories;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_dream_factory__WEBPACK_IMPORTED_MODULE_8__["default"].methods.getDeployedDreamStories().call();

              case 2:
                stories = _context.sent;
                return _context.abrupt("return", {
                  stories: stories
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return FactoryIndex;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]); // export the component so that the next can use this


/* harmony default export */ __webpack_exports__["default"] = (FactoryIndex);

/***/ })

})
//# sourceMappingURL=index.js.1695cc53ea38f675345a.hot-update.js.map