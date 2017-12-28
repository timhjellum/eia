// Set EIA or EIA.DOE cookie script

var uuid = jQuery.uuid();
    if ($.cookie('SANID') == null) {
    $.cookie('SANID', uuid, {domain: 'eia.doe.gov'});
    };
    if ($.cookie('SANID') == null) {
    $.cookie('SANID', uuid, {domain: 'eia.gov'});
    }; 

var sitex = location.href.search('doe.gov');
    	if(sitex == "-1"){
		  document.writeln('<IFRAME SRC=http://www.eia.gov/global/cookie/2_uuid.htm?uid='+uuid+' WIDTH=0 HEIGHT=0 frameborder=0></IFRAME>');
		} else {
		  document.writeln('<IFRAME SRC=http://www.eia.gov/global/cookie/2_uuid.htm?uid='+uuid+' WIDTH=0 HEIGHT=0 frameborder=0></IFRAME>');
		};