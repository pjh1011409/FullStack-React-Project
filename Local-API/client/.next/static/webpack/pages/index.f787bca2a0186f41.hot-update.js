"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar UserIds = [\n    'roy',\n    'jay'\n];\nvar getRandomUserId = function() {\n    return UserIds[Math.round(Math.random())];\n};\nvar msgs = Array(50).fill(0).map(function(_, i) {\n    return {\n        id: 50 - i,\n        userId: getRandomUserId(),\n        tiemstamp: 1234567890123 + (50 - i) * 1000 * 60,\n        text: \"\".concat(50 - i, \" mock text\")\n    };\n});\nvar MsgList = function() {\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"messages\",\n        children: msgs.map(function(x) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _objectSpread({}, x), x.id, false, {\n                fileName: \"/Users/houya/Desktop/FullStack-React-Project/Local-API/client/components/MsgList.js\",\n                lineNumber: 15,\n                columnNumber: 23\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/houya/Desktop/FullStack-React-Project/Local-API/client/components/MsgList.js\",\n        lineNumber: 14,\n        columnNumber: 23\n    }, _this);\n};\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixHQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFDO0lBQUEsQ0FBSztJQUFDLENBQUs7QUFBQSxDQUFDO0FBQzdCLEdBQUssQ0FBQ0MsZUFBZSxHQUFHLFFBQVE7SUFBRkQsTUFBTSxDQUFOQSxPQUFPLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU07O0FBRzVELEdBQUssQ0FBQ0MsSUFBSSxHQUFHQyxLQUFLLENBQUMsRUFBRSxFQUFFQyxJQUFJLENBQUMsQ0FBQyxFQUFFQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxDQUFDLEVBQUVDLENBQUM7SUFBSyxNQUMxQyxDQUQyQyxDQUFDO1FBQzNDQyxFQUFFLEVBQUUsRUFBRSxHQUFHRCxDQUFDO1FBQ1ZFLE1BQU0sRUFBRVgsZUFBZTtRQUN2QlksU0FBUyxFQUFFLGFBQWEsSUFBSSxFQUFFLEdBQUVILENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtRQUM5Q0ksSUFBSSxFQUFHLEdBQVMsTUFBVSxDQUFqQixFQUFFLEdBQUdKLENBQUMsRUFBQyxDQUFVO0lBQzlCLENBQUM7O0FBRUQsR0FBSyxDQUFDSyxPQUFPLEdBQUcsUUFBUTtrQkFBRixNQUFNLCtEQUFMQyxDQUFFO1FBQUVDLFNBQVMsRUFBRyxDQUFVO2tCQUN6Q1osSUFBSSxDQUFDRyxHQUFHLENBQUNVLFFBQVEsQ0FBUkEsQ0FBQzswQkFBSSxNQUFNLCtEQUFMbkIsZ0RBQU8sb0JBQWtCbUIsQ0FBQyxHQUFYQSxDQUFDLENBQUNQLEVBQUU7Ozs7Ozs7Ozs7OztLQURwQ0ksT0FBTztBQUtiLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcz8xYWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSdcblxuY29uc3QgVXNlcklkcyA9IFsncm95JywnamF5J11cbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV1cblxuXG5jb25zdCBtc2dzID0gQXJyYXkoNTApLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoe1xuICAgIGlkOiA1MCAtIGksXG4gICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICB0aWVtc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyAoNTAgLWkpICogMTAwMCAqIDYwLFxuICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YCxcbn0pKVxuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4gPHVsICBjbGFzc05hbWUgPSBcIm1lc3NhZ2VzXCI+e1xuICAgICAgICBtc2dzLm1hcCh4ID0+IDxNc2dJdGVtIGtleSA9IHt4LmlkfSB7Li4ueH0gLz4pXG4gICAgICAgIH08L3VsPlxuXG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3QiXSwibmFtZXMiOlsiTXNnSXRlbSIsIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJtc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpZCIsInVzZXJJZCIsInRpZW1zdGFtcCIsInRleHQiLCJNc2dMaXN0IiwidWwiLCJjbGFzc05hbWUiLCJ4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});