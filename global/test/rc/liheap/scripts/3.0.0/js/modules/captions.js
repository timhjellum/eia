/**
* 	Created by Shivan Computers Corporation on behalf of the
* 	U.S. Energy Information Administration:
*	Author : Ryan Lynch (Ryan.Lynch@eia.gov)
*	
*	EIA Captions Module:
*
* 	Adds a caption below the a highcharts chart.  This can be done by specifying a "captions"	
* 	option in the highcharts options, or by calling Chart.addCaption after chart creation. 
*	There is no gaurantee that the captions will appear as rendered when the chart is 
*	rasterized on the server, as the server may use different fonts than the client machine, 
*	throwing off the line break calculations. below is an example structure for the caption 
*	options:
* 
* 		captions: {
*			marginTop:5,
*			marginLeft:15,
*			marginRight:15,
*			marginBottom:5,
*			enabled: true,
*			style: {
*				color: '#909090',
*				fontSize: '10px',
*				fontFamily: 'Arial, Verdana, sans-serif'
*			},
*			items:[
*				{
*					text: "This is a caption"
*					// The same options specified above can
*					// be overridden here.
*				}
*			]
*		}
*
*	Depends on: highcharts.js, eia-theme.js
**/

(function(){

	// Shortcuts	
	var HC = Highcharts,
	Chart = HC.Chart;
	each = HC.each,
	extend = HC.extend,
	// Browser and OS Detection
	isIE = navigator.userAgent.match(/MSIE/) != null,
	isLinux = navigator.platform.match(/Win|Mac|IPhone|IPad/i) == null;
	
	// Default captions options
	
	HC.setOptions({
		captions:{
			marginTop:5,
			marginLeft:15,
			marginRight:15,
			marginBottom:5,
			enabled: true,
			style: {
				color: '#888',
				fontSize: '11px',
				fontFamily: 'Arial, Verdana, sans-serif'
			},
			items:[]
		}
	});
	
	extend(Chart.prototype,{
		
		///////////////////////
		// Captions Function //
		///////////////////////
		
		/**
		* Adds a caption to the chart.  This function takes two arguments, first
		* is an options object which should contain a text attribute, and optionally
		* a style attribute, which contains css styles for the rendered text.  The
		* second argument is a boolean value, which indicates whether to add the 
		* passed caption object to the chart options (so that it is rendered when
		* the chart is exported).  This argument defaults to true.
		* 
		* @param options object
		* @param addToCaptions boolean
		*
		**/
		addCaption : function(options, addToCaptions){
			var chart = this,
			ops = jQuery.extend(true, {}, chart.options.captions, options),
			text = ops.text
			text;
			// By default we add 
			if(addToCaptions !== false){
				chart.options.captions.items.push(options);
			}
			
			/**
			* Draws the captions onto the chart.  Long captions are split into 
			* multiple lines by the splitText function.
			**/
			function drawCaptions(){
				if(!chart.options.chart.forExport){
					plotPadding = (chart.chartWidth - chart.plotWidth) / 2;
					$('<p>' + ops.text + '</p>')
						.appendTo(chart.options.chart.captionsContainer)
						.css(ops.style)
						.css({
							// we use padding instead of margin.  Sneaky sneaky...
							'paddingLeft' : ops.marginLeft + 'px',
							'paddingRight' : ops.marginRight + 'px',
							'paddingTop' : ops.marginTop + 'px',
							'paddingBottom' : ops.marginBottom + 'px',
							'margin' : '0 0 0 0'
						});
				}
				else{
					// Remove the links when exporting
					text = text.replace(/<\s*a[^>]*>([^<]+)<\s*\/\s*a\s*>/g, '$1');
					
					var style = ops.style,
					textWidth = chart.chartWidth - ops.marginLeft - ops.marginRight,
					lines = chart.splitText(text, style, textWidth, chart.renderer),
					left = ops.marginLeft,
					bottom = -1 * ops.marginBottom, 
					r = chart.renderer, 
					aligns = [], spans = [],
					i, o, h, spanLineHeight;
					
					// First, loop through and determine the alignments
					// for each line, and calculate the offset (bottom)
					for(i = lines.length -1; i >= 0 ; i--){
						aligns[i] = {
							verticalAlign:'bottom',
							align:'left',
							x:left,
							y:bottom
						};
						bottom -= lines[i].lineHeight;
					}
					
					// Account for the top margin
					bottom -= ops.marginTop;
					// Loop through all bottom aligned objects and adjust them so they appear
					// above the new captions
					// Now resize the chart and container
					h = r.height - bottom;
					r.setSize(r.width, h, false);
					$(chart.container).height(h);
					// Now adjust the any bottom aligned items to account for the caption and
					// increased renderer size if not for export
					
					for(i in r.alignedObjects){
						o = r.alignedObjects[i];
						if(o.alignOptions.verticalAlign == 'bottom'){
							// Make a copy of the align options so that
							// we don't modify the original, which is 
							// part of the original chart options.
							o.alignOptions = extend({}, o.alignOptions);
							o.alignOptions.y += bottom;
						}
					}
					// Now add the captions using the previously calculated aligns
					for(i in lines){
						chart.renderer.text(lines[i].line,0,0)
							.css(style).add()
							.align(aligns[i]);
					}
					r.setSize(r.width, h, false);
				}
			}
			// Call draw captions
			drawCaptions();
		}
	});
	
	function processCaptions(chart){
		var i, item, ops = chart.options,
		captions = ops.captions;
		
		if(!chart.options.chart.captionsContainer){
			var printContainer = $(chart.options.chart.printContainer),
			container = $(chart.options.chart.container),
			captionsContainer = printContainer.find('.chartCaptionsContainer');
			if(captionsContainer.length == 0){
				captionsContainer = $('<div></div>').css({
					height:'auto', 
					width: chart.chartWidth ? (chart.chartWidth + 'px') : 'auto', 
					// We set the margin and padding on the
					// captions container to match the chart
					// container so that the captions are
					// lined up correctly
					marginLeft:container.css('marginLeft'),
					marginRight:container.css('marginRight'),
					paddingLeft:container.css('paddingLeft'),
					paddingRight:container.css('paddingRight')
				}).addClass('chartCaptionsContainer');
				captionsContainer.appendTo(printContainer);
			}
			else
				captionsContainer.empty();
			
			chart.options.chart.captionsContainer = captionsContainer[0];
		}
		
		// if we have captions
		if(captions != void 0){
			items = captions.items;
			// Loop through and draw them
			for(var i = 0; i < items.length; i++){
				item = items[i];
				if(item.text.replace(/\s+/g, '').length > 0)
					chart.addCaption(item, false);
			}
		}
	};

	Chart.prototype.callbacks.push(processCaptions);
}());