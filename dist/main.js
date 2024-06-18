/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Basic_Light.ttf */ \"./fonts/Basic_Light.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n    font-family: 'Basic';\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\r\n}\r\n\r\n* {\r\n    /* CSS HEX */\r\n    --russian-violet: #301a4bff;\r\n    --brunswick-green: #004c45ff;\r\n    --azure: #3185fcff;\r\n    --platinum: #dae3e5ff;\r\n\r\n\r\n    --background: var(--russian-violet);\r\n    --text: #ffffff;\r\n    --text-invert: #000000;\r\n\r\n    font-family: 'Basic';\r\n    color: var(--text);\r\n}\r\n\r\nhtml,\r\nbody {\r\n    margin: 0;\r\n    font-family: 'Basic';\r\n    color: var(--text);\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n}\r\n\r\n.main-divs-default {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 100vh;\r\n}\r\n\r\n.btn-add {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: transparent;\r\n    border: solid 1px var(--text);\r\n    font-size: 1.5rem;\r\n    transition: 500ms;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-add:hover {\r\n    background-color: var(--text);\r\n    color: var(--background);\r\n}\r\n\r\n.btn-add-wrapper {\r\n    margin-top: 10px;\r\n    justify-self: end;\r\n    width: 100%;\r\n    max-width: calc(100% - 20px);\r\n    height: 10%;\r\n    margin-bottom: 10px;\r\n    position: sticky;\r\n}\r\n\r\n/*Sidebar CSS*/\r\n\r\n.sidebar {\r\n    flex: 1;\r\n    background-color: var(--background);\r\n    justify-content: space-between;\r\n    display: flex;\r\n}\r\n\r\n.sidebar-lists-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    padding-top: 40px;\r\n    overflow: auto;\r\n    justify-self: center;\r\n}\r\n\r\n.sidebar-list {\r\n    border-top: solid 1px var(--text);\r\n}\r\n\r\n.opposite-hover:hover {\r\n    transition: 500ms;\r\n    background-color: var(--text);\r\n    color: var(--background);\r\n}\r\n\r\n.sidebar-item {\r\n    background-color: var(--background);\r\n    width: calc(100% - 40px);\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\n.list-icon-btn {\r\n    display: flex;\r\n    height: 40px;\r\n}\r\n\r\n\r\n/*Main CSS*/\r\n\r\n.main {\r\n    display: flex;\r\n    flex: 3;\r\n    background-color: var(--background);\r\n    padding: 0;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-left: solid 1px var(--text);\r\n}\r\n\r\n.main-list-section {\r\n    width: 100%;\r\n    flex: 1;\r\n}\r\n\r\n.main-list-title {\r\n    margin-top: 80px;\r\n    margin-left: 40px;\r\n    margin-bottom: 40px;\r\n    font-size: 2rem;\r\n}\r\n\r\n.task-list {\r\n    width: 100%;\r\n    max-width: calc(100% - 80px);\r\n    max-height: 350px;\r\n    padding: 40px;\r\n    overflow: auto;\r\n    border-top: 1px solid var(--text);\r\n    border-bottom: 1px solid var(--text);\r\n}\r\n\r\n.btn-add-task {\r\n    flex: 1;\r\n}\r\n\r\n.task {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    border-bottom: solid 1px var(--text);\r\n    margin-bottom: 20px;\r\n    padding-bottom: 10px;\r\n    height: 40px;\r\n    gap: 20px;\r\n}\r\n\r\n.task.task-priority-low .task-name {\r\n    color: lightgreen !important; /* Low priority color */\r\n}\r\n\r\n.task.task-priority-medium .task-name {\r\n    color: yellow !important; /* Medium priority color */\r\n}\r\n\r\n.task.task-priority-high .task-name {\r\n    color: salmon !important; /* High priority color */\r\n}\r\n\r\n.task-name {\r\n    margin-right: auto;\r\n}\r\n\r\n.task-date {}\r\n\r\n.task-btn-info {\r\n    border-radius: 10px;\r\n    height: 100%;\r\n}\r\n\r\n.task-btn-delete {\r\n    border-radius: 10px;\r\n    height: 100%;\r\n}\r\n\r\n.icon-btn {\r\n    max-width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.icon-btn:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n/* Modals CSS */\r\n\r\ninput {\r\n    color: var(--text-invert);\r\n    width: 40%;\r\n    height: 10%;\r\n}\r\n\r\n#modal-add-list, #modal-add-task, #modal-edit-task {\r\n    width: 350px;\r\n    position: absolute;\r\n    inset: 0;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 20px;\r\n    background-color: var(--background);\r\n    color: var(--text);\r\n}\r\n\r\n.input-wrapper {\r\n    width: 300px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.radio-wrapper {\r\n    display: flex;\r\n    width: 100px;\r\n    justify-content: space-between;\r\n}\r\n\r\n#btn-submit-task, #btn-edit-task {\r\n    height: 20%;\r\n    margin-top: 20px;\r\n}\r\n\r\n.radio-label {\r\n    width: 60px;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n    width: 18px;\r\n    height: 18px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", (event) => {\r\n    // Add Task vars\r\n    const addTaskBtn = document.getElementById(\"btn-add-task\");\r\n    console.log(addTaskBtn);\r\n    const modalAddTask = document.getElementById(\"modal-add-task\");\r\n    const submitTaskBtn = document.getElementById(\"btn-submit-task\");\r\n    const addTaskForm = document.getElementById(\"add-task-form\");\r\n\r\n    // Add List vars\r\n    const addListBtn = document.getElementById(\"btn-add-list\");\r\n    const modalAddList = document.getElementById(\"modal-add-list\");\r\n    const submitListBtn = document.getElementById(\"btn-submit-list\");\r\n    const addListForm = document.getElementById(\"add-list-form\");\r\n\r\n    // Edit task vars\r\n    const editTaskBtn = document.getElementById(\"btn-edit-task\");\r\n    const modalEditTask = document.getElementById(\"modal-edit-task\");\r\n    const editTaskForm = document.getElementById(\"edit-task-form\");\r\n\r\n    const body = document.body;\r\n\r\nwindow.onload = function () {\r\n    loadAllTasks();\r\n    loadLists();\r\n};\r\n\r\n// Loads all tasks\r\nfunction loadAllTasks() {\r\n    const mainListTitle = document.querySelector(\".main-list-title\");\r\n    mainListTitle.textContent = \"All Tasks\";\r\n    const taskListDiv = document.querySelector(\".task-list\");\r\n    taskListDiv.innerHTML = \"\";\r\n\r\n    // Load tasks from 'All Tasks'\r\n    const allTasks = JSON.parse(localStorage.getItem('All Tasks')) || [];\r\n    allTasks.forEach((task) => {\r\n        const taskDiv = createTaskElement(task);\r\n        taskListDiv.appendChild(taskDiv);\r\n    });\r\n\r\n    // Load tasks from all other lists\r\n    const lists = JSON.parse(localStorage.getItem('lists')) || [];\r\n    lists.forEach((item) => {\r\n        const tasks = JSON.parse(localStorage.getItem(item));\r\n        if (tasks != null) {\r\n            tasks.forEach((task) => {\r\n                const taskDiv = createTaskElement(task);\r\n                taskListDiv.appendChild(taskDiv);\r\n            });\r\n        }\r\n    });\r\n}\r\n\r\n// Submitting forms event listeners\r\naddListForm.addEventListener('submit', function(event) {\r\n    event.preventDefault(); // Prevent default form submission\r\n    submitList();\r\n});\r\n\r\naddTaskForm.addEventListener('submit', function(event) {\r\n    event.preventDefault(); // Prevent default form submission\r\n    submitTask();\r\n});\r\n\r\neditTaskForm.addEventListener('submit', function(event) {\r\n    event.preventDefault(); // Prevent default form submission\r\n    submitEditedTask();\r\n});\r\n\r\n// Creates a task div\r\nfunction createTaskElement(task) {\r\n    const taskDiv = document.createElement(\"div\");\r\n    taskDiv.className = `task task-priority-${task.priority}`;\r\n\r\n    const taskNameDiv = document.createElement(\"div\");\r\n    taskNameDiv.className = \"task-name\";\r\n    taskNameDiv.textContent = task.name;\r\n\r\n    const taskDateDiv = document.createElement(\"div\");\r\n    taskDateDiv.className = \"task-date\";\r\n    taskDateDiv.textContent = task.date;\r\n\r\n    const taskBtnInfoDiv = document.createElement(\"div\");\r\n    taskBtnInfoDiv.className = \"task-btn-info\";\r\n    const infoImg = document.createElement(\"img\");\r\n    infoImg.className = \"icon-btn\";\r\n    infoImg.src = \"../imgs/info-icon.png\";\r\n    infoImg.alt = \"info button\";\r\n    infoImg.addEventListener(\"click\", function (e) {\r\n        editTask(e, task);\r\n    });\r\n    taskBtnInfoDiv.appendChild(infoImg);\r\n\r\n    const taskBtnDeleteDiv = document.createElement(\"div\");\r\n    taskBtnDeleteDiv.className = \"task-btn-delete\";\r\n\r\n    const deleteImg = document.createElement(\"img\");\r\n    deleteImg.className = \"icon-btn\";\r\n    deleteImg.src = \"../imgs/delete-icon.png\";\r\n    deleteImg.alt = \"delete button\";\r\n    deleteImg.addEventListener(\"click\", function () {\r\n        deleteTask(task.name, task.listName);\r\n    });\r\n    taskBtnDeleteDiv.appendChild(deleteImg);\r\n\r\n    taskDiv.appendChild(taskNameDiv);\r\n    taskDiv.appendChild(taskDateDiv);\r\n    taskDiv.appendChild(taskBtnInfoDiv);\r\n    taskDiv.appendChild(taskBtnDeleteDiv);\r\n\r\n    return taskDiv;\r\n}\r\n\r\n// Loads lists in the sidebar\r\nfunction loadLists() {\r\n    const sidebarWrapper = document.querySelector(\".sidebar-lists-wrapper\");\r\n    sidebarWrapper.innerHTML = \"\";\r\n\r\n    const lists = JSON.parse(localStorage.getItem('lists')) || [];\r\n\r\n    const allTasks = document.createElement(\"div\");\r\n    allTasks.className = \"\";\r\n    allTasks.textContent = \"All Tasks\";\r\n    allTasks.onclick = function () { loadAllTasks() };\r\n    allTasks.className = \"sidebar-item sidebar-all-tasks\";\r\n    sidebarWrapper.appendChild(allTasks);\r\n    lists.forEach((item) => {\r\n        const list = document.createElement(\"div\");\r\n        list.className = \"sidebar-item sidebar-list\";\r\n        list.textContent = item;\r\n        list.onclick = function () { loadList(item) };\r\n\r\n        const deleteBtn = document.createElement(\"div\");\r\n        deleteBtn.className = \"list-btn-delete\";\r\n        deleteBtn.addEventListener(\"click\", function (e) {\r\n            e.stopPropagation();\r\n            const listName = e.target.closest(\".sidebar-item\").textContent.trim();\r\n            deleteList(listName);\r\n        });\r\n\r\n        const deleteImg = document.createElement(\"img\");\r\n        deleteImg.className = \"list-icon-btn\";\r\n        deleteImg.src = \"../imgs/delete-icon.png\";\r\n        deleteImg.alt = \"delete button\";\r\n\r\n        deleteBtn.appendChild(deleteImg);\r\n        list.appendChild(deleteBtn);\r\n        sidebarWrapper.appendChild(list);\r\n    });\r\n\r\n}\r\n\r\n// Loads a selected list\r\nfunction loadList(listName) {\r\n    // Renames the list title\r\n    const mainListTitle = document.querySelector(\".main-list-title\");\r\n    mainListTitle.textContent = listName;\r\n    const taskListDiv = document.querySelector(\".task-list\");\r\n    taskListDiv.innerHTML = \"\";\r\n\r\n    const listTasks = JSON.parse(localStorage.getItem(listName)) || [];\r\n    listTasks.forEach((task) => {\r\n        const taskDiv = createTaskElement(task);\r\n        taskListDiv.appendChild(taskDiv);\r\n    });\r\n}\r\n\r\n// Adds a task to the current list\r\nfunction submitTask() {\r\n    const taskName = document.querySelector(\".form-task-name\").value.trim();\r\n    const taskDescription = document.querySelector(\".form-task-description\").value.trim();\r\n    const taskDate = document.querySelector(\".form-task-date\").value;\r\n    const taskPriority = document.querySelector(\"input[name='priority']:checked\").value;\r\n    const list = document.querySelector(\".main-list-title\").textContent;\r\n    const tasks = JSON.parse(localStorage.getItem(list)) || [];\r\n\r\n\r\n    if (hasDuplicateName(tasks, taskName)) {\r\n        alert(\"Error: Task name already exists!\");\r\n        return; // Prevent further execution if duplicate is found\r\n    }\r\n\r\n    const task = {\r\n        name: taskName,\r\n        description: taskDescription,\r\n        date: taskDate,\r\n        priority: taskPriority,\r\n        listName: list\r\n    };\r\n\r\n    tasks.push(task);\r\n\r\n    localStorage.setItem(list, JSON.stringify(tasks));\r\n\r\n    modalAddTask.style.display = \"none\";\r\n    if (list == \"All Tasks\") {\r\n        loadAllTasks();\r\n    } else {\r\n        loadList(list);\r\n    }\r\n}\r\n\r\n// Adds a list\r\nfunction submitList() {\r\n    const listName = document.querySelector(\".form-list-name\").value;\r\n    const existingLists = JSON.parse(localStorage.getItem('lists')) || [];\r\n\r\n    existingLists.push(listName);\r\n    localStorage.setItem('lists', JSON.stringify(existingLists));\r\n\r\n    modalAddList.style.display = \"none\";\r\n    loadLists();\r\n}\r\n\r\n// MODALS JS\r\n\r\n// Opens Add Task modal\r\naddTaskBtn.addEventListener(\"click\", (e) => {\r\n    modalAddTask.show();\r\n    modalAddTask.style.display = \"flex\";\r\n    e.stopPropagation();\r\n});\r\n\r\n// Opens Add List Modal\r\naddListBtn.addEventListener(\"click\", (e) => {\r\n    modalAddList.show();\r\n    modalAddList.style.display = \"flex\";\r\n    e.stopPropagation();\r\n});\r\n\r\n// Closes Modals\r\nbody.addEventListener(\"click\", (e) => {\r\n    if (modalAddList.open && !modalAddList.contains(e.target)) {\r\n        modalAddList.style.display = \"none\";\r\n    }\r\n    if (modalAddTask.open && !modalAddTask.contains(e.target)) {\r\n        modalAddTask.style.display = \"none\";\r\n    }\r\n    if (modalEditTask.open && !modalEditTask.contains(e.target)) {\r\n        modalEditTask.style.display = \"none\";\r\n    }\r\n});\r\n\r\n// Delete task\r\nfunction deleteTask(taskName, listName) {\r\n    const mainListTitle = document.querySelector(\".main-list-title\").textContent;\r\n    let tasks = JSON.parse(localStorage.getItem(listName)) || [];\r\n    tasks = tasks.filter(task => task.name !== taskName);\r\n    localStorage.setItem(listName, JSON.stringify(tasks));\r\n    if (mainListTitle == \"All Tasks\") {\r\n        loadAllTasks();\r\n    } else {\r\n        loadList(mainListTitle);\r\n    }\r\n}\r\n\r\n// Delete list\r\nfunction deleteList(listName) {\r\n    let lists = JSON.parse(localStorage.getItem('lists')) || [];\r\n    lists = lists.filter(list => list !== listName);\r\n    localStorage.setItem('lists', JSON.stringify(lists));\r\n    localStorage.removeItem(listName); // Remove the list's tasks\r\n    loadLists();\r\n    loadAllTasks();\r\n}\r\n\r\n// Opens Edit Task Modal\r\nfunction editTask(e, task) {\r\n    modalEditTask.show();\r\n    modalEditTask.style.display = \"flex\";\r\n    e.stopPropagation();\r\n\r\n    const taskName = document.querySelector(\".form-edit-task-name\");\r\n    const taskDesc = document.querySelector(\".form-edit-task-description\");\r\n    const taskDate = document.querySelector(\".form-edit-task-date\");\r\n\r\n    const radioLow = document.querySelector(\".radio-edit-low\");\r\n    const radioMedium = document.querySelector(\".radio-edit-medium\");\r\n    const radioHigh = document.querySelector(\".radio-edit-high\");\r\n\r\n    const originalTaskNameInput = document.querySelector(\"input[name='original-task-name']\");\r\n    originalTaskNameInput.value = task.name;\r\n\r\n    const taskList = document.querySelector(\"input[name='task-list']\");\r\n    taskList.value = task.listName;\r\n\r\n    taskName.value = task.name;\r\n    taskDesc.value = task.description;\r\n    taskDate.value = task.date;\r\n    if (task.priority == \"low\") {\r\n        radioLow.checked = true;\r\n    } else if (task.priority == \"medium\") {\r\n        radioMedium.checked = true;\r\n    } else {\r\n        radioHigh.checked = true;\r\n    }\r\n}\r\n\r\nfunction submitEditedTask() {\r\n    const taskName = document.querySelector(\".form-edit-task-name\").value.trim();\r\n    const taskDescription = document.querySelector(\".form-edit-task-description\").value.trim();\r\n    const taskDate = document.querySelector(\".form-edit-task-date\").value;\r\n    const taskPriority = document.querySelector(\"input[name='priority-edit']:checked\").value;\r\n    const list = document.querySelector(\"input[name='task-list']\").value;\r\n\r\n    const editedTask = {\r\n        name: taskName,\r\n        description: taskDescription,\r\n        date: taskDate,\r\n        priority: taskPriority,\r\n        listName: list\r\n    };\r\n\r\n    let tasks = JSON.parse(localStorage.getItem(list)) || [];\r\n    const originalTaskName = document.querySelector(\"input[name='original-task-name']\").value;\r\n\r\n    // Check for duplicates excluding the original name\r\n    if (hasDuplicateName(tasks.filter(task => task.name !== originalTaskName), taskName)) {\r\n        alert(\"Error: Task name already exists!\");\r\n        return; // Prevent update if duplicate is found\r\n    }\r\n\r\n    const taskIndex = tasks.findIndex(task => task.name === originalTaskName);\r\n\r\n    if (taskIndex > -1) {\r\n        tasks[taskIndex] = editedTask;\r\n        localStorage.setItem(list, JSON.stringify(tasks));\r\n    }\r\n\r\n    modalEditTask.style.display = \"none\";\r\n    if (list === \"All Tasks\") {\r\n        loadAllTasks();\r\n    } else {\r\n        loadList(list);\r\n    }\r\n}\r\n\r\nfunction hasDuplicateName(tasks, name) {\r\n    return tasks.some(task => task.name.toLowerCase() === name.toLowerCase()); // Case-insensitive check\r\n}\r\n\r\n});\n\n//# sourceURL=webpack://to-do-list/./src/script.js?");

/***/ }),

/***/ "./fonts/Basic_Light.ttf":
/*!*******************************!*\
  !*** ./fonts/Basic_Light.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c058eb88e3a7c999dcef.ttf\";\n\n//# sourceURL=webpack://to-do-list/./fonts/Basic_Light.ttf?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;