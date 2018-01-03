myApp.controller('MainController', ['$scope', '$http', '$route', '$routeParams', '$location', 'dataFactory',
    function ($scope, $http, $route, $routeParams, $location, dataFactory) {

        $scope.selectedArray = [];  // array to hold selected data

        $scope.config = {
            "modalConfig": {    // config vars for modal window --------------------------------------------------------
                "title": "Title of modal window",
                "width": 600,
                "modal": true,
                "resizable": false
            },
            "configRadio": [    // config vars for radio button set ----------------------------------------------------
                {
                    "id":   "btnRadio0",
                    "name": "radio1",
                    "value": 1,
                    "label": "Source",
                    "checked": false

                },
                {
                    "id": "btnRadio1",
                    "name": "radio1",
                    "value": 2,
                    "label": "Activity",
                    "checked": true
                }
            ],
            "configCheckbox": [     // config vars for checkbox button set ---------------------------------------------
                {
                    "id":    "btn1a",
                    "name": "check1",
                    "value": 1,
                    "label": "Checkbox 1",
                    "checked": true
                },
                {
                    "id":    "btn1b",
                    "name": "check1",
                    "value": 2,
                    "label": "Checkbox 2",
                    "checked": false
                },
                {
                    "id":    "btn1c",
                    "name": "check1",
                    "value": 3,
                    "label": "Checkbox 3",
                    "checked": false
                },
                {
                    "id":    "btn1d",
                    "name": "check1",
                    "value": 4,
                    "label": "Checkbox 4",
                    "checked": false
                }
            ],
            "selectOption":[    // config for checkbox tree group ------------------------------------------------------
                {
                    "id": 1,
                    "label": "aLabel",
                    "subItem": [ "bSubItem1", "bSubItem2" ]
                }, {
                    "id": 2,
                    "label": "bLabel",
                    "subItem": [ "bSubItem", "bSubItem" ]
                }
            ],
            "selectOption2": [  // config for select drop down ---------------------------------------------------------
                {"id":1, "label":"item 1", "group":"Group 1"},
                {"id":2, "label":"item 2", "group":"Group 1", "disabled": true},
                {"id":3, "label":"item 3", "group":"Group 2"},
                {"id":4, "label":"item 4", "group":"Group 2"},
                {"id":5, "label":"item 5", "group":"Group 3"}
            ]
        };

        // RADIO BUTTON CLICK FUNCTION ---------------------------------------------------------------------------------
        $scope.action = function(x) {   // function for button clicks
            //console.log('action', x);
            var newVal = x;
            var oldVal = $location.search().id;
            updateRadioChecked(newVal, oldVal);
        };

        // CHECKBOX BUTTON CLICK FUNCTION ------------------------------------------------------------------------------
        $scope.checkboxAction = function(x) {   // function for button clicks
            //console.log('action', x);
            var newVal = x;
            var oldVal = $location.search().val2;
            updateCheckboxChecked(newVal, oldVal);
        };


        // GET checked value from config.configRadio and set URL search var --------------------------------------------
        function getRadioChecked() {
            for (var i in $scope.config.configRadio) {
                if($scope.config.configRadio[i].checked) {
                    $location.search('val2', i);
                }
            }
            $scope.searchId2 = $location.search().val2;
        }


        // UPDATE config.configRadio on URL search var change ----------------------------------------------------------
        function updateRadioChecked(newVal, oldVal) {

            if (typeof newVal === "undefined" || typeof oldVal === "undefined") {
                //console.log("undefined");
                return;
            }
            for (var i in $scope.config.configRadio) {
                $scope.config.configRadio[i].checked = false;   // set all buttons to false ----------------------------
            }

            $scope.searchId = $location.search().id;
            $scope.config.configRadio[$scope.searchId].checked = true;  // set selected btn to true --------------------

            if(newVal>i || newVal<0 || typeof newVal == 'undefined') {  // set search vars -----------------------------
                $location.search('id', oldVal);
            } else {
                $location.search('id', newVal);
            }
            //console.log("$scope.$watch = newVal:" + newVal + " oldVal:" + oldVal + ' i' + i);
        }

        function updateCheckboxChecked(newVal, oldVal) {

            if (typeof newVal === "undefined" || typeof oldVal === "undefined") {
                //console.log("undefined");
                return;
            }
            //for (var i in $scope.config.configRadio) {
            //    $scope.config.configRadio[i].checked = false;   // set all buttons to false ----------------------------
            //}

            $scope.searchId = $location.search().id;
            $scope.config.configRadio[$scope.searchId].checked = true;  // set selected btn to true --------------------

            if(newVal>i || newVal<0 || typeof newVal == 'undefined') {  // set search vars -----------------------------
                $location.search('id', oldVal);
            } else {
                $location.search('id', newVal);
            }
            //console.log("$scope.$watch = newVal:" + newVal + " oldVal:" + oldVal + ' i' + i);
        }


        if(!$location.search().id) {    // if id is not set in url get from config and set -----------------------------
            getRadioChecked();
        } else {                        // else set searchId from url id -----------------------------------------------
            $scope.searchId = $location.search().id;
        }

        $scope.loc = $location;
        $scope.$watch("(loc.search()).id", function (newVal, oldVal) {  // watch for url search var change and update --
            updateRadioChecked(newVal, oldVal);
        });


    }]);