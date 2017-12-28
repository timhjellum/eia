/*
    Attributes:
    ngOrientation - {vertical|horizontal}
*/

if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports == exports) {
    module.exports = 'map-ng';
}
(function() {
    angular.module('map-ng', [])
        .directive('map', ['$templateCache', '$log', '$location',  map]);
    function useGetterSetter(attrs) {
       if(attrs['ngModelOptions']) {
           eval("var a = " + attrs['ngModelOptions']);
           return a && a.getterSetter;
       }
    return false;
   };
   
   function model(scope, attrs, newValue) {
       var currentValue = useGetterSetter(attrs) ? scope[attrs['ngModel']]() : scope[attrs['ngModel']];
       if ( angular.isDefined(newValue) && newValue != currentValue) {
           if(useGetterSetter(attrs)) {
                scope.$apply(function() {
                   scope[attrs['ngModel']](newValue);
               });
               //return scope;
           }
           else {
                scope.$apply(function() {
                   scope[attrs['ngModel']] = newValue;
               });
               //return scope;
           }
           currentValue = newValue;
       }
       
       return currentValue;
   };
	function map($templateCache, $log, $location) {
        return {
            restrict : 'A',
            replace: false,
            scope: {
                mapdata: '='/*,
                slider: '='*/
            },
            link: function (scope, element, attrs) {
                scope.$watch(function () {
                        return scope.mapdata;
                }, function () {
                        drawMap();
                }, false);
                /*scope.$watch(function () {
                        return scope.slider();
                }, function () {
                        updateMap();
                }, false);*/
                var self = this;
                var config = {
                	'basemap' : attrs['ngMap'],
                	'mapType' : attrs['ngType'],
                	'period' : attrs['ngPeriod'],
                    'id' : attrs['ngId']
                };
                function hexToRgb(hex) {
                    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? [
                        parseInt(result[1], 16),
                        parseInt(result[2], 16),
                        parseInt(result[3], 16)
                    ] : null;
                };
                function componentToHex(c) {
                    var hex = c.toString(16);
                    return hex.length == 1 ? "0" + hex : hex;
                }
                function rgbToHex(rgb) {

                    return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
                }
                function interpolate(val, rgb1, rgb2) {
                  var rgb = [0,0,0];
                  for (var i = 0; i < 3; i++) {
                    rgb[i] = Math.floor(rgb1[i] * (1.0 - val) + rgb2[i] * val);
                  }
                  return rgb;
                }
                var getMinMax = function (data) {
                    var ret = [];
                    for(var period in data){
                        for(var datum in data[period]){
                            if(typeof ret[0] == "undefined" || data[period][datum] < ret[0]){
                                ret[0] = data[period][datum];
                            }
                            if(typeof ret[1] == "undefined" || data[period][datum] > ret[1]){
                                ret[1] = data[period][datum];
                            }
                        }
                    }
                    return ret;
                };
                /*var getGrowthData = function (data, period, colors) {
                    var previous = (parseInt(period)-1).toString();
                    var ret = {"data" : {}, "colors" : {}};
                        for(var region in data[period]){
                            if(data[previous][region] != 0){
                                ret.data[region] = ((data[period][region] - data[previous][region])/data[previous][region])*100;
                            } else {
                                ret.data[region] = 0;
                            }
                            if(ret.data[region] > 0){
                                ret.colors[region] = rgbToHex(interpolate(ret.data[region]/100, colors[2], colors[3]));
                            } else if(ret.data[region] < 0) {
                                ret.colors[region] = rgbToHex(interpolate(ret.data[region]/-100, colors[1], colors[0]));
                            } else {
                                ret.colors[region] = '#ffffff';
                            }
                        }
                    return ret;
                };*/
                var drawMap = function () {
                	if(typeof scope.mapdata != "undefined"){
	                	self.data = scope.mapdata;
						self.container = $("#" + config.id);
						config.basemap = typeof config.basemap == 'undefined' ? 'us_merc_en' : config.basemap;
                        switch(config.mapType){
                            /*case "growth":
                                var GROWTH_COLORS = [hexToRgb('#6F2EA4'),hexToRgb('#C5ABDB'),hexToRgb('#BED5AD'),hexToRgb('#5D9732')];
                                self.growthData = getGrowthData(self.data.DATA, config.period, GROWTH_COLORS);
                                self.container.vectorMap({
                                    map: config.basemap,
                                    series: {
                                        regions: [{
                                           values: self.growthData.data
                                        }]
                                    }
                                });
                                self.map = self.container.vectorMap('get', 'mapObject');
                                self.map.series.regions[0].setValues(self.growthData.colors);  
                            break;*/
                            case "bubble":
                                self.minMax =getMinMax(self.data.DATA);
                                self.container.vectorMap({
                                    map: config.basemap
                                });
                                self.map = self.container.vectorMap('get', 'mapObject');
                                self.markers = [];
                                self.markerData = [];
                                $.each(self.map.regions, function(id, region) {
                                    var bbox = region.element.shape.getBBox();
                                    var x = ((bbox.x + bbox.width/2) + self.map.transX) * self.map.scale;
                                    var y = ((bbox.y + bbox.height/2) + self.map.transY) * self.map.scale;
                                    var latlng = self.map.pointToLatLng(x, y);
                                    if(self.data.DATA[config.period][id]){
                                        self.markers.push({
                                            id : id,
                                            latLng: [latlng.lat, latlng.lng],
                                            name : region.config.name,
                                            data : self.data.DATA[config.period][id]
                                        });
                                        self.markerData.push(self.data.DATA[config.period][id]);
                                    }
                                });
                                self.container.empty();
                                self.container.vectorMap({
                                    map: config.basemap,
                                    markers: self.markers,
                                    series: {
                                        markers : [{
                                            attribute : 'r',
                                            scale : [6, 32],
                                            values : self.markerData,
                                            min: self.minMax[0],
                                            max: self.minMax[1],
                                            normalizeFunction : 'linear'
                                        }]
                                    },
                                    markerStyle : {
                                        initial: {
                                            fill: '#C8EEFF',
                                            stroke: '#666',
                                            "fill-opacity": 1,
                                            "stroke-width": 1,
                                            "stroke-opacity": 1
                                        },
                                        hover: {
                                            stroke: 'yellow',
                                            "stroke-width": 2,
                                            cursor: 'pointer'
                                        }
                                    } 
                                })
                                self.map = self.container.vectorMap('get', 'mapObject');
                            break;
                            case "combo":
                                self.minMax =getMinMax(self.data.DATA);
                                self.container.vectorMap({
                                    map: config.basemap
                                });
                                self.map = self.container.vectorMap('get', 'mapObject');
                                self.markers = [];
                                self.markerData = [];
                                var GROWTH_COLORS = [hexToRgb('#6F2EA4'),hexToRgb('#C5ABDB'),hexToRgb('#BED5AD'),hexToRgb('#5D9732')];
                                self.growthData = getGrowthData(self.data.DATA, config.period, GROWTH_COLORS);
                                $.each(self.map.regions, function(id, region) {
                                    var bbox = region.element.shape.getBBox();
                                    var x = ((bbox.x + bbox.width/2) + self.map.transX) * self.map.scale;
                                    var y = ((bbox.y + bbox.height/2) + self.map.transY) * self.map.scale;
                                    var latlng = self.map.pointToLatLng(x, y);
                                    if(self.growthData.data[id]){
                                        self.markers.push({
                                            id : id,
                                            latLng: [latlng.lat, latlng.lng],
                                            name : region.config.name,
                                            data : self.data.DATA[config.period][id],
                                            style : {
                                                fill : self.growthData.colors[id]
                                            }
                                        });
                                        self.markerData.push(self.data.DATA[config.period][id]);
                                    }
                                });
                                self.container.empty();
                                self.container.vectorMap({
                                    map: config.basemap,
                                    markers: self.markers,
                                    series: {
                                        markers : [{
                                            attribute : 'r',
                                            scale : [6, 32],
                                            values : self.markerData,
                                            min: self.minMax[0],
                                            max: self.minMax[1],
                                            normalizeFunction : 'linear'
                                        }]
                                    }
                                });
                                self.map = self.container.vectorMap('get', 'mapObject');
                            break;
                            default:
                                self.minMax =getMinMax(self.data.DATA);
        						self.container.vectorMap({
                                    map: config.basemap,
                                    series: {
                                        regions: [{
                                            values: self.data.DATA[config.period],
                                            min: self.minMax[0],
                                            max: self.minMax[1],
                                            scale: ['#C8EEFF', '#0071A4'],
                                            normalizeFunction: 'polynomial'
                                        }]
                                    }
                                });
                                self.map = self.container.vectorMap('get', 'mapObject');
                            break;
                        }
					}
				}
                /*var updateMap = function (){
                    if(typeof self.map != 'undefined'){
                        config.period = scope.slider;
                        //config.period = (parseInt(config.period)+1).toString();
                        self.map.series.regions[0].setValues(self.data.DATA[config.period]);
                    }
                }*/
			}
        };
    }
}());