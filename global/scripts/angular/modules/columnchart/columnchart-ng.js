if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports == exports) {
    module.exports = 'columnchart-ng';
}
(function() {
    angular.module('columnchart-ng', [])
        .directive('columnchart', ['$templateCache', '$log', '$location', columnchart]);

	function columnchart($templateCache, $log, $location) {
		var months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return {
            restrict : 'AEC',
            replace: false,
            scope: {
                chartdata: '=',
                valueopt: '=',
                seriesopt: '=',
				period: '=',
				freq: '='
            },
            link: function (scope, element, attrs) {
                var container = $(element).attr("id");
				
				scope.$watchGroup(["chartdata","valueopt","seriesopt","period"],
					function(newValue,oldValue){
						var valid=true;
						for(var x=0;x<newValue.length;x++){
							if(typeof newValue[x] === 'undefined')
								valid=false;
						}
						if(valid)
							drawPlot();
					});
				
                var config = {
                    'title' : attrs['ngTitle'],
                    'id' : attrs['id']
                };

                var drawPlot = function () {
					var self = this;
					var start=scope.period[0];
					var end=scope.period[1];
					var seriesopt=parseInt(scope.seriesopt);
					this.units="units";
					this.categories = [];
					this.series = [];
					
					var showValues = scope.valueopt == '0';
					var showChange = scope.valueopt == '1';
					
					if(!showValues && !showChange) showValues = true;
					switch(seriesopt){
						case 0:
							var increment=3;
							switch(scope.freq){
								case 'A':
									for(x=start;x<=end;x++)
										this.categories.push(x);
									break;
								case 'M':
									increment=1;
								case 'Q':
									var yyyy=parseInt(start/100);
									var month=start%100;
									var endyyyy=parseInt(end/100);
									var endmonth=end%100;
									
									while(yyyy<endyyyy||(yyyy==endyyyy&&month<=endmonth)){
										var val;
										if(scope.freq=='M')
											val=months[month-1]+" "+yyyy.toString();
										else
											val="Q"+month/3+" "+yyyy.toString();
										
										this.categories.push(val);
										month=month+increment;
										if(month>12){
											month=increment;
											yyyy++;
										}
									}
									break;
							}
							break;
						case 1:
							switch(scope.freq){
								case 'A':
									this.categories.push(start);
									break;
								case 'M':
									var yyyy=parseInt(start/100);
									var month=start%100;
									this.categories.push(months[month-1]+" "+yyyy.toString());
									break;
								case 'Q':
									var yyyy=parseInt(start/100);
									var month=start%100;
									this.categories.push("Q"+month/3+" "+yyyy.toString());
									break;
							}
							break;
						case 2:
							switch(scope.freq){
								case 'A':
									this.categories.push(end);
									break;
								case 'M':
									var yyyy=parseInt(end/100);
									var month=end%100;
									this.categories.push(months[month-1]+" "+yyyy.toString());
									break;
								case 'Q':
									var yyyy=parseInt(end/100);
									var month=end%100;
									this.categories.push("Q"+month/3+" "+yyyy.toString());
									break;
							}
							break;
					}
					angular.forEach(scope.chartdata,function(value,index){
						var ret=[];
						var current=start;
						
						if(showValues){
							if(typeof scope.chartdata !== 'undefined'&&typeof scope.chartdata[0] !== 'undefined'&&typeof scope.chartdata[0].units !== 'undefined')
								this.units = scope.chartdata[0].units;
							switch(seriesopt){
							case 0:
								while(current<=end){
									var val=value.data[current];
									!isNaN(val) ? ret.push(val) : ret.push(null);
									var increment=3;
									switch(scope.freq){
										case 'A':
											current++;
											break;
										case 'M':
											increment=1;
										case 'Q':
											var yyyy=parseInt(current/100);
											var month=current%100;
											month=month+increment;
											if(month>12){
												month=increment;
												yyyy++;
											}
											current=parseInt(yyyy.toString()+(month < 10 ? '0' : '')+month);
											break;
									}
								}
								break;
							case 1:
								var val=value.data[current];
								!isNaN(val) ? ret.push(val) : ret.push(null);
								break;
							case 2:
								var val=value.data[end];
								!isNaN(val) ? ret.push(val) : ret.push(null);
								break;
							}
						}else{	
							if(typeof scope.chartdata !== 'undefined'&&typeof scope.chartdata[0] !== 'undefined'&&typeof scope.chartdata[0].units !== 'undefined')
								this.units = "Percent";
							switch(seriesopt){
								case 0:
									var lastDate=999999;
									var index = null;
									current=start;
									while(current<=end){
										if(current >= start && value.data[current] != "" && !isNaN(value.data[current]) && (index == null||current<lastDate)){
											index = value.data[current];
											lastDate=current;
										} 
										var increment=3;
										switch(scope.freq){
											case 'A':
												current++;
												break;
											case 'M':
												increment=1;
											case 'Q':
												var yyyy=parseInt(current/100);
												var month=current%100;
												month=month+increment;
												if(month>12){
													month=increment;
													yyyy++;
												}
												current=parseInt(yyyy.toString()+(month < 10 ? '0' : '')+month);
												break;
										}
									}
									current=start;
									if(index)
									while(current<=end){
										var val=value.data[current];
										
										if (val && !isNaN(val) &&index != null) {
											ret.push(((val / index) * 100) - 100);
										} else {
											ret.push(null);
										}
									
										var increment=3;
										switch(scope.freq){
											case 'A':
												current++;
												break;
											case 'M':
												increment=1;
											case 'Q':
												var yyyy=parseInt(current/100);
												var month=current%100;
												month=month+increment;
												if(month>12){
													month=increment;
													yyyy++;
												}
												current=parseInt(yyyy.toString()+(month < 10 ? '0' : '')+month);
												break;
											}
										}
										break;
									case 1:
										var val=value.data[current];
										!isNaN(val) ? ret.push(val) : ret.push(null);
										break;
									case 2:
										var val=value.data[end];
										!isNaN(val) ? ret.push(val) : ret.push(null);
										break;
								}
						}
						
						this.series.push({'name':value.name,'data':ret});
					});
					var opts={
						chart: {
							'renderTo' : $("#" + config.id).get(0),
							type: 'column'
						},
						title: {
							text: attrs['ngTitle']
						},
						xAxis: {
							categories: this.categories,
							title: {
								text: null
							},
							labels: {
								rotation: -45
							}
							/*,min : function() {
								switch(scope.valueopt) {
									case "1":
										return 0;
									case "0":
									default:
										switch(seriesopt) {
											case 1:
											case 2:
												return 0;
											case 0:
											default:
												return null;
										}
										return null;
								}
								
								return null;
							}(),
							max : function() {
								switch(scope.valueopt) {
									case "1":
										return 0;
									case "0":
									default:
										switch(seriesopt) {
											case 1:
											case 2:
												return 0;
											default:
												return null;
										}
								}
								
								return null;
							}()*/
						},
						yAxis: {
							min: 0,
							title: {
								text: this.units,
								align: 'above'
							},
							labels: {
								overflow: 'justify',
								verticalAlign: "middle"
							}
						},
						plotOptions: {
							bar: {
								dataLabels: {
									enabled: true
								}
							}
						},
						series: this.series
					};

					// See if there are any series ID's from the API for exporting
					var seriesIDs_array = [];
					for (i=0; i < scope.chartdata.length; i++) {
						if (typeof scope.chartdata[i].seriesID != "undefined") {
							seriesIDs_array.push(scope.chartdata[i].seriesID);
						}
					}
					// If any series ID's were found
					if (seriesIDs_array.length) {
						// Convert the array into a semicolon delimited string
						var seriesIDs = seriesIDs_array.join(';');
						// Add to the chart options
						opts = $.extend(true, {
	                        exporting:{
	                            // Enabled embedding charts (through download button)
	                            embedOptions: {
	                                // Set the semicolon-delimited string of series ID's used in the API
	                                series_id: seriesIDs,
	                                // Column/bar chart
	                                relation_mode: 'bar'
	                            }
	                        }
						}, opts);
					}
					// Create the Highchart
					var chart = new Highcharts.Chart(opts);
                }
            }
        };
    }
}());