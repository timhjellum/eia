var eia_widget_data_stored = []; //stores recently accessed data so to not refetch

//fill recently accessed storage ahead of other calls to reduce ajax call count
function eia_widgets_prefill(series){ 
	var series_data_url = "https://api.eia.gov/series/?api_key=limiteduse3rdpartykey&series_id="; //init fetch string
	jQuery.support.cors = true; //ie8 fixed
	
	jQuery.ajax({
			url: series_data_url+series,
			async: false,
			type: 'post',
			dataType: "json",
   			//headers: { 'eia-key': '1' },
			success: function(data) {	
				if(typeof data !== 'undefined')	//as long as we got something back
					jQuery.each(data.series,function(index,x){ //store each in cache
						eia_widget_data_stored.push(x);
					});
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert(errorThrown);
			}
		});
}

//fetch data object from requested series
function fetchDataObject(appKey,series){ 
	var seriesList=series.split(";"); //split ; seperated string into array
	var series_data_url = "https://api.eia.gov/series/?api_key=" + appKey + "&series_id="; //init fetch url
	var series_to_fetch = ""; //init fetch series string
	var returnData=[],outputData=[]; //init series data arrays
	outputData[seriesList.length-1]=undefined; //fill outputData with undefined equal to request size
	jQuery.support.cors = true; //ie8 fixes
	
	//for each requested series, load from cache if recently accessed
	jQuery.each(seriesList,function(index,seriesID){
		var found=false;
		//check each stored series for a match
		jQuery.each(eia_widget_data_stored,function(index_in_cache,stored_series){
				if(stored_series.series_id==seriesID){ //matching series found in cache
					outputData[index]=stored_series; //load data into correct place in output array
					found=true; //indicate we don't need to fetch this series
				}
		});
		if(!found) //if we didn't find the requested series in cache, add it to the request string
			series_to_fetch+=seriesID+";";
	});

	//if we still have unaccessed series, fetch them
	if(series_to_fetch!="")
		jQuery.ajax({
			url: series_data_url+series_to_fetch,
			async: false,
			type: 'post',
			dataType: "json",
   			//headers: { 'eia-key': '1' },
			success: function(data) {
				returnData=data.series;	//fill variable with series data
				if(typeof returnData !== 'undefined')	
					jQuery.each(returnData,function(index,x){ //store each accessed series data
						eia_widget_data_stored.push(x);
					});		
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert(errorThrown);
			}
		});

		var hole=0; //keep track of gaps in output array, to fill in with proper request order
		
		for(var x=0;x<seriesList.length;x++){ //for each requested series
			if(typeof outputData[x] === 'undefined'){ //if we have a gap in the output data
				if(typeof returnData !== 'undefined'){ //(to be sure returnData has something)
					if(typeof returnData[hole] !== 'undefined'){ //and we have the data from the fetch
						if(seriesList[x]==returnData[hole].series_id) //and the next fetch matches the next request
							outputData[x]=returnData[hole++]; //fill gap with fetched data
					}
				}
			}
		}

	//return output array, missing series will be undefined
	return outputData;
}

//validate data for Map before plotting
function validateMapData(data){
	var freq=""; //init frequency check
	var valid=true; //start off assuming everything is fine
	
	//Confirm all same request.frequency
	jQuery.each(data,function(index,x){
			if(freq=="") //set freq to first frequency we encounter
				freq=x.series_id.charAt(x.series_id.length-1);
			else if(freq!=x.series_id.charAt(x.series_id.length-1)) //if we found a frequency that doesn't match
				valid=false; //mark invalid
	});
	return valid;
}

