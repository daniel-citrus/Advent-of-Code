/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ``, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://super-template/./src/style/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = [];\r\n\r\n  // return the list of modules as css string\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n      content += cssWithMappingToString(item);\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n      return content;\r\n    }).join(\"\");\r\n  };\r\n\r\n  // import a list of modules into the list\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n    var alreadyImportedModules = {};\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n      list.push(item);\r\n    }\r\n  };\r\n  return list;\r\n};\n\n//# sourceURL=webpack://super-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://super-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://super-template/./src/style/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nvar stylesInDOM = [];\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n  return result;\r\n}\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n    identifiers.push(identifier);\r\n  }\r\n  return identifiers;\r\n}\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n  return updater;\r\n}\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n      var _index = getIndexByIdentifier(_identifier);\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nvar memo = {};\r\n\r\n/* istanbul ignore next  */\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target);\r\n\r\n    // Special case to return head of iframe instead of iframe itself\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n    memo[target] = styleTarget;\r\n  }\r\n  return memo[target];\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n  target.appendChild(style);\r\n}\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n  css += obj.css;\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n  var sourceMap = obj.sourceMap;\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  }\r\n\r\n  // For old IE\r\n  /* istanbul ignore if  */\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction domAPI(options) {\r\n  if (typeof document === \"undefined\") {\r\n    return {\r\n      update: function update() {},\r\n      remove: function remove() {}\r\n    };\r\n  }\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/challenges/2024/1/mergeSort.js":
/*!********************************************!*\
  !*** ./src/challenges/2024/1/mergeSort.js ***!
  \********************************************/
/***/ ((module) => {

eval("function merge(left, right) {\r\n    const result = [];\r\n\r\n    while (left.length && right.length) {\r\n        if (left[0] <= right[0]) {\r\n            result.push(left.shift());\r\n        } else {\r\n            result.push(right.shift());\r\n        }\r\n    }\r\n\r\n    if (left.length) {\r\n        return [...result, ...left];\r\n    }\r\n\r\n    if (right.length) {\r\n        return [...result, ...right];\r\n    }\r\n}\r\n\r\nfunction mergeSort(array) {\r\n    if (!array) {\r\n        return array;\r\n    }\r\n\r\n    if (array.length <= 1) {\r\n        return array;\r\n    }\r\n\r\n    const mid = Math.ceil(array.length / 2);\r\n    const left = mergeSort(array.slice(0, mid));\r\n    const right = mergeSort(array.slice(mid));\r\n\r\n    return merge(left, right);\r\n}\r\n\r\nmodule.exports = { merge, mergeSort };\r\n\n\n//# sourceURL=webpack://super-template/./src/challenges/2024/1/mergeSort.js?");

/***/ }),

/***/ "./src/challenges/2024/1/totalDistance.js":
/*!************************************************!*\
  !*** ./src/challenges/2024/1/totalDistance.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.txt */ \"./src/challenges/2024/1/input.txt\");\n/* harmony import */ var _mergeSort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeSort */ \"./src/challenges/2024/1/mergeSort.js\");\n/* harmony import */ var _mergeSort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mergeSort__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nlet list1 = [];\r\nlet list2 = [];\r\n\r\nconst lines = _input_txt__WEBPACK_IMPORTED_MODULE_0__.split(/\\n/);\r\n\r\n// extract data\r\nfor (let line of lines) {\r\n    const items = line.replace(/\\r/, '').split('   ');\r\n    list1.push(items[0]);\r\n    list2.push(items[1]);\r\n}\r\n\r\n// sort left and right lists\r\nlist1 = (0,_mergeSort__WEBPACK_IMPORTED_MODULE_1__.mergeSort)(list1);\r\nlist2 = (0,_mergeSort__WEBPACK_IMPORTED_MODULE_1__.mergeSort)(list2);\r\n\r\n// calculate distance (positive integer) between each element on the same index\r\nconst distances = calculateDistance(list1, list2);\r\n\r\n// sum total distance\r\nconst totalDistance = distances.reduce((sum, current) => sum + current, 0);\r\n\r\n// ANSWER\r\n/* console.log(totalDistance); */\r\n\r\nfunction calculateDistance(list1, list2) {\r\n    if (list1.length !== list2.length) {\r\n        return null;\r\n    }\r\n\r\n    const distances = [];\r\n\r\n    for (let i = 0; i < list1.length; i++) {\r\n        distances.push(Math.abs(list1[i] - list2[i]));\r\n    }\r\n\r\n    return distances;\r\n}\r\n\n\n//# sourceURL=webpack://super-template/./src/challenges/2024/1/totalDistance.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ \"./src/style/style.scss\");\n/* harmony import */ var _challenges_2024_1_totalDistance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./challenges/2024/1/totalDistance */ \"./src/challenges/2024/1/totalDistance.js\");\n\r\n\n\n//# sourceURL=webpack://super-template/./src/index.js?");

