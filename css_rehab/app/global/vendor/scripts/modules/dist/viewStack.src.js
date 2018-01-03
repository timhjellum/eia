
/**
 *	The 'viewStack' module does stuff.
 *	@module viewStack
 *	@requires  classy
 */

define('viewStack',
[
	'classy'
], 
function(Class){
	/**
	 *	Class for the {{#crossLinkModule "viewStack"}}viewStack{{/crossLinkModule}} Module
	 * 	@class ViewStack
	 *	@extends Class
	 *	@constructor 
	 */
	return Class.$extend({
		/**
		 *	Constructor Function for viewStack
		 *	@method __init__
		 *	@param {JQuery} container A JQuery object representing a &lt;DIV&gt; that will contain the viewStack component.
		 */
		__init__ : function(container){
			this.container = container;
			this.viewNames = [];
			this.viewsMap = {};
		},
		addView : function(name, view){
			if(!view) view = $('<div/>').attr('id', name);
			this.container.append(view);
			this.viewNames.push(name);
			this.viewsMap[name] = view;
			if(this.viewNames.length == 1) this.setActiveView(name);
			else this.positionView(view, false);
			return view;
		},
		removeView : function(name){
			if(this.viewsMap.hasOwnProperty(name)){
				var view = this.viewsMap[name];
				delete this.viewsMap[name];
				this.viewNames.splice($.indexOf(this.viewNames, name), 1);
				view.remove();;
				if(this.activeName == name && this.viewNames.length > 0)
					this.setActiveView(this.viewNames[0]);
			}
		},
		getView : function(name){
			return this.viewsMap[name];
		},
		hasView : function(name){
			return name in this.viewsMap;
		},
		setActiveView : function(name){
			if(name == this.activeName) return;
			if(!(name in this.viewsMap)) throw new Error('Invalid View Name');
			else {
				this.activeName = name;
				for(var key in this.viewsMap){
					if(this.viewsMap.hasOwnProperty(key)){
						var view = this.viewsMap[key];
						this.positionView(view, key == name);
					}
				}
			}
		},
		positionView : function(view, active){
			//var left = top = active ? -9999 : 0;
			view.css({
				display : active ? 'block' : 'none'
			});
		}
	})
});