//plot a cube
function plotCube(request){
	var $container=$('#'+request.container_id);
	$container.append("<div id='"+request.container_id+"Map' style='width:500px;height:350px;float:left;'></div><div id='"+request.container_id+"Chart' style='float:left;width:400px;height:350px;'></div>");
	var $mapContainer=$("#"+request.container_id+"Map",$container);
	var $chartContainer=$("#"+request.container_id+"Chart",$container);
	
	mapRequest={};
	mapRequest.appKey="limiteduse3rdpartykey";
	mapRequest.container_id=request.container_id+"Map";
	mapRequest.series = {};	

	series_ids=[];	
	//$.each(series_ids, function(index, value){
	//	mapRequest.series.push({eia_series_id: value});
	//});
	
	plotMap(mapRequest);
	
	chartRequest={};
	chartRequest.appKey="limiteduse3rdpartykey";
	chartRequest.series = {};	
	
	//$.each(series_ids, function(index, value){
	//	chartRequest.series.push({eia_series_id: value});
	//});
	
	$('#'+request.container_id+"Chart").highcharts(chartRequest);
}

//plot a TreeMap
function plotTreeMap(request){
	var seriesIds=[]; //init storage for series IDs
	jQuery.each(request.series,function(index, x){ //for each request
		seriesIds.push(x.series_id); //store series ID
	});
	
	var data = fetchDataObject(request.appkey,seriesIds.join(";")).slice(0);  //fetch requested series data, duplicate array
	
	var values=[]; //init values array
	var total=0; //keep track of total, for calculating percentages

	//Push only desired items
	jQuery.each(data,function(index,x){
		if(x.geography.indexOf("+") < 0 && x.geography.indexOf("-") >= 0){ //skip multiple regions, require - TODO: prob don't want second conditional
			var code=x.geography.substring(x.geography.indexOf("-")+1); //determine the state (assuming it's a state)
			total=total+x.data[0][1]; //add to total so far
			values.push([code,x.data[0][1]]); //push name and data pair
		}
	});

	values=values.sort(function(a,b){ return parseInt(a[1],10) - parseInt(b[1],10);	}); //sort values, smallest to largest
	
	var rect = [1,0,500,300]; //define our rectangle size
	
	//squarify our data 
	var squarified=TreemapUtils.squarify(rect,$.map(values, function(item){
		var returnVal=item[1]/total; //determine the percentage
		if( typeof request.precision!=='undefined') //if precision is requested, modify value
			returnVal=toFixed(returnVal,request.precision);
		 return returnVal; 
	}));

	//init renderer
	var renderer = new Highcharts.Renderer(
        $('#'+request.container_id)[0],
        501,
        301
    );
	
	//plot each series
	jQuery.each(values,function(index,value){
		//render the square for the series
		renderer.rect(squarified[index][0],squarified[index][1], squarified[index][2], squarified[index][3], 0)
		.attr({
			fill: '#99CCFF',
			stroke: 'black',
			'stroke-width': 1
		})
		.on('mouseover', function() { //display 
			if(typeof request.statContainer !== 'undefined') //if we specify a stat container
				$('#'+request.statContainer).html($.map(values, function(item){ //set stat container contents
					return abbrToState(item[0]); //convert name to full state name if possible
				})[index]+'<br>'+values[index][1]); //add value to stat box
		})
		.add();
		
		//render label for series
		renderer.text($.map(values, function(item){ 
			return abbrToState(item[0]); //convert name to full state name if possible
		})[index], squarified[index][0], squarified[index][1]+10).attr({
			rotation: 0
		}).css({
			fontSize: '6pt',
			color: 'black'
		}).add();
	});
}

