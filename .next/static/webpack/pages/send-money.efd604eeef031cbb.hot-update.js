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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var C_Users_SOCU_Desktop_Projects_New_folder_simba_money_transfer_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var C_Users_SOCU_Desktop_Projects_New_folder_simba_money_transfer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"./node_modules/babel-plugin-superjson-next/tools.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _component_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/wrapper */ \"./component/wrapper.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\SOCU\\\\Desktop\\\\Projects\\\\New folder\\\\simba-money-transfer\\\\pages\\\\send-money.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar BASE_URL = \"http://api.exchangeratesapi.io/v1/latest?access_key=3177c602fb93040e5e58345ae045f2cb\";\nvar __N_SSP = true;\n\nfunction Transfer() {\n  var _this = this;\n\n  _s();\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession)(),\n      _useSession2 = (0,C_Users_SOCU_Desktop_Projects_New_folder_simba_money_transfer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useSession, 1),\n      session = _useSession2[0];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      currencyOptions = _useState[0],\n      setCurrencyOptions = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"),\n      fromCurrency = _useState2[0],\n      setFromCurrency = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"),\n      toCurrency = _useState3[0],\n      setToCurrency = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      exchangeRate = _useState4[0],\n      setExchangeRate = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1),\n      amount = _useState5[0],\n      setAmount = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),\n      amountInFromCurrency = _useState6[0],\n      setAmountInFromCurrency = _useState6[1];\n\n  var toAmount, fromAmount;\n\n  if (amountInFromCurrency) {\n    fromAmount = amount;\n    toAmount = amount * exchangeRate;\n  } else {\n    toAmount = amount;\n    fromAmount = amount / exchangeRate;\n  }\n\n  function handleFromAmountChange(e) {\n    setAmount(e.target.value);\n    setAmountInFromCurrency(true);\n  }\n\n  function handleToAmountChange(e) {\n    setAmount(e.target.value);\n    setAmountInFromCurrency(false);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    if (fromCurrency !== null && toCurrency !== null) {\n      fetch(\"\".concat(BASE_URL, \" ?base=\").concat(fromCurrency, \"&symbols=\").concat(toCurrency)).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        return setExchangeRate(data.rates[toCurrency]);\n      });\n    }\n  }, [fromCurrency, toCurrency]);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    fetch(BASE_URL).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      var firstCurrency = Object.keys(data.rates)[0];\n      setCurrencyOptions([data.base].concat((0,C_Users_SOCU_Desktop_Projects_New_folder_simba_money_transfer_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object.keys(data.rates))));\n      setFromCurrency(data.base);\n      setToCurrency(firstCurrency);\n      setExchangeRate(data.rates[firstCurrency]);\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_component_wrapper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"title\", {\n        children: \"Send Money\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"bg-gray-50 block h-screen items-center justify-center -my-32 p-4 md:flex\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"bg-white items-center max-w-screen-sm p-4 space-y-8 overflow-hidden rounded-lg shadow-lg w-full md:flex-row md:w-1/2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"flex flex-col items-center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n            className: \"font-medium text-green-400 text-xl\",\n            children: \"Send money\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"form\", {\n          className: \"flex flex-col space-y-4\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"select\", {\n            className: \"w-full border border-gray-300 outline-none placeholder-gray-400 pl-3 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"option\", {\n              children: \"Name\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"flex\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n              type: \"number\",\n              className: \"w-full border border-gray-300 outline-none placeholder-gray-400 pl-3 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300\",\n              value: fromAmount,\n              onChange: handleFromAmountChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 95,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"select\", {\n              className: \"ml-5 border border-gray-300 outline-none placeholder-gray-400 pl-3 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300\",\n              value: fromCurrency,\n              onChange: function onChange(e) {\n                return setFromCurrency(e.target.value);\n              },\n              children: currencyOptions.map(function (option) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"option\", {\n                  value: option,\n                  children: option\n                }, option, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 107,\n                  columnNumber: 37\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 101,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"flex\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n              className: \"w-full border border-gray-300 outline-none placeholder-gray-400 pl-3 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300\",\n              type: \"number\",\n              value: toAmount,\n              onChange: handleToAmountChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"select\", {\n              className: \"ml-5 border border-gray-300 outline-none placeholder-gray-400 pl-3 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300\",\n              value: toCurrency,\n              onChange: function onChange(e) {\n                return setToCurrency(e.target.value);\n              },\n              children: currencyOptions.map(function (option) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"option\", {\n                  value: option,\n                  children: option\n                }, option, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 127,\n                  columnNumber: 37\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 121,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n            className: \"text-center bg-green-400 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-green-500\",\n            type: \"submit\",\n            children: \"Send\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Transfer, \"Gk6eY2CqFKYJTUcz9tKQ20GS5JI=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession];\n});\n\n_c = Transfer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__.withSuperJSONPage)(Transfer));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Transfer\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUE7QUFBQSxrQkEzQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlFSDs7R0FqSHVCaEM7VUFDRlA7OztLQURFTztBQUF4QiwrREFBZSwyRkFBU0EsUUFBeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VuZC1tb25leS50c3g/M2MwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4uL2NvbXBvbmVudC93cmFwcGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vbGliL3ByaXNtYVwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmNvbnN0IEJBU0VfVVJMID1cclxuICAgIFwiaHR0cDovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvL3YxL2xhdGVzdD9hY2Nlc3Nfa2V5PTMxNzdjNjAyZmI5MzA0MGU1ZTU4MzQ1YWUwNDVmMmNiXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyByZXEsIHJlcyB9KSA9PiB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcclxuXHJcbiAgICBpZiAoIXNlc3Npb24pIHtcclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwMztcclxuICAgICAgICByZXR1cm4geyBwcm9wczogeyB1c2VyOiBbXSB9IH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW1haWwgPSAhc2Vzc2lvbj8udXNlcj8uZW1haWw7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcclxuICAgICAgc2tpcDogMSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2codXNlcilcclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczoge3VzZXIgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNmZXIoKSB7XHJcbiAgICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgICBjb25zdCBbY3VycmVuY3lPcHRpb25zLCBzZXRDdXJyZW5jeU9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Zyb21DdXJyZW5jeSwgc2V0RnJvbUN1cnJlbmN5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3RvQ3VycmVuY3ksIHNldFRvQ3VycmVuY3ldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZXhjaGFuZ2VSYXRlLCBzZXRFeGNoYW5nZVJhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbYW1vdW50SW5Gcm9tQ3VycmVuY3ksIHNldEFtb3VudEluRnJvbUN1cnJlbmN5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGxldCB0b0Ftb3VudCwgZnJvbUFtb3VudDtcclxuXHJcbiAgICBpZiAoYW1vdW50SW5Gcm9tQ3VycmVuY3kpIHtcclxuICAgICAgICBmcm9tQW1vdW50ID0gYW1vdW50O1xyXG4gICAgICAgIHRvQW1vdW50ID0gYW1vdW50ICogZXhjaGFuZ2VSYXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b0Ftb3VudCA9IGFtb3VudDtcclxuICAgICAgICBmcm9tQW1vdW50ID0gYW1vdW50IC8gZXhjaGFuZ2VSYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUZyb21BbW91bnRDaGFuZ2UoZSkge1xyXG4gICAgICAgIHNldEFtb3VudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0QW1vdW50SW5Gcm9tQ3VycmVuY3kodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVG9BbW91bnRDaGFuZ2UoZSkge1xyXG4gICAgICAgIHNldEFtb3VudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0QW1vdW50SW5Gcm9tQ3VycmVuY3koZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZyb21DdXJyZW5jeSAhPT0gbnVsbCAmJiB0b0N1cnJlbmN5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZldGNoKGAke0JBU0VfVVJMfSA/YmFzZT0ke2Zyb21DdXJyZW5jeX0mc3ltYm9scz0ke3RvQ3VycmVuY3l9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0RXhjaGFuZ2VSYXRlKGRhdGEucmF0ZXNbdG9DdXJyZW5jeV0pKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZnJvbUN1cnJlbmN5LCB0b0N1cnJlbmN5XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChCQVNFX1VSTClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0Q3VycmVuY3kgPSBPYmplY3Qua2V5cyhkYXRhLnJhdGVzKVswXTtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbmN5T3B0aW9ucyhbZGF0YS5iYXNlLCAuLi5PYmplY3Qua2V5cyhkYXRhLnJhdGVzKV0pO1xyXG4gICAgICAgICAgICAgICAgc2V0RnJvbUN1cnJlbmN5KGRhdGEuYmFzZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUb0N1cnJlbmN5KGZpcnN0Q3VycmVuY3kpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXhjaGFuZ2VSYXRlKGRhdGEucmF0ZXNbZmlyc3RDdXJyZW5jeV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlNlbmQgTW9uZXk8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBibG9jayBoLXNjcmVlbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgLW15LTMyIHAtNCBtZDpmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGl0ZW1zLWNlbnRlciBtYXgtdy1zY3JlZW4tc20gcC00IHNwYWNlLXktOCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBzaGFkb3ctbGcgdy1mdWxsIG1kOmZsZXgtcm93IG1kOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmVlbi00MDAgdGV4dC14bFwiPlNlbmQgbW9uZXk8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgb3V0bGluZS1ub25lIHBsYWNlaG9sZGVyLWdyYXktNDAwIHBsLTMgcHItNCBweS0xIHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmVlbi0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TmFtZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXItZ3JheS00MDAgcGwtMyBwci00IHB5LTEgcm91bmRlZC1tZCB0cmFuc2l0aW9uIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyZWVuLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zyb21BbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZyb21BbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXItZ3JheS00MDAgcGwtMyBwci00IHB5LTEgcm91bmRlZC1tZCB0cmFuc2l0aW9uIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyZWVuLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zyb21DdXJyZW5jeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZyb21DdXJyZW5jeShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbmN5T3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9ufSB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXItZ3JheS00MDAgcGwtMyBwci00IHB5LTEgcm91bmRlZC1tZCB0cmFuc2l0aW9uIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyZWVuLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUb0Ftb3VudENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtNSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIG91dGxpbmUtbm9uZSBwbGFjZWhvbGRlci1ncmF5LTQwMCBwbC0zIHByLTQgcHktMSByb3VuZGVkLW1kIHRyYW5zaXRpb24gZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZ3JlZW4tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG9DdXJyZW5jeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRvQ3VycmVuY3koZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW5jeU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbn0gdmFsdWU9e29wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNDAwIGZvbnQtbWVkaXVtIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTEgcm91bmRlZC1tZCBzaGFkb3ctbWQgdGV4dC13aGl0ZSB0cmFuc2l0aW9uIGhvdmVyOmJnLWdyZWVuLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJXcmFwcGVyIiwiSGVhZCIsIkJBU0VfVVJMIiwiVHJhbnNmZXIiLCJzZXNzaW9uIiwiY3VycmVuY3lPcHRpb25zIiwic2V0Q3VycmVuY3lPcHRpb25zIiwiZnJvbUN1cnJlbmN5Iiwic2V0RnJvbUN1cnJlbmN5IiwidG9DdXJyZW5jeSIsInNldFRvQ3VycmVuY3kiLCJleGNoYW5nZVJhdGUiLCJzZXRFeGNoYW5nZVJhdGUiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJhbW91bnRJbkZyb21DdXJyZW5jeSIsInNldEFtb3VudEluRnJvbUN1cnJlbmN5IiwidG9BbW91bnQiLCJmcm9tQW1vdW50IiwiaGFuZGxlRnJvbUFtb3VudENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVRvQW1vdW50Q2hhbmdlIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJyYXRlcyIsImZpcnN0Q3VycmVuY3kiLCJPYmplY3QiLCJrZXlzIiwiYmFzZSIsIm1hcCIsIm9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/send-money.tsx\n");

/***/ })

});