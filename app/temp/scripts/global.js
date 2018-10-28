/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _fancybox = __webpack_require__(1);

	var _fancybox2 = _interopRequireDefault(_fancybox);

	var _headerMenu = __webpack_require__(5);

	var _headerMenu2 = _interopRequireDefault(_headerMenu);

	var _headerSearch = __webpack_require__(6);

	var _headerSearch2 = _interopRequireDefault(_headerSearch);

	var _headerShrinkExpand = __webpack_require__(7);

	var _headerShrinkExpand2 = _interopRequireDefault(_headerShrinkExpand);

	var _socialSticker = __webpack_require__(8);

	var _socialSticker2 = _interopRequireDefault(_socialSticker);

	var _bookshelfSearch = __webpack_require__(9);

	var _bookshelfSearch2 = _interopRequireDefault(_bookshelfSearch);

	var _bxslider = __webpack_require__(10);

	var _bxslider2 = _interopRequireDefault(_bxslider);

	var _analysisProjections = __webpack_require__(12);

	var _analysisProjections2 = _interopRequireDefault(_analysisProjections);

	var _modules = __webpack_require__(13);

	var _modules2 = _interopRequireDefault(_modules);

	var _highlightSearchResults = __webpack_require__(14);

	var _highlightSearchResults2 = _interopRequireDefault(_highlightSearchResults);

	var _firefoxHack = __webpack_require__(15);

	var _firefoxHack2 = _interopRequireDefault(_firefoxHack);

	var _jqueryUi = __webpack_require__(16);

	var _jqueryUi2 = _interopRequireDefault(_jqueryUi);

	var _stickyTableHeaders = __webpack_require__(31);

	var _stickyTableHeaders2 = _interopRequireDefault(_stickyTableHeaders);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new _fancybox2.default();

	new _headerMenu2.default();

	new _headerSearch2.default();

	new _headerShrinkExpand2.default();

	new _socialSticker2.default();

	new _bookshelfSearch2.default();

	new _bxslider2.default();

	new _analysisProjections2.default();

	new _modules2.default();

	new _highlightSearchResults2.default();

	new _firefoxHack2.default();

	new _jqueryUi2.default();

	new _stickyTableHeaders2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jqueryFancybox = __webpack_require__(3);

	var _jqueryFancybox2 = _interopRequireDefault(_jqueryFancybox);

	var _jqueryFancyboxPack = __webpack_require__(4);

	var _jqueryFancyboxPack2 = _interopRequireDefault(_jqueryFancyboxPack);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FancyBox = function () {
	    function FancyBox() {
	        _classCallCheck(this, FancyBox);

	        this.fancyBoxMenu();
	        this.fancyBoxLightBox();
	        this.fancyBoxInlineContent();
	    }

	    _createClass(FancyBox, [{
	        key: 'fancyBoxLightBox',
	        value: function fancyBoxLightBox() {
	            // this.closeButton.prepend('<i class="ico-menu close">Close</i>');
	            // console.log("fancybox lightbox");
	            $("a.lightbox").fancybox({
	                autoResize: false, // To sidestep issue with Highcharts in Fancybox 2 disappearing when the browser is resized -SNW
	                'transitionIn': 'elastic',
	                'transitionOut': 'elastic',
	                'speedIn': 600,
	                'speedOut': 200,
	                'overlayShow': false
	            });
	            // For HTML content, since Fancybox 2 now requires specifying IFRAME mode explicitly for non-images
	            $("a.lightboxhtml").fancybox({
	                type: "iframe",
	                fitToView: true,
	                autoSize: true
	            });
	            $("#youtube").fancybox({
	                'scrolling': 'no',
	                'titleShow': false,
	                'onClosed': function onClosed() {
	                    $("#login_error").hide();
	                }
	            });
	        }
	    }, {
	        key: 'fancyBoxMenu',
	        value: function fancyBoxMenu() {
	            var viewPortWidth = window.innerWidth;
	            var viewPortHeight = window.innerHeight;

	            var fancyBoxWidth = 980;

	            /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	            /* $$$$$                      iframe                     $$$$$ */
	            /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	            $('.iframe').click(function (event) {
	                console.log("clicked");
	                var target = $(this).attr("href");
	                $.fancybox({
	                    href: target,
	                    //scrolling: 'true',
	                    scrolling: 'no',
	                    type: 'iframe',
	                    width: fancyBoxWidth,
	                    autoSize: false, // required for width
	                    margin: [40, 0, 20, 0],
	                    height: 'auto',
	                    padding: 0,
	                    fitToView: false,
	                    topRatio: 0,
	                    autoDimension: false,
	                    overlayShow: false,
	                    tpl: {
	                        closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><i class="ico-menu close-menu">Close</i></a>'
	                    },
	                    beforeLoad: function beforeLoad() {
	                        viewPortWidth = window.innerWidth;
	                        if (viewPortWidth <= fancyBoxWidth) {
	                            this.width = viewPortWidth;
	                            //    this.autoResize = true;
	                            this.fitToView = true;
	                            //    console.log(viewPortHeight + ' ' + this.height);
	                        } else {
	                            this.width = fancyBoxWidth;
	                            //    this.autoResize = false;
	                            this.fitToView = false;
	                            //    console.log(viewPortHeight + ' ' + this.height);
	                        };
	                    },
	                    onComplete: function onComplete() {
	                        $('.fancybox-iframe').load(function () {
	                            // wait for frame to load and then gets it's height
	                            //$('.fancybox-inner').height($(this).contents().find('body').height()+30);
	                            console.log($('.fancybox-iframe body').height());
	                        });
	                    }
	                    /*
	                    onUpdate: function() {
	                        if (window.innerWidth <= fancyBoxWidth) {
	                            this.margin = [0, 0, 0, 0];
	                            this.fitToView = true;
	                        } else {
	                            this.margin = [40, 0, 20, 0];
	                            this.width = fancyBoxWidth;
	                            this.fitToView = false;
	                        };
	                        $.fancybox.reposition();
	                    },
	                    */
	                });

	                console.log("clicked");
	                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	                console.log(target);
	                event.preventDefault();
	            });
	        }
	    }, {
	        key: 'fancyBoxScrollToIframe',
	        value: function fancyBoxScrollToIframe() {

	            var fancyBoxWidth = 980;

	            /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	            /* $$$$$                 scroll to iframe                $$$$$ */
	            /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */

	            $('.scroll-to-iframe').click(function (event) {
	                var target = $(this).attr("href");
	                console.log(target);
	                $.fancybox({
	                    href: target,
	                    scrolling: 'yes',
	                    type: 'iframe',
	                    width: fancyBoxWidth,
	                    autoSize: false, // required for width
	                    margin: [0, 0, 0, 0],
	                    height: 'auto',
	                    padding: 0,
	                    fitToView: false,
	                    topRatio: 0,
	                    autoDimension: false,
	                    overlayShow: false,
	                    tpl: {
	                        closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><i class="ico-menu close-menu">Close</i></a>'
	                    },
	                    iframe: {
	                        preload: false
	                    }
	                });
	                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	                event.preventDefault();

	                var iFrameHeight = $('.fancybox-inner').height();
	                //console.log(iFrameHeight);
	                $('iframe').css('height', iFrameHeight);
	            });
	        }
	    }, {
	        key: 'fancyBoxInlineContent',
	        value: function fancyBoxInlineContent() {
	            var viewPortWidth = window.innerWidth;
	            var viewPortHeight = window.innerHeight;

	            var fancyBoxWidth = 980;

	            /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	            /* $$$$$                      iframe                     $$$$$ */
	            /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	            $('.inline-content').click(function () {
	                //                var targetID = (this.id);
	                //                alert(targetID);

	                console.log("clicked");
	                $.fancybox({
	                    scrolling: 'no',
	                    type: 'inline',
	                    //                    content: targetID,
	                    width: fancyBoxWidth,
	                    autoSize: false, // required for width
	                    margin: [40, 0, 20, 0],
	                    height: 'auto',
	                    padding: 0,
	                    fitToView: false,
	                    topRatio: 0,
	                    autoDimension: false,
	                    overlayShow: false,
	                    tpl: {
	                        closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><i class="ico-menu close-menu">Close</i></a>'
	                    },
	                    beforeLoad: function beforeLoad() {
	                        viewPortWidth = window.innerWidth;
	                        if (viewPortWidth <= fancyBoxWidth) {
	                            this.width = viewPortWidth;
	                            //    this.autoResize = true;
	                            this.fitToView = true;
	                            //    console.log(viewPortHeight + ' ' + this.height);
	                        } else {
	                            this.width = fancyBoxWidth;
	                            //    this.autoResize = false;
	                            this.fitToView = false;
	                            //    console.log(viewPortHeight + ' ' + this.height);
	                        };
	                    }
	                    /*
	                    afterLoad: function(){
	                        $.extend(this,{
	                            content: this.element.data(target)
	                        })
	                    }
	                    */
	                });
	                event.preventDefault();
	            });
	        }
	    }]);

	    return FancyBox;
	}();

	exports.default = FancyBox;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
	 * fancyBox - jQuery Plugin
	 * version: 2.1.5 (Fri, 14 Jun 2013)
	 * requires jQuery v1.6 or later
	 *
	 * Examples at http://fancyapps.com/fancybox/
	 * License: www.fancyapps.com/fancybox/#license
	 *
	 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
	 *
	 */

	;(function (window, document, $, undefined) {
		"use strict";

		var H = $("html"),
			W = $(window),
			D = $(document),
			F = $.fancybox = function () {
				F.open.apply( this, arguments );
			},
			IE =  navigator.userAgent.match(/msie/i),
			didUpdate	= null,
			isTouch		= document.createTouch !== undefined,

			isQuery	= function(obj) {
				return obj && obj.hasOwnProperty && obj instanceof $;
			},
			isString = function(str) {
				return str && $.type(str) === "string";
			},
			isPercentage = function(str) {
				return isString(str) && str.indexOf('%') > 0;
			},
			isScrollable = function(el) {
				return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
			},
			getScalar = function(orig, dim) {
				var value = parseInt(orig, 10) || 0;

				if (dim && isPercentage(orig)) {
					value = F.getViewport()[ dim ] / 100 * value;
				}

				return Math.ceil(value);
			},
			getValue = function(value, dim) {
				return getScalar(value, dim) + 'px';
			};

		$.extend(F, {
			// The current version of fancyBox
			version: '2.1.5',

			defaults: {
				padding : 15,
				margin  : 20,

				width     : 800,
				height    : 600,
				minWidth  : 100,
				minHeight : 100,
				maxWidth  : 9999,
				maxHeight : 9999,
				pixelRatio: 1, // Set to 2 for retina display support

				autoSize   : true,
				autoHeight : false,
				autoWidth  : false,

				autoResize  : true,
				autoCenter  : !isTouch,
				fitToView   : true,
				aspectRatio : false,
				topRatio    : 0.5,
				leftRatio   : 0.5,

				scrolling : 'auto', // 'auto', 'yes' or 'no'
				wrapCSS   : '',

				arrows     : true,
				closeBtn   : true,
				closeClick : false,
				nextClick  : false,
				mouseWheel : true,
				autoPlay   : false,
				playSpeed  : 3000,
				preload    : 3,
				modal      : false,
				loop       : true,

				ajax  : {
					dataType : 'html',
					headers  : { 'X-fancyBox': true }
				},
				iframe : {
					scrolling : 'auto',
					preload   : true
				},
				swf : {
					wmode: 'transparent',
					allowfullscreen   : 'true',
					allowscriptaccess : 'always'
				},

				keys  : {
					next : {
						13 : 'left', // enter
						34 : 'up',   // page down
						39 : 'left', // right arrow
						40 : 'up'    // down arrow
					},
					prev : {
						8  : 'right',  // backspace
						33 : 'down',   // page up
						37 : 'right',  // left arrow
						38 : 'down'    // up arrow
					},
					close  : [27], // escape key
					play   : [32], // space - start/stop slideshow
					toggle : [70]  // letter "f" - toggle fullscreen
				},

				direction : {
					next : 'left',
					prev : 'right'
				},

				scrollOutside  : true,

				// Override some properties
				index   : 0,
				type    : null,
				href    : null,
				content : null,
				title   : null,

				// HTML templates
				tpl: {
					wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
					image    : '<img class="fancybox-image" src="{href}" alt="" />',
					iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
					error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
					closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
					next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
					prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
					loading  : '<div id="fancybox-loading"><div></div></div>'
				},

				// Properties for each animation type
				// Opening fancyBox
				openEffect  : 'fade', // 'elastic', 'fade' or 'none'
				openSpeed   : 250,
				openEasing  : 'swing',
				openOpacity : true,
				openMethod  : 'zoomIn',

				// Closing fancyBox
				closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
				closeSpeed   : 250,
				closeEasing  : 'swing',
				closeOpacity : true,
				closeMethod  : 'zoomOut',

				// Changing next gallery item
				nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
				nextSpeed  : 250,
				nextEasing : 'swing',
				nextMethod : 'changeIn',

				// Changing previous gallery item
				prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
				prevSpeed  : 250,
				prevEasing : 'swing',
				prevMethod : 'changeOut',

				// Enable default helpers
				helpers : {
					overlay : true,
					title   : true
				},

				// Callbacks
				onCancel     : $.noop, // If canceling
				beforeLoad   : $.noop, // Before loading
				afterLoad    : $.noop, // After loading
				beforeShow   : $.noop, // Before changing in current item
				afterShow    : $.noop, // After opening
				beforeChange : $.noop, // Before changing gallery item
				beforeClose  : $.noop, // Before closing
				afterClose   : $.noop  // After closing
			},

			//Current state
			group    : {}, // Selected group
			opts     : {}, // Group options
			previous : null,  // Previous element
			coming   : null,  // Element being loaded
			current  : null,  // Currently loaded element
			isActive : false, // Is activated
			isOpen   : false, // Is currently open
			isOpened : false, // Have been fully opened at least once

			wrap  : null,
			skin  : null,
			outer : null,
			inner : null,

			player : {
				timer    : null,
				isActive : false
			},

			// Loaders
			ajaxLoad   : null,
			imgPreload : null,

			// Some collections
			transitions : {},
			helpers     : {},

			/*
			 *	Static methods
			 */

			open: function (group, opts) {
				if (!group) {
					return;
				}

				if (!$.isPlainObject(opts)) {
					opts = {};
				}

				// Close if already active
				if (false === F.close(true)) {
					return;
				}

				// Normalize group
				if (!$.isArray(group)) {
					group = isQuery(group) ? $(group).get() : [group];
				}

				// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
				$.each(group, function(i, element) {
					var obj = {},
						href,
						title,
						content,
						type,
						rez,
						hrefParts,
						selector;

					if ($.type(element) === "object") {
						// Check if is DOM element
						if (element.nodeType) {
							element = $(element);
						}

						if (isQuery(element)) {
							obj = {
								href    : element.data('fancybox-href') || element.attr('href'),
								title   : $('<div/>').text( element.data('fancybox-title') || element.attr('title') || '' ).html(),
								isDom   : true,
								element : element
							};

							if ($.metadata) {
								$.extend(true, obj, element.metadata());
							}

						} else {
							obj = element;
						}
					}

					href  = opts.href  || obj.href || (isString(element) ? element : null);
					title = opts.title !== undefined ? opts.title : obj.title || '';

					content = opts.content || obj.content;
					type    = content ? 'html' : (opts.type  || obj.type);

					if (!type && obj.isDom) {
						type = element.data('fancybox-type');

						if (!type) {
							rez  = element.prop('class').match(/fancybox\.(\w+)/);
							type = rez ? rez[1] : null;
						}
					}

					if (isString(href)) {
						// Try to guess the content type
						if (!type) {
							if (F.isImage(href)) {
								type = 'image';

							} else if (F.isSWF(href)) {
								type = 'swf';

							} else if (href.charAt(0) === '#') {
								type = 'inline';

							} else if (isString(element)) {
								type    = 'html';
								content = element;
							}
						}

						// Split url into two pieces with source url and content selector, e.g,
						// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
						if (type === 'ajax') {
							hrefParts = href.split(/\s+/, 2);
							href      = hrefParts.shift();
							selector  = hrefParts.shift();
						}
					}

					if (!content) {
						if (type === 'inline') {
							if (href) {
								content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

							} else if (obj.isDom) {
								content = element;
							}

						} else if (type === 'html') {
							content = href;

						} else if (!type && !href && obj.isDom) {
							type    = 'inline';
							content = element;
						}
					}

					$.extend(obj, {
						href     : href,
						type     : type,
						content  : content,
						title    : title,
						selector : selector
					});

					group[ i ] = obj;
				});

				// Extend the defaults
				F.opts = $.extend(true, {}, F.defaults, opts);

				// All options are merged recursive except keys
				if (opts.keys !== undefined) {
					F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
				}

				F.group = group;

				return F._start(F.opts.index);
			},

			// Cancel image loading or abort ajax request
			cancel: function () {
				var coming = F.coming;

				if (coming && false === F.trigger('onCancel')) {
					return;
				}

				F.hideLoading();

				if (!coming) {
					return;
				}

				if (F.ajaxLoad) {
					F.ajaxLoad.abort();
				}

				F.ajaxLoad = null;

				if (F.imgPreload) {
					F.imgPreload.onload = F.imgPreload.onerror = null;
				}

				if (coming.wrap) {
					coming.wrap.stop(true, true).trigger('onReset').remove();
				}

				F.coming = null;

				// If the first item has been canceled, then clear everything
				if (!F.current) {
					F._afterZoomOut( coming );
				}
			},

			// Start closing animation if is open; remove immediately if opening/closing
			close: function (event) {
				F.cancel();

				if (false === F.trigger('beforeClose')) {
					return;
				}

				F.unbindEvents();

				if (!F.isActive) {
					return;
				}

				if (!F.isOpen || event === true) {
					$('.fancybox-wrap').stop(true).trigger('onReset').remove();

					F._afterZoomOut();

				} else {
					F.isOpen = F.isOpened = false;
					F.isClosing = true;

					$('.fancybox-item, .fancybox-nav').remove();

					F.wrap.stop(true, true).removeClass('fancybox-opened');

					F.transitions[ F.current.closeMethod ]();
				}
			},

			// Manage slideshow:
			//   $.fancybox.play(); - toggle slideshow
			//   $.fancybox.play( true ); - start
			//   $.fancybox.play( false ); - stop
			play: function ( action ) {
				var clear = function () {
						clearTimeout(F.player.timer);
					},
					set = function () {
						clear();

						if (F.current && F.player.isActive) {
							F.player.timer = setTimeout(F.next, F.current.playSpeed);
						}
					},
					stop = function () {
						clear();

						D.unbind('.player');

						F.player.isActive = false;

						F.trigger('onPlayEnd');
					},
					start = function () {
						if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
							F.player.isActive = true;

							D.bind({
								'onCancel.player beforeClose.player' : stop,
								'onUpdate.player'   : set,
								'beforeLoad.player' : clear
							});

							set();

							F.trigger('onPlayStart');
						}
					};

				if (action === true || (!F.player.isActive && action !== false)) {
					start();
				} else {
					stop();
				}
			},

			// Navigate to next gallery item
			next: function ( direction ) {
				var current = F.current;

				if (current) {
					if (!isString(direction)) {
						direction = current.direction.next;
					}

					F.jumpto(current.index + 1, direction, 'next');
				}
			},

			// Navigate to previous gallery item
			prev: function ( direction ) {
				var current = F.current;

				if (current) {
					if (!isString(direction)) {
						direction = current.direction.prev;
					}

					F.jumpto(current.index - 1, direction, 'prev');
				}
			},

			// Navigate to gallery item by index
			jumpto: function ( index, direction, router ) {
				var current = F.current;

				if (!current) {
					return;
				}

				index = getScalar(index);

				F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
				F.router    = router || 'jumpto';

				if (current.loop) {
					if (index < 0) {
						index = current.group.length + (index % current.group.length);
					}

					index = index % current.group.length;
				}

				if (current.group[ index ] !== undefined) {
					F.cancel();

					F._start(index);
				}
			},

			// Center inside viewport and toggle position type to fixed or absolute if needed
			reposition: function (e, onlyAbsolute) {
				var current = F.current,
					wrap    = current ? current.wrap : null,
					pos;

				if (wrap) {
					pos = F._getPosition(onlyAbsolute);

					if (e && e.type === 'scroll') {
						delete pos.position;

						wrap.stop(true, true).animate(pos, 200);

					} else {
						wrap.css(pos);

						current.pos = $.extend({}, current.dim, pos);
					}
				}
			},

			update: function (e) {
				var type = (e && e.originalEvent && e.originalEvent.type),
					anyway = !type || type === 'orientationchange';

				if (anyway) {
					clearTimeout(didUpdate);

					didUpdate = null;
				}

				if (!F.isOpen || didUpdate) {
					return;
				}

				didUpdate = setTimeout(function() {
					var current = F.current;

					if (!current || F.isClosing) {
						return;
					}

					F.wrap.removeClass('fancybox-tmp');

					if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
						F._setDimension();
					}

					if (!(type === 'scroll' && current.canShrink)) {
						F.reposition(e);
					}

					F.trigger('onUpdate');

					didUpdate = null;

				}, (anyway && !isTouch ? 0 : 300));
			},

			// Shrink content to fit inside viewport or restore if resized
			toggle: function ( action ) {
				if (F.isOpen) {
					F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

					// Help browser to restore document dimensions
					if (isTouch) {
						F.wrap.removeAttr('style').addClass('fancybox-tmp');

						F.trigger('onUpdate');
					}

					F.update();
				}
			},

			hideLoading: function () {
				D.unbind('.loading');

				$('#fancybox-loading').remove();
			},

			showLoading: function () {
				var el, viewport;

				F.hideLoading();

				el = $(F.opts.tpl.loading).click(F.cancel).appendTo('body');

				// If user will press the escape-button, the request will be canceled
				D.bind('keydown.loading', function(e) {
					if ((e.which || e.keyCode) === 27) {
						e.preventDefault();

						F.cancel();
					}
				});

				if (!F.defaults.fixed) {
					viewport = F.getViewport();

					el.css({
						position : 'absolute',
						top  : (viewport.h * 0.5) + viewport.y,
						left : (viewport.w * 0.5) + viewport.x
					});
				}

				F.trigger('onLoading');
			},

			getViewport: function () {
				var locked = (F.current && F.current.locked) || false,
					rez    = {
						x: W.scrollLeft(),
						y: W.scrollTop()
					};

				if (locked && locked.length) {
					rez.w = locked[0].clientWidth;
					rez.h = locked[0].clientHeight;

				} else {
					// See http://bugs.jquery.com/ticket/6724
					rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
					rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
				}

				return rez;
			},

			// Unbind the keyboard / clicking actions
			unbindEvents: function () {
				if (F.wrap && isQuery(F.wrap)) {
					F.wrap.unbind('.fb');
				}

				D.unbind('.fb');
				W.unbind('.fb');
			},

			bindEvents: function () {
				var current = F.current,
					keys;

				if (!current) {
					return;
				}

				// Changing document height on iOS devices triggers a 'resize' event,
				// that can change document height... repeating infinitely
				W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

				keys = current.keys;

				if (keys) {
					D.bind('keydown.fb', function (e) {
						var code   = e.which || e.keyCode,
							target = e.target || e.srcElement;

						// Skip esc key if loading, because showLoading will cancel preloading
						if (code === 27 && F.coming) {
							return false;
						}

						// Ignore key combinations and key events within form elements
						if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
							$.each(keys, function(i, val) {
								if (current.group.length > 1 && val[ code ] !== undefined) {
									F[ i ]( val[ code ] );

									e.preventDefault();
									return false;
								}

								if ($.inArray(code, val) > -1) {
									F[ i ] ();

									e.preventDefault();
									return false;
								}
							});
						}
					});
				}

				if ($.fn.mousewheel && current.mouseWheel) {
					F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
						var target = e.target || null,
							parent = $(target),
							canScroll = false;

						while (parent.length) {
							if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
								break;
							}

							canScroll = isScrollable( parent[0] );
							parent    = $(parent).parent();
						}

						if (delta !== 0 && !canScroll) {
							if (F.group.length > 1 && !current.canShrink) {
								if (deltaY > 0 || deltaX > 0) {
									F.prev( deltaY > 0 ? 'down' : 'left' );

								} else if (deltaY < 0 || deltaX < 0) {
									F.next( deltaY < 0 ? 'up' : 'right' );
								}

								e.preventDefault();
							}
						}
					});
				}
			},

			trigger: function (event, o) {
				var ret, obj = o || F.coming || F.current;

				if (obj) {
					if ($.isFunction( obj[event] )) {
						ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
					}

					if (ret === false) {
						return false;
					}

					if (obj.helpers) {
						$.each(obj.helpers, function (helper, opts) {
							if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
								F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
							}
						});
					}
				}

				D.trigger(event);
			},

			isImage: function (str) {
				return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
			},

			isSWF: function (str) {
				return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
			},

			_start: function (index) {
				var coming = {},
					obj,
					href,
					type,
					margin,
					padding;

				index = getScalar( index );
				obj   = F.group[ index ] || null;

				if (!obj) {
					return false;
				}

				coming = $.extend(true, {}, F.opts, obj);

				// Convert margin and padding properties to array - top, right, bottom, left
				margin  = coming.margin;
				padding = coming.padding;

				if ($.type(margin) === 'number') {
					coming.margin = [margin, margin, margin, margin];
				}

				if ($.type(padding) === 'number') {
					coming.padding = [padding, padding, padding, padding];
				}

				// 'modal' propery is just a shortcut
				if (coming.modal) {
					$.extend(true, coming, {
						closeBtn   : false,
						closeClick : false,
						nextClick  : false,
						arrows     : false,
						mouseWheel : false,
						keys       : null,
						helpers: {
							overlay : {
								closeClick : false
							}
						}
					});
				}

				// 'autoSize' property is a shortcut, too
				if (coming.autoSize) {
					coming.autoWidth = coming.autoHeight = true;
				}

				if (coming.width === 'auto') {
					coming.autoWidth = true;
				}

				if (coming.height === 'auto') {
					coming.autoHeight = true;
				}

				/*
				 * Add reference to the group, so it`s possible to access from callbacks, example:
				 * afterLoad : function() {
				 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
				 * }
				 */

				coming.group  = F.group;
				coming.index  = index;

				// Give a chance for callback or helpers to update coming item (type, title, etc)
				F.coming = coming;

				if (false === F.trigger('beforeLoad')) {
					F.coming = null;

					return;
				}

				type = coming.type;
				href = coming.href;

				if (!type) {
					F.coming = null;

					//If we can not determine content type then drop silently or display next/prev item if looping through gallery
					if (F.current && F.router && F.router !== 'jumpto') {
						F.current.index = index;

						return F[ F.router ]( F.direction );
					}

					return false;
				}

				F.isActive = true;

				if (type === 'image' || type === 'swf') {
					coming.autoHeight = coming.autoWidth = false;
					coming.scrolling  = 'visible';
				}

				if (type === 'image') {
					coming.aspectRatio = true;
				}

				if (type === 'iframe' && isTouch) {
					coming.scrolling = 'scroll';
				}

				// Build the neccessary markup
				coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

				$.extend(coming, {
					skin  : $('.fancybox-skin',  coming.wrap),
					outer : $('.fancybox-outer', coming.wrap),
					inner : $('.fancybox-inner', coming.wrap)
				});

				$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
					coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
				});

				F.trigger('onReady');

				// Check before try to load; 'inline' and 'html' types need content, others - href
				if (type === 'inline' || type === 'html') {
					if (!coming.content || !coming.content.length) {
						return F._error( 'content' );
					}

				} else if (!href) {
					return F._error( 'href' );
				}

				if (type === 'image') {
					F._loadImage();

				} else if (type === 'ajax') {
					F._loadAjax();

				} else if (type === 'iframe') {
					F._loadIframe();

				} else {
					F._afterLoad();
				}
			},

			_error: function ( type ) {
				$.extend(F.coming, {
					type       : 'html',
					autoWidth  : true,
					autoHeight : true,
					minWidth   : 0,
					minHeight  : 0,
					scrolling  : 'no',
					hasError   : type,
					content    : F.coming.tpl.error
				});

				F._afterLoad();
			},

			_loadImage: function () {
				// Reset preload image so it is later possible to check "complete" property
				var img = F.imgPreload = new Image();

				img.onload = function () {
					this.onload = this.onerror = null;

					F.coming.width  = this.width / F.opts.pixelRatio;
					F.coming.height = this.height / F.opts.pixelRatio;

					F._afterLoad();
				};

				img.onerror = function () {
					this.onload = this.onerror = null;

					F._error( 'image' );
				};

				img.src = F.coming.href;

				if (img.complete !== true) {
					F.showLoading();
				}
			},

			_loadAjax: function () {
				var coming = F.coming;

				F.showLoading();

				F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
					url: coming.href,
					error: function (jqXHR, textStatus) {
						if (F.coming && textStatus !== 'abort') {
							F._error( 'ajax', jqXHR );

						} else {
							F.hideLoading();
						}
					},
					success: function (data, textStatus) {
						if (textStatus === 'success') {
							coming.content = data;

							F._afterLoad();
						}
					}
				}));
			},

			_loadIframe: function() {
				var coming = F.coming,
					iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
						.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
						.attr('src', coming.href);

				// This helps IE
				$(coming.wrap).bind('onReset', function () {
					try {
						$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
					} catch (e) {}
				});

				if (coming.iframe.preload) {
					F.showLoading();

					iframe.one('load', function() {
						$(this).data('ready', 1);

						// iOS will lose scrolling if we resize
						if (!isTouch) {
							$(this).bind('load.fb', F.update);
						}

						// Without this trick:
						//   - iframe won't scroll on iOS devices
						//   - IE7 sometimes displays empty iframe
						$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

						F._afterLoad();
					});
				}

				coming.content = iframe.appendTo( coming.inner );

				if (!coming.iframe.preload) {
					F._afterLoad();
				}
			},

			_preloadImages: function() {
				var group   = F.group,
					current = F.current,
					len     = group.length,
					cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
					item,
					i;

				for (i = 1; i <= cnt; i += 1) {
					item = group[ (current.index + i ) % len ];

					if (item.type === 'image' && item.href) {
						new Image().src = item.href;
					}
				}
			},

			_afterLoad: function () {
				var coming   = F.coming,
					previous = F.current,
					placeholder = 'fancybox-placeholder',
					current,
					content,
					type,
					scrolling,
					href,
					embed;

				F.hideLoading();

				if (!coming || F.isActive === false) {
					return;
				}

				if (false === F.trigger('afterLoad', coming, previous)) {
					coming.wrap.stop(true).trigger('onReset').remove();

					F.coming = null;

					return;
				}

				if (previous) {
					F.trigger('beforeChange', previous);

					previous.wrap.stop(true).removeClass('fancybox-opened')
						.find('.fancybox-item, .fancybox-nav')
						.remove();
				}

				F.unbindEvents();

				current   = coming;
				content   = coming.content;
				type      = coming.type;
				scrolling = coming.scrolling;

				$.extend(F, {
					wrap  : current.wrap,
					skin  : current.skin,
					outer : current.outer,
					inner : current.inner,
					current  : current,
					previous : previous
				});

				href = current.href;

				switch (type) {
					case 'inline':
					case 'ajax':
					case 'html':
						if (current.selector) {
							content = $('<div>').html(content).find(current.selector);

						} else if (isQuery(content)) {
							if (!content.data(placeholder)) {
								content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
							}

							content = content.show().detach();

							current.wrap.bind('onReset', function () {
								if ($(this).find(content).length) {
									content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
								}
							});
						}
					break;

					case 'image':
						content = current.tpl.image.replace(/\{href\}/g, href);
					break;

					case 'swf':
						content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
						embed   = '';

						$.each(current.swf, function(name, val) {
							content += '<param name="' + name + '" value="' + val + '"></param>';
							embed   += ' ' + name + '="' + val + '"';
						});

						content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
					break;
				}

				if (!(isQuery(content) && content.parent().is(current.inner))) {
					current.inner.append( content );
				}

				// Give a chance for helpers or callbacks to update elements
				F.trigger('beforeShow');

				// Set scrolling before calculating dimensions
				current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

				// Set initial dimensions and start position
				F._setDimension();

				F.reposition();

				F.isOpen = false;
				F.coming = null;

				F.bindEvents();

				if (!F.isOpened) {
					$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

				} else if (previous.prevMethod) {
					F.transitions[ previous.prevMethod ]();
				}

				F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

				F._preloadImages();
			},

			_setDimension: function () {
				var viewport   = F.getViewport(),
					steps      = 0,
					canShrink  = false,
					canExpand  = false,
					wrap       = F.wrap,
					skin       = F.skin,
					inner      = F.inner,
					current    = F.current,
					width      = current.width,
					height     = current.height,
					minWidth   = current.minWidth,
					minHeight  = current.minHeight,
					maxWidth   = current.maxWidth,
					maxHeight  = current.maxHeight,
					scrolling  = current.scrolling,
					scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
					margin     = current.margin,
					wMargin    = getScalar(margin[1] + margin[3]),
					hMargin    = getScalar(margin[0] + margin[2]),
					wPadding,
					hPadding,
					wSpace,
					hSpace,
					origWidth,
					origHeight,
					origMaxWidth,
					origMaxHeight,
					ratio,
					width_,
					height_,
					maxWidth_,
					maxHeight_,
					iframe,
					body;

				// Reset dimensions so we could re-check actual size
				wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

				wPadding = getScalar(skin.outerWidth(true)  - skin.width());
				hPadding = getScalar(skin.outerHeight(true) - skin.height());

				// Any space between content and viewport (margin, padding, border, title)
				wSpace = wMargin + wPadding;
				hSpace = hMargin + hPadding;

				origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
				origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

				if (current.type === 'iframe') {
					iframe = current.content;

					if (current.autoHeight && iframe.data('ready') === 1) {
						try {
							if (iframe[0].contentWindow.document.location) {
								inner.width( origWidth ).height(9999);

								body = iframe.contents().find('body');

								if (scrollOut) {
									body.css('overflow-x', 'hidden');
								}

								origHeight = body.outerHeight(true);
							}

						} catch (e) {}
					}

				} else if (current.autoWidth || current.autoHeight) {
					inner.addClass( 'fancybox-tmp' );

					// Set width or height in case we need to calculate only one dimension
					if (!current.autoWidth) {
						inner.width( origWidth );
					}

					if (!current.autoHeight) {
						inner.height( origHeight );
					}

					if (current.autoWidth) {
						origWidth = inner.width();
					}

					if (current.autoHeight) {
						origHeight = inner.height();
					}

					inner.removeClass( 'fancybox-tmp' );
				}

				width  = getScalar( origWidth );
				height = getScalar( origHeight );

				ratio  = origWidth / origHeight;

				// Calculations for the content
				minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
				maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

				minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
				maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

				// These will be used to determine if wrap can fit in the viewport
				origMaxWidth  = maxWidth;
				origMaxHeight = maxHeight;

				if (current.fitToView) {
					maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
					maxHeight = Math.min(viewport.h - hSpace, maxHeight);
				}

				maxWidth_  = viewport.w - wMargin;
				maxHeight_ = viewport.h - hMargin;

				if (current.aspectRatio) {
					if (width > maxWidth) {
						width  = maxWidth;
						height = getScalar(width / ratio);
					}

					if (height > maxHeight) {
						height = maxHeight;
						width  = getScalar(height * ratio);
					}

					if (width < minWidth) {
						width  = minWidth;
						height = getScalar(width / ratio);
					}

					if (height < minHeight) {
						height = minHeight;
						width  = getScalar(height * ratio);
					}

				} else {
					width = Math.max(minWidth, Math.min(width, maxWidth));

					if (current.autoHeight && current.type !== 'iframe') {
						inner.width( width );

						height = inner.height();
					}

					height = Math.max(minHeight, Math.min(height, maxHeight));
				}

				// Try to fit inside viewport (including the title)
				if (current.fitToView) {
					inner.width( width ).height( height );

					wrap.width( width + wPadding );

					// Real wrap dimensions
					width_  = wrap.width();
					height_ = wrap.height();

					if (current.aspectRatio) {
						while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
							if (steps++ > 19) {
								break;
							}

							height = Math.max(minHeight, Math.min(maxHeight, height - 10));
							width  = getScalar(height * ratio);

							if (width < minWidth) {
								width  = minWidth;
								height = getScalar(width / ratio);
							}

							if (width > maxWidth) {
								width  = maxWidth;
								height = getScalar(width / ratio);
							}

							inner.width( width ).height( height );

							wrap.width( width + wPadding );

							width_  = wrap.width();
							height_ = wrap.height();
						}

					} else {
						width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
						height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
					}
				}

				if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
					width += scrollOut;
				}

				inner.width( width ).height( height );

				wrap.width( width + wPadding );

				width_  = wrap.width();
				height_ = wrap.height();

				canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
				canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

				$.extend(current, {
					dim : {
						width	: getValue( width_ ),
						height	: getValue( height_ )
					},
					origWidth  : origWidth,
					origHeight : origHeight,
					canShrink  : canShrink,
					canExpand  : canExpand,
					wPadding   : wPadding,
					hPadding   : hPadding,
					wrapSpace  : height_ - skin.outerHeight(true),
					skinSpace  : skin.height() - height
				});

				if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
					inner.height('auto');
				}
			},

			_getPosition: function (onlyAbsolute) {
				var current  = F.current,
					viewport = F.getViewport(),
					margin   = current.margin,
					width    = F.wrap.width()  + margin[1] + margin[3],
					height   = F.wrap.height() + margin[0] + margin[2],
					rez      = {
						position: 'absolute',
						top  : margin[0],
						left : margin[3]
					};

				if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
					rez.position = 'fixed';

				} else if (!current.locked) {
					rez.top  += viewport.y;
					rez.left += viewport.x;
				}

				rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
				rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

				return rez;
			},

			_afterZoomIn: function () {
				var current = F.current;

				if (!current) {
					return;
				}

				F.isOpen = F.isOpened = true;

				F.wrap.css('overflow', 'visible').addClass('fancybox-opened').hide().show(0);

				F.update();

				// Assign a click event
				if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
					F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
						if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
							e.preventDefault();

							F[ current.closeClick ? 'close' : 'next' ]();
						}
					});
				}

				// Create a close button
				if (current.closeBtn) {
					$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
						e.preventDefault();

						F.close();
					});
				}

				// Create navigation arrows
				if (current.arrows && F.group.length > 1) {
					if (current.loop || current.index > 0) {
						$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
					}

					if (current.loop || current.index < F.group.length - 1) {
						$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
					}
				}

				F.trigger('afterShow');

				// Stop the slideshow if this is the last item
				if (!current.loop && current.index === current.group.length - 1) {

					F.play( false );

				} else if (F.opts.autoPlay && !F.player.isActive) {
					F.opts.autoPlay = false;

					F.play(true);
				}
			},

			_afterZoomOut: function ( obj ) {
				obj = obj || F.current;

				$('.fancybox-wrap').trigger('onReset').remove();

				$.extend(F, {
					group  : {},
					opts   : {},
					router : false,
					current   : null,
					isActive  : false,
					isOpened  : false,
					isOpen    : false,
					isClosing : false,
					wrap   : null,
					skin   : null,
					outer  : null,
					inner  : null
				});

				F.trigger('afterClose', obj);
			}
		});

		/*
		 *	Default transitions
		 */

		F.transitions = {
			getOrigPosition: function () {
				var current  = F.current,
					element  = current.element,
					orig     = current.orig,
					pos      = {},
					width    = 50,
					height   = 50,
					hPadding = current.hPadding,
					wPadding = current.wPadding,
					viewport = F.getViewport();

				if (!orig && current.isDom && element.is(':visible')) {
					orig = element.find('img:first');

					if (!orig.length) {
						orig = element;
					}
				}

				if (isQuery(orig)) {
					pos = orig.offset();

					if (orig.is('img')) {
						width  = orig.outerWidth();
						height = orig.outerHeight();
					}

				} else {
					pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
					pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
				}

				if (F.wrap.css('position') === 'fixed' || current.locked) {
					pos.top  -= viewport.y;
					pos.left -= viewport.x;
				}

				pos = {
					top     : getValue(pos.top  - hPadding * current.topRatio),
					left    : getValue(pos.left - wPadding * current.leftRatio),
					width   : getValue(width  + wPadding),
					height  : getValue(height + hPadding)
				};

				return pos;
			},

			step: function (now, fx) {
				var ratio,
					padding,
					value,
					prop       = fx.prop,
					current    = F.current,
					wrapSpace  = current.wrapSpace,
					skinSpace  = current.skinSpace;

				if (prop === 'width' || prop === 'height') {
					ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

					if (F.isClosing) {
						ratio = 1 - ratio;
					}

					padding = prop === 'width' ? current.wPadding : current.hPadding;
					value   = now - padding;

					F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
					F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
				}
			},

			zoomIn: function () {
				var current  = F.current,
					startPos = current.pos,
					effect   = current.openEffect,
					elastic  = effect === 'elastic',
					endPos   = $.extend({opacity : 1}, startPos);

				// Remove "position" property that breaks older IE
				delete endPos.position;

				if (elastic) {
					startPos = this.getOrigPosition();

					if (current.openOpacity) {
						startPos.opacity = 0.1;
					}

				} else if (effect === 'fade') {
					startPos.opacity = 0.1;
				}

				F.wrap.css(startPos).animate(endPos, {
					duration : effect === 'none' ? 0 : current.openSpeed,
					easing   : current.openEasing,
					step     : elastic ? this.step : null,
					complete : F._afterZoomIn
				});
			},

			zoomOut: function () {
				var current  = F.current,
					effect   = current.closeEffect,
					elastic  = effect === 'elastic',
					endPos   = {opacity : 0.1};

				if (elastic) {
					endPos = this.getOrigPosition();

					if (current.closeOpacity) {
						endPos.opacity = 0.1;
					}
				}

				F.wrap.animate(endPos, {
					duration : effect === 'none' ? 0 : current.closeSpeed,
					easing   : current.closeEasing,
					step     : elastic ? this.step : null,
					complete : F._afterZoomOut
				});
			},

			changeIn: function () {
				var current   = F.current,
					effect    = current.nextEffect,
					startPos  = current.pos,
					endPos    = { opacity : 1 },
					direction = F.direction,
					distance  = 200,
					field;

				startPos.opacity = 0.1;

				if (effect === 'elastic') {
					field = direction === 'down' || direction === 'up' ? 'top' : 'left';

					if (direction === 'down' || direction === 'right') {
						startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
						endPos[ field ]   = '+=' + distance + 'px';

					} else {
						startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
						endPos[ field ]   = '-=' + distance + 'px';
					}
				}

				// Workaround for http://bugs.jquery.com/ticket/12273
				if (effect === 'none') {
					F._afterZoomIn();

				} else {
					F.wrap.css(startPos).animate(endPos, {
						duration : current.nextSpeed,
						easing   : current.nextEasing,
						complete : F._afterZoomIn
					});
				}
			},

			changeOut: function () {
				var previous  = F.previous,
					effect    = previous.prevEffect,
					endPos    = { opacity : 0.1 },
					direction = F.direction,
					distance  = 200;

				if (effect === 'elastic') {
					endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
				}

				previous.wrap.animate(endPos, {
					duration : effect === 'none' ? 0 : previous.prevSpeed,
					easing   : previous.prevEasing,
					complete : function () {
						$(this).trigger('onReset').remove();
					}
				});
			}
		};

		/*
		 *	Overlay helper
		 */

		F.helpers.overlay = {
			defaults : {
				closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
				speedOut   : 200,       // duration of fadeOut animation
				showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
				css        : {},        // custom CSS properties
				locked     : !isTouch,  // if true, the content will be locked into overlay
				fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
			},

			overlay : null,      // current handle
			fixed   : false,     // indicates if the overlay has position "fixed"
			el      : $('html'), // element that contains "the lock"

			// Public methods
			create : function(opts) {
				var parent;

				opts = $.extend({}, this.defaults, opts);

				if (this.overlay) {
					this.close();
				}

				parent = F.coming ? F.coming.parent : opts.parent;

				this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( parent && parent.length ? parent : 'body' );
				this.fixed   = false;

				if (opts.fixed && F.defaults.fixed) {
					this.overlay.addClass('fancybox-overlay-fixed');

					this.fixed = true;
				}
			},

			open : function(opts) {
				var that = this;

				opts = $.extend({}, this.defaults, opts);

				if (this.overlay) {
					this.overlay.unbind('.overlay').width('auto').height('auto');

				} else {
					this.create(opts);
				}

				if (!this.fixed) {
					W.bind('resize.overlay', $.proxy( this.update, this) );

					this.update();
				}

				if (opts.closeClick) {
					this.overlay.bind('click.overlay', function(e) {
						if ($(e.target).hasClass('fancybox-overlay')) {
							if (F.isActive) {
								F.close();
							} else {
								that.close();
							}

							return false;
						}
					});
				}

				this.overlay.css( opts.css ).show();
			},

			close : function() {
				W.unbind('resize.overlay');

				if (this.el.hasClass('fancybox-lock')) {
					$('.fancybox-margin').removeClass('fancybox-margin');

					this.el.removeClass('fancybox-lock');

					W.scrollTop( this.scrollV ).scrollLeft( this.scrollH );
				}

				$('.fancybox-overlay').remove().hide();

				$.extend(this, {
					overlay : null,
					fixed   : false
				});
			},

			// Private, callbacks

			update : function () {
				var width = '100%', offsetWidth;

				// Reset width/height so it will not mess
				this.overlay.width(width).height('100%');

				// jQuery does not return reliable result for IE
				if (IE) {
					offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

					if (D.width() > offsetWidth) {
						width = D.width();
					}

				} else if (D.width() > W.width()) {
					width = D.width();
				}

				this.overlay.width(width).height(D.height());
			},

			// This is where we can manipulate DOM, because later it would cause iframes to reload
			onReady : function (opts, obj) {
				var overlay = this.overlay;

				$('.fancybox-overlay').stop(true, true);

				if (!overlay) {
					this.create(opts);
				}

				if (opts.locked && this.fixed && obj.fixed) {
					obj.locked = this.overlay.append( obj.wrap );
					obj.fixed  = false;
				}

				if (opts.showEarly === true) {
					this.beforeShow.apply(this, arguments);
				}
			},

			beforeShow : function(opts, obj) {
				if (obj.locked && !this.el.hasClass('fancybox-lock')) {
					if (this.fixPosition !== false) {
						$('*').filter(function(){
							return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
						}).addClass('fancybox-margin');
					}

					this.el.addClass('fancybox-margin');

					this.scrollV = W.scrollTop();
					this.scrollH = W.scrollLeft();

					this.el.addClass('fancybox-lock');

					W.scrollTop( this.scrollV ).scrollLeft( this.scrollH );
				}

				this.open(opts);
			},

			onUpdate : function() {
				if (!this.fixed) {
					this.update();
				}
			},

			afterClose: function (opts) {
				// Remove overlay if exists and fancyBox is not opening
				// (e.g., it is not being open using afterClose callback)
				if (this.overlay && !F.coming) {
					this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
				}
			}
		};

		/*
		 *	Title helper
		 */

		F.helpers.title = {
			defaults : {
				type     : 'float', // 'float', 'inside', 'outside' or 'over',
				position : 'bottom' // 'top' or 'bottom'
			},

			beforeShow: function (opts) {
				var current = F.current,
					text    = current.title,
					type    = opts.type,
					title,
					target;

				if ($.isFunction(text)) {
					text = text.call(current.element, current);
				}

				if (!isString(text) || $.trim(text) === '') {
					return;
				}

				title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

				switch (type) {
					case 'inside':
						target = F.skin;
					break;

					case 'outside':
						target = F.wrap;
					break;

					case 'over':
						target = F.inner;
					break;

					default: // 'float'
						target = F.skin;

						title.appendTo('body');

						if (IE) {
							title.width( title.width() );
						}

						title.wrapInner('<span class="child"></span>');

						//Increase bottom margin so this title will also fit into viewport
						F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
					break;
				}

				title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
			}
		};

		// jQuery plugin initialization
		$.fn.fancybox = function (options) {
			var index,
				that     = $(this),
				selector = this.selector || '',
				run      = function(e) {
					var what = $(this).blur(), idx = index, relType, relVal;

					if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
						relType = options.groupAttr || 'data-fancybox-group';
						relVal  = what.attr(relType);

						if (!relVal) {
							relType = 'rel';
							relVal  = what.get(0)[ relType ];
						}

						if (relVal && relVal !== '' && relVal !== 'nofollow') {
							what = selector.length ? $(selector) : that;
							what = what.filter('[' + relType + '="' + relVal + '"]');
							idx  = what.index(this);
						}

						options.index = idx;

						// Stop an event from bubbling if everything is fine
						if (F.open(what, options) !== false) {
							e.preventDefault();
						}
					}
				};

			options = options || {};
			index   = options.index || 0;

			if (!selector || options.live === false) {
				that.unbind('click.fb-start').bind('click.fb-start', run);

			} else {
				D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
			}

			this.filter('[data-fancybox-start=1]').trigger('click');

			return this;
		};

		// Tests that need a body at doc ready
		D.ready(function() {
			var w1, w2;

			if ( $.scrollbarWidth === undefined ) {
				// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
				$.scrollbarWidth = function() {
					var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
						child  = parent.children(),
						width  = child.innerWidth() - child.height( 99 ).innerWidth();

					parent.remove();

					return width;
				};
			}

			if ( $.support.fixedPosition === undefined ) {
				$.support.fixedPosition = (function() {
					var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
						fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

					elem.remove();

					return fixed;
				}());
			}

			$.extend(F.defaults, {
				scrollbarWidth : $.scrollbarWidth(),
				fixed  : $.support.fixedPosition,
				parent : $('body')
			});

			//Get real width of page scroll-bar
			w1 = $(window).width();

			H.addClass('fancybox-lock-test');

			w2 = $(window).width();

			H.removeClass('fancybox-lock-test');

			$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
		});

	}(window, document, jQuery));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
	(function(s,H,f,w){var K=f("html"),q=f(s),p=f(H),b=f.fancybox=function(){b.open.apply(this,arguments)},J=navigator.userAgent.match(/msie/i),C=null,t=H.createTouch!==w,u=function(a){return a&&a.hasOwnProperty&&a instanceof f},r=function(a){return a&&"string"===f.type(a)},F=function(a){return r(a)&&0<a.indexOf("%")},m=function(a,d){var e=parseInt(a,10)||0;d&&F(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},x=function(a,b){return m(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
	width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!t,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
	keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
	(J?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
	openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
	isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=u(a)?f(a).get():[a]),f.each(a,function(e,c){var l={},g,h,k,n,m;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),u(c)?(l={href:c.data("fancybox-href")||c.attr("href"),title:f("<div/>").text(c.data("fancybox-title")||c.attr("title")).html(),isDom:!0,element:c},
	f.metadata&&f.extend(!0,l,c.metadata())):l=c);g=d.href||l.href||(r(c)?c:null);h=d.title!==w?d.title:l.title||"";n=(k=d.content||l.content)?"html":d.type||l.type;!n&&l.isDom&&(n=c.data("fancybox-type"),n||(n=(n=c.prop("class").match(/fancybox\.(\w+)/))?n[1]:null));r(g)&&(n||(b.isImage(g)?n="image":b.isSWF(g)?n="swf":"#"===g.charAt(0)?n="inline":r(c)&&(n="html",k=c)),"ajax"===n&&(m=g.split(/\s+/,2),g=m.shift(),m=m.shift()));k||("inline"===n?g?k=f(r(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):l.isDom&&(k=c):
	"html"===n?k=g:n||g||!l.isDom||(n="inline",k=c));f.extend(l,{href:g,type:n,content:k,title:h,selector:m});a[e]=l}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==w&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1===b.trigger("onCancel")||(b.hideLoading(),a&&(b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),
	b.coming=null,b.current||b._afterZoomOut(a)))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(b.isOpen&&!0!==a?(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]()):(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&
	(b.player.timer=setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};!0===a||!b.player.isActive&&!1!==a?b.current&&(b.current.loop||b.current.index<b.group.length-1)&&(b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")):c()},next:function(a){var d=b.current;d&&(r(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=
	b.current;d&&(r(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=m(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==w&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,l;c&&(l=b._getPosition(d),a&&"scroll"===a.type?(delete l.position,c.stop(!0,!0).animate(l,200)):(c.css(l),e.pos=f.extend({},e.dim,l)))},
	update:function(a){var d=a&&a.originalEvent&&a.originalEvent.type,e=!d||"orientationchange"===d;e&&(clearTimeout(C),C=null);b.isOpen&&!C&&(C=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),C=null)},e&&!t?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,t&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),
	b.trigger("onUpdate")),b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){27===(a.which||a.keyCode)&&(a.preventDefault(),b.cancel())});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}));b.trigger("onLoading")},getViewport:function(){var a=b.current&&
	b.current.locked||!1,d={x:q.scrollLeft(),y:q.scrollTop()};a&&a.length?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=t&&s.innerWidth?s.innerWidth:q.width(),d.h=t&&s.innerHeight?s.innerHeight:q.height());return d},unbindEvents:function(){b.wrap&&u(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");q.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(q.bind("orientationchange.fb"+(t?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=
	e.which||e.keyCode,l=e.target||e.srcElement;if(27===c&&b.coming)return!1;e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||l&&(l.type||f(l).is("[contenteditable]"))||f.each(d,function(d,l){if(1<a.group.length&&l[c]!==w)return b[d](l[c]),e.preventDefault(),!1;if(-1<f.inArray(c,l))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,l,g){for(var h=f(d.target||null),k=!1;h.length&&!(k||h.is(".fancybox-skin")||h.is(".fancybox-wrap"));)k=h[0]&&!(h[0].style.overflow&&
	"hidden"===h[0].style.overflow)&&(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();0!==c&&!k&&1<b.group.length&&!a.canShrink&&(0<g||0<l?b.prev(0<g?"down":"left"):(0>g||0>l)&&b.next(0>g?"up":"right"),d.preventDefault())}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&
	b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,{},b.helpers[d].defaults,e),c)})}p.trigger(a)},isImage:function(a){return r(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return r(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=m(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,
	c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===
	c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=!0);"iframe"===c&&t&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(t?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,x(d.padding[a]))});b.trigger("onReady");
	if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=
	this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,
	d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",t?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);t||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||
	b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,l,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
	b.unbindEvents();e=a.content;c=a.type;l=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):u(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",
	!1)}));break;case "image":e=a.tpl.image.replace(/\{href\}/g,g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}u(e)&&e.parent().is(a.inner)||a.inner.append(e);b.trigger("beforeShow");
	a.inner.css("overflow","yes"===l?"scroll":"no"===l?"hidden":l);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(!b.isOpened)f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();else if(d.prevMethod)b.transitions[d.prevMethod]();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,l=b.skin,g=b.inner,h=b.current,c=h.width,k=h.height,n=h.minWidth,v=h.minHeight,p=h.maxWidth,
	q=h.maxHeight,t=h.scrolling,r=h.scrollOutside?h.scrollbarWidth:0,y=h.margin,z=m(y[1]+y[3]),s=m(y[0]+y[2]),w,A,u,D,B,G,C,E,I;e.add(l).add(g).width("auto").height("auto").removeClass("fancybox-tmp");y=m(l.outerWidth(!0)-l.width());w=m(l.outerHeight(!0)-l.height());A=z+y;u=s+w;D=F(c)?(a.w-A)*m(c)/100:c;B=F(k)?(a.h-u)*m(k)/100:k;if("iframe"===h.type){if(I=h.content,h.autoHeight&&1===I.data("ready"))try{I[0].contentWindow.document.location&&(g.width(D).height(9999),G=I.contents().find("body"),r&&G.css("overflow-x",
	"hidden"),B=G.outerHeight(!0))}catch(H){}}else if(h.autoWidth||h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(D),h.autoHeight||g.height(B),h.autoWidth&&(D=g.width()),h.autoHeight&&(B=g.height()),g.removeClass("fancybox-tmp");c=m(D);k=m(B);E=D/B;n=m(F(n)?m(n,"w")-A:n);p=m(F(p)?m(p,"w")-A:p);v=m(F(v)?m(v,"h")-u:v);q=m(F(q)?m(q,"h")-u:q);G=p;C=q;h.fitToView&&(p=Math.min(a.w-A,p),q=Math.min(a.h-u,q));A=a.w-z;s=a.h-s;h.aspectRatio?(c>p&&(c=p,k=m(c/E)),k>q&&(k=q,c=m(k*E)),c<n&&(c=n,k=m(c/
	E)),k<v&&(k=v,c=m(k*E))):(c=Math.max(n,Math.min(c,p)),h.autoHeight&&"iframe"!==h.type&&(g.width(c),k=g.height()),k=Math.max(v,Math.min(k,q)));if(h.fitToView)if(g.width(c).height(k),e.width(c+y),a=e.width(),z=e.height(),h.aspectRatio)for(;(a>A||z>s)&&c>n&&k>v&&!(19<d++);)k=Math.max(v,Math.min(q,k-10)),c=m(k*E),c<n&&(c=n,k=m(c/E)),c>p&&(c=p,k=m(c/E)),g.width(c).height(k),e.width(c+y),a=e.width(),z=e.height();else c=Math.max(n,Math.min(c,c-(a-A))),k=Math.max(v,Math.min(k,k-(z-s)));r&&"auto"===t&&k<B&&
	c+y+r<A&&(c+=r);g.width(c).height(k);e.width(c+y);a=e.width();z=e.height();e=(a>A||z>s)&&c>n&&k>v;c=h.aspectRatio?c<G&&k<C&&c<D&&k<B:(c<G||k<C)&&(c<D||k<B);f.extend(h,{dim:{width:x(a),height:x(z)},origWidth:D,origHeight:B,canShrink:e,canExpand:c,wPadding:y,hPadding:w,wrapSpace:z-l.outerHeight(!0),skinSpace:l.height()-k});!I&&h.autoHeight&&k>v&&k<q&&!c&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",
	top:c[0],left:c[3]};d.autoCenter&&d.fixed&&!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=x(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=x(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&((b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){f(d.target).is("a")||f(d.target).parent().is("a")||
	(d.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),a.loop||a.index!==a.group.length-1)?b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play(!0)):b.play(!1))},
	_afterZoomOut:function(a){a=a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,k=a.wPadding,n=b.getViewport();!e&&a.isDom&&d.is(":visible")&&(e=d.find("img:first"),e.length||(e=d));u(e)?(c=e.offset(),e.is("img")&&
	(f=e.outerWidth(),g=e.outerHeight())):(c.top=n.y+(n.h-g)*a.topRatio,c.left=n.x+(n.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=n.y,c.left-=n.x;return c={top:x(c.top-h*a.topRatio),left:x(c.left-k*a.leftRatio),width:x(f+k),height:x(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](m("width"===
	f?c:c-g*e)),b.inner[f](m("width"===f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,l=f.extend({opacity:1},d);delete l.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(l,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&
	(c.opacity=0.1));b.wrap.animate(c,{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=x(m(e[g])-200),c[g]="+=200px"):(e[g]=x(m(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},
	changeOut:function(){var a=b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!t,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){var d;a=f.extend({},this.defaults,a);this.overlay&&
	this.close();d=b.coming?b.coming.parent:a.parent;this.overlay=f('<div class="fancybox-overlay"></div>').appendTo(d&&d.lenth?d:"body");this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(q.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",
	function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){q.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");
	J?(b=Math.max(H.documentElement.offsetWidth,H.body.offsetWidth),p.width()>b&&(a=p.width())):p.width()>q.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&this.fixed&&b.fixed&&(b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){b.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&f("*").filter(function(){return"fixed"===
	f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=q.scrollTop(),this.scrollH=q.scrollLeft(),this.el.addClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",
	position:"bottom"},beforeShow:function(a){var d=b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(r(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),J&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(m(d.css("margin-bottom")))}d["top"===a.position?"prependTo":
	"appendTo"](c)}}};f.fn.fancybox=function(a){var d,e=f(this),c=this.selector||"",l=function(g){var h=f(this).blur(),k=d,l,m;g.ctrlKey||g.altKey||g.shiftKey||g.metaKey||h.is(".fancybox-wrap")||(l=a.groupAttr||"data-fancybox-group",m=h.attr(l),m||(l="rel",m=h.get(0)[l]),m&&""!==m&&"nofollow"!==m&&(h=c.length?f(c):e,h=h.filter("["+l+'="'+m+'"]'),k=h.index(this)),a.index=k,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;c&&!1!==a.live?p.undelegate(c,"click.fb-start").delegate(c+":not('.fancybox-item, .fancybox-nav')",
	"click.fb-start",l):e.unbind("click.fb-start").bind("click.fb-start",l);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===w&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});f.support.fixedPosition===w&&(f.support.fixedPosition=function(){var a=f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
	b=20===a[0].offsetTop||15===a[0].offsetTop;a.remove();return b}());f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(s).width();K.addClass("fancybox-lock-test");d=f(s).width();K.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jqueryFancybox = __webpack_require__(3);

	var _jqueryFancybox2 = _interopRequireDefault(_jqueryFancybox);

	var _jqueryFancyboxPack = __webpack_require__(4);

	var _jqueryFancyboxPack2 = _interopRequireDefault(_jqueryFancyboxPack);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HeaderMenu = function () {
	    function HeaderMenu() {
	        _classCallCheck(this, HeaderMenu);

	        this.initMenu();
	        this.headerTabs = $('.section-tabs');
	        this.checkForBaseAndCorrectTabHrefs();
	        this.headerTabs.tabs();
	    }

	    _createClass(HeaderMenu, [{
	        key: 'setActiveTab',
	        value: function setActiveTab(section) {
	            var options = { active: 0 };
	            switch (section) {
	                case 'nav-sources':
	                    options.active = 0;
	                    break;
	                case 'nav-topics':
	                    options.active = 1;
	                    break;
	                case 'nav-geography':
	                    options.active = 2;
	                    break;
	                case 'nav-tools':
	                    options.active = 3;
	                    break;
	                case 'nav-learn':
	                    options.active = 4;
	                    break;
	                case 'nav-news':
	                    options.active = 5;
	                    break;
	                case 'nav-default':
	                    options.active = 0;
	            }
	            this.headerTabs.tabs("option", "active", options.active);
	        }
	    }, {
	        key: 'checkForBaseAndCorrectTabHrefs',
	        value: function checkForBaseAndCorrectTabHrefs() {
	            var base = $('base');
	            if (base.length > 0) {
	                var baseHref = base.attr('href');
	                $.each($('ul:first a', this.headerTabs), function (index, anchor) {
	                    if (!$(anchor).data('orig-href')) {
	                        $(anchor).data('orig-href', $(anchor).attr('href'));
	                    }
	                    $(anchor).attr('href', window.location.pathname + $(anchor).data('orig-href'));
	                });
	            }
	        }
	    }, {
	        key: 'initMenu',
	        value: function initMenu() {
	            var viewPortWidth = window.innerWidth;
	            var viewPortHeight = window.innerHeight;
	            var fancyBoxWidth = 980;
	            var self = this;

	            //    console.log(fbWidth);
	            $('.fancybox-menu').fancybox({
	                scrolling: 'visible',
	                type: 'inline',
	                width: fancyBoxWidth,
	                autoSize: false, // required for width
	                margin: [40, 0, 20, 0],
	                height: 'auto',
	                padding: 0,
	                fitToView: false,
	                topRatio: 0,
	                autoDimension: false,
	                tpl: {
	                    closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><i class="ico-menu close-menu">Close</i></a>'
	                },
	                beforeLoad: function beforeLoad() {
	                    self.checkForBaseAndCorrectTabHrefs();
	                    viewPortWidth = window.innerWidth;
	                    if (viewPortWidth <= fancyBoxWidth) {
	                        this.width = viewPortWidth;
	                        this.fitToView = true;
	                    } else {
	                        this.width = fancyBoxWidth;
	                        this.fitToView = false;
	                    };
	                },
	                beforeShow: function beforeShow() {
	                    $('.section-tabs').parents('.fancybox-wrap').addClass('global-nav');
	                    self.setActiveTab($(this.element).data('target'));
	                },
	                onUpdate: function onUpdate() {
	                    if (window.innerWidth <= fancyBoxWidth) {
	                        this.margin = [0, 0, 0, 0];
	                        this.fitToView = true;
	                    } else {
	                        this.margin = [40, 0, 20, 0];
	                        this.width = fancyBoxWidth;
	                        this.fitToView = false;
	                    };
	                    $.fancybox.reposition();
	                    $('.section-tabs .ui-tabs-anchor').click(function () {
	                        $.fancybox.update();
	                    });
	                },
	                helpers: {
	                    overlay: {
	                        locked: true // try changing to true and scrolling around the page
	                    }
	                }
	            });
	        }
	    }]);

	    return HeaderMenu;
	}();

	exports.default = HeaderMenu;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HeaderSearch = function () {
	    function HeaderSearch() {
	        _classCallCheck(this, HeaderSearch);

	        this.searchPanel = $('.search-panel');
	        this.header = $('header');
	        this.logo = $('.logo');
	        this.searchIcon = $('.search-menu-toggle');
	        this.events();
	    }

	    _createClass(HeaderSearch, [{
	        key: 'events',
	        value: function events() {
	            this.searchIcon.click(this.toggleSearchPanel.bind(this));
	        }
	    }, {
	        key: 'toggleSearchPanel',
	        value: function toggleSearchPanel() {
	            this.header.toggleClass('show');
	            this.logo.toggleClass('show');
	            this.searchPanel.toggleClass('show');
	        }
	    }]);

	    return HeaderSearch;
	}();

	exports.default = HeaderSearch;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ShrinkExpand = function () {
	    function ShrinkExpand() {
	        _classCallCheck(this, ShrinkExpand);

	        // dom objects
	        this.browserWindow = $(window);
	        this.Scroll = $(this.browserWindow).scroll(this.events.bind(this));
	        //        this.events();
	    }

	    _createClass(ShrinkExpand, [{
	        key: 'events',
	        value: function events() {
	            if (this.browserWindow.scrollTop() > 96) {
	                //console.log("shrink");
	                $('header').addClass('shrink');
	                //$('#sticker').offset({top:$('header').scrollTop()+60});
	                //$('#sticker').addClass('shrink');
	            }
	            if (this.browserWindow.scrollTop() < 97) {
	                //console.log("expand");
	                $('header').removeClass('shrink');
	                //$('#sticker').offset({top:$('header').scrollTop()+96});
	                //$('#sticker').removeClass('shrink');
	            }
	        }
	    }]);

	    return ShrinkExpand;
	}();

	exports.default = ShrinkExpand;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SocialSticker = function () {
	    function SocialSticker() {
	        _classCallCheck(this, SocialSticker);

	        this.target = $('#sticker');
	        this.hover(this.target);
	        function position() {
	            $('#sticker.positionable').position({
	                of: $('.l-inner-wrapper'),
	                my: 'left top',
	                at: 'right top'
	            });
	            $('#sticker').offset({ top: $(window).scrollTop() + $('header').height() + 2 });
	        }
	        $('#sticker').hover(function (event) {}, function (event) {});
	        $(window).scroll(function () {
	            position();
	        });
	        $(window).resize(function () {
	            position();
	        });
	        $('header').on('transitionend', function () {
	            position();
	        });
	        var load = function load() {
	            position();
	        };
	        window.onload = load;
	    }

	    _createClass(SocialSticker, [{
	        key: 'hover',
	        value: function hover(target) {
	            var $hoverTarget = $(target);
	            var rolloverClass = 'hover';
	            $hoverTarget.hover(function (event) {
	                $(event.currentTarget).addClass(rolloverClass);
	            }, function (event) {
	                $(event.currentTarget).removeClass(rolloverClass);
	            });
	        }
	    }]);

	    return SocialSticker;
	}();

	exports.default = SocialSticker;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BookshelfSearch = function () {
	    function BookshelfSearch() {
	        _classCallCheck(this, BookshelfSearch);

	        var self = this;
	        this.tags = [];
	        this.container = $("#header-tag-search");
	        this.selectedTagId = "";
	        this.selectedTagText = "";

	        this.resetControl();

	        $("input", this.container).on('keyup', function (e) {
	            self.handleSearchInput(e);
	        }).on('blur', function (e) {
	            self.resetControl();
	        });
	        $("#header-tags-search .bookshelftags", this.container).on('mousedown', 'div', function (e) {
	            self.searchElementSelectedHandler(e);
	            e.preventDefault();
	        });

	        $('#header-bookshelf-search-form', this.container).on('submit', function (e) {
	            self.submitSearch();
	            e.preventDefault();
	        });
	        this.getAllTags();
	    }

	    _createClass(BookshelfSearch, [{
	        key: "handleSearchInput",
	        value: function handleSearchInput(e) {
	            var srchStr = $("input", this.container).val().toLowerCase();

	            $('#header-tags-search .bookshelftags', this.container).empty();

	            for (var t = 0; t < this.tags.length; t++) {
	                var initCap = this.tags[t].label.substring(0, 1);
	                var remDsc = this.tags[t].label.substring(1, this.tags[t].label.length);
	                var fullDsc = this.tags[t].label.toLowerCase();
	                var srchTag = this.tags[t].identifier;

	                if (fullDsc.search(srchStr) == 0) {
	                    $('#header-tags-search .bookshelftags', this.container).append("<div name=\"tag-input\" value=" + this.tags[t].identifier + " data-selectable class=\"option\"><span class=\"highlight\">" + initCap + "</span>" + remDsc + "</div>");
	                }
	            }
	            $("#header-tags-search").show();
	        }
	    }, {
	        key: "searchElementSelectedHandler",
	        value: function searchElementSelectedHandler(e) {
	            this.selectedTagId = $(e.currentTarget).attr('value');
	            this.selectedTagText = $(e.currentTarget).text();
	            $("input", this.container).val($(e.currentTarget).text());
	            this.hideControl();
	        }
	    }, {
	        key: "getAllTags",
	        value: function getAllTags() {
	            var self = this;
	            $.ajax({
	                "url": "/global/includes/bookshelf/index.php",
	                "dataType": "json",
	                "type": "GET"
	            }).fail(function (jqXHR, textStatus, errorThrown) {
	                console.log('failed to retrieve tags');
	                self.container.hide();
	            }).done(function (data, textStatus, jqHXR) {
	                self.tags = data.tags;
	            });
	        }
	    }, {
	        key: "hideControl",
	        value: function hideControl() {
	            $("#header-tags-search", this.container).hide();
	        }
	    }, {
	        key: "resetControl",
	        value: function resetControl() {
	            this.hideControl();
	            $("input", this.container).val(this.selectedTagText);
	        }
	    }, {
	        key: "submitSearch",
	        value: function submitSearch() {
	            $.fancybox.close();
	            window.location = "/reports/#/" + this.selectedTagId;
	        }
	    }]);

	    return BookshelfSearch;
	}();

	exports.default = BookshelfSearch;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	//import bxslider from '../../../../node_modules/bxslider/dist/jquery.bxslider.min.js';
	/* the bxslider is no longer maintained and there is a bug that throws an error when users use the touchscreen. The error shows up in the console only and there's no known issues with the slider. A copy of the bxslider.js with the 'fix' and the file now resides on the global/scripts/bxslider file */


	var _bxslider = __webpack_require__(11);

	var _bxslider2 = _interopRequireDefault(_bxslider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BxSlider = function () {
	    function BxSlider() {
	        _classCallCheck(this, BxSlider);

	        this.arrowControls = $('.bx-controls');

	        // run on initial page load
	        this.bxSliderHome();
	        // run on window resize
	        $(window).resize(this.bxSliderHome);

	        var sliderExists = document.querySelector('.slider-multi');
	        if (sliderExists !== null) {
	            // on load, trigger the resize event
	            // load the slider when it's ready
	            var _MultiSliderLoaded = function _MultiSliderLoaded() {
	                $('.slider-multi').addClass('bxslider-visible');
	                setTimeout(function () {
	                    $('.slider-multi-pager').addClass('bxslider-visible');
	                }, 1000);
	            };

	            var mySettings = {
	                auto: false,
	                wrapperClass: 'slider-multi-wrapper',
	                nextText: '&#8250;',
	                prevText: '&#8249;',
	                infiniteLoop: true,
	                pager: true,
	                pagerSelector: '.slider-multi-pager',
	                slideWidth: 154,
	                slideMargin: 14,
	                onSliderLoad: _MultiSliderLoaded()
	            };
	            var slider = $('.slider-multi ul').bxSlider(mySettings);
	            $(window).on('orientationchange resize', function () {

	                var footerWidth = $('footer').width();
	                var mobileSlideWidth = parseInt(footerWidth - 40); // for left/right peeking
	                //const mobileSlideWidth            = parseInt(footerWidth);
	                var mobileLandscapeSlideWidth = parseInt((footerWidth - 40) / 2);
	                var tabletSlideWidth = parseInt((footerWidth - 40) / 3);
	                var tabletLandscapeSlideWidth = parseInt((footerWidth - 40) / 3);
	                //const basicTable                  = parseInt(footerWidth - 12);
	                //const stickyTable                  = parseInt(footerWidth - 16);         

	                if (footerWidth > 989) {
	                    setTimeout(function () {
	                        $('.bx-controls').addClass('show').removeClass('hide');
	                        console.log('footer : ' + footerWidth);
	                    }, 1000);
	                } else if (footerWidth <= 989) {
	                    setTimeout(function () {
	                        $('.bx-controls').removeClass('show').addClass('hide');
	                        console.log('footer : ' + footerWidth);
	                    }, 1000);
	                };

	                if (footerWidth >= 801 && footerWidth <= 987) {
	                    mySettings.wrapperClass = 'slider-multi-wrapper';
	                    mySettings.minSlides = 4;
	                    mySettings.maxSlides = 4;
	                    mySettings.moveSlides = 4;
	                    mySettings.nextText = '&#8250;';
	                    mySettings.prevText = '&#8249;';
	                    mySettings.infiniteLoop = true;
	                    mySettings.pagerSelector = '.slider-multi-pager';
	                    mySettings.slideWidth = tabletLandscapeSlideWidth;
	                    mySettings.slideMargin = 0; // was 10
	                    mySettings.onSliderLoad = _MultiSliderLoaded();
	                    setTimeout(function () {
	                        slider.destroySlider();
	                        slider.reloadSlider(mySettings);
	                    }, 100);
	                    $('.slider-multi').css('width', +footerWidth);
	                    $('.slider-multi-wrapper').css('width', +footerWidth);
	                    $('.sticky').css('width', +(footerWidth - 12));
	                    console.log('Tablet & Landscape - footer width: ' + footerWidth + ', ' + '.slider-multi width: ' + footerWidth + ', ' + '.slider-multi-wrapper width: ' + tabletLandscapeSlideWidth);
	                } else if (footerWidth >= 600 && footerWidth <= 800) {
	                    mySettings.wrapperClass = 'slider-multi-wrapper';
	                    mySettings.minSlides = 3;
	                    mySettings.maxSlides = 3;
	                    mySettings.moveSlides = 3;
	                    mySettings.infiniteLoop = true;
	                    mySettings.pager = false;
	                    mySettings.controls = false;
	                    mySettings.slideWidth = tabletSlideWidth;
	                    mySettings.slideMargin = 0; // was 10
	                    mySettings.onSliderLoad = _MultiSliderLoaded();
	                    setTimeout(function () {
	                        slider.destroySlider();
	                        slider.reloadSlider(mySettings);
	                    }, 100);
	                    $('.slider-multi').css('width', +footerWidth);
	                    $('.slider-multi-wrapper').css('width', +footerWidth);
	                    $(".bx-viewport").css('overflow', 'visible'); // required for peeking left and right slides
	                    $('.sticky').css('width', +(footerWidth - 12));
	                    console.log('tablet - footer width: ' + footerWidth + ', ' + '.slider-multi width: ' + footerWidth + ', ' + '.slider-multi-wrapper width: ' + tabletSlideWidth);
	                } else if (footerWidth >= 450 && footerWidth <= 599) {
	                    mySettings.wrapperClass = 'slider-multi-wrapper';
	                    mySettings.minSlides = 2;
	                    mySettings.maxSlides = 2;
	                    mySettings.moveSlides = 2;
	                    mySettings.infiniteLoop = true;
	                    mySettings.pager = false;
	                    mySettings.controls = false;
	                    mySettings.slideWidth = mobileLandscapeSlideWidth;
	                    mySettings.slideMargin = 0; // was 10
	                    mySettings.onSliderLoad = _MultiSliderLoaded();
	                    setTimeout(function () {
	                        slider.destroySlider();
	                        slider.reloadSlider(mySettings);
	                    }, 100);

	                    $('.slider-multi').css('width', +footerWidth);
	                    $('.slider-multi-wrapper').css('width', +footerWidth);
	                    $(".bx-viewport").css('overflow', 'visible'); // required for peeking left and right slides
	                    $('.sticky').css('width', +(footerWidth - 12));
	                    console.log('mobileLandscape - footer width: ' + footerWidth + ', ' + '.slider-multi width: ' + footerWidth + ', ' + '.slider-multi-wrapper width: ' + mobileLandscapeSlideWidth);
	                } else if (footerWidth >= 320 && footerWidth <= 449) {
	                    mySettings.wrapperClass = 'slider-multi-wrapper';
	                    mySettings.minSlides = 1;
	                    mySettings.maxSlides = 1;
	                    mySettings.moveSlides = 1;
	                    mySettings.infiniteLoop = true;
	                    mySettings.pager = false;
	                    mySettings.controls = false;
	                    mySettings.slideWidth = mobileSlideWidth;
	                    mySettings.slideMargin = 0; // was 10
	                    mySettings.onSliderLoad = _MultiSliderLoaded();
	                    setTimeout(function () {
	                        slider.destroySlider();
	                        slider.reloadSlider(mySettings);
	                    }, 100);
	                    $('.slider-multi').css('width', +footerWidth);
	                    $('.slider-multi-wrapper').css('width', +footerWidth);
	                    $('.bx-viewport').css('overflow', 'visible'); // required for peeking left and right slides
	                    $('.sticky').css('width', +(footerWidth - 16));
	                    console.log('mobile - footer width: ' + footerWidth + ', ' + '.slider-multi width: ' + footerWidth + ', ' + '.slider-multi-wrapper width: ' + mobileSlideWidth);
	                } else {
	                    mySettings.wrapperClass = 'slider-multi-wrapper';
	                    mySettings.minSlides = 5;
	                    mySettings.maxSlides = 5;
	                    mySettings.moveSlides = 5;
	                    mySettings.nextText = '&#8250;';
	                    mySettings.prevText = '&#8249;';
	                    mySettings.infiniteLoop = true;
	                    mySettings.pagerSelector = '.slider-multi-pager';
	                    mySettings.slideWidth = 154;
	                    mySettings.slideMargin = 14;
	                    mySettings.onSliderLoad = _MultiSliderLoaded();
	                    setTimeout(function () {
	                        slider.destroySlider();
	                        slider.reloadSlider(mySettings);
	                    }, 100);
	                    $('.slider-multi').css('width', '912');
	                    console.log("912");
	                    console.log('laptop - footer width: ' + footerWidth + ', ' + '.slider-multi width: ' + footerWidth + ', ' + '.slider-multi-wrapper width: ' + footerWidth);
	                };
	            }).trigger('resize');
	        }
	    }

	    /*
	    MultiSliderLoaded() {
	        console.log('Loaded - show slides');
	        $('.slider-multi').addClass('bxslider-visible');
	        $('.slider-home').addClass('bxslider-visible');
	    }
	      MultiSliderLoaded() {
	        this.header.toggleClass('show');
	        this.logo.toggleClass('show');
	        this.searchPanel.toggleClass('show');
	    } 
	    toggleArrows() {
	        this.header.toggleClass('show');
	        this.logo.toggleClass('show');
	        this.searchPanel.toggleClass('show');
	    } 
	    */

	    _createClass(BxSlider, [{
	        key: 'bxSliderHome',
	        value: function bxSliderHome() {
	            $('.slider-home ul').bxSlider({
	                auto: true,
	                minSlides: 1,
	                maxSlides: 1,
	                slideMargin: 0, //integer
	                wrapperClass: 'slider-home-wrapper',
	                autoHover: true,
	                controls: false,
	                pager: true,
	                pagerSelector: '.slider-home-pager',
	                slideWidth: 960,
	                pause: 10000,
	                // onLoad
	                onSliderLoad: HomeSliderLoaded()
	            });
	            function HomeSliderLoaded() {
	                $('.slider-home').addClass('bxslider-visible');
	            }
	        }
	    }, {
	        key: 'slideOrder',
	        value: function slideOrder() {
	            // if home slider slider href contains '?', append &x=z, else, append ?x=z
	            $('.slider-home h2 a, .slider-home h3 a').attr('href', function (ind, attr) {

	                var slideOrder = $(this).parents('li').attr('class');
	                var hash_position = attr.indexOf('#');
	                var new_url_argument = /\?/.test(attr) ? '&src=home-' + slideOrder : '?src=home-' + slideOrder;

	                // if there is no hash in the url, then add the new argument to the end, otherwise insert before the hash.
	                return hash_position == -1 ? attr + new_url_argument : attr.substring(0, hash_position) + new_url_argument + attr.substring(hash_position, attr.length);
	                //return /\?/.test(attr) ? attr + '&src=home-' + pos : attr + '?src=home-' + pos;
	            });
	        }
	    }]);

	    return BxSlider;
	}();

	exports.default = BxSlider;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	/**
	 * bxSlider v4.2.12
	 * Copyright 2013-2015 Steven Wanderski
	 * Written while drinking Belgian ales and listening to jazz
	 * Licensed under MIT (http://opensource.org/licenses/MIT)
	 */

	;(function ($) {

	  var defaults = {

	    // GENERAL
	    mode: 'horizontal',
	    slideSelector: '',
	    infiniteLoop: true,
	    hideControlOnEnd: false,
	    speed: 500,
	    easing: null,
	    slideMargin: 0,
	    startSlide: 0,
	    randomStart: false,
	    captions: false,
	    ticker: false,
	    tickerHover: false,
	    adaptiveHeight: false,
	    adaptiveHeightSpeed: 500,
	    video: false,
	    useCSS: true,
	    preloadImages: 'visible',
	    responsive: true,
	    slideZIndex: 50,
	    wrapperClass: 'bx-wrapper',

	    // TOUCH
	    touchEnabled: true,
	    swipeThreshold: 50,
	    oneToOneTouch: true,
	    preventDefaultSwipeX: true,
	    preventDefaultSwipeY: false,

	    // ACCESSIBILITY
	    ariaLive: true,
	    ariaHidden: true,

	    // KEYBOARD
	    keyboardEnabled: false,

	    // PAGER
	    pager: true,
	    pagerType: 'full',
	    pagerShortSeparator: ' / ',
	    pagerSelector: null,
	    buildPager: null,
	    pagerCustom: null,

	    // CONTROLS
	    controls: true,
	    nextText: 'Next',
	    prevText: 'Prev',
	    nextSelector: null,
	    prevSelector: null,
	    autoControls: false,
	    startText: 'Start',
	    stopText: 'Stop',
	    autoControlsCombine: false,
	    autoControlsSelector: null,

	    // AUTO
	    auto: false,
	    pause: 4000,
	    autoStart: true,
	    autoDirection: 'next',
	    stopAutoOnClick: false,
	    autoHover: false,
	    autoDelay: 0,
	    autoSlideForOnePage: false,

	    // CAROUSEL
	    minSlides: 1,
	    maxSlides: 1,
	    moveSlides: 0,
	    slideWidth: 0,
	    shrinkItems: false,

	    // CALLBACKS
	    onSliderLoad: function onSliderLoad() {
	      return true;
	    },
	    onSlideBefore: function onSlideBefore() {
	      return true;
	    },
	    onSlideAfter: function onSlideAfter() {
	      return true;
	    },
	    onSlideNext: function onSlideNext() {
	      return true;
	    },
	    onSlidePrev: function onSlidePrev() {
	      return true;
	    },
	    onSliderResize: function onSliderResize() {
	      return true;
	    },
	    onAutoChange: function onAutoChange() {
	      return true;
	    } //calls when auto slides starts and stops
	  };

	  $.fn.bxSlider = function (options) {

	    if (this.length === 0) {
	      return this;
	    }

	    // support multiple elements
	    if (this.length > 1) {
	      this.each(function () {
	        $(this).bxSlider(options);
	      });
	      return this;
	    }

	    // create a namespace to be used throughout the plugin
	    var slider = {},

	    // set a reference to our slider element
	    el = this,

	    // get the original window dimens (thanks a lot IE)
	    windowWidth = $(window).width(),
	        windowHeight = $(window).height();

	    // Return if slider is already initialized
	    if ($(el).data('bxSlider')) {
	      return;
	    }

	    /**
	     * ===================================================================================
	     * = PRIVATE FUNCTIONS
	     * ===================================================================================
	     */

	    /**
	     * Initializes namespace settings to be used throughout plugin
	     */
	    var init = function init() {
	      // Return if slider is already initialized
	      if ($(el).data('bxSlider')) {
	        return;
	      }
	      // merge user-supplied options with the defaults
	      slider.settings = $.extend({}, defaults, options);
	      // parse slideWidth setting
	      slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
	      // store the original children
	      slider.children = el.children(slider.settings.slideSelector);
	      // check if actual number of slides is less than minSlides / maxSlides
	      if (slider.children.length < slider.settings.minSlides) {
	        slider.settings.minSlides = slider.children.length;
	      }
	      if (slider.children.length < slider.settings.maxSlides) {
	        slider.settings.maxSlides = slider.children.length;
	      }
	      // if random start, set the startSlide setting to random number
	      if (slider.settings.randomStart) {
	        slider.settings.startSlide = Math.floor(Math.random() * slider.children.length);
	      }
	      // store active slide information
	      slider.active = { index: slider.settings.startSlide };
	      // store if the slider is in carousel mode (displaying / moving multiple slides)
	      slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1 ? true : false;
	      // if carousel, force preloadImages = 'all'
	      if (slider.carousel) {
	        slider.settings.preloadImages = 'all';
	      }
	      // calculate the min / max width thresholds based on min / max number of slides
	      // used to setup and update carousel slides dimensions
	      slider.minThreshold = slider.settings.minSlides * slider.settings.slideWidth + (slider.settings.minSlides - 1) * slider.settings.slideMargin;
	      slider.maxThreshold = slider.settings.maxSlides * slider.settings.slideWidth + (slider.settings.maxSlides - 1) * slider.settings.slideMargin;
	      // store the current state of the slider (if currently animating, working is true)
	      slider.working = false;
	      // initialize the controls object
	      slider.controls = {};
	      // initialize an auto interval
	      slider.interval = null;
	      // determine which property to use for transitions
	      slider.animProp = slider.settings.mode === 'vertical' ? 'top' : 'left';
	      // determine if hardware acceleration can be used
	      slider.usingCSS = slider.settings.useCSS && slider.settings.mode !== 'fade' && function () {
	        // create our test div element
	        var div = document.createElement('div'),

	        // css transition properties
	        props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
	        // test for each property
	        for (var i = 0; i < props.length; i++) {
	          if (div.style[props[i]] !== undefined) {
	            slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
	            slider.animProp = '-' + slider.cssPrefix + '-transform';
	            return true;
	          }
	        }
	        return false;
	      }();
	      // if vertical mode always make maxSlides and minSlides equal
	      if (slider.settings.mode === 'vertical') {
	        slider.settings.maxSlides = slider.settings.minSlides;
	      }
	      // save original style data
	      el.data('origStyle', el.attr('style'));
	      el.children(slider.settings.slideSelector).each(function () {
	        $(this).data('origStyle', $(this).attr('style'));
	      });

	      // perform all DOM / CSS modifications
	      setup();
	    };

	    /**
	     * Performs all DOM and CSS modifications
	     */
	    var setup = function setup() {
	      var preloadSelector = slider.children.eq(slider.settings.startSlide); // set the default preload selector (visible)

	      // wrap el in a wrapper
	      el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
	      // store a namespace reference to .bx-viewport
	      slider.viewport = el.parent();

	      // add aria-live if the setting is enabled and ticker mode is disabled
	      if (slider.settings.ariaLive && !slider.settings.ticker) {
	        slider.viewport.attr('aria-live', 'polite');
	      }
	      // add a loading div to display while images are loading
	      slider.loader = $('<div class="bx-loading" />');
	      slider.viewport.prepend(slider.loader);
	      // set el to a massive width, to hold any needed slides
	      // also strip any margin and padding from el
	      el.css({
	        width: slider.settings.mode === 'horizontal' ? slider.children.length * 1000 + 215 + '%' : 'auto',
	        position: 'relative'
	      });
	      // if using CSS, add the easing property
	      if (slider.usingCSS && slider.settings.easing) {
	        el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
	        // if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
	      } else if (!slider.settings.easing) {
	        slider.settings.easing = 'swing';
	      }
	      // make modifications to the viewport (.bx-viewport)
	      slider.viewport.css({
	        width: '100%',
	        overflow: 'hidden',
	        position: 'relative'
	      });
	      slider.viewport.parent().css({
	        maxWidth: getViewportMaxWidth()
	      });
	      // apply css to all slider children
	      slider.children.css({
	        // the float attribute is a reserved word in compressors like YUI compressor and need to be quoted #48
	        'float': slider.settings.mode === 'horizontal' ? 'left' : 'none',
	        listStyle: 'none',
	        position: 'relative'
	      });
	      // apply the calculated width after the float is applied to prevent scrollbar interference
	      slider.children.css('width', getSlideWidth());
	      // if slideMargin is supplied, add the css
	      if (slider.settings.mode === 'horizontal' && slider.settings.slideMargin > 0) {
	        slider.children.css('marginRight', slider.settings.slideMargin);
	      }
	      if (slider.settings.mode === 'vertical' && slider.settings.slideMargin > 0) {
	        slider.children.css('marginBottom', slider.settings.slideMargin);
	      }
	      // if "fade" mode, add positioning and z-index CSS
	      if (slider.settings.mode === 'fade') {
	        slider.children.css({
	          position: 'absolute',
	          zIndex: 0,
	          display: 'none'
	        });
	        // prepare the z-index on the showing element
	        slider.children.eq(slider.settings.startSlide).css({ zIndex: slider.settings.slideZIndex, display: 'block' });
	      }
	      // create an element to contain all slider controls (pager, start / stop, etc)
	      slider.controls.el = $('<div class="bx-controls" />');
	      // if captions are requested, add them
	      if (slider.settings.captions) {
	        appendCaptions();
	      }
	      // check if startSlide is last slide
	      slider.active.last = slider.settings.startSlide === getPagerQty() - 1;
	      // if video is true, set up the fitVids plugin
	      if (slider.settings.video) {
	        el.fitVids();
	      }
	      if (slider.settings.preloadImages === 'all' || slider.settings.ticker) {
	        preloadSelector = slider.children;
	      }
	      // only check for control addition if not in "ticker" mode
	      if (!slider.settings.ticker) {
	        // if controls are requested, add them
	        if (slider.settings.controls) {
	          appendControls();
	        }
	        // if auto is true, and auto controls are requested, add them
	        if (slider.settings.auto && slider.settings.autoControls) {
	          appendControlsAuto();
	        }
	        // if pager is requested, add it
	        if (slider.settings.pager) {
	          appendPager();
	        }
	        // if any control option is requested, add the controls wrapper
	        if (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) {
	          slider.viewport.after(slider.controls.el);
	        }
	        // if ticker mode, do not allow a pager
	      } else {
	        slider.settings.pager = false;
	      }
	      loadElements(preloadSelector, start);
	    };

	    var loadElements = function loadElements(selector, callback) {
	      var total = selector.find('img:not([src=""]), iframe').length,
	          count = 0;
	      if (total === 0) {
	        callback();
	        return;
	      }
	      selector.find('img:not([src=""]), iframe').each(function () {
	        $(this).one('load error', function () {
	          if (++count === total) {
	            callback();
	          }
	        }).each(function () {
	          if (this.complete || this.src == '') {
	            $(this).trigger('load');
	          }
	        });
	      });
	    };

	    /**
	     * Start the slider
	     */
	    var start = function start() {
	      // if infinite loop, prepare additional slides
	      if (slider.settings.infiniteLoop && slider.settings.mode !== 'fade' && !slider.settings.ticker) {
	        var slice = slider.settings.mode === 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides,
	            sliceAppend = slider.children.slice(0, slice).clone(true).addClass('bx-clone'),
	            slicePrepend = slider.children.slice(-slice).clone(true).addClass('bx-clone');
	        if (slider.settings.ariaHidden) {
	          sliceAppend.attr('aria-hidden', true);
	          slicePrepend.attr('aria-hidden', true);
	        }
	        el.append(sliceAppend).prepend(slicePrepend);
	      }
	      // remove the loading DOM element
	      slider.loader.remove();
	      // set the left / top position of "el"
	      setSlidePosition();
	      // if "vertical" mode, always use adaptiveHeight to prevent odd behavior
	      if (slider.settings.mode === 'vertical') {
	        slider.settings.adaptiveHeight = true;
	      }
	      // set the viewport height
	      slider.viewport.height(getViewportHeight());
	      // make sure everything is positioned just right (same as a window resize)
	      el.redrawSlider();
	      // onSliderLoad callback
	      slider.settings.onSliderLoad.call(el, slider.active.index);
	      // slider has been fully initialized
	      slider.initialized = true;
	      // bind the resize call to the window
	      if (slider.settings.responsive) {
	        $(window).bind('resize', resizeWindow);
	      }
	      // if auto is true and has more than 1 page, start the show
	      if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) {
	        initAuto();
	      }
	      // if ticker is true, start the ticker
	      if (slider.settings.ticker) {
	        initTicker();
	      }
	      // if pager is requested, make the appropriate pager link active
	      if (slider.settings.pager) {
	        updatePagerActive(slider.settings.startSlide);
	      }
	      // check for any updates to the controls (like hideControlOnEnd updates)
	      if (slider.settings.controls) {
	        updateDirectionControls();
	      }
	      // if touchEnabled is true, setup the touch events
	      if (slider.settings.touchEnabled && !slider.settings.ticker) {
	        initTouch();
	      }
	      // if keyboardEnabled is true, setup the keyboard events
	      if (slider.settings.keyboardEnabled && !slider.settings.ticker) {
	        $(document).keydown(keyPress);
	      }
	    };

	    /**
	     * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
	     */
	    var getViewportHeight = function getViewportHeight() {
	      var height = 0;
	      // first determine which children (slides) should be used in our height calculation
	      var children = $();
	      // if mode is not "vertical" and adaptiveHeight is false, include all children
	      if (slider.settings.mode !== 'vertical' && !slider.settings.adaptiveHeight) {
	        children = slider.children;
	      } else {
	        // if not carousel, return the single active child
	        if (!slider.carousel) {
	          children = slider.children.eq(slider.active.index);
	          // if carousel, return a slice of children
	        } else {
	          // get the individual slide index
	          var currentIndex = slider.settings.moveSlides === 1 ? slider.active.index : slider.active.index * getMoveBy();
	          // add the current slide to the children
	          children = slider.children.eq(currentIndex);
	          // cycle through the remaining "showing" slides
	          for (i = 1; i <= slider.settings.maxSlides - 1; i++) {
	            // if looped back to the start
	            if (currentIndex + i >= slider.children.length) {
	              children = children.add(slider.children.eq(i - 1));
	            } else {
	              children = children.add(slider.children.eq(currentIndex + i));
	            }
	          }
	        }
	      }
	      // if "vertical" mode, calculate the sum of the heights of the children
	      if (slider.settings.mode === 'vertical') {
	        children.each(function (index) {
	          height += $(this).outerHeight();
	        });
	        // add user-supplied margins
	        if (slider.settings.slideMargin > 0) {
	          height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
	        }
	        // if not "vertical" mode, calculate the max height of the children
	      } else {
	        height = Math.max.apply(Math, children.map(function () {
	          return $(this).outerHeight(false);
	        }).get());
	      }

	      if (slider.viewport.css('box-sizing') === 'border-box') {
	        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) + parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
	      } else if (slider.viewport.css('box-sizing') === 'padding-box') {
	        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
	      }

	      return height;
	    };

	    /**
	     * Returns the calculated width to be used for the outer wrapper / viewport
	     */
	    var getViewportMaxWidth = function getViewportMaxWidth() {
	      var width = '100%';
	      if (slider.settings.slideWidth > 0) {
	        if (slider.settings.mode === 'horizontal') {
	          width = slider.settings.maxSlides * slider.settings.slideWidth + (slider.settings.maxSlides - 1) * slider.settings.slideMargin;
	        } else {
	          width = slider.settings.slideWidth;
	        }
	      }
	      return width;
	    };

	    /**
	     * Returns the calculated width to be applied to each slide
	     */
	    var getSlideWidth = function getSlideWidth() {
	      var newElWidth = slider.settings.slideWidth,
	          // start with any user-supplied slide width
	      wrapWidth = slider.viewport.width(); // get the current viewport width
	      // if slide width was not supplied, or is larger than the viewport use the viewport width
	      if (slider.settings.slideWidth === 0 || slider.settings.slideWidth > wrapWidth && !slider.carousel || slider.settings.mode === 'vertical') {
	        newElWidth = wrapWidth;
	        // if carousel, use the thresholds to determine the width
	      } else if (slider.settings.maxSlides > 1 && slider.settings.mode === 'horizontal') {
	        if (wrapWidth > slider.maxThreshold) {
	          return newElWidth;
	        } else if (wrapWidth < slider.minThreshold) {
	          newElWidth = (wrapWidth - slider.settings.slideMargin * (slider.settings.minSlides - 1)) / slider.settings.minSlides;
	        } else if (slider.settings.shrinkItems) {
	          newElWidth = Math.floor((wrapWidth + slider.settings.slideMargin) / Math.ceil((wrapWidth + slider.settings.slideMargin) / (newElWidth + slider.settings.slideMargin)) - slider.settings.slideMargin);
	        }
	      }
	      return newElWidth;
	    };

	    /**
	     * Returns the number of slides currently visible in the viewport (includes partially visible slides)
	     */
	    var getNumberSlidesShowing = function getNumberSlidesShowing() {
	      var slidesShowing = 1,
	          childWidth = null;
	      if (slider.settings.mode === 'horizontal' && slider.settings.slideWidth > 0) {
	        // if viewport is smaller than minThreshold, return minSlides
	        if (slider.viewport.width() < slider.minThreshold) {
	          slidesShowing = slider.settings.minSlides;
	          // if viewport is larger than maxThreshold, return maxSlides
	        } else if (slider.viewport.width() > slider.maxThreshold) {
	          slidesShowing = slider.settings.maxSlides;
	          // if viewport is between min / max thresholds, divide viewport width by first child width
	        } else {
	          childWidth = slider.children.first().width() + slider.settings.slideMargin;
	          slidesShowing = Math.floor((slider.viewport.width() + slider.settings.slideMargin) / childWidth) || 1;
	        }
	        // if "vertical" mode, slides showing will always be minSlides
	      } else if (slider.settings.mode === 'vertical') {
	        slidesShowing = slider.settings.minSlides;
	      }
	      return slidesShowing;
	    };

	    /**
	     * Returns the number of pages (one full viewport of slides is one "page")
	     */
	    var getPagerQty = function getPagerQty() {
	      var pagerQty = 0,
	          breakPoint = 0,
	          counter = 0;
	      // if moveSlides is specified by the user
	      if (slider.settings.moveSlides > 0) {
	        if (slider.settings.infiniteLoop) {
	          pagerQty = Math.ceil(slider.children.length / getMoveBy());
	        } else {
	          // when breakpoint goes above children length, counter is the number of pages
	          while (breakPoint < slider.children.length) {
	            ++pagerQty;
	            breakPoint = counter + getNumberSlidesShowing();
	            counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
	          }
	          return counter;
	        }
	        // if moveSlides is 0 (auto) divide children length by sides showing, then round up
	      } else {
	        pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
	      }
	      return pagerQty;
	    };

	    /**
	     * Returns the number of individual slides by which to shift the slider
	     */
	    var getMoveBy = function getMoveBy() {
	      // if moveSlides was set by the user and moveSlides is less than number of slides showing
	      if (slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()) {
	        return slider.settings.moveSlides;
	      }
	      // if moveSlides is 0 (auto)
	      return getNumberSlidesShowing();
	    };

	    /**
	     * Sets the slider's (el) left or top position
	     */
	    var setSlidePosition = function setSlidePosition() {
	      var position, lastChild, lastShowingIndex;
	      // if last slide, not infinite loop, and number of children is larger than specified maxSlides
	      if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
	        if (slider.settings.mode === 'horizontal') {
	          // get the last child's position
	          lastChild = slider.children.last();
	          position = lastChild.position();
	          // set the left position
	          setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
	        } else if (slider.settings.mode === 'vertical') {
	          // get the last showing index's position
	          lastShowingIndex = slider.children.length - slider.settings.minSlides;
	          position = slider.children.eq(lastShowingIndex).position();
	          // set the top position
	          setPositionProperty(-position.top, 'reset', 0);
	        }
	        // if not last slide
	      } else {
	        // get the position of the first showing slide
	        position = slider.children.eq(slider.active.index * getMoveBy()).position();
	        // check for last slide
	        if (slider.active.index === getPagerQty() - 1) {
	          slider.active.last = true;
	        }
	        // set the respective position
	        if (position !== undefined) {
	          if (slider.settings.mode === 'horizontal') {
	            setPositionProperty(-position.left, 'reset', 0);
	          } else if (slider.settings.mode === 'vertical') {
	            setPositionProperty(-position.top, 'reset', 0);
	          }
	        }
	      }
	    };

	    /**
	     * Sets the el's animating property position (which in turn will sometimes animate el).
	     * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
	     *
	     * @param value (int)
	     *  - the animating property's value
	     *
	     * @param type (string) 'slide', 'reset', 'ticker'
	     *  - the type of instance for which the function is being
	     *
	     * @param duration (int)
	     *  - the amount of time (in ms) the transition should occupy
	     *
	     * @param params (array) optional
	     *  - an optional parameter containing any variables that need to be passed in
	     */
	    var setPositionProperty = function setPositionProperty(value, type, duration, params) {
	      var animateObj, propValue;
	      // use CSS transform
	      if (slider.usingCSS) {
	        // determine the translate3d value
	        propValue = slider.settings.mode === 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
	        // add the CSS transition-duration
	        el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
	        if (type === 'slide') {
	          // set the property value
	          el.css(slider.animProp, propValue);
	          if (duration !== 0) {
	            // bind a callback method - executes when CSS transition completes
	            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function (e) {
	              //make sure it's the correct one
	              if (!$(e.target).is(el)) {
	                return;
	              }
	              // unbind the callback
	              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
	              updateAfterSlideTransition();
	            });
	          } else {
	            //duration = 0
	            updateAfterSlideTransition();
	          }
	        } else if (type === 'reset') {
	          el.css(slider.animProp, propValue);
	        } else if (type === 'ticker') {
	          // make the transition use 'linear'
	          el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
	          el.css(slider.animProp, propValue);
	          if (duration !== 0) {
	            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function (e) {
	              //make sure it's the correct one
	              if (!$(e.target).is(el)) {
	                return;
	              }
	              // unbind the callback
	              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
	              // reset the position
	              setPositionProperty(params.resetValue, 'reset', 0);
	              // start the loop again
	              tickerLoop();
	            });
	          } else {
	            //duration = 0
	            setPositionProperty(params.resetValue, 'reset', 0);
	            tickerLoop();
	          }
	        }
	        // use JS animate
	      } else {
	        animateObj = {};
	        animateObj[slider.animProp] = value;
	        if (type === 'slide') {
	          el.animate(animateObj, duration, slider.settings.easing, function () {
	            updateAfterSlideTransition();
	          });
	        } else if (type === 'reset') {
	          el.css(slider.animProp, value);
	        } else if (type === 'ticker') {
	          el.animate(animateObj, duration, 'linear', function () {
	            setPositionProperty(params.resetValue, 'reset', 0);
	            // run the recursive loop after animation
	            tickerLoop();
	          });
	        }
	      }
	    };

	    /**
	     * Populates the pager with proper amount of pages
	     */
	    var populatePager = function populatePager() {
	      var pagerHtml = '',
	          linkContent = '',
	          pagerQty = getPagerQty();
	      // loop through each pager item
	      for (var i = 0; i < pagerQty; i++) {
	        linkContent = '';
	        // if a buildPager function is supplied, use it to get pager link value, else use index + 1
	        if (slider.settings.buildPager && $.isFunction(slider.settings.buildPager) || slider.settings.pagerCustom) {
	          linkContent = slider.settings.buildPager(i);
	          slider.pagerEl.addClass('bx-custom-pager');
	        } else {
	          linkContent = i + 1;
	          slider.pagerEl.addClass('bx-default-pager');
	        }
	        // var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
	        // add the markup to the string
	        pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
	      }
	      // populate the pager element with pager links
	      slider.pagerEl.html(pagerHtml);
	    };

	    /**
	     * Appends the pager to the controls element
	     */
	    var appendPager = function appendPager() {
	      if (!slider.settings.pagerCustom) {
	        // create the pager DOM element
	        slider.pagerEl = $('<div class="bx-pager" />');
	        // if a pager selector was supplied, populate it with the pager
	        if (slider.settings.pagerSelector) {
	          $(slider.settings.pagerSelector).html(slider.pagerEl);
	          // if no pager selector was supplied, add it after the wrapper
	        } else {
	          slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
	        }
	        // populate the pager
	        populatePager();
	      } else {
	        slider.pagerEl = $(slider.settings.pagerCustom);
	      }
	      // assign the pager click binding
	      slider.pagerEl.on('click touchend', 'a', clickPagerBind);
	    };

	    /**
	     * Appends prev / next controls to the controls element
	     */
	    var appendControls = function appendControls() {
	      slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
	      slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
	      // bind click actions to the controls
	      slider.controls.next.bind('click touchend', clickNextBind);
	      slider.controls.prev.bind('click touchend', clickPrevBind);
	      // if nextSelector was supplied, populate it
	      if (slider.settings.nextSelector) {
	        $(slider.settings.nextSelector).append(slider.controls.next);
	      }
	      // if prevSelector was supplied, populate it
	      if (slider.settings.prevSelector) {
	        $(slider.settings.prevSelector).append(slider.controls.prev);
	      }
	      // if no custom selectors were supplied
	      if (!slider.settings.nextSelector && !slider.settings.prevSelector) {
	        // add the controls to the DOM
	        slider.controls.directionEl = $('<div class="bx-controls-direction" />');
	        // add the control elements to the directionEl
	        slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
	        // slider.viewport.append(slider.controls.directionEl);
	        slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
	      }
	    };

	    /**
	     * Appends start / stop auto controls to the controls element
	     */
	    var appendControlsAuto = function appendControlsAuto() {
	      slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
	      slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
	      // add the controls to the DOM
	      slider.controls.autoEl = $('<div class="bx-controls-auto" />');
	      // bind click actions to the controls
	      slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
	      slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
	      // if autoControlsCombine, insert only the "start" control
	      if (slider.settings.autoControlsCombine) {
	        slider.controls.autoEl.append(slider.controls.start);
	        // if autoControlsCombine is false, insert both controls
	      } else {
	        slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
	      }
	      // if auto controls selector was supplied, populate it with the controls
	      if (slider.settings.autoControlsSelector) {
	        $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
	        // if auto controls selector was not supplied, add it after the wrapper
	      } else {
	        slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
	      }
	      // update the auto controls
	      updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
	    };

	    /**
	     * Appends image captions to the DOM
	     */
	    var appendCaptions = function appendCaptions() {
	      // cycle through each child
	      slider.children.each(function (index) {
	        // get the image title attribute
	        var title = $(this).find('img:first').attr('title');
	        // append the caption
	        if (title !== undefined && ('' + title).length) {
	          $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
	        }
	      });
	    };

	    /**
	     * Click next binding
	     *
	     * @param e (event)
	     *  - DOM event object
	     */
	    var clickNextBind = function clickNextBind(e) {
	      e.preventDefault();
	      if (slider.controls.el.hasClass('disabled')) {
	        return;
	      }
	      // if auto show is running, stop it
	      if (slider.settings.auto && slider.settings.stopAutoOnClick) {
	        el.stopAuto();
	      }
	      el.goToNextSlide();
	    };

	    /**
	     * Click prev binding
	     *
	     * @param e (event)
	     *  - DOM event object
	     */
	    var clickPrevBind = function clickPrevBind(e) {
	      e.preventDefault();
	      if (slider.controls.el.hasClass('disabled')) {
	        return;
	      }
	      // if auto show is running, stop it
	      if (slider.settings.auto && slider.settings.stopAutoOnClick) {
	        el.stopAuto();
	      }
	      el.goToPrevSlide();
	    };

	    /**
	     * Click start binding
	     *
	     * @param e (event)
	     *  - DOM event object
	     */
	    var clickStartBind = function clickStartBind(e) {
	      el.startAuto();
	      e.preventDefault();
	    };

	    /**
	     * Click stop binding
	     *
	     * @param e (event)
	     *  - DOM event object
	     */
	    var clickStopBind = function clickStopBind(e) {
	      el.stopAuto();
	      e.preventDefault();
	    };

	    /**
	     * Click pager binding
	     *
	     * @param e (event)
	     *  - DOM event object
	     */
	    var clickPagerBind = function clickPagerBind(e) {
	      var pagerLink, pagerIndex;
	      e.preventDefault();
	      if (slider.controls.el.hasClass('disabled')) {
	        return;
	      }
	      // if auto show is running, stop it
	      if (slider.settings.auto && slider.settings.stopAutoOnClick) {
	        el.stopAuto();
	      }
	      pagerLink = $(e.currentTarget);
	      if (pagerLink.attr('data-slide-index') !== undefined) {
	        pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
	        // if clicked pager link is not active, continue with the goToSlide call
	        if (pagerIndex !== slider.active.index) {
	          el.goToSlide(pagerIndex);
	        }
	      }
	    };

	    /**
	     * Updates the pager links with an active class
	     *
	     * @param slideIndex (int)
	     *  - index of slide to make active
	     */
	    var updatePagerActive = function updatePagerActive(slideIndex) {
	      // if "short" pager type
	      var len = slider.children.length; // nb of children
	      if (slider.settings.pagerType === 'short') {
	        if (slider.settings.maxSlides > 1) {
	          len = Math.ceil(slider.children.length / slider.settings.maxSlides);
	        }
	        slider.pagerEl.html(slideIndex + 1 + slider.settings.pagerShortSeparator + len);
	        return;
	      }
	      // remove all pager active classes
	      slider.pagerEl.find('a').removeClass('active');
	      // apply the active class for all pagers
	      slider.pagerEl.each(function (i, el) {
	        $(el).find('a').eq(slideIndex).addClass('active');
	      });
	    };

	    /**
	     * Performs needed actions after a slide transition
	     */
	    var updateAfterSlideTransition = function updateAfterSlideTransition() {
	      // if infinite loop is true
	      if (slider.settings.infiniteLoop) {
	        var position = '';
	        // first slide
	        if (slider.active.index === 0) {
	          // set the new position
	          position = slider.children.eq(0).position();
	          // carousel, last slide
	        } else if (slider.active.index === getPagerQty() - 1 && slider.carousel) {
	          position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
	          // last slide
	        } else if (slider.active.index === slider.children.length - 1) {
	          position = slider.children.eq(slider.children.length - 1).position();
	        }
	        if (position) {
	          if (slider.settings.mode === 'horizontal') {
	            setPositionProperty(-position.left, 'reset', 0);
	          } else if (slider.settings.mode === 'vertical') {
	            setPositionProperty(-position.top, 'reset', 0);
	          }
	        }
	      }
	      // declare that the transition is complete
	      slider.working = false;
	      // onSlideAfter callback
	      slider.settings.onSlideAfter.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
	    };

	    /**
	     * Updates the auto controls state (either active, or combined switch)
	     *
	     * @param state (string) "start", "stop"
	     *  - the new state of the auto show
	     */
	    var updateAutoControls = function updateAutoControls(state) {
	      // if autoControlsCombine is true, replace the current control with the new state
	      if (slider.settings.autoControlsCombine) {
	        slider.controls.autoEl.html(slider.controls[state]);
	        // if autoControlsCombine is false, apply the "active" class to the appropriate control
	      } else {
	        slider.controls.autoEl.find('a').removeClass('active');
	        slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
	      }
	    };

	    /**
	     * Updates the direction controls (checks if either should be hidden)
	     */
	    var updateDirectionControls = function updateDirectionControls() {
	      if (getPagerQty() === 1) {
	        slider.controls.prev.addClass('disabled');
	        slider.controls.next.addClass('disabled');
	      } else if (!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd) {
	        // if first slide
	        if (slider.active.index === 0) {
	          slider.controls.prev.addClass('disabled');
	          slider.controls.next.removeClass('disabled');
	          // if last slide
	        } else if (slider.active.index === getPagerQty() - 1) {
	          slider.controls.next.addClass('disabled');
	          slider.controls.prev.removeClass('disabled');
	          // if any slide in the middle
	        } else {
	          slider.controls.prev.removeClass('disabled');
	          slider.controls.next.removeClass('disabled');
	        }
	      }
	    };
	    /* auto start and stop functions */
	    var windowFocusHandler = function windowFocusHandler() {
	      el.startAuto();
	    };
	    var windowBlurHandler = function windowBlurHandler() {
	      el.stopAuto();
	    };
	    /**
	     * Initializes the auto process
	     */
	    var initAuto = function initAuto() {
	      // if autoDelay was supplied, launch the auto show using a setTimeout() call
	      if (slider.settings.autoDelay > 0) {
	        var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
	        // if autoDelay was not supplied, start the auto show normally
	      } else {
	        el.startAuto();

	        //add focus and blur events to ensure its running if timeout gets paused
	        $(window).focus(windowFocusHandler).blur(windowBlurHandler);
	      }
	      // if autoHover is requested
	      if (slider.settings.autoHover) {
	        // on el hover
	        el.hover(function () {
	          // if the auto show is currently playing (has an active interval)
	          if (slider.interval) {
	            // stop the auto show and pass true argument which will prevent control update
	            el.stopAuto(true);
	            // create a new autoPaused value which will be used by the relative "mouseout" event
	            slider.autoPaused = true;
	          }
	        }, function () {
	          // if the autoPaused value was created be the prior "mouseover" event
	          if (slider.autoPaused) {
	            // start the auto show and pass true argument which will prevent control update
	            el.startAuto(true);
	            // reset the autoPaused value
	            slider.autoPaused = null;
	          }
	        });
	      }
	    };

	    /**
	     * Initializes the ticker process
	     */
	    var initTicker = function initTicker() {
	      var startPosition = 0,
	          position,
	          transform,
	          value,
	          idx,
	          ratio,
	          property,
	          newSpeed,
	          totalDimens;
	      // if autoDirection is "next", append a clone of the entire slider
	      if (slider.settings.autoDirection === 'next') {
	        el.append(slider.children.clone().addClass('bx-clone'));
	        // if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
	      } else {
	        el.prepend(slider.children.clone().addClass('bx-clone'));
	        position = slider.children.first().position();
	        startPosition = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
	      }
	      setPositionProperty(startPosition, 'reset', 0);
	      // do not allow controls in ticker mode
	      slider.settings.pager = false;
	      slider.settings.controls = false;
	      slider.settings.autoControls = false;
	      // if autoHover is requested
	      if (slider.settings.tickerHover) {
	        if (slider.usingCSS) {
	          idx = slider.settings.mode === 'horizontal' ? 4 : 5;
	          slider.viewport.hover(function () {
	            transform = el.css('-' + slider.cssPrefix + '-transform');
	            value = parseFloat(transform.split(',')[idx]);
	            setPositionProperty(value, 'reset', 0);
	          }, function () {
	            totalDimens = 0;
	            slider.children.each(function (index) {
	              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
	            });
	            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
	            ratio = slider.settings.speed / totalDimens;
	            // determine which property to use
	            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
	            // calculate the new speed
	            newSpeed = ratio * (totalDimens - Math.abs(parseInt(value)));
	            tickerLoop(newSpeed);
	          });
	        } else {
	          // on el hover
	          slider.viewport.hover(function () {
	            el.stop();
	          }, function () {
	            // calculate the total width of children (used to calculate the speed ratio)
	            totalDimens = 0;
	            slider.children.each(function (index) {
	              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
	            });
	            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
	            ratio = slider.settings.speed / totalDimens;
	            // determine which property to use
	            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
	            // calculate the new speed
	            newSpeed = ratio * (totalDimens - Math.abs(parseInt(el.css(property))));
	            tickerLoop(newSpeed);
	          });
	        }
	      }
	      // start the ticker loop
	      tickerLoop();
	    };

	    /**
	     * Runs a continuous loop, news ticker-style
	     */
	    var tickerLoop = function tickerLoop(resumeSpeed) {
	      var speed = resumeSpeed ? resumeSpeed : slider.settings.speed,
	          position = { left: 0, top: 0 },
	          reset = { left: 0, top: 0 },
	          animateProperty,
	          resetValue,
	          params;

	      // if "next" animate left position to last child, then reset left to 0
	      if (slider.settings.autoDirection === 'next') {
	        position = el.find('.bx-clone').first().position();
	        // if "prev" animate left position to 0, then reset left to first non-clone child
	      } else {
	        reset = slider.children.first().position();
	      }
	      animateProperty = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
	      resetValue = slider.settings.mode === 'horizontal' ? -reset.left : -reset.top;
	      params = { resetValue: resetValue };
	      setPositionProperty(animateProperty, 'ticker', speed, params);
	    };

	    /**
	     * Check if el is on screen
	     */
	    var isOnScreen = function isOnScreen(el) {
	      var win = $(window),
	          viewport = {
	        top: win.scrollTop(),
	        left: win.scrollLeft()
	      },
	          bounds = el.offset();

	      viewport.right = viewport.left + win.width();
	      viewport.bottom = viewport.top + win.height();
	      bounds.right = bounds.left + el.outerWidth();
	      bounds.bottom = bounds.top + el.outerHeight();

	      return !(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom);
	    };

	    /**
	     * Initializes keyboard events
	     */
	    var keyPress = function keyPress(e) {
	      var activeElementTag = document.activeElement.tagName.toLowerCase(),
	          tagFilters = 'input|textarea',
	          p = new RegExp(activeElementTag, ['i']),
	          result = p.exec(tagFilters);

	      if (result == null && isOnScreen(el)) {
	        if (e.keyCode === 39) {
	          clickNextBind(e);
	          return false;
	        } else if (e.keyCode === 37) {
	          clickPrevBind(e);
	          return false;
	        }
	      }
	    };

	    /**
	     * Initializes touch events
	     */
	    var initTouch = function initTouch() {
	      // initialize object to contain all touch values
	      slider.touch = {
	        start: { x: 0, y: 0 },
	        end: { x: 0, y: 0 }
	      };
	      slider.viewport.bind('touchstart MSPointerDown pointerdown', onTouchStart);

	      //for browsers that have implemented pointer events and fire a click after
	      //every pointerup regardless of whether pointerup is on same screen location as pointerdown or not
	      slider.viewport.on('click', '.bxslider a', function (e) {
	        if (slider.viewport.hasClass('click-disabled')) {
	          e.preventDefault();
	          slider.viewport.removeClass('click-disabled');
	        }
	      });
	    };

	    /**
	     * Event handler for "touchstart"
	     *
	     * @param e (event)
	     *  - DOM event object
	     */
	    var onTouchStart = function onTouchStart(e) {
	      //disable slider controls while user is interacting with slides to avoid slider freeze that happens on touch devices when a slide swipe happens immediately after interacting with slider controls
	      slider.controls.el.addClass('disabled');

	      if (slider.working) {
	        e.preventDefault();
	        slider.controls.el.removeClass('disabled');
	      } else {
	        // record the original position when touch starts
	        slider.touch.originalPos = el.position();
	        var orig = e.originalEvent,
	            touchPoints = typeof orig.changedTouches !== 'undefined' ? orig.changedTouches : [orig];
	        // tim hjellum added the line below
	        var chromePointerEvents = typeof PointerEvent === 'function';if (chromePointerEvents) {
	          if (orig.pointerId === undefined) {
	            return;
	          }
	        }
	        // record the starting touch x, y coordinates
	        slider.touch.start.x = touchPoints[0].pageX;
	        slider.touch.start.y = touchPoints[0].pageY;

	        if (slider.viewport.get(0).setPointerCapture) {
	          slider.pointerId = orig.pointerId;
	          slider.viewport.get(0).setPointerCapture(slider.pointerId);
	        }
	        // bind a "touchmove" event to the viewport
	        slider.viewport.bind('touchmove MSPointerMove pointermove', onTouchMove);
	        // bind a "touchend" event to the viewport
	        slider.viewport.bind('touchend MSPointerUp pointerup', onTouchEnd);
	        slider.viewport.bind('MSPointerCancel pointercancel', onPointerCancel);
	      }
	    };

	    /**
	     * Cancel Pointer for Windows Phone
	     *
	     * @param e (event)
	     *  - DOM event object
	     */
	    var onPointerCancel = function onPointerCancel(e) {
	      /* onPointerCancel handler is needed to deal with situations when a touchend
	      doesn't fire after a touchstart (this happens on windows phones only) */
	      setPositionProperty(slider.touch.originalPos.left, 'reset', 0);

	      //remove handlers
	      slider.controls.el.removeClass('disabled');
	      slider.viewport.unbind('MSPointerCancel pointercancel', onPointerCancel);
	      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
	      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
	      if (slider.viewport.get(0).releasePointerCapture) {
	        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
	      }
	    };

	    /**
	     * Event handler for "touchmove"
	     *
	     * @param e (event)
	     *  - DOM event object
	     */
	    var onTouchMove = function onTouchMove(e) {
	      var orig = e.originalEvent,
	          touchPoints = typeof orig.changedTouches !== 'undefined' ? orig.changedTouches : [orig],

	      // if scrolling on y axis, do not prevent default
	      xMovement = Math.abs(touchPoints[0].pageX - slider.touch.start.x),
	          yMovement = Math.abs(touchPoints[0].pageY - slider.touch.start.y),
	          value = 0,
	          change = 0;

	      // x axis swipe
	      if (xMovement * 3 > yMovement && slider.settings.preventDefaultSwipeX) {
	        e.preventDefault();
	        // y axis swipe
	      } else if (yMovement * 3 > xMovement && slider.settings.preventDefaultSwipeY) {
	        e.preventDefault();
	      }
	      if (slider.settings.mode !== 'fade' && slider.settings.oneToOneTouch) {
	        // if horizontal, drag along x axis
	        if (slider.settings.mode === 'horizontal') {
	          change = touchPoints[0].pageX - slider.touch.start.x;
	          value = slider.touch.originalPos.left + change;
	          // if vertical, drag along y axis
	        } else {
	          change = touchPoints[0].pageY - slider.touch.start.y;
	          value = slider.touch.originalPos.top + change;
	        }
	        setPositionProperty(value, 'reset', 0);
	      }
	    };

	    /**
	     * Event handler for "touchend"
	     *
	     * @param e (event)
	     *  - DOM event object
	     */
	    var onTouchEnd = function onTouchEnd(e) {
	      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
	      //enable slider controls as soon as user stops interacing with slides
	      slider.controls.el.removeClass('disabled');
	      var orig = e.originalEvent,
	          touchPoints = typeof orig.changedTouches !== 'undefined' ? orig.changedTouches : [orig],
	          value = 0,
	          distance = 0;
	      // record end x, y positions
	      slider.touch.end.x = touchPoints[0].pageX;
	      slider.touch.end.y = touchPoints[0].pageY;
	      // if fade mode, check if absolute x distance clears the threshold
	      if (slider.settings.mode === 'fade') {
	        distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
	        if (distance >= slider.settings.swipeThreshold) {
	          if (slider.touch.start.x > slider.touch.end.x) {
	            el.goToNextSlide();
	          } else {
	            el.goToPrevSlide();
	          }
	          el.stopAuto();
	        }
	        // not fade mode
	      } else {
	        // calculate distance and el's animate property
	        if (slider.settings.mode === 'horizontal') {
	          distance = slider.touch.end.x - slider.touch.start.x;
	          value = slider.touch.originalPos.left;
	        } else {
	          distance = slider.touch.end.y - slider.touch.start.y;
	          value = slider.touch.originalPos.top;
	        }
	        // if not infinite loop and first / last slide, do not attempt a slide transition
	        if (!slider.settings.infiniteLoop && (slider.active.index === 0 && distance > 0 || slider.active.last && distance < 0)) {
	          setPositionProperty(value, 'reset', 200);
	        } else {
	          // check if distance clears threshold
	          if (Math.abs(distance) >= slider.settings.swipeThreshold) {
	            if (distance < 0) {
	              el.goToNextSlide();
	            } else {
	              el.goToPrevSlide();
	            }
	            el.stopAuto();
	          } else {
	            // el.animate(property, 200);
	            setPositionProperty(value, 'reset', 200);
	          }
	        }
	      }
	      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
	      if (slider.viewport.get(0).releasePointerCapture) {
	        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
	      }
	    };

	    /**
	     * Window resize event callback
	     */
	    var resizeWindow = function resizeWindow(e) {
	      // don't do anything if slider isn't initialized.
	      if (!slider.initialized) {
	        return;
	      }
	      // Delay if slider working.
	      if (slider.working) {
	        window.setTimeout(resizeWindow, 10);
	      } else {
	        // get the new window dimens (again, thank you IE)
	        var windowWidthNew = $(window).width(),
	            windowHeightNew = $(window).height();
	        // make sure that it is a true window resize
	        // *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
	        // are resized. Can you just die already?*
	        if (windowWidth !== windowWidthNew || windowHeight !== windowHeightNew) {
	          // set the new window dimens
	          windowWidth = windowWidthNew;
	          windowHeight = windowHeightNew;
	          // update all dynamic elements
	          el.redrawSlider();
	          // Call user resize handler
	          slider.settings.onSliderResize.call(el, slider.active.index);
	        }
	      }
	    };

	    /**
	     * Adds an aria-hidden=true attribute to each element
	     *
	     * @param startVisibleIndex (int)
	     *  - the first visible element's index
	     */
	    var applyAriaHiddenAttributes = function applyAriaHiddenAttributes(startVisibleIndex) {
	      var numberOfSlidesShowing = getNumberSlidesShowing();
	      // only apply attributes if the setting is enabled and not in ticker mode
	      if (slider.settings.ariaHidden && !slider.settings.ticker) {
	        // add aria-hidden=true to all elements
	        slider.children.attr('aria-hidden', 'true');
	        // get the visible elements and change to aria-hidden=false
	        slider.children.slice(startVisibleIndex, startVisibleIndex + numberOfSlidesShowing).attr('aria-hidden', 'false');
	      }
	    };

	    /**
	     * Returns index according to present page range
	     *
	     * @param slideOndex (int)
	     *  - the desired slide index
	     */
	    var setSlideIndex = function setSlideIndex(slideIndex) {
	      if (slideIndex < 0) {
	        if (slider.settings.infiniteLoop) {
	          return getPagerQty() - 1;
	        } else {
	          //we don't go to undefined slides
	          return slider.active.index;
	        }
	        // if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
	      } else if (slideIndex >= getPagerQty()) {
	        if (slider.settings.infiniteLoop) {
	          return 0;
	        } else {
	          //we don't move to undefined pages
	          return slider.active.index;
	        }
	        // set active index to requested slide
	      } else {
	        return slideIndex;
	      }
	    };

	    /**
	     * ===================================================================================
	     * = PUBLIC FUNCTIONS
	     * ===================================================================================
	     */

	    /**
	     * Performs slide transition to the specified slide
	     *
	     * @param slideIndex (int)
	     *  - the destination slide's index (zero-based)
	     *
	     * @param direction (string)
	     *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
	     */
	    el.goToSlide = function (slideIndex, direction) {
	      // onSlideBefore, onSlideNext, onSlidePrev callbacks
	      // Allow transition canceling based on returned value
	      var performTransition = true,
	          moveBy = 0,
	          position = { left: 0, top: 0 },
	          lastChild = null,
	          lastShowingIndex,
	          eq,
	          value,
	          requestEl;
	      // store the old index
	      slider.oldIndex = slider.active.index;
	      //set new index
	      slider.active.index = setSlideIndex(slideIndex);

	      // if plugin is currently in motion, ignore request
	      if (slider.working || slider.active.index === slider.oldIndex) {
	        return;
	      }
	      // declare that plugin is in motion
	      slider.working = true;

	      performTransition = slider.settings.onSlideBefore.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);

	      // If transitions canceled, reset and return
	      if (typeof performTransition !== 'undefined' && !performTransition) {
	        slider.active.index = slider.oldIndex; // restore old index
	        slider.working = false; // is not in motion
	        return;
	      }

	      if (direction === 'next') {
	        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
	        if (!slider.settings.onSlideNext.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
	          performTransition = false;
	        }
	      } else if (direction === 'prev') {
	        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
	        if (!slider.settings.onSlidePrev.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
	          performTransition = false;
	        }
	      }

	      // check if last slide
	      slider.active.last = slider.active.index >= getPagerQty() - 1;
	      // update the pager with active class
	      if (slider.settings.pager || slider.settings.pagerCustom) {
	        updatePagerActive(slider.active.index);
	      }
	      // // check for direction control update
	      if (slider.settings.controls) {
	        updateDirectionControls();
	      }
	      // if slider is set to mode: "fade"
	      if (slider.settings.mode === 'fade') {
	        // if adaptiveHeight is true and next height is different from current height, animate to the new height
	        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
	          slider.viewport.animate({ height: getViewportHeight() }, slider.settings.adaptiveHeightSpeed);
	        }
	        // fade out the visible child and reset its z-index value
	        slider.children.filter(':visible').fadeOut(slider.settings.speed).css({ zIndex: 0 });
	        // fade in the newly requested slide
	        slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex + 1).fadeIn(slider.settings.speed, function () {
	          $(this).css('zIndex', slider.settings.slideZIndex);
	          updateAfterSlideTransition();
	        });
	        // slider mode is not "fade"
	      } else {
	        // if adaptiveHeight is true and next height is different from current height, animate to the new height
	        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
	          slider.viewport.animate({ height: getViewportHeight() }, slider.settings.adaptiveHeightSpeed);
	        }
	        // if carousel and not infinite loop
	        if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last) {
	          if (slider.settings.mode === 'horizontal') {
	            // get the last child position
	            lastChild = slider.children.eq(slider.children.length - 1);
	            position = lastChild.position();
	            // calculate the position of the last slide
	            moveBy = slider.viewport.width() - lastChild.outerWidth();
	          } else {
	            // get last showing index position
	            lastShowingIndex = slider.children.length - slider.settings.minSlides;
	            position = slider.children.eq(lastShowingIndex).position();
	          }
	          // horizontal carousel, going previous while on first slide (infiniteLoop mode)
	        } else if (slider.carousel && slider.active.last && direction === 'prev') {
	          // get the last child position
	          eq = slider.settings.moveSlides === 1 ? slider.settings.maxSlides - getMoveBy() : (getPagerQty() - 1) * getMoveBy() - (slider.children.length - slider.settings.maxSlides);
	          lastChild = el.children('.bx-clone').eq(eq);
	          position = lastChild.position();
	          // if infinite loop and "Next" is clicked on the last slide
	        } else if (direction === 'next' && slider.active.index === 0) {
	          // get the last clone position
	          position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
	          slider.active.last = false;
	          // normal non-zero requests
	        } else if (slideIndex >= 0) {
	          //parseInt is applied to allow floats for slides/page
	          requestEl = slideIndex * parseInt(getMoveBy());
	          position = slider.children.eq(requestEl).position();
	        }

	        /* If the position doesn't exist
	         * (e.g. if you destroy the slider on a next click),
	         * it doesn't throw an error.
	         */
	        if (typeof position !== 'undefined') {
	          value = slider.settings.mode === 'horizontal' ? -(position.left - moveBy) : -position.top;
	          // plugin values to be animated
	          setPositionProperty(value, 'slide', slider.settings.speed);
	        }
	        slider.working = false;
	      }
	      if (slider.settings.ariaHidden) {
	        applyAriaHiddenAttributes(slider.active.index * getMoveBy());
	      }
	    };

	    /**
	     * Transitions to the next slide in the show
	     */
	    el.goToNextSlide = function () {
	      // if infiniteLoop is false and last page is showing, disregard call
	      if (!slider.settings.infiniteLoop && slider.active.last) {
	        return;
	      }
	      if (slider.working == true) {
	        return;
	      }
	      var pagerIndex = parseInt(slider.active.index) + 1;
	      el.goToSlide(pagerIndex, 'next');
	    };

	    /**
	     * Transitions to the prev slide in the show
	     */
	    el.goToPrevSlide = function () {
	      // if infiniteLoop is false and last page is showing, disregard call
	      if (!slider.settings.infiniteLoop && slider.active.index === 0) {
	        return;
	      }
	      if (slider.working == true) {
	        return;
	      }
	      var pagerIndex = parseInt(slider.active.index) - 1;
	      el.goToSlide(pagerIndex, 'prev');
	    };

	    /**
	     * Starts the auto show
	     *
	     * @param preventControlUpdate (boolean)
	     *  - if true, auto controls state will not be updated
	     */
	    el.startAuto = function (preventControlUpdate) {
	      // if an interval already exists, disregard call
	      if (slider.interval) {
	        return;
	      }
	      // create an interval
	      slider.interval = setInterval(function () {
	        if (slider.settings.autoDirection === 'next') {
	          el.goToNextSlide();
	        } else {
	          el.goToPrevSlide();
	        }
	      }, slider.settings.pause);
	      //allback for when the auto rotate status changes
	      slider.settings.onAutoChange.call(el, true);
	      // if auto controls are displayed and preventControlUpdate is not true
	      if (slider.settings.autoControls && preventControlUpdate !== true) {
	        updateAutoControls('stop');
	      }
	    };

	    /**
	     * Stops the auto show
	     *
	     * @param preventControlUpdate (boolean)
	     *  - if true, auto controls state will not be updated
	     */
	    el.stopAuto = function (preventControlUpdate) {
	      // if no interval exists, disregard call
	      if (!slider.interval) {
	        return;
	      }
	      // clear the interval
	      clearInterval(slider.interval);
	      slider.interval = null;
	      //allback for when the auto rotate status changes
	      slider.settings.onAutoChange.call(el, false);
	      // if auto controls are displayed and preventControlUpdate is not true
	      if (slider.settings.autoControls && preventControlUpdate !== true) {
	        updateAutoControls('start');
	      }
	    };

	    /**
	     * Returns current slide index (zero-based)
	     */
	    el.getCurrentSlide = function () {
	      return slider.active.index;
	    };

	    /**
	     * Returns current slide element
	     */
	    el.getCurrentSlideElement = function () {
	      return slider.children.eq(slider.active.index);
	    };

	    /**
	     * Returns a slide element
	     * @param index (int)
	     *  - The index (zero-based) of the element you want returned.
	     */
	    el.getSlideElement = function (index) {
	      return slider.children.eq(index);
	    };

	    /**
	     * Returns number of slides in show
	     */
	    el.getSlideCount = function () {
	      return slider.children.length;
	    };

	    /**
	     * Return slider.working variable
	     */
	    el.isWorking = function () {
	      return slider.working;
	    };

	    /**
	     * Update all dynamic slider elements
	     */
	    el.redrawSlider = function () {
	      // resize all children in ratio to new screen size
	      slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
	      // adjust the height
	      slider.viewport.css('height', getViewportHeight());
	      // update the slide position
	      if (!slider.settings.ticker) {
	        setSlidePosition();
	      }
	      // if active.last was true before the screen resize, we want
	      // to keep it last no matter what screen size we end on
	      if (slider.active.last) {
	        slider.active.index = getPagerQty() - 1;
	      }
	      // if the active index (page) no longer exists due to the resize, simply set the index as last
	      if (slider.active.index >= getPagerQty()) {
	        slider.active.last = true;
	      }
	      // if a pager is being displayed and a custom pager is not being used, update it
	      if (slider.settings.pager && !slider.settings.pagerCustom) {
	        populatePager();
	        updatePagerActive(slider.active.index);
	      }
	      if (slider.settings.ariaHidden) {
	        applyAriaHiddenAttributes(slider.active.index * getMoveBy());
	      }
	    };

	    /**
	     * Destroy the current instance of the slider (revert everything back to original state)
	     */
	    el.destroySlider = function () {
	      // don't do anything if slider has already been destroyed
	      if (!slider.initialized) {
	        return;
	      }
	      slider.initialized = false;
	      $('.bx-clone', this).remove();
	      slider.children.each(function () {
	        if ($(this).data('origStyle') !== undefined) {
	          $(this).attr('style', $(this).data('origStyle'));
	        } else {
	          $(this).removeAttr('style');
	        }
	      });
	      if ($(this).data('origStyle') !== undefined) {
	        this.attr('style', $(this).data('origStyle'));
	      } else {
	        $(this).removeAttr('style');
	      }
	      $(this).unwrap().unwrap();
	      if (slider.controls.el) {
	        slider.controls.el.remove();
	      }
	      if (slider.controls.next) {
	        slider.controls.next.remove();
	      }
	      if (slider.controls.prev) {
	        slider.controls.prev.remove();
	      }
	      if (slider.pagerEl && slider.settings.controls && !slider.settings.pagerCustom) {
	        slider.pagerEl.remove();
	      }
	      $('.bx-caption', this).remove();
	      if (slider.controls.autoEl) {
	        slider.controls.autoEl.remove();
	      }
	      clearInterval(slider.interval);
	      if (slider.settings.responsive) {
	        $(window).unbind('resize', resizeWindow);
	      }
	      if (slider.settings.keyboardEnabled) {
	        $(document).unbind('keydown', keyPress);
	      }
	      //remove self reference in data
	      $(this).removeData('bxSlider');
	      // remove global window handlers
	      $(window).off('blur', windowBlurHandler).off('focus', windowFocusHandler);
	    };

	    /**
	     * Reload the slider (revert all DOM changes, and re-initialize)
	     */
	    el.reloadSlider = function (settings) {
	      if (settings !== undefined) {
	        options = settings;
	      }
	      el.destroySlider();
	      init();
	      //store reference to self in order to access public functions later
	      $(el).data('bxSlider', this);
	    };

	    init();

	    $(el).data('bxSlider', this);

	    // returns the current jQuery object
	    return this;
	  };
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AnalysisProjections = function AnalysisProjections() {
	    _classCallCheck(this, AnalysisProjections);

	    $("#overviewSideNavOptions").on('click', '#ov_ap, #ov_hl', changeOVSideNav);
	    $('[data_value="HL"]').hide();
	    $('a.show-more-tags').on('click', function showMoreTags(event) {
	        event.preventDefault();

	        $(this).parents('.tag-list').toggleClass('show-more', true);
	        return false;
	    });
	    function changeOVSideNav(evt) {
	        $('#overviewSideNavOptions > label').removeClass('active');
	        if ($(this).attr('name') == "ov_ap") {
	            $('[data_value="AP"]').show();
	            $('[data_value="HL"]').hide();
	        } else {
	            $('[data_value="HL"]').show();
	            $('[data_value="AP"]').hide();
	        }
	        $(this).addClass('active');
	    }
	};

	exports.default = AnalysisProjections;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ModuleScripts = function () {
	    function ModuleScripts() {
	        _classCallCheck(this, ModuleScripts);

	        //this.moduleVisualizations = $(".visualizations h3 a:empty");
	        //this.moduleLinkList = $(".link-list a:empty");
	        //this.hideDescriptionIfEmpty = $(".slider-home h3 a:empty");
	        //this.hideElementIfEmpty = $(".hide-mt a:empty");
	        // these scripts look for an empty element and then hides the parent element
	        //        this.moduleLinkList.each((index, element) => {
	        //            $(element).parent().addClass("hide"); 
	        //        })
	        //        this.moduleVisualizations.each((index, element) => {
	        //            $(element).closest('li').addClass("hide"); 
	        //        })
	        $('a').each(function () {
	            var a = new RegExp('/' + window.location.host + '/');
	            //if (!a.test(this.href) && ($(this).find('img').length === 0) && ($(this).attr('href'))) {
	            //    $(this).addClass('external-link');
	            //}
	            if (!a.test(this.href) && $(this).find('img').length === 1 && $(this).attr('href')) {
	                $(this).addClass('external-image-link');
	            }
	        });

	        /*
	        if(window.location.href.indexOf("eia.gov")!=-1) {
	            $(this).removeClass("specialbrand");
	            console.log("yep");
	        }
	        */

	        this.events();
	    }

	    _createClass(ModuleScripts, [{
	        key: 'events',
	        value: function events() {

	            //this.hideElementIfEmpty.each((index, element) => {
	            //    $(element).closest('li').addClass("hide"); 
	            //});


	            // $(".slider-home h3 a:empty").each(function() {
	            //     $(this).parent().parent().addClass("no-description");
	            // });

	            $('.slider-home h3 a').each(function () {
	                if ($(this).text().trim().length <= 0) {
	                    $(this).parent().parent().addClass("no-description");
	                    //console.log('no description on slider so adding a no-description class');
	                }
	            });

	            $('div.energy-education h2 a').each(function () {
	                if ($(this).text().trim().length <= 0) {
	                    $(this).parent().parent().parent().parent().remove();
	                    //console.log('removing empty element');
	                }
	            });
	            $('div.energy-education li.foot a').each(function () {
	                if ($(this).attr('href').length <= 0) {
	                    $(this).remove();
	                    //console.log('removing empty element');
	                }
	            });
	            $('.visualizations a').each(function () {
	                if ($(this).text().trim().length <= 0) {
	                    $(this).parent().remove();
	                    //console.log('removing empty element');
	                }
	            });
	            $('ul.updated-data-series a').each(function () {
	                if ($(this).attr('href').length <= 0) {
	                    $(this).parent().remove();
	                    //console.log('removing empty element');
	                }
	            });
	            $('.secondary .icon a').each(function () {
	                if ($(this).attr('href').length <= 0) {
	                    $(this).closest('li').remove();
	                    //console.log('removing empty element');
	                }
	            });
	            $('.secondary.hide-mt a').each(function () {
	                if ($(this).attr('href').length <= 0) {
	                    $(this).parent().remove();
	                    //console.log('hiding "secondary.hide-mt" empty element');
	                }
	            });

	            $('.primary.hide-mt a').each(function () {
	                if ($(this).attr('href').length <= 0) {
	                    $(this).parent().remove();
	                    //console.log('hiding "primary.hide-mt" empty element');
	                }
	            });

	            //        $('.hide-mt a').each(function() {
	            //            if ($(this).text().trim().length <= 0) {
	            //                $(this).closest('li').remove();
	            //                console.log('removing empty element');
	            //            }
	            //        });


	            //this.hideDescriptionIfEmpty.each((index, element) => {
	            //    $(element).closest('li').addClass('no-description');
	            //});


	            $('.features a').attr("href", function (ind, attr) {
	                var featureOrder = $(this).parents('div').attr('class');
	                return (/\?/.test(attr) ? attr + '&src=home-' + featureOrder : attr + '?src=home-' + featureOrder
	                );
	            });
	        }
	    }]);

	    return ModuleScripts;
	}();

	exports.default = ModuleScripts;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Highlight = function Highlight() {
	    _classCallCheck(this, Highlight);

	    var dataPage = document.querySelector('.data');
	    if (dataPage !== null) {

	        var referrer = document.referrer;
	        var query;
	        //referrer = document.location.href;  //REMOVE AFTER TESTING
	        if (referrer) {
	            var posQ = referrer.indexOf('query=');
	            if (posQ > -1) {
	                posEnd = referrer.indexOf('&', posQ);
	                if (posEnd > -1) {
	                    query = referrer.substring(posQ + 6, posEnd);
	                } else {
	                    query = referrer.substring(posQ + 6);
	                }
	                var aryKeywords = query.split('+');
	                for (var i = 0; i < aryKeywords.length; i++) {
	                    //can't get this to work!  var patt = new  RegExp('(\b' + aryKeywords[i] + ')(?!([^<]+)?>)','ig');
	                    var patt = new RegExp('(\\b' + aryKeywords[i] + '\\w*)(?!([^<]+)?>)', 'ig');
	                    ///var patt = new  RegExp('(\\w*' + aryKeywords[i] + '\\w*)(?!([^<]+)?>)','ig');
	                    var pageHTML = $('div.pagecontent').find('td').each(function () {
	                        if (patt.test(this.innerHTML)) {
	                            var spannedContent = this.innerHTML.replace(patt, '<span class="highlight keyword' + i + '">$1</span>');
	                            this.innerHTML = spannedContent;
	                        }
	                    });
	                }
	                if (document.location.href.toLowerCase().indexOf('/data.cfm') > 0 || document.location.href.toLowerCase().indexOf('totalenergy/data/') > 0) {
	                    // open the tab containing the most highlighted keywords
	                    var maxAppearances = 0;
	                    var aryCountObj = [];
	                    $('table.contable tbody').each(function () {
	                        var countObj = {
	                            tbody: this,
	                            appearances: 0,
	                            count: 0
	                        };
	                        for (var i = 0; i < aryKeywords.length; i++) {
	                            var found = $(this).find('span.highlight.keyword' + i).length;
	                            countObj.count = +found;
	                            if (found > 0) countObj.appearances++;
	                        }
	                        if (maxAppearances < countObj.appearances) maxAppearances = countObj.appearances;
	                        aryCountObj.push(countObj);
	                    });
	                    for (var i = 0; i < aryCountObj.length; i++) {
	                        //open section with most
	                        if (aryCountObj[i].appearances == maxAppearances) {
	                            $(aryCountObj[i].tbody).prev('thead').last().click();
	                        }
	                    }
	                }
	                $('.highlight').click(function () {
	                    $('.highlight').removeClass('highlight').addClass('highlight_off');
	                });
	            }
	        }
	    } // dataPage
	};

	exports.default = Highlight;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FirefoxHack = function FirefoxHack() {
	    _classCallCheck(this, FirefoxHack);

	    if (navigator.userAgent.search("Firefox") >= 0) {
	        var ff_version = navigator.userAgent.match(/Firefox\/([\d]+\.[\d])+/);
	        ff_version = parseFloat(ff_version[1]);
	        if (ff_version == 0 || ff_version >= 59) {
	            $('body').on('mousedown', '.bx-viewport a', function () {
	                var ff_link = $(this);
	                var ff_href = ff_link.attr('href');
	                if (ff_href) {
	                    location.href = ff_href;
	                    return false;
	                }
	            });
	        }
	    }
	};

	exports.default = FirefoxHack;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _accordion = __webpack_require__(17);

	var _accordion2 = _interopRequireDefault(_accordion);

	var _tabs = __webpack_require__(22);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _version = __webpack_require__(18);

	var _version2 = _interopRequireDefault(_version);

	var _widget = __webpack_require__(21);

	var _widget2 = _interopRequireDefault(_widget);

	var _position = __webpack_require__(25);

	var _position2 = _interopRequireDefault(_position);

	var _formResetMixin = __webpack_require__(26);

	var _formResetMixin2 = _interopRequireDefault(_formResetMixin);

	var _keycode = __webpack_require__(19);

	var _keycode2 = _interopRequireDefault(_keycode);

	var _labels = __webpack_require__(28);

	var _labels2 = _interopRequireDefault(_labels);

	var _uniqueId = __webpack_require__(20);

	var _uniqueId2 = _interopRequireDefault(_uniqueId);

	var _core = __webpack_require__(29);

	var _core2 = _interopRequireDefault(_core);

	var _effect = __webpack_require__(30);

	var _effect2 = _interopRequireDefault(_effect);

	var _escapeSelector = __webpack_require__(23);

	var _escapeSelector2 = _interopRequireDefault(_escapeSelector);

	var _safeActiveElement = __webpack_require__(24);

	var _safeActiveElement2 = _interopRequireDefault(_safeActiveElement);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var $ = __webpack_require__(2);
	// widgets

	//import Datepicker from '../../../../node_modules/jquery-ui/ui/widgets/datepicker.js';
	// dependencies

	var jqueryUI = function () {
	    function jqueryUI() {
	        _classCallCheck(this, jqueryUI);

	        this.accordion = $('.accordion');

	        if (this.accordion !== null) {
	            this.accordionModule();
	        };
	        if (this.accordion !== null) {
	            this.oldPageTabsModule();
	        }
	    }

	    _createClass(jqueryUI, [{
	        key: 'oldPageTabsModule',
	        value: function oldPageTabsModule() {
	            $('.page_tabs').tabs();
	            /*
	            $('.page_tabs').localScroll({
	                target: ".page_tabs",
	                duration: 0,
	                hash: true
	            });
	            */
	        }
	    }, {
	        key: 'accordionModule',
	        value: function accordionModule() {
	            $('.accordion').accordion({
	                heightStyle: 'content',
	                active: false,
	                collapsible: true,
	                header: 'h3',
	                icons: {
	                    'header': 'ico expand',
	                    'activeHeader': 'ico collapse'
	                },
	                activate: function activate(event, ui) {
	                    if (!$.isEmptyObject(ui.newHeader.offset())) {
	                        $('html:not(:animated), body:not(:animated)').animate({ scrollTop: ui.newHeader.offset().top - 50 }, 'slow');
	                    }
	                }
	            });
	            $('.accordion.all-open').accordion({
	                heightStyle: 'content',
	                active: true,
	                collapsible: true,
	                header: 'h3',
	                icons: false
	            });
	            $('.accordion.all-open h3').removeClass('ui-accordion-header-collapsed').addClass('ui-accordion-header-active').attr({ 'aria-selected': 'true', 'tabindex': '0' });
	            $('.accordion.all-open .ui-accordion-content').addClass('ui-accordion-content-active').attr({ 'aria-expanded': 'true', 'aria-hidden': 'false' }).show();
	            $('.accordion.first-open').accordion({
	                heightStyle: 'content',
	                collapsible: true
	            });
	            // set the initial state
	            $('.collapse').hide();
	            $('.l-inner-wrapper a[href*="#"]').not('.l-inner-wrapper [href="#"]').not('.l-inner-wrapper [href="#0"]').click(function (event) {
	                // On-page links
	                console.log("clicked");
	                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	                    // Figure out element to scroll to
	                    var target = $(this.hash);
	                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	                    // Does a scroll target exist?
	                    if (target.length) {
	                        // Only prevent default if animation is actually gonna happen
	                        event.preventDefault();
	                        $('html, body').animate({
	                            scrollTop: target.offset().top - 60
	                        }, 1000, function () {
	                            // Callback after animation
	                            // Must change focus!
	                            var $target = $(target);
	                            $target.closest('h3').next('div').css('display', 'block');
	                            $target.focus();
	                            if ($target.is(":focus")) {
	                                // Checking if the target was focused
	                                return false;
	                            } else {
	                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
	                                $target.focus(); // Set focus again
	                            }
	                        });
	                    }
	                }
	            });

	            var windowHash = decodeURI(window.location.hash);
	            // opens accordion when user is navigating to the data page from another page        
	            if (windowHash) {
	                console.log(windowHash);
	                var target = $(windowHash);
	                target = target.length ? target : $('[name=' + windowHash.substr(1) + ']');
	                if (target.length) {
	                    $('html, body').animate({
	                        scrollTop: target.offset().top - 60
	                    }, 1000, function () {
	                        var $target = $(target);
	                        $target.closest('h3').next('div').css('display', 'block');
	                        $target.focus();
	                        if ($target.is(":focus")) {
	                            return false;
	                        } else {
	                            $target.attr('tabindex', '-1');
	                            $target.focus();
	                        }
	                    });
	                }
	            }
	            $('.expand-collapse-container .expand').click(function () {
	                $(this).parent().next('div').find('h3').removeClass('ui-accordion-header-collapsed').addClass('ui-accordion-header-active').attr({ 'aria-selected': 'true', 'tabindex': '0' });
	                $(this).parent().next('div').find('.ui-accordion-content').addClass('ui-accordion-content-active').attr({ 'aria-expanded': 'true', 'aria-hidden': 'false' }).show();
	                $(this).hide();
	                $(this).parent('span').find('.collapse').show();
	                $(this).parent().next('div').find('.ui-accordion-header-icon').removeClass('expand').addClass('collapse').attr({ 'aria-selected': 'true', 'tabindex': '0' });
	            });
	            $('.expand-collapse-container .collapse').click(function () {
	                $(this).parent().next('div').find('h3').removeClass('ui-accordion-header-active').addClass('ui-accordion-header-collapsed').attr({ 'aria-selected': 'false', 'tabindex': '-1' });
	                $(this).parent().next('div').find('.ui-accordion-content').removeClass('ui-accordion-content-active').attr({ 'aria-expanded': 'false', 'aria-hidden': 'true' }).hide();
	                $(this).hide();
	                $(this).parent('span').find('.expand').show();
	                $(this).parent().next('div').find('.ui-accordion-header-icon').removeClass('collapse').addClass('expand').attr({ 'aria-selected': 'true', 'tabindex': '0' });
	            });
	        }
	    }]);

	    return jqueryUI;
	}();

	exports.default = jqueryUI;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery UI Accordion 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Accordion
	//>>group: Widgets
	// jscs:disable maximumLineLength
	//>>description: Displays collapsible content panels for presenting information in a limited amount of space.
	// jscs:enable maximumLineLength
	//>>docs: http://api.jqueryui.com/accordion/
	//>>demos: http://jqueryui.com/accordion/
	//>>css.structure: ../../themes/base/core.css
	//>>css.structure: ../../themes/base/accordion.css
	//>>css.theme: ../../themes/base/theme.css

	( function( factory ) {
		if ( true ) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(2),
				__webpack_require__(18),
				__webpack_require__(19),
				__webpack_require__(20),
				__webpack_require__(21)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {

			// Browser globals
			factory( jQuery );
		}
	}( function( $ ) {

	return $.widget( "ui.accordion", {
		version: "1.12.1",
		options: {
			active: 0,
			animate: {},
			classes: {
				"ui-accordion-header": "ui-corner-top",
				"ui-accordion-header-collapsed": "ui-corner-all",
				"ui-accordion-content": "ui-corner-bottom"
			},
			collapsible: false,
			event: "click",
			header: "> li > :first-child, > :not(li):even",
			heightStyle: "auto",
			icons: {
				activeHeader: "ui-icon-triangle-1-s",
				header: "ui-icon-triangle-1-e"
			},

			// Callbacks
			activate: null,
			beforeActivate: null
		},

		hideProps: {
			borderTopWidth: "hide",
			borderBottomWidth: "hide",
			paddingTop: "hide",
			paddingBottom: "hide",
			height: "hide"
		},

		showProps: {
			borderTopWidth: "show",
			borderBottomWidth: "show",
			paddingTop: "show",
			paddingBottom: "show",
			height: "show"
		},

		_create: function() {
			var options = this.options;

			this.prevShow = this.prevHide = $();
			this._addClass( "ui-accordion", "ui-widget ui-helper-reset" );
			this.element.attr( "role", "tablist" );

			// Don't allow collapsible: false and active: false / null
			if ( !options.collapsible && ( options.active === false || options.active == null ) ) {
				options.active = 0;
			}

			this._processPanels();

			// handle negative values
			if ( options.active < 0 ) {
				options.active += this.headers.length;
			}
			this._refresh();
		},

		_getCreateEventData: function() {
			return {
				header: this.active,
				panel: !this.active.length ? $() : this.active.next()
			};
		},

		_createIcons: function() {
			var icon, children,
				icons = this.options.icons;

			if ( icons ) {
				icon = $( "<span>" );
				this._addClass( icon, "ui-accordion-header-icon", "ui-icon " + icons.header );
				icon.prependTo( this.headers );
				children = this.active.children( ".ui-accordion-header-icon" );
				this._removeClass( children, icons.header )
					._addClass( children, null, icons.activeHeader )
					._addClass( this.headers, "ui-accordion-icons" );
			}
		},

		_destroyIcons: function() {
			this._removeClass( this.headers, "ui-accordion-icons" );
			this.headers.children( ".ui-accordion-header-icon" ).remove();
		},

		_destroy: function() {
			var contents;

			// Clean up main element
			this.element.removeAttr( "role" );

			// Clean up headers
			this.headers
				.removeAttr( "role aria-expanded aria-selected aria-controls tabIndex" )
				.removeUniqueId();

			this._destroyIcons();

			// Clean up content panels
			contents = this.headers.next()
				.css( "display", "" )
				.removeAttr( "role aria-hidden aria-labelledby" )
				.removeUniqueId();

			if ( this.options.heightStyle !== "content" ) {
				contents.css( "height", "" );
			}
		},

		_setOption: function( key, value ) {
			if ( key === "active" ) {

				// _activate() will handle invalid values and update this.options
				this._activate( value );
				return;
			}

			if ( key === "event" ) {
				if ( this.options.event ) {
					this._off( this.headers, this.options.event );
				}
				this._setupEvents( value );
			}

			this._super( key, value );

			// Setting collapsible: false while collapsed; open first panel
			if ( key === "collapsible" && !value && this.options.active === false ) {
				this._activate( 0 );
			}

			if ( key === "icons" ) {
				this._destroyIcons();
				if ( value ) {
					this._createIcons();
				}
			}
		},

		_setOptionDisabled: function( value ) {
			this._super( value );

			this.element.attr( "aria-disabled", value );

			// Support: IE8 Only
			// #5332 / #6059 - opacity doesn't cascade to positioned elements in IE
			// so we need to add the disabled class to the headers and panels
			this._toggleClass( null, "ui-state-disabled", !!value );
			this._toggleClass( this.headers.add( this.headers.next() ), null, "ui-state-disabled",
				!!value );
		},

		_keydown: function( event ) {
			if ( event.altKey || event.ctrlKey ) {
				return;
			}

			var keyCode = $.ui.keyCode,
				length = this.headers.length,
				currentIndex = this.headers.index( event.target ),
				toFocus = false;

			switch ( event.keyCode ) {
			case keyCode.RIGHT:
			case keyCode.DOWN:
				toFocus = this.headers[ ( currentIndex + 1 ) % length ];
				break;
			case keyCode.LEFT:
			case keyCode.UP:
				toFocus = this.headers[ ( currentIndex - 1 + length ) % length ];
				break;
			case keyCode.SPACE:
			case keyCode.ENTER:
				this._eventHandler( event );
				break;
			case keyCode.HOME:
				toFocus = this.headers[ 0 ];
				break;
			case keyCode.END:
				toFocus = this.headers[ length - 1 ];
				break;
			}

			if ( toFocus ) {
				$( event.target ).attr( "tabIndex", -1 );
				$( toFocus ).attr( "tabIndex", 0 );
				$( toFocus ).trigger( "focus" );
				event.preventDefault();
			}
		},

		_panelKeyDown: function( event ) {
			if ( event.keyCode === $.ui.keyCode.UP && event.ctrlKey ) {
				$( event.currentTarget ).prev().trigger( "focus" );
			}
		},

		refresh: function() {
			var options = this.options;
			this._processPanels();

			// Was collapsed or no panel
			if ( ( options.active === false && options.collapsible === true ) ||
					!this.headers.length ) {
				options.active = false;
				this.active = $();

			// active false only when collapsible is true
			} else if ( options.active === false ) {
				this._activate( 0 );

			// was active, but active panel is gone
			} else if ( this.active.length && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {

				// all remaining panel are disabled
				if ( this.headers.length === this.headers.find( ".ui-state-disabled" ).length ) {
					options.active = false;
					this.active = $();

				// activate previous panel
				} else {
					this._activate( Math.max( 0, options.active - 1 ) );
				}

			// was active, active panel still exists
			} else {

				// make sure active index is correct
				options.active = this.headers.index( this.active );
			}

			this._destroyIcons();

			this._refresh();
		},

		_processPanels: function() {
			var prevHeaders = this.headers,
				prevPanels = this.panels;

			this.headers = this.element.find( this.options.header );
			this._addClass( this.headers, "ui-accordion-header ui-accordion-header-collapsed",
				"ui-state-default" );

			this.panels = this.headers.next().filter( ":not(.ui-accordion-content-active)" ).hide();
			this._addClass( this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content" );

			// Avoid memory leaks (#10056)
			if ( prevPanels ) {
				this._off( prevHeaders.not( this.headers ) );
				this._off( prevPanels.not( this.panels ) );
			}
		},

		_refresh: function() {
			var maxHeight,
				options = this.options,
				heightStyle = options.heightStyle,
				parent = this.element.parent();

			this.active = this._findActive( options.active );
			this._addClass( this.active, "ui-accordion-header-active", "ui-state-active" )
				._removeClass( this.active, "ui-accordion-header-collapsed" );
			this._addClass( this.active.next(), "ui-accordion-content-active" );
			this.active.next().show();

			this.headers
				.attr( "role", "tab" )
				.each( function() {
					var header = $( this ),
						headerId = header.uniqueId().attr( "id" ),
						panel = header.next(),
						panelId = panel.uniqueId().attr( "id" );
					header.attr( "aria-controls", panelId );
					panel.attr( "aria-labelledby", headerId );
				} )
				.next()
					.attr( "role", "tabpanel" );

			this.headers
				.not( this.active )
					.attr( {
						"aria-selected": "false",
						"aria-expanded": "false",
						tabIndex: -1
					} )
					.next()
						.attr( {
							"aria-hidden": "true"
						} )
						.hide();

			// Make sure at least one header is in the tab order
			if ( !this.active.length ) {
				this.headers.eq( 0 ).attr( "tabIndex", 0 );
			} else {
				this.active.attr( {
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				} )
					.next()
						.attr( {
							"aria-hidden": "false"
						} );
			}

			this._createIcons();

			this._setupEvents( options.event );

			if ( heightStyle === "fill" ) {
				maxHeight = parent.height();
				this.element.siblings( ":visible" ).each( function() {
					var elem = $( this ),
						position = elem.css( "position" );

					if ( position === "absolute" || position === "fixed" ) {
						return;
					}
					maxHeight -= elem.outerHeight( true );
				} );

				this.headers.each( function() {
					maxHeight -= $( this ).outerHeight( true );
				} );

				this.headers.next()
					.each( function() {
						$( this ).height( Math.max( 0, maxHeight -
							$( this ).innerHeight() + $( this ).height() ) );
					} )
					.css( "overflow", "auto" );
			} else if ( heightStyle === "auto" ) {
				maxHeight = 0;
				this.headers.next()
					.each( function() {
						var isVisible = $( this ).is( ":visible" );
						if ( !isVisible ) {
							$( this ).show();
						}
						maxHeight = Math.max( maxHeight, $( this ).css( "height", "" ).height() );
						if ( !isVisible ) {
							$( this ).hide();
						}
					} )
					.height( maxHeight );
			}
		},

		_activate: function( index ) {
			var active = this._findActive( index )[ 0 ];

			// Trying to activate the already active panel
			if ( active === this.active[ 0 ] ) {
				return;
			}

			// Trying to collapse, simulate a click on the currently active header
			active = active || this.active[ 0 ];

			this._eventHandler( {
				target: active,
				currentTarget: active,
				preventDefault: $.noop
			} );
		},

		_findActive: function( selector ) {
			return typeof selector === "number" ? this.headers.eq( selector ) : $();
		},

		_setupEvents: function( event ) {
			var events = {
				keydown: "_keydown"
			};
			if ( event ) {
				$.each( event.split( " " ), function( index, eventName ) {
					events[ eventName ] = "_eventHandler";
				} );
			}

			this._off( this.headers.add( this.headers.next() ) );
			this._on( this.headers, events );
			this._on( this.headers.next(), { keydown: "_panelKeyDown" } );
			this._hoverable( this.headers );
			this._focusable( this.headers );
		},

		_eventHandler: function( event ) {
			var activeChildren, clickedChildren,
				options = this.options,
				active = this.active,
				clicked = $( event.currentTarget ),
				clickedIsActive = clicked[ 0 ] === active[ 0 ],
				collapsing = clickedIsActive && options.collapsible,
				toShow = collapsing ? $() : clicked.next(),
				toHide = active.next(),
				eventData = {
					oldHeader: active,
					oldPanel: toHide,
					newHeader: collapsing ? $() : clicked,
					newPanel: toShow
				};

			event.preventDefault();

			if (

					// click on active header, but not collapsible
					( clickedIsActive && !options.collapsible ) ||

					// allow canceling activation
					( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
				return;
			}

			options.active = collapsing ? false : this.headers.index( clicked );

			// When the call to ._toggle() comes after the class changes
			// it causes a very odd bug in IE 8 (see #6720)
			this.active = clickedIsActive ? $() : clicked;
			this._toggle( eventData );

			// Switch classes
			// corner classes on the previously active header stay after the animation
			this._removeClass( active, "ui-accordion-header-active", "ui-state-active" );
			if ( options.icons ) {
				activeChildren = active.children( ".ui-accordion-header-icon" );
				this._removeClass( activeChildren, null, options.icons.activeHeader )
					._addClass( activeChildren, null, options.icons.header );
			}

			if ( !clickedIsActive ) {
				this._removeClass( clicked, "ui-accordion-header-collapsed" )
					._addClass( clicked, "ui-accordion-header-active", "ui-state-active" );
				if ( options.icons ) {
					clickedChildren = clicked.children( ".ui-accordion-header-icon" );
					this._removeClass( clickedChildren, null, options.icons.header )
						._addClass( clickedChildren, null, options.icons.activeHeader );
				}

				this._addClass( clicked.next(), "ui-accordion-content-active" );
			}
		},

		_toggle: function( data ) {
			var toShow = data.newPanel,
				toHide = this.prevShow.length ? this.prevShow : data.oldPanel;

			// Handle activating a panel during the animation for another activation
			this.prevShow.add( this.prevHide ).stop( true, true );
			this.prevShow = toShow;
			this.prevHide = toHide;

			if ( this.options.animate ) {
				this._animate( toShow, toHide, data );
			} else {
				toHide.hide();
				toShow.show();
				this._toggleComplete( data );
			}

			toHide.attr( {
				"aria-hidden": "true"
			} );
			toHide.prev().attr( {
				"aria-selected": "false",
				"aria-expanded": "false"
			} );

			// if we're switching panels, remove the old header from the tab order
			// if we're opening from collapsed state, remove the previous header from the tab order
			// if we're collapsing, then keep the collapsing header in the tab order
			if ( toShow.length && toHide.length ) {
				toHide.prev().attr( {
					"tabIndex": -1,
					"aria-expanded": "false"
				} );
			} else if ( toShow.length ) {
				this.headers.filter( function() {
					return parseInt( $( this ).attr( "tabIndex" ), 10 ) === 0;
				} )
					.attr( "tabIndex", -1 );
			}

			toShow
				.attr( "aria-hidden", "false" )
				.prev()
					.attr( {
						"aria-selected": "true",
						"aria-expanded": "true",
						tabIndex: 0
					} );
		},

		_animate: function( toShow, toHide, data ) {
			var total, easing, duration,
				that = this,
				adjust = 0,
				boxSizing = toShow.css( "box-sizing" ),
				down = toShow.length &&
					( !toHide.length || ( toShow.index() < toHide.index() ) ),
				animate = this.options.animate || {},
				options = down && animate.down || animate,
				complete = function() {
					that._toggleComplete( data );
				};

			if ( typeof options === "number" ) {
				duration = options;
			}
			if ( typeof options === "string" ) {
				easing = options;
			}

			// fall back from options to animation in case of partial down settings
			easing = easing || options.easing || animate.easing;
			duration = duration || options.duration || animate.duration;

			if ( !toHide.length ) {
				return toShow.animate( this.showProps, duration, easing, complete );
			}
			if ( !toShow.length ) {
				return toHide.animate( this.hideProps, duration, easing, complete );
			}

			total = toShow.show().outerHeight();
			toHide.animate( this.hideProps, {
				duration: duration,
				easing: easing,
				step: function( now, fx ) {
					fx.now = Math.round( now );
				}
			} );
			toShow
				.hide()
				.animate( this.showProps, {
					duration: duration,
					easing: easing,
					complete: complete,
					step: function( now, fx ) {
						fx.now = Math.round( now );
						if ( fx.prop !== "height" ) {
							if ( boxSizing === "content-box" ) {
								adjust += fx.now;
							}
						} else if ( that.options.heightStyle !== "content" ) {
							fx.now = Math.round( total - toHide.outerHeight() - adjust );
							adjust = 0;
						}
					}
				} );
		},

		_toggleComplete: function( data ) {
			var toHide = data.oldPanel,
				prev = toHide.prev();

			this._removeClass( toHide, "ui-accordion-content-active" );
			this._removeClass( prev, "ui-accordion-header-active" )
				._addClass( prev, "ui-accordion-header-collapsed" );

			// Work around for rendering bug in IE (#5421)
			if ( toHide.length ) {
				toHide.parent()[ 0 ].className = toHide.parent()[ 0 ].className;
			}
			this._trigger( "activate", null, data );
		}
	} );

	} ) );


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
		if ( true ) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {

			// Browser globals
			factory( jQuery );
		}
	} ( function( $ ) {

	$.ui = $.ui || {};

	return $.ui.version = "1.12.1";

	} ) );


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery UI Keycode 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Keycode
	//>>group: Core
	//>>description: Provide keycodes as keynames
	//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/

	( function( factory ) {
		if ( true ) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(18) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {

			// Browser globals
			factory( jQuery );
		}
	} ( function( $ ) {
	return $.ui.keyCode = {
		BACKSPACE: 8,
		COMMA: 188,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SPACE: 32,
		TAB: 9,
		UP: 38
	};

	} ) );


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery UI Unique ID 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: uniqueId
	//>>group: Core
	//>>description: Functions to generate and remove uniqueId's
	//>>docs: http://api.jqueryui.com/uniqueId/

	( function( factory ) {
		if ( true ) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(18) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {

			// Browser globals
			factory( jQuery );
		}
	} ( function( $ ) {

	return $.fn.extend( {
		uniqueId: ( function() {
			var uuid = 0;

			return function() {
				return this.each( function() {
					if ( !this.id ) {
						this.id = "ui-id-" + ( ++uuid );
					}
				} );
			};
		} )(),

		removeUniqueId: function() {
			return this.each( function() {
				if ( /^ui-id-\d+$/.test( this.id ) ) {
					$( this ).removeAttr( "id" );
				}
			} );
		}
	} );

	} ) );


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery UI Widget 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Widget
	//>>group: Core
	//>>description: Provides a factory for creating stateful widgets with a common API.
	//>>docs: http://api.jqueryui.com/jQuery.widget/
	//>>demos: http://jqueryui.com/widget/

	( function( factory ) {
		if ( true ) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(18) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {

			// Browser globals
			factory( jQuery );
		}
	}( function( $ ) {

	var widgetUuid = 0;
	var widgetSlice = Array.prototype.slice;

	$.cleanData = ( function( orig ) {
		return function( elems ) {
			var events, elem, i;
			for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
				try {

					// Only trigger remove when necessary to save time
					events = $._data( elem, "events" );
					if ( events && events.remove ) {
						$( elem ).triggerHandler( "remove" );
					}

				// Http://bugs.jquery.com/ticket/8235
				} catch ( e ) {}
			}
			orig( elems );
		};
	} )( $.cleanData );

	$.widget = function( name, base, prototype ) {
		var existingConstructor, constructor, basePrototype;

		// ProxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		var proxiedPrototype = {};

		var namespace = name.split( "." )[ 0 ];
		name = name.split( "." )[ 1 ];
		var fullName = namespace + "-" + name;

		if ( !prototype ) {
			prototype = base;
			base = $.Widget;
		}

		if ( $.isArray( prototype ) ) {
			prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
		}

		// Create selector for plugin
		$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
			return !!$.data( elem, fullName );
		};

		$[ namespace ] = $[ namespace ] || {};
		existingConstructor = $[ namespace ][ name ];
		constructor = $[ namespace ][ name ] = function( options, element ) {

			// Allow instantiation without "new" keyword
			if ( !this._createWidget ) {
				return new constructor( options, element );
			}

			// Allow instantiation without initializing for simple inheritance
			// must use "new" keyword (the code above always passes args)
			if ( arguments.length ) {
				this._createWidget( options, element );
			}
		};

		// Extend with the existing constructor to carry over any static properties
		$.extend( constructor, existingConstructor, {
			version: prototype.version,

			// Copy the object used to create the prototype in case we need to
			// redefine the widget later
			_proto: $.extend( {}, prototype ),

			// Track widgets that inherit from this widget in case this widget is
			// redefined after a widget inherits from it
			_childConstructors: []
		} );

		basePrototype = new base();

		// We need to make the options hash a property directly on the new instance
		// otherwise we'll modify the options hash on the prototype that we're
		// inheriting from
		basePrototype.options = $.widget.extend( {}, basePrototype.options );
		$.each( prototype, function( prop, value ) {
			if ( !$.isFunction( value ) ) {
				proxiedPrototype[ prop ] = value;
				return;
			}
			proxiedPrototype[ prop ] = ( function() {
				function _super() {
					return base.prototype[ prop ].apply( this, arguments );
				}

				function _superApply( args ) {
					return base.prototype[ prop ].apply( this, args );
				}

				return function() {
					var __super = this._super;
					var __superApply = this._superApply;
					var returnValue;

					this._super = _super;
					this._superApply = _superApply;

					returnValue = value.apply( this, arguments );

					this._super = __super;
					this._superApply = __superApply;

					return returnValue;
				};
			} )();
		} );
		constructor.prototype = $.widget.extend( basePrototype, {

			// TODO: remove support for widgetEventPrefix
			// always use the name + a colon as the prefix, e.g., draggable:start
			// don't prefix for widgets that aren't DOM-based
			widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
		}, proxiedPrototype, {
			constructor: constructor,
			namespace: namespace,
			widgetName: name,
			widgetFullName: fullName
		} );

		// If this widget is being redefined then we need to find all widgets that
		// are inheriting from it and redefine all of them so that they inherit from
		// the new version of this widget. We're essentially trying to replace one
		// level in the prototype chain.
		if ( existingConstructor ) {
			$.each( existingConstructor._childConstructors, function( i, child ) {
				var childPrototype = child.prototype;

				// Redefine the child widget using the same prototype that was
				// originally used, but inherit from the new version of the base
				$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
					child._proto );
			} );

			// Remove the list of existing child constructors from the old constructor
			// so the old child constructors can be garbage collected
			delete existingConstructor._childConstructors;
		} else {
			base._childConstructors.push( constructor );
		}

		$.widget.bridge( name, constructor );

		return constructor;
	};

	$.widget.extend = function( target ) {
		var input = widgetSlice.call( arguments, 1 );
		var inputIndex = 0;
		var inputLength = input.length;
		var key;
		var value;

		for ( ; inputIndex < inputLength; inputIndex++ ) {
			for ( key in input[ inputIndex ] ) {
				value = input[ inputIndex ][ key ];
				if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

					// Clone objects
					if ( $.isPlainObject( value ) ) {
						target[ key ] = $.isPlainObject( target[ key ] ) ?
							$.widget.extend( {}, target[ key ], value ) :

							// Don't extend strings, arrays, etc. with objects
							$.widget.extend( {}, value );

					// Copy everything else by reference
					} else {
						target[ key ] = value;
					}
				}
			}
		}
		return target;
	};

	$.widget.bridge = function( name, object ) {
		var fullName = object.prototype.widgetFullName || name;
		$.fn[ name ] = function( options ) {
			var isMethodCall = typeof options === "string";
			var args = widgetSlice.call( arguments, 1 );
			var returnValue = this;

			if ( isMethodCall ) {

				// If this is an empty collection, we need to have the instance method
				// return undefined instead of the jQuery instance
				if ( !this.length && options === "instance" ) {
					returnValue = undefined;
				} else {
					this.each( function() {
						var methodValue;
						var instance = $.data( this, fullName );

						if ( options === "instance" ) {
							returnValue = instance;
							return false;
						}

						if ( !instance ) {
							return $.error( "cannot call methods on " + name +
								" prior to initialization; " +
								"attempted to call method '" + options + "'" );
						}

						if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
							return $.error( "no such method '" + options + "' for " + name +
								" widget instance" );
						}

						methodValue = instance[ options ].apply( instance, args );

						if ( methodValue !== instance && methodValue !== undefined ) {
							returnValue = methodValue && methodValue.jquery ?
								returnValue.pushStack( methodValue.get() ) :
								methodValue;
							return false;
						}
					} );
				}
			} else {

				// Allow multiple hashes to be passed on init
				if ( args.length ) {
					options = $.widget.extend.apply( null, [ options ].concat( args ) );
				}

				this.each( function() {
					var instance = $.data( this, fullName );
					if ( instance ) {
						instance.option( options || {} );
						if ( instance._init ) {
							instance._init();
						}
					} else {
						$.data( this, fullName, new object( options, this ) );
					}
				} );
			}

			return returnValue;
		};
	};

	$.Widget = function( /* options, element */ ) {};
	$.Widget._childConstructors = [];

	$.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",

		options: {
			classes: {},
			disabled: false,

			// Callbacks
			create: null
		},

		_createWidget: function( options, element ) {
			element = $( element || this.defaultElement || this )[ 0 ];
			this.element = $( element );
			this.uuid = widgetUuid++;
			this.eventNamespace = "." + this.widgetName + this.uuid;

			this.bindings = $();
			this.hoverable = $();
			this.focusable = $();
			this.classesElementLookup = {};

			if ( element !== this ) {
				$.data( element, this.widgetFullName, this );
				this._on( true, this.element, {
					remove: function( event ) {
						if ( event.target === element ) {
							this.destroy();
						}
					}
				} );
				this.document = $( element.style ?

					// Element within the document
					element.ownerDocument :

					// Element is window or document
					element.document || element );
				this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
			}

			this.options = $.widget.extend( {},
				this.options,
				this._getCreateOptions(),
				options );

			this._create();

			if ( this.options.disabled ) {
				this._setOptionDisabled( this.options.disabled );
			}

			this._trigger( "create", null, this._getCreateEventData() );
			this._init();
		},

		_getCreateOptions: function() {
			return {};
		},

		_getCreateEventData: $.noop,

		_create: $.noop,

		_init: $.noop,

		destroy: function() {
			var that = this;

			this._destroy();
			$.each( this.classesElementLookup, function( key, value ) {
				that._removeClass( value, key );
			} );

			// We can probably remove the unbind calls in 2.0
			// all event bindings should go through this._on()
			this.element
				.off( this.eventNamespace )
				.removeData( this.widgetFullName );
			this.widget()
				.off( this.eventNamespace )
				.removeAttr( "aria-disabled" );

			// Clean up events and states
			this.bindings.off( this.eventNamespace );
		},

		_destroy: $.noop,

		widget: function() {
			return this.element;
		},

		option: function( key, value ) {
			var options = key;
			var parts;
			var curOption;
			var i;

			if ( arguments.length === 0 ) {

				// Don't return a reference to the internal hash
				return $.widget.extend( {}, this.options );
			}

			if ( typeof key === "string" ) {

				// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
				options = {};
				parts = key.split( "." );
				key = parts.shift();
				if ( parts.length ) {
					curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
					for ( i = 0; i < parts.length - 1; i++ ) {
						curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
						curOption = curOption[ parts[ i ] ];
					}
					key = parts.pop();
					if ( arguments.length === 1 ) {
						return curOption[ key ] === undefined ? null : curOption[ key ];
					}
					curOption[ key ] = value;
				} else {
					if ( arguments.length === 1 ) {
						return this.options[ key ] === undefined ? null : this.options[ key ];
					}
					options[ key ] = value;
				}
			}

			this._setOptions( options );

			return this;
		},

		_setOptions: function( options ) {
			var key;

			for ( key in options ) {
				this._setOption( key, options[ key ] );
			}

			return this;
		},

		_setOption: function( key, value ) {
			if ( key === "classes" ) {
				this._setOptionClasses( value );
			}

			this.options[ key ] = value;

			if ( key === "disabled" ) {
				this._setOptionDisabled( value );
			}

			return this;
		},

		_setOptionClasses: function( value ) {
			var classKey, elements, currentElements;

			for ( classKey in value ) {
				currentElements = this.classesElementLookup[ classKey ];
				if ( value[ classKey ] === this.options.classes[ classKey ] ||
						!currentElements ||
						!currentElements.length ) {
					continue;
				}

				// We are doing this to create a new jQuery object because the _removeClass() call
				// on the next line is going to destroy the reference to the current elements being
				// tracked. We need to save a copy of this collection so that we can add the new classes
				// below.
				elements = $( currentElements.get() );
				this._removeClass( currentElements, classKey );

				// We don't use _addClass() here, because that uses this.options.classes
				// for generating the string of classes. We want to use the value passed in from
				// _setOption(), this is the new value of the classes option which was passed to
				// _setOption(). We pass this value directly to _classes().
				elements.addClass( this._classes( {
					element: elements,
					keys: classKey,
					classes: value,
					add: true
				} ) );
			}
		},

		_setOptionDisabled: function( value ) {
			this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

			// If the widget is becoming disabled, then nothing is interactive
			if ( value ) {
				this._removeClass( this.hoverable, null, "ui-state-hover" );
				this._removeClass( this.focusable, null, "ui-state-focus" );
			}
		},

		enable: function() {
			return this._setOptions( { disabled: false } );
		},

		disable: function() {
			return this._setOptions( { disabled: true } );
		},

		_classes: function( options ) {
			var full = [];
			var that = this;

			options = $.extend( {
				element: this.element,
				classes: this.options.classes || {}
			}, options );

			function processClassString( classes, checkOption ) {
				var current, i;
				for ( i = 0; i < classes.length; i++ ) {
					current = that.classesElementLookup[ classes[ i ] ] || $();
					if ( options.add ) {
						current = $( $.unique( current.get().concat( options.element.get() ) ) );
					} else {
						current = $( current.not( options.element ).get() );
					}
					that.classesElementLookup[ classes[ i ] ] = current;
					full.push( classes[ i ] );
					if ( checkOption && options.classes[ classes[ i ] ] ) {
						full.push( options.classes[ classes[ i ] ] );
					}
				}
			}

			this._on( options.element, {
				"remove": "_untrackClassesElement"
			} );

			if ( options.keys ) {
				processClassString( options.keys.match( /\S+/g ) || [], true );
			}
			if ( options.extra ) {
				processClassString( options.extra.match( /\S+/g ) || [] );
			}

			return full.join( " " );
		},

		_untrackClassesElement: function( event ) {
			var that = this;
			$.each( that.classesElementLookup, function( key, value ) {
				if ( $.inArray( event.target, value ) !== -1 ) {
					that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
				}
			} );
		},

		_removeClass: function( element, keys, extra ) {
			return this._toggleClass( element, keys, extra, false );
		},

		_addClass: function( element, keys, extra ) {
			return this._toggleClass( element, keys, extra, true );
		},

		_toggleClass: function( element, keys, extra, add ) {
			add = ( typeof add === "boolean" ) ? add : extra;
			var shift = ( typeof element === "string" || element === null ),
				options = {
					extra: shift ? keys : extra,
					keys: shift ? element : keys,
					element: shift ? this.element : element,
					add: add
				};
			options.element.toggleClass( this._classes( options ), add );
			return this;
		},

		_on: function( suppressDisabledCheck, element, handlers ) {
			var delegateElement;
			var instance = this;

			// No suppressDisabledCheck flag, shuffle arguments
			if ( typeof suppressDisabledCheck !== "boolean" ) {
				handlers = element;
				element = suppressDisabledCheck;
				suppressDisabledCheck = false;
			}

			// No element argument, shuffle and use this.element
			if ( !handlers ) {
				handlers = element;
				element = this.element;
				delegateElement = this.widget();
			} else {
				element = delegateElement = $( element );
				this.bindings = this.bindings.add( element );
			}

			$.each( handlers, function( event, handler ) {
				function handlerProxy() {

					// Allow widgets to customize the disabled handling
					// - disabled as an array instead of boolean
					// - disabled class as method for disabling individual parts
					if ( !suppressDisabledCheck &&
							( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
						return;
					}
					return ( typeof handler === "string" ? instance[ handler ] : handler )
						.apply( instance, arguments );
				}

				// Copy the guid so direct unbinding works
				if ( typeof handler !== "string" ) {
					handlerProxy.guid = handler.guid =
						handler.guid || handlerProxy.guid || $.guid++;
				}

				var match = event.match( /^([\w:-]*)\s*(.*)$/ );
				var eventName = match[ 1 ] + instance.eventNamespace;
				var selector = match[ 2 ];

				if ( selector ) {
					delegateElement.on( eventName, selector, handlerProxy );
				} else {
					element.on( eventName, handlerProxy );
				}
			} );
		},

		_off: function( element, eventName ) {
			eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
				this.eventNamespace;
			element.off( eventName ).off( eventName );

			// Clear the stack to avoid memory leaks (#10056)
			this.bindings = $( this.bindings.not( element ).get() );
			this.focusable = $( this.focusable.not( element ).get() );
			this.hoverable = $( this.hoverable.not( element ).get() );
		},

		_delay: function( handler, delay ) {
			function handlerProxy() {
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}
			var instance = this;
			return setTimeout( handlerProxy, delay || 0 );
		},

		_hoverable: function( element ) {
			this.hoverable = this.hoverable.add( element );
			this._on( element, {
				mouseenter: function( event ) {
					this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
				},
				mouseleave: function( event ) {
					this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
				}
			} );
		},

		_focusable: function( element ) {
			this.focusable = this.focusable.add( element );
			this._on( element, {
				focusin: function( event ) {
					this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
				},
				focusout: function( event ) {
					this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
				}
			} );
		},

		_trigger: function( type, event, data ) {
			var prop, orig;
			var callback = this.options[ type ];

			data = data || {};
			event = $.Event( event );
			event.type = ( type === this.widgetEventPrefix ?
				type :
				this.widgetEventPrefix + type ).toLowerCase();

			// The original event may come from any element
			// so we need to reset the target on the new event
			event.target = this.element[ 0 ];

			// Copy original event properties over to the new event
			orig = event.originalEvent;
			if ( orig ) {
				for ( prop in orig ) {
					if ( !( prop in event ) ) {
						event[ prop ] = orig[ prop ];
					}
				}
			}

			this.element.trigger( event, data );
			return !( $.isFunction( callback ) &&
				callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
				event.isDefaultPrevented() );
		}
	};

	$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
		$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
			if ( typeof options === "string" ) {
				options = { effect: options };
			}

			var hasOptions;
			var effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;

			options = options || {};
			if ( typeof options === "number" ) {
				options = { duration: options };
			}

			hasOptions = !$.isEmptyObject( options );
			options.complete = callback;

			if ( options.delay ) {
				element.delay( options.delay );
			}

			if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
				element[ method ]( options );
			} else if ( effectName !== method && element[ effectName ] ) {
				element[ effectName ]( options.duration, options.easing, callback );
			} else {
				element.queue( function( next ) {
					$( this )[ method ]();
					if ( callback ) {
						callback.call( element[ 0 ] );
					}
					next();
				} );
			}
		};
	} );

	return $.widget;

	} ) );


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery UI Tabs 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Tabs
	//>>group: Widgets
	//>>description: Transforms a set of container elements into a tab structure.
	//>>docs: http://api.jqueryui.com/tabs/
	//>>demos: http://jqueryui.com/tabs/
	//>>css.structure: ../../themes/base/core.css
	//>>css.structure: ../../themes/base/tabs.css
	//>>css.theme: ../../themes/base/theme.css

	( function( factory ) {
		if ( true ) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(2),
				__webpack_require__(23),
				__webpack_require__(19),
				__webpack_require__(24),
				__webpack_require__(20),
				__webpack_require__(18),
				__webpack_require__(21)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {

			// Browser globals
			factory( jQuery );
		}
	}( function( $ ) {

	$.widget( "ui.tabs", {
		version: "1.12.1",
		delay: 300,
		options: {
			active: null,
			classes: {
				"ui-tabs": "ui-corner-all",
				"ui-tabs-nav": "ui-corner-all",
				"ui-tabs-panel": "ui-corner-bottom",
				"ui-tabs-tab": "ui-corner-top"
			},
			collapsible: false,
			event: "click",
			heightStyle: "content",
			hide: null,
			show: null,

			// Callbacks
			activate: null,
			beforeActivate: null,
			beforeLoad: null,
			load: null
		},

		_isLocal: ( function() {
			var rhash = /#.*$/;

			return function( anchor ) {
				var anchorUrl, locationUrl;

				anchorUrl = anchor.href.replace( rhash, "" );
				locationUrl = location.href.replace( rhash, "" );

				// Decoding may throw an error if the URL isn't UTF-8 (#9518)
				try {
					anchorUrl = decodeURIComponent( anchorUrl );
				} catch ( error ) {}
				try {
					locationUrl = decodeURIComponent( locationUrl );
				} catch ( error ) {}

				return anchor.hash.length > 1 && anchorUrl === locationUrl;
			};
		} )(),

		_create: function() {
			var that = this,
				options = this.options;

			this.running = false;

			this._addClass( "ui-tabs", "ui-widget ui-widget-content" );
			this._toggleClass( "ui-tabs-collapsible", null, options.collapsible );

			this._processTabs();
			options.active = this._initialActive();

			// Take disabling tabs via class attribute from HTML
			// into account and update option properly.
			if ( $.isArray( options.disabled ) ) {
				options.disabled = $.unique( options.disabled.concat(
					$.map( this.tabs.filter( ".ui-state-disabled" ), function( li ) {
						return that.tabs.index( li );
					} )
				) ).sort();
			}

			// Check for length avoids error when initializing empty list
			if ( this.options.active !== false && this.anchors.length ) {
				this.active = this._findActive( options.active );
			} else {
				this.active = $();
			}

			this._refresh();

			if ( this.active.length ) {
				this.load( options.active );
			}
		},

		_initialActive: function() {
			var active = this.options.active,
				collapsible = this.options.collapsible,
				locationHash = location.hash.substring( 1 );

			if ( active === null ) {

				// check the fragment identifier in the URL
				if ( locationHash ) {
					this.tabs.each( function( i, tab ) {
						if ( $( tab ).attr( "aria-controls" ) === locationHash ) {
							active = i;
							return false;
						}
					} );
				}

				// Check for a tab marked active via a class
				if ( active === null ) {
					active = this.tabs.index( this.tabs.filter( ".ui-tabs-active" ) );
				}

				// No active tab, set to false
				if ( active === null || active === -1 ) {
					active = this.tabs.length ? 0 : false;
				}
			}

			// Handle numbers: negative, out of range
			if ( active !== false ) {
				active = this.tabs.index( this.tabs.eq( active ) );
				if ( active === -1 ) {
					active = collapsible ? false : 0;
				}
			}

			// Don't allow collapsible: false and active: false
			if ( !collapsible && active === false && this.anchors.length ) {
				active = 0;
			}

			return active;
		},

		_getCreateEventData: function() {
			return {
				tab: this.active,
				panel: !this.active.length ? $() : this._getPanelForTab( this.active )
			};
		},

		_tabKeydown: function( event ) {
			var focusedTab = $( $.ui.safeActiveElement( this.document[ 0 ] ) ).closest( "li" ),
				selectedIndex = this.tabs.index( focusedTab ),
				goingForward = true;

			if ( this._handlePageNav( event ) ) {
				return;
			}

			switch ( event.keyCode ) {
			case $.ui.keyCode.RIGHT:
			case $.ui.keyCode.DOWN:
				selectedIndex++;
				break;
			case $.ui.keyCode.UP:
			case $.ui.keyCode.LEFT:
				goingForward = false;
				selectedIndex--;
				break;
			case $.ui.keyCode.END:
				selectedIndex = this.anchors.length - 1;
				break;
			case $.ui.keyCode.HOME:
				selectedIndex = 0;
				break;
			case $.ui.keyCode.SPACE:

				// Activate only, no collapsing
				event.preventDefault();
				clearTimeout( this.activating );
				this._activate( selectedIndex );
				return;
			case $.ui.keyCode.ENTER:

				// Toggle (cancel delayed activation, allow collapsing)
				event.preventDefault();
				clearTimeout( this.activating );

				// Determine if we should collapse or activate
				this._activate( selectedIndex === this.options.active ? false : selectedIndex );
				return;
			default:
				return;
			}

			// Focus the appropriate tab, based on which key was pressed
			event.preventDefault();
			clearTimeout( this.activating );
			selectedIndex = this._focusNextTab( selectedIndex, goingForward );

			// Navigating with control/command key will prevent automatic activation
			if ( !event.ctrlKey && !event.metaKey ) {

				// Update aria-selected immediately so that AT think the tab is already selected.
				// Otherwise AT may confuse the user by stating that they need to activate the tab,
				// but the tab will already be activated by the time the announcement finishes.
				focusedTab.attr( "aria-selected", "false" );
				this.tabs.eq( selectedIndex ).attr( "aria-selected", "true" );

				this.activating = this._delay( function() {
					this.option( "active", selectedIndex );
				}, this.delay );
			}
		},

		_panelKeydown: function( event ) {
			if ( this._handlePageNav( event ) ) {
				return;
			}

			// Ctrl+up moves focus to the current tab
			if ( event.ctrlKey && event.keyCode === $.ui.keyCode.UP ) {
				event.preventDefault();
				this.active.trigger( "focus" );
			}
		},

		// Alt+page up/down moves focus to the previous/next tab (and activates)
		_handlePageNav: function( event ) {
			if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP ) {
				this._activate( this._focusNextTab( this.options.active - 1, false ) );
				return true;
			}
			if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN ) {
				this._activate( this._focusNextTab( this.options.active + 1, true ) );
				return true;
			}
		},

		_findNextTab: function( index, goingForward ) {
			var lastTabIndex = this.tabs.length - 1;

			function constrain() {
				if ( index > lastTabIndex ) {
					index = 0;
				}
				if ( index < 0 ) {
					index = lastTabIndex;
				}
				return index;
			}

			while ( $.inArray( constrain(), this.options.disabled ) !== -1 ) {
				index = goingForward ? index + 1 : index - 1;
			}

			return index;
		},

		_focusNextTab: function( index, goingForward ) {
			index = this._findNextTab( index, goingForward );
			this.tabs.eq( index ).trigger( "focus" );
			return index;
		},

		_setOption: function( key, value ) {
			if ( key === "active" ) {

				// _activate() will handle invalid values and update this.options
				this._activate( value );
				return;
			}

			this._super( key, value );

			if ( key === "collapsible" ) {
				this._toggleClass( "ui-tabs-collapsible", null, value );

				// Setting collapsible: false while collapsed; open first panel
				if ( !value && this.options.active === false ) {
					this._activate( 0 );
				}
			}

			if ( key === "event" ) {
				this._setupEvents( value );
			}

			if ( key === "heightStyle" ) {
				this._setupHeightStyle( value );
			}
		},

		_sanitizeSelector: function( hash ) {
			return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
		},

		refresh: function() {
			var options = this.options,
				lis = this.tablist.children( ":has(a[href])" );

			// Get disabled tabs from class attribute from HTML
			// this will get converted to a boolean if needed in _refresh()
			options.disabled = $.map( lis.filter( ".ui-state-disabled" ), function( tab ) {
				return lis.index( tab );
			} );

			this._processTabs();

			// Was collapsed or no tabs
			if ( options.active === false || !this.anchors.length ) {
				options.active = false;
				this.active = $();

			// was active, but active tab is gone
			} else if ( this.active.length && !$.contains( this.tablist[ 0 ], this.active[ 0 ] ) ) {

				// all remaining tabs are disabled
				if ( this.tabs.length === options.disabled.length ) {
					options.active = false;
					this.active = $();

				// activate previous tab
				} else {
					this._activate( this._findNextTab( Math.max( 0, options.active - 1 ), false ) );
				}

			// was active, active tab still exists
			} else {

				// make sure active index is correct
				options.active = this.tabs.index( this.active );
			}

			this._refresh();
		},

		_refresh: function() {
			this._setOptionDisabled( this.options.disabled );
			this._setupEvents( this.options.event );
			this._setupHeightStyle( this.options.heightStyle );

			this.tabs.not( this.active ).attr( {
				"aria-selected": "false",
				"aria-expanded": "false",
				tabIndex: -1
			} );
			this.panels.not( this._getPanelForTab( this.active ) )
				.hide()
				.attr( {
					"aria-hidden": "true"
				} );

			// Make sure one tab is in the tab order
			if ( !this.active.length ) {
				this.tabs.eq( 0 ).attr( "tabIndex", 0 );
			} else {
				this.active
					.attr( {
						"aria-selected": "true",
						"aria-expanded": "true",
						tabIndex: 0
					} );
				this._addClass( this.active, "ui-tabs-active", "ui-state-active" );
				this._getPanelForTab( this.active )
					.show()
					.attr( {
						"aria-hidden": "false"
					} );
			}
		},

		_processTabs: function() {
			var that = this,
				prevTabs = this.tabs,
				prevAnchors = this.anchors,
				prevPanels = this.panels;

			this.tablist = this._getList().attr( "role", "tablist" );
			this._addClass( this.tablist, "ui-tabs-nav",
				"ui-helper-reset ui-helper-clearfix ui-widget-header" );

			// Prevent users from focusing disabled tabs via click
			this.tablist
				.on( "mousedown" + this.eventNamespace, "> li", function( event ) {
					if ( $( this ).is( ".ui-state-disabled" ) ) {
						event.preventDefault();
					}
				} )

				// Support: IE <9
				// Preventing the default action in mousedown doesn't prevent IE
				// from focusing the element, so if the anchor gets focused, blur.
				// We don't have to worry about focusing the previously focused
				// element since clicking on a non-focusable element should focus
				// the body anyway.
				.on( "focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
					if ( $( this ).closest( "li" ).is( ".ui-state-disabled" ) ) {
						this.blur();
					}
				} );

			this.tabs = this.tablist.find( "> li:has(a[href])" )
				.attr( {
					role: "tab",
					tabIndex: -1
				} );
			this._addClass( this.tabs, "ui-tabs-tab", "ui-state-default" );

			this.anchors = this.tabs.map( function() {
				return $( "a", this )[ 0 ];
			} )
				.attr( {
					role: "presentation",
					tabIndex: -1
				} );
			this._addClass( this.anchors, "ui-tabs-anchor" );

			this.panels = $();

			this.anchors.each( function( i, anchor ) {
				var selector, panel, panelId,
					anchorId = $( anchor ).uniqueId().attr( "id" ),
					tab = $( anchor ).closest( "li" ),
					originalAriaControls = tab.attr( "aria-controls" );

				// Inline tab
				if ( that._isLocal( anchor ) ) {
					selector = anchor.hash;
					panelId = selector.substring( 1 );
					panel = that.element.find( that._sanitizeSelector( selector ) );

				// remote tab
				} else {

					// If the tab doesn't already have aria-controls,
					// generate an id by using a throw-away element
					panelId = tab.attr( "aria-controls" ) || $( {} ).uniqueId()[ 0 ].id;
					selector = "#" + panelId;
					panel = that.element.find( selector );
					if ( !panel.length ) {
						panel = that._createPanel( panelId );
						panel.insertAfter( that.panels[ i - 1 ] || that.tablist );
					}
					panel.attr( "aria-live", "polite" );
				}

				if ( panel.length ) {
					that.panels = that.panels.add( panel );
				}
				if ( originalAriaControls ) {
					tab.data( "ui-tabs-aria-controls", originalAriaControls );
				}
				tab.attr( {
					"aria-controls": panelId,
					"aria-labelledby": anchorId
				} );
				panel.attr( "aria-labelledby", anchorId );
			} );

			this.panels.attr( "role", "tabpanel" );
			this._addClass( this.panels, "ui-tabs-panel", "ui-widget-content" );

			// Avoid memory leaks (#10056)
			if ( prevTabs ) {
				this._off( prevTabs.not( this.tabs ) );
				this._off( prevAnchors.not( this.anchors ) );
				this._off( prevPanels.not( this.panels ) );
			}
		},

		// Allow overriding how to find the list for rare usage scenarios (#7715)
		_getList: function() {
			return this.tablist || this.element.find( "ol, ul" ).eq( 0 );
		},

		_createPanel: function( id ) {
			return $( "<div>" )
				.attr( "id", id )
				.data( "ui-tabs-destroy", true );
		},

		_setOptionDisabled: function( disabled ) {
			var currentItem, li, i;

			if ( $.isArray( disabled ) ) {
				if ( !disabled.length ) {
					disabled = false;
				} else if ( disabled.length === this.anchors.length ) {
					disabled = true;
				}
			}

			// Disable tabs
			for ( i = 0; ( li = this.tabs[ i ] ); i++ ) {
				currentItem = $( li );
				if ( disabled === true || $.inArray( i, disabled ) !== -1 ) {
					currentItem.attr( "aria-disabled", "true" );
					this._addClass( currentItem, null, "ui-state-disabled" );
				} else {
					currentItem.removeAttr( "aria-disabled" );
					this._removeClass( currentItem, null, "ui-state-disabled" );
				}
			}

			this.options.disabled = disabled;

			this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null,
				disabled === true );
		},

		_setupEvents: function( event ) {
			var events = {};
			if ( event ) {
				$.each( event.split( " " ), function( index, eventName ) {
					events[ eventName ] = "_eventHandler";
				} );
			}

			this._off( this.anchors.add( this.tabs ).add( this.panels ) );

			// Always prevent the default action, even when disabled
			this._on( true, this.anchors, {
				click: function( event ) {
					event.preventDefault();
				}
			} );
			this._on( this.anchors, events );
			this._on( this.tabs, { keydown: "_tabKeydown" } );
			this._on( this.panels, { keydown: "_panelKeydown" } );

			this._focusable( this.tabs );
			this._hoverable( this.tabs );
		},

		_setupHeightStyle: function( heightStyle ) {
			var maxHeight,
				parent = this.element.parent();

			if ( heightStyle === "fill" ) {
				maxHeight = parent.height();
				maxHeight -= this.element.outerHeight() - this.element.height();

				this.element.siblings( ":visible" ).each( function() {
					var elem = $( this ),
						position = elem.css( "position" );

					if ( position === "absolute" || position === "fixed" ) {
						return;
					}
					maxHeight -= elem.outerHeight( true );
				} );

				this.element.children().not( this.panels ).each( function() {
					maxHeight -= $( this ).outerHeight( true );
				} );

				this.panels.each( function() {
					$( this ).height( Math.max( 0, maxHeight -
						$( this ).innerHeight() + $( this ).height() ) );
				} )
					.css( "overflow", "auto" );
			} else if ( heightStyle === "auto" ) {
				maxHeight = 0;
				this.panels.each( function() {
					maxHeight = Math.max( maxHeight, $( this ).height( "" ).height() );
				} ).height( maxHeight );
			}
		},

		_eventHandler: function( event ) {
			var options = this.options,
				active = this.active,
				anchor = $( event.currentTarget ),
				tab = anchor.closest( "li" ),
				clickedIsActive = tab[ 0 ] === active[ 0 ],
				collapsing = clickedIsActive && options.collapsible,
				toShow = collapsing ? $() : this._getPanelForTab( tab ),
				toHide = !active.length ? $() : this._getPanelForTab( active ),
				eventData = {
					oldTab: active,
					oldPanel: toHide,
					newTab: collapsing ? $() : tab,
					newPanel: toShow
				};

			event.preventDefault();

			if ( tab.hasClass( "ui-state-disabled" ) ||

					// tab is already loading
					tab.hasClass( "ui-tabs-loading" ) ||

					// can't switch durning an animation
					this.running ||

					// click on active header, but not collapsible
					( clickedIsActive && !options.collapsible ) ||

					// allow canceling activation
					( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
				return;
			}

			options.active = collapsing ? false : this.tabs.index( tab );

			this.active = clickedIsActive ? $() : tab;
			if ( this.xhr ) {
				this.xhr.abort();
			}

			if ( !toHide.length && !toShow.length ) {
				$.error( "jQuery UI Tabs: Mismatching fragment identifier." );
			}

			if ( toShow.length ) {
				this.load( this.tabs.index( tab ), event );
			}
			this._toggle( event, eventData );
		},

		// Handles show/hide for selecting tabs
		_toggle: function( event, eventData ) {
			var that = this,
				toShow = eventData.newPanel,
				toHide = eventData.oldPanel;

			this.running = true;

			function complete() {
				that.running = false;
				that._trigger( "activate", event, eventData );
			}

			function show() {
				that._addClass( eventData.newTab.closest( "li" ), "ui-tabs-active", "ui-state-active" );

				if ( toShow.length && that.options.show ) {
					that._show( toShow, that.options.show, complete );
				} else {
					toShow.show();
					complete();
				}
			}

			// Start out by hiding, then showing, then completing
			if ( toHide.length && this.options.hide ) {
				this._hide( toHide, this.options.hide, function() {
					that._removeClass( eventData.oldTab.closest( "li" ),
						"ui-tabs-active", "ui-state-active" );
					show();
				} );
			} else {
				this._removeClass( eventData.oldTab.closest( "li" ),
					"ui-tabs-active", "ui-state-active" );
				toHide.hide();
				show();
			}

			toHide.attr( "aria-hidden", "true" );
			eventData.oldTab.attr( {
				"aria-selected": "false",
				"aria-expanded": "false"
			} );

			// If we're switching tabs, remove the old tab from the tab order.
			// If we're opening from collapsed state, remove the previous tab from the tab order.
			// If we're collapsing, then keep the collapsing tab in the tab order.
			if ( toShow.length && toHide.length ) {
				eventData.oldTab.attr( "tabIndex", -1 );
			} else if ( toShow.length ) {
				this.tabs.filter( function() {
					return $( this ).attr( "tabIndex" ) === 0;
				} )
					.attr( "tabIndex", -1 );
			}

			toShow.attr( "aria-hidden", "false" );
			eventData.newTab.attr( {
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			} );
		},

		_activate: function( index ) {
			var anchor,
				active = this._findActive( index );

			// Trying to activate the already active panel
			if ( active[ 0 ] === this.active[ 0 ] ) {
				return;
			}

			// Trying to collapse, simulate a click on the current active header
			if ( !active.length ) {
				active = this.active;
			}

			anchor = active.find( ".ui-tabs-anchor" )[ 0 ];
			this._eventHandler( {
				target: anchor,
				currentTarget: anchor,
				preventDefault: $.noop
			} );
		},

		_findActive: function( index ) {
			return index === false ? $() : this.tabs.eq( index );
		},

		_getIndex: function( index ) {

			// meta-function to give users option to provide a href string instead of a numerical index.
			if ( typeof index === "string" ) {
				index = this.anchors.index( this.anchors.filter( "[href$='" +
					$.ui.escapeSelector( index ) + "']" ) );
			}

			return index;
		},

		_destroy: function() {
			if ( this.xhr ) {
				this.xhr.abort();
			}

			this.tablist
				.removeAttr( "role" )
				.off( this.eventNamespace );

			this.anchors
				.removeAttr( "role tabIndex" )
				.removeUniqueId();

			this.tabs.add( this.panels ).each( function() {
				if ( $.data( this, "ui-tabs-destroy" ) ) {
					$( this ).remove();
				} else {
					$( this ).removeAttr( "role tabIndex " +
						"aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded" );
				}
			} );

			this.tabs.each( function() {
				var li = $( this ),
					prev = li.data( "ui-tabs-aria-controls" );
				if ( prev ) {
					li
						.attr( "aria-controls", prev )
						.removeData( "ui-tabs-aria-controls" );
				} else {
					li.removeAttr( "aria-controls" );
				}
			} );

			this.panels.show();

			if ( this.options.heightStyle !== "content" ) {
				this.panels.css( "height", "" );
			}
		},

		enable: function( index ) {
			var disabled = this.options.disabled;
			if ( disabled === false ) {
				return;
			}

			if ( index === undefined ) {
				disabled = false;
			} else {
				index = this._getIndex( index );
				if ( $.isArray( disabled ) ) {
					disabled = $.map( disabled, function( num ) {
						return num !== index ? num : null;
					} );
				} else {
					disabled = $.map( this.tabs, function( li, num ) {
						return num !== index ? num : null;
					} );
				}
			}
			this._setOptionDisabled( disabled );
		},

		disable: function( index ) {
			var disabled = this.options.disabled;
			if ( disabled === true ) {
				return;
			}

			if ( index === undefined ) {
				disabled = true;
			} else {
				index = this._getIndex( index );
				if ( $.inArray( index, disabled ) !== -1 ) {
					return;
				}
				if ( $.isArray( disabled ) ) {
					disabled = $.merge( [ index ], disabled ).sort();
				} else {
					disabled = [ index ];
				}
			}
			this._setOptionDisabled( disabled );
		},

		load: function( index, event ) {
			index = this._getIndex( index );
			var that = this,
				tab = this.tabs.eq( index ),
				anchor = tab.find( ".ui-tabs-anchor" ),
				panel = this._getPanelForTab( tab ),
				eventData = {
					tab: tab,
					panel: panel
				},
				complete = function( jqXHR, status ) {
					if ( status === "abort" ) {
						that.panels.stop( false, true );
					}

					that._removeClass( tab, "ui-tabs-loading" );
					panel.removeAttr( "aria-busy" );

					if ( jqXHR === that.xhr ) {
						delete that.xhr;
					}
				};

			// Not remote
			if ( this._isLocal( anchor[ 0 ] ) ) {
				return;
			}

			this.xhr = $.ajax( this._ajaxSettings( anchor, event, eventData ) );

			// Support: jQuery <1.8
			// jQuery <1.8 returns false if the request is canceled in beforeSend,
			// but as of 1.8, $.ajax() always returns a jqXHR object.
			if ( this.xhr && this.xhr.statusText !== "canceled" ) {
				this._addClass( tab, "ui-tabs-loading" );
				panel.attr( "aria-busy", "true" );

				this.xhr
					.done( function( response, status, jqXHR ) {

						// support: jQuery <1.8
						// http://bugs.jquery.com/ticket/11778
						setTimeout( function() {
							panel.html( response );
							that._trigger( "load", event, eventData );

							complete( jqXHR, status );
						}, 1 );
					} )
					.fail( function( jqXHR, status ) {

						// support: jQuery <1.8
						// http://bugs.jquery.com/ticket/11778
						setTimeout( function() {
							complete( jqXHR, status );
						}, 1 );
					} );
			}
		},

		_ajaxSettings: function( anchor, event, eventData ) {
			var that = this;
			return {

				// Support: IE <11 only
				// Strip any hash that exists to prevent errors with the Ajax request
				url: anchor.attr( "href" ).replace( /#.*$/, "" ),
				beforeSend: function( jqXHR, settings ) {
					return that._trigger( "beforeLoad", event,
						$.extend( { jqXHR: jqXHR, ajaxSettings: settings }, eventData ) );
				}
			};
		},

		_getPanelForTab: function( tab ) {
			var id = $( tab ).attr( "aria-controls" );
			return this.element.find( this._sanitizeSelector( "#" + id ) );
		}
	} );

	// DEPRECATED
	// TODO: Switch return back to widget declaration at top of file when this is removed
	if ( $.uiBackCompat !== false ) {

		// Backcompat for ui-tab class (now ui-tabs-tab)
		$.widget( "ui.tabs", $.ui.tabs, {
			_processTabs: function() {
				this._superApply( arguments );
				this._addClass( this.tabs, "ui-tab" );
			}
		} );
	}

	return $.ui.tabs;

	} ) );


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
		if ( true ) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(18) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {

			// Browser globals
			factory( jQuery );
		}
	} ( function( $ ) {

	// Internal use only
	return $.ui.escapeSelector = ( function() {
		var selectorEscape = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
		return function( selector ) {
			return selector.replace( selectorEscape, "\\$1" );
		};
	} )();

	} ) );


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
		if ( true ) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(18) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {

			// Browser globals
			factory( jQuery );
		}
	} ( function( $ ) {
	return $.ui.safeActiveElement = function( document ) {
		var activeElement;

		// Support: IE 9 only
		// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
		try {
			activeElement = document.activeElement;
		} catch ( error ) {
			activeElement = document.body;
		}

		// Support: IE 9 - 11 only
		// IE may return null instead of an element
		// Interestingly, this only seems to occur when NOT in an iframe
		if ( !activeElement ) {
			activeElement = document.body;
		}

		// Support: IE 11 only
		// IE11 returns a seemingly empty object in some cases when accessing
		// document.activeElement from an <iframe>
		if ( !activeElement.nodeName ) {
			activeElement = document.body;
		}

		return activeElement;
	};

	} ) );


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery UI Position 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * http://api.jqueryui.com/position/
	 */

	//>>label: Position
	//>>group: Core
	//>>description: Positions elements relative to other elements.
	//>>docs: http://api.jqueryui.com/position/
	//>>demos: http://jqueryui.com/position/

	( function( factory ) {
		if ( true ) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(18) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {

			// Browser globals
			factory( jQuery );
		}
	}( function( $ ) {
	( function() {
	var cachedScrollbarWidth,
		max = Math.max,
		abs = Math.abs,
		rhorizontal = /left|center|right/,
		rvertical = /top|center|bottom/,
		roffset = /[\+\-]\d+(\.[\d]+)?%?/,
		rposition = /^\w+/,
		rpercent = /%$/,
		_position = $.fn.position;

	function getOffsets( offsets, width, height ) {
		return [
			parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
			parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
		];
	}

	function parseCss( element, property ) {
		return parseInt( $.css( element, property ), 10 ) || 0;
	}

	function getDimensions( elem ) {
		var raw = elem[ 0 ];
		if ( raw.nodeType === 9 ) {
			return {
				width: elem.width(),
				height: elem.height(),
				offset: { top: 0, left: 0 }
			};
		}
		if ( $.isWindow( raw ) ) {
			return {
				width: elem.width(),
				height: elem.height(),
				offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
			};
		}
		if ( raw.preventDefault ) {
			return {
				width: 0,
				height: 0,
				offset: { top: raw.pageY, left: raw.pageX }
			};
		}
		return {
			width: elem.outerWidth(),
			height: elem.outerHeight(),
			offset: elem.offset()
		};
	}

	$.position = {
		scrollbarWidth: function() {
			if ( cachedScrollbarWidth !== undefined ) {
				return cachedScrollbarWidth;
			}
			var w1, w2,
				div = $( "<div " +
					"style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" +
					"<div style='height:100px;width:auto;'></div></div>" ),
				innerDiv = div.children()[ 0 ];

			$( "body" ).append( div );
			w1 = innerDiv.offsetWidth;
			div.css( "overflow", "scroll" );

			w2 = innerDiv.offsetWidth;

			if ( w1 === w2 ) {
				w2 = div[ 0 ].clientWidth;
			}

			div.remove();

			return ( cachedScrollbarWidth = w1 - w2 );
		},
		getScrollInfo: function( within ) {
			var overflowX = within.isWindow || within.isDocument ? "" :
					within.element.css( "overflow-x" ),
				overflowY = within.isWindow || within.isDocument ? "" :
					within.element.css( "overflow-y" ),
				hasOverflowX = overflowX === "scroll" ||
					( overflowX === "auto" && within.width < within.element[ 0 ].scrollWidth ),
				hasOverflowY = overflowY === "scroll" ||
					( overflowY === "auto" && within.height < within.element[ 0 ].scrollHeight );
			return {
				width: hasOverflowY ? $.position.scrollbarWidth() : 0,
				height: hasOverflowX ? $.position.scrollbarWidth() : 0
			};
		},
		getWithinInfo: function( element ) {
			var withinElement = $( element || window ),
				isWindow = $.isWindow( withinElement[ 0 ] ),
				isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9,
				hasOffset = !isWindow && !isDocument;
			return {
				element: withinElement,
				isWindow: isWindow,
				isDocument: isDocument,
				offset: hasOffset ? $( element ).offset() : { left: 0, top: 0 },
				scrollLeft: withinElement.scrollLeft(),
				scrollTop: withinElement.scrollTop(),
				width: withinElement.outerWidth(),
				height: withinElement.outerHeight()
			};
		}
	};

	$.fn.position = function( options ) {
		if ( !options || !options.of ) {
			return _position.apply( this, arguments );
		}

		// Make a copy, we don't want to modify arguments
		options = $.extend( {}, options );

		var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
			target = $( options.of ),
			within = $.position.getWithinInfo( options.within ),
			scrollInfo = $.position.getScrollInfo( within ),
			collision = ( options.collision || "flip" ).split( " " ),
			offsets = {};

		dimensions = getDimensions( target );
		if ( target[ 0 ].preventDefault ) {

			// Force left top to allow flipping
			options.at = "left top";
		}
		targetWidth = dimensions.width;
		targetHeight = dimensions.height;
		targetOffset = dimensions.offset;

		// Clone to reuse original targetOffset later
		basePosition = $.extend( {}, targetOffset );

		// Force my and at to have valid horizontal and vertical positions
		// if a value is missing or invalid, it will be converted to center
		$.each( [ "my", "at" ], function() {
			var pos = ( options[ this ] || "" ).split( " " ),
				horizontalOffset,
				verticalOffset;

			if ( pos.length === 1 ) {
				pos = rhorizontal.test( pos[ 0 ] ) ?
					pos.concat( [ "center" ] ) :
					rvertical.test( pos[ 0 ] ) ?
						[ "center" ].concat( pos ) :
						[ "center", "center" ];
			}
			pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
			pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

			// Calculate offsets
			horizontalOffset = roffset.exec( pos[ 0 ] );
			verticalOffset = roffset.exec( pos[ 1 ] );
			offsets[ this ] = [
				horizontalOffset ? horizontalOffset[ 0 ] : 0,
				verticalOffset ? verticalOffset[ 0 ] : 0
			];

			// Reduce to just the positions without the offsets
			options[ this ] = [
				rposition.exec( pos[ 0 ] )[ 0 ],
				rposition.exec( pos[ 1 ] )[ 0 ]
			];
		} );

		// Normalize collision option
		if ( collision.length === 1 ) {
			collision[ 1 ] = collision[ 0 ];
		}

		if ( options.at[ 0 ] === "right" ) {
			basePosition.left += targetWidth;
		} else if ( options.at[ 0 ] === "center" ) {
			basePosition.left += targetWidth / 2;
		}

		if ( options.at[ 1 ] === "bottom" ) {
			basePosition.top += targetHeight;
		} else if ( options.at[ 1 ] === "center" ) {
			basePosition.top += targetHeight / 2;
		}

		atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
		basePosition.left += atOffset[ 0 ];
		basePosition.top += atOffset[ 1 ];

		return this.each( function() {
			var collisionPosition, using,
				elem = $( this ),
				elemWidth = elem.outerWidth(),
				elemHeight = elem.outerHeight(),
				marginLeft = parseCss( this, "marginLeft" ),
				marginTop = parseCss( this, "marginTop" ),
				collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) +
					scrollInfo.width,
				collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) +
					scrollInfo.height,
				position = $.extend( {}, basePosition ),
				myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

			if ( options.my[ 0 ] === "right" ) {
				position.left -= elemWidth;
			} else if ( options.my[ 0 ] === "center" ) {
				position.left -= elemWidth / 2;
			}

			if ( options.my[ 1 ] === "bottom" ) {
				position.top -= elemHeight;
			} else if ( options.my[ 1 ] === "center" ) {
				position.top -= elemHeight / 2;
			}

			position.left += myOffset[ 0 ];
			position.top += myOffset[ 1 ];

			collisionPosition = {
				marginLeft: marginLeft,
				marginTop: marginTop
			};

			$.each( [ "left", "top" ], function( i, dir ) {
				if ( $.ui.position[ collision[ i ] ] ) {
					$.ui.position[ collision[ i ] ][ dir ]( position, {
						targetWidth: targetWidth,
						targetHeight: targetHeight,
						elemWidth: elemWidth,
						elemHeight: elemHeight,
						collisionPosition: collisionPosition,
						collisionWidth: collisionWidth,
						collisionHeight: collisionHeight,
						offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
						my: options.my,
						at: options.at,
						within: within,
						elem: elem
					} );
				}
			} );

			if ( options.using ) {

				// Adds feedback as second argument to using callback, if present
				using = function( props ) {
					var left = targetOffset.left - position.left,
						right = left + targetWidth - elemWidth,
						top = targetOffset.top - position.top,
						bottom = top + targetHeight - elemHeight,
						feedback = {
							target: {
								element: target,
								left: targetOffset.left,
								top: targetOffset.top,
								width: targetWidth,
								height: targetHeight
							},
							element: {
								element: elem,
								left: position.left,
								top: position.top,
								width: elemWidth,
								height: elemHeight
							},
							horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
							vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
						};
					if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
						feedback.horizontal = "center";
					}
					if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
						feedback.vertical = "middle";
					}
					if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
						feedback.important = "horizontal";
					} else {
						feedback.important = "vertical";
					}
					options.using.call( this, props, feedback );
				};
			}

			elem.offset( $.extend( position, { using: using } ) );
		} );
	};

	$.ui.position = {
		fit: {
			left: function( position, data ) {
				var within = data.within,
					withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
					outerWidth = within.width,
					collisionPosLeft = position.left - data.collisionPosition.marginLeft,
					overLeft = withinOffset - collisionPosLeft,
					overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
					newOverRight;

				// Element is wider than within
				if ( data.collisionWidth > outerWidth ) {

					// Element is initially over the left side of within
					if ( overLeft > 0 && overRight <= 0 ) {
						newOverRight = position.left + overLeft + data.collisionWidth - outerWidth -
							withinOffset;
						position.left += overLeft - newOverRight;

					// Element is initially over right side of within
					} else if ( overRight > 0 && overLeft <= 0 ) {
						position.left = withinOffset;

					// Element is initially over both left and right sides of within
					} else {
						if ( overLeft > overRight ) {
							position.left = withinOffset + outerWidth - data.collisionWidth;
						} else {
							position.left = withinOffset;
						}
					}

				// Too far left -> align with left edge
				} else if ( overLeft > 0 ) {
					position.left += overLeft;

				// Too far right -> align with right edge
				} else if ( overRight > 0 ) {
					position.left -= overRight;

				// Adjust based on position and margin
				} else {
					position.left = max( position.left - collisionPosLeft, position.left );
				}
			},
			top: function( position, data ) {
				var within = data.within,
					withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
					outerHeight = data.within.height,
					collisionPosTop = position.top - data.collisionPosition.marginTop,
					overTop = withinOffset - collisionPosTop,
					overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
					newOverBottom;

				// Element is taller than within
				if ( data.collisionHeight > outerHeight ) {

					// Element is initially over the top of within
					if ( overTop > 0 && overBottom <= 0 ) {
						newOverBottom = position.top + overTop + data.collisionHeight - outerHeight -
							withinOffset;
						position.top += overTop - newOverBottom;

					// Element is initially over bottom of within
					} else if ( overBottom > 0 && overTop <= 0 ) {
						position.top = withinOffset;

					// Element is initially over both top and bottom of within
					} else {
						if ( overTop > overBottom ) {
							position.top = withinOffset + outerHeight - data.collisionHeight;
						} else {
							position.top = withinOffset;
						}
					}

				// Too far up -> align with top
				} else if ( overTop > 0 ) {
					position.top += overTop;

				// Too far down -> align with bottom edge
				} else if ( overBottom > 0 ) {
					position.top -= overBottom;

				// Adjust based on position and margin
				} else {
					position.top = max( position.top - collisionPosTop, position.top );
				}
			}
		},
		flip: {
			left: function( position, data ) {
				var within = data.within,
					withinOffset = within.offset.left + within.scrollLeft,
					outerWidth = within.width,
					offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
					collisionPosLeft = position.left - data.collisionPosition.marginLeft,
					overLeft = collisionPosLeft - offsetLeft,
					overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
					myOffset = data.my[ 0 ] === "left" ?
						-data.elemWidth :
						data.my[ 0 ] === "right" ?
							data.elemWidth :
							0,
					atOffset = data.at[ 0 ] === "left" ?
						data.targetWidth :
						data.at[ 0 ] === "right" ?
							-data.targetWidth :
							0,
					offset = -2 * data.offset[ 0 ],
					newOverRight,
					newOverLeft;

				if ( overLeft < 0 ) {
					newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth -
						outerWidth - withinOffset;
					if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
						position.left += myOffset + atOffset + offset;
					}
				} else if ( overRight > 0 ) {
					newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset +
						atOffset + offset - offsetLeft;
					if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
						position.left += myOffset + atOffset + offset;
					}
				}
			},
			top: function( position, data ) {
				var within = data.within,
					withinOffset = within.offset.top + within.scrollTop,
					outerHeight = within.height,
					offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
					collisionPosTop = position.top - data.collisionPosition.marginTop,
					overTop = collisionPosTop - offsetTop,
					overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
					top = data.my[ 1 ] === "top",
					myOffset = top ?
						-data.elemHeight :
						data.my[ 1 ] === "bottom" ?
							data.elemHeight :
							0,
					atOffset = data.at[ 1 ] === "top" ?
						data.targetHeight :
						data.at[ 1 ] === "bottom" ?
							-data.targetHeight :
							0,
					offset = -2 * data.offset[ 1 ],
					newOverTop,
					newOverBottom;
				if ( overTop < 0 ) {
					newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight -
						outerHeight - withinOffset;
					if ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) {
						position.top += myOffset + atOffset + offset;
					}
				} else if ( overBottom > 0 ) {
					newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset +
						offset - offsetTop;
					if ( newOverTop > 0 || abs( newOverTop ) < overBottom ) {
						position.top += myOffset + atOffset + offset;
					}
				}
			}
		},
		flipfit: {
			left: function() {
				$.ui.position.flip.left.apply( this, arguments );
				$.ui.position.fit.left.apply( this, arguments );
			},
			top: function() {
				$.ui.position.flip.top.apply( this, arguments );
				$.ui.position.fit.top.apply( this, arguments );
			}
		}
	};

	} )();

	return $.ui.position;

	} ) );


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery UI Form Reset Mixin 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Form Reset Mixin
	//>>group: Core
	//>>description: Refresh input widgets when their form is reset
	//>>docs: http://api.jqueryui.com/form-reset-mixin/

	( function( factory ) {
		if ( true ) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(2),
				__webpack_require__(27),
				__webpack_require__(18)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {

			// Browser globals
			factory( jQuery );
		}
	}( function( $ ) {

	return $.ui.formResetMixin = {
		_formResetHandler: function() {
			var form = $( this );

			// Wait for the form reset to actually happen before refreshing
			setTimeout( function() {
				var instances = form.data( "ui-form-reset-instances" );
				$.each( instances, function() {
					this.refresh();
				} );
			} );
		},

		_bindFormResetHandler: function() {
			this.form = this.element.form();
			if ( !this.form.length ) {
				return;
			}

			var instances = this.form.data( "ui-form-reset-instances" ) || [];
			if ( !instances.length ) {

				// We don't use _on() here because we use a single event handler per form
				this.form.on( "reset.ui-form-reset", this._formResetHandler );
			}
			instances.push( this );
			this.form.data( "ui-form-reset-instances", instances );
		},

		_unbindFormResetHandler: function() {
			if ( !this.form.length ) {
				return;
			}

			var instances = this.form.data( "ui-form-reset-instances" );
			instances.splice( $.inArray( this, instances ), 1 );
			if ( instances.length ) {
				this.form.data( "ui-form-reset-instances", instances );
			} else {
				this.form
					.removeData( "ui-form-reset-instances" )
					.off( "reset.ui-form-reset" );
			}
		}
	};

	} ) );


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
		if ( true ) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(18) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {

			// Browser globals
			factory( jQuery );
		}
	} ( function( $ ) {

	// Support: IE8 Only
	// IE8 does not support the form attribute and when it is supplied. It overwrites the form prop
	// with a string, so we need to find the proper form.
	return $.fn.form = function() {
		return typeof this[ 0 ].form === "string" ? this.closest( "form" ) : $( this[ 0 ].form );
	};

	} ) );


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery UI Labels 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: labels
	//>>group: Core
	//>>description: Find all the labels associated with a given input
	//>>docs: http://api.jqueryui.com/labels/

	( function( factory ) {
		if ( true ) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(18), __webpack_require__(23) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {

			// Browser globals
			factory( jQuery );
		}
	} ( function( $ ) {

	return $.fn.labels = function() {
		var ancestor, selector, id, labels, ancestors;

		// Check control.labels first
		if ( this[ 0 ].labels && this[ 0 ].labels.length ) {
			return this.pushStack( this[ 0 ].labels );
		}

		// Support: IE <= 11, FF <= 37, Android <= 2.3 only
		// Above browsers do not support control.labels. Everything below is to support them
		// as well as document fragments. control.labels does not work on document fragments
		labels = this.eq( 0 ).parents( "label" );

		// Look for the label based on the id
		id = this.attr( "id" );
		if ( id ) {

			// We don't search against the document in case the element
			// is disconnected from the DOM
			ancestor = this.eq( 0 ).parents().last();

			// Get a full set of top level ancestors
			ancestors = ancestor.add( ancestor.length ? ancestor.siblings() : this.siblings() );

			// Create a selector for the label based on the id
			selector = "label[for='" + $.ui.escapeSelector( id ) + "']";

			labels = labels.add( ancestors.find( selector ).addBack( selector ) );

		}

		// Return whatever we have found for labels
		return this.pushStack( labels );
	};

	} ) );


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// This file is deprecated in 1.12.0 to be removed in 1.13
	( function() {
	!(__WEBPACK_AMD_DEFINE_FACTORY__ = ([
		"jquery",
		"./data",
		"./disable-selection",
		"./focusable",
		"./form",
		"./ie",
		"./keycode",
		"./labels",
		"./jquery-1-7",
		"./plugin",
		"./safe-active-element",
		"./safe-blur",
		"./scroll-parent",
		"./tabbable",
		"./unique-id",
		"./version"
	]), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} )();


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery UI Effects 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Effects Core
	//>>group: Effects
	// jscs:disable maximumLineLength
	//>>description: Extends the internal jQuery effects. Includes morphing and easing. Required by all other effects.
	// jscs:enable maximumLineLength
	//>>docs: http://api.jqueryui.com/category/effects-core/
	//>>demos: http://jqueryui.com/effect/

	( function( factory ) {
		if ( true ) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(18) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {

			// Browser globals
			factory( jQuery );
		}
	}( function( $ ) {

	var dataSpace = "ui-effects-",
		dataSpaceStyle = "ui-effects-style",
		dataSpaceAnimated = "ui-effects-animated",

		// Create a local jQuery because jQuery Color relies on it and the
		// global may not exist with AMD and a custom build (#10199)
		jQuery = $;

	$.effects = {
		effect: {}
	};

	/*!
	 * jQuery Color Animations v2.1.2
	 * https://github.com/jquery/jquery-color
	 *
	 * Copyright 2014 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * Date: Wed Jan 16 08:47:09 2013 -0600
	 */
	( function( jQuery, undefined ) {

		var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor " +
			"borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

		// Plusequals test for += 100 -= 100
		rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,

		// A set of RE's that can match strings and generate color tuples.
		stringParsers = [ {
				re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse: function( execResult ) {
					return [
						execResult[ 1 ],
						execResult[ 2 ],
						execResult[ 3 ],
						execResult[ 4 ]
					];
				}
			}, {
				re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse: function( execResult ) {
					return [
						execResult[ 1 ] * 2.55,
						execResult[ 2 ] * 2.55,
						execResult[ 3 ] * 2.55,
						execResult[ 4 ]
					];
				}
			}, {

				// This regex ignores A-F because it's compared against an already lowercased string
				re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
				parse: function( execResult ) {
					return [
						parseInt( execResult[ 1 ], 16 ),
						parseInt( execResult[ 2 ], 16 ),
						parseInt( execResult[ 3 ], 16 )
					];
				}
			}, {

				// This regex ignores A-F because it's compared against an already lowercased string
				re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
				parse: function( execResult ) {
					return [
						parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
						parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
						parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
					];
				}
			}, {
				re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				space: "hsla",
				parse: function( execResult ) {
					return [
						execResult[ 1 ],
						execResult[ 2 ] / 100,
						execResult[ 3 ] / 100,
						execResult[ 4 ]
					];
				}
			} ],

		// JQuery.Color( )
		color = jQuery.Color = function( color, green, blue, alpha ) {
			return new jQuery.Color.fn.parse( color, green, blue, alpha );
		},
		spaces = {
			rgba: {
				props: {
					red: {
						idx: 0,
						type: "byte"
					},
					green: {
						idx: 1,
						type: "byte"
					},
					blue: {
						idx: 2,
						type: "byte"
					}
				}
			},

			hsla: {
				props: {
					hue: {
						idx: 0,
						type: "degrees"
					},
					saturation: {
						idx: 1,
						type: "percent"
					},
					lightness: {
						idx: 2,
						type: "percent"
					}
				}
			}
		},
		propTypes = {
			"byte": {
				floor: true,
				max: 255
			},
			"percent": {
				max: 1
			},
			"degrees": {
				mod: 360,
				floor: true
			}
		},
		support = color.support = {},

		// Element for support tests
		supportElem = jQuery( "<p>" )[ 0 ],

		// Colors = jQuery.Color.names
		colors,

		// Local aliases of functions called often
		each = jQuery.each;

	// Determine rgba support immediately
	supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
	support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;

	// Define cache name and alpha properties
	// for rgba and hsla spaces
	each( spaces, function( spaceName, space ) {
		space.cache = "_" + spaceName;
		space.props.alpha = {
			idx: 3,
			type: "percent",
			def: 1
		};
	} );

	function clamp( value, prop, allowEmpty ) {
		var type = propTypes[ prop.type ] || {};

		if ( value == null ) {
			return ( allowEmpty || !prop.def ) ? null : prop.def;
		}

		// ~~ is an short way of doing floor for positive numbers
		value = type.floor ? ~~value : parseFloat( value );

		// IE will pass in empty strings as value for alpha,
		// which will hit this case
		if ( isNaN( value ) ) {
			return prop.def;
		}

		if ( type.mod ) {

			// We add mod before modding to make sure that negatives values
			// get converted properly: -10 -> 350
			return ( value + type.mod ) % type.mod;
		}

		// For now all property types without mod have min and max
		return 0 > value ? 0 : type.max < value ? type.max : value;
	}

	function stringParse( string ) {
		var inst = color(),
			rgba = inst._rgba = [];

		string = string.toLowerCase();

		each( stringParsers, function( i, parser ) {
			var parsed,
				match = parser.re.exec( string ),
				values = match && parser.parse( match ),
				spaceName = parser.space || "rgba";

			if ( values ) {
				parsed = inst[ spaceName ]( values );

				// If this was an rgba parse the assignment might happen twice
				// oh well....
				inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
				rgba = inst._rgba = parsed._rgba;

				// Exit each( stringParsers ) here because we matched
				return false;
			}
		} );

		// Found a stringParser that handled it
		if ( rgba.length ) {

			// If this came from a parsed string, force "transparent" when alpha is 0
			// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
			if ( rgba.join() === "0,0,0,0" ) {
				jQuery.extend( rgba, colors.transparent );
			}
			return inst;
		}

		// Named colors
		return colors[ string ];
	}

	color.fn = jQuery.extend( color.prototype, {
		parse: function( red, green, blue, alpha ) {
			if ( red === undefined ) {
				this._rgba = [ null, null, null, null ];
				return this;
			}
			if ( red.jquery || red.nodeType ) {
				red = jQuery( red ).css( green );
				green = undefined;
			}

			var inst = this,
				type = jQuery.type( red ),
				rgba = this._rgba = [];

			// More than 1 argument specified - assume ( red, green, blue, alpha )
			if ( green !== undefined ) {
				red = [ red, green, blue, alpha ];
				type = "array";
			}

			if ( type === "string" ) {
				return this.parse( stringParse( red ) || colors._default );
			}

			if ( type === "array" ) {
				each( spaces.rgba.props, function( key, prop ) {
					rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
				} );
				return this;
			}

			if ( type === "object" ) {
				if ( red instanceof color ) {
					each( spaces, function( spaceName, space ) {
						if ( red[ space.cache ] ) {
							inst[ space.cache ] = red[ space.cache ].slice();
						}
					} );
				} else {
					each( spaces, function( spaceName, space ) {
						var cache = space.cache;
						each( space.props, function( key, prop ) {

							// If the cache doesn't exist, and we know how to convert
							if ( !inst[ cache ] && space.to ) {

								// If the value was null, we don't need to copy it
								// if the key was alpha, we don't need to copy it either
								if ( key === "alpha" || red[ key ] == null ) {
									return;
								}
								inst[ cache ] = space.to( inst._rgba );
							}

							// This is the only case where we allow nulls for ALL properties.
							// call clamp with alwaysAllowEmpty
							inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
						} );

						// Everything defined but alpha?
						if ( inst[ cache ] &&
								jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {

							// Use the default of 1
							inst[ cache ][ 3 ] = 1;
							if ( space.from ) {
								inst._rgba = space.from( inst[ cache ] );
							}
						}
					} );
				}
				return this;
			}
		},
		is: function( compare ) {
			var is = color( compare ),
				same = true,
				inst = this;

			each( spaces, function( _, space ) {
				var localCache,
					isCache = is[ space.cache ];
				if ( isCache ) {
					localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
					each( space.props, function( _, prop ) {
						if ( isCache[ prop.idx ] != null ) {
							same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
							return same;
						}
					} );
				}
				return same;
			} );
			return same;
		},
		_space: function() {
			var used = [],
				inst = this;
			each( spaces, function( spaceName, space ) {
				if ( inst[ space.cache ] ) {
					used.push( spaceName );
				}
			} );
			return used.pop();
		},
		transition: function( other, distance ) {
			var end = color( other ),
				spaceName = end._space(),
				space = spaces[ spaceName ],
				startColor = this.alpha() === 0 ? color( "transparent" ) : this,
				start = startColor[ space.cache ] || space.to( startColor._rgba ),
				result = start.slice();

			end = end[ space.cache ];
			each( space.props, function( key, prop ) {
				var index = prop.idx,
					startValue = start[ index ],
					endValue = end[ index ],
					type = propTypes[ prop.type ] || {};

				// If null, don't override start value
				if ( endValue === null ) {
					return;
				}

				// If null - use end
				if ( startValue === null ) {
					result[ index ] = endValue;
				} else {
					if ( type.mod ) {
						if ( endValue - startValue > type.mod / 2 ) {
							startValue += type.mod;
						} else if ( startValue - endValue > type.mod / 2 ) {
							startValue -= type.mod;
						}
					}
					result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
				}
			} );
			return this[ spaceName ]( result );
		},
		blend: function( opaque ) {

			// If we are already opaque - return ourself
			if ( this._rgba[ 3 ] === 1 ) {
				return this;
			}

			var rgb = this._rgba.slice(),
				a = rgb.pop(),
				blend = color( opaque )._rgba;

			return color( jQuery.map( rgb, function( v, i ) {
				return ( 1 - a ) * blend[ i ] + a * v;
			} ) );
		},
		toRgbaString: function() {
			var prefix = "rgba(",
				rgba = jQuery.map( this._rgba, function( v, i ) {
					return v == null ? ( i > 2 ? 1 : 0 ) : v;
				} );

			if ( rgba[ 3 ] === 1 ) {
				rgba.pop();
				prefix = "rgb(";
			}

			return prefix + rgba.join() + ")";
		},
		toHslaString: function() {
			var prefix = "hsla(",
				hsla = jQuery.map( this.hsla(), function( v, i ) {
					if ( v == null ) {
						v = i > 2 ? 1 : 0;
					}

					// Catch 1 and 2
					if ( i && i < 3 ) {
						v = Math.round( v * 100 ) + "%";
					}
					return v;
				} );

			if ( hsla[ 3 ] === 1 ) {
				hsla.pop();
				prefix = "hsl(";
			}
			return prefix + hsla.join() + ")";
		},
		toHexString: function( includeAlpha ) {
			var rgba = this._rgba.slice(),
				alpha = rgba.pop();

			if ( includeAlpha ) {
				rgba.push( ~~( alpha * 255 ) );
			}

			return "#" + jQuery.map( rgba, function( v ) {

				// Default to 0 when nulls exist
				v = ( v || 0 ).toString( 16 );
				return v.length === 1 ? "0" + v : v;
			} ).join( "" );
		},
		toString: function() {
			return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
		}
	} );
	color.fn.parse.prototype = color.fn;

	// Hsla conversions adapted from:
	// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

	function hue2rgb( p, q, h ) {
		h = ( h + 1 ) % 1;
		if ( h * 6 < 1 ) {
			return p + ( q - p ) * h * 6;
		}
		if ( h * 2 < 1 ) {
			return q;
		}
		if ( h * 3 < 2 ) {
			return p + ( q - p ) * ( ( 2 / 3 ) - h ) * 6;
		}
		return p;
	}

	spaces.hsla.to = function( rgba ) {
		if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
			return [ null, null, null, rgba[ 3 ] ];
		}
		var r = rgba[ 0 ] / 255,
			g = rgba[ 1 ] / 255,
			b = rgba[ 2 ] / 255,
			a = rgba[ 3 ],
			max = Math.max( r, g, b ),
			min = Math.min( r, g, b ),
			diff = max - min,
			add = max + min,
			l = add * 0.5,
			h, s;

		if ( min === max ) {
			h = 0;
		} else if ( r === max ) {
			h = ( 60 * ( g - b ) / diff ) + 360;
		} else if ( g === max ) {
			h = ( 60 * ( b - r ) / diff ) + 120;
		} else {
			h = ( 60 * ( r - g ) / diff ) + 240;
		}

		// Chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
		// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
		if ( diff === 0 ) {
			s = 0;
		} else if ( l <= 0.5 ) {
			s = diff / add;
		} else {
			s = diff / ( 2 - add );
		}
		return [ Math.round( h ) % 360, s, l, a == null ? 1 : a ];
	};

	spaces.hsla.from = function( hsla ) {
		if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
			return [ null, null, null, hsla[ 3 ] ];
		}
		var h = hsla[ 0 ] / 360,
			s = hsla[ 1 ],
			l = hsla[ 2 ],
			a = hsla[ 3 ],
			q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
			p = 2 * l - q;

		return [
			Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
			Math.round( hue2rgb( p, q, h ) * 255 ),
			Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
			a
		];
	};

	each( spaces, function( spaceName, space ) {
		var props = space.props,
			cache = space.cache,
			to = space.to,
			from = space.from;

		// Makes rgba() and hsla()
		color.fn[ spaceName ] = function( value ) {

			// Generate a cache for this space if it doesn't exist
			if ( to && !this[ cache ] ) {
				this[ cache ] = to( this._rgba );
			}
			if ( value === undefined ) {
				return this[ cache ].slice();
			}

			var ret,
				type = jQuery.type( value ),
				arr = ( type === "array" || type === "object" ) ? value : arguments,
				local = this[ cache ].slice();

			each( props, function( key, prop ) {
				var val = arr[ type === "object" ? key : prop.idx ];
				if ( val == null ) {
					val = local[ prop.idx ];
				}
				local[ prop.idx ] = clamp( val, prop );
			} );

			if ( from ) {
				ret = color( from( local ) );
				ret[ cache ] = local;
				return ret;
			} else {
				return color( local );
			}
		};

		// Makes red() green() blue() alpha() hue() saturation() lightness()
		each( props, function( key, prop ) {

			// Alpha is included in more than one space
			if ( color.fn[ key ] ) {
				return;
			}
			color.fn[ key ] = function( value ) {
				var vtype = jQuery.type( value ),
					fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
					local = this[ fn ](),
					cur = local[ prop.idx ],
					match;

				if ( vtype === "undefined" ) {
					return cur;
				}

				if ( vtype === "function" ) {
					value = value.call( this, cur );
					vtype = jQuery.type( value );
				}
				if ( value == null && prop.empty ) {
					return this;
				}
				if ( vtype === "string" ) {
					match = rplusequals.exec( value );
					if ( match ) {
						value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
					}
				}
				local[ prop.idx ] = value;
				return this[ fn ]( local );
			};
		} );
	} );

	// Add cssHook and .fx.step function for each named hook.
	// accept a space separated string of properties
	color.hook = function( hook ) {
		var hooks = hook.split( " " );
		each( hooks, function( i, hook ) {
			jQuery.cssHooks[ hook ] = {
				set: function( elem, value ) {
					var parsed, curElem,
						backgroundColor = "";

					if ( value !== "transparent" && ( jQuery.type( value ) !== "string" ||
							( parsed = stringParse( value ) ) ) ) {
						value = color( parsed || value );
						if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
							curElem = hook === "backgroundColor" ? elem.parentNode : elem;
							while (
								( backgroundColor === "" || backgroundColor === "transparent" ) &&
								curElem && curElem.style
							) {
								try {
									backgroundColor = jQuery.css( curElem, "backgroundColor" );
									curElem = curElem.parentNode;
								} catch ( e ) {
								}
							}

							value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
								backgroundColor :
								"_default" );
						}

						value = value.toRgbaString();
					}
					try {
						elem.style[ hook ] = value;
					} catch ( e ) {

						// Wrapped to prevent IE from throwing errors on "invalid" values like
						// 'auto' or 'inherit'
					}
				}
			};
			jQuery.fx.step[ hook ] = function( fx ) {
				if ( !fx.colorInit ) {
					fx.start = color( fx.elem, hook );
					fx.end = color( fx.end );
					fx.colorInit = true;
				}
				jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
			};
		} );

	};

	color.hook( stepHooks );

	jQuery.cssHooks.borderColor = {
		expand: function( value ) {
			var expanded = {};

			each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
				expanded[ "border" + part + "Color" ] = value;
			} );
			return expanded;
		}
	};

	// Basic color names only.
	// Usage of any of the other color names requires adding yourself or including
	// jquery.color.svg-names.js.
	colors = jQuery.Color.names = {

		// 4.1. Basic color keywords
		aqua: "#00ffff",
		black: "#000000",
		blue: "#0000ff",
		fuchsia: "#ff00ff",
		gray: "#808080",
		green: "#008000",
		lime: "#00ff00",
		maroon: "#800000",
		navy: "#000080",
		olive: "#808000",
		purple: "#800080",
		red: "#ff0000",
		silver: "#c0c0c0",
		teal: "#008080",
		white: "#ffffff",
		yellow: "#ffff00",

		// 4.2.3. "transparent" color keyword
		transparent: [ null, null, null, 0 ],

		_default: "#ffffff"
	};

	} )( jQuery );

	/******************************************************************************/
	/****************************** CLASS ANIMATIONS ******************************/
	/******************************************************************************/
	( function() {

	var classAnimationActions = [ "add", "remove", "toggle" ],
		shorthandStyles = {
			border: 1,
			borderBottom: 1,
			borderColor: 1,
			borderLeft: 1,
			borderRight: 1,
			borderTop: 1,
			borderWidth: 1,
			margin: 1,
			padding: 1
		};

	$.each(
		[ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ],
		function( _, prop ) {
			$.fx.step[ prop ] = function( fx ) {
				if ( fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr ) {
					jQuery.style( fx.elem, prop, fx.end );
					fx.setAttr = true;
				}
			};
		}
	);

	function getElementStyles( elem ) {
		var key, len,
			style = elem.ownerDocument.defaultView ?
				elem.ownerDocument.defaultView.getComputedStyle( elem, null ) :
				elem.currentStyle,
			styles = {};

		if ( style && style.length && style[ 0 ] && style[ style[ 0 ] ] ) {
			len = style.length;
			while ( len-- ) {
				key = style[ len ];
				if ( typeof style[ key ] === "string" ) {
					styles[ $.camelCase( key ) ] = style[ key ];
				}
			}

		// Support: Opera, IE <9
		} else {
			for ( key in style ) {
				if ( typeof style[ key ] === "string" ) {
					styles[ key ] = style[ key ];
				}
			}
		}

		return styles;
	}

	function styleDifference( oldStyle, newStyle ) {
		var diff = {},
			name, value;

		for ( name in newStyle ) {
			value = newStyle[ name ];
			if ( oldStyle[ name ] !== value ) {
				if ( !shorthandStyles[ name ] ) {
					if ( $.fx.step[ name ] || !isNaN( parseFloat( value ) ) ) {
						diff[ name ] = value;
					}
				}
			}
		}

		return diff;
	}

	// Support: jQuery <1.8
	if ( !$.fn.addBack ) {
		$.fn.addBack = function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		};
	}

	$.effects.animateClass = function( value, duration, easing, callback ) {
		var o = $.speed( duration, easing, callback );

		return this.queue( function() {
			var animated = $( this ),
				baseClass = animated.attr( "class" ) || "",
				applyClassChange,
				allAnimations = o.children ? animated.find( "*" ).addBack() : animated;

			// Map the animated objects to store the original styles.
			allAnimations = allAnimations.map( function() {
				var el = $( this );
				return {
					el: el,
					start: getElementStyles( this )
				};
			} );

			// Apply class change
			applyClassChange = function() {
				$.each( classAnimationActions, function( i, action ) {
					if ( value[ action ] ) {
						animated[ action + "Class" ]( value[ action ] );
					}
				} );
			};
			applyClassChange();

			// Map all animated objects again - calculate new styles and diff
			allAnimations = allAnimations.map( function() {
				this.end = getElementStyles( this.el[ 0 ] );
				this.diff = styleDifference( this.start, this.end );
				return this;
			} );

			// Apply original class
			animated.attr( "class", baseClass );

			// Map all animated objects again - this time collecting a promise
			allAnimations = allAnimations.map( function() {
				var styleInfo = this,
					dfd = $.Deferred(),
					opts = $.extend( {}, o, {
						queue: false,
						complete: function() {
							dfd.resolve( styleInfo );
						}
					} );

				this.el.animate( this.diff, opts );
				return dfd.promise();
			} );

			// Once all animations have completed:
			$.when.apply( $, allAnimations.get() ).done( function() {

				// Set the final class
				applyClassChange();

				// For each animated element,
				// clear all css properties that were animated
				$.each( arguments, function() {
					var el = this.el;
					$.each( this.diff, function( key ) {
						el.css( key, "" );
					} );
				} );

				// This is guarnteed to be there if you use jQuery.speed()
				// it also handles dequeuing the next anim...
				o.complete.call( animated[ 0 ] );
			} );
		} );
	};

	$.fn.extend( {
		addClass: ( function( orig ) {
			return function( classNames, speed, easing, callback ) {
				return speed ?
					$.effects.animateClass.call( this,
						{ add: classNames }, speed, easing, callback ) :
					orig.apply( this, arguments );
			};
		} )( $.fn.addClass ),

		removeClass: ( function( orig ) {
			return function( classNames, speed, easing, callback ) {
				return arguments.length > 1 ?
					$.effects.animateClass.call( this,
						{ remove: classNames }, speed, easing, callback ) :
					orig.apply( this, arguments );
			};
		} )( $.fn.removeClass ),

		toggleClass: ( function( orig ) {
			return function( classNames, force, speed, easing, callback ) {
				if ( typeof force === "boolean" || force === undefined ) {
					if ( !speed ) {

						// Without speed parameter
						return orig.apply( this, arguments );
					} else {
						return $.effects.animateClass.call( this,
							( force ? { add: classNames } : { remove: classNames } ),
							speed, easing, callback );
					}
				} else {

					// Without force parameter
					return $.effects.animateClass.call( this,
						{ toggle: classNames }, force, speed, easing );
				}
			};
		} )( $.fn.toggleClass ),

		switchClass: function( remove, add, speed, easing, callback ) {
			return $.effects.animateClass.call( this, {
				add: add,
				remove: remove
			}, speed, easing, callback );
		}
	} );

	} )();

	/******************************************************************************/
	/*********************************** EFFECTS **********************************/
	/******************************************************************************/

	( function() {

	if ( $.expr && $.expr.filters && $.expr.filters.animated ) {
		$.expr.filters.animated = ( function( orig ) {
			return function( elem ) {
				return !!$( elem ).data( dataSpaceAnimated ) || orig( elem );
			};
		} )( $.expr.filters.animated );
	}

	if ( $.uiBackCompat !== false ) {
		$.extend( $.effects, {

			// Saves a set of properties in a data storage
			save: function( element, set ) {
				var i = 0, length = set.length;
				for ( ; i < length; i++ ) {
					if ( set[ i ] !== null ) {
						element.data( dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ] );
					}
				}
			},

			// Restores a set of previously saved properties from a data storage
			restore: function( element, set ) {
				var val, i = 0, length = set.length;
				for ( ; i < length; i++ ) {
					if ( set[ i ] !== null ) {
						val = element.data( dataSpace + set[ i ] );
						element.css( set[ i ], val );
					}
				}
			},

			setMode: function( el, mode ) {
				if ( mode === "toggle" ) {
					mode = el.is( ":hidden" ) ? "show" : "hide";
				}
				return mode;
			},

			// Wraps the element around a wrapper that copies position properties
			createWrapper: function( element ) {

				// If the element is already wrapped, return it
				if ( element.parent().is( ".ui-effects-wrapper" ) ) {
					return element.parent();
				}

				// Wrap the element
				var props = {
						width: element.outerWidth( true ),
						height: element.outerHeight( true ),
						"float": element.css( "float" )
					},
					wrapper = $( "<div></div>" )
						.addClass( "ui-effects-wrapper" )
						.css( {
							fontSize: "100%",
							background: "transparent",
							border: "none",
							margin: 0,
							padding: 0
						} ),

					// Store the size in case width/height are defined in % - Fixes #5245
					size = {
						width: element.width(),
						height: element.height()
					},
					active = document.activeElement;

				// Support: Firefox
				// Firefox incorrectly exposes anonymous content
				// https://bugzilla.mozilla.org/show_bug.cgi?id=561664
				try {
					active.id;
				} catch ( e ) {
					active = document.body;
				}

				element.wrap( wrapper );

				// Fixes #7595 - Elements lose focus when wrapped.
				if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
					$( active ).trigger( "focus" );
				}

				// Hotfix for jQuery 1.4 since some change in wrap() seems to actually
				// lose the reference to the wrapped element
				wrapper = element.parent();

				// Transfer positioning properties to the wrapper
				if ( element.css( "position" ) === "static" ) {
					wrapper.css( { position: "relative" } );
					element.css( { position: "relative" } );
				} else {
					$.extend( props, {
						position: element.css( "position" ),
						zIndex: element.css( "z-index" )
					} );
					$.each( [ "top", "left", "bottom", "right" ], function( i, pos ) {
						props[ pos ] = element.css( pos );
						if ( isNaN( parseInt( props[ pos ], 10 ) ) ) {
							props[ pos ] = "auto";
						}
					} );
					element.css( {
						position: "relative",
						top: 0,
						left: 0,
						right: "auto",
						bottom: "auto"
					} );
				}
				element.css( size );

				return wrapper.css( props ).show();
			},

			removeWrapper: function( element ) {
				var active = document.activeElement;

				if ( element.parent().is( ".ui-effects-wrapper" ) ) {
					element.parent().replaceWith( element );

					// Fixes #7595 - Elements lose focus when wrapped.
					if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
						$( active ).trigger( "focus" );
					}
				}

				return element;
			}
		} );
	}

	$.extend( $.effects, {
		version: "1.12.1",

		define: function( name, mode, effect ) {
			if ( !effect ) {
				effect = mode;
				mode = "effect";
			}

			$.effects.effect[ name ] = effect;
			$.effects.effect[ name ].mode = mode;

			return effect;
		},

		scaledDimensions: function( element, percent, direction ) {
			if ( percent === 0 ) {
				return {
					height: 0,
					width: 0,
					outerHeight: 0,
					outerWidth: 0
				};
			}

			var x = direction !== "horizontal" ? ( ( percent || 100 ) / 100 ) : 1,
				y = direction !== "vertical" ? ( ( percent || 100 ) / 100 ) : 1;

			return {
				height: element.height() * y,
				width: element.width() * x,
				outerHeight: element.outerHeight() * y,
				outerWidth: element.outerWidth() * x
			};

		},

		clipToBox: function( animation ) {
			return {
				width: animation.clip.right - animation.clip.left,
				height: animation.clip.bottom - animation.clip.top,
				left: animation.clip.left,
				top: animation.clip.top
			};
		},

		// Injects recently queued functions to be first in line (after "inprogress")
		unshift: function( element, queueLength, count ) {
			var queue = element.queue();

			if ( queueLength > 1 ) {
				queue.splice.apply( queue,
					[ 1, 0 ].concat( queue.splice( queueLength, count ) ) );
			}
			element.dequeue();
		},

		saveStyle: function( element ) {
			element.data( dataSpaceStyle, element[ 0 ].style.cssText );
		},

		restoreStyle: function( element ) {
			element[ 0 ].style.cssText = element.data( dataSpaceStyle ) || "";
			element.removeData( dataSpaceStyle );
		},

		mode: function( element, mode ) {
			var hidden = element.is( ":hidden" );

			if ( mode === "toggle" ) {
				mode = hidden ? "show" : "hide";
			}
			if ( hidden ? mode === "hide" : mode === "show" ) {
				mode = "none";
			}
			return mode;
		},

		// Translates a [top,left] array into a baseline value
		getBaseline: function( origin, original ) {
			var y, x;

			switch ( origin[ 0 ] ) {
			case "top":
				y = 0;
				break;
			case "middle":
				y = 0.5;
				break;
			case "bottom":
				y = 1;
				break;
			default:
				y = origin[ 0 ] / original.height;
			}

			switch ( origin[ 1 ] ) {
			case "left":
				x = 0;
				break;
			case "center":
				x = 0.5;
				break;
			case "right":
				x = 1;
				break;
			default:
				x = origin[ 1 ] / original.width;
			}

			return {
				x: x,
				y: y
			};
		},

		// Creates a placeholder element so that the original element can be made absolute
		createPlaceholder: function( element ) {
			var placeholder,
				cssPosition = element.css( "position" ),
				position = element.position();

			// Lock in margins first to account for form elements, which
			// will change margin if you explicitly set height
			// see: http://jsfiddle.net/JZSMt/3/ https://bugs.webkit.org/show_bug.cgi?id=107380
			// Support: Safari
			element.css( {
				marginTop: element.css( "marginTop" ),
				marginBottom: element.css( "marginBottom" ),
				marginLeft: element.css( "marginLeft" ),
				marginRight: element.css( "marginRight" )
			} )
			.outerWidth( element.outerWidth() )
			.outerHeight( element.outerHeight() );

			if ( /^(static|relative)/.test( cssPosition ) ) {
				cssPosition = "absolute";

				placeholder = $( "<" + element[ 0 ].nodeName + ">" ).insertAfter( element ).css( {

					// Convert inline to inline block to account for inline elements
					// that turn to inline block based on content (like img)
					display: /^(inline|ruby)/.test( element.css( "display" ) ) ?
						"inline-block" :
						"block",
					visibility: "hidden",

					// Margins need to be set to account for margin collapse
					marginTop: element.css( "marginTop" ),
					marginBottom: element.css( "marginBottom" ),
					marginLeft: element.css( "marginLeft" ),
					marginRight: element.css( "marginRight" ),
					"float": element.css( "float" )
				} )
				.outerWidth( element.outerWidth() )
				.outerHeight( element.outerHeight() )
				.addClass( "ui-effects-placeholder" );

				element.data( dataSpace + "placeholder", placeholder );
			}

			element.css( {
				position: cssPosition,
				left: position.left,
				top: position.top
			} );

			return placeholder;
		},

		removePlaceholder: function( element ) {
			var dataKey = dataSpace + "placeholder",
					placeholder = element.data( dataKey );

			if ( placeholder ) {
				placeholder.remove();
				element.removeData( dataKey );
			}
		},

		// Removes a placeholder if it exists and restores
		// properties that were modified during placeholder creation
		cleanUp: function( element ) {
			$.effects.restoreStyle( element );
			$.effects.removePlaceholder( element );
		},

		setTransition: function( element, list, factor, value ) {
			value = value || {};
			$.each( list, function( i, x ) {
				var unit = element.cssUnit( x );
				if ( unit[ 0 ] > 0 ) {
					value[ x ] = unit[ 0 ] * factor + unit[ 1 ];
				}
			} );
			return value;
		}
	} );

	// Return an effect options object for the given parameters:
	function _normalizeArguments( effect, options, speed, callback ) {

		// Allow passing all options as the first parameter
		if ( $.isPlainObject( effect ) ) {
			options = effect;
			effect = effect.effect;
		}

		// Convert to an object
		effect = { effect: effect };

		// Catch (effect, null, ...)
		if ( options == null ) {
			options = {};
		}

		// Catch (effect, callback)
		if ( $.isFunction( options ) ) {
			callback = options;
			speed = null;
			options = {};
		}

		// Catch (effect, speed, ?)
		if ( typeof options === "number" || $.fx.speeds[ options ] ) {
			callback = speed;
			speed = options;
			options = {};
		}

		// Catch (effect, options, callback)
		if ( $.isFunction( speed ) ) {
			callback = speed;
			speed = null;
		}

		// Add options to effect
		if ( options ) {
			$.extend( effect, options );
		}

		speed = speed || options.duration;
		effect.duration = $.fx.off ? 0 :
			typeof speed === "number" ? speed :
			speed in $.fx.speeds ? $.fx.speeds[ speed ] :
			$.fx.speeds._default;

		effect.complete = callback || options.complete;

		return effect;
	}

	function standardAnimationOption( option ) {

		// Valid standard speeds (nothing, number, named speed)
		if ( !option || typeof option === "number" || $.fx.speeds[ option ] ) {
			return true;
		}

		// Invalid strings - treat as "normal" speed
		if ( typeof option === "string" && !$.effects.effect[ option ] ) {
			return true;
		}

		// Complete callback
		if ( $.isFunction( option ) ) {
			return true;
		}

		// Options hash (but not naming an effect)
		if ( typeof option === "object" && !option.effect ) {
			return true;
		}

		// Didn't match any standard API
		return false;
	}

	$.fn.extend( {
		effect: function( /* effect, options, speed, callback */ ) {
			var args = _normalizeArguments.apply( this, arguments ),
				effectMethod = $.effects.effect[ args.effect ],
				defaultMode = effectMethod.mode,
				queue = args.queue,
				queueName = queue || "fx",
				complete = args.complete,
				mode = args.mode,
				modes = [],
				prefilter = function( next ) {
					var el = $( this ),
						normalizedMode = $.effects.mode( el, mode ) || defaultMode;

					// Sentinel for duck-punching the :animated psuedo-selector
					el.data( dataSpaceAnimated, true );

					// Save effect mode for later use,
					// we can't just call $.effects.mode again later,
					// as the .show() below destroys the initial state
					modes.push( normalizedMode );

					// See $.uiBackCompat inside of run() for removal of defaultMode in 1.13
					if ( defaultMode && ( normalizedMode === "show" ||
							( normalizedMode === defaultMode && normalizedMode === "hide" ) ) ) {
						el.show();
					}

					if ( !defaultMode || normalizedMode !== "none" ) {
						$.effects.saveStyle( el );
					}

					if ( $.isFunction( next ) ) {
						next();
					}
				};

			if ( $.fx.off || !effectMethod ) {

				// Delegate to the original method (e.g., .show()) if possible
				if ( mode ) {
					return this[ mode ]( args.duration, complete );
				} else {
					return this.each( function() {
						if ( complete ) {
							complete.call( this );
						}
					} );
				}
			}

			function run( next ) {
				var elem = $( this );

				function cleanup() {
					elem.removeData( dataSpaceAnimated );

					$.effects.cleanUp( elem );

					if ( args.mode === "hide" ) {
						elem.hide();
					}

					done();
				}

				function done() {
					if ( $.isFunction( complete ) ) {
						complete.call( elem[ 0 ] );
					}

					if ( $.isFunction( next ) ) {
						next();
					}
				}

				// Override mode option on a per element basis,
				// as toggle can be either show or hide depending on element state
				args.mode = modes.shift();

				if ( $.uiBackCompat !== false && !defaultMode ) {
					if ( elem.is( ":hidden" ) ? mode === "hide" : mode === "show" ) {

						// Call the core method to track "olddisplay" properly
						elem[ mode ]();
						done();
					} else {
						effectMethod.call( elem[ 0 ], args, done );
					}
				} else {
					if ( args.mode === "none" ) {

						// Call the core method to track "olddisplay" properly
						elem[ mode ]();
						done();
					} else {
						effectMethod.call( elem[ 0 ], args, cleanup );
					}
				}
			}

			// Run prefilter on all elements first to ensure that
			// any showing or hiding happens before placeholder creation,
			// which ensures that any layout changes are correctly captured.
			return queue === false ?
				this.each( prefilter ).each( run ) :
				this.queue( queueName, prefilter ).queue( queueName, run );
		},

		show: ( function( orig ) {
			return function( option ) {
				if ( standardAnimationOption( option ) ) {
					return orig.apply( this, arguments );
				} else {
					var args = _normalizeArguments.apply( this, arguments );
					args.mode = "show";
					return this.effect.call( this, args );
				}
			};
		} )( $.fn.show ),

		hide: ( function( orig ) {
			return function( option ) {
				if ( standardAnimationOption( option ) ) {
					return orig.apply( this, arguments );
				} else {
					var args = _normalizeArguments.apply( this, arguments );
					args.mode = "hide";
					return this.effect.call( this, args );
				}
			};
		} )( $.fn.hide ),

		toggle: ( function( orig ) {
			return function( option ) {
				if ( standardAnimationOption( option ) || typeof option === "boolean" ) {
					return orig.apply( this, arguments );
				} else {
					var args = _normalizeArguments.apply( this, arguments );
					args.mode = "toggle";
					return this.effect.call( this, args );
				}
			};
		} )( $.fn.toggle ),

		cssUnit: function( key ) {
			var style = this.css( key ),
				val = [];

			$.each( [ "em", "px", "%", "pt" ], function( i, unit ) {
				if ( style.indexOf( unit ) > 0 ) {
					val = [ parseFloat( style ), unit ];
				}
			} );
			return val;
		},

		cssClip: function( clipObj ) {
			if ( clipObj ) {
				return this.css( "clip", "rect(" + clipObj.top + "px " + clipObj.right + "px " +
					clipObj.bottom + "px " + clipObj.left + "px)" );
			}
			return parseClip( this.css( "clip" ), this );
		},

		transfer: function( options, done ) {
			var element = $( this ),
				target = $( options.to ),
				targetFixed = target.css( "position" ) === "fixed",
				body = $( "body" ),
				fixTop = targetFixed ? body.scrollTop() : 0,
				fixLeft = targetFixed ? body.scrollLeft() : 0,
				endPosition = target.offset(),
				animation = {
					top: endPosition.top - fixTop,
					left: endPosition.left - fixLeft,
					height: target.innerHeight(),
					width: target.innerWidth()
				},
				startPosition = element.offset(),
				transfer = $( "<div class='ui-effects-transfer'></div>" )
					.appendTo( "body" )
					.addClass( options.className )
					.css( {
						top: startPosition.top - fixTop,
						left: startPosition.left - fixLeft,
						height: element.innerHeight(),
						width: element.innerWidth(),
						position: targetFixed ? "fixed" : "absolute"
					} )
					.animate( animation, options.duration, options.easing, function() {
						transfer.remove();
						if ( $.isFunction( done ) ) {
							done();
						}
					} );
		}
	} );

	function parseClip( str, element ) {
			var outerWidth = element.outerWidth(),
				outerHeight = element.outerHeight(),
				clipRegex = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
				values = clipRegex.exec( str ) || [ "", 0, outerWidth, outerHeight, 0 ];

			return {
				top: parseFloat( values[ 1 ] ) || 0,
				right: values[ 2 ] === "auto" ? outerWidth : parseFloat( values[ 2 ] ),
				bottom: values[ 3 ] === "auto" ? outerHeight : parseFloat( values[ 3 ] ),
				left: parseFloat( values[ 4 ] ) || 0
			};
	}

	$.fx.step.clip = function( fx ) {
		if ( !fx.clipInit ) {
			fx.start = $( fx.elem ).cssClip();
			if ( typeof fx.end === "string" ) {
				fx.end = parseClip( fx.end, fx.elem );
			}
			fx.clipInit = true;
		}

		$( fx.elem ).cssClip( {
			top: fx.pos * ( fx.end.top - fx.start.top ) + fx.start.top,
			right: fx.pos * ( fx.end.right - fx.start.right ) + fx.start.right,
			bottom: fx.pos * ( fx.end.bottom - fx.start.bottom ) + fx.start.bottom,
			left: fx.pos * ( fx.end.left - fx.start.left ) + fx.start.left
		} );
	};

	} )();

	/******************************************************************************/
	/*********************************** EASING ***********************************/
	/******************************************************************************/

	( function() {

	// Based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

	var baseEasings = {};

	$.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
		baseEasings[ name ] = function( p ) {
			return Math.pow( p, i + 2 );
		};
	} );

	$.extend( baseEasings, {
		Sine: function( p ) {
			return 1 - Math.cos( p * Math.PI / 2 );
		},
		Circ: function( p ) {
			return 1 - Math.sqrt( 1 - p * p );
		},
		Elastic: function( p ) {
			return p === 0 || p === 1 ? p :
				-Math.pow( 2, 8 * ( p - 1 ) ) * Math.sin( ( ( p - 1 ) * 80 - 7.5 ) * Math.PI / 15 );
		},
		Back: function( p ) {
			return p * p * ( 3 * p - 2 );
		},
		Bounce: function( p ) {
			var pow2,
				bounce = 4;

			while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
			return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
		}
	} );

	$.each( baseEasings, function( name, easeIn ) {
		$.easing[ "easeIn" + name ] = easeIn;
		$.easing[ "easeOut" + name ] = function( p ) {
			return 1 - easeIn( 1 - p );
		};
		$.easing[ "easeInOut" + name ] = function( p ) {
			return p < 0.5 ?
				easeIn( p * 2 ) / 2 :
				1 - easeIn( p * -2 + 2 ) / 2;
		};
	} );

	} )();

	return $.effects;

	} ) );


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	__webpack_require__(32);

	var StickyTableHeaders = function StickyTableHeaders() {
	    _classCallCheck(this, StickyTableHeaders);

	    $('.sticky').stickyTableHeaders({ fixedOffset: $('header') });

	    //const stickyExists = document.querySelector('.sticky');
	    //if (stickyExists !== null) {
	    // console.log("Resize Sticky Table Headers");
	    $(window).on('orientationchange resize', function () {
	        var footerWidth = $('footer').width();
	        if (footerWidth > 450 && footerWidth <= 956) {
	            $('.basic-table.sticky').css('width', +(footerWidth - 26));
	        } else if (footerWidth >= 320 && footerWidth <= 449) {
	            $('.basic-table').css('width', +(footerWidth - 32));
	        }
	    }).trigger('resize');
	    //}
	};

	exports.default = StickyTableHeaders;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*! Copyright (c) Jonas Mosbech - https://github.com/jmosbech/StickyTableHeaders
		MIT license info: https://github.com/jmosbech/StickyTableHeaders/blob/master/license.txt */

	;(function ($, window, undefined) {
		'use strict';

		var name = 'stickyTableHeaders',
			id = 0,
			defaults = {
				fixedOffset: 0,
				leftOffset: 0,
				marginTop: 0,
				objDocument: document,
				objHead: 'head',
				objWindow: window,
				scrollableArea: window,
				cacheHeaderHeight: false,
				zIndex: 3
			};

		function Plugin (el, options) {
			// To avoid scope issues, use 'base' instead of 'this'
			// to reference this class from internal events and functions.
			var base = this;

			// Access to jQuery and DOM versions of element
			base.$el = $(el);
			base.el = el;
			base.id = id++;

			// Listen for destroyed, call teardown
			base.$el.bind('destroyed',
				$.proxy(base.teardown, base));

			// Cache DOM refs for performance reasons
			base.$clonedHeader = null;
			base.$originalHeader = null;

			// Cache header height for performance reasons
			base.cachedHeaderHeight = null;

			// Keep track of state
			base.isSticky = false;
			base.hasBeenSticky = false;
			base.leftOffset = null;
			base.topOffset = null;

			base.init = function () {
				base.setOptions(options);

				base.$el.each(function () {
					var $this = $(this);

					// remove padding on <table> to fix issue #7
					$this.css('padding', 0);

					base.$originalHeader = $('thead:first', this);
					base.$clonedHeader = base.$originalHeader.clone();
					$this.trigger('clonedHeader.' + name, [base.$clonedHeader]);

					base.$clonedHeader.addClass('tableFloatingHeader');
					base.$clonedHeader.css({display: 'none', opacity: 0.0});

					base.$originalHeader.addClass('tableFloatingHeaderOriginal');

					base.$originalHeader.after(base.$clonedHeader);

					base.$printStyle = $('<style type="text/css" media="print">' +
						'.tableFloatingHeader{display:none !important;}' +
						'.tableFloatingHeaderOriginal{position:static !important;}' +
						'</style>');
					base.$head.append(base.$printStyle);
				});
				
				base.$clonedHeader.find("input, select").attr("disabled", true);

				base.updateWidth();
				base.toggleHeaders();
				base.bind();
			};

			base.destroy = function (){
				base.$el.unbind('destroyed', base.teardown);
				base.teardown();
			};

			base.teardown = function(){
				if (base.isSticky) {
					base.$originalHeader.css('position', 'static');
				}
				$.removeData(base.el, 'plugin_' + name);
				base.unbind();

				base.$clonedHeader.remove();
				base.$originalHeader.removeClass('tableFloatingHeaderOriginal');
				base.$originalHeader.css('visibility', 'visible');
				base.$printStyle.remove();

				base.el = null;
				base.$el = null;
			};

			base.bind = function(){
				base.$scrollableArea.on('scroll.' + name, base.toggleHeaders);
				if (!base.isWindowScrolling) {
					base.$window.on('scroll.' + name + base.id, base.setPositionValues);
					base.$window.on('resize.' + name + base.id, base.toggleHeaders);
				}
				base.$scrollableArea.on('resize.' + name, base.toggleHeaders);
				base.$scrollableArea.on('resize.' + name, base.updateWidth);
			};

			base.unbind = function(){
				// unbind window events by specifying handle so we don't remove too much
				base.$scrollableArea.off('.' + name, base.toggleHeaders);
				if (!base.isWindowScrolling) {
					base.$window.off('.' + name + base.id, base.setPositionValues);
					base.$window.off('.' + name + base.id, base.toggleHeaders);
				}
				base.$scrollableArea.off('.' + name, base.updateWidth);
			};

			// We debounce the functions bound to the scroll and resize events
			base.debounce = function (fn, delay) {
				var timer = null;
				return function () {
					var context = this, args = arguments;
					clearTimeout(timer);
					timer = setTimeout(function () {
						fn.apply(context, args);
					}, delay);
				};
			};

			base.toggleHeaders = base.debounce(function () {
				if (base.$el) {
					base.$el.each(function () {
						var $this = $(this),
							newLeft,
							newTopOffset = base.isWindowScrolling ? (
										isNaN(base.options.fixedOffset) ?
										base.options.fixedOffset.outerHeight() :
										base.options.fixedOffset
									) :
									base.$scrollableArea.offset().top + (!isNaN(base.options.fixedOffset) ? base.options.fixedOffset : 0),
							offset = $this.offset(),

							scrollTop = base.$scrollableArea.scrollTop() + newTopOffset,
							scrollLeft = base.$scrollableArea.scrollLeft(),

							headerHeight,

							scrolledPastTop = base.isWindowScrolling ?
									scrollTop > offset.top :
									newTopOffset > offset.top,
							notScrolledPastBottom;

						if (scrolledPastTop) {
							headerHeight = base.options.cacheHeaderHeight ? base.cachedHeaderHeight : base.$clonedHeader.height();
							notScrolledPastBottom = (base.isWindowScrolling ? scrollTop : 0) <
								(offset.top + $this.height() - headerHeight - (base.isWindowScrolling ? 0 : newTopOffset));
						}

						if (scrolledPastTop && notScrolledPastBottom) {
							newLeft = offset.left - scrollLeft + base.options.leftOffset;
							base.$originalHeader.css({
								'position': 'fixed',
								'margin-top': base.options.marginTop,
	                                                        'top': 0,
								'left': newLeft,
								'z-index': base.options.zIndex
							});
							base.leftOffset = newLeft;
							base.topOffset = newTopOffset;
							base.$clonedHeader.css('display', '');
							if (!base.isSticky) {
								base.isSticky = true;
								// make sure the width is correct: the user might have resized the browser while in static mode
								base.updateWidth();
								$this.trigger('enabledStickiness.' + name);
							}
							base.setPositionValues();
						} else if (base.isSticky) {
							base.$originalHeader.css('position', 'static');
							base.$clonedHeader.css('display', 'none');
							base.isSticky = false;
							base.resetWidth($('td,th', base.$clonedHeader), $('td,th', base.$originalHeader));
							$this.trigger('disabledStickiness.' + name);
						}
					});
				}
			}, 0);

			base.setPositionValues = base.debounce(function () {
				var winScrollTop = base.$window.scrollTop(),
					winScrollLeft = base.$window.scrollLeft();
				if (!base.isSticky ||
						winScrollTop < 0 || winScrollTop + base.$window.height() > base.$document.height() ||
						winScrollLeft < 0 || winScrollLeft + base.$window.width() > base.$document.width()) {
					return;
				}
				base.$originalHeader.css({
					'top': base.topOffset - (base.isWindowScrolling ? 0 : winScrollTop),
					'left': base.leftOffset - (base.isWindowScrolling ? 0 : winScrollLeft)
				});
			}, 0);

			base.updateWidth = base.debounce(function () {
				if (!base.isSticky) {
					return;
				}
				// Copy cell widths from clone
				if (!base.$originalHeaderCells) {
					base.$originalHeaderCells = $('th,td', base.$originalHeader);
				}
				if (!base.$clonedHeaderCells) {
					base.$clonedHeaderCells = $('th,td', base.$clonedHeader);
				}
				var cellWidths = base.getWidth(base.$clonedHeaderCells);
				base.setWidth(cellWidths, base.$clonedHeaderCells, base.$originalHeaderCells);

				// Copy row width from whole table
				base.$originalHeader.css('width', base.$clonedHeader.width());

				// If we're caching the height, we need to update the cached value when the width changes
				if (base.options.cacheHeaderHeight) {
					base.cachedHeaderHeight = base.$clonedHeader.height();
				}
			}, 0);

			base.getWidth = function ($clonedHeaders) {
				var widths = [];
				$clonedHeaders.each(function (index) {
					var width, $this = $(this);

					if ($this.css('box-sizing') === 'border-box') {
						var boundingClientRect = $this[0].getBoundingClientRect();
						if(boundingClientRect.width) {
							width = boundingClientRect.width; // #39: border-box bug
						} else {
							width = boundingClientRect.right - boundingClientRect.left; // ie8 bug: getBoundingClientRect() does not have a width property
						}
					} else {
						var $origTh = $('th', base.$originalHeader);
						if ($origTh.css('border-collapse') === 'collapse') {
							if (window.getComputedStyle) {
								width = parseFloat(window.getComputedStyle(this, null).width);
							} else {
								// ie8 only
								var leftPadding = parseFloat($this.css('padding-left'));
								var rightPadding = parseFloat($this.css('padding-right'));
								// Needs more investigation - this is assuming constant border around this cell and it's neighbours.
								var border = parseFloat($this.css('border-width'));
								width = $this.outerWidth() - leftPadding - rightPadding - border;
							}
						} else {
							width = $this.width();
						}
					}

					widths[index] = width;
				});
				return widths;
			};

			base.setWidth = function (widths, $clonedHeaders, $origHeaders) {
				$clonedHeaders.each(function (index) {
					var width = widths[index];
					$origHeaders.eq(index).css({
						'min-width': width,
						'max-width': width
					});
				});
			};

			base.resetWidth = function ($clonedHeaders, $origHeaders) {
				$clonedHeaders.each(function (index) {
					var $this = $(this);
					$origHeaders.eq(index).css({
						'min-width': $this.css('min-width'),
						'max-width': $this.css('max-width')
					});
				});
			};

			base.setOptions = function (options) {
				base.options = $.extend({}, defaults, options);
				base.$window = $(base.options.objWindow);
				base.$head = $(base.options.objHead);
				base.$document = $(base.options.objDocument);
				base.$scrollableArea = $(base.options.scrollableArea);
				base.isWindowScrolling = base.$scrollableArea[0] === base.$window[0];
			};

			base.updateOptions = function (options) {
				base.setOptions(options);
				// scrollableArea might have changed
				base.unbind();
				base.bind();
				base.updateWidth();
				base.toggleHeaders();
			};

			// Run initializer
			base.init();
		}

		// A plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[name] = function ( options ) {
			return this.each(function () {
				var instance = $.data(this, 'plugin_' + name);
				if (instance) {
					if (typeof options === 'string') {
						instance[options].apply(instance);
					} else {
						instance.updateOptions(options);
					}
				} else if(options !== 'destroy') {
					$.data(this, 'plugin_' + name, new Plugin( this, options ));
				}
			});
		};

	})(jQuery, window);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ })
/******/ ]);