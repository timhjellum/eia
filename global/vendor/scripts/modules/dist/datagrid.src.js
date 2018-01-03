/*
 RequireJS order 1.0.5 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
(function(){function k(a){var b=a.currentTarget||a.srcElement,c;if(a.type==="load"||l.test(b.readyState)){a=b.getAttribute("data-requiremodule");j[a]=!0;for(a=0;c=g[a];a++)if(j[c.name])c.req([c.name],c.onLoad);else break;a>0&&g.splice(0,a);setTimeout(function(){b.parentNode.removeChild(b)},15)}}function m(a){var b,c;a.setAttribute("data-orderloaded","loaded");for(a=0;c=h[a];a++)if((b=i[c])&&b.getAttribute("data-orderloaded")==="loaded")delete i[c],require.addScriptToDom(b);else break;a>0&&h.splice(0,
a)}var f=typeof document!=="undefined"&&typeof window!=="undefined"&&document.createElement("script"),n=f&&(f.async||window.opera&&Object.prototype.toString.call(window.opera)==="[object Opera]"||"MozAppearance"in document.documentElement.style),o=f&&f.readyState==="uninitialized",l=/^(complete|loaded)$/,g=[],j={},i={},h=[],f=null;define('order',{version:"1.0.5",load:function(a,b,c,e){var d;b.nameToUrl?(d=b.nameToUrl(a,null),require.s.skipAsync[d]=!0,n||e.isBuild?b([a],c):o?(e=require.s.contexts._,!e.urlFetched[d]&&
!e.loaded[a]&&(e.urlFetched[d]=!0,require.resourcesReady(!1),e.scriptCount+=1,d=require.attach(d,e,a,null,null,m),i[a]=d,h.push(a)),b([a],c)):b.specified(a)?b([a],c):(g.push({name:a,req:b,onLoad:c}),require.attach(d,null,a,k,"script/cache"))):b([a],c)}})})();





/**
 *	The 'datagrid' module does stuff.
 *
 *	@module datagrid
 *	@requires signals, classy, dragevent, mousewheel, slickcore, slickgrid
 */
 !function(define){
	define(
	'datagrid',[
		'signals',
		'classy',
		'order!dragevent',
		'order!mousewheel',
		'order!slickcore',
		'order!slickgrid',
		'order!slickdataview'
	],
	function(signals, Class)
	{
		/**
		 * The DataGrid view component
		 *
		 * @class DataGrid
		 * @namespace datagrid
		 * @constructor
		 * @param container {jQuery} A jQuery wrapper for the container
		 * that this view component should render to.
		 **/
		return Class.$extend({
			/**
			 *	Constructor Function for datagrid
			 *	@method __init__
			 *	@param {JQuery} container A JQuery object representing a &lt;DIV&gt; that will contain the datagrid component.
			 */
			__init__ : function(container){
				var self = this;
				/**
				 * A flag describing whether or not this dataGrid instance
				 * has been filtered
				 *
				 * @property isFiltered
				 * @type {boolean}
				 **/
				this.isFiltered = false;
				/**
				 * A reference to the SlickGrid instance proxied by this
				 * dataGrid instance.
				 *
				 * @property slickGrid
				 * @type {SlickGrid}
				 **/
				this.slickgrid = null;
				/**
				 * A reference to the container that this dataGrid instance
				 * renders to
				 *
				 * @property container
				 * @type {jQuery}
				 * @final
				 **/
				this.container = container.empty();
				/**
				 * The innerGridContainer that the SlickGrid instance renders
				 * to.
				 *
				 * @property innerGridContainer
				 * @type {jQuery}
				 * @final
				 **/
				this.innerGridContainer = $(this.$class.innerSlickGridHTML)
					.appendTo(this.container);
				/**
				 * The vertical slider object for this dataGrid instance.
				 *
				 * @property vSlider
				 * @type {object}
				 **/
				this.vSlider = null;
				/**
				 * The top horizontal slider object for this dataGrid instance.
				 *
				 * @property hSliderTop
				 * @type {object}
				 **/
				this.hSliderTop = null;
				/**
				 * The bottom horizontal slider object for this dataGrid instance.
				 *
				 * @property hSliderBottom
				 * @type {object}
				 **/
				this.hSliderBottom = null;
				/**
				 * The columns for this dataGrid after filtering has been applied.
				 *
				 * @property filteredColumns
				 * @type {array}
				 **/
				this.filteredColumns = [];
				/**
				 * The columns for this dataGrid without filtering applied.
				 *
				 * @property columns
				 * @type {array}
				 **/
				this.columns = [];
				/**
				 * The data array rendered by this dataGrid instance.
				 *
				 * @property data
				 * @type {array}
				 **/
				this.data = [];
				/**
				 * The configuration object for this dataGrid instance.
				 *
				 * @property options
				 * @type {object}
				 **/
				this.options = {};
				/**
				 * The signal that is issued whenever the SlickGrid wrapped by this
				 * dataGrid instance is clicked.  Handlers are passed row index, the
				 * cell (column) index, and the corresponding data item as arguments.
				 *
				 * @property onClick
				 * @type {Signal}
				 **/
				this.onClick = new signals.Signal();
				/**
				 * The signal that is issued whenever the columns are reorderd in the
				 * wrapped SlickGrid
				 *
				 * @property onColumnOrderChange
				 * @type {Signal}
				 **/
				this.onColumnOrderChanged = new signals.Signal();
				
				this.onHeaderClick = new signals.Signal();

				this.onHeaderCellRendered = new signals.Signal();

				this.onViewRowCountChanged = function(e, args){
					self.slickgrid.updateRowCount();
					self.slickgrid.render();
				};
				
				this.onViewRowsChanged = function(e, args){
					self.slickgrid.invalidateRows(args.rows);
					self.slickgrid.render();
				};
				
			},
			
			update : function(data, columns, options, start, end){
				var self = this;
				var doNumericFilter = start !== void 0 && end !== void 0;
				var filteredCols;
				
				columns = typeof columns == 'undefined' ? this.columns : columns;
				options = typeof options == 'undefined' ? this.options : options;
				
				if(!this.slickgrid){
					this.setData(data);
					this.setColumns(columns);
					this.setOptions(options);

					if(doNumericFilter)
						filteredCols = this.filterNumericColumns(start, end);
					else
						filteredCols = this.filterHiddenColumns(this.options.addSpacerColumn ?
							this.columns.concat([this.$class.spacerColumnOps]) :
							this.columns
						);

					this.slickgrid = new Slick.Grid(
						this.innerGridContainer,
						this.data,
						filteredCols,
						this.options
					);
					this.slickgrid.onClick.subscribe(function(e, data){
						self.onClick.dispatch(
							data['row'],
							data['cell'],
							self.slickgrid.getDataItem(data['row']),
							e
						);
					});
					this.slickgrid.onSort.subscribe(function(e, args) {
						self.data.sort(function(row1, row2) {
							var field = args.sortCol.field;
							var sign = args.sortAsc ? 1 : -1;
							var value1 = row1[field], value2 = row2[field];
							var result = (value1 == value2 ? 0 : ((value1 > value2) ? 1 : -1)) * sign;
							// Nulls last
							result = (
								(typeof value1 == 'undefined' || (typeof value1 == 'string' && value1 == '')) ? 
									1 : (
									(typeof value2 == 'undefined' || (typeof value2 == 'string' && value2 == '')) ? 
										-1 : 
										result
									)
							);
							if(result != 0) {
								return result;
							}
							return 0;
						});
						
						self.slickgrid.invalidate();
						self.slickgrid.render();
					});
					this.slickgrid.onColumnsReordered.subscribe(function(e, args) {
						self.resetHSliders();
						self.checkScroll();
						self.onColumnOrderChanged.dispatch(e, args);
					});
					this.slickgrid.onColumnsResized.subscribe(function(e, args) {
						self.resetHSliders();
						self.checkScroll();
					});
					this.slickgrid.onHeaderClick.subscribe(function(e, args){
						self.onHeaderClick.dispatch(e, args);
					});
					this.slickgrid.onHeaderCellRendered.subscribe(function(e, args){
						self.onHeaderCellRendered.dispatch(e, args);
					});
					this.checkScroll();
					if(this.options.scrollToRight) this.scrollToRight();
				}
				else{
					this.setData(data);
					this.setColumns(columns, true);
					this.setOptions(options);
					if(doNumericFilter) {
						this.filterNumericColumns(start, end);
					}
					else {
						this.slickgrid.setColumns(columns);
					}
					this.resetHSliders();
					this.checkScroll();
				}
			},
			
			outputToArrOfArrs : function(filtered){
				filtered = filtered !== void 0 ? filtered : true;
				var cols = filtered && this.isFiltered ? this.filteredColumns : this.columns,
				ret = [],
				i, j, datum, row, col, output, formatterArgs, value, numericValue;
				
				ret.push(row = []);
				
				for(i=0; i<cols.length; i++){
					col = cols[i];
					output = col.output !== void 0 ? col.output : true;
					if(output){
						row.push('"' + (typeof col.name != 'undefined' ? col.name : col.id) + '"');
					}
				}
				
				for(i=0; i < (this.data.getLength ? this.data.getLength() : this.data.length); i++){
					datum = this.data.getItem ? this.data.getItem(i) : this.data[i];
					ret.push(row = []);
					for(j=0; j<cols.length; j++){
						col = cols[j];
						output = col.output !== void 0 ? col.output : true;
						if(output){
							formatterArgs = [
								i,
								j,
								(col && typeof this.options.dataItemColumnValueExtractor == 'function') ? this.options.dataItemColumnValueExtractor(datum, col) : datum[col.field],
								col,
								datum
							];
							value = col.outputFormatter ?
								col.outputFormatter.apply(this, formatterArgs) :
								col.dataFormatter ?
								col.dataFormatter.apply(this, formatterArgs) :
								formatterArgs[2] || '';
							if(value !== undefined) {
								numericValue = value.toString().replace(/,/g, '');
							}
							
							row.push(
								!isNaN(numericValue) ? numericValue : '"' + (value ? value : '') + '"'
							);
						}
					}
				}
				
				return ret;
			},
			
			processColumns : function(cols){
				var i, col;
				for(i=0; i<cols.length; i++){
					col = cols[i];
					col.formatter = this.$class.defaultFormatter;
				}
				return cols;
			},
			
			filterHiddenColumns : function(cols){
				return $.map(cols, function(col){
					if(col.display === false) return null;
					else return col;
				});
			},
			
			checkScroll : function(){
					
				var self = this,
				slickViewport = $('.slick-viewport', this.container),
				slickPane = $('.slick-pane', this.container),
				mainPane, mainViewport, checkVScroll, checkHScroll;
				
				if(this.options.frozenColumn >= 0){
					mainViewport = slickViewport.filter('.slick-viewport-top.slick-viewport-right');
					mainPane = slickPane.filter('.slick-pane-top.slick-pane-right');
				}else{
					mainViewport = slickViewport.filter('.slick-viewport-top.slick-viewport-left');
					mainPane = slickPane.filter('.slick-pane-top.slick-pane-left');
				}
				
				(checkVScroll  = function(){
					if(!this.vSlider){
						// Create a vertical slider to scroll the table
						this.vSlider = $('<div/>')
							.appendTo(this.container)
							.css({
								'position' : 'relative',
								'float' : 'left',
								'height' : mainViewport.height() - 30,
								'marginTop' : 20,
								'marginBottom' : 10,
								'marginLeft' : 10
							})
							.slider({
								'orientation' : 'vertical',
								'min' : 0,
								'max' : 100,
								'value' : 100,
								'slide' : function(event, ui){
									(function(){
										this.scrollTop = (
											this.scrollHeight - this.offsetHeight
										) * ((100- ui.value) / 100);
									}).call(mainViewport.get(0));
								}
							});
						// Bind the scroll event of the mainViewport to the slider
						mainViewport.scroll(function(){
							self.vSlider.slider('value', 100 - (100 * this.scrollTop) /
								(this.scrollHeight - this.offsetHeight)
							);
						});	
						// Adjust the widths of the containers to account for the slider
						this.innerGridContainer.width(
							this.container.width() - this.vSlider.width() - 20
						).css('float', 'left');
						
						this.slickgrid.resizeCanvas();
					}
					else {
						this.vSlider.css('height', mainViewport.height() - 30);
					}
					if(mainViewport.get(0).scrollHeight > mainViewport.height())
						this.vSlider.slider('option', 'disabled', false);
					else
						this.vSlider.slider('option', 'disabled', true);
				}).call(this);
				// If we are in horizontal scroll territory...
				(checkHScroll = function(){
					var self = this,
					mainHeader, mainPanePosition, mainHeaderPosition;
					if(!this.hSliderTop && !this.hSliderBottom){
						// Create a horizontal slider to scroll the table
						mainHeader = slickPane.find('.slick-header').eq(0);
						mainHeaderPosition = mainHeader.position();
						mainPanePosition = mainPane.position();
						this.hSliderTop = $('<div/>')
							.appendTo(this.container)
							.css({
								'position' : 'absolute',
								'top' : mainHeaderPosition.top + mainHeader.height() - 13,
								'left' : mainPanePosition.left,
								'width' : mainViewport.width() - 28,
								'marginRight' : 30
							})
							.slider({
								'min' : 0,
								'max' : 100,
								'value' : 0,
								'slide' : function(event, ui){
									(function(){
										this.scrollLeft = (
											this.scrollWidth - this.offsetWidth
										) * (ui.value / 100);
										self.hSliderBottom.slider('value', ui.value);
									}).call(mainViewport.get(0));
								}
							})
							.addClass('hSliderTop');
						this.hSliderBottom = $('<div/>')
							.appendTo(this.container)
							.css({
								'position' : 'absolute',
								'bottom' : 0,
								'left' : mainPanePosition.left,
								'width' : mainViewport.width() - 28,
								'marginRight' : 30
							})
							.slider({
								'min' : 0,
								'max' : 100,
								'value' : 0,
								'slide' : function(event, ui){
									(function(){
										this.scrollLeft = (
											this.scrollWidth - this.offsetWidth
										) * (ui.value / 100);
										self.hSliderTop.slider('value', ui.value)
									}).call(mainViewport.get(0));
								}
							})
							.addClass('hSliderBottom');
						// Bind the scroll event of the tableScroller to the slider
						mainViewport.scroll(function(){
							self.hSliderTop.slider('value', (100 * this.scrollLeft) /
								(this.scrollWidth - this.offsetWidth)
							);
							self.hSliderBottom.slider('value', (100 * this.scrollLeft) /
								(this.scrollWidth - this.offsetWidth)
							);
						});
						// Adjust the height of the containers and vSlider to account
						// for the height of the scroller
						this.innerGridContainer.height(
							this.container.height() - this.hSliderBottom.height() - 20
						);
						// Check to see if we need an Vertical Scrollbar again
						checkVScroll.call(this);
					}
					else {
						this.hSliderTop.css('width', mainViewport.width() - 28);
						this.hSliderBottom.css('width', mainViewport.width() - 28);
					}
					
					if(mainViewport.get(0).scrollWidth > mainViewport.width()){
						this.hSliderBottom.slider('option', 'disabled', false);
						this.hSliderTop.slider('option', 'disabled', false);
						mainViewport.scroll();
					}
					else{
						mainViewport.scroll();
						this.hSliderBottom.slider('option', 'disabled', true);
						this.hSliderTop.slider('option', 'disabled', true);
						this.slickgrid.autosizeColumns();
					}
				}).call(this);
			},
			
			scrollToRight : function(){
				var slickViewport = $('.slick-viewport', this.container),
				mainViewport;
				
				if(this.options.frozenColumn >= 0){
					mainViewport = slickViewport.filter('.slick-viewport-top.slick-viewport-right');
				}else{
					mainViewport = slickViewport.filter('.slick-viewport-top.slick-viewport-left');
				}
				
				mainViewport.get(0).scrollLeft = mainViewport.get(0).scrollWidth;
			},
			
			filterNumericColumns : function(start, end){
				var i, column;
				this.filteredColumns = [];
				for(i=0; i<this.columns.length; i++){
					column = this.columns[i];
					if(!isNaN(column['id'])){
						if(column['id'] >= start && column['id'] <= end)
							this.filteredColumns.push(column);
					}else
						this.filteredColumns.push(column);
				};

				var cols = this.filterHiddenColumns(
					this.options.addSpacerColumn ? this.filteredColumns.concat([
					this.$class.spacerColumnOps	
				]) : this.filteredColumns);

				if(this.slickgrid){
					this.slickgrid.setColumns(cols);
					this.isFiltered = true;
					this.resetHSliders();
					this.checkScroll();
					if(this.options.scrollToRight) this.scrollToRight();
				}

				return cols;
			},
			
			setColumns : function(cols, dontUpdate){
				this.columns = this.processColumns(cols);
				this.isFiltered = false;
				if(this.slickgrid && !dontUpdate){
					this.slickgrid.setColumns(
						this.filterHiddenColumns(
							this.options.addSpacerColumn ? this.columns.concat([
								this.$class.spacerColumnOps
							]) : this.columns
						)
					);
					this.resetHSliders();
					this.checkScroll();
					if(this.options.scrollToRight) this.scrollToRight();
				}
			},
			
			setData : function(data){
				this.data = data;
				if(this.slickgrid){
					this.slickgrid.setData(data);
					this.resetHSliders();
					this.checkScroll();
				}
			},
			
			setOptions : function(options){
				this.options = $.extend(true, {} , this.$class.defaultOptions, options);
				if(this.slickgrid){
					this.slickgrid.setOptions(this.options);
				}
			},
			
			redraw : function(rows){
				if(rows)
					this.slickgrid.invalidateRows(rows);
				else
					this.slickgrid.invalidateAllRows();
				this.slickgrid.render();
			},
			
			resetHSliders : function(){
				this.hSliderBottom.remove();
				this.hSliderTop.remove();
				this.hSliderBottom = this.hSliderTop = null;
			},		
			
			destroy : function() {
				if(this.slickgrid) {
					this.slickgrid.destroy();
				}
			},
			
			__classvars__ : {
				
				defaultOptions : {
					'enableCellNavigation' : false,
					'enableColumnReorder' : false
				},
				
				spacerColumnOps : {
					'id' : 'spacer',
					'name' : ' ',
					'autoWidth' : true
				},
				
				innerSlickGridHTML : '<div class="inner-slickgrid-container"></div>',
		
					
				defaultFormatter : function(row, cell, value, columnDef, dataContext){
					var data = columnDef.dataFormatter ? columnDef.dataFormatter.apply(this, arguments) : value,
					display = columnDef.displayFormatter ?
						columnDef.displayFormatter.call(this, row, cell, data, columnDef, dataContext) : data;
					
					return display;
				},
				
				autosizeColumn : function(columns, index, data, padding){
					var sandbox = $('<div/>')
					.addClass('slick-cell')
					// For proper font sizing
					.addClass('ui-widget')
					.css({
						width:'auto',
						position:'absolute',
						top:1000,
						left:0
					})
					.appendTo('body'),
					column = columns[index],
					maxWidth = 0,
					i, datum, value, widthPlusPadding;
					
					for(i=0; i < (data.getLength ? data.getLength() : data.length); i++){
						datum = data.getItem ? data.getItem(i) : data[i];
						value = datum[column.field];
						sandbox.html(
							column.formatter ?
							column.formatter(i, index, value, column, datum) :
							column.displayFormatter ?
							column.displayFormatter(i, index, value, column, datum) :
							column.dataFormatter ?
							column.dataFormatter(i, index, value, column, datum) :
							value
						);
						
						maxWidth = Math.max(maxWidth, sandbox.outerWidth());
					}

					widthPlusPadding = maxWidth + (padding != void 0 ? padding : 0);
					
					sandbox.remove();
					
					column.width = column.maxWidth !== void 0 ? Math.min(widthPlusPadding, column.maxWidth) : widthPlusPadding;
				},
				
				linkSelectorFunction: function(viewportSelector, linkSelector, nth){
					var sortedRows = {};
					var viewport = $(viewportSelector),
					viewportOffset = viewport.offset(),
					link = $(),
					i = 0,
					ith, rows, row, links;
					
					// Only sort the rows once
					if(!sortedRows[viewportSelector]){
						sortedRows[viewportSelector] = $('.slick-row', viewport).get();
						sortedRows[viewportSelector].sort(function(a,b){
							var compA = $(a).offset().top;
							var compB = $(b).offset().top;
							return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
						});
					}
					
					$.each(sortedRows[viewportSelector], function(j, ele){
						row = $(ele);
						var rowOffset = row.offset();
						if(rowOffset.top > viewportOffset.top){
							links = $(linkSelector, row);
							links.each(function(k, ele){
								link = $(ele);
								var linkOffset = link.offset();
								if(linkOffset.left > viewportOffset.left){
									if(ith === void 0)
										ith = Math.min(nth, links.length - j);
									if(i == ith)
										return false;
									else
										i++;
								}
							});
							return false;
						}else{
							return true;
						}
					});
					
					return link;
				}
			}
		});
	});
}(
	typeof define == 'function' && typeof define.amd == 'object' ? define :
	function(deps, factory){
		var i;
		for(i=0; i<deps.length; i++) deps[i] = this[deps[i]];
		this['datagrid'] = factory.apply(this, deps);
	}
);