//plot jVector map
function plotMap(request){
	var seriesIds=[]; //init storage for series IDs
	jQuery.each(request.series,function(index, x){ //for each request
		seriesIds.push(x.series_id); //store series ID
	});
	
	var data = fetchDataObject(request.appKey,seriesIds.join(";")).slice(0);  //fetch requested series data, duplicate array

	if(!validateMapData(data)) return; //return if we encounter validation issues

	var seriesData = {}; //init seriesData (values)
	var unitData = {}; //init unitData (units)
	
	//convert each data point to plotable data
	jQuery.each(data,function(index,x){
		var location=x.geography; //save location data
		if(location.indexOf("+")==-1){ //single locations only, ignore combos
			location=location.replace("USA","US"); //replace USA with US for jVectorMap

			//find relevant data point			
			var value = $(x.data).filter(function(){
				if(request.frequency=="A")
					return this[0]==request.year; 
				else if(request.frequency=="Q")
					return this[0]==''+request.year+request.quarter; 
				else if(request.frequency=="M")
					return this[0]==''+request.year+request.month; 
			}); 
			
			
			//fill seriesData and unitData if value is defined
			if(typeof value[0] !== "undefined"){
				seriesData[location]=value[0][1]; //store value
				if(typeof request.precision!=="undefined") //if precision is set, modify value
					seriesData[location]=toFixed(seriesData[location],request.precision);
				unitData[location]=x.units; //store units
			}
		}
	});
	
	//if map title is requested, TODO: make this more general
	if(typeof request.titleDiv !== "undefined"){
		var title=data[0].name; //get title from first dataset
		var colon=title.indexOf(":"); //find first colon
		colon=colon+title.substring(colon+1).indexOf(":"); //find next colon
		var secondColon=title.substring(colon+2).indexOf(":"); //find next colon from that
		title=title.substring(0,colon)+title.substring(secondColon+colon+1); //remove location from title, leave general title
		
		//add specific date info to title 
		//TODO: weekly
		if(request.frequency=="A")
			title=title+" ("+request.year+")"; 
		else if(request.frequency=="Q")
			title=title+" ("+request.year+" "+request.quarter+")"; 
		else if(request.frequency=="M")
			title=title+" ("+request.year+" "+request.month+")"; 
		
		$('#'+request.titleDiv).html(title); //set title in titlediv
	}
	
	var mapID="us_aea_en"; //default map
	if(typeof request.mapID !== 'undefined') {
		mapID=request.mapID; //if another map is specified, use it
	}
	
	var mapParams={ //init map options
		regionStyle: {
					hover: { //hover state
						stroke: 'yellow',
						"stroke-width": 2,
						"fill-opacity": 1,
					}
				},
		map: mapID,
		series: {
			regions: [{
			  attribute: 'fill',
			  values: seriesData,
			  scale: ['#C8EEFF', '#0071A4'],
			  normalizeFunction: 'polynomial'
			}]
		},
	  onRegionLabelShow: function(event, label, code){
		label.html(''+label.html()+' - '+addCommas(Number(seriesData[code])) +' ('+unitData[code]+")");
	  }
	};
	
	initVectorMap(request.container_id,mapParams); //call vectorMap wrapper
}

//vectorMap wrapper, for overriding
function initVectorMap(container_id,mapParams){
	jQuery('#'+container_id).vectorMap(mapParams);	
}