/***/ }),

/***/ "./src/challenges/2024/1/input.txt":
/*!*****************************************!*\
  !*** ./src/challenges/2024/1/input.txt ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"37033   48086\\r\\n80098   34930\\r\\n88073   69183\\r\\n54342   63061\\r\\n98409   87908\\r\\n81400   96222\\r\\n42062   53621\\r\\n55208   48086\\r\\n10847   20622\\r\\n53237   11766\\r\\n12609   19507\\r\\n31524   33054\\r\\n83455   96879\\r\\n53344   76641\\r\\n94982   66380\\r\\n69183   70224\\r\\n35580   12846\\r\\n87598   24335\\r\\n82193   11774\\r\\n69512   57198\\r\\n59322   57031\\r\\n68842   58244\\r\\n44042   39233\\r\\n16249   57139\\r\\n85264   31175\\r\\n10891   68793\\r\\n40085   98617\\r\\n91566   98409\\r\\n87478   49199\\r\\n39821   33343\\r\\n74610   62695\\r\\n68536   31524\\r\\n68470   52968\\r\\n49918   78866\\r\\n22935   44471\\r\\n76024   92757\\r\\n65243   98409\\r\\n93508   26529\\r\\n89938   19767\\r\\n74104   28327\\r\\n95395   51124\\r\\n57361   30769\\r\\n17053   38420\\r\\n89386   27077\\r\\n66052   49634\\r\\n31107   86173\\r\\n20356   70681\\r\\n32859   77448\\r\\n61081   68078\\r\\n66997   11420\\r\\n47491   52799\\r\\n52909   18865\\r\\n98231   14451\\r\\n78232   81629\\r\\n13844   65959\\r\\n42821   44935\\r\\n42441   17048\\r\\n43148   63037\\r\\n64953   17930\\r\\n94799   43046\\r\\n36346   50323\\r\\n62122   36926\\r\\n12807   35501\\r\\n62695   49155\\r\\n70681   87913\\r\\n44566   67881\\r\\n84508   75693\\r\\n53457   53621\\r\\n81188   75898\\r\\n18550   78193\\r\\n78314   72664\\r\\n28118   75012\\r\\n55363   82133\\r\\n55936   96958\\r\\n71769   62301\\r\\n64882   55809\\r\\n22070   52069\\r\\n80402   18865\\r\\n87887   59381\\r\\n19262   90572\\r\\n85007   46788\\r\\n36926   95926\\r\\n19398   39233\\r\\n38479   40232\\r\\n32794   85776\\r\\n82010   48505\\r\\n44551   59594\\r\\n52215   96042\\r\\n47295   62695\\r\\n23560   64868\\r\\n41516   29134\\r\\n78567   96879\\r\\n56100   44280\\r\\n37923   53621\\r\\n23366   20622\\r\\n88384   38143\\r\\n32427   93236\\r\\n28815   77641\\r\\n64098   70832\\r\\n63820   52069\\r\\n65685   41926\\r\\n77989   34282\\r\\n19213   73228\\r\\n90916   59042\\r\\n34392   59594\\r\\n53405   20622\\r\\n61530   85362\\r\\n67067   58244\\r\\n15915   52074\\r\\n84869   45493\\r\\n16808   52099\\r\\n83066   30481\\r\\n60279   34507\\r\\n18216   69308\\r\\n43386   89121\\r\\n48876   20622\\r\\n81226   81863\\r\\n13439   96879\\r\\n33538   20803\\r\\n57046   57031\\r\\n97890   31524\\r\\n49650   81758\\r\\n83353   53621\\r\\n97124   11654\\r\\n42320   55708\\r\\n15216   67981\\r\\n41159   54382\\r\\n23511   59594\\r\\n69428   62695\\r\\n75545   54382\\r\\n40455   50323\\r\\n14796   17517\\r\\n64841   54382\\r\\n45297   98409\\r\\n85055   15951\\r\\n54382   89121\\r\\n75123   48014\\r\\n77380   73118\\r\\n89593   29398\\r\\n65102   84571\\r\\n29684   50323\\r\\n78501   98409\\r\\n22658   48086\\r\\n69048   37242\\r\\n78675   43046\\r\\n42018   64394\\r\\n20090   98409\\r\\n73590   59594\\r\\n77407   70588\\r\\n54617   60692\\r\\n31801   30470\\r\\n94282   59594\\r\\n23846   84393\\r\\n80158   75833\\r\\n41973   18865\\r\\n10733   72754\\r\\n21476   89327\\r\\n53199   42757\\r\\n57875   22438\\r\\n80198   27009\\r\\n78998   36146\\r\\n46245   29134\\r\\n50181   37209\\r\\n65481   89603\\r\\n11531   16038\\r\\n33594   38324\\r\\n57846   75210\\r\\n92753   46215\\r\\n16725   78130\\r\\n67071   32249\\r\\n58481   81278\\r\\n79423   50340\\r\\n97039   64868\\r\\n87562   54382\\r\\n43046   90102\\r\\n39144   51352\\r\\n59594   15951\\r\\n84863   15951\\r\\n17517   18865\\r\\n49574   65630\\r\\n32557   63961\\r\\n46236   13439\\r\\n97729   58376\\r\\n71110   50323\\r\\n96590   53621\\r\\n94510   30481\\r\\n71029   34573\\r\\n86457   21887\\r\\n28954   17350\\r\\n35852   31524\\r\\n93863   39233\\r\\n47572   73683\\r\\n97380   18865\\r\\n30754   30481\\r\\n60704   89447\\r\\n92001   69183\\r\\n32801   66142\\r\\n81487   31524\\r\\n18073   52639\\r\\n35906   59208\\r\\n43812   17762\\r\\n98364   54382\\r\\n63099   93285\\r\\n23874   11420\\r\\n23929   15951\\r\\n63965   58244\\r\\n13509   50297\\r\\n67586   72452\\r\\n38100   76429\\r\\n57896   36516\\r\\n31621   59594\\r\\n68378   13399\\r\\n98229   89945\\r\\n37332   42762\\r\\n39317   13399\\r\\n29751   70681\\r\\n23350   49329\\r\\n94426   54530\\r\\n51125   98409\\r\\n13568   25793\\r\\n40634   93771\\r\\n76318   20622\\r\\n56797   62352\\r\\n77125   92452\\r\\n92723   78193\\r\\n52702   97941\\r\\n71042   48086\\r\\n75241   48086\\r\\n82106   86471\\r\\n43549   51785\\r\\n57031   93563\\r\\n45097   85133\\r\\n39233   38284\\r\\n44072   23577\\r\\n78219   48086\\r\\n10218   75355\\r\\n34441   52069\\r\\n27486   64929\\r\\n94555   15951\\r\\n36126   33020\\r\\n50417   20622\\r\\n97392   18353\\r\\n59162   90002\\r\\n43315   19287\\r\\n28705   67881\\r\\n29116   18865\\r\\n54164   39121\\r\\n41481   91282\\r\\n81138   85776\\r\\n85885   67495\\r\\n96203   95531\\r\\n11050   37542\\r\\n12902   95734\\r\\n23499   10033\\r\\n86109   18865\\r\\n13588   75493\\r\\n11234   42933\\r\\n58393   31524\\r\\n74806   69463\\r\\n81423   40663\\r\\n56077   58244\\r\\n55377   18865\\r\\n19426   52069\\r\\n46626   54382\\r\\n37701   33145\\r\\n57512   74160\\r\\n27195   70681\\r\\n14778   22306\\r\\n24054   25503\\r\\n23289   29807\\r\\n37933   36926\\r\\n61780   11400\\r\\n50323   83188\\r\\n33579   91321\\r\\n63956   13439\\r\\n99407   96879\\r\\n91416   76077\\r\\n88001   95578\\r\\n62066   33499\\r\\n24116   98790\\r\\n47745   19497\\r\\n64915   31524\\r\\n15961   93427\\r\\n68594   81210\\r\\n34351   59202\\r\\n40327   98303\\r\\n72705   67448\\r\\n12525   23334\\r\\n43151   82488\\r\\n35068   49777\\r\\n68599   69183\\r\\n94043   78193\\r\\n13678   98199\\r\\n81582   69183\\r\\n73934   36346\\r\\n55739   43046\\r\\n85642   75087\\r\\n91889   62893\\r\\n67778   92891\\r\\n35695   73450\\r\\n55718   78193\\r\\n63959   34907\\r\\n38017   98409\\r\\n66723   17517\\r\\n74248   43974\\r\\n88967   64011\\r\\n83130   20258\\r\\n99204   59594\\r\\n70476   66058\\r\\n61286   50220\\r\\n48510   31524\\r\\n79991   38603\\r\\n19872   59594\\r\\n87662   98303\\r\\n19340   52069\\r\\n43964   15951\\r\\n90112   80030\\r\\n43191   15951\\r\\n98554   72878\\r\\n21344   54382\\r\\n19604   98409\\r\\n33237   10812\\r\\n51468   40519\\r\\n38791   85794\\r\\n74239   29333\\r\\n66680   95424\\r\\n24080   97635\\r\\n90972   18626\\r\\n87429   97643\\r\\n91221   28641\\r\\n72127   62326\\r\\n24113   72380\\r\\n81008   23132\\r\\n99596   15951\\r\\n33037   17517\\r\\n90429   94990\\r\\n95722   78709\\r\\n44529   11954\\r\\n40869   74940\\r\\n85270   98409\\r\\n61916   88339\\r\\n94503   31524\\r\\n57636   10919\\r\\n34500   53621\\r\\n67881   27216\\r\\n93866   48086\\r\\n95505   41472\\r\\n60258   13439\\r\\n73971   96879\\r\\n78155   84381\\r\\n52246   30293\\r\\n42752   11420\\r\\n91033   69183\\r\\n91316   64187\\r\\n99667   30481\\r\\n26343   66657\\r\\n47584   85776\\r\\n88747   93445\\r\\n48170   29134\\r\\n82355   98303\\r\\n72601   67372\\r\\n59362   16525\\r\\n23719   70681\\r\\n73439   89676\\r\\n41361   45165\\r\\n91378   13419\\r\\n23936   33954\\r\\n98014   13399\\r\\n15650   65042\\r\\n64527   77524\\r\\n57963   13032\\r\\n24657   39982\\r\\n71342   37777\\r\\n48315   75222\\r\\n54519   66142\\r\\n76974   53621\\r\\n85608   27055\\r\\n20837   93663\\r\\n54927   24425\\r\\n13139   20622\\r\\n15005   11420\\r\\n84490   76060\\r\\n89171   70473\\r\\n17832   96879\\r\\n18470   54382\\r\\n45260   83667\\r\\n17276   27108\\r\\n52681   32349\\r\\n61355   13439\\r\\n47525   11420\\r\\n36905   70681\\r\\n59209   75250\\r\\n95591   47770\\r\\n14642   68650\\r\\n40203   73611\\r\\n52858   61463\\r\\n48675   42759\\r\\n98405   64868\\r\\n80951   82870\\r\\n53621   79358\\r\\n25327   78193\\r\\n87475   48086\\r\\n51819   24117\\r\\n27015   17111\\r\\n98465   66142\\r\\n72427   73936\\r\\n71733   96879\\r\\n89121   60064\\r\\n22901   30122\\r\\n10856   48527\\r\\n36754   64868\\r\\n50122   50538\\r\\n52355   73026\\r\\n40825   40951\\r\\n80386   16069\\r\\n83603   36182\\r\\n58594   13717\\r\\n31497   71550\\r\\n40053   48086\\r\\n38188   39233\\r\\n18994   96329\\r\\n79861   50323\\r\\n23321   85776\\r\\n61404   10062\\r\\n95531   53621\\r\\n34909   98952\\r\\n23995   93754\\r\\n13871   98442\\r\\n54796   30148\\r\\n35319   93955\\r\\n64282   26287\\r\\n83133   82959\\r\\n56071   47244\\r\\n67009   47394\\r\\n92507   47341\\r\\n85776   46164\\r\\n30709   57965\\r\\n59236   35175\\r\\n20724   66427\\r\\n33428   94891\\r\\n11751   44280\\r\\n36923   59594\\r\\n76810   42646\\r\\n35667   96679\\r\\n42268   98409\\r\\n57684   38466\\r\\n40804   66142\\r\\n76968   66990\\r\\n99714   52069\\r\\n57148   28084\\r\\n16707   54930\\r\\n16915   32950\\r\\n18508   45796\\r\\n84647   62099\\r\\n24717   15951\\r\\n97165   52069\\r\\n88312   54080\\r\\n44527   62695\\r\\n13285   75521\\r\\n15532   45721\\r\\n83771   98303\\r\\n69300   69450\\r\\n33929   98294\\r\\n63656   85776\\r\\n58244   89121\\r\\n98243   65914\\r\\n79896   43809\\r\\n61035   98303\\r\\n66387   66433\\r\\n35297   91503\\r\\n60092   18889\\r\\n93026   91504\\r\\n73054   33258\\r\\n64475   70681\\r\\n54041   12197\\r\\n23521   20243\\r\\n91854   58244\\r\\n95611   62695\\r\\n70144   14591\\r\\n46105   93466\\r\\n13551   22559\\r\\n98318   32023\\r\\n72900   96879\\r\\n17675   99283\\r\\n21850   56050\\r\\n50581   44825\\r\\n49017   89297\\r\\n26268   73032\\r\\n76642   24749\\r\\n57925   72795\\r\\n63723   27403\\r\\n32025   20622\\r\\n15951   48086\\r\\n85672   58244\\r\\n24553   57031\\r\\n49464   62695\\r\\n67767   85776\\r\\n58337   85776\\r\\n74953   59594\\r\\n69307   20622\\r\\n54291   39233\\r\\n52996   15951\\r\\n65777   98303\\r\\n66534   75432\\r\\n23911   73020\\r\\n35599   53621\\r\\n80629   79286\\r\\n59328   98303\\r\\n88093   18865\\r\\n25517   18865\\r\\n19457   58244\\r\\n12955   55118\\r\\n90990   19917\\r\\n45463   45747\\r\\n77714   64511\\r\\n56882   42004\\r\\n25038   31524\\r\\n85217   20622\\r\\n99959   36346\\r\\n79460   26413\\r\\n86151   41237\\r\\n48086   30398\\r\\n31177   36926\\r\\n15315   83228\\r\\n73930   58503\\r\\n31633   37808\\r\\n25732   52462\\r\\n72722   22108\\r\\n21950   54382\\r\\n32065   92741\\r\\n45641   26363\\r\\n97024   96879\\r\\n44240   57089\\r\\n59276   20622\\r\\n42165   57163\\r\\n72746   70681\\r\\n70771   36926\\r\\n38232   78721\\r\\n71104   91763\\r\\n93422   84268\\r\\n82725   93116\\r\\n38739   25006\\r\\n93983   67881\\r\\n66261   37918\\r\\n45318   60554\\r\\n29927   61543\\r\\n75323   14960\\r\\n76535   13439\\r\\n95437   57747\\r\\n70363   58272\\r\\n79957   15661\\r\\n67064   32990\\r\\n20092   96879\\r\\n12567   69183\\r\\n52045   86433\\r\\n56000   76650\\r\\n72348   62567\\r\\n68077   58244\\r\\n51346   64868\\r\\n90427   68815\\r\\n55238   84016\\r\\n63141   23115\\r\\n44187   48086\\r\\n73242   46883\\r\\n37067   74850\\r\\n22831   78193\\r\\n33348   54605\\r\\n36004   75163\\r\\n69742   62695\\r\\n97982   85776\\r\\n81147   69183\\r\\n30121   44534\\r\\n89460   70312\\r\\n65414   48502\\r\\n41797   70681\\r\\n97715   59594\\r\\n11895   62739\\r\\n53566   36346\\r\\n88592   13685\\r\\n44867   18865\\r\\n38494   93238\\r\\n90302   57031\\r\\n29959   77575\\r\\n14477   64868\\r\\n95081   94031\\r\\n80618   98409\\r\\n31630   59639\\r\\n11480   15771\\r\\n57197   12243\\r\\n69484   97473\\r\\n15324   54382\\r\\n85375   28233\\r\\n70310   39233\\r\\n29134   66142\\r\\n17677   70681\\r\\n10533   50323\\r\\n32670   13399\\r\\n65046   89121\\r\\n27250   57826\\r\\n50565   18865\\r\\n10750   15951\\r\\n86359   36926\\r\\n17412   20622\\r\\n56284   58734\\r\\n24630   32786\\r\\n51890   31524\\r\\n62891   15178\\r\\n90991   54171\\r\\n18599   35575\\r\\n18865   35025\\r\\n26344   13399\\r\\n18002   85776\\r\\n61277   96879\\r\\n37141   57031\\r\\n86471   75319\\r\\n55111   37439\\r\\n41036   72230\\r\\n57319   96257\\r\\n44621   10761\\r\\n63452   89121\\r\\n64428   44023\\r\\n94409   64868\\r\\n97533   68365\\r\\n44422   53621\\r\\n82027   13439\\r\\n12954   54919\\r\\n47142   25744\\r\\n85528   66521\\r\\n81778   62695\\r\\n67727   32777\\r\\n66391   39630\\r\\n24686   62695\\r\\n81899   59594\\r\\n23924   99354\\r\\n28401   50030\\r\\n25839   98409\\r\\n80138   30520\\r\\n54999   14824\\r\\n93520   54172\\r\\n75113   64190\\r\\n60779   18923\\r\\n10355   41820\\r\\n32709   20332\\r\\n54938   70681\\r\\n49081   57031\\r\\n59825   82761\\r\\n38481   66142\\r\\n17642   85776\\r\\n93320   64868\\r\\n86185   89121\\r\\n90785   20622\\r\\n78441   70270\\r\\n15058   58554\\r\\n13159   99885\\r\\n71048   82807\\r\\n18657   62823\\r\\n25375   54382\\r\\n86493   57461\\r\\n68185   49281\\r\\n36666   48086\\r\\n57255   76149\\r\\n69221   70681\\r\\n13455   45466\\r\\n44124   44225\\r\\n12571   79912\\r\\n22123   18865\\r\\n41374   19055\\r\\n14066   88458\\r\\n42576   53164\\r\\n54786   71358\\r\\n48734   32761\\r\\n72366   76013\\r\\n38118   52069\\r\\n28516   98303\\r\\n84839   92356\\r\\n33967   51873\\r\\n39686   42909\\r\\n97775   58244\\r\\n97891   20622\\r\\n95436   31524\\r\\n40160   26365\\r\\n45663   83105\\r\\n73959   62695\\r\\n83007   21673\\r\\n34716   18865\\r\\n42940   60190\\r\\n30448   98303\\r\\n54016   56062\\r\\n98158   11420\\r\\n76233   67511\\r\\n71248   14271\\r\\n33181   52757\\r\\n73295   59594\\r\\n42588   69183\\r\\n28020   18683\\r\\n65760   13399\\r\\n51626   35859\\r\\n23978   66142\\r\\n26564   53338\\r\\n34634   15951\\r\\n47149   30575\\r\\n28625   20989\\r\\n78780   85370\\r\\n98473   26689\\r\\n66142   58244\\r\\n37914   48086\\r\\n91597   96879\\r\\n42550   89165\\r\\n79970   74953\\r\\n73019   69183\\r\\n21908   27351\\r\\n96153   79995\\r\\n58843   53621\\r\\n91807   12526\\r\\n92395   71081\\r\\n21579   48086\\r\\n79524   98282\\r\\n34060   85776\\r\\n27571   41575\\r\\n62300   37578\\r\\n88423   72261\\r\\n66840   95531\\r\\n39956   44045\\r\\n77892   67881\\r\\n10204   80385\\r\\n55417   42304\\r\\n34672   18865\\r\\n40908   48086\\r\\n97799   20148\\r\\n25065   53621\\r\\n62503   98409\\r\\n96437   67881\\r\\n74378   31222\\r\\n61972   70681\\r\\n89255   70681\\r\\n80855   18865\\r\\n54885   38371\\r\\n64050   15556\\r\\n21358   10464\\r\\n25723   92679\\r\\n95201   53621\\r\\n61421   49146\\r\\n86050   89893\\r\\n93226   78113\\r\\n42266   75153\\r\\n11881   17646\\r\\n69987   30481\\r\\n71028   85327\\r\\n24743   32122\\r\\n48190   85312\\r\\n45256   64868\\r\\n19567   11420\\r\\n89596   50323\\r\\n49101   86202\\r\\n68965   39233\\r\\n50874   13439\\r\\n17159   24728\\r\\n50369   35203\\r\\n78343   56136\\r\\n55351   73651\\r\\n48074   59594\\r\\n11532   42633\\r\\n82644   92794\\r\\n95771   34677\\r\\n59150   28294\\r\\n38484   64868\\r\\n48890   64382\\r\\n68966   28298\\r\\n51394   66142\\r\\n69899   91877\\r\\n20622   27299\\r\\n47091   19931\\r\\n81236   72834\\r\\n78009   41686\\r\\n48131   52069\\r\\n34760   83087\\r\\n54872   88748\\r\\n99903   44280\\r\\n75164   77528\\r\\n98303   81353\\r\\n89179   47262\\r\\n93330   85776\\r\\n64653   62695\\r\\n75680   59594\\r\\n28615   46658\\r\\n24345   58244\\r\\n79606   36346\\r\\n48948   97944\\r\\n98505   89997\\r\\n56392   90073\\r\\n76055   90144\\r\\n82417   29331\\r\\n62098   20173\\r\\n17254   59594\\r\\n48731   89213\\r\\n91622   10612\\r\\n96177   62695\\r\\n52069   59594\\r\\n13399   98409\\r\\n32967   62695\\r\\n80796   97619\\r\\n77193   28072\\r\\n55904   13399\\r\\n84250   81410\\r\\n53217   64868\\r\\n10500   80320\\r\\n67277   53621\\r\\n72249   93147\\r\\n65047   54902\\r\\n17107   63592\\r\\n76194   12779\\r\\n27559   83996\\r\\n79679   50585\\r\\n61580   69975\\r\\n65266   31524\\r\\n88473   84465\\r\\n79876   62695\\r\\n65441   16454\\r\\n80352   69183\\r\\n82496   39233\\r\\n52114   67176\\r\\n51220   91015\\r\\n50000   53335\\r\\n42335   68722\\r\\n53404   43046\\r\\n99871   66142\\r\\n32080   89121\\r\\n31786   17440\\r\\n92788   21713\\r\\n56249   44735\\r\\n61367   48207\\r\\n62686   18865\\r\\n96072   82701\\r\\n20243   17083\\r\\n12117   35213\\r\\n19815   26817\\r\\n79102   94396\\r\\n44142   48396\\r\\n69916   20622\\r\\n55931   67881\\r\\n31342   63716\\r\\n39653   62400\\r\\n77941   81859\\r\\n11114   80231\\r\\n52176   70681\\r\\n57866   95927\\r\\n16866   98409\\r\\n58810   52495\\r\\n30481   13399\\r\\n47222   62695\\r\\n44280   37037\\r\\n14384   62695\\r\\n87330   99383\\r\\n36889   98303\\r\\n87970   58244\\r\\n53739   41685\\r\\n40509   84262\\r\\n87526   11810\\r\\n34019   89121\\r\\n66761   29134\\r\\n82984   80221\\r\\n83300   43046\\r\\n31073   13399\\r\\n38528   10345\\r\\n42647   69040\\r\\n78499   66142\\r\\n65835   13399\\r\\n11888   52069\\r\\n16021   52069\\r\\n77506   18865\\r\\n37718   48194\\r\\n30087   28445\\r\\n11104   52070\\r\\n16603   52069\\r\\n32201   52069\\r\\n80129   87617\\r\\n30931   20174\\r\\n55331   36346\\r\\n88876   58551\\r\\n78652   57031\\r\\n81997   26780\\r\\n44346   20622\\r\\n31652   15430\\r\\n97390   65924\\r\\n84105   42911\\r\\n51646   52069\\r\\n73632   39233\\r\\n22774   58432\\r\\n67720   10485\\r\\n94677   22142\\r\\n15291   23118\\r\\n97553   91441\\r\\n13036   16132\\r\\n66370   89121\\r\\n47010   64499\\r\\n14579   36926\\r\\n71383   38714\\r\\n36373   44545\\r\\n80180   48086\\r\\n30591   52069\\r\\n90029   94693\\r\\n99057   45433\\r\\n96879   59594\\r\\n30934   96879\\r\\n40909   64001\\r\\n83174   44065\\r\\n99020   88105\\r\\n11420   41090\\r\\n52834   64349\\r\\n29417   40615\\r\\n23216   84918\\r\\n61489   62695\\r\\n69615   63436\\r\\n64767   37178\\r\\n28368   31524\\r\\n29166   83509\\r\\n88181   26952\\r\\n92376   46034\\r\\n56924   13399\\r\\n16465   18865\\r\\n29356   68035\\r\\n54993   36926\\r\\n18295   67097\\r\\n82237   43901\\r\\n78347   15951\\r\\n31212   15951\\r\\n36998   54208\\r\\n72196   14327\\r\\n10596   59594\\r\\n40421   66142\\r\\n10375   71778\\r\\n53059   29196\\r\\n33476   68714\\r\\n88721   27093\\r\\n82358   83161\\r\\n45486   51031\\r\\n61135   70681\\r\\n25501   16321\\r\\n12221   62619\\r\\n98976   89121\\r\\n83483   36480\\r\\n24673   41710\\r\\n36211   39233\\r\\n65135   61232\\r\\n64780   43227\\r\\n80301   70681\\r\\n45462   68721\\r\\n67491   81035\\r\\n79555   81549\\r\\n58586   95531\\r\\n52960   12428\\r\\n49575   44280\\r\\n65496   13439\\r\\n66682   98303\\r\\n93266   13399\\r\\n30310   69183\\r\\n21871   50286\\r\\n53042   52803\\r\\n22862   21603\\r\\n78193   85776\\r\\n87258   87131\\r\\n76615   84237\\r\\n88433   86471\\r\\n11880   74358\\r\\n27516   54382\\r\\n90874   52601\\r\\n95239   98303\\r\\n35641   18223\\r\\n93150   13439\\r\\n23926   14395\\r\\n68954   80564\\r\\n67708   28415\\r\\n54348   11420\\r\\n32006   70313\\r\\n89793   59594\\r\\n47625   20243\\r\\n42304   15951\\r\\n48069   91705\\r\\n44492   92921\\r\\n18981   42304\\r\\n13501   71398\\r\\n64868   18580\\r\\n38280   87499\\r\\n40480   96879\\r\\n76161   87470\\r\\n53440   26034\\r\\n99706   54382\\r\\n22102   95972\\r\\n23433   56267\\r\\n70986   83482\\r\\n49356   98303\\r\\n25792   48432\\r\\n87046   20622\\r\\n44220   54382\\r\\n19076   22755\\r\\n66811   96311\\r\\n90099   15951\\r\\n33595   70999\\r\\n19173   20622\\r\\n12964   56430\";\n\n//# sourceURL=webpack://super-template/./src/challenges/2024/1/input.txt?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;