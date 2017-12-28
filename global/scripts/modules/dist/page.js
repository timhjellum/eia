
/**
 *	The 'page' module does stuff.
 *
 *	@module page
 *	@requires classy, kizzy, signals, hasher, loadmask, json2
 */
 
define('page',
[
	'classy',
	'kizzy',
	'signals',
	'hasher',
	'loadmask',
	'json2'
],
function(
	Class,
	kizzy,
	signals,
	hasher
)
{
	/**
	 *	Class for the {{#crossLinkModule "page"}}page{{/crossLinkModule}} Module
	 * 	@class Page
	 *	@extends Class
	 *	@constructor 
	 */
	return Class.$extend({
		
		/**
		 *	Constructor Function for page
		 *	@method __init__
		 *	@param {String} name The name for the page.
		 */
		__init__ : function(name){
			this.name = name;
			this.settings = kizzy(this.name);
			this.loadSignal = new signals.Signal();
			this.unloadSignal = new signals.Signal();
		},
		
		load : function(request){
			this.settings.clearExpireds();
			this.$class.pushRequest(request);
			this.loadSignal.dispatch(request);
			this.isLoaded = true;
		},
		
		unload : function(){
			this.settings.clearExpireds();
			this.unloadSignal.dispatch();
			this.isLoaded = false;
		},
		
		toString : function(){
			return '[Page ' + this.name + ']';
		},
		__classvars__ :{
			
			requests : [],
			
			setHash : function(hash){
				hasher.setHash(hash);
			},
			
			showLoadMask : function(message, container){
				container = container || $('#pagecontent');
				message = '<span class="loading">' + (message || this.LOADING_MESSAGE) + '</span>';
				container.mask(message);
			},
			
			hideLoadMask : function(container){
				container = container || $('#pagecontent');
				container.unmask();
			},
			
			pushRequest : function(request){
				if(this.requests.length >= 10)
					this.requests.shift();
				this.requests.push(request);
			},
			
			errorHandler : function(info, errorUrl){
				var container = $('#pagecontent');
				if(info && errorUrl){
					var json = this.generateErrorJSON(info);
					$.ajax({
						'url' : errorUrl,
						'type' : 'POST',
						'data' : {
							'json' : json
						}
					});
				}
				var message = 'An error has occurred, and has been logged.  ' +
				'</br>If refreshing the page does not solve the issue, ' +
				'</br>try returning to the <a href="./">main page</a> ' +
				'and making</br> another selection';
				container.mask(message);
			},

			clearErrorMessage : function(){
				var container = $('#pagecontent');
				container.unmask();
			},
			
			generateErrorJSON : function(info){		
				return JSON.stringify($.extend(true, {}, info, {
					'browser' : $.browser,
					'requests' : this.requests
				}));
			},
			
			LOADING_MESSAGE : 'Loading...'
		}
	});
});