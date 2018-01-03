/*
    Attributes:
    ngOrientation - {vertical|horizontal}
*/

if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports == exports) {
    module.exports = 'linechart-ng';
}
(function() {
    angular.module('linechart-ng', [])
        .directive('linechart', ['$templateCache', '$log', '$location', linechart]);

	function linechart($templateCache, $log, $location) {
		var months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return {
            restrict : 'AEC',
            replace: false,
            scope: {
                chartdata: '=',
                indexopt: '=',
                period: '=',
                freq: '='
            },
            link: function (scope, element, attrs) {
                var container = $(element).attr("id");
				
                scope.$watch("period", function (newValue,oldvalue) {
                    if(typeof newValue !== 'undefined'){
                        config.dataColumns=determineCols();
                        config.start=newValue[0],
                        config.end=newValue[1], 
                        drawPlot();
                    }
                }, false);
                scope.$watch("chartdata", function (newValue,oldvalue) {
					if(typeof newValue !== 'undefined')
                    	drawPlot();
                }, false);
				
                scope.$watch("indexopt", function (newValue,oldvalue) {
					if(typeof newValue !== 'undefined'){
						config.indexing=newValue;
    	                drawPlot();
					}
                }, false);
				
				var determineCols=function(){
					var ret=[];
					
					if(typeof scope.period === 'undefined')
						return ret;	
					
					var current=scope.period[0];
					var increment=3;
					
					switch(scope.freq){
						case 'A':
							for(x=current;x<=scope.period[1];x++)
								ret.push(x);
							break;
						case 'M':
							increment=1;
						case 'Q':
							var yyyy=parseInt(current/100);
							var month=current%100;
							var endyyyy=parseInt(scope.period[1]/100);
							var endmonth=scope.period[1]%100;
							
							while(yyyy<endyyyy||(yyyy==endyyyy&&month<=endmonth)){
								var val=yyyy.toString()+(parseInt(month) < 10 ? '0' : '')+month;
								
								ret.push(val);
								month=month+increment;
								if(month>12){
									month=increment;
									yyyy++;
								}
							}
							break;
					}
					
					return ret;
				};
				
                var config = {
                    'title' : attrs['ngTitle'],
                    'dataColumns' : determineCols(), //TODO: change
                    'indexing' : scope.indexopt,
                    'id' : attrs['ngId'],
                    'tilt' : attrs['ngTilt']
                };
				
                var defaultYAxisOptions = {
                    'labels' : {
                        'x' : null,
                        'y' : null
                    }
                };
                var defaultChartOptions = {
                    'chart' : {
                        'zoomType' : '',
                        'panning' : false,
                        'lineUpYAxisZeros' : true
                    },
                    'xAxis' : {
                        'maxZoom' : 1,
                        'type' : 'datetime',
                        'labels' : {
                            y : 20
                        },
                        'startOnTick': false,
                        'showFirstLabel': true
                    },
                    'navigator' : {
                        'enabled' : false
                    },
                    'rangeSelector' : {
                        'enabled' : false
                    },
                    'scrollbar' : {
                        'enabled' : false
                    }
                }; 
                var seriesColors = Highcharts.getOptions()['colors'];
                var seriesColorQueue = seriesColors.slice(0);
                var seriesSymbols = Highcharts.getOptions()['symbols'];
                var seriesSymbolQueue = seriesSymbols.slice(0); 
                var createSeriesOpts = function(datum, dataColumns, freq, showUnits, usePinnedName, start){
                    var seriesOpts = {
                        'name' : datum.name,
                        'data' : [],
                        'color' : claimNextColor(),
                        'marker' : {
                            'symbol' : claimNextSymbol()
                        },
                        'tooltip' : {
                            'units' : datum['units'],
                            'precision' : config.indexing == 1 ? 2 : datum.precision == 0 ? 1 : datum.precision
                        },
                        'stickyTracking' : false, 
                        'xType' : freq == "M" ? 3 : freq == "Q" ? 2 : 1 
                    };
                    return indexSeries(datum, dataColumns, freq, seriesOpts, start);
                };
                var resetColorQueue = function(){
                    seriesColorQueue = seriesColors.slice(0);
                };
                var claimNextColor = function(){
                    var color = seriesColorQueue.shift();
                    seriesColorQueue.push(color);
                    return color;
                };
                var releaseColor = function(color){
                    seriesColorQueue.splice($.inArray(color,seriesColorQueue),1);
                    seriesColorQueue.unshift(color);
                };
                var resetSymbolQueue = function(){
                    seriesSymbolQueue = seriesSymbols.slice(0);
                };
                var claimNextSymbol = function(){
                    symbol = seriesSymbolQueue.shift();
                    seriesSymbolQueue.push(symbol);
                    return symbol;
                };
                var releaseSymbol = function(symbol){
                    seriesSymbolQueue.splice($.inArray(symbol,seriesSymbolQueue),1);
                    seriesSymbolQueue.unshift(symbol);
                };
                var indexSeries = function(datum, dataColumns, freq, seriesOpts, start){
                    var index = null;
                    datum.indexed = {};
                    switch(config.indexing){
                        case '1': //Percent
			                var lastDate=999999;
                            $.each(datum.data, function(date, val) {
                                if(date >= start && val != "" && (index == null||date<lastDate)){
                                    index = val;
									lastDate=date;
                                } 
							});
							
                            $.each(datum.data, function(date, val) {
                                if (index != null) {
                                    datum.indexed[date] = (((val / index) * 100) - 100);
                                } else {
                                    datum.indexed[date] = null;
                                }
                            });
                        break;
                        case '2': //Value
			                var lastDate=999999;
                            $.each(datum.data, function(date, val) {
                                if(date >= start && val != "" && (index == null||date<lastDate)){
                                    index = val;
									lastDate=date;
                                } 
							});
							
                            $.each(datum.data, function(date, val) {
                                if (index != null){
                                    datum.indexed[date] = (val - index);
                                } else {
                                    datum.indexed[date] = null
                                }
                            });
                        break;
                        default:
                        datum.indexed = datum.data;
                        break;
                    }

                    var tmp, j, ret = [];
                    if(typeof datum["last_historical"] != "undefined"){
                        for(j=0; j<dataColumns.length; j++){
                            var columnKey = parseInt(dataColumns[j].toString());
                            if(columnKey <= datum["last_historical"]) {
                                if(ret.length == 0) {
                                    ret.push($.extend(true, {}, seriesOpts));
                                }
                                ret[0]['data'].push([
                                    parseDateCode(columnKey, freq).getTime(),
                                    !isNaN(tmp = parseFloat(datum['indexed'][columnKey])) ? tmp : null
                                ]);
                            }
                            if(columnKey >= datum["last_historical"]) {
                                if(ret.length == 0) {
                                    ret.push($.extend(true, {}, seriesOpts));
                                }
                                else if(ret.length == 1) {
                                    ret.push($.extend(true, {'linkedTo' : ':previous', 'dashStyle' : 'Dash'}, seriesOpts));
                                }
                                ret[ret.length - 1]['data'].push([
                                    parseDateCode(columnKey, freq).getTime(),
                                    !isNaN(tmp = parseFloat(datum['indexed'][columnKey])) ? tmp : null
                                ]);
                            }
                        }
                    } else {
                        ret.push($.extend(true, {}, seriesOpts));
                        for(j=0; j<dataColumns.length; j++){
                            var columnKey = parseInt(dataColumns[j].toString());
							tmp = parseFloat(datum['indexed'][columnKey]);
                            ret[0]['data'].push([
                                parseDateCode(columnKey, freq).getTime(),
                                !isNaN(tmp) ? tmp : null
                            ]);
                        }
                    }
                    return ret;
                };
                var getNumberOfDataPoints = function(start, end, freq) {
                    var ret = 0;
                    var startDate = parseDateCode(start, freq);
                    var endDate = parseDateCode(end, freq);
                    switch(freq) {
                        case 'A': ret = endDate.getFullYear() - startDate.getFullYear() + 1;
                        break;
                        case 'Q': ret = (endDate.getFullYear() - startDate.getFullYear() + 1)*4 - startDate.getMonth()/3 - (3 - endDate.getMonth()/3);
                        break;
                        case 'M': ret = (endDate.getFullYear() - startDate.getFullYear() + 1)*12 - startDate.getMonth() - (11 - endDate.getMonth());
                        break;
                    }
                    
                    return ret;
                };
                var parseDateCode = function(code, freq){
                    code = code.toString();
                    var y = code.substring(0,4),
                    date, m;
                    switch(freq.toUpperCase()){
                        case 'A': m = 0;
                        break;
                        case 'Q': m = code.substring(4) - 1;
                        break;
                        case 'M': m = code.substring(4) - 1;
                        break;
                    }
                    if(m !== void 0){date = new Date(y, m);}
                    return date;
                };
                var formatDateCode = function(code, freq){
					if(typeof code === 'undefined')
						return "";
						
                    var y = code.toString().substring(0,4),
                    qm = code.toString().substring(4,6),
                    ret = '';
                    switch(freq){
                        case 'A': ret = y;
                        break;
                        case 'Q': ret = 'Q' + parseInt(qm, 10) + ' ' + y;
                        break;
                        case 'M': ret = months[parseInt(qm, 10) - 1] + ' ' + y;
                        break;
                    }
                    return ret;
                };
                var drawPlot = function () {
                    this.data = scope.chartdata;
                    var self = this,
                    seriesOpts = [], axis = [], units = {}, i, chartOpts, datum, unit;
                    this.dataColumns = config.dataColumns;
                    this.freq = scope.freq;
                    this.indexing = config.indexing;
                    this.seriesMap = {};

                    resetColorQueue();
                    resetSymbolQueue();
                    
                    if(this.indexing != 1){
                        for(i=0; i<this.data.length; i++){
                            if(data[i] != null ) {
                                datum = data[i];
                                unit = datum['units'];
                                
                                if(!(unit in units)){
                                    units[unit] = axis.length;
                                    axis.push($.extend(true, {
                                        'title' : {
                                            'text' : unit
                                        },
                                        'opposite' : axis.length % 2
                                    }, defaultYAxisOptions))
                                }
                            }
                        }
                    }else{
                        unit = 'Percent';
                        units[unit] = 0;
                        axis.push($.extend({
                            'title' : {
                                'text' : unit
                            }
                        }, defaultYAxisOptions))
                    }
                    for(i=0; i<this.data.length; i++){
                        if(data[i] != null ) {
                            datum = data[i];
                            var curr_series = null;
							var firstData;
							var done=false;
														
							angular.forEach(datum.data,function(value,key){
								if(!done){
									if(!isNaN(value)){
										firstData=key;
										done=true;
									}
								}
							});
							
                            if(typeof firstData !== 'undefined' && ((indexing == 1 || indexing == 2) && !isNaN(datum.data[firstData])) || (indexing == 0 || typeof indexing === 'undefined')) {
                                curr_series = createSeriesOpts(datum, dataColumns, freq, axis.length > 1 ? true : false, false, firstData);
								
                                $.each(curr_series, function(index, value) {
                                    curr_series[index] = $.extend(curr_series[index], {
                                        'yAxis' : indexing == 1 ? 0 : units[datum['units']]
                                    });
                                    seriesOpts.push(curr_series[index]);
                                });
                            }
                        } else {
                             claimNextColor();
                             claimNextSymbol();
                        }
                    }
                                        
					var xAxis={};
					
					if(scope.period[0]&&scope.period[1]){
						xAxis.min=parseDateCode(scope.period[0], scope.freq).getTime();
                        xAxis.max=parseDateCode(scope.period[1], scope.freq).getTime();
                    };

                    chartOpts = $.extend(true, {
                        'chart' : {
                            'renderTo' : $("#" + config.id).get(0),
                            'spacingBottom' : 0
                        },
                        'title' : {
                            'text' : attrs['ngTitle']
                        },
                        'yAxis' : axis,
                        'xAxis' : xAxis,
                        'series' : seriesOpts,
                        'userGenerated' : false
                    }, defaultChartOptions);

                    // See if there are any series ID's from the API for exporting
                    var seriesIDs_array = [];
                    for (i=0; i < this.data.length; i++) {
                        if (typeof this.data[i].seriesID != "undefined") {
                            seriesIDs_array.push(this.data[i].seriesID);
                        }
                    }
                    // If any series ID's were found
                    if (seriesIDs_array.length) {
                        // Determine whether the chart is indexed as a percent, as a value, or not at all
                        if (scope.indexopt == 1)
                            var analysis = 'indexpct';
                        else if (scope.indexopt == 2)
                            var analysis = 'indexval';
                        else
                            var analysis = 'none';
                        // Convert the array into a semicolon delimited string
                        var seriesIDs = seriesIDs_array.join(';');
                        // Add to the chart options
                        chartOpts = $.extend(true, {
                            exporting:{
                                // Enabled embedding charts (through download button)
                                embedOptions: {
                                    // Set the semicolon-delimited string of series ID's used in the API
                                    series_id: seriesIDs,
                                    // Line chart
                                    relation_mode: 'line',
                                    // Use the value set above for indexing
                                    analysis: analysis
                                }
                            }
                        }, chartOpts);
                    }

					if(scope.period[0]&&scope.period[1])
                    	var points = getNumberOfDataPoints(scope.period[0], scope.period[1], scope.freq);
					else
						var points=0;
                    switch(this.freq) {
                        case 'A':
                            chartOpts['xAxis']['tickInterval'] = (365*24*3600*1000)*Math.ceil(points/10);
                            break;
                        case 'Q':
                            chartOpts['xAxis']['tickInterval'] = (365*24*3600*1000/4)*Math.ceil(points/10);
                            break;
                        case 'M':
                            chartOpts['xAxis']['tickInterval'] = (365*24*3600*1000/12)*Math.ceil(points/10);
                            break;
                    }
                    switch(this.indexing){
                        case '1':
                            $.extend(true, chartOpts, {
                                'yAxis' : Highcharts.map(chartOpts.yAxis, function(axisOpts){
                                    return $.extend(true, axisOpts, {
                                        'min' : null,
                                        'title': {
                                            'text' : 'Indexed to ' + formatDateCode(firstData, scope.freq) + ' as percent',
                                            'align' : chartOpts.yAxis.length > 2 ? 'middle' : 'above'
                                        }
                                    });
                                })
                            });
                            break;
                        case '2':
                            $.extend(true, chartOpts, {
                                'yAxis' : Highcharts.map(chartOpts.yAxis, function(axisOpts){
                                    return $.extend(true, axisOpts, {
                                        'min' : null,
                                        'title' : {
                                            'text' : 'Indexed to ' + formatDateCode(firstData, scope.freq) + ' as value',
                                            'align' : chartOpts.yAxis.length > 2 ? 'middle' : 'above'
                                        }
                                    });
                                })
                            });
                            break;
                        default:
                            $.extend(true, chartOpts, {
                                'yAxis' : Highcharts.map(chartOpts.yAxis, function(axisOpts){
                                    return $.extend(true, axisOpts, {
                                        'min' : null,
                                        'title' : {
                                            'align' : chartOpts.yAxis.length > 2 ? 'middle' : 'above'
                                        }
                                    });
                                })
                            });
                            break;
                    }
                    this.units = units;
                    this.axis = axis;
                    this.chart = new Highcharts.Chart(chartOpts);
                    this.series = this.chart.series.slice(0);
                    $.each(this.series, function(i, s){
                        self.seriesMap[s.name] = i;
                    });
                }; // END of drawPlot()
            }
        };
    }
}());