
/**
 *	The 'queryRouter' module does stuff.
 *
 *	@module queryRouter
 *	@requires hasher, classy
 */
 
define('queryRouter',
[
	'hasher',
	'classy'
],
function(hasher, Class){
	/**
	 *	Class for the {{#crossLinkModule "queryRouter"}}queryRouter{{/crossLinkModule}} Module
	 * 	@class QueryRouter
	 *	@extends Class
	 *	@constructor 
	 */
	return Class.$extend({
		/**
		 *	Constructor Function for queryRouter
		 *	@method __init__
		 *	@param {Page} page A {{#crossLink "Page"}}Page{{/crossLink}} to be routed to.
		 */
		__init__ : function(page){
			var self = this;
			this.page = page;
			
			this.handleHashChange = function(hash){
				var query = self.$class.decodeQuery(hash);
				self.page.load(query);
			};
			
			hasher.prependHash = '?';
			hasher.changed.add(this.handleHashChange);
			hasher.initialized.add(this.handleHashChange);
			hasher.init();
		},
		
		__classvars__ : {
			decodeQuery : function(queryString){
				var queryArr = (queryString || '').split('&'),
					n = queryArr.length,
					queryObj, value, key;
					
				while (n--) {
					if(!queryObj) queryObj = {};
					queryArr[n] = queryArr[n].split('=');
					value = queryArr[n][1];
					queryObj[queryArr[n][0]] = decodeURIComponent(value);
				}
				
				return queryObj;
			}
		}
	})
});