//plot basic HTML table
function drawTable(request){
	var seriesIds=[]; //init storage for series IDs
	jQuery.each(request.series,function(index, x){ //for each request
		seriesIds.push(x.series_id); //store series ID
	});
	
	var data = fetchDataObject(request.appkey,seriesIds.join(";")).slice(0);  //fetch requested series data, duplicate array

	if(typeof request.mostRecent !== 'undefined'){ //determine most recent data value, use as starting point
		var mostRecent=0; //init most recent monitor
		jQuery.each(data,function(index,x){ //for each data set
			if(x.data[0][0]>mostRecent) //if first data point of set is > than most recent
				mostRecent=x.data[0][0]; //store new most recent
		});

		request.year=mostRecent.substr(0,4); //pull year out of most recent string
		
		//if we're on an frequency other than A, pull month/quarter/day string
		switch(request.frequency){
			case "Q":
				request.quarter=mostRecent.substr(4);
				break;
			case "M":
				request.month=mostRecent.substr(4);
				break;
			case "W":
				request.month=mostRecent.substr(4,2);
				request.day=mostRecent.substr(6);
				break;
		}
	}else if(typeof request.year === 'undefined'){ //if mostRecent not set, use today as our starting point
		request.year=new Date().getFullYear();
		switch(request.frequency){
			case "Q":
				request.quarter=new Date().getMonth()+1;
				request.quarter="Q"+Math.ceil(request.quarter/4);
				break;
			case "M":
				request.month=new Date().getMonth()+1;
				break;
			case "W":
				request.month=new Date().getMonth()+1;
				request.day=new Date().getDate();
				break;
		}
	}
		
	//set end range, same as start if undefined
	if(typeof request.yearEnd === 'undefined')
		request.yearEnd=request.year;
	
	//determine other end details based on frequency
	switch(request.frequency){
		case "A":
			if(typeof request.intervals !== 'undefined'){
				request.yearEnd+=request.intervals;
			}
			
			//ensure we're going from earliest to latest
			if(request.year > request.yearEnd) 
				request.year = [request.yearEnd, request.yearEnd = request.year][0];
			break;
		case "Q":
			if(typeof request.quarterEnd === 'undefined')
				request.quarterEnd=request.quarter;
			if(typeof request.intervals !== 'undefined'){
				var newQuarter=request.quarterEnd.substr(1)+request.intervals;
				request.quarterEnd="Q"+(newQuarter%4);
				request.yearEnd+=Math.floor(newQuarter/4);
			}
			
			//ensure we're going from earliest to latest
			if(request.year > request.yearEnd) 
				request.year = [request.yearEnd, request.yearEnd = request.year][0];
			else
				if(request.quarter.substr(1) > request.quarterEnd.substr(1)) 
					request.quarter = [request.quarterEnd, request.quarterEnd = request.quarter][0];
			break;
		case "M":
			if(typeof request.monthEnd === 'undefined')
				request.monthEnd=request.month;
			if(typeof request.intervals !== 'undefined'){
				var newMonth=eval(request.monthEnd+request.intervals);
				//console.log(newMonth);
				request.monthEnd=newMonth%12;
				var count=0;
				while(request.monthEnd<1){
					 request.monthEnd+=12;
					 count++;
				}
				request.yearEnd=eval(Number(request.yearEnd)+Math.floor(newMonth/12))-count;
			}
			//ensure we're going from earliest to latest
			if(request.year > request.yearEnd) 
				request.year = [request.yearEnd, request.yearEnd = request.year][0];
			else
				if(request.month > request.monthEnd) 
					request.month = [request.monthEnd, request.monthEnd = request.month][0];
			break;
	}

	var rows="", tableHeader=""; //init table strings
	var rowArr=[], periods = [], changes = []; //init temporary containers
	
	if(typeof request.tableHeader !== 'undefined') //set table header if requested
		tableHeader=request.tableHeader;
		
	if(request.showChange){ //include changes columns
		rows+="<td></td><td></td><td colspan=2 style='text-align:center'>change from</td>";	//build show changes header
	}
	
	rows+="<tr><td><b>"+tableHeader+"</b></td>"; //build table header
	
	//load desired periods
	if(request.frequency=="A"){
		for(yearCur=request.year;yearCur<=request.yearEnd;yearCur++){
			rowArr.push(yearCur);
			periods.push(yearCur);
		}
		changes.push(["year before",request.year-1]);
		changes.push(["2 years before",request.year-2]);
	}else if(request.frequency=="Q"){
		var quarterCur=request.quarter.charAt(request.quarter.length-1);
		var quarterLast=request.quarterEnd.charAt(request.quarter.length-1);
		for(yearCur=request.year;yearCur<=request.yearEnd;yearCur++){
			for(;quarterCur<=4;quarterCur++){
				if(yearCur==request.yearEnd&&quarterCur>quarterLast)
					break;
				rowArr.push(yearCur+" Q"+quarterCur);
				periods.push(yearCur+"Q"+quarterCur);
			}
			quarterCur=1;
		}

		if(request.quarter.charAt(request.quarter.length-1)-1==0)
			var quarterLess=request.year-1+"Q4";
		else
			var quarterLess=request.year+"Q"+(request.quarter.charAt(request.quarter.length-1)-1);
		changes.push(["quarter before",quarterLess]);
		changes.push(["year before",request.year-1+"Q"+request.quarter.charAt(request.quarter.length-1)]);
	}else if(request.frequency=="M"){
		var monthCur=request.month;
		for(yearCur=request.year;yearCur<=request.yearEnd;yearCur++){
			for(;monthCur<=12;monthCur++){
				if(yearCur==request.yearEnd&&monthCur>request.monthEnd)
					break;
				var formattedMonth=("00" + monthCur).slice(-2);
				var dateVar= new Date(yearCur,monthCur-1);
				rowArr.push(getMonthName(dateVar.getMonth())+" "+yearCur);
				periods.push(yearCur+formattedMonth);
				
			}
			monthCur=01;
		}
		
		if(request.month-1==0)
			var monthLess=""+(request.year-1)+"12";
		else
			var monthLess=""+request.year+("00" + (request.month-1)).slice(-2);
		var formattedMonth=("00" + request.month).slice(-2);
		changes.push(["month before",monthLess]);
		changes.push(["year before",""+(request.year-1)+request.month]);
	}else if(request.frequency=="W"){
		var dayCur=new Date(request.year,request.month-1,request.day);
		rowArr.push(request.month+"/"+request.day+"/"+request.year);
		periods.push(""+request.year+request.month+request.day);

		var weekBefore=new Date(request.year,request.month-1,request.day-7);
		var yearBefore=new Date(request.year,request.month-1,request.day-364);

		changes.push(["week before",""+weekBefore.getFullYear()+("00" + (weekBefore.getMonth()+1)).slice(-2)+("00" + weekBefore.getDate()).slice(-2)]);
		changes.push(["year before",""+yearBefore.getFullYear()+("00" + (weekBefore.getMonth()+1)).slice(-2)+("00" + yearBefore.getDate()).slice(-2)]);
	}
		
	//if requested, flip table order
	if(typeof request.reverseOrder !== 'undefined'){
		periods.reverse(); //reverse both record arrays
		rowArr.reverse();	
	}
	
	//print period headers
	jQuery.each(rowArr,function(index,x){
		rows=rows+"<td>"+x+"</td>";
	});
	
	//if we're showing changes, print changes
	if(request.showChange){
		jQuery.each(changes,function(index,x){
			rows=rows+"<td>"+x[0]+"</td>";
		});
	}

	rows=rows+"</tr>"; //end row

	//display each series
	jQuery.each(data,function(index,x){
		var name=''; //init series name
		if(typeof request.series[index].series_name !== 'undefined')
			name=request.series[index].series_name; //set name to request if specified

		var state=x.geography; //determine state from geography field TODO: this is bad
		if(state.indexOf("+")==-1){ //single states only
			if(state.indexOf("USA-")>-1){  //replace name with state name (not what we want, TODO: FIX)
				state=state.substring(4);
				name=abbrToState(state); //update name to full state name
			}
			rows+="<tr><td";
			
			if(request.series[index].subseries) //is this series a subseries of a parent?
				rows+=" class='subseries'"; //add identifying class
			rows+=">"+name+"</td>"; //Label series
			
			var lastValue; //record last value
			
			//display data for each requested period
			jQuery.each(periods,function(index,period){
				var value = $(x.data).filter(function(){ //find relevant data point
				  return this[0]==period;
				}); 
								
				if(typeof value[0] !== "undefined"){ //assuming we found the data
					rows=rows+"<td>";
					if(isNaN(value[0][1])) //if data is NaN
						rows=rows+value[0][1]; //just print the value
					else{ //the data is a number
						if(typeof request.precision!=="undefined"){ //if precision requested
							rows=rows+addCommas(Number(toFixed(value[0][1],request.precision))); //modify to precision, add commas
						}else{ //otherwise
							rows=rows+addCommas(Number(value[0][1])); //just add commas
						}
					}
					lastValue=value[0][1]; //update last value to most recent value
					rows=rows+"</td>"; //close cell
				}else{ //we didn't find the data
					rows=rows+"<td></td>"; //leave an empty cell
				} 
			});
			
			//print change over period
			if(request.showChange){
				jQuery.each(changes,function(index,change){ //for each requested period of change
					var changevalue = $(x.data).filter(function(){ //get data point for that period
					  return this[0]==change[1];
					});
					
					//assuming we found the value for the difference
					if(typeof changevalue[0] !== "undefined"){
						rows=rows+"<td>";
						if(isNaN(changevalue[0][1])||isNaN(lastValue)){ //if either value is NaN
							rows=rows+"NA"; //we can't evaluate
						}else{ //as long as both are numbers
							var difference=changevalue[0][1]-lastValue; //calculate difference
							var arrow; //init arrow variable
							
							if(typeof request.downGood !== 'undefined') //if 'down is good'
								difference < 0 ? arrow="upred" : arrow="dwngrn"; //green arrow down, red arrow up
							else //if 'down is bad'
								difference < 0 ? arrow="upgrn" : arrow="dwnred"; //green up arrow, red down arrow
							
							if(typeof request.precision!=="undefined") //if precision is requested
								difference=toFixed(difference,request.precision); //modify with precision
							
							rows+="<img src='/global/scripts/api/images/"+arrow+".gif'> "; //add determined arrow string
							rows=rows+addCommas(Number(difference)); //add commas to number
						//console.log(changevalue[0][1]-lastValue);
						}
						rows=rows+"</td>"; //close cell
					}else{ rows+="<td>NA</td>"; } //cant calculate difference from undefined
				});
			}
		}
		rows=rows+"</tr>"; //close row
	});
	
	var tableTitle=""; //init table title
	if(typeof request.title !== 'undefined') //if specified
		tableTitle="<caption>"+request.title+"</caption>"; //set title
	
	$('#'+request.container_id).html("<table border=1 cellpadding=3 class='basic_table'>"+tableTitle+rows+"</table>"); //fill container with table
}

