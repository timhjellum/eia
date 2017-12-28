
/*
 RequireJS order 1.0.5 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
(function(){function k(a){var b=a.currentTarget||a.srcElement,c;if(a.type==="load"||l.test(b.readyState)){a=b.getAttribute("data-requiremodule");j[a]=!0;for(a=0;c=g[a];a++)if(j[c.name])c.req([c.name],c.onLoad);else break;a>0&&g.splice(0,a);setTimeout(function(){b.parentNode.removeChild(b)},15)}}function m(a){var b,c;a.setAttribute("data-orderloaded","loaded");for(a=0;c=h[a];a++)if((b=i[c])&&b.getAttribute("data-orderloaded")==="loaded")delete i[c],require.addScriptToDom(b);else break;a>0&&h.splice(0,
a)}var f=typeof document!=="undefined"&&typeof window!=="undefined"&&document.createElement("script"),n=f&&(f.async||window.opera&&Object.prototype.toString.call(window.opera)==="[object Opera]"||"MozAppearance"in document.documentElement.style),o=f&&f.readyState==="uninitialized",l=/^(complete|loaded)$/,g=[],j={},i={},h=[],f=null;define('order',{version:"1.0.5",load:function(a,b,c,e){var d;b.nameToUrl?(d=b.nameToUrl(a,null),require.s.skipAsync[d]=!0,n||e.isBuild?b([a],c):o?(e=require.s.contexts._,!e.urlFetched[d]&&
!e.loaded[a]&&(e.urlFetched[d]=!0,require.resourcesReady(!1),e.scriptCount+=1,d=require.attach(d,e,a,null,null,m),i[a]=d,h.push(a)),b([a],c)):b.specified(a)?b([a],c):(g.push({name:a,req:b,onLoad:c}),require.attach(d,null,a,k,"script/cache"))):b([a],c)}})})();
/**
 *	The 'map' module does stuff.
 *
 *	@module map
 *	@requires animatedComponent, signals, jVectorMap, usa-en
 */
 
