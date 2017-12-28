<div class="image-container" style="width:620px" ><a href="/analysis/drilling/dpmapv3.png" class="lightbox"><img src="/analysis/drilling/dpmapv3.png" alt="click to enlarge" width="575"/></a>
</div>
<?php /*
BEGIN As-need highchart
<script type="text/javascript">
var chart_combo;
$(window).load(function() {
var jCombo = {
chart: {
renderTo: 'container_combo'
},
credits: {
text: 'Source:  Energy Information Administration Winter Fuels Outlook',
href: '/cneaf/electricity/page/eia860.html'
},
title: {
text: 'Winter Household Natural Gas Consumption and Expenditures'
},
xAxis: {
categories: ['2006-07','2007-08','2008-09','2009-10','2010-11','2011-12','2012-13'],
title: {
text: 'Winter fuels season',
margin: 20
}
},
yAxis: [
{ // Primary Axis
title:{
text:'dollars'
}
},
{ //secondary axis
opposite: true,
title:{
text:'thousand cubic feet'
}		}
],
series: [
{
name: 'Consumption',
type: 'column',
//selected: true,
//tickInterval: 2,
//min: 50,
//max: 100,
yAxis: 1,
data: [65.4,67,69,69.2,69.4,59.3,67.5]
},
{
name: 'Expenditures',
type: 'line',
//selected: true,
//tickInterval: 100,
//min: 500,
//max: 1000,
data: [807,852,887,749,724,608,697]
}
]
};
chart_combo = new Highcharts.Chart(jCombo);
});
</script>
END As-need highchart
<div class="image-container" >
<div id="container_combo" style="width:480px;"></div>
</div>
