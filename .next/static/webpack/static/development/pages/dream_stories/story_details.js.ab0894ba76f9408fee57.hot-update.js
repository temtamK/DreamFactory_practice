webpackHotUpdate("static\\development\\pages\\dream_stories\\story_details.js",{

/***/ "./pages/dream_stories/story_details.js":
/*!**********************************************!*\
  !*** ./pages/dream_stories/story_details.js ***!
  \**********************************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _ethereum_dream_story__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/dream_story */ "./ethereum/dream_story.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;
// import react
 // import layout

 // import DreamStory instance

 // import Form, Button from semantic-ui-react

 // import Grid, Input, Form, Message, Button

 // import Container and Header

 // class based component

var StoryDetails =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(StoryDetails, _Component);

  function StoryDetails() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, StoryDetails);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(StoryDetails)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onContribute",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var accounts, story, contribute_price_wei;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // block default submitting the form
              event.preventDefault(); // set button loading and clear error message

              _this.setState({
                loading: true,
                error_msg: ""
              }); // catch any error while executing the following


              _context.prev = 2;
              _context.next = 5;
              return web3.eth.getAccounts();

            case 5:
              accounts = _context.sent;
              // get the DreamStory instance of the address
              story = Object(_ethereum_dream_story__WEBPACK_IMPORTED_MODULE_11__["default"])(_this.props.address); // convert contribute price to wei

              contribute_price_wei = web3.utils.toWei(_this.state.contribute_price, "ether"); // call contribute function using the user's first account
              // use metamask's functinality to estimate the gas limit

              _context.next = 10;
              return story.methods.contribute().send({
                from: accounts[0],
                value: contribute_price_wei
              });

            case 10:
              // refresh the current page, so the getInitialProps re-runs
              Router.replaceRoute("/dream_stories/".concat(_this.props.address));
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);

              _this.setState({
                error_msg: _context.t0.message
              });

            case 16:
              // clear loading
              _this.setState({
                loading: false
              });

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 13]]);
    })));

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(StoryDetails, [{
    key: "renderActionButtons",
    value: function renderActionButtons() {
      var _this2 = this;

      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], {
        onSubmit: this.onContribute,
        error: !!this.state.error_msg
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, null, __jsx("label", null, "Amount to contribute"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        label: "ether",
        labelPosition: "right",
        placeholder: "0.001",
        value: this.state.contribute_price,
        onChange: function onChange(event) {
          return _this2.setState({
            contribute_price: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
        error: true,
        header: "Failed!",
        content: this.state.error_msg
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        loading: this.state.loading,
        primary: true
      }, "Contribute"), __jsx("p", null), __jsx(Link, {
        route: "/dream_stories/".concat(this.props.address, "/downloads_list")
      }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        primary: true
      }, "View Downloads"))), __jsx("p", null), __jsx(Link, {
        route: "/dream_stories/".concat(this.props.address, "/request_download")
      }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        primary: true
      }, "Request Download"))));
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx("h2", null, "Story Details"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 10
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Container"], {
        text: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        as: "h3"
      }, this.props.story_title), __jsx("p", null, this.props.story))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 6
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Content, {
        header: "Statistics"
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Content, {
        extra: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "dollar sign"
      }), this.props.balance, " (balance, ether)"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Content, {
        extra: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "user"
      }), this.props.votes_count, " (votes)"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Content, {
        extra: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "download"
      }), this.props.downloads_count, " (downloads)"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Content, {
        extra: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "cart arrow down"
      }), this.props.min_down_price, " (download price, ether )")), this.renderActionButtons())));
    }
  }], [{
    key: "getInitialProps",
    // get initial properties
    // the DreamStory address can be obtained from the argument props using the url
    // since the url includes the contract address
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(props) {
        var story, summary;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // get the DreamStory instance of the address
                story = Object(_ethereum_dream_story__WEBPACK_IMPORTED_MODULE_11__["default"])(props.query.address); // get summary of the story

                _context2.next = 3;
                return story.methods.getSummary().call();

              case 3:
                summary = _context2.sent;
                return _context2.abrupt("return", {
                  address: props.query.address,
                  balance: summary[0],
                  votes_count: summary[1],
                  downloads_count: summary[2],
                  min_down_price_wei: summary[3],
                  approvers_count: summary[4],
                  author: summary[5],
                  story_title: summary[6],
                  story: summary[7]
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }() // event handler for contribute button

  }]);

  return StoryDetails;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]); // export the component


/* harmony default export */ __webpack_exports__["default"] = (StoryDetails);

/***/ })

})
//# sourceMappingURL=story_details.js.ab0894ba76f9408fee57.hot-update.js.map