var eia_widget_data_stored = [];  //stores recently accessed data so to not refetch
window.eia_widget_callback = {};
window.eia_widget_callback_count = 0;
-
(function(H){ //self contained function to protect namespace
	var InitHighChart_var = new Array();
	InitHighChart_var['chart_type_supported'] = ["line", "area", "column", "bar", "pie", "arearange"];
	InitHighChart_var['credits_text'] = 'Source: Energy Information Administration';
	InitHighChart_var['credits_href'] = 'https://www.eia.gov';
	InitHighChart_var['chart_type'] = 'line';
	var errors = new Array();	//error messages
	
	//plot chart based on request object
    //Highcharts.Chart.prototype.plotEIAChart = function (request) {

	H.wrap(H.Chart.prototype, 'init', function (proceed, request, callback) {
		var seriesIds;
		var self=this;
		var chart_title = "";	
		var chart_width = 0;	
		var chart_height = 0;	
		var chart_exporting = true;	
		var chart_datetime = true;
		var axis=[];
		
		//var self = this;
		var handleCallback = function handleCallback(data){
			var returnData=[],outputData=[]; //init series data arrays
			outputData[seriesIds.length-1]=undefined; //fill outputData with undefined equal to request size
			jQuery.each(seriesIds,function(index,seriesID){
				var found=false;
				//check each stored series for a match
				jQuery.each(eia_widget_data_stored,function(index_in_cache,stored_series){
						if(stored_series.series_id==seriesID){ //matching series found in cache
							outputData[index]=stored_series; //load data into correct place in output array
							//found=true; //indicate we don't need to fetch this series
						}
				});
			});
			if(typeof data !== 'undefined')	
				returnData=data.series.slice(0);	//fill variable with series data
			if(typeof returnData !== 'undefined')	
				jQuery.each(returnData,function(index,x){ //store each accessed series data
					eia_widget_data_stored.push(x);
				});
			var hole=0; //keep track of gaps in output array, to fill in with proper request order
				
			for(var x=0;x<seriesIds.length;x++){ //for each requested series
				if(typeof outputData[x] === 'undefined'){ //if we have a gap in the output data
					if(typeof returnData !== 'undefined'){ //(to be sure returnData has something)
						if(typeof returnData[hole] !== 'undefined'){ //and we have the data from the fetch
							if(seriesIds[x]==returnData[hole].series_id) //and the next fetch matches the next request
								outputData[x]=returnData[hole++]; //fill gap with fetched data
						}
					}
				}
			}
				
			var graph_y_label = ''; //init y axis label
			
			var options = {};
		
			//request.chart.renderTo = request.container_id;
	        request.chart.ignoreHiddenSeries = false;
	

			//set chart height/width if specified
			if(chart_width)
				//options.chart.width = chart_width;
				request.chart.width = chart_width;
			if(chart_height)
				//options.chart.height = chart_height;
				request.chart.height = chart_height;
				
			//options.exporting = { enabled: chart_exporting }; //set exporting enabled based on setting
			request.exporting = $.extend(true, {},request.exporting,{ enabled: chart_exporting }); //set exporting enabled based on setting
			
			//options.title = { text: chart_title	}; //set title based on setting
			request.title = { text: chart_title	}; //set title based on setting
			
			//options.lang = { noData: "No Data" };
			request.lang = { noData: "No data" };
			
			//options.noData = {
			request.noData = {
				style: {
					fontWeight: 'bold',
					fontSize: '15px',
					color: '#303030'
				}
			};
			
		
			request.tooltip = { 
				crosshairs: true
				,useHTML: true
				,pointFormat: "{series.name}: <b>{point.y}</b><br/>"
			};
			
			//options.series = []; //init series object
				
			var minUTC=0,maxUTC=0; //init detected min/max points
			
			//process each series
			//for (i=0;i<data.length;i++) {	
			var eia_data_count=0;
			for (i=0;i<request.series.length;i++) {
				if(typeof request.series[i].eia_series_id !== 'undefined'){
				if(request.series[i].eia_series_id == ""){
					request.series[i].id = 'series-' + i;
					request.series[i].name = "No data";
					continue;
				}else if(typeof outputData[eia_data_count] === 'undefined'){ //lost series
					//options.series[i] = {};
					//options.series[i].id = 'series-' + i;
					//options.series[i].name = "Series not found";
					//request.series[i] = {};
					request.series[i].id = 'series-' + i;
					request.series[i].name = "Series not found";
					continue;
				}
					
				//var series_name = "Series ID: "+data[i].series_id; //init series options with chart defaults
				//var series_name = data[eia_data_count].description; //init series options with chart defaults
				var series_unit = outputData[eia_data_count].units; //init series options with chart defaults
				var series_name = outputData[eia_data_count].name; //init series options with chart defaults
				var series_type = InitHighChart_var['chart_type'];
				
				//shouldn't ever happen because we verify in fetch()	
				if(request.series[i].eia_series_id.trim() != outputData[eia_data_count].series_id)
					return;						

				if(typeof(outputData[eia_data_count].name) != 'undefined' && outputData[eia_data_count].name != '' && typeof request.chart_title === 'undefined'){
					if(chart_title == '') {		//one time setting for chart_title, if empty
						chart_title = outputData[eia_data_count].name;
						//options.title = {
						request.title = {
							text: chart_title
						};
					}
				}
				
				if(typeof(request.series[i].series_name) != 'undefined' && request.series[i].series_name != ''){
					series_name = request.series[i].series_name;
				}
				
				if(typeof(request.series[i].series_type) != 'undefined' && request.series[i].series_type != ''){
					series_type = request.series[i].series_type;
				}		

				for(var x=0;x<outputData.length;x++)
					if(axis.indexOf(outputData[i].units.toLowerCase())<0)
						axis.push(outputData[i].units.toLowerCase());

				if(outputData[eia_data_count].units != '') {
					graph_y_label = outputData[eia_data_count].units;
				}			
				
				//put that thing down, slice() it and reverse() it
				series_data_arr = outputData[eia_data_count].data.slice(0).reverse();
				
				if(chart_datetime) { //TODO: remove conditional?
					var datetime_value = new Array(); //init array of converted datetime values
					for (j=0;j<series_data_arr.length;++j) { //for each point in the series
						var tmp_datetime_value = []; //init tmp array
						var tmp_arr = String(series_data_arr[j]).split(','); //init individual point array
						var theYear = Number(tmp_arr[0].substr(0,4));
						var theMonth = Number(tmp_arr[0].length >= 6 ? tmp_arr[0].substr(4,2) : '01');
						var theDay = Number(tmp_arr[0].length >= 8 ? tmp_arr[0].substr(6,2) : '01');
						//var convertedDate = new Date(parseInt(theYear), parseInt(theMonth)-1,parseInt(theDay));
						var convertedDate = Date.UTC(parseInt(theYear), parseInt(theMonth)-1,parseInt(theDay));
						
						//if this point is inside the range we're interested in
						if(convertedDate >= chart_start_date && convertedDate <= chart_end_date){
							if(!isNaN(tmp_arr[1])){	 //if there is a numerical value at this point
								n = Number(tmp_arr[1]); //store value
								if(series_type=="arearange"){ //TODO: arearange
									var compared=0;
									var foundMin=n,foundMax=n;
									var nextDate=[];
									for(var x=1;x<=request.series[i].range;x++){
										if(request.frequency=="A"||request.frequency=="M")
											nextDate.push(""+eval(convertedDate.getFullYear()-x)+("00" + eval(convertedDate.getMonth()+1)).slice(-2));
										else if(request.frequency=="Q"){
											//doesn't work, TODO
										}else if(request.frequency=="W"){
											var next=new Date(convertedDate.getFullYear(),convertedDate.getMonth(),convertedDate.getDate()-(52*7*x));
											nextDate.push(""+next.getFullYear()+("00" + eval(next.getMonth()+1)).slice(-2)+("00" +next.getDate()).slice(-2));
										}
									}
									
									jQuery(series_data_arr).filter(function(){
										if(nextDate.indexOf(this[0]) > -1){
											compared++;
											if(this[1]<foundMin) foundMin=this[1];
											if(this[1]>foundMax) foundMax=this[1];	
										}
										//return this[0]==nextDate;
									});
									//if(compared==0){
									//console.log(new Date(parseInt(point_for_year), parseInt(point_for_month)-1,parseInt(point_for_day))+" "+compared+" "+foundMin+" "+foundMax);
									//console.log(nextDate);
									//}
									/*var nextVal=jQuery(series_data_arr).filter(function(){
										return nextDate.indexOf(this[0]) > -1;
										//return this[0]==nextDate;
									});

									if(typeof nextVal !=="undefined"){
										jQuery.each(nextVal,function(index,val){
											if(typeof val !=="undefined"){
												if(val[1]<foundMin) foundMin=val[1];
												if(val[1]>foundMax) foundMax=val[1];
											}
										});
									}*/
									
									tmp_datetime_value.push(Date.UTC(parseInt(theYear), parseInt(theMonth)-1,parseInt(theDay)),foundMin,foundMax);
									datetime_value.push( tmp_datetime_value);	
								}else{ //not arearange
									utcVal=Date.UTC(parseInt(theYear), parseInt(theMonth)-1,parseInt(theDay)); //convert Date to UTC
									tmp_datetime_value.push(utcVal, n); //combine UTC and value
									datetime_value.push( tmp_datetime_value); //push UTC/value pair
									if(utcVal<minUTC||minUTC==0) minUTC=utcVal; //update discovered min/max
									if(utcVal>maxUTC) maxUTC=utcVal;					
								}
							}
						}
					}
				}
				/* else {
					var year = new Array();
					var year_value = new Array();
					for (j = 0; j < series_data_arr.length; ++j) {
						tmp_arr = String(series_data_arr[j]).split(',');
						var point_for_year = Number(tmp_arr[0].substr(0,4));
						if(chart_year_range_start && chart_year_range_end) {						
							if( ( point_for_year >= chart_year_range_start) && ( point_for_year <= chart_year_range_end) ) {
								year.push(point_for_year);	
								n = Number(tmp_arr[1]);
								year_value.push(n);
							}
						} else {
							year.push(point_for_year);	
							n = Number(tmp_arr[1]);
							year_value.push(n);					
						}
					}			
				}*/
				
				//options.series[i] = {}; //init series options
				//options.series[i].id = 'series-' + i;
				//options.series[i].name = series_name;
				//options.series[i].type = series_type;
				//request.series[i] = {}; //init series options
				request.series[i].id = 'series-' + i;
				request.series[i].name = series_name;
				request.series[i].type = series_type;
				request.series[i].yAxis = axis.indexOf(series_unit.toLowerCase());
				request.series[i].unit = series_unit;
				
				if(series_type=="arearange") //arearange the only color we specify
					//options.series[i].color = 'rgba(192,192,192,0.5)';
					request.series[i].color = 'rgba(192,192,192,0.5)';
					
				if(chart_datetime) { //TODO: conditional?
					//options.series[i].data = datetime_value;
					request.series[i].data = datetime_value;
					//request.series[i].data.y = 0;
				} else {
					//options.series[i].data = year_value;
					request.series[i].data = year_value;
				}
				
				//options.tooltip.pointFormat = '<b>{series.name}</b>: {point.y}' + ' ' + graph_y_label + '<br/>';
				//options.tooltip.formatter = function() {
				request.tooltip.formatter = function() {
					var s = '<b>'+ this.point.series.name +'</b>';
					//var formattedDate=new Date(this.x).toUTCString();
					var formattedDate=new Date(this.x);

					if(request.frequency=="A")
						formattedDate=formattedDate.getUTCFullYear();
					else if(request.frequency=="M")
						formattedDate=monthNames[formattedDate.getUTCMonth()]+" "+formattedDate.getUTCFullYear();
					else if(request.frequency=="Q")
						formattedDate="Q"+Math.ceil((formattedDate.getUTCMonth()+1)/3)+" "+formattedDate.getUTCFullYear();
					else
						formattedDate=formattedDate.getUTCDate()+" "+monthNames[formattedDate.getUTCMonth()]+" "+formattedDate.getUTCFullYear();

					s += '<br/>'+formattedDate+'<br>'+numberWithCommas(this.point.y) + ' ' + this.point.series.userOptions.unit;
					return s;
				}
							
				/*if(options.yAxis==''){ //if yAxis is unset still
					options.series[i].yAxis = i;
					options.yAxis.push({
						title: {
							text: graph_y_label
							, align: 'above'
						}
						,labels: {
							formatter: function() {
								return numberWithCommas(this.value);
							}
						}				
					});						
				}*/
				eia_data_count++;
				}else{ //not an eia id
					var series_type = InitHighChart_var['chart_type'];
					//options.series[i] = {}; //init series options
					//options.series[i].id = 'series-' + i;
					//options.series[i].name = request.series[i].name;
					//options.series[i].type = series_type;
					//options.series[i].data = request.series[i].data;
					//request.series[i] = {}; //init series options
					request.series[i].id = 'series-' + i;
					request.series[i].name = request.series[i].name;
					request.series[i].type = series_type;
					request.series[i].data = request.series[i].data;
				}
			}
			//options.xAxis = { type: 'datetime'	};	//set xaxis options
			if(request.xAxis === undefined) {
				request.xAxis = { type: 'datetime'	};	//set xaxis options
			}
			else if(Array.isArray(request.xAxis)) {
				$.each(request.xAxis, function(index, axis) {
					if(request.xAxis[index].type === undefined) {
						request.xAxis[index].type = 'datetime';
					}
				});
			}
			else if(request.xAxis.type === undefined) {
				request.xAxis.type = 'datetime';
			}
			/*if(maxUTC!=0) 
				//options.xAxis.max=maxUTC; //if we found our min/max, specify
				request.xAxis.max=maxUTC; //if we found our min/max, specify
			if(minUTC!=0) 
				//options.xAxis.min=minUTC;	
				request.xAxis.min=minUTC;	
			*/

			//options.yAxis.push({
			/*request.yAxis[0]={
				title: {
					enabled: true,
					text: graph_y_label
					, align: 'above'
				}
				,min: 0
				,labels: {
					formatter: function() {
						return numberWithCommas(this.value);
					}
				}				
			};	*/
			request.yAxis = [];

			for(var x=0;x<axis.length;x++){
				var axi={
					title: {text:axis[x].toLowerCase()}
				};
				if(x%2)
					axi.opposite=true;
				request.yAxis.push(axi);
			}
			//request.yAxis[0].opposite= true;
			
			//request.yAxis.title= {text:"test",align:"above"};
			request.labels={};
			//var callbackKeys = Object.keys(this);
			$.each(this,function(k,v){
				//console.log("*");
				//console.log(k);
				//console.log(v);
				if(window.eia_widget_callback[k] == handleCallback) {
					//console.log("true");
					//console.log(k);
					delete window.eia_widget_callback[k];
				}
			});
			//proceed.call(self, window.ops, callback);	
			//proceed.call(self, request, callback);	
			proceed.call(self, request, callback);	
		}
		
		//requestStore=request;
		var browser_info = getBrowser_info(); 
		if(browser_info.hasOwnProperty('type') && browser_info.type == "MSIE") //TODO: Need this?
			jQuery.support.cors = true;
		
		var data=[]; //initialize data array

		var chart_start_date;
		var chart_end_date;

		/*if(jQuery("#" +request.container_id).length > 0) { //if request container exists
			jQuery("#" + request.container_id).html("Wait, loading graph..."); //placeholder message
		}else{ //otherwise, report error and return
			errors.push("Container "+request.container_id+" does not exist.");	
			return errors;
		}
		*/
		if(typeof(request.chart_title) != 'undefined' && request.chart_title != '') {
			chart_title = request.chart_title;	
		}	
		if(typeof(request.chart_width) != 'undefined' && parseInt(request.chart_width) > 0) {
			chart_width = request.chart_width;	
		}			
		if(typeof(request.chart_height) != 'undefined' && parseInt(request.chart_height) > 0) {
			chart_height = request.chart_height;	
		}					
		if(typeof(request.chart_exporting) != 'undefined' && request.chart_exporting) {
			chart_exporting = request.chart_exporting;	
		}
		if(typeof(request.chart_datetime) != 'undefined' && request.chart_datetime) {
			chart_datetime = request.chart_datetime;	
		}
		
		if(typeof(request.chart_start_date) !== 'undefined') { //if start date is defined
			//create new Date based on request
			var theYear = Number(request.chart_start_date.substr(0,4));
			var theMonth = Number(request.chart_start_date.length >= 6 ? request.chart_start_date.substr(4,2) : '00');
			var theDay = Number(request.chart_start_date.length >= 8 ? request.chart_start_date.substr(6,2) : '00');
			chart_start_date = new Date(parseInt(theYear), parseInt(theMonth)-1,parseInt(theDay));
		}else{ //otherwise, use today as a start date
			chart_start_date = new Date();
		}
		
		if(typeof(request.chart_end_date) !== 'undefined') { //if the end date is defined
			//create new Date based on request
			var theYear = Number(request.chart_end_date.substr(0,4));
			var theMonth = Number(request.chart_end_date.length >= 6 ? request.chart_end_date.substr(4,2) : '00');
			var theDay = Number(request.chart_end_date.length >= 8 ? request.chart_end_date.substr(6,2) : '00');
			chart_end_date = new Date(parseInt(theYear), parseInt(theMonth)-1,parseInt(theDay));
		}
		
		if(typeof chart_end_date === 'undefined' && request.intervals !== 'undefined' && request.frequency !== 'undefined'){ 
			if(request.frequency=="A")
				chart_end_date=new Date(chart_start_date.getFullYear()+request.intervals, chart_start_date.getMonth());
			else if(request.frequency=="Q")
				chart_end_date=new Date(chart_start_date.getFullYear(), chart_start_date.getMonth()+(3*request.intervals));
			else if(request.frequency=="M"){
				chart_end_date=new Date(chart_start_date.getFullYear(), eval(chart_start_date.getMonth()+request.intervals));
			}else if(request.frequency=="W"){
				chart_end_date=new Date(chart_start_date.getFullYear(), chart_start_date.getMonth(),eval(chart_start_date.getDate()+(request.intervals*7)));
			}
		}else{ //otherwise, report error and return
			errors.push("No end date or intervals set");	
			return errors;
		}
		
		//if start date is after end date, swap the two so that earliest is first
		if(chart_end_date < chart_start_date) 
			chart_start_date = [chart_end_date, chart_end_date = chart_start_date][0];

		//gather all requested series IDs
		var seriesIds=[];
		jQuery.each(request.series,function(index, x){
			if(typeof x.eia_series_id !== 'undefined'){
				if(x.eia_series_id != "")
					seriesIds.push(x.eia_series_id);
			}
		});
				
		request.exporting= {
			embedOptions: {
				series_id : seriesIds.join(';'), // semi-colon separated list of series id's as they are in the api,
				relation_mode : 'line', // Also could be 'column'. I think line/column are the two options you will be using
				date_mode : 'range',
				//setup to go as far as daily. if we ever embed hourly needs expansion
				start : ""+chart_start_date.getUTCFullYear()+("00" + eval(chart_start_date.getUTCMonth()+1)).slice(-2)+
					("00" + eval(chart_start_date.getUTCDate()+1)).slice(-2),
				end : ""+chart_end_date.getUTCFullYear()+("00" + eval(chart_end_date.getUTCMonth()+1)).slice(-2)+
					("00" + eval(chart_end_date.getUTCDate()+1)).slice(-2)
			}
		};
		//fetch data object, duplicate array for processing
		//data = fetchDataObject(request.appKey,seriesIds.join(";")).slice(0);
		//var series_data_url = "https://api.eia.gov/series/?api_key=" + request.appKey + "&series_id="; //init fetch url
		var series_data_url = "https://api.eia.gov/series/?api_key=" + request.appKey + "&series_id="; //init fetch url
		var series_to_fetch = ""; //init fetch series string
		//seriesIds=seriesIds.slice(0);
		//outputData[seriesIds.length-1]=undefined; //fill outputData with undefined equal to request size
		jQuery.support.cors = true; //ie8 fixes
		
		//for each requested series, load from cache if recently accessed
		jQuery.each(seriesIds,function(index,seriesID){
			if(seriesID=="") return false;
			var found=false;
			//check each stored series for a match
			jQuery.each(eia_widget_data_stored,function(index_in_cache,stored_series){
					if(stored_series.series_id==seriesID){ //matching series found in cache
						//outputData[index]=stored_series; //load data into correct place in output array
						found=true; //indicate we don't need to fetch this series
					}
			});
			if(!found) //if we didn't find the requested series in cache, add it to the request string
				series_to_fetch+=seriesID+";";
		});

		//if we still have unaccessed series, fetch them
		//if(series_to_fetch!=""){
			
			//console.log(series_data_url+series_to_fetch+"&callback=handleCallback");
			
			
		window.eia_widget_callback[eia_widget_callback_count] = handleCallback;
		
		//var script_element = document.createElement('script');
		//script_element.src = series_data_url+series_to_fetch+"&callback=handleCallback";
		//document.getElementsByTagName('head')[0].appendChild(script_element);
		if(series_to_fetch!=""){
			jQuery.ajax({
				url: series_data_url+series_to_fetch+"&callback=handleCallback&out=jsonp",
				type: 'post',
	  			//headers: { 'x-eia-key': '1' }, //TODO: remove for release
				//dataType: "json",
				//success: successFunction,
				error : function(jqXHR, textStatus, errorThrown) {
					//alert(errorThrown);
				},
				jsonpCallback: "eia_widget_callback[" + eia_widget_callback_count++ + "]"
				,dataType: "jsonp"
			});
		}else{
			handleCallback();
		}
			
		//}
	});
	/**
	 * Javascript utility supportive functions
	*/

	//convert number to comma formatted number - as money format
	function numberWithCommas(x) {
		var parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	}

	//replace all specific character in string with specified character
	function replaceAll(string, find, replace) {
	  //return string.replace(new RegExp(find, 'g'), replace);
	  return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
	}

	function escapeRegExp(string) {
		return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	}

	//check weather the passing object variable is empty
	function isEmpty(obj) {
		for(var prop in obj) {
			if(obj.hasOwnProperty(prop))
				return false;
		}
		return true;
	}

	//adding JavaScript trim() if not available : specially for IE browser
	if(typeof String.prototype.trim !== 'function') {
	  String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, ''); 
	  }
	}

	//get browser information
	//specially to find out for IE browser as some HighChart properties needs to be set for IE browser
	function getBrowser_info() {

		var browser_info = {};
		browser_info.userAgent = navigator.userAgent;

		var info = '';
		
		//Detect browser and write the corresponding name
		if (navigator.userAgent.search("MSIE") >= 0){
			//document.write('"MS Internet Explorer ');
			browser_info.type = "MSIE";
			var position = navigator.userAgent.search("MSIE") + 5;
			var end = navigator.userAgent.search("; Windows");
			var version = navigator.userAgent.substring(position,end);
			browser_info.version = version;
		}
		else if (navigator.userAgent.search("Chrome") >= 0){
			//document.write('"Google Chrome ');// For some reason in the browser identification Chrome contains the word "Safari" so when detecting for Safari you need to include Not Chrome
			browser_info.type = "Chrome";
			var position = navigator.userAgent.search("Chrome") + 7;
			var end = navigator.userAgent.search(" Safari");
			var version = navigator.userAgent.substring(position,end);
			browser_info.version = version;
		}
		else if (navigator.userAgent.search("Firefox") >= 0){
			//document.write('"Mozilla Firefox ');
			browser_info.type = "Firefox";
			var position = navigator.userAgent.search("Firefox") + 8;
			var version = navigator.userAgent.substring(position);
			browser_info.version = version;
		}
		else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0){//<< Here
			//document.write('"Apple Safari ');
			browser_info.type = "Safari";
			var position = navigator.userAgent.search("Version") + 8;
			var end = navigator.userAgent.search(" Safari");
			var version = navigator.userAgent.substring(position,end);
			browser_info.version = version;
		}
		else if (navigator.userAgent.search("Opera") >= 0){
			//document.write('"Opera ');
			browser_info.type = "Opera";
			var position = navigator.userAgent.search("Version") + 8;
			var version = navigator.userAgent.substring(position);
			browser_info.version = version;
		}
		else{
			browser_info.type = "";
			browser_info.version = '';
		}
		
		return browser_info;
	}

	var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

	function isScriptAlreadyIncluded(src){
		var scripts = document.getElementsByTagName("script");
		for(var i = 0; i < scripts.length; i++) {
			if(scripts[i].hasAttribute('src')) {				
			   if(scripts[i].getAttribute('src') == src) return true;
			   if(scripts[i].getAttribute('src').indexOf(src) >= 0) return true;
			}
		}
		return false;
	}
}(Highcharts));