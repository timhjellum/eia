if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports == exports) {
    module.exports = 'continuousmap-ng';
}
(function() {
    angular.module('continuousmap-ng', [])
        .directive('continuousmap', ['$templateCache', '$log', '$location',  map]);
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
        $templateCache.put('continuousmap-ng.html', '\
            <div class="time-slider-container">\
                <div class="labelContainer"></div>\
                <div class="timeSlider"></div>\
            </div>\
            <div class="map-container">\
            </div>\
            ');
 
        return {
            restrict : 'EA',
            replace: true,
            template : $templateCache.get('continuousmap-ng.html'),
            scope: {
                mapdata: '=',
                options: '='
            },
            link: function (scope, element, attrs) {
                scope.$watch(function () {
                        return scope.mapdata;
                }, function () {

                        drawMap();
                }, false);
                var self = this;
                if(typeof scope.options == 'undefined'){
                    scope.options = {};
                }
                if(typeof scope.options.map == 'undefined'){
                    scope.options.map = 'us_merc_en';
                }
                var drawMap = function () {
                	if(typeof scope.mapdata != "undefined"){
						self.container = $("#" + attrs['id']);
						
                        switch(attrs['ngMapType']){
                            case "bubble":
                                self.container.vectorMap(angular.extend(scope.options,{
                                    series: {
                                        markers : [{
                                            attribute : 'r',
                                            scale : [6, 32],
                                            min: jvm.min(scope.mapdata),
                                            max: jvm.max(scope.mapdata),
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
                                }));
                                self.map = self.container.vectorMap('get', 'mapObject');
                                self.markers = [];
                                self.markerData = [];
                                $.each(self.map.regions, function(id, region) {
                                    var bbox = region.element.shape.getBBox();
                                    var x = ((bbox.x + bbox.width/2) + self.map.transX) * self.map.scale;
                                    var y = ((bbox.y + bbox.height/2) + self.map.transY) * self.map.scale;
                                    var latlng = self.map.pointToLatLng(x, y);
                                    if(scope.mapdata[id]){
                                        self.markers.push({
                                            id : id,
                                            latLng: [latlng.lat, latlng.lng],
                                            name : region.config.name,
                                            data : scope.mapdata[id]
                                        });
                                        self.markerData.push(scope.mapdata[id]);
                                    }
                                });
                                self.map.addMarkers(markers);
                                self.map.series.markers[0].setValues(self.markerData);

                            break;
                            case 'heat':
                            default:
        						self.container.vectorMap(angular.extend(scope.options, {
                                    series: {
                                        regions: [{
                                            values: scope.mapdata,
                                            min: jvm.min(scope.mapdata),
                                            max: jvm.max(scope.mapdata),
                                            scale: ['#C8EEFF', '#0071A4'],
                                            normalizeFunction: 'polynomial'
                                        }]
                                    }
                                }));
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