define('map',
[
	'animatedComponent',
	'signals',
	'order!jVectorMap',
	'order!usa-en'
],
function(AnimatedComponent, signals, mapTemplate){
	
	/**
	 *	Class for the {{#crossLinkModule "map"}}map{{/crossLinkModule}} Module
	 * 	@class Map
	 *	@extends AnimatedComponent
	 *	@constructor 
	 */
	return AnimatedComponent.$extend({
		/**
		 *	Constructor Function for map
		 *	@method __init__
		 *	@param {JQuery} container A JQuery object representing a &lt;DIV&gt; that will contain the map component.
		 */
		__init__ : function(container, basemap){
			var self = this;
			
			this.$super();
			
			this.container = container;
			this.regionClicked =  new signals.Signal();
			this.markerClicked =  new signals.Signal();
			
			this.mapContainer = $('#mapContainer', this.container);
			this.legendContainer = $('#map_legend', this.container);
			this.titleContainer = $('#mapTitle', this.container);
			
			if(this.titleContainer.length == 0)
				this.titleContainer = $('<h2 id="mapTitle"></h2>').appendTo(this.container);
			if(this.mapContainer.length == 0)
				this.mapContainer = $('<div id="mapContainer"></div>').appendTo(this.container);
			if(this.legendContainer.length == 0)
				this.legendContainer = $('<div id="map_legend"></div>').appendTo(this.container);
			
			this.counts = null;
			
			this.map = null;
			
			this.colors = {};
			
			this.basemap = (basemap == null ? 'usa_en' : basemap);
			
			this.options = {
				animation : {
					callback : function(iteration){
						if(this.colors) {
							this.worldMap.series.regions[0].setValues(this.getCurrentColors());
						}
						else if(this.worldMap.series.regions && this.worldMap.series.regions.length > 0) {
							this.worldMap.series.regions[0].setValues(this.getCurrentCounts());
						}
						else if(this.worldMap.series.markers && this.worldMap.series.markers.length > 0) {
							this.worldMap.series.markers[0].setValues(this.getCurrentCounts());
						}
					}
				},
				map: this.basemap,
				normalizeFunction: 'polynomial',
				hoverOpacity: 0.7,
				hoverColor: false,
				backgroundColor: 'white',
				dataPrecision : 0
			};
		},
		
		play : function(loop, stepSize){
			this.$super(loop, stepSize);
		},
		
		update : function(counts, title, options){
			var self = this;
			
			if(typeof options != 'undefined' && typeof options.map != 'undefined') {
				this.basemap = options.map;
				this.options.map = options.map;
			}
			
			this.counts = $.map(counts instanceof Array ? counts : [counts], function(count){
				var newCount = {};
				for(var key in count){
					if(count.hasOwnProperty(key)){
						if(jvm.WorldMap.maps[self.basemap].paths.hasOwnProperty(key.toUpperCase())) {
							newCount[key.toUpperCase()] = count[key];
						}
						else if(jvm.WorldMap.maps[self.basemap].paths.hasOwnProperty(key.toLowerCase())) {
							newCount[key.toLowerCase()] = count[key];
						}
						else {
							newCount[key] = count[key];
						}
					}
				}
				return newCount;
			});
			
			this.options = $.extend(this.options || {}, options);
			
			this.$super($.extend(
				true,
				this.animation,
				this.options.animation,
				{
					maxIteration : counts.length - 1
				})
			);
			
			this.setTitle(title);
			
			this.calculateMinMax();
			if(typeof this.assignColors == 'function')
				this.assignColors();
				
			this.createLegend();
			
			this.setContainerHeight();
			
			this.createMap();
		},
		
		setContainerHeight : function() {
			this.mapContainer.height(
				this.mapContainer.parent().height() - 
					(this.titleContainer.outerHeight(true) + 
					this.legendContainer.outerHeight(true) + 
					parseInt(this.mapContainer.css('paddingTop')) +  
					parseInt(this.mapContainer.css('paddingBottom')) + 
					10)
				);
		},
		
		calculateMinMax : function() {
			this.min = this.max = null;
			for (var i = 0; i < this.counts.length; i++) {
				for (var state in this.counts[i]) {
					if(this.counts[i].hasOwnProperty(state)){
						this.min = ((this.min == null || this.counts[i][state] < this.min) ? this.counts[i][state] : this.min);
						this.max = ((this.max == null || this.counts[i][state] > this.max) ? this.counts[i][state] : this.max);
					}
				}
			}

			if(this.min !== null)
				this.min = parseFloat(Highcharts.numberFormat(this.min, this.options.dataPrecision, '.', ''));
			if(this.max !== null)
				this.max = parseFloat(Highcharts.numberFormat(this.max, this.options.dataPrecision, '.', ''));
		},
		
		setTitle : function(title){
			this.titleContainer.text(title);
		},

		createRegionOps : function(){
			return [{
				values : this.colors ? this.getCurrentColors() : this.getCurrentCounts(),
				min : this.min,
				max : this.max,
				scale : this.colors ? void 0 : this.$class.palette
			}];
		},

		createMarkerOps : function(){//cjd
			return this.options.markers ? [{
				values : this.colors ? this.getCurrentColors() : this.getCurrentCounts(),
				min : this.min,
				max : this.max,
				scale : this.colors ? void 0 : this.$class.palette
			}] : null;
		},

		createMap : function(){
			var self = this;
			
			if(this.worldMap){
				this.worldMap.remove();
			}
			this.regionOps = this.createRegionOps();
			this.markerOps = this.createMarkerOps();
			var series = {};
			if(this.regionOps) {
				series['regions'] = this.regionOps;
			}
			if(this.markerOps) {
				series['markers'] = this.markerOps;
			}
			this.mapContainer.empty();
			this.map = $('<div style="height:100%;width:100%;" class="map_inside_container"></div>').appendTo(this.mapContainer)
			.vectorMap($.extend(true, {
				regionStyle: {
					initial: {
						fill: '#CCCCCC',
						"fill-opacity": 1,
						stroke: 'none',
						"stroke-width": 0,
						"stroke-opacity": 1
					},
					hover: {
						"fill-opacity": 0.8
					},
					selected: {
						fill: 'yellow'
					}
				},
				series : series,
				onRegionClick : function(event, code) {
					self.regionClicked.dispatch(code.toUpperCase(), event);
				},
				onMarkerClick : function(event, code) {
					self.markerClicked.dispatch(self.options.markers[code], event);
				},
				zoomOnScroll : false
			}, this.options));

			this.worldMap = this.mapContainer.find('.jvectormap-container').data('mapObject');
		},
		
		createLegend : function(buckets, colors){
			// Implemented by subclasses
		},
		
		getCurrentColors : function(){
			var regions = {};
			$.each(jvm.WorldMap.maps[this.basemap].paths, function(key, value) {
				regions[key] = "";
			});
			return $.extend(regions, this.colors[this.animation.iteration]);
		},
		
		getCurrentCounts : function(){
			return this.counts[this.animation.iteration];
		},
		
		destroy : function() {
			if(this.worldMap) {
				this.worldMap.remove();
			}
			this.mapContainer.empty();
			this.legendContainer.empty();
			this.titleContainer.empty();
		},
		
		assignColors : function(counts, buckets, palette){

		},

		exportMap: function(fileType) {
			if(!window.SVGAngle) {
				throw("SVG not supported");
			}
			
			var mapBackground="white";
			var svg = $('.jvectormap-container').html();
			var newSvg = $('.jvectormap-container').html();
			var mapHeight = $('.jvectormap-container').find('svg').attr('height');
			mapHeight=parseInt(mapHeight)+20;
						
			var heightI = svg.indexOf("height");
			heightI = svg.indexOf('"',heightI);
			var heightIe = svg.indexOf('"',heightI+1);
			svg = svg.slice(0, heightI+1) + mapHeight + svg.slice(heightIe);
			//alert( svg.slice(0,20));
			
			//make space on top for title / doesnt work
			//var translateI = svg.indexOf("translate");
			//translateI = svg.indexOf(',',translateI);
			//var translateIe = svg.indexOf(')',translateI+1);
			//var oldTranslate = parseInt(svg.slice(translateI+1, translateIe));
			//svg = svg.slice(0, translateI+1) + (oldTranslate+30) + svg.slice(translateIe);
			
			//console.log(svg);
			//jvector map sanitize
			svg = svg.replace(/<div[^<]+<\/div>/gi, '');
			svg = svg.replace(/<svg /gi, '<svg xmlns="http://www.w3.org/2000/svg"  version="1.1" ');
			svg = svg.replace(/<g><\/g>/gi, '');
			svg = svg.replace(/<g/,'<rect x="0" y="0" width="100%" height="100%" fill="' + mapBackground + '"></rect><g');
			//<text x="20" y="20" font-family="sans-serif" font-size="20px" fill="black">'+ this.titleContainer.text() +'</text>
			// standard sanitize
			svg = svg
				.replace(/zIndex="[^"]+"/g, '')
				.replace(/isShadow="[^"]+"/g, '')
				.replace(/symbolName="[^"]+"/g, '')
				.replace(/jQuery[0-9]+="[^"]+"/g, '')
				.replace(/isTracker="[^"]+"/g, '')
				.replace(/url\([^#]+#/g, 'url(#')
		
				// Replace HTML entities, issue #347
				.replace(/&nbsp;/g, '\u00A0') // no-break space
				.replace(/&shy;/g,  '\u00AD') // soft hyphen
		
				// IE specific
				.replace(/id=([^" >]+)/g, 'id="$1"')
				.replace(/class=([^" ]+)/g, 'class="$1"')
				.replace(/ transform /g, ' ')
				.replace(/:(path|rect)/g, '$1')
				.replace(/style="([^"]+)"/g, function (s) {
					return s.toLowerCase();
				});
		
			// IE9 beta bugs with innerHTML. Test again with final IE9.
			svg = svg.replace(/(url\(#highcharts-[0-9]+)&quot;/g, '$1')
				.replace(/&quot;/g, "'");
			if ((svg.match(/ xmlns="/g)) && svg.match(/ xmlns="/g).length === 2) {
				svg = svg.replace(/xmlns="[^"]+"/, '');
			}
		
			//console.log(svg);
			var export_url = "/global/scripts/jquery/highcharts/exporting-server/index.cfm";
			var type = "";
			
			switch(fileType) {
				case 'svg':
					type="image/svg+xml";
					break;
				case 'pdf':
					type="application/pdf";
					break;
				case 'png':
				default:
					type="image/png";
					break;
			}
			
			String.prototype.replaceAll = function(search, replace)
			{
				//if replace is null, return original string otherwise it will
				//replace search string with 'undefined'.
				if(!replace) 
					return this;
			
				return this.replace(new RegExp('[' + search + ']', 'g'), replace);
			};
						
			var hiddenForm=$('<form action="' + export_url+ '" method="POST">' + 
			'<input type="hidden" name="svg" id="hiddensvg">' +
			'<input type="hidden" name="type" value="' + type + '">' +
			'<input type="hidden" name="filename" value="map_of_' + this.titleContainer.text().replaceAll(':',',').replaceAll(' ','_') + '">' +
			'</form>');
			$('body').append(hiddenForm);
			hiddenForm.find('input[id=hiddensvg]').val(svg);
			hiddenForm.submit();
			hiddenForm.remove();
			
		},
		
		__classvars__ : {
			palette : ['#7ce3ff', '#4cc9ff', '#0196d8', '#00628c', '#00355b']
		}
	});
});