if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports == exports) {
    module.exports = 'helptips-ng';
}
(function() {
    angular.module('helptips-ng', [])
        .directive('helptips', ['$templateCache', '$log', '$location','$timeout',
			function helptips($templateCache, $log, $location,$timeout) {
				var qtipsOpposite = {
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
				};
				
				$templateCache.put('helptips.html', '\
					<div id="help_button" class="button border_right" ng-click="toggleHelp()">\
						<span class="icon">&nbsp;</span>\
						<span class="text">Help</span>\
					</div>\
					');
					
				var showHelpTooltips = function(qtips){
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
										name: 'cream' // Inherit from preset style
									},
									position: {
										corner: {
											target: qtips[i].position,
											tooltip: qtipsOpposite[qtips[i].position]
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
					// We hardcode the width, because it is too much of a pain to
					// determine the appropriate width programatically
					// We use mousedown because many elements capture click events
					$('body').width(Math.max($(window).width(), 1600)).mousedown(this.windowMouseDownHandler);
					$(window).scrollLeft(($('body').width() - $(window).width()) / 2).resize();

					// Create a click event handler to hide the help tooltips when the user clicks somewhere else
					$('body').on('mousedown', function() {
						hideHelpTooltips();
						// Delete this click event handler
						$(this).off();
					})
				};
				
				var hideHelpTooltips = function(){
					// Fixes IE8 "Black Screen of Death"
					$('.qtip iframe').hide();
					$('.help_target').removeClass('help_target').qtip('destroy');
					$('body').width('100%').scroll().unbind('mousedown', this.windowMouseDownHandler);
					$(window).resize();
				};
		
				return {
					restrict : 'AEC',
					replace: true,
					template : $templateCache.get('helptips.html'),
					scope: {
						tooltips : "="
					},
					link : function(scope, element, attrs) {
						var button = $('#help_button',$(element));
					
						scope.toggleHelp = function(){
							// Make sure the tooltips are displayed, if they aren't already
							showHelpTooltips(scope.tooltips);	
						};
					}
				}
			}]);
}());