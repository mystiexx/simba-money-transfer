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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var C_Users_SOCU_Desktop_Projects_New_folder_simba_money_transfer_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var C_Users_SOCU_Desktop_Projects_New_folder_simba_money_transfer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"./node_modules/babel-plugin-superjson-next/tools.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _component_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/wrapper */ \"./component/wrapper.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\SOCU\\\\Desktop\\\\Projects\\\\New folder\\\\simba-money-transfer\\\\pages\\\\send-money.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar BASE_URL = \"http://api.exchangeratesapi.io/v1/latest?access_key=3177c602fb93040e5e58345ae045f2cb\";\nvar __N_SSP = true;\n\nfunction Transfer() {\n  var _this = this;\n\n  _s();\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession)(),\n      _useSession2 = (0,C_Users_SOCU_Desktop_Projects_New_folder_simba_money_transfer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useSession, 1),\n      session = _useSession2[0];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      currencyOptions = _useState[0],\n      setCurrencyOptions = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"),\n      fromCurrency = _useState2[0],\n      setFromCurrency = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"),\n      toCurrency = _useState3[0],\n      setToCurrency = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      exchangeRate = _useState4[0],\n      setExchangeRate = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1),\n      amount = _useState5[0],\n      setAmount = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),\n      amountInFromCurrency = _useState6[0],\n      setAmountInFromCurrency = _useState6[1];\n\n  var toAmount, fromAmount;\n\n  if (amountInFromCurrency) {\n    fromAmount = amount;\n    toAmount = amount * exchangeRate;\n  } else {\n    toAmount = amount;\n    fromAmount = amount / exchangeRate;\n  }\n\n  function handleFromAmountChange(e) {\n    setAmount(e.target.value);\n    setAmountInFromCurrency(true);\n  }\n\n  function handleToAmountChange(e) {\n    setAmount(e.target.value);\n    setAmountInFromCurrency(false);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    if (fromCurrency !== null && toCurrency !== null) {\n      fetch(\"\".concat(BASE_URL, \" ?base=\").concat(fromCurrency, \"&symbols=\").concat(toCurrency)).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        return setExchangeRate(data.rates[toCurrency]);\n      });\n    }\n  }, [fromCurrency, toCurrency]);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    fetch(BASE_URL).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      var firstCurrency = Object.keys(data.rates)[0];\n      setCurrencyOptions([data.base].concat((0,C_Users_SOCU_Desktop_Projects_New_folder_simba_money_transfer_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object.keys(data.rates))));\n      setFromCurrency(data.base);\n      setToCurrency(firstCurrency);\n      setExchangeRate(data.rates[firstCurrency]);\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_component_wrapper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"title\", {\n        children: \"Send Money\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"bg-gray-50 block h-screen items-center justify-center -my-32 p-4 md:flex\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"bg-white items-center max-w-screen-sm p-4 space-y-8 overflow-hidden rounded-lg shadow-lg w-full md:flex-row md:w-1/2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"flex flex-col items-center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n            className: \"font-medium text-green-400 text-xl\",\n            children: \"Send money\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"form\", {\n          className: \"flex flex-col space-y-4\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"select\", {\n            className: \"w-full border border-gray-300 outline-none placeholder-gray-400 pl-3 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"option\", {\n              children: \"Name\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"flex\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n              type: \"number\",\n              className: \"w-full border border-gray-300 outline-none placeholder-gray-400 pl-3 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300\",\n              value: fromAmount,\n              onChange: handleFromAmountChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"select\", {\n              className: \"ml-5 border border-gray-300 outline-none placeholder-gray-400 pl-3 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300\",\n              value: fromCurrency,\n              onChange: function onChange(e) {\n                return setFromCurrency(e.target.value);\n              },\n              children: currencyOptions.map(function (option) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"option\", {\n                  value: option,\n                  children: option\n                }, option, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 109,\n                  columnNumber: 37\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 103,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"flex\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n              className: \"w-full border border-gray-300 outline-none placeholder-gray-400 pl-3 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300\",\n              type: \"number\",\n              value: toAmount,\n              onChange: handleToAmountChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"select\", {\n              className: \"ml-5 border border-gray-300 outline-none placeholder-gray-400 pl-3 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300\",\n              value: toCurrency,\n              onChange: function onChange(e) {\n                return setToCurrency(e.target.value);\n              },\n              children: currencyOptions.map(function (option) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"option\", {\n                  value: option,\n                  children: option\n                }, option, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 129,\n                  columnNumber: 37\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n            className: \"text-center bg-green-400 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-green-500\",\n            type: \"submit\",\n            children: \"Send\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Transfer, \"Gk6eY2CqFKYJTUcz9tKQ20GS5JI=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession];\n});\n\n_c = Transfer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__.withSuperJSONPage)(Transfer));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Transfer\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUE7QUFBQSxrQkEzQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlFSDs7R0FqSHVCaEM7VUFDRlA7OztLQURFTztBQUF4QiwrREFBZSwyRkFBU0EsUUFBeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VuZC1tb25leS50c3g/M2MwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4uL2NvbXBvbmVudC93cmFwcGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vbGliL3ByaXNtYVwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmNvbnN0IEJBU0VfVVJMID1cclxuICAgIFwiaHR0cDovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvL3YxL2xhdGVzdD9hY2Nlc3Nfa2V5PTMxNzdjNjAyZmI5MzA0MGU1ZTU4MzQ1YWUwNDVmMmNiXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyByZXEsIHJlcyB9KSA9PiB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcclxuXHJcbiAgICBpZiAoIXNlc3Npb24pIHtcclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwMztcclxuICAgICAgICByZXR1cm4geyBwcm9wczogeyB1c2VyOiBbXSB9IH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW1haWwgPSAhc2Vzc2lvbj8udXNlcj8uZW1haWw7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiAhc2Vzc2lvbi51c2VyLmVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOiB7dXNlciB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2ZlcigpIHtcclxuICAgIGNvbnN0IFtzZXNzaW9uXSA9IHVzZVNlc3Npb24oKTtcclxuICAgIGNvbnN0IFtjdXJyZW5jeU9wdGlvbnMsIHNldEN1cnJlbmN5T3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZnJvbUN1cnJlbmN5LCBzZXRGcm9tQ3VycmVuY3ldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdG9DdXJyZW5jeSwgc2V0VG9DdXJyZW5jeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtleGNoYW5nZVJhdGUsIHNldEV4Y2hhbmdlUmF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFthbW91bnRJbkZyb21DdXJyZW5jeSwgc2V0QW1vdW50SW5Gcm9tQ3VycmVuY3ldID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgbGV0IHRvQW1vdW50LCBmcm9tQW1vdW50O1xyXG5cclxuICAgIGlmIChhbW91bnRJbkZyb21DdXJyZW5jeSkge1xyXG4gICAgICAgIGZyb21BbW91bnQgPSBhbW91bnQ7XHJcbiAgICAgICAgdG9BbW91bnQgPSBhbW91bnQgKiBleGNoYW5nZVJhdGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvQW1vdW50ID0gYW1vdW50O1xyXG4gICAgICAgIGZyb21BbW91bnQgPSBhbW91bnQgLyBleGNoYW5nZVJhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRnJvbUFtb3VudENoYW5nZShlKSB7XHJcbiAgICAgICAgc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRBbW91bnRJbkZyb21DdXJyZW5jeSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVUb0Ftb3VudENoYW5nZShlKSB7XHJcbiAgICAgICAgc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRBbW91bnRJbkZyb21DdXJyZW5jeShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZnJvbUN1cnJlbmN5ICE9PSBudWxsICYmIHRvQ3VycmVuY3kgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZmV0Y2goYCR7QkFTRV9VUkx9ID9iYXNlPSR7ZnJvbUN1cnJlbmN5fSZzeW1ib2xzPSR7dG9DdXJyZW5jeX1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRFeGNoYW5nZVJhdGUoZGF0YS5yYXRlc1t0b0N1cnJlbmN5XSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtmcm9tQ3VycmVuY3ksIHRvQ3VycmVuY3ldKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKEJBU0VfVVJMKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RDdXJyZW5jeSA9IE9iamVjdC5rZXlzKGRhdGEucmF0ZXMpWzBdO1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVuY3lPcHRpb25zKFtkYXRhLmJhc2UsIC4uLk9iamVjdC5rZXlzKGRhdGEucmF0ZXMpXSk7XHJcbiAgICAgICAgICAgICAgICBzZXRGcm9tQ3VycmVuY3koZGF0YS5iYXNlKTtcclxuICAgICAgICAgICAgICAgIHNldFRvQ3VycmVuY3koZmlyc3RDdXJyZW5jeSk7XHJcbiAgICAgICAgICAgICAgICBzZXRFeGNoYW5nZVJhdGUoZGF0YS5yYXRlc1tmaXJzdEN1cnJlbmN5XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V3JhcHBlcj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+U2VuZCBNb25leTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJsb2NrIGgtc2NyZWVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAtbXktMzIgcC00IG1kOmZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgaXRlbXMtY2VudGVyIG1heC13LXNjcmVlbi1zbSBwLTQgc3BhY2UteS04IG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIHNoYWRvdy1sZyB3LWZ1bGwgbWQ6ZmxleC1yb3cgbWQ6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWdyZWVuLTQwMCB0ZXh0LXhsXCI+U2VuZCBtb25leTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXItZ3JheS00MDAgcGwtMyBwci00IHB5LTEgcm91bmRlZC1tZCB0cmFuc2l0aW9uIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyZWVuLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5OYW1lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIG91dGxpbmUtbm9uZSBwbGFjZWhvbGRlci1ncmF5LTQwMCBwbC0zIHByLTQgcHktMSByb3VuZGVkLW1kIHRyYW5zaXRpb24gZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZ3JlZW4tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZnJvbUFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRnJvbUFtb3VudENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtNSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIG91dGxpbmUtbm9uZSBwbGFjZWhvbGRlci1ncmF5LTQwMCBwbC0zIHByLTQgcHktMSByb3VuZGVkLW1kIHRyYW5zaXRpb24gZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZ3JlZW4tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZnJvbUN1cnJlbmN5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RnJvbUN1cnJlbmN5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVuY3lPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb259IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIG91dGxpbmUtbm9uZSBwbGFjZWhvbGRlci1ncmF5LTQwMCBwbC0zIHByLTQgcHktMSByb3VuZGVkLW1kIHRyYW5zaXRpb24gZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZ3JlZW4tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG9BbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRvQW1vdW50Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC01IGJvcmRlciBib3JkZXItZ3JheS0zMDAgb3V0bGluZS1ub25lIHBsYWNlaG9sZGVyLWdyYXktNDAwIHBsLTMgcHItNCBweS0xIHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmVlbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b0N1cnJlbmN5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VG9DdXJyZW5jeShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbmN5T3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9ufSB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi00MDAgZm9udC1tZWRpdW0gaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMSByb3VuZGVkLW1kIHNoYWRvdy1tZCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24gaG92ZXI6YmctZ3JlZW4tNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIldyYXBwZXIiLCJIZWFkIiwiQkFTRV9VUkwiLCJUcmFuc2ZlciIsInNlc3Npb24iLCJjdXJyZW5jeU9wdGlvbnMiLCJzZXRDdXJyZW5jeU9wdGlvbnMiLCJmcm9tQ3VycmVuY3kiLCJzZXRGcm9tQ3VycmVuY3kiLCJ0b0N1cnJlbmN5Iiwic2V0VG9DdXJyZW5jeSIsImV4Y2hhbmdlUmF0ZSIsInNldEV4Y2hhbmdlUmF0ZSIsImFtb3VudCIsInNldEFtb3VudCIsImFtb3VudEluRnJvbUN1cnJlbmN5Iiwic2V0QW1vdW50SW5Gcm9tQ3VycmVuY3kiLCJ0b0Ftb3VudCIsImZyb21BbW91bnQiLCJoYW5kbGVGcm9tQW1vdW50Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlVG9BbW91bnRDaGFuZ2UiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInJhdGVzIiwiZmlyc3RDdXJyZW5jeSIsIk9iamVjdCIsImtleXMiLCJiYXNlIiwibWFwIiwib3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/send-money.tsx\n");

/***/ })

});