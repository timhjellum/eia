/*
    Attributes:
    ngOrientation - {vertical|horizontal}
*/
 
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports == exports) {
    module.exports = 'timeslider-ng';
}
(function() {
    angular.module('timeslider-ng', [])
        .directive('timeslider', ['$templateCache', '$log', '$location', timeslider]);
 
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
 
    function validateOrientation(value) {
        var defaultValue = 'horizontal';
        if(typeof value == 'undefined' || (value != 'horizontal' && value != 'vertical')) {
          return defaultValue;
        }
        return value;
    };
 
    function validateSliderType(value) {
        var defaultValue = 'single';
        if(typeof value == 'undefined' || (value != 'single' && value != 'range')) {
            return defaultValue;
        }
        return value;
    };
   
    function timeslider($templateCache, $log, $location) {
        $templateCache.put('timeslider-ng.html', '\
            <div class="time-slider-container">\
                <div class="labelContainer"></div>\
                <div class="timeSlider"></div>\
            </div>\
            ');
 
        return {
            restrict : 'E',
            replace: true,
            template : $templateCache.get('timeslider-ng.html'),
            //templateUrl: 'index.html',
            link : function(scope, element, attrs) {
                attrs['ngOrientation'] = validateOrientation(attrs['ngOrientation']);
 
                attrs['ngSliderType'] = validateSliderType(attrs['ngSliderType']);
 
 
                var slider = $('.timeSlider', element);
 
 
                var config = {
                    'orientation' : attrs['ngOrientation'],
                    'range' : (attrs['ngSliderType'] == 'range'),
                    'slide' : function(event, ui) {
                        model(scope, attrs, (attrs['ngSliderType'] == 'range') ? ui.values : ui.value);
                        return true;
                    },
                    'change' : function(event, ui) {
                        model(scope, attrs, (attrs['ngSliderType'] == 'range') ? ui.values : ui.value);
 
                        return true;
                    },
                    'min' : (typeof attrs['ngSliderMin'] == 'undefined') ? 0 : attrs['ngSliderMin'],
                    'max' : (typeof attrs['ngSliderMax'] == 'undefined') ? 20 : attrs['ngSliderMax']
                };
 
                if(attrs['ngSliderType'] == 'range') {
                    slider.addClass('range');
                    config['values'] = [];
                    var values = model(scope, attrs);
 
                    config['values'] = [
                        isNaN(parseInt(values[0])) ? config['min'] : parseInt(values[0]),
                        isNaN(parseInt(values[1])) ? config['max'] : parseInt(values[1])
                    ];
                }
                else {
                    slider.removeClass('range');
                    config['value'] = parseInt(model(scope, attrs));
                    if(isNaN(config['value'])) {
                        config['value'] = config['min'];
                    }
                }
 
                slider.slider(config);
               
               scope.$watch(
                   function(scope) {
                       return model(scope, attrs);
                   },
                   function(newValue, oldValue, scope) {
                        if(attrs['ngSliderType'] == 'range') {
                            var changed = false;
                            var valuesArray = [];
 
                            for(var i = 0; i < newValue.length; i++) {
                                changed |= newValue[i] != oldValue[i];
                                valuesArray.push(parseInt(newValue[i]));
                            }
                            if(changed) {
                                slider.slider('option', {
                                    'values' : valuesArray
                                })
                            }
                        }
                        else {
                            if(newValue != oldValue) {
                                slider.slider('option', {
                                    'value' : parseInt(newValue)
                                });
                            }
                        }
                   },
                    true
               );
            }
        };
    }
}());
