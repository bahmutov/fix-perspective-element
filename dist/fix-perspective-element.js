(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["fixPerspectiveElement"] = factory();
	else
		root["fixPerspectiveElement"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	function undistortElement(element, matrix) {
	  // TODO validate inputs

	  var res0=[],res1=[],res2=[],res3=[],j;
	  for (j = 0; j < 4; ++j) {
	      res0.push(matrix[j][0].toFixed(20)); // 20 is the max # digits
	      res1.push(matrix[j][1].toFixed(20));
	      res2.push(matrix[j][2].toFixed(20));
	      res3.push(matrix[j][3].toFixed(20));
	     }
	  var res = [];
	  res.push(res0);
	  res.push(res1);
	  res.push(res2);
	  res.push(res3);

	  // TODO remove jQuery dependency
	  $(element).css({
	    'transform': "matrix3d(" + res.join(',') + ")",
	    '-webkit-transform': "matrix3d(" + res.join(',') + ")",
	    'transform-origin': '0 0'
	  });
	}

	module.exports = undistortElement;


/***/ }
/******/ ])
});
;