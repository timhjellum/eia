if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports == exports) {
    module.exports = 'columnchart-ng';
}
(function() {
    angular.module('columnchart-ng', [])
        .directive('columnchart', ['$templateCache', '$log', '$location', columnchart]);

	function columnchart($templateCache, $log, $location) {
        return {
            restrict : 'A',
            replace: false,
            scope: {
                chartdata: '='
            },
            link: function (scope, element, attrs) {
                var container = $(element).attr("id");
                scope.$watch(function () {
                        return scope.chartdata;
                }, function () {
                        drawPlot();
                }, false);
                var config = {
                    'title' : attrs['ngTitle'],
                    'freq' : attrs['ngFreq'],
                    'period' : attrs['ngPeriod'],
                    'id' : attrs['ngId'],
                    'type' : attrs['ngCharttype']
                };
                var drawPlot = function () {
                    this.data = scope.chartdata;
                    if(typeof this.data != "undefined"){
                        var self = this;
                        this.units = this.data[0].units;
                        this.categories = [];
                        this.series = [];
                        for (var i = 0; i < this.data.length; i++) {
                            this.categories.push(this.data[i].name);
                            this.series.push(this.data[i].data[config.period]);
                            //console.log(i);
                        };
                        var chartOpts = {
                            chart: {
                                'renderTo' : $("#" + config.id).get(0),
                                type: config.type
                            },
                            title: {
                                text: config.title+ ': ' + config.period
                            },
                            xAxis: {
                                categories: this.categories,
                                title: {
                                    text: null
                                },
                                labels: {
                                    rotation: -60
                                }
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    text: this.units,
                                    align: 'high'
                                },
                                labels: {
                                    overflow: 'justify'
                                }
                            },
                            credits: {
                                enabled: false
                            },
                            series: [{
                                name: config.period,
                                data: this.series
                            }]
                        }
                        this.chart = new Highcharts.Chart(chartOpts);
                    };
                }
            }
        };
    }
}());