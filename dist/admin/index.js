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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/style.less
var style = __webpack_require__(0);

// CONCATENATED MODULE: ./src/inputsTarget.js
var question = document.getElementById('question');
var answerA = document.getElementById('answerA');
var answerB = document.getElementById('answerB');
var answerC = document.getElementById('answerC');
var answerD = document.getElementById('answerD');
var answerRight = document.getElementById('answerRight');
var imageURL = document.getElementById('imageURL');
var saveButton = document.getElementById('saveQuestion');
// CONCATENATED MODULE: ./src/REST/REST.js
function sendQuestion(question) {
  var url = "".concat(window.location.href, "addNewQuestion");
  fetch(url, {
    method: 'POST',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(question)
  }).then(function (response) {
    return response.ok && console.log('ВОПРОС СОХРАНЁН НА СЕРВЕРЕ');
  })["catch"](function (err) {
    return console.error('ERROR', err);
  });
}
// CONCATENATED MODULE: ./src/index.js



saveButton.addEventListener('click', saveQuestion);

function saveQuestion() {
  var isEmptyInputs = isEmptyValue();
  var getQuestion = isEmptyInputs ? alert('НЕ ВСЕ ПОЛЯ ЗАПОЛНЕНЫ!') : getQuestionData();
  getQuestion && sendQuestion(getQuestion);
}

function getQuestionData() {
  var questionData = {};
  questionData.question = question.value;
  questionData.answerA = answerA.value;
  questionData.answerB = answerB.value;
  questionData.answerC = answerC.value;
  questionData.answerD = answerD.value;
  questionData.answerRight = answerRight.value;
  questionData.imageURL = imageURL.value;
  questionData.qid = generateQid();
  clearInputsValue();
  return questionData;
}

function generateQid() {
  return new Date().getTime();
}

function isEmptyValue() {
  return question.value === '' || answerA.value === '' || answerB.value === '' || answerC.value === '' || answerD.value === '' || answerRight.value === '' || imageURL.value === '';
}

function clearInputsValue() {
  question.value = '';
  answerA.value = '';
  answerB.value = '';
  answerC.value = '';
  answerD.value = '';
  answerRight.value = '';
  imageURL.value = '';
}

/***/ })
/******/ ]);