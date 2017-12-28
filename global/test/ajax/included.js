function star_include(){
    var teir1 = location.href.search('eia.gov');
	var teir2 = location.href.search('eia.doe.gov');
	var svt = location.href.search(/abouteia/);
    var svt2 = location.href.search(/energy_in_brief/);	
    if(
	   ((teir1 != "-1") || (teir2 != "-1")) && (svt != "-1") || (svt2 != "-1")
	    )
	{
		return (true);
    }
}