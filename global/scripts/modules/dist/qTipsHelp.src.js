
/**
 *	The 'qTipsHelp' module does stuff.
 *
 *	@module qTipsHelp
 *	@requires classy, kizzy, qtips
 */
 
define('qTipsHelp',
[
	'classy',
	'signals',
	'qtips'
],
function(
	Class,
	signals
){
	/**
	 *	Class for the {{#crossLinkModule "qTipsHelp"}}qTipsHelp{{/crossLinkModule}} Module
	 * 	@class QTipsHelp
	 *	@extends Class
	 *	@constructor 
	 */
	return Class.$extend({	
		/**
		 *	Constructor Function for qTipsHelp
		 *	@method __init__
		 */
		__init__ : function(){
			var self = this;
			
			this.tooltipsShown = false;
			
			this.button = $('#help_button');
			this.helpButtonClicked = new signals.Signal();
			
			this.button.click( function(e){
				if(!self.button.hasClass('disabled'))
					self.helpButtonClicked.dispatch();
			});
			
			this.windowMouseDownHandler = function(e){
				var isButton = function(buttonEle){
					var ele = e.target;
					while(ele.parentNode){
						if(ele.parentNode == buttonEle)
							return true;
						else
							ele = ele.parentNode;
					}
					return false;
				}(self.button.get(0));
				
				if(self.tooltipsShown && !isButton)
					self.hideHelpTooltips();
			};
		},
		
		toggleHelpTooltips : function(qtips){
			if(this.tooltipsShown)
				this.hideHelpTooltips();
			else
				this.showHelpTooltips(qtips);
		},
		
		showHelpTooltips : function(qtips){
			var self = this;
			this.button.css('cursor', 'wait').addClass('selected');
			// Iterate over each tooltip
			for(var i=0;i<qtips.length;i++){
				var target = ( typeof qtips[i].selector == 'function' ? qtips[i].selector() : $(qtips[i].selector));
				$.each($(target), function(index, item) {
					if($(item).is(':visible')) {
						$(item).attr('class', $(item).attr('class') + ' help_target');
						$(item).qtip({
							content: {prerender: true, text: qtips[i].tip},
							show: 'null',
							hide: 'null',
							style: {
								tip: true,
								// Inherit from preset style
								name: 'cream',
								// Only use the default width of 250px if width is not specified
								width: qtips[i].width ? qtips[i].width : 250
							},
							position: {
								corner: {
									target: qtips[i].position,
									tooltip: self.$class.qtipsOpposite[qtips[i].position]
								},
								adjust: {
									x: qtips[i].xAdjust ? qtips[i].xAdjust : 0,
									y: qtips[i].yAdjust ? qtips[i].yAdjust : 0
								}
							}
						});
					}
				});
			}
			$('.help_target').qtip('show');
			this.button.css('cursor', 'default');
			// We hardcode the width, because it is too much of a pain to
			// determine the appropriate width programatically
			// We use mousedown because many elements capture click events
			$('body').width(Math.max($(window).width(), 1600)).mousedown(this.windowMouseDownHandler);
			$(window).scrollLeft(($('body').width() - $(window).width()) / 2).resize();
			this.tooltipsShown = true;
		},
		
		hideHelpTooltips : function(){
			this.button.removeClass('selected');
			// Fixes IE8 "Black Screen of Death"
			$('.qtip iframe').hide();
			$('.help_target').removeClass('help_target').qtip('destroy');
			$('body').width('100%').scroll().unbind('mousedown', this.windowMouseDownHandler);
			this.tooltipsShown = false;
			$(window).resize();
		},
		
		__classvars__ : {
			qtipsOpposite : {
				topLeft: 'bottomRight',
				topMiddle: 'bottomMiddle',
				topRight: 'bottomLeft',
				bottomLeft: 'topRight',
				bottomMiddle : 'topMiddle',
				bottomRight: 'topLeft',
				leftTop: 'rightBottom',
				leftMiddle: 'rightMiddle',
				leftBottom: 'rightTop',
				rightTop: 'leftBottom',
				rightMiddle: 'leftMiddle',
				rightBottom: 'leftTop',
				center : 'center'
			}
		}
	})
});