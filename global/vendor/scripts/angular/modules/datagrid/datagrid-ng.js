/*
 Attributes:
 ngOrientation - {vertical|horizontal}
 */
var ui_grid;
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports == exports) {
    module.exports = 'datagrid-ng';
}
(function() {
    angular.module('datagrid-ng', [
            'timeslider-ng',
            'duScroll',
            'ui.grid',
            'ui.grid.pinning'
        ])
        .directive('datagrid', ['$templateCache', '$log', '$location', '$timeout', '$interval', '$rootScope', 'uiGridConstants', 'gridUtil', datagrid]);

    function datagrid($templateCache, $log, $location, $timeout, $interval, $rootScope, uiGridConstants, gridUtil) {
        return {
            restrict : 'AEC',
            replace: true,
            scope: {
                options : "=",
                data : "=",
                columns : "="
            },
            //template : $templateCache.get('buttonset-ng.html'),
            templateUrl: '/global/scripts/angular/modules/datagrid/datagrid-ng.html',
            compile : function(element, attrs, transclude) {
                return {
                    post: function(scope, element, attrs, controller) {

                        // set initial scroll positions, vertical scroller goes 0 to -1000 since the max value is at the top of the slider
                        scope.vertical_scroll = 0;
                        scope.horizontal_scroll = 0;

                        var vertical_scroller = angular.element('#vertical_scroller', element);
                        var horizontal_scroller = angular.element('#horizontal_scroller', element);
                        var grid_container = angular.element('.grid_container', element);

                        var setSliderValues = function(event) {
                            var viewport = angular.element('.ui-grid-render-container-body .ui-grid-viewport');
                            var new_h_scroll = Math.ceil((viewport.scrollLeft() / (scope.gridApi.grid.renderContainers.body.canvasWidth - viewport.width())) * 1000);

                            angular.element('.ui-slider', horizontal_scroller).slider('value', new_h_scroll);
                            // calculate slider position from the scrollTop property
                            var new_v_scroll = (viewport.scrollTop() / (scope.gridApi.grid.renderContainers.body.$$canvasHeight - viewport.height())) * 1000;

                            angular.element('.ui-slider', vertical_scroller).slider('value',  Math.floor(new_v_scroll * -1)); // use floor function to ensure it is a whole number as that is what the slider uses
                            // if ceiling were used, an infinite loop would occur where it is constantly changing by 1px
                        };

                        scope.$on(uiGridConstants.events.GRID_SCROLL, setSliderValues);

                        angular.element('.ui-slider', horizontal_scroller).bind('slide', function(event, ui) {
                            var viewport = angular.element('.ui-grid-render-container-body .ui-grid-viewport');
                            var scroll = (ui.value / 1000) * (scope.gridApi.grid.renderContainers.body.canvasWidth - viewport.width());
                            if(!isNaN(scroll)) {
                                viewport.scrollLeft(scroll);
                            }
                        });
                        angular.element('.ui-slider', vertical_scroller).bind('slide', function(event, ui) {
                            var viewport = angular.element('.ui-grid-render-container-body .ui-grid-viewport');
                            var scroll = (Math.abs(ui.value) / 1000) * (scope.gridApi.grid.renderContainers.body.$$canvasHeight - viewport.height());

                            if(!isNaN(scroll)) {
                                viewport.scrollTop(scroll);
                            }
                        });

                        var updateGridHeightWidths = function() {

                            var height = ($(element[0]).innerHeight() - horizontal_scroller.outerHeight() - (grid_container.outerHeight() - grid_container.innerHeight()));
                            var width = ($(element[0]).innerWidth() - vertical_scroller.outerWidth() - (grid_container.outerWidth() - grid_container.innerWidth()));

                            grid_container.height(height + 'px');
                            grid_container.width(width + 'px');
                            if(typeof scope.gridApi != 'undefined') {
                                scope.gridApi.grid.handleWindowResize();
                            }
                        };


                        var checkScrollerDisabled = function() {
                            var verticalHeight = scope.gridApi.grid.renderContainers.body.getViewportHeight();
                            var horizontalWidth = scope.gridApi.grid.renderContainers.body.getViewportWidth();

                            scope.v_scroll_disabled = (scope.gridApi.grid.renderContainers.body.$$canvasHeight <= verticalHeight);
                            scope.h_scroll_disabled = (scope.gridApi.grid.renderContainers.body.canvasWidth <= horizontalWidth);
                        };

                        var updateScrollerHeightWidths = function() {
                            if(typeof scope.gridApi != 'undefined') {
                                var verticalHeight = scope.gridApi.grid.renderContainers.body.getViewportHeight();
                                var horizontalWidth = scope.gridApi.grid.renderContainers.body.getViewportWidth();

                                vertical_scroller.height((verticalHeight - 15) + 'px');
                                horizontal_scroller.width((horizontalWidth - 15) + 'px');
                                vertical_scroller.css('margin-top', (grid_container.outerHeight() - verticalHeight) + 'px');
                                horizontal_scroller.css('margin-left', (grid_container.outerWidth() - horizontalWidth) + 'px');
                                checkScrollerDisabled();
                            }
                        };

                        scope.gridOptions = angular.extend({}, scope.options);

                        scope.gridOptions.data = scope.data;
                        scope.gridOptions.columnDefs = scope.columns;

                        var passedOnRegisterApi = scope.gridOptions.onRegisterApi;

                        scope.gridOptions.onRegisterApi = function(gridApi) {

                            if(typeof passedOnRegisterApi != 'undefined') {
                                passedOnRegisterApi(gridApi);
                            }

                            scope.gridApi = gridApi;
                            ui_grid = gridApi;

                            // watch for changes to data and refresh the grid, adjust the height/widths of container and sliders
                            scope.$watch(function(scope) {
                                return scope.data;
                            }, function(newValue, oldValue) {
                                scope.gridOptions.data = newValue;
                                scope.gridApi.grid.refresh(true)
                                    .then(function() {
                                        $timeout(function() {
                                            updateGridHeightWidths();
                                            updateScrollerHeightWidths();
                                            checkScrollerDisabled();
                                            setSliderValues();
                                        });
                                    });
                            });

                            // watch for changes to columns and refresh the grid, adjust the height/widths of container and sliders
                            scope.$watch(function(scope) {
                                return scope.columns;
                            }, function(newValue, oldValue) {
                                scope.gridOptions.columnDefs = newValue;
                                scope.gridApi.grid.refresh(true)
                                    .then(function() {
                                        $timeout(function() {
                                            updateGridHeightWidths();
                                            updateScrollerHeightWidths();
                                            checkScrollerDisabled();
                                            setSliderValues();
                                        });
                                    });
                            }, true);

                            updateGridHeightWidths();
                            updateScrollerHeightWidths();
                            scope.gridApi.grid.refresh();

                        };

                        updateGridHeightWidths();
                        updateScrollerHeightWidths();
                    }
                };
            }
        };
    }
}());