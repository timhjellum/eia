/*
    Attributes:
    ngOrientation - {vertical|horizontal}
*/

// isArray shim
if (!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports == exports) {
    module.exports = 'timeslider-ng';
}
(function() {
    angular.module('timeslider-ng', [])
        .directive('timeslider', ['$templateCache', '$log', '$location','$timeout',
			function timeslider($templateCache, $log, $location,$timeout) {

    function useGetterSetter(scope) {
        return typeof scope.ngModelOptions != 'undefined' && typeof scope.ngModelOptions.getterSetter != 'undefined' && scope.ngModelOptions.getterSetter;
    };

    function model(scope, newValue) {
        var currentValue = useGetterSetter(scope) ? scope.ngModel() : scope.ngModel;
		
		var changed=false;
		
		if(angular.isDefined(newValue)&&scope.ngSlidertype == 'range') {
			for(var x=0;x<newValue.length;x++){
				if(angular.isDefined(newValue[x]) && newValue[x] != currentValue[x])
					changed=true;
			}
		}else if(angular.isDefined(newValue) && newValue != currentValue)
				changed=true;
		
        if(changed) {
            if(useGetterSetter(scope)) {
				if(scope.usingSliderValues){
					var valid=true;
			
					if(scope.ngSlidertype == 'range'){
						for(var x=0;x<newValue.length;x++){
							if(scope.ngSliderValues.indexOf(newValue[x])<0){
								valid=false;
							}
						}
					}else{
						if(scope.ngSliderValues.indexOf(newValue)<0)
								valid=false;
					}
					
					if(valid){
						if (scope.$root.$$phase != '$apply' && scope.$root.$$phase != '$digest') {
						scope.$apply(function() {
							scope.ngModel(newValue);
	        	        });
						}
					}
				}else{
					if (scope.$root.$$phase != '$apply' && scope.$root.$$phase != '$digest') {
	                scope.$apply(function() {
    	                scope.ngModel(newValue);
        	        });
					}
				}
            }else {
                if(scope.usingSliderValues){
					var valid=true;
			
					if(scope.ngSlidertype == 'range'){
						for(var x=0;x<newValue.length;x++){
							if(scope.ngSliderValues.indexOf(newValue[x])<0){
								valid=false;
							}
						}
					}else{
						if(scope.ngSliderValues.indexOf(newValue)<0)
								valid=false;
					}
					
					if(valid){
						if (scope.$root.$$phase != '$apply' && scope.$root.$$phase != '$digest') {
						scope.$apply(function() {
							scope.ngModel = newValue;
	        	        });
						}
					}
				}else{
					if (scope.$root.$$phase != '$apply' && scope.$root.$$phase != '$digest') {
	                scope.$apply(function() {
    	                scope.ngModel = newValue;
        	        });
					}
				}
            }
            currentValue = newValue;
        }

        return currentValue;
    };

    function validateOrientation(value) {
        var defaultValue = 'horizontal';
        if(typeof value == 'undefined' || (value != 'horizontal' && value != 'vertical')) {
          return defaultValue;
        }
        return value;
    };

    function validateSlidertype(value) {
        var defaultValue = 'single';
        if(typeof value == 'undefined' || (value != 'single' && value != 'range')) {
            return defaultValue;
        }
        return value;
    };

    function validateUpdateOn(value) {
        var defaultValue = 'both';
        if(typeof value == 'undefined' || (value != 'both' && value != 'slide' && value != 'change')) {
            return defaultValue;
        }
        return value;
    };

        $templateCache.put('timeslider-ng.html', '\
            <div class="time-slider-container">\
                <div class="labelContainer">\
				<span class="currentLow" ng-bind="showLow" ng-show="showCurrent && (!usingSliderValues || ngSliderValues.length > 0)"></span>\
				<span class="currentHigh" ng-bind="showHigh" ng-show="showCurrent && (!usingSliderValues || ngSliderValues.length > 0)"></span></div>\
                <div class="timeSlider"></div>\
				<div class="bottom labelContainer">\
				<span class="min" ng-bind="showMin" ng-show="showMinMax"></span>\
				<span class="max" ng-bind="showMax" ng-show="showMinMax"></span>\
				</div>\
            </div>\
            ');

        return {
            restrict : 'AEC',
            replace: true,
            template : $templateCache.get('timeslider-ng.html'),
            scope: {
                ngSliderMin : "@",
                ngSliderMax : "@",
                ngOrientation : "@",
                ngSlidertype : "@",
                ngUpdateon : "@",
                ngSliderValues : "=",
                id : "@id",
                ngModel : "=",
                ngModelOptions : "=",
                onStart : "=",
                onStop : "=",
                limit : "=",
                showMinMax : "=",
                showCurrent : "=",
                disabled : "@",
				useLabeledSlider : "@",
				tickLabels : "&"
            },
            //templateUrl: 'index.html',
            link : function(scope, element, attrs) {
                scope.usingSliderValues = false;

                scope.ngOrientaion = validateOrientation(attrs['ngOrientation']);

                scope.ngSlidertype = validateSlidertype(attrs['ngSlidertype']);

                scope.ngUpdateon = validateUpdateOn(attrs['ngUpdateon']);

                scope.sliding = false;

				scope.useLabeledSlider = (attrs['useLabeledSlider'] == 'true' && typeof $.fn.labeledslider == 'function') ? true : false;

                scope.disabled = (typeof scope.disabled == 'undefined' ? false : scope.disabled);

				scope.jquerySliderFunction = scope.useLabeledSlider ? 'labeledslider' : 'slider';


                var slider = $('.timeSlider', element);

				var formatLabel=function (label){
					return label;
				};

                if(Array.isArray(scope.ngSliderValues)) {
                    scope.usingSliderValues = true;
                }

                var config = {
                    'orientation' : scope.ngOrientaion,
                    'range' : (scope.ngSlidertype == 'range'),
                    'min' : scope.usingSliderValues ? null : ((typeof scope.ngSliderMin == 'undefined') ? 0 : parseInt(scope.ngSliderMin)),
                    'max' : scope.usingSliderValues ? null : ((typeof scope.ngSliderMax == 'undefined') ? 20 : parseInt(scope.ngSliderMax)),
                    'disabled' : scope.disabled
                };

                var preventOverlappingHandles = function(event, ui) {
                    if(scope.ngSlidertype == 'range' && ui.values[0] == ui.values[1]) {
                        event.stopImmediatePropagation();
                        return false;
                    }

                    return true;
                };

                var updateModelFunction = function(event, ui) {
                    var oldVal = model(scope);
                    var newVal = scope.ngSlidertype == 'range' ? ui.values : ui.value;
                    var changed = false;

                    if(scope.usingSliderValues) {
                        if(scope.ngSlidertype == 'range') {
							newVal[0] = scope.ngSliderValues[newVal[0]];
							newVal[1] = scope.ngSliderValues[newVal[1]];
                            for(var i = 0; i < newVal.length; i++) {
                                if(newVal[i] != oldVal[i])
									changed = true;
                            }
                        }
                        else {
							newVal = scope.ngSliderValues[newVal];
							
                            if(typeof oldVal !== 'undefined' && typeof newVal !== 'undefined')
                                changed |= (oldVal.toString() != newVal.toString())
                            else
                                changed = true;
                        }
                    }else{
						if(scope.ngSlidertype == 'range') {
							for(var i = 0; i < newVal.length; i++) {
								if(newVal[i] != oldVal[i])
									changed = true;
							}
						}
						else {
							if(typeof oldVal !== 'undefined' && typeof newVal !== 'undefined')
								changed |= (oldVal.toString() != newVal.toString())
							else
								changed = true;
						}
					}
					

                    if(changed) {
						model(scope, newVal);
                    }
                    return true;
                };
				
                if(scope.ngSlidertype == 'range') {
                    slider.addClass('range');
                    config['values'] = [];
                    var values = model(scope);

					if(scope.usingSliderValues) {
						var value1 = scope.ngSliderValues.indexOf(values[0]),
							value2 = scope.ngSliderValues.indexOf(values[1]);

						config['values'] = [
							value1 == -1 ? 0 : value1,
							value2 == -1 ? scope.ngSliderValues.length-1 : value2
						];
					}
					else {
						config['values'] = [
							isNaN(parseInt(values[0])) ? parseInt(config['min']) : parseInt(values[0]),
							isNaN(parseInt(values[1])) ? parseInt(config['max']) : parseInt(values[1])
						];
					}
					console.log(config['values']);
                }
                else {
                    slider.removeClass('range');

					if(scope.usingSliderValues) {
						config['value'] = scope.ngSliderValues.indexOf(model(scope));
					}
					else {
						config['value'] = parseInt(model(scope));
					}

					if(isNaN(config['value'])) {
                        config['value'] = parseInt(config['min']);
                    }
                }

                config.start = function(event, ui) {
                    scope.sliding = true;
                    if(typeof scope.onStart == 'function') {
                        scope.onStart(event, ui);
                    }
                }
                config.stop = function(event, ui) {
                    scope.sliding = false;
                    if(typeof scope.onStop == 'function') {
                        scope.onStop(event, ui);
                    }
                }


                if(scope.ngUpdateon == 'both' || scope.ngUpdateon == 'slide'){
                    config['slide'] = updateModelFunction;
                }

                if(scope.ngUpdateon == 'both' || scope.ngUpdateon == 'change'){
                    config['change'] = updateModelFunction;
                }

				if(scope.tickLabels) {
					config['tickLabels'] =scope.tickLabels();
				}

				if(scope.useLabeledSlider) {
					slider[scope.jquerySliderFunction](config);
				}
				else {
					slider[scope.jquerySliderFunction](config);
				}

				var updateLabelPos=function(){
					$timeout(function(){
						if(scope.showCurrent){
							var handles=$(element).find('.ui-slider-handle');
							if(typeof handles[0] !== 'undefined'){
								var lowLabel=$('.currentLow',$(element));
								lowLabel.css('left', parseInt($(handles[0]).css('left')));
								lowLabel.css('left', parseInt(lowLabel.css('left'))-15);
								var highLabel=$('.currentHigh',$(element));
								highLabel.css('left', parseInt($(handles[1]).css('left')));
								highLabel.css('left', parseInt(highLabel.css('left'))-20);
							}
						}    
					});
				};
				
				scope.$watch(
					function(scope) {
						return model(scope);
					},
					function(newValue, oldValue, scope) {
                        if(scope.ngSlidertype == 'range') {
                            if(typeof newValue === 'undefined'||(typeof newValue[0] === 'undefined'&&typeof newValue[1] === 'undefined')) return;

                            var changed = false;
                            var valuesArray = [];

                            if(scope.usingSliderValues) {
                                for(var i = 0; i < newValue.length; i++) {
                                    if(newValue[i] != oldValue[i])
										changed = true;
                                    valuesArray.push(scope.ngSliderValues.indexOf(newValue[i]));
                                }
                            }
                            else {
                                for(var i = 0; i < newValue.length; i++) {
                                    if(newValue[i] != oldValue[i])
										changed = true;
                                    valuesArray.push(parseInt(newValue[i]));
                                }
                            }
                            if(changed && !scope.sliding && valuesArray.indexOf(-1)<0) {
								setTimeout(function () { //wrapped in a setTimeout because sometimes this will already be occurring in a $scope.$apply
									scope.$apply(function(){
													slider[scope.jquerySliderFunction]('option', {
														'values' : valuesArray
													});
									});
								}, 0);
									
                            }
							
							scope.showLow=formatLabel(model(scope)[0]);
							scope.showHigh=formatLabel(model(scope)[1]);
                        }
                        else {
                            if(typeof newValue === 'undefined') return;
                            if(!scope.sliding) {
                                if(scope.usingSliderValues) {
									setTimeout(function () { //wrapped in a setTimeout because sometimes this will already be occurring in a $scope.$apply
										scope.$apply(function(){
											if ( $(slider).is(":visible"))
												slider[scope.jquerySliderFunction]('option', {
													'value' : scope.ngSliderValues.indexOf(newValue)
												});
										});
									}, 0);									
                                }
                                else {
									setTimeout(function () { //wrapped in a setTimeout because sometimes this will already be occurring in a $scope.$apply
										scope.$apply(function(){
											if ( $(slider).is(":visible"))										
												slider[scope.jquerySliderFunction]('option', {
													'value' : parseInt(newValue)
												});
										});
									}, 0);	
									
                                }
                            }
							scope.showLow=formatLabel(model(scope));
                        }
						updateLabelPos();
					},
                    true
				);

                $(element).bind('slide', function (event, ui) {
                    return preventOverlappingHandles(event, ui);
                });

				$(element).bind('slide', function (event, ui) {
					if(scope.showCurrent){
						scope.$apply(function(){
							if(scope.ngSlidertype == 'range') {
								if(scope.usingSliderValues) {
									scope.showLow = scope.ngSliderValues[ui.values[0]];
									scope.showHigh = scope.ngSliderValues[ui.values[1]];
								}else{
									scope.showLow = formatLabel(ui.values[0]);
									scope.showHigh = formatLabel(ui.values[1]);
								}
							}else{
								if(scope.usingSliderValues) 
									scope.showLow = scope.ngSliderValues[ui.value];
								else	
									scope.showLow = ui.value
							}
							updateLabelPos();
						});
					}
				});

                scope.$watch(
                    function(scope) {
                        return scope.disabled;
                    },
                    function(newValue, oldValue) {
                        $timeout(function() {
                            if(newValue == 'true') {
                                slider[scope.jquerySliderFunction]("disable");
                            }
                            else {
                                slider[scope.jquerySliderFunction]("enable");
                            }
                        });
                    }
                );

                if(scope.usingSliderValues) {
                    scope.$watch(
                        function(scope) {
                            return scope.ngSliderValues;
                        },
                        function(newValue, oldValue) {
							slider[scope.jquerySliderFunction]('option', {
								'min' : 0,
								'max' : newValue.length - 1,
								'disabled' : newValue.length < 2
							});
							scope.showMin=scope.ngSliderValues[0];
							scope.showMax=scope.ngSliderValues[newValue.length - 1];
							updateLabelPos();
                        }
                    );
                }
                else {

                    scope.$watch(
                        function(scope) {
                            return scope.ngSliderMax;
                        },
                        function(newValue, oldValue) {
                            var newValueInt = parseInt(newValue);
                            var oldValueInt = parseInt(oldValue);
                            if(!isNaN(newValueInt) && newValueInt !== oldValueInt){
									$timeout(function(){
                                    slider[scope.jquerySliderFunction]('option', {
                                        'max' : parseInt(newValue),
                                        'disabled' : (parseInt(newValue) == parseInt(slider[scope.jquerySliderFunction]('option', 'min')))
                                    });
									});
                                scope.showMax=formatLabel(newValue);
                                updateLabelPos();
                            }
                        }
                    );
                    scope.$watch(
                        function(scope) {
                            return scope.ngSliderMin;
                        },
                        function(newValue, oldValue) {
                            var newValueInt = parseInt(newValue);
                            var oldValueInt = parseInt(oldValue);
                            if(!isNaN(newValueInt) && newValueInt !== oldValueInt){
								$timeout(function(){
                                slider[scope.jquerySliderFunction]('option', {
                                    'min' : parseInt(newValue),
                                    'disabled' : (parseInt(newValue) == parseInt(slider[scope.jquerySliderFunction]('option', 'max')))
                                });
								});
                                scope.showMin=formatLabel(newValue);
                                updateLabelPos();
                            }
                        }
                    );
                }
            }
        };
    }]);
}());