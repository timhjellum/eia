myApp.directive('jqButton', function ($timeout) {            // CREATE AND STYLE SINGLE JQUERY BUTTON
    return {
        restrict: 'E',                                  //says that this directive is only for html elements
        replace: true,
        template: '<button></button>',
        link: function (scope, element, attrs) {
            $timeout(function () {
                element.text(attrs.text).button();      //set text from attribute of custom tag
            }, 0);
        }
    };
})
    .directive('buttonSetWrapper', function($timeout){
        return function(scope, elment, attrs) {
            $timeout(function(){
                $(elment).buttonset();
            }, 0);
        }})
    .directive("inputSelect", function () {
        var Template = '<select ng-model="item" ng-options="item.label as item.label for item in modelRefList" required></select>';
        return {
            restrict: 'EA',
            template: Template,
            scope: {
                modelRefList: '='
            },
            link: function (scope) {
                //console.log(scope.countryList);
            }
        }
    })
    .directive('myDialog', function($templateCache, $timeout){
        $templateCache.get('dialog.html'); //THIS TEMPLATE IS STORED IN index.html inside an ng-template script element

        return {
            restrict: 'E',
            transclude: false,
            scope: {
                radio:'=',
                mainConfig: '=',
                action: '&action'
            },
            templateUrl: 'dialog.html',
            link: function(scope, elem, attrs) {

                $timeout(function(){
                    var myDialog;
                    jQuery(document).ready(function() {
                        myDialog = jQuery(elem)
                            .dialog({
                                width: scope.mainConfig.modalConfig.width,
                                modal: scope.mainConfig.modalConfig.modal,
                                resizable: scope.mainConfig.modalConfig.resizable,
                                title: scope.mainConfig.modalConfig.title
                            });
                    });

                    $('#dialog_link').click(function () {
                        $(elem).dialog('open');
                        return false;
                    });

                    scope.$watch(function() { return scope.radio; }, function(newVal, oldVal) {
                        //console.log("scope.$watch newVal:" + newVal + ' oldVal:' + oldVal + ' *** ');
                        scope.mainConfig.configRadio[oldVal].checked = false;
                        scope.mainConfig.configRadio[newVal].checked = true;

                    });

                }, 0);
            }
        };
    });