
/*
 RequireJS order 1.0.5 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
(function(){function k(a){var b=a.currentTarget||a.srcElement,c;if(a.type==="load"||l.test(b.readyState)){a=b.getAttribute("data-requiremodule");j[a]=!0;for(a=0;c=g[a];a++)if(j[c.name])c.req([c.name],c.onLoad);else break;a>0&&g.splice(0,a);setTimeout(function(){b.parentNode.removeChild(b)},15)}}function m(a){var b,c;a.setAttribute("data-orderloaded","loaded");for(a=0;c=h[a];a++)if((b=i[c])&&b.getAttribute("data-orderloaded")==="loaded")delete i[c],require.addScriptToDom(b);else break;a>0&&h.splice(0,
a)}var f=typeof document!=="undefined"&&typeof window!=="undefined"&&document.createElement("script"),n=f&&(f.async||window.opera&&Object.prototype.toString.call(window.opera)==="[object Opera]"||"MozAppearance"in document.documentElement.style),o=f&&f.readyState==="uninitialized",l=/^(complete|loaded)$/,g=[],j={},i={},h=[],f=null;define('order',{version:"1.0.5",load:function(a,b,c,e){var d;b.nameToUrl?(d=b.nameToUrl(a,null),require.s.skipAsync[d]=!0,n||e.isBuild?b([a],c):o?(e=require.s.contexts._,!e.urlFetched[d]&&
!e.loaded[a]&&(e.urlFetched[d]=!0,require.resourcesReady(!1),e.scriptCount+=1,d=require.attach(d,e,a,null,null,m),i[a]=d,h.push(a)),b([a],c)):b.specified(a)?b([a],c):(g.push({name:a,req:b,onLoad:c}),require.attach(d,null,a,k,"script/cache"))):b([a],c)}})})();
/**
 *	The 'bucketMap' module creates a class that extends the map and has functions for generating the legend for the map by
 *  using buckets for the data values.
 *	
 *	@module bucketMap
 *	@requires  map, signals, jvectorMap, usa-en
 */

 define('bucketMap',
[
	'map',
	'signals',
	'order!jVectorMap',
	'order!usa-en'
],
function(Map, signals){
	
	return Map.$extend({
		/**
		 *	Constructor Function for bucketMap
		 *	@method __init__
		 *	@param {JQuery} container A JQuery object representing a &lt;DIV&gt; that will contain the bucketMap component.
		 */
		__init__ : function(container, basemap){
			var self = this;
			
			this.$super(container, basemap);
			
			$.extend(this.options, { 
				bucketFunction: this.$class.linearBucketFunction
			});
		},
		
		createLegend : function(){
			var self = this;
			var minVal, maxVal, prevMinVal, prevMaxVal, displayMin, displayMax;
			this.legendContainer.empty();
			var innerLegendContainer = $('<span style="display: inline-block; text-align:center;"></span>').appendTo(this.legendContainer);
			if (this.options.legendTitle){
				$('<span class="map_legend_title">' + this.options.legendTitle + '</span>').appendTo(innerLegendContainer);
				$('<br />').appendTo(innerLegendContainer);
			}
			$.each(this.buckets, function(index, bucket){
				var markerContainer = $('<span class="marker_container"></span>');
				$('<span class="map_legend_marker"></span>').appendTo(markerContainer)
				.css('background-color', self.$class.palette[index])
				.after('<span>' + (bucket.label ? bucket.label : self.$class.defaultLegendLabelFunction.call(self,bucket)) + '</span>'
				);
				markerContainer.appendTo(innerLegendContainer);
				return true;
			});
			var markerContainer = $('<span class="marker_container"></span>');
			$('<span class="map_legend_marker"></span>').appendTo(markerContainer).css('background-color', '#CCC').after('<span>Value is not available</span>');
			markerContainer.appendTo(innerLegendContainer);
		},

		assignColors : function() {
			
			this.buckets = this.options.bucketFunction.call(this, this.counts, this.$class.palette);
			
			var ret = [], state, count, bucket, ratio;
			for(var i = 0; i < this.counts.length; i++) {
				for (state in this.counts[i]) {
					count = parseFloat(Highcharts.numberFormat(this.counts[i][state], this.options.dataPrecision, '.', ''));
					for(var j = 0; j < this.buckets.length; j++) {
						if(this.buckets[j].testValue && typeof this.buckets[j].testValue == 'function') {
							if(this.buckets[j].testValue(count)) {
								if(!ret[i]) ret[i] = {};
								ret[i][state] = this.$class.palette[j];
							}
						}
						else {
							if(this.$class.defaultBucketTestFunction.call(this.buckets[j], count)) {
								if(!ret[i]) ret[i] = {};
								ret[i][state] = this.$class.palette[j];
							};
						}
					}
				}
			}
			
			this.colors = ret;
		},

		__classvars__ : {
			
			linearBucketFunction : function(counts, palette) {
				var ret = [], state;

				var step = (this.max - this.min) / palette.length;
				
				for(var i = 0; i < palette.length; i++) {
					var bucket = {min: null, max: null};
					bucket.min = parseFloat(Highcharts.numberFormat(this.min + step*i, this.options.dataPrecision, '.', ''));
					bucket.min = (i == 0 ? bucket.min : bucket.min + 1/Math.pow(10, this.options.dataPrecision));
					bucket.max = parseFloat(Highcharts.numberFormat(this.min + step*(i+1), this.options.dataPrecision, '.', ''));
					bucket.max = (bucket.max < bucket.min ? bucket.min : bucket.max);
					bucket.mid = (bucket.max - bucket.min) / 2 + bucket.min;
					
					if((ret.length == 0 || bucket.min != ret[ret.length-1].min || bucket.max != ret[ret.length-1].max) && (!(isNaN(bucket.min) || isNaN(bucket.max)))) {
						ret.push(bucket);
					}
					if(bucket.max >= this.max) {
						break;
					}
				}
				
				return ret;
			},
			
			/**
			* This is the default function used to test if a value falls into a bucket. If a bucket does not have a testValue function
			* on it, this function will be called instead in the assignColors function. It takes the value and returns a boolean
			* indicating whether the value belongs in the bucket.
			*
			* @method defaultBucketTestFunction
			* @param {Object} val The value to be tested for acceptance into the bucket.
			* @return {Boolean} Returns true if the value belongs in the bucket.
			*/
			defaultBucketTestFunction : function(val) {
				if(this.min && this.max) {
					return (val >= this.min && val <= this.max);
				}
				else if(this.min) {
					return (val >= this.min);
				}
				else if(this.max) {
					return (val <= this.max);
				}
				return false;
			},
			
			/**
			* This is the defaul function for generating the labels for the buckets in the legend. If a label property does not 
			* exist on a bucket this function is called to generate the label for the legend.
			*
			* @method defaultLegendLabelFunction
			* @param {Object} bucket An object with two properties, min and max.
			* @return {String} Returns the string to be used as a label for a bucket in the legend.
			*/
			defaultLegendLabelFunction : function(bucket) {
				var displayMin, displayMax;
				
				if(this.options.legendItemFormatter){
					displayMin = self.options.legendItemFormatter.call(self, bucket.min);
					displayMax = self.options.legendItemFormatter.call(self, bucket.max);
				}
				else{
					displayMin = bucket.min;
					displayMax = bucket.max;
				}
				
				return displayMin + (bucket.min < bucket.max ? ' to ' + displayMax : '');
			}
		}
	});
});