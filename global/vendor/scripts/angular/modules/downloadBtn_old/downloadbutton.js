if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports == exports) {
	module.exports = 'downloadbutton';
}
(function () {
	angular.module('downloadbutton', [])
		.directive("downloadbutton", ['$window','$injector', downloadbutton]);

	function closeModal() {
		$.modal.close();
	}

	function offsetModal(top, left) {
		angular.element('#simplemodal-container').css(
			{
				'top':  top,
				'left': left
			});
	}

	function hideDownload($window) {
		closeModal();
		var dialog = angular.element('#download_dialog');
		dialog.hide();
		angular.element($window).unbind('resize', handleResize);
		dialog.find('a').unbind('click');
		angular.element('#main_download_button').unbind('click', hideDownload);
	}

	function handleResize() {
		var buttonOffset = angular.element('#main_download_button').offset();
		offsetModal(buttonOffset.top, buttonOffset.left);
	}

	function downloadbutton($window, $injector) {
		return {
			restrict:    "E",
			templateUrl: '/global/scripts/angular/modules/downloadbtn_old/downloadbutton.html',
			link:        function (scope, e, attrs) {
				var vizService = $injector.get(attrs.vizService),
					gridService = $injector.get(attrs.gridService);

				scope.color_class = attrs.color;

				e.bind('click', function () {
                    scope.$apply(function() {
                        scope.visualization = vizService.visualizationDescription;
                    });

                   var buttonOffset = angular.element('#main_download_button').offset(),
                       dialog = angular.element('#download_dialog'),
                       exporter_url = '/global/scripts/jquery/highcharts/exporting-server/',
                       csvExporter = 'csv_exporter.cfm',
                       inputs = {};

                   dialog.show();
                   dialog.find('a').bind('click', function (e) {
                       if(e.target.id == 'embed') {
                           vizService.embed();
                       }
                       else {
                           var exporter, dataArr, form;
                           switch (e.target.id) {
                               case 'pdf':
                               case 'png':
                               case 'svg':
                                   inputs = vizService.exportData(e.target.id);
                                   exporter = 'index.cfm';
                                   break;
                               case 'vizualization_data':
                                   inputs = vizService.exportData('csv');
                                   exporter = csvExporter;
                                   break;
                               case 'grid_data':
                                   exporter = csvExporter;
                                   inputs = gridService.exportData();
                                   break;
                           }
                           if(inputs != null) {
                               form =
                                   angular.element('<form style="display:none;" action="' +
                                       exporter_url +
                                       exporter +
                                       '" method="post"></form>');
                               for (var i in inputs) {
                                   form.append(angular.element('<input type ="hidden" name="' +
                                       i +
                                       '">').val(inputs[i]));
                               }

                               angular.element('body').append(form);
                               form.submit().remove();
                           }
                       }
                       hideDownload();
                   });
                  //If the button a second time, close the modal
                   angular.element('#main_download_button').bind('click', hideDownload);

                   angular.element('#download_dialog_container').modal(
                       {
                           autoPosition: false,
                           close:        true,
                           overlayClose: true,
                           overlayCss:   {
                               backgroundColor: '#777'
                           },
                           fixed:        false,
                           persist:      true,
                           onClose:      function () {
                               hideDownload($window);
                           }
                       }
                   );

                   offsetModal(buttonOffset.top, buttonOffset.left);
               });
			}
		}
	}
}());