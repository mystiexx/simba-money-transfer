"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/send-money",{

/***/ "./pages/send-money.tsx":
/*!******************************!*\
  !*** ./pages/send-money.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var C_Users_SOCU_Desktop_Projects_New_folder_simba_money_transfer_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var C_Users_SOCU_Desktop_Projects_New_folder_simba_money_transfer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"./node_modules/babel-plugin-superjson-next/tools.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _component_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/wrapper */ \"./component/wrapper.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\SOCU\\\\Desktop\\\\Projects\\\\New folder\\\\simba-money-transfer\\\\pages\\\\send-money.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar BASE_URL = \"http://api.exchangeratesapi.io/v1/latest?access_key=3177c602fb93040e5e58345ae045f2cb\";\nvar __N_SSP = true;\n\nfunction Transfer(props) {\n  var _this = this;\n\n  _s();\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession)(),\n      _useSession2 = (0,C_Users_SOCU_Desktop_Projects_New_folder_simba_money_transfer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useSession, 1),\n      session = _useSession2[0];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      currencyOptions = _useState[0],\n      setCurrencyOptions = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"),\n      fromCurrency = _useState2[0],\n      setFromCurrency = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"),\n      toCurrency = _useState3[0],\n      setToCurrency = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      exchangeRate = _useState4[0],\n      setExchangeRate = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1),\n      amount = _useState5[0],\n      setAmount = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),\n      amountInFromCurrency = _useState6[0],\n      setAmountInFromCurrency = _useState6[1];\n\n  var toAmount, fromAmount;\n\n  if (amountInFromCurrency) {\n    fromAmount = amount;\n    toAmount = amount * exchangeRate;\n  } else {\n    toAmount = amount;\n    fromAmount = amount / exchangeRate;\n  }\n\n  function handleFromAmountChange(e) {\n    setAmount(e.target.value);\n    setAmountInFromCurrency(true);\n  }\n\n  function handleToAmountChange(e) {\n    setAmount(e.target.value);\n    setAmountInFromCurrency(false);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    if (fromCurrency !== null && toCurrency !== null) {\n      fetch(BASE_URL).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        return setExchangeRate(data.rates[toCurrency]);\n      });\n    }\n  }, [fromCurrency, toCurrency]);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    fetch(BASE_URL).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      var firstCurrency = Object.keys(data.rates)[0];\n      setCurrencyOptions([data.base].concat((0,C_Users_SOCU_Desktop_Projects_New_folder_simba_money_transfer_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object.keys(data.rates))));\n      setFromCurrency(data.base);\n      setToCurrency(firstCurrency);\n      setExchangeRate(data.rates[firstCurrency]);\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_component_wrapper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"title\", {\n        children: \"Send Money\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"bg-gray-50 block h-screen items-center justify-center -my-32 p-4 md:flex\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"bg-white items-center p-4 space-y-8 overflow-hidden rounded-lg shadow-lg w-96 md:flex-row md:w-1/2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"flex flex-col items-center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n            className: \"font-medium text-green-400 text-xl\",\n            children: \"Send money\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"form\", {\n          className: \"flex flex-col space-y-4\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"select\", {\n            className: \"w-full border border-gray-300 outline-none placeholder-gray-400 pl-3 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300\",\n            children: [props.user.map(data), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"option\", {\n              children: \"Name\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"flex\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n              type: \"number\",\n              className: \"w-full border border-gray-300 outline-none placeholder-gray-400 pl-3 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300\",\n              value: fromAmount,\n              onChange: handleFromAmountChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"select\", {\n              className: \"ml-5 border border-gray-300 outline-none placeholder-gray-400 pl-3 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300\",\n              value: fromCurrency,\n              onChange: function onChange(e) {\n                return setFromCurrency(e.target.value);\n              },\n              children: currencyOptions.map(function (option) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"option\", {\n                  value: option,\n                  children: option\n                }, option, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 106,\n                  columnNumber: 37\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"flex\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n              className: \"w-full border border-gray-300 outline-none placeholder-gray-400 pl-3 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300\",\n              type: \"number\",\n              value: toAmount,\n              onChange: handleToAmountChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"select\", {\n              className: \"ml-5 border border-gray-300 outline-none placeholder-gray-400 pl-3 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300\",\n              value: toCurrency,\n              onChange: function onChange(e) {\n                return setToCurrency(e.target.value);\n              },\n              children: currencyOptions.map(function (option) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"option\", {\n                  value: option,\n                  children: option\n                }, option, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 126,\n                  columnNumber: 37\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n            className: \"text-center bg-green-400 font-medium  items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-green-500\",\n            type: \"submit\",\n            children: \"Send\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 132,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Transfer, \"Gk6eY2CqFKYJTUcz9tKQ20GS5JI=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession];\n});\n\n_c = Transfer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__.withSuperJSONPage)(Transfer));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Transfer\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyw0SEFEZDtBQUVJLGdCQUFJLEVBQUMsUUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE5Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9FSDs7R0FwSHVCbEM7VUFDRlA7OztLQURFTztBQUF4QiwrREFBZSwyRkFBU0EsUUFBeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VuZC1tb25leS50c3g/M2MwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4uL2NvbXBvbmVudC93cmFwcGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vbGliL3ByaXNtYVwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmNvbnN0IEJBU0VfVVJMID1cclxuICAgIFwiaHR0cDovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvL3YxL2xhdGVzdD9hY2Nlc3Nfa2V5PTMxNzdjNjAyZmI5MzA0MGU1ZTU4MzQ1YWUwNDVmMmNiXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyByZXEsIHJlcyB9KSA9PiB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcclxuXHJcbiAgICBpZiAoIXNlc3Npb24pIHtcclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwMztcclxuICAgICAgICByZXR1cm4geyBwcm9wczogeyB1c2VyOiBbXSB9IH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KCk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOiB7dXNlciB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2Zlcihwcm9wcykge1xyXG4gICAgY29uc3QgW3Nlc3Npb25dID0gdXNlU2Vzc2lvbigpO1xyXG4gICAgY29uc3QgW2N1cnJlbmN5T3B0aW9ucywgc2V0Q3VycmVuY3lPcHRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtmcm9tQ3VycmVuY3ksIHNldEZyb21DdXJyZW5jeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt0b0N1cnJlbmN5LCBzZXRUb0N1cnJlbmN5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2V4Y2hhbmdlUmF0ZSwgc2V0RXhjaGFuZ2VSYXRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW2Ftb3VudEluRnJvbUN1cnJlbmN5LCBzZXRBbW91bnRJbkZyb21DdXJyZW5jeV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBsZXQgdG9BbW91bnQsIGZyb21BbW91bnQ7XHJcblxyXG4gICAgaWYgKGFtb3VudEluRnJvbUN1cnJlbmN5KSB7XHJcbiAgICAgICAgZnJvbUFtb3VudCA9IGFtb3VudDtcclxuICAgICAgICB0b0Ftb3VudCA9IGFtb3VudCAqIGV4Y2hhbmdlUmF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9BbW91bnQgPSBhbW91bnQ7XHJcbiAgICAgICAgZnJvbUFtb3VudCA9IGFtb3VudCAvIGV4Y2hhbmdlUmF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVGcm9tQW1vdW50Q2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldEFtb3VudEluRnJvbUN1cnJlbmN5KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvQW1vdW50Q2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldEFtb3VudEluRnJvbUN1cnJlbmN5KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChmcm9tQ3VycmVuY3kgIT09IG51bGwgJiYgdG9DdXJyZW5jeSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmZXRjaChCQVNFX1VSTClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0RXhjaGFuZ2VSYXRlKGRhdGEucmF0ZXNbdG9DdXJyZW5jeV0pKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZnJvbUN1cnJlbmN5LCB0b0N1cnJlbmN5XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChCQVNFX1VSTClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0Q3VycmVuY3kgPSBPYmplY3Qua2V5cyhkYXRhLnJhdGVzKVswXTtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbmN5T3B0aW9ucyhbZGF0YS5iYXNlLCAuLi5PYmplY3Qua2V5cyhkYXRhLnJhdGVzKV0pO1xyXG4gICAgICAgICAgICAgICAgc2V0RnJvbUN1cnJlbmN5KGRhdGEuYmFzZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUb0N1cnJlbmN5KGZpcnN0Q3VycmVuY3kpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXhjaGFuZ2VSYXRlKGRhdGEucmF0ZXNbZmlyc3RDdXJyZW5jeV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlNlbmQgTW9uZXk8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBibG9jayBoLXNjcmVlbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgLW15LTMyIHAtNCBtZDpmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGl0ZW1zLWNlbnRlciBwLTQgc3BhY2UteS04IG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIHNoYWRvdy1sZyB3LTk2IG1kOmZsZXgtcm93IG1kOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmVlbi00MDAgdGV4dC14bFwiPlNlbmQgbW9uZXk8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgb3V0bGluZS1ub25lIHBsYWNlaG9sZGVyLWdyYXktNDAwIHBsLTMgcHItNCBweS0xIHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmVlbi0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnVzZXIubWFwKChkYXRhKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk5hbWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgb3V0bGluZS1ub25lIHBsYWNlaG9sZGVyLWdyYXktNDAwIHBsLTMgcHItNCBweS0xIHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmVlbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmcm9tQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGcm9tQW1vdW50Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC01IGJvcmRlciBib3JkZXItZ3JheS0zMDAgb3V0bGluZS1ub25lIHBsYWNlaG9sZGVyLWdyYXktNDAwIHBsLTMgcHItNCBweS0xIHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmVlbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmcm9tQ3VycmVuY3l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGcm9tQ3VycmVuY3koZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW5jeU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbn0gdmFsdWU9e29wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgb3V0bGluZS1ub25lIHBsYWNlaG9sZGVyLWdyYXktNDAwIHBsLTMgcHItNCBweS0xIHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmVlbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b0Ftb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9BbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXItZ3JheS00MDAgcGwtMyBwci00IHB5LTEgcm91bmRlZC1tZCB0cmFuc2l0aW9uIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyZWVuLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvQ3VycmVuY3l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUb0N1cnJlbmN5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVuY3lPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb259IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTQwMCBmb250LW1lZGl1bSAgaXRlbXMtY2VudGVyIHB4LTMgcHktMSByb3VuZGVkLW1kIHNoYWRvdy1tZCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24gaG92ZXI6YmctZ3JlZW4tNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIldyYXBwZXIiLCJIZWFkIiwiQkFTRV9VUkwiLCJUcmFuc2ZlciIsInByb3BzIiwic2Vzc2lvbiIsImN1cnJlbmN5T3B0aW9ucyIsInNldEN1cnJlbmN5T3B0aW9ucyIsImZyb21DdXJyZW5jeSIsInNldEZyb21DdXJyZW5jeSIsInRvQ3VycmVuY3kiLCJzZXRUb0N1cnJlbmN5IiwiZXhjaGFuZ2VSYXRlIiwic2V0RXhjaGFuZ2VSYXRlIiwiYW1vdW50Iiwic2V0QW1vdW50IiwiYW1vdW50SW5Gcm9tQ3VycmVuY3kiLCJzZXRBbW91bnRJbkZyb21DdXJyZW5jeSIsInRvQW1vdW50IiwiZnJvbUFtb3VudCIsImhhbmRsZUZyb21BbW91bnRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVUb0Ftb3VudENoYW5nZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwicmF0ZXMiLCJmaXJzdEN1cnJlbmN5IiwiT2JqZWN0Iiwia2V5cyIsImJhc2UiLCJ1c2VyIiwibWFwIiwib3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/send-money.tsx\n");

/***/ })

});