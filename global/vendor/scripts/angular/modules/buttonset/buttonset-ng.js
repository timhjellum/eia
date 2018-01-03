/*
	Attributes:
	ngOrientation - {vertical|horizontal}
*/

if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports == exports) {
	module.exports = 'buttonset-ng';
}
(function() {
	angular.module('buttonset-ng', [])
		.directive('buttonset', ['$templateCache', '$log', '$location', '$timeout', buttonset]);

	function useGetterSetter(scope) {
		return typeof scope.ngModelOptions != 'undefined' && typeof scope.ngModelOptions.getterSetter != 'undefined' && scope.ngModelOptions.getterSetter;
	};

	function model(scope, newValue) {
		var currentValue = useGetterSetter(scope) ? scope.ngModel() : scope.ngModel;
		if ( angular.isDefined(newValue) && newValue != currentValue) {
			if(useGetterSetter(scope)) {
				scope.$apply(function() {
					scope.ngModel(newValue);
				});
			}
			else {
				scope.$apply(function() {
					scope.ngModel = newValue;
				});
			}
			currentValue = newValue;
		}

		return currentValue;
	};

	var setValues = function(type, element, value) {

		switch(type) {
			case 'checkbox':
				var values = typeof value == 'string' ? value.split('') : [];
				var unserializedValue = "";

				while(values.length % 5 != 0) {
					values[values.length] = 0;
				}

				for(var i = 0; i < values.length; i++){
					var unserialized = parseInt(values[i], 32).toString(2);
					while(unserialized.length < 5) {
						unserialized = '0' + unserialized;
					}
					unserializedValue += unserialized;
				}

				var unserializedValueArray = unserializedValue.split('');
				var inputs = $('input' ,element);
				angular.forEach(inputs, function(elem, i) {
					$(elem).prop('checked', (elem.value < unserializedValueArray.length && unserializedValueArray[elem.value] == '1'));
				});
				break;
			case 'radio':
			default:
				$('[value=' + value + ']', element).prop('checked', true);
				break;

		}
	};
	var modelOptions;

	function buttonset($templateCache, $log, $location, $timeout) {
		return {
			restrict : 'AEC',
			replace: true,
			scope: {
				config : "=",
				type : "@type",
				id : "@id",
				ngModel : "=",
				ngModelOptions : "=",
				limit : "=",
				columns : "="
			},
			//template : $templateCache.get('buttonset-ng.html'),
			templateUrl: '/global/scripts/angular/modules/buttonset/buttonset-ng.html',
			link : function(scope, element, attrs) {
				var updateCols = function(){
					var columns=[];
					var colCount=1;
					
					if(typeof scope.columns !== 'undefined')
						colCount=scope.columns;
					
					var each=Math.ceil(scope.config.length/colCount);
					
					for(var x=0;x<colCount;x++){
						columns[x]=[];
						for(var y=0;y<each;y++){
							if(typeof scope.config[(x*each)+y] !== 'undefined')
								columns[x].push(scope.config[(x*each)+y]);	
						}
					}
					
					scope.cols=columns;
					if(colCount>1)
						scope.colClass="col"+colCount;
					else
						scope.colClass="";
				}
				
				updateCols();
				scope.buttonSetInitialized = false;
				modelOptions = scope.$eval(scope.ngModelOptions);

				// Click event handler for LABEL fields to capture "click" event (since the "change" event does not always fire)
				$(element).on('click', 'label', function(e) {
					// Get a jQuery object for the INPUT field, which is the previous DOM element before this LABEL element
					var inputField = $(e.currentTarget).prev();
					// Trigger the "change" event below on the INPUT field, where the new button value will be available
					inputField.trigger('change');
				});

				// Click event handler for INPUT fields to capture the "change" event, where the new button value will be available
				$(element).on('change', 'input', function(e) {
					switch(scope.type) {
						case 'checkbox':
							var inputs = $('input' ,element);
							var values = [];
							var theMax=0;

							angular.forEach(inputs, function(elem, i) {
								if(typeof scope.limit !== 'undefined'&&scope.limit==1)
									// Uncheck all checkboxes
									$(elem).removeAttr('checked');
								if($(elem).val()>theMax)
									// Update the maximum, if higher than previous maximum
									theMax=parseInt($(elem).val());
							});
							// Add back the appropriate checkboxes
							if(typeof scope.limit !== 'undefined'&&scope.limit==1)
								$(e.currentTarget).attr("checked",true);
							
							// Update the jQuery Buttonset UI to reflect which checkboxes are checked
							$(element).buttonset('refresh');

							// Pre-populate the values array with a 0 for each checkbox
							for(var x=0;x<theMax;x++)
								values[x]=0;

							// Go back and change 0 to 1 only for the checkboxes that are checked
							angular.forEach(inputs, function(elem, i) {
								values[$(elem).val()] = $(elem).prop('checked') ? 1 : 0;
							});
														
							while(values.length % 5 != 0) {
								values[values.length] = 0;
							}
							
							var unserializedValues = values.join('');
							var serializedValues = "";
							for(var i = 0; i < (values.length / 5); i++) {
								serializedValues += parseInt(unserializedValues.substr((i*5), 5), 2).toString(32);
							}
							serializedValues = serializedValues.replace(/0+$/, "");

							model(scope, serializedValues);
							break;
						case 'radio':
						default:
							model(scope, $(e.target).val());
							break;
					}
				});

				$timeout(function() {
					setValues(scope.type, element, model(scope));
					$(element).buttonset();
					scope.buttonSetInitialized = true;
				});

				scope.$watch(
					function() {
						return model(scope);
					},
					function(newValue, oldValue) {
						if(newValue != oldValue) {
							if(scope.buttonSetInitialized) {
								setValues(scope.type, element, newValue);
								$timeout(function() {
									$(element).buttonset('refresh');
								});
							}
						}
					}
				);

				scope.$watchCollection(
					function() {
						return scope.config;
					},
					function(newValue, oldValue) {
						if(scope.buttonSetInitialized) {
							updateCols();
							setValues(scope.type, element, newValue);
							$timeout(function() {
								$(element).buttonset('refresh');
							});
						}
					}
				);
				
				// Implement onclick listener
				var onClickRegistered=false;
				scope.$watch("$last",function(newValue,oldValue){
					if(!onClickRegistered){
						onClickRegistered=true;
						scope.$parent.$broadcast('event:repeat-done', element);
					}
				});
			}
		};
	}
}());