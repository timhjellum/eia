/**
 * The Petroleum Navigator leaf page charting function
**/
var leafHandler = function($){
	return function(){
		// Is this the Natural Gas Navigator?
		var isNG, sourcekey, frequency, navigatorPrefix;
		
		//min must not be zero if negative values
		negativeValues = false;
		// An array of months for performing lookups
		var monthsArray = [
			'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
			'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
		];
		// Returns the Chart Title and Units as an array
		var getTitleMatch = function(){
			//var titleRegex = /[^\(\)]+/g;
			var title = $('.Title1').html();
			//return title.match(titleRegex);  <- this didn't work as some series name have parenthical phrases
			var aTitle = [title.substring(0,title.lastIndexOf('(')-1), title.substring(title.lastIndexOf('(')+1,title.lastIndexOf(')')) ];
			return aTitle;
		}
		// Returns the table rows in a page for iteration
		var getTableRows = function(){
			if(isNG)
				return $('body > table:eq(2) tr');
			else
				return $('table.FloatTitle tr');
		}
		// Trims null values from the beginning and end of data
		// arrays
		var trimNulls = function(data){
			var i;
			var dataCopy = data.slice(0);
			
			for(i=data.length - 1; i>0; i--){
				if(data[i][1] === null) dataCopy.pop();
				else break;
			}
			for(i=0; i<data.length; i++){
				if(data[i][1] === null) dataCopy.shift();
				else break;
			}
			
			return dataCopy;
		}
		// Creates the options object for highcharts.  Any
		// Changes to the chart options should be implemented
		// Here
		var createOptions = function(parent, title, units, data){
			var ret;
		
			sourcekey = determineSourceKey().toUpperCase();
			frequency = determinePeriodType().toUpperCase();
			navigatorPrefix = isNG ? 'NG' : 'PET';
			
			var titleMatch = getTitleMatch();
			ret = {
				chart:{
					zoomType:'xy',
					renderTo:parent.id
				},
				title:{
					text:title
				},
				xAxis:{
					type:'datetime'
				},
				yAxis:{
					title:{
						text:units
					}
				},
				series:[{
					name: title,
					data: data
				}],
				legend:{
					enabled:true
				},
				exporting : {
					embedOptions : {
						series_id : navigatorPrefix + '.' + sourcekey + '.' + frequency
					}
				}/*,   This shows single points, but is too slow in IE for vary large series
				plotOptions:{
					line:{
						marker:{enabled: true, radius: 1}
					}
				}  */
			};
	
			switch(frequency){
				case 'd': // Daily
					ret.xAxis.maxZoom = 10 * 24 * 3600000;
					break;
				case 'w': // Weekly
				case '4': // 4-Week Avg
					ret.xAxis.maxZoom = 10 * 7 * 24 * 3600000;
					break;
				case 'm': // Monthly
					ret.xAxis.maxZoom = 10* 30 * 24 * 3600000;
					break;
				case 'a': // Annual
					ret.xAxis.maxZoom = 10 * 365 * 24 * 3600000;
					break;
			}
			if(negativeValues) ret.yAxis.min = null
			
			if(isReuters()){
				ret.chart.logo =2;
				ret.credits = {text: 'Data Source: Thomson Reuters', href: '', style: {color: '#FFFFFF'}};
			}
			else if(isBloomberg()){
				ret.chart.logo =3;
				ret.credits = {text: 'Source: Bloomberg', href: '', style: {color: '#000000'}};
			}
			if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1)console.info(JSON.stringify(ret));
			return ret; 
		}
		//Indicates whether this is a Reutures series
		var isReuters = function(){
		  var tr_series = ['RWTC','RBRTE','EER_EPMRU_PF4_Y35NY_DPG','EER_EPMRU_PF4_RGC_DPG','EER_EPMRR_PF4_Y05LA_DPG','EER_EPD2F_PF4_Y35NY_DPG','EER_EPJK_PF4_RGC_DPG','EER_EPLLPA_PF4_Y44MB_DPG', 'RNGWHHD'];

		  for(var j=0;j<tr_series.length;j++){
			  if(sourcekey == tr_series[j]) return true;
		  }
		  
		  return false;
		}
		//Indicates whether this is a Reutures series
		var isBloomberg = function(){
		  var tr_series = ['NGM_EPG0_PLC_NUS_DMMBTU'];

		  for(var j=0;j<tr_series.length;j++){
			  if(sourcekey == tr_series[j]) return true;
		  }
		  
		  return false;
		}
		
		// Parses string values into floats
		var parseValue = function(string){
			var val, ret;
			val = parseFloat(string.replace(/,/g, ''));
			if(isNaN(val)){
				if(string == '')
					ret = void 0;
				else
					ret = null;
			}
			else ret = val;
			
			return ret;
		};
		// The processing function for processing daily data
		var processDailyData = function(){
			var data = [];
			var dateRegex = /(\d{4})\s+(\w{3})-(\s?\d{1,2})/ // (yyyy) (mmm)-(dd)
			
			getTableRows().each(function(i, n){
				var dateString = $(n).find('td.B6').html();
				if(dateString != void 0){
					var dateMatch = dateString.match(dateRegex);
					var currentDate = Date.UTC(
						dateMatch[1], // Year
						jQuery.inArray(dateMatch[2], monthsArray), // Month 
						dateMatch[3] // Day
					);
					$(n).find('td.B3').each(function(j, o){
						var val = parseValue($(o).html());
						if(val < 0) negativeValues = true;
						if(val !== void 0) data.push([currentDate, val]);
						currentDate = currentDate + 864E5; // Add a day
					});
				}
			});
			
			return data;
		}
		// The processing function for weekly data
		var processWeeklyData = function(){
			var data = [];
			var dateRegex1 = /(\d{4})-(\w{3})/; // yyyy-mmm
			var dateRegex2 = /\d{2}/g; // mm and dd
			
			getTableRows().each(function(i, n){
				var dateString1 = $(n).find('td.B6').html();
				if(dateString1 != void 0){
					var dateMatch1 = dateString1.match(dateRegex1);
					$(n).find('td.B5').each(function(j, o){
						var dateString2 = $(o).html();
						var dateMatch2 = dateString2.match(dateRegex2);
						if(dateMatch2 !== null){
							var currentDate = Date.UTC(
								dateMatch1[1], // Year
								jQuery.inArray(dateMatch1[2], monthsArray), // Month
								dateMatch2[1] // Day
							);
							var val = parseValue($(o).next('td.B3').html());
							if(val < 0) negativeValues = true;
							if(val !== void 0) data.push([currentDate, val]);
						}
					});
				}
			});
			return data;
		}
		// The processing function for monthly data
		var processMonthlyData = function(){
			var data = [];
			var dateRegex = /(\d{4})/; // yyyy
			
			getTableRows().each(function(i, n){
				var dateString = $(n).find('td.B4').html();
				if(dateString != void 0){
					var dateMatch = dateString.match(dateRegex);
					$(n).find('td.B3').each(function(j, o){
						var currentDate = Date.UTC(
							dateMatch[0], // Year
							j, // Column Index = Month Number
							1 // 1st
						);
						var val = parseValue($(o).html());
						if(val < 0) negativeValues = true;
						if(val !== void 0) data.push([currentDate, val]);
					});
				}
			});
			
			return data;
		}
		// The processing function for annual data
		var processAnnualData = function(){
			var data = [];
			var dateRegex = /(\d{4})/; // yyyy
			
			getTableRows().each(function(i, n){
				var dateString = $(n).find('td.B4').html();
				if(dateString != void 0){
					var dateMatch = dateString.match(dateRegex);
					var currentYear = dateMatch[0];
					$(n).find('td.B3').each(function(j, o){
						var currentDate = Date.UTC(
							currentYear, // Year
							0, // January
							1 // 1st
						);
						var val = parseValue($(o).html());
						if(val < 0) negativeValues = true;
						if(val !== void 0) data.push([currentDate, val]);
						currentYear++;
					});
				}
			});
			return data;
		}
		// Determines the period type
		var determinePeriodType = function(){
			if(isNG)
				var periodType = window.location.pathname.match(/([\w]{1})\.htm/)[1];
			else
				var periodType = window.location.search.match(/f=([\w\d]{1})/)[1];
			return periodType.toLowerCase();
		}
		
		var determineSourceKey = function() {
			var sourcekey;
			
			if(isNG) {
				sourcekey = window.location.pathname.match(/([\w-_]+)\w\.htm/)[1];
			} else {
				sourcekey = window.location.search.match(/s=([^&]+)/)[1];
			}
			
			return sourcekey;
		}
		// Determines the appropriate processing function based on
		// the frequency parameter in the URL search parameters
		var processData = function(periodType){
			var processor;
			var periodType = determinePeriodType();
	
			switch(periodType){
				case 'd': // Daily
					processor = processDailyData;
					break;
				case 'w': // Weekly
				case '4': // 4-Week Avg
					processor = processWeeklyData;
					break;
				case 'm': // Monthly
					processor = processMonthlyData;
					break;
				case 'a': // Annual
					processor = processAnnualData;
					break;
			}
			
			return trimNulls(processor.apply());
		};
		var prepareChartParent = function(){
			var imageParent = $('img[src*="hist_chart"]').parent().html(''),
			chartTable = imageParent.closest('table'),
			chartParent = $('<div id="highcharts_div"></div>').width('100%').appendTo(imageParent);
			// Make the chart 100% width
			chartTable.width('100%');
			// Hide the chart during processing
			chartParent.children().hide();
			return chartParent;
		}
		//This copies the referring pages div at the bottom of the page to the top of the page
		var copyReferringPages = function() {
			$('<div id="refer"></div>').html($('#refer').html()).insertAfter($('#contsub'));
			// remove first <BR> in body
			
			$('body > br').first().remove();
		}();
		
		// Add the source key and link to the api for this series
		var addSourceKeyIcon = function(chartParent) {
			var navigatorPrefix = isNG ? 'NG' : 'PET';
			
		$('<tr><td class="Footnotes"><a href="/opendata/qb.php?sdid=' + navigatorPrefix + '.' + determineSourceKey().toUpperCase() + '.' + determinePeriodType().toUpperCase() + '"><span class="ico_sourcekey" style="margin-bottom:-3px;"></span></a>This series is available through the EIA open data API and can be downloaded to Excel or embedded as an interactive chart or map on your website.</td></tr>')
			.insertAfter(chartParent.closest('tr'));
		}
		
		// This is the function that creates the chart object.
		// Executes immediately i.e.: function(args){/*do*/}(args);
		var createLeafChart = function(){
			isNG = window.location.pathname.match(/\/ng\//) !== null;
			
			var chartParent = prepareChartParent();
			var titleMatch = getTitleMatch();
			var data = processData();
			addSourceKeyIcon(chartParent);
			leafChart = new Highcharts.Chart(
				createOptions(
					chartParent.get(0),
					titleMatch[0],
					titleMatch[1],
					data
				)
			);
		}();
	}
}(jQuery);