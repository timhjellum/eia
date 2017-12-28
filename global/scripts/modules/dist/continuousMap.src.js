
/*
 RequireJS order 1.0.5 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
(function(){function k(a){var b=a.currentTarget||a.srcElement,c;if(a.type==="load"||l.test(b.readyState)){a=b.getAttribute("data-requiremodule");j[a]=!0;for(a=0;c=g[a];a++)if(j[c.name])c.req([c.name],c.onLoad);else break;a>0&&g.splice(0,a);setTimeout(function(){b.parentNode.removeChild(b)},15)}}function m(a){var b,c;a.setAttribute("data-orderloaded","loaded");for(a=0;c=h[a];a++)if((b=i[c])&&b.getAttribute("data-orderloaded")==="loaded")delete i[c],require.addScriptToDom(b);else break;a>0&&h.splice(0,
a)}var f=typeof document!=="undefined"&&typeof window!=="undefined"&&document.createElement("script"),n=f&&(f.async||window.opera&&Object.prototype.toString.call(window.opera)==="[object Opera]"||"MozAppearance"in document.documentElement.style),o=f&&f.readyState==="uninitialized",l=/^(complete|loaded)$/,g=[],j={},i={},h=[],f=null;define('order',{version:"1.0.5",load:function(a,b,c,e){var d;b.nameToUrl?(d=b.nameToUrl(a,null),require.s.skipAsync[d]=!0,n||e.isBuild?b([a],c):o?(e=require.s.contexts._,!e.urlFetched[d]&&
!e.loaded[a]&&(e.urlFetched[d]=!0,require.resourcesReady(!1),e.scriptCount+=1,d=require.attach(d,e,a,null,null,m),i[a]=d,h.push(a)),b([a],c)):b.specified(a)?b([a],c):(g.push({name:a,req:b,onLoad:c}),require.attach(d,null,a,k,"script/cache"))):b([a],c)}})})();
/**
 *	The 'continuousMap' module does stuff.
 *
 *	@module continuousMap
 *	@requires signals, map, jVectorMap, usa-en
 */
define('continuousMap',
[
	'signals',
	'map',
	'order!jVectorMap',
	'order!usa-en'
],
function(signals, Map, mapTemplate){
	
	return Map.$extend({
		/**
		 *	Constructor Function for continuousMap
		 *	@method __init__
		 *	@param {JQuery} container A JQuery object representing a &lt;DIV&gt; that will contain the continuousMap component.
		 */
		__init__ : function(container, basemap){
			this.$super(container, basemap);
		},
		
		createLegend : function(colors){
			var self = this, min = this,
			minVal, maxVal, prevMinVal, prevMaxVal, displayMin, displayMax;
			this.legendContainer.empty();
			var innerLegendContainer = $('<span style="display: inline-block; text-align:center;"></span>').appendTo(this.legendContainer);
			if (this.options.legendTitle){
				$('<span class="map_legend_title">' + this.options.legendTitle + '</span>').appendTo(innerLegendContainer);
				$('<br />').appendTo(innerLegendContainer);
			}
			if(self.options.legendItemFormatter){
				displayMin = self.options.legendItemFormatter.call(self, this.min);
				displayMax = self.options.legendItemFormatter.call(self, this.max);
			}
			else{
				displayMin = this.min;
				displayMax = this.max;
			}
			self.$class.drawGradient(innerLegendContainer, self.$class.palette[0], self.$class.palette[self.$class.palette.length-1], displayMin, displayMax);
			
			$('<br />').appendTo(innerLegendContainer);
			$('<br />').appendTo(innerLegendContainer);
			var naLegendContainer = $('<div/>').appendTo(innerLegendContainer);
			$('<span/>').appendTo(naLegendContainer).attr('style', 'display:inline-block;margin-right:10px;width:20px;height:20px;background-color:#CCC');
			$('<span>Value is not available</span>').appendTo(naLegendContainer).attr('style', 'margin-top:3px;display:inline-block;');
			
		},
		
		assignColors : function(){
			var ret = [], max = this.max, min = this.min,
			rMin = parseInt(this.$class.palette[0].substring(1, 3), 16),
			rMax = parseInt(this.$class.palette[this.$class.palette.length - 1].substring(1, 3), 16),
			gMin = parseInt(this.$class.palette[0].substring(3, 5), 16),
			gMax = parseInt(this.$class.palette[this.$class.palette.length - 1].substring(3, 5), 16),
			bMin = parseInt(this.$class.palette[0].substring(5), 16),
			bMax = parseInt(this.$class.palette[this.$class.palette.length - 1].substring(5), 16),
			state, count, ratio, r, g, b;
			
			for(var i = 0; i < this.counts.length; i++) {
				for (state in this.counts[i]) {
					if(!ret[i]) ret[i] = {};
					count = parseFloat(Highcharts.numberFormat(this.counts[i][state], this.options.dataPrecision, '.', ''));
					ratio = (count - min) / (max - min);
					switch(this.scaleType) {
						case 'logarithmic':
							ratio = (Math.log(count) - Math.log(min)) / (Math.log(max) - Math.log(min));
							break;
					}
					r = parseInt(ratio * rMax - (ratio - 1) * rMin, 10).toString(16).replace(/^(\w{1})$/, '0$1');
					g = parseInt(ratio * gMax - (ratio - 1) * gMin, 10).toString(16).replace(/^(\w{1})$/, '0$1');
					b = parseInt(ratio * bMax - (ratio - 1) * bMin, 10).toString(16).replace(/^(\w{1})$/, '0$1');
					ret[i][state] = '#' + r + g + b;
				}
			}
			
			this.colors = ret;
		},
		
		__classvars__ : {
			drawGradient : function(container, color1, color2, min, max) {
							
				var gradientText = '';
				
				gradientText += 'background-image: -ms-linear-gradient(left, ' + color1 + ' 0%, ' + color2 + ' 100%);'/* Internet Explorer 10 */
				gradientText += '-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=' + color1 + ', endColorstr=' + color2 + ', gradientType=1)";'; /* Internet Explorer 8 */
				gradientText += 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=' + color1 + ', endColorstr=' + color2 + ', gradientType=1)'; /* Internet Explorer 5.5 - 7 */
				gradientText += 'background-image: -webkit-gradient(linear, left bottom, right bottom, from(' + color1 + '), to(' + color2 + '));'; /* Safari 4+, Chrome */
				gradientText += 'background-image: -webkit-linear-gradient(left, ' + color1 + ', ' + color2 + ');'; /* Chrome 10+, Safari 5.1+, iOS 5+ */
				gradientText += 'background-image:    -moz-linear-gradient(left, ' + color1 + ', ' + color2 + ');'; /* Firefox 3.6-15 */
				gradientText += 'background-image:      -o-linear-gradient(left, ' + color1 + ', ' + color2 + ';'; /* Opera 11.10+ */
				gradientText += 'background-image:         linear-gradient(to left, ' + color1 + ',' + color2 + ');'; /* Firefox 16+ */
				
				$('<span>' + min + '</span>').appendTo(container);
				$('<span class="map_legend_gradient"></span>').appendTo(container).attr('style', gradientText);
				$('<span>' + max + '</span>').appendTo(container);
				
			}
		}
	});
});