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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/scripts/highlight-search-results.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/scripts/highlight-search-results.js":
/*!********************************************************!*\
  !*** ./app/assets/scripts/highlight-search-results.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_legacy_highlight_search_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/legacy/highlight-search-results */ \"./app/assets/scripts/modules/legacy/highlight-search-results.js\");\nnew _modules_legacy_highlight_search_results__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack:///./app/assets/scripts/highlight-search-results.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/legacy/highlight-search-results.js":
/*!***********************************************************************!*\
  !*** ./app/assets/scripts/modules/legacy/highlight-search-results.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError(\"Cannot call a class as a function\")}var HighlightSearchResults=function a(){_classCallCheck(this,a);var b,c=document.referrer;if(c){var d=c.indexOf(\"query=\");if(-1<d){posEnd=c.indexOf(\"&\",d),b=-1<posEnd?c.substring(d+6,posEnd):c.substring(d+6);for(var e=b.split(\"+\"),f=0;f<e.length;f++)//can't get this to work!  var patt = new  RegExp('(\\b' + aryKeywords[i] + ')(?!([^<]+)?>)','ig');\nvar g=new RegExp(\"(\\\\b\"+e[f]+\"\\\\w*)(?!([^<]+)?>)\",\"ig\"),h=$(\".accordion\").find(\".accordion-content\").each(function(){if(g.test(this.innerHTML)){var a=this.innerHTML.replace(g,\"<span class=\\\"highlight keyword\"+f+\"\\\">$1</span>\");this.innerHTML=a}});//var patt = new  RegExp('(\\\\w*' + aryKeywords[i] + '\\\\w*)(?!([^<]+)?>)','ig');\nif(0<document.location.href.toLowerCase().indexOf(\"/data.php\")||0<document.location.href.toLowerCase().indexOf(\"totalenergy/data/\"))// open the tab containing the most highlighted keywords\n/*\r\n                    $('table.contable tbody').each(function(){\r\n                        var countObj = {\r\n                            tbody: this,\r\n                            appearances: 0,\r\n                            count: 0\r\n                        };\r\n                        for(var i=0;i<aryKeywords.length;i++) {\r\n                            var found = $(this).find('span.highlight.keyword' + i).length;\r\n                            countObj.count =+ found;\r\n                            if(found>0) countObj.appearances++;\r\n                        }\r\n                        if(maxAppearances<countObj.appearances) maxAppearances = countObj.appearances;\r\n                        aryCountObj.push(countObj)\r\n                    });\r\n                    */for(var j=[],f=0;f<j.length;f++)// open accordion content if there's a keyword match\nj[f].appearances==0&&0<j[f].appearances&&$(j[f].tbody).prev(\".accordion h3\").last().click();$(\".highlight\").click(function(){$(\".highlight\").removeClass(\"highlight\").addClass(\"highlight_off\")})}}};/* harmony default export */ __webpack_exports__[\"default\"] = (HighlightSearchResults);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/legacy/highlight-search-results.js?");

/***/ })

/******/ });