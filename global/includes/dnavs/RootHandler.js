var rootHandler = function($){
    var gbtn, cbtn, navigatorPrefix;
	
    function trimNulls(data){
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
    
    function addChartElements(){
        var cont = $('<div id="mce"></div')
            .css('display', 'none')
            .appendTo('body'),
        hccont = $('<div></div>')
            .attr('id', 'hc_container')
            .css({
                height : '600px',
                width : '800px',
                backgroundImage : 'url(/global/scripts/jQuery/tabs/loading.gif)',
                backgroundPosition : 'center',
                backgroundRepeat : 'no-repeat'
            })
            .appendTo(cont),
        link = $('<a></a>')
            .attr('href', '#hc_container')
            .attr('id', 'hc_link')
			.attr('title', 'Click and drag to zoom chart.  Use the buttons in upper right of chart for high quality print-outs and downloads.')
            .appendTo(cont)
            .fancybox({
				titlePosition : 'inside',
				titleFormat : function(title){
					return '<i>' + title + '</i>';
				},
                autoResize : false // To sidestep issue with Highcharts in Fancybox 2 disappearing when the browser is resized -SNW
			});
    };
    
    function addButtons(){
        // Clone the first th element and put the buttons in it
        var th = $('table.data1 > tbody > tr:eq(1) > th:eq(0)');
        th = th.clone().empty().insertAfter(th);
        gbtn = $('<button></button>').text('Graph').css('font-size', '90%').click(createChart).attr('disabled', true);
        cbtn = $('<button></button>').text('Clear').css('font-size', '90%').click(clearCheckboxes).attr('disabled', true);
        gbtn.appendTo(th);
        cbtn.appendTo(th);
    };
    function addCheckboxes(){
        var buttonsAdded = false,
        processRows = $('tr.DataRow td.DataHist a').length > 0;
        if(processRows){
            $('tr.DataRow').each(
                function(index, tr){
                    var cbtd,
                    cb,
                    td,
                    tokens,
                    a,
					href,
					apiKey;
					
					
                    // JQueryify the tr element
                    tr = $(tr);
                    // Get the second td
                    cbtd = tr.children(':eq(1)');
                    // Clone it
                    cbtd = cbtd.clone().insertBefore(cbtd)
                        .css('text-align', 'center');
                    // Find the history td
                    td = tr.find('td.DataHist');
                    if(td && (a = td.children('a')).length > 0){
                        if(!buttonsAdded){
                            addButtons();
                            buttonsAdded = true;
                        }
	
						// Get the sourcekey and frequency from the link
						// We use the html href instead of the jQuery attr('href')
						// to retrieve an absolute instead of relative link
						href = a.get(0).href;
						
						// Petroleum Navigator
						tokens = href.match(/s=(.*?)&f=(\w)/);
						navigatorPrefix = 'PET';
						
						// Natural Gas Navigator
						if(tokens === null) {
							tokens = href.match(/([^\/]*?)([WwMmDd4Aa]).(htm|html)/);
							navigatorPrefix = 'NG';
						}
						
                        // put the checkbox into the checkbox td
                        cbtd.empty();
						
						//increase width to accomodate api keys
						$(cbtd).attr('width', 84);
						var seriesId = navigatorPrefix + '.' + tokens[1].toUpperCase() + '.' + tokens[2].toUpperCase();
						apiKey = $('<a target="_blank" href="/opendata/qb.php?sdid=' + seriesId + '"><span class="ico_sourcekey" title="Click to view series in API browser"></span></a>')
							.appendTo(cbtd)
							.data({
								seriesId : seriesId
							});
							
                        cb = $('<input type="checkbox"></input>')
                            .addClass('chartCheckBox')
                            .appendTo(cbtd)
                            // Store the source key and frequency
                            .data({
                                srcKey : tokens[1].toUpperCase(),
                                freq : tokens[2].toUpperCase(),
                                link : href
                            });
                    }
                    
                }
            );
        }
    };
	
    function createChart(){
        var srcKeys = [],
        srcLinks = {},
        srcKey, freq;
        
        $('.chartCheckBox:checked').each(function(){
           var cb = $(this);
           srcKey = cb.data('srcKey')
           srcKeys.push(srcKey);
           srcLinks[srcKey] = cb.data('link')
           freq = cb.data('freq');
        });
        
        if(srcKeys.length > 0){
            $('#hc_container').empty();
            $('#hc_link').click();
            $.ajax({
                type:'POST',
                url: '/global/includes/dnavs/get_series.php',
                dataType: 'json',
                data: {
                    srcKeys : srcKeys.join(','),
                    freq : freq
                },
                success: function(result){
                    var keys = result.KEYS,
                    axis = result.AXIS,
                    baseAtZero = result.BASEATZERO,
                    axisOpts = [],
                    seriesOpts = [],
                    units = [],
                    seriesInfo;
                    
                    for(unit in axis){
                        units.push(unit);
                        axisOpts.push({
                            title : {
                                text : axis[unit]
                            },
                            min : baseAtZero ? 0 : null,
                            plotLines : [
                                Highcharts.eia_zero_axis_line
                            ],
                            opposite : axisOpts.length % 2
                        })
                    }
					var source_logo = Highcharts.logos.eia;
					var api_series_ids = [];
                    for(key in keys){
                        seriesInfo = keys[key];
			if(seriesInfo.SOURCE=="Thomson Reuters") source_logo = Highcharts.logos.reuters;
                        seriesOpts.push({
                            name : seriesInfo.NAME + (axisOpts.length > 1 ? ' (' + keys[key].UNITSABBREV + ')' : ''),
                            sourceKey : seriesInfo.KEY,
                            sourceLink : srcLinks[key],
                            data : trimNulls(Highcharts.map(seriesInfo.DATA, function(item, index){
                                var ds = String(item[0]),
                                val = Number(item[1]),
                                y = Number(ds.substring(0, 4)),
                                m = Number(ds.substring(4, 6)) - 1;
                                // Annual data has zero for the month
                                m = m >= 0 ? m : 0;
                                d = Number(ds.substring(6));
                                // Monthly / Annual data has a zero for the day
                                d = d != 0 ? d : 1;
                                
                                return[Date.UTC(y, m, d), !isNaN(val) ? val : null];
                            })),
                            yAxis : $.inArray(seriesInfo.UNITSABBREV.toUpperCase(), units)
                        });
						
						api_series_ids.push(navigatorPrefix + '.' + key + '.' + keys[key].FREQ);
                    }
					
                    chartOpts = {
                        chart : {
                            renderTo: 'hc_container',
                            lineUpYAxisZeros : true,
                            logo : seriesOpts.length > 1 ? Highcharts.logos.none : source_logo
                        },
                        title : {
                            text : $('.TopLabel2').text()
                        },
                        xAxis : {
                            type : 'datetime'
                        },
                        yAxis : axisOpts,
                        series : seriesOpts,
						exporting : {
							embedOptions : {
								series_id : api_series_ids.join(";")
							}
						}
                    }
                    
                    var chart = new Highcharts.Chart(chartOpts);
                }
            });
        }
    };
    
    function clearCheckboxes(){
        $('.chartCheckBox:checked').each(function(){
            $(this).attr('checked', false);
        });
		
		gbtn.attr('disabled', true);
		cbtn.attr('disabled', true);
    };
	
	function addFootnote() {
		var dataTable = $($('tr.DataRow').parents('table').get(0));
		var spacerTable = dataTable.next();
		// add the footnote table after the spacer table
		var footnoteTable = $('<table width="760" cellspacing="0" cellpadding="0"><tbody><tr><td class="Footnotes"><span class="ico_sourcekey selected" style="margin-bottom:-3px;"></span>Click on the source key icon to learn how to download series into Excel, or to embed a chart or map on your website.</td></tr></tbody></table>')
		.insertAfter(spacerTable);
		// add a second spacer table
		spacerTable.clone().insertAfter(footnoteTable);
	};
    
    return function(){
        addChartElements();
        addCheckboxes();
		addFootnote();
		
		$('input.chartCheckBox').on('change', function(event) {
			if($('input.chartCheckBox:checked').length > 0) {
				gbtn.attr('disabled', false);
				cbtn.attr('disabled', false);
			}
			else {
				gbtn.attr('disabled', true);
				cbtn.attr('disabled', true);
			}
		});
		
    
    };
}(jQuery);