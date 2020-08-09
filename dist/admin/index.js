/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/REST/REST.js":
/*!**************************!*\
  !*** ./src/REST/REST.js ***!
  \**************************/
/*! exports provided: sendQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendQuestion\", function() { return sendQuestion; });\nfunction sendQuestion(question) {\n  var url = \"\".concat(window.location.href, \"addNewQuestion\");\n  fetch(url, {\n    method: 'POST',\n    mode: 'same-origin',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(question)\n  }).then(function (response) {\n    return response.ok && console.log('ВОПРОС СОХРАНЁН НА СЕРВЕРЕ');\n  })[\"catch\"](function (err) {\n    return console.error('ERROR', err);\n  });\n}\n\n//# sourceURL=webpack:///./src/REST/REST.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.less */ \"./src/style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _inputsTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputsTarget */ \"./src/inputsTarget.js\");\n/* harmony import */ var _REST_REST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./REST/REST */ \"./src/REST/REST.js\");\n\n\n\n_inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"saveButton\"].addEventListener('click', saveQuestion);\n\nfunction saveQuestion() {\n  var isEmptyInputs = isEmptyValue();\n  var getQuestion = isEmptyInputs ? alert('НЕ ВСЕ ПОЛЯ ЗАПОЛНЕНЫ!') : getQuestionData();\n  getQuestion && Object(_REST_REST__WEBPACK_IMPORTED_MODULE_2__[\"sendQuestion\"])(getQuestion);\n}\n\nfunction getQuestionData() {\n  var questionData = {};\n  questionData.question = _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"question\"].value;\n  questionData.answerA = _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"answerA\"].value;\n  questionData.answerB = _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"answerB\"].value;\n  questionData.answerC = _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"answerC\"].value;\n  questionData.answerD = _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"answerD\"].value;\n  questionData.answerRight = _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"answerRight\"].value;\n  questionData.imageURL = _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"imageURL\"].value;\n  clearInputsValue();\n  return questionData;\n}\n\nfunction isEmptyValue() {\n  return _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"question\"].value === '' || _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"answerA\"].value === '' || _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"answerB\"].value === '' || _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"answerC\"].value === '' || _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"answerD\"].value === '' || _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"answerRight\"].value === '' || _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"imageURL\"].value === '';\n}\n\nfunction clearInputsValue() {\n  _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"question\"].value = '';\n  _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"answerA\"].value = '';\n  _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"answerB\"].value = '';\n  _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"answerC\"].value = '';\n  _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"answerD\"].value = '';\n  _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"answerRight\"].value = '';\n  _inputsTarget__WEBPACK_IMPORTED_MODULE_1__[\"imageURL\"].value = '';\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/inputsTarget.js":
/*!*****************************!*\
  !*** ./src/inputsTarget.js ***!
  \*****************************/
/*! exports provided: question, answerA, answerB, answerC, answerD, answerRight, imageURL, saveButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"question\", function() { return question; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"answerA\", function() { return answerA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"answerB\", function() { return answerB; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"answerC\", function() { return answerC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"answerD\", function() { return answerD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"answerRight\", function() { return answerRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"imageURL\", function() { return imageURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveButton\", function() { return saveButton; });\nvar question = document.getElementById('question');\nvar answerA = document.getElementById('answerA');\nvar answerB = document.getElementById('answerB');\nvar answerC = document.getElementById('answerC');\nvar answerD = document.getElementById('answerD');\nvar answerRight = document.getElementById('answerRight');\nvar imageURL = document.getElementById('imageURL');\nvar saveButton = document.getElementById('saveQuestion');\n\n//# sourceURL=webpack:///./src/inputsTarget.js?");

/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.less?");

/***/ })

/******/ });