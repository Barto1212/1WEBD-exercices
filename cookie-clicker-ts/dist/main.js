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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sessions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sessions */ \"./src/sessions.ts\");\n\n// --------------------- INITIALISATION  ---------------------\nvar cookieNum = (0,_sessions__WEBPACK_IMPORTED_MODULE_0__.getSession)();\nvar grandMaCount = 0;\nrender();\nvar clickButton = document.querySelector(\"#cookie-button\");\nvar addGrandMa = document.querySelector(\"#add-grand-ma\");\nsetInterval(function () {\n    addCookie(grandMaCount);\n    render();\n    (0,_sessions__WEBPACK_IMPORTED_MODULE_0__.saveSession)(cookieNum);\n}, 1000);\nclickButton === null || clickButton === void 0 ? void 0 : clickButton.addEventListener(\"click\", function () {\n    addCookie(1);\n    render();\n});\naddGrandMa === null || addGrandMa === void 0 ? void 0 : addGrandMa.addEventListener(\"click\", function () {\n    grandMaCount++;\n    render();\n});\n// --------------------- FONCTIONS  ---------------------\nfunction addCookie(cookieToAdd) {\n    cookieNum = cookieNum + (cookieToAdd !== null && cookieToAdd !== void 0 ? cookieToAdd : 1);\n}\nfunction render() {\n    var singuliercookie = cookieNum === 0 || cookieNum === 1;\n    var cookieCount = document.getElementById(\"cookie-count\");\n    if (cookieCount) {\n        cookieCount.innerHTML = \"cookie\".concat(singuliercookie ? \"\" : \"s\", \" : \").concat(cookieNum);\n    }\n    var singulierGrandMere = grandMaCount === 0 || grandMaCount === 1;\n    var grandMaCountId = document.getElementById(\"grand-ma-count\");\n    if (grandMaCountId) {\n        grandMaCountId.innerHTML = \"Vous avez \".concat(grandMaCount, \" grand-m\\u00E8re\").concat(singulierGrandMere ? \"\" : \"s\");\n    }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/sessions.ts":
/*!*************************!*\
  !*** ./src/sessions.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   saveSession: () => (/* binding */ saveSession)\n/* harmony export */ });\nfunction saveSession(cookieNum) {\n    localStorage.setItem(\"cookieNum\", String(cookieNum));\n}\nfunction getSession() {\n    var cookieNumLs = localStorage.getItem(\"cookieNum\");\n    if (isNaN(Number(cookieNumLs))) {\n        return 0;\n    }\n    return Number(cookieNumLs);\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/sessions.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;