/* Helpers */
if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length >>> 0;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}

function toFixed(value, precision) {
    var precision = precision || 0,
    neg = value < 0,
    power = Math.pow(10, precision),
    value = Math.round(value * power),
    integral = String((neg ? Math.ceil : Math.floor)(value / power)),
    fraction = String((neg ? -value : value) % power),
    padding = new Array(Math.max(precision - fraction.length, 0) + 1).join('0');

    return precision ? integral + '.' +  padding + fraction : integral;
}

function getMonthName(month){
	var monthNames = [ "January", "February", "March", "April", "May", "June",
    	"July", "August", "September", "October", "November", "December" ];
	return monthNames[month];
}

function abbrToState(state) {
  var states = ["ALABAMA","ALASKA","AMERICAN SAMOA","ARIZONA","ARKANSAS","CALIFORNIA","COLORADO","CONNECTICUT","DELAWARE","DISTRICT OF COLUMBIA","FEDERATED STATES OF MICRONESIA","FLORIDA","GEORGIA","GUAM","HAWAII","IDAHO","ILLINOIS","INDIANA","IOWA","KANSAS","KENTUCKY","LOUISIANA","MAINE","MARSHALL ISLANDS","MARYLAND","MASSACHUSETTS","MICHIGAN","MINNESOTA","MISSISSIPPI","MISSOURI","MONTANA","NEBRASKA","NEVADA","NEW HAMPSHIRE","NEW JERSEY","NEW MEXICO","NEW YORK","NORTH CAROLINA","NORTH DAKOTA","NORTHERN MARIANA ISLANDS","OHIO","OKLAHOMA","OREGON","PALAU","PENNSYLVANIA","PUERTO RICO","RHODE ISLAND","SOUTH CAROLINA","SOUTH DAKOTA","TENNESSEE","TEXAS","UTAH","VERMONT","VIRGIN ISLANDS","VIRGINIA","WASHINGTON","WEST VIRGINIA","WISCONSIN","WYOMING"];
  var abbr = [
"AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY" ];
  if(abbr.indexOf(state)>-1)
    state=states[abbr.indexOf(state)];
  return state;
}

function addCommas(nStr)
{
   nStr += '';
   x = nStr.split('.');
   x1 = x[0];
   x2 = x.length > 1 ? '.' + x[1] : '';
   var rgx = /(\d+)(\d{3})/;
   while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
   }
   return x1 + x2;
}