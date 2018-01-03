var jQuery = require('jquery');

$(document).ready(function() {
    var defaultTitle = 'U.S. Energy Information Administration - EIA - Independent Statistics and Analysis',
    titlePrefix = 'EIA';
    if( document.title == '' ){
      var title = titlePrefix,
      titleMMain = $('.title a').text(),
      titleMain = $('.title h1').text(),
      titleSub = $('.subnav .active').text();
      if(titleMain != '') {
        if( titleMMain != '')
        title += ' - ' + titleMMain.substring(titleMMain.indexOf(titleMMain.charAt(1)));
        title += ' - ' + titleMain;
    	  if(titleSub!= '')
    	  title += ' - ' + titleSub;
      } else
      title = defaultTitle;
      document.title = title;
    }


    //<![CDATA[
    var usasearch_config = { siteHandle:"eia.doe.gov" };
    var script = document.createElement("script");
    
    script.type = "text/javascript";
    script.src = "https://www.eia.gov/global/scripts/search.usa.gov/remote.loader.js"; // NOTE this may need to be updated from //search.usa.gov/javascripts/remote.loader.js" periodically
    document.getElementsByTagName("head")[0].appendChild(script);
    //]]>

	console.log("page tabs found");
	$(".page_tabs").tabs();
	$(".page_tabs").localScroll({
		target:".page_tabs",
		duration:0,
		hash:true
	});

	/*!
	* jQuery.ellipsis
	* http://github.com/jjenzz/jquery.ellipsis
	* --------------------------------------------------------------------------
	* Copyright (c) 2013 J. Smith (@jjenzz)
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
	*
	* adds a class to the last 'allowed' line of text so you can apply
	* text-overflow: ellipsis;
	*/
	console.log("elipsis found");
	(function(factory) {
		'use strict';
	
		if (typeof define === 'function' && define.amd) {
		// AMD. register as an anonymous module
		define(['jquery'], factory);
		} else {
		// browser globals
		factory(jQuery);
		}
	}(function($) {
		'use strict';
	
		var namespace = 'ellipsis',
			span = '<span style="white-space: nowrap;">',
			defaults = {
			lines: 'auto',
			ellipClass: 'ellip',
			responsive: false
			};
	
		/**
		 * Ellipsis()
		 * --------------------------------------------------------------------------
		 * @param {Node} el
		 * @param {Object} opts
		 */
		function Ellipsis(el, opts) {
		var base = this,
			currLine = 0,
			lines = [],
			setStartEllipAt,
			startEllipAt,
			resizeTimer,
			currOffset,
			lineHeight,
			contHeight,
			words,
			htmlEntities;
	
		// List of HTML entities for escaping.
		htmlEntities = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&#x27;',
			'`': '&#x60;'
		};
	
		base.$cont = $(el);
		base.opts = $.extend({}, defaults, opts);
	
		/**
		 * create() happens once when
		 * instance is created
		 */
		function create() {
			base.text = base.$cont.text();
			base.opts.ellipLineClass = base.opts.ellipClass + '-line';
	
			base.$el = $('<span class="' + base.opts.ellipClass + '" />');
			base.$el.text(base.text);
	
			base.$cont.empty().append(base.$el);
	
			init();
		}
	
		/**
		 * init()
		 */
		function init() {
	
			// if they only want one line just add
			// the class and do nothing else
			if (typeof base.opts.lines === 'number' && base.opts.lines < 2) {
			base.$el.addClass(base.opts.ellipLineClass);
			return;
			}
	
			contHeight = base.$cont.height();
	
			// if they only want to ellipsis the overflow
			// then do nothing if there is no overflow
			if (base.opts.lines === 'auto' && base.$el.prop('scrollHeight') <= contHeight) {
			return;
			}
	
			if (!setStartEllipAt) {
			return;
			}
	
			// create an array of words from our string
			words = $.trim(escapeText(base.text)).split(/\s+/);
	
			// wrap each word in a span and temporarily append to the DOM
			base.$el.html(span + words.join('</span> ' + span) + '</span>');
	
			// loop through words to determine which word the
			// ellipsis container should start from (need to
			// re-query spans from DOM so we can get their offset)
			base.$el.find('span').each(setStartEllipAt);
	
			// startEllipAt could be 0 so make sure we're
			// checking undefined instead of falsey
			if (startEllipAt != null) {
			updateText(startEllipAt);
			}
		}
	
		/**
		 * updateText() updates the text in the DOM
		 * with a span around the line that needs
		 * to be truncated
		 *
		 * @param {Number} i
		 */
		function updateText(nth) {
			// add a span that wraps from nth
			// word to the end of the string
			words[nth] = '<span class="' + base.opts.ellipLineClass + '">' + words[nth];
			words.push('</span>');
	
			// update the DOM with
			// our new string/markup
			base.$el.html(words.join(' '));
		}
	
		function escapeText(text){
			return String(text).replace(/[&<>"'\/]/g, function (s) {
			return htmlEntities[s];
			});
		}
	
		// only define the method if it's required
		if (base.opts.lines === 'auto') {
	
			/**
			 * setStartEllipByHeight() sets the start
			 * position to the first word in the last
			 * line of the element that doesn't overflow
			 *
			 * @param {Number} i
			 * @param {Node} word
			 */
			var setStartEllipByHeight = function(i, word) {
			var $word = $(word),
				top = $word.position().top;
	
			lineHeight = lineHeight || $word.height();
	
			if (top === currOffset) {
				// if it's top matches currOffset
				// then it's on the same line
				// as the previous word
				lines[currLine].push($word);
			} else {
				// otherwise we're
				// on a new line
				currOffset = top;
				currLine += 1;
				lines[currLine] = [$word];
			}
	
			// if the bottom of the word is outside
			// the element (overflowing) then
			// stop looping and set startEllipAt to
			// the first word in the previous line
			if (top + lineHeight > contHeight) {
				startEllipAt = i - lines[currLine - 1].length;
				return false;
			}
			};
	
			setStartEllipAt = setStartEllipByHeight;
		}
	
		// only define the method if it's required
		if (typeof base.opts.lines === 'number' && base.opts.lines > 1) {
	
			/**
			 * setStartEllipByLine() sets the start
			 * position to the first word in the line
			 * that was passed to opts. This forces
			 * the ellipsis on a specific line
			 * regardless of overflow
			 *
			 * @param {Number} i
			 * @param {Node} word
			 */
			var setStartEllipByLine = function(i, word) {
				var $word = $(word),
					top = $word.position().top;
	
				// if top isn't currOfset
				// then we're on a new line
				if (top !== currOffset) {
				currOffset = top;
				currLine += 1;
				}
	
				// if the word's currLine is equal
				// to the line limit passed via options
				// then start ellip from this
				// word and stop looping
				if (currLine === base.opts.lines) {
				startEllipAt = i;
				return false;
				}
			};
	
			setStartEllipAt = setStartEllipByLine;
		}
	
		// only bind to window resize if required
		if (base.opts.responsive) {
	
			/**
			 * resize() resets necessary vars
			 * and content and then re-initialises
			 * the Ellipsis script
			 */
			var resize = function() {
			lines = [];
			currLine = 0;
			currOffset = null;
			startEllipAt = null;
			base.$el.html(escapeText(base.text));
	
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(init, 100);
			};
	
			$(window).on('resize.' + namespace, resize);
		}
	
		// start 'er up
		create();
		}
	
		$.fn[namespace] = function(opts) {
		return this.each(function() {
			try {
			$(this).data(namespace, (new Ellipsis(this, opts)));
			} catch (err) {
			if (window.console) {
				console.error(namespace + ': ' + err);
			}
			}
		});
		};
	
	}));
	// end elipsis




});


























































/******************************
   Contains:
   bxSlider <------------ moved to global/script/vendors/bxslider
   easyListDplitter
   elastic
   URL
*******************************/

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));




























/*
 * 	easyListSplitter 1.0.2 - jQuery Plugin
 *	written by Andrea Cima Serniotti
 *	http://www.madeincima.eu
 *
 *	Copyright (c) 2010 Andrea Cima Serniotti (http://www.madeincima.eu)
 *	Dual licensed under the MIT (MIT-LICENSE.txt)
 *	and GPL (GPL-LICENSE.txt) licenses.
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */

 /*
	To activate the plugin add the following code to your own js file:

	$('.your-list-class-name').easyListSplitter({
			colNumber: 3,
			direction: 'horizontal'
	});

 */

var j = 1;

(function(jQuery) {
	jQuery.fn.easyListSplitter = function(options) {

	var defaults = {
		colNumber: 2, // Insert here the number of columns you want. Consider that the plugin will create the number of cols requested only if there are enough items in the list.
		direction: 'vertical'
	};

	this.each(function() {

		var obj = jQuery(this);
		var settings = jQuery.extend(defaults, options);
		var totalListElements = jQuery(this).children('li').size();
		var baseColItems = Math.ceil(totalListElements / settings.colNumber);
		var listClass = jQuery(this).attr('class');

		// -------- Create List Elements given colNumber ------------------------------------------------------------------------------

		for (i=1;i<=settings.colNumber;i++)
		{
			if(i==1){
				jQuery(this).addClass('listCol1').wrap('<div class="listContainer'+j+'"></div>');
			} else if(jQuery(this).is('ul')){ // Check whether the list is ordered or unordered
				jQuery(this).parents('.listContainer'+j).append('<ul class="listCol'+i+'"></ul>');
			} else{
				jQuery(this).parents('.listContainer'+j).append('<ol class="listCol'+i+'"></ol>');
			}
				jQuery('.listContainer'+j+' > ul,.listContainer'+j+' > ol').addClass(listClass);
		}

		var listItem = 0;
		var k = 1;
		var l = 0;

		if(settings.direction == 'vertical'){ // -------- Append List Elements to the respective listCol  - Vertical -------------------------------

			jQuery(this).children('li').each(function(){
				listItem = listItem+1;
				if (listItem > baseColItems*(settings.colNumber-1) ){
					jQuery(this).parents('.listContainer'+j).find('.listCol'+settings.colNumber).append(this);
				}
				else {
					if(listItem<=(baseColItems*k)){
						jQuery(this).parents('.listContainer'+j).find('.listCol'+k).append(this);
					}
					else{
						jQuery(this).parents('.listContainer'+j).find('.listCol'+(k+1)).append(this);
						k = k+1;
					}
				}
			});

			jQuery('.listContainer'+j).find('ol,ul').each(function(){
				if(jQuery(this).children().size() == 0) {
				jQuery(this).remove();
				}
			});

		} else{  // -------- Append List Elements to the respective listCol  - Horizontal ----------------------------------------------------------

			jQuery(this).children('li').each(function(){
				l = l+1;

				if(l <= settings.colNumber){
					jQuery(this).parents('.listContainer'+j).find('.listCol'+l).append(this);

				} else {
					l = 1;
					jQuery(this).parents('.listContainer'+j).find('.listCol'+l).append(this);
				}
			});
		}

		jQuery('.listContainer'+j).find('ol:last,ul:last').addClass('last'); // Set class last on the last UL or OL
		j = j+1;

	});
	};
})(jQuery);

/*
jQuery Url Plugin
	* Version 1.0
	* 2009-03-22 19:30:05
	* URL: http://ajaxcssblog.com/jquery/url-read-get-variables/
	* Description: jQuery Url Plugin gives the ability to read GET parameters from the actual URL
	* Author: Matthias JÃ¤ggli
	* Copyright: Copyright (c) 2009 Matthias JÃ¤ggli
	* Licence: dual, MIT/GPLv2
*/
(function($){$.url={};$.extend($.url,{_params:{},init:function(){var paramsRaw="";try{paramsRaw=(document.location.href.split("?",2)[1]||"").split("#")[0].split("&")||[];for(var i=0;i<paramsRaw.length;i++){var single=paramsRaw[i].split("=");if(single[0])this._params[single[0]]=unescape(single[1]);}}catch(e){alert(e);}},param:function(name){return this._params[name]||"";},paramAll:function(){return this._params;}});$.url.init();})(jQuery);

/* bgiframe jQuery plugin */
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version 3.0.1
 *
 * Requires jQuery >= 1.2.6
 */
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):"object"===typeof exports?module.exports=b:b(jQuery)})(function(b){function c(a){return a&&a.constructor===Number?a+"px":a}b.fn.bgiframe=function(a){a=b.extend({top:"auto",left:"auto",width:"auto",height:"auto",opacity:!0,src:"javascript:false;",conditional:/MSIE 6\.0/.test(navigator.userAgent)},a);if(!b.isFunction(a.conditional)){var g=a.conditional;a.conditional=function(){return g}}var h=b('<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+
a.src+'"style="display:block;position:absolute;z-index:-1;"/>');return this.each(function(){var d=b(this);if(!1!==a.conditional(this)){var e=d.children("iframe.bgiframe"),f=0===e.length?h.clone():e;f.css({top:"auto"==a.top?-1*(parseInt(d.css("borderTopWidth"),10)||0)+"px":c(a.top),left:"auto"==a.left?-1*(parseInt(d.css("borderLeftWidth"),10)||0)+"px":c(a.left),width:"auto"==a.width?this.offsetWidth+"px":c(a.width),height:"auto"==a.height?this.offsetHeight+"px":c(a.height),opacity:!0===a.opacity?0:
void 0});0===e.length&&d.prepend(f)}})};b.fn.bgIframe=b.fn.bgiframe});

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/
;(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);

/* RC Toggle Text*/
jQuery.fn.toggleText = function (value1, value2) {
    return this.each(function () {
        var $this = $(this),
            text = $this.text();

        if (text.indexOf(value1) > -1)
            $this.text(text.replace(value1, value2));
        else
            $this.text(text.replace(value2, value1));
    });
};




