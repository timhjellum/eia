<?php
//Social links
if(strpos($_SERVER['HTTP_HOST'],'wwwdev')===false&&strpos($_SERVER['HTTP_HOST'],'wwwtest')===false){
//Disable the social media icons on the 404 File Not Found page
isset($a40412) || $a40412 = '';
if($a40412 != "y"){
?>
<script>
$(document).ready(function() {
function position() {
$( "#sticker.positionable" ).position({
of: $( ".page-wrapper" ),
my: "left top",
at: "right top"
});
$('#sticker').offset({top:$(window).scrollTop() + $('header').height()+10});
}
position();
$('#sticker').hover(function(event){
$(this).stop(true,false).animate({right: '-125px', width: '160px'}, 'slow');
},function(event){
$(this).stop(true,true).animate({right: '0', width: '35px'}, 'slow');
});
$(window).scroll(function () {position();});
$(window).resize(function () {position();});
$('header').on('transitionend', function() {
position();
});
});
</script>
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-514b0d4a047a687f" async="async">
</script>
<div id="sticker" class="social-fixed positionable">
<div class="addthis_toolbox addthis_default_style ">
<ul class="social sticker">
<li>
<a href="http://twitter.com/EIAgov" target="_blank">
<img src="/global/images/icons/social-twitter.jpg" class="imgalpha">
</a>
<div class="link twt">
<div class="tweet">
<a class="addthis_button_tweet at300b">
<div class="tweet_iframe_widget" style="width: 62px; height: 25px;">
<span>
<iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" class="twitter-share-button twitter-share-button-rendered twitter-tweet-button" title="Twitter Tweet Button" src="http://platform.twitter.com/widgets/tweet_button.d59f1863bc12f58215682d9908af95aa.en.html#dnt=true&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=http%3A%2F%2Fwww.eia.gov%2F&amp;size=m&amp;text=U.S.%20Energy%20Information%20Administration%20(EIA)%3A&amp;time=1474295103351&amp;type=share&amp;url=http%3A%2F%2Fwww.eia.gov%2F%23.V9_1Pnboofc.twitter" style="position: static; visibility: visible; width: 60px; height: 20px;" data-url="http://www.eia.gov/#.V9_1Pnboofc.twitter">
</iframe>
</span>
</div>
</a>
</div>
</div>
</li>
<li>
<a href="http://www.facebook.com/eiagov" target="_blank">
<img src="/global/images/icons/social-facebook.jpg" class="imgalpha">
</a>
<div class="link facebook">
<div id="share-facebook">
<a class="addthis_button_facebook_like at300b" fb:like:layout="button_count">
<div class="fb-like fb_iframe_widget" data-layout="button_count" data-show_faces="false" data-share="false" data-action="like" data-width="90" data-height="25" data-font="arial" data-href="http://www.eia.gov/" data-send="false" style="height: 25px;" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=172525162793917&amp;container_width=0&amp;font=arial&amp;height=25&amp;href=http%3A%2F%2Fwww.eia.gov%2F&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;send=false&amp;share=false&amp;show_faces=false&amp;width=90">
<span style="vertical-align: bottom; width: 76px; height: 20px;">
<iframe name="f2d2e9ca3e9e24" width="90px" height="25px" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:like Facebook Social Plugin" src="https://www.facebook.com/v2.6/plugins/like.php?action=like&amp;app_id=172525162793917&amp;channel=htt%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FP5DLcu0KGJB.js%3Fversion%3D42%23cb%3Df3ccee3b901296%26domain%3Dwww.eia.gov%26origin%3Dhttp%253A%252F%252Fwww.eia.gov%252Ff386012e6467a58%26relation%3Dparent.parent&amp;container_width=0&amp;font=arial&amp;height=25&amp;href=http%3A%2F%2Fwww.eia.gov%2F&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;send=false&amp;share=false&amp;show_faces=false&amp;width=90" style="border: none; visibility: visible; width: 76px; height: 20px;" class="">
</iframe>
</span>
</div>
</a>
</div>
</div>
</li>
</ul>
</div>
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-514b0d4a047a687f" async="async">
</script>
<?php
}
}
?>
<header>
<div class="print">
<img src="https://www.eia.gov/global/images/logos/eia_logo_print.png"/>
</div>
<nav class="navigation">
<a class="logo" href="/">
<h1>U.S. Energy Information Administration - EIA - Independent Statistics and Analysis</h1>
</a>
<a href="#" class="search-menu-toggle">
<i class="ico magnifying-glass-mobile">
</i>
</a>
<a class="fancybox-menu menu-toggle" href="#menu" data-target="default">
<div class="toggle-bar">
</div>
<div class="toggle-bar">
</div>
<div class="toggle-bar">
</div>
<li>Menu</p>
</a>
<ul class="nav-primary">
<li class="nav-primary-item">
<a class="fancybox-menu" href="#menu" data-target="sources">
<i class="ico plus-yellow">+</i> Sources &amp; Uses</a>
</li>
<li class="nav-primary-item">
<a class="fancybox-menu" href="#menu" data-target="topics">
<i class="ico plus-yellow">+</i> Topics</a>
</li>
<li class="nav-primary-item">
<a class="fancybox-menu" href="#menu" data-target="geography">
<i class="ico plus-yellow">+</i> Geography</a>
</li>
</ul>
</div>      <ul class="nav-secondary">
<li class="nav-secondary-item">
<a class="fancybox-menu" href="#menu" data-target="tools">
<i class="ico plus-greyishblue">+</i> Tools</a>
</li>
<li class="nav-secondary-item">
<a class="fancybox-menu" href="#menu" data-target="learn">
<i class="ico plus-greyishblue">+</i> Learn About Energy</a>
</li>
<li class="nav-secondary-item">
<a class="fancybox-menu" href="#menu" data-target="news">
<i class="ico plus-greyishblue">+</i> News</a>
</li>
</ul>
</div>      <div class="nav-menu" style="display: none">
<div class="nav-tabs page_tabs" id="menu">
<div class="tabs-wrapper">
<ul class="ui-tabs-nav" role="tablist">
<li role="tab">
<a href="#sources">Sources &amp; Uses</a>
</li>
<li role="tab">
<a href="#topics">Topics</a>
</li>
<li role="tab">
<a href="#geography">Geography</a>
</li>
<li role="tab">
<a href="#tools">Tools</a>
</li>
<li role="tab">
<a href="#learn">Learn About Energy</a>
</li>
<li role="tab">
<a href="#news">News</a>
</li>
</ul>
</div>
<!--Sources and Uses-->
<div id="sources">
<div class="sources-uses left">
<div class="nav-menu petroleum">
<i class="ico ico-nav petroleum">
</i>
<h3>
<a href="/">Petroleum &amp; Other Liquids</a>
</h3>
<li>Crude oil, gasoline, heating oil, diesel, propane, and other liquids including biofuels and natural gas liquids.</p>
<ul>
<li>
<a>This Week in Petroleum &rsaquo;</a>
</li>
<li>
<a>Weekly Petroleum Status Report &rsaquo;</a>
</li>
</ul>
</div>
<div class="nav-menu natural-gas">
<i class="ico ico-nav natural-gas">
</i>
<h3>
<a href="/">Natural Gas</a>
</h3>
<li>Exploration and reserves, storage, imports and exports, production, prices, sales.</p>
<ul>
<li>
<a>Weekly Natural Gas Status Report &rsaquo;</a>
</li>
<li>
<a>Natural Gas Weekly Update &rsaquo;</a>
</li>
</ul>
</div>
<div class="nav-menu electricity">
<i class="ico ico-nav electricity">
</i>
<h3>
<a href="/electricity/">Electricity</a>
</h3>
<li>Sales, revenue and prices, power plants, fuel use, stocks, generation, trade, demand &amp; emissions.</p>
<ul>
<li>
<a>Electric Power Monthly &rsaquo;</a>
</li>
<li>
<a>Electricity Data Browser &rsaquo;</a>
</li>
</ul>
</div>
<div class="nav-menu consumption">
<i class="ico ico-nav consumption">
</i>
<h3>
<a href="/consumption/">Consumption &amp; Efficiency</a>
</h3>
<li>Energy use in homes, commercial buildings, manufacturing, and transportation.</p>
<ul>
<li>
<a>RECS 2009 &rsaquo;</a>
</li>
<li>
<a>CBECS &rsaquo;</a>
</li>
</ul>
</div>
<div class="sources-uses right">
<div class="nav-menu coal">
<i class="ico ico-nav coal">
</i>
<h3>
<a href="/coal">Coal</a>
</h3>
<li>Reserves, production, prices, employment and productivity, distribution, stocks, imports and exports.</p>
<ul>
<li>
<a>Quarterly Coal Report &rsaquo;</a>
</li>
<li>
<a>Coal Data Browser &rsaquo;</a>
</li>
</ul>
</div>
<div class="nav-menu renewable">
<i class="ico ico-nav renewable">
</i>
<h3>
<a href="/renewable/">Renewable &amp; Alternative Fuels</a>
</h3>
<li>Includes hydropower, solar, wind, geothermal, biomass and ethanol.</p>
<ul>
<li>
<a>Alternative Fuel Vehicle Browser &rsaquo;</a>
</li>
</ul>
</div>
<div class="nav-menu nuclear">
<i class="ico ico-nav nuclear">
</i>
<h3>
<a href="/nuclear/">Nuclear &amp; Uranium</a>
</h3>
<li>Uranium fuel, nuclear reactors, generation, spent fuel.<br />+&nbsp;</p>
<ul>
<li>
<a>Status of Nuclear Outages &rsaquo;</a>
</li>
</ul>
</div>
<div class="nav-menu total-energy">
<i class="ico ico-nav total-energy">
</i>
<h3>
<a href="/totalenergy/">Total Energy</a>
</h3>
<li>Comprehensive data summaries, comparisons, analysis, and projections integrated across all energy sources.</p>
<ul>
<li>
<a>Monthly Energy Review &rsaquo;</a>
</li>
<li>
<a>Annual Energy Review &rsaquo;</a>
</li>
</ul>
</div>
</div>
<!--Topics-->
<div id="topics">
<div class="topics left">
<div class="naico-nav analysis-projections>
<i class="ico ico-nav analysis">
</i>
<h3>
<a href="/analysis/">Analysis &amp; Projections</a>
</h3>
<li>Monthly and yearly energy forecasts, analysis of energy topics, financial analysis, Congressional reports.</p>
<ul>
<li>
<a>Short Term Energy Outlook &rsaquo;</a>
</li>
<li>
<a>Annual Energy Outlook &rsaquo;</a>
</li>
<li>
<a>International Energy Outlook &rsaquo;</a>
</li>
</ul>
</div>
<div class="nav-menu finance">
<i class="ico ico-nav finance">
</i>
<h3>
<a href="/finance/">Markets &amp; Finance</a>
</h3>
<li>Financial market analysis and financial data for major energy companies.</p>
<ul>
<li>
<a>Market Prices and Uncertainty Report &rsaquo;</a>
</li>
<li>
<a>Energy &amp; Financial Markets: What Drives Crude Oil Prices? &rsaquo;</a>
</li>
</ul>
</div>
<div class="topics right">
<div class="nav-menu environment">
<i class="ico ico-nav environment">
</i>
<h3>
<a href="/environment/">Environment</a>
</h3>
<li>Greenhouse gas data, voluntary report-ing, electric power plant emissions.</p>
<ul>
<li>
<a>Energy-Related Carbon Dioxide Emissions at the State Level, 2000-2013 &rsaquo;</a>
</li>
<li>
<a>State Carbon Dioxide Emissions &rsaquo;</a>
</li>
</ul>
</div>
</div>
<!--Geography-->
<div id="geography">
<div class="geography left">
<div class="nav-menu us-states">
<i class="ico ico-nav us-states">
</i>
<h3>
<a href="/state/">U.S. States</a>
</h3>
<li>State energy information, including overviews, rankings, data, and analyses.</p>
<ul>
<li>
<a>State Energy Data System (SEDS) &rsaquo;</a>
</li>
</ul>
</div>
<div class="nav-menu maps">
<i class="ico ico-nav maps">
</i>
<h3>
<a href="/maps/">Maps</a>
</h3>
<li>Maps by energy source and topic, includes forecast maps.</p>
<ul>
<li>
<a>U.S. Energy Mapping System &rsaquo;</a>
</li>
<li>
<a>Gulf of Mexico &rsaquo;</a>
</li>
<li>
<a>Energy Disruptions &rsaquo;</a>
</li>
</ul>
</div>
<div class="geography right">
<div class="nav-menu international">
<i class="ico ico-nav international">
</i>
<h3>
<a href="/beta/international/">International</a>
</h3>
<li>International energy information, including overviews, rankings, data, and analyses.</p>
<ul>
<li>
<a>International Energy Statistics &rsaquo;</a>
</li>
</ul>
</div>
<!--
<div class="nav-menu regions">
<i class="ico ico-nav regions">
</i>
<a href="/regions/">
<h3>Energy Regions</h3>        <li>Energy use and cost by geographic region.</p>
</a>
</div>
-->
</div>
</div>
<!--Tools-->
<div id="tools">
<div class="tools left">
<div class="nav-menu eia-glossary">
<i class="ico ico-nav eia-glossary">
</i>
<h3>
<a href="/tools/glossary/">Glossary</a>
</h3>
<form action="http://www.eia.gov/tools/glossary/index.cfm" method="post" name="frmGlossary">
<input class="fancy-search-box" name="glossary" value="Search the glossary" type="text" />
<input type="button" value="Search" name="search" alt="enter terms to search" onClick="validate()" class="arrow_go" border="0" title="Search Glossary">
</form>
</div>
<div class="nav-menu data-tools-model">
<i class="ico ico-nav data-tools-model">
</i>
<h3>
<a href="/tools/models/">Data Tools &amp; Models</a>
</h3>
<li>Tools to customize searches, view specific data sets, study detailed documentation, and access time-series data.</p>
</div>
<div class="nav-menu open-data">
<i class="ico ico-nav open-data">
</i>
<h3>
<a href="/beta/api/">Open Data</a>
</h3>
<li>EIA's free and open data available as API, Excel add-in, bulk files, and widgets</p>
</div>
<div class="nav-menu beta">
<i class="ico ico-nav beta">
</i>
<h3>
<a href="/beta">EIA Beta</a>
</h3>
<li>Come test out some of the products still in development and let us know what you think!</p>
</div>
<div class="nav-menu follow-us">
<i class="ico ico-nav follow-us">
</i>
<h3>Follow us. . .</h3>
<a href="http://facebook.com/eiagov/" target="_blank">
<i class="ico ico-menu facebook">
</i>
</a>
<a href="http://twitter.com/eiagov/" target="_blank">
<i class="ico ico-menu twitter">
</i>
</a>
<a href="http://youtube.com/eiagov/" target="_blank">
<i class="ico ico-menu youtube">
</i>
</a>
<a href="https://www.flickr.com/photos/eiagov/">
<i class="ico ico-menu flickr">
</i>
</a>
<a href="https://www.linkedin.com/company/u-s-energy-information-administration">
<i class="ico ico-menu linkedin">
</i>
</a>
</div>
</div>
<div class="tools right">
<div class="nav-menu reports">
<i class="ico ico-nav reports">
</i>
<h3>
<a href="/">All Reports &amp; Publications</a>
</h3>
<script type="text/javascript">
</script>
<div class="reports-publication-search">
<textarea type="text" class="fancy-search-box" id="userInput" placeholder="Enter tags. Tags should be seperated with the + character">
</textarea>
<button type="submit" id="goBtn" class="arrow_go">
</button>
</div>
</div>
<div class="nav-menu survey">
<i class="ico ico-nav survey">
</i>
<h3>
<a href="/survey/">EIA Survey Forms</a>
</h3>
<form accept-charset="UTF-8" action="//search.usa.gov/search" class="search_form" method="get">
<input name="utf8" type="hidden" value="&#x2713;" />
<input id="affiliate" name="affiliate" type="hidden" value="eia.doe.gov" />
<input autocomplete="off" class="usagov-search-autocomplete fancy-search-box" name="query" type="text" maxlength="256" placeholder="Search survey forms by name or #" onfocus="this.placeholder=''" onblur="this.placeholder='Search survey forms by name or #'" />
<input type="submit" name="search" alt="enter terms to search" class="arrow_go" border="0" title="Click to search EIA">
</form>
</div>
<div class="nav-menu email">
<i class="ico ico-nav email">
</i>
<h3>
<a href="/tools/emailupdates/">Email Updates</a>
</h3>
<li>Sign up for email subcriptions to receive messages about specific EIA products</p>
</div>
<div class="nav-menu rss">
<i class="ico ico-nav rss">
</i>
<h3>
<a href="https://www.eia.gov/tools/rssfeeds/">RSS Feeds</a>
</h3>
<li>Subscribe to feeds for updates on EIA products including Today in Energy and What's New.</p>
</div>
</div>
</div>
<!--Learn-->
<div id="learn">
<div class="learn left">
<div class="nav-menu today-in-energy">
<i class="ico ico-nav today-in-energy">
</i>
<h3>
<a href="/todayinenergy/">Today in Energy</a>
</h3>
<li>Short, timely articles with graphics on energy, facts, issues, and trends.</p>
</div>
<div class="nav-menu energy-explained">
<i class="ico ico-nav energy-explained">
</i>
<h3>
<a href="/energyexplained/">Energy Explained</a>
</h3>
<ul class="energy-explained-list left">
<li>
<a href="/energyexplained/index.cfm?page=about_home">What is Energy? &rsaquo;</a>
</li>
<li>
<a href="/energyexplained/index.cfm?page=about_energy_units">Units &amp; Calculators &rsaquo;</a>
</li>
<li>
<a href="/energyexplained/index.cfm?page=us_energy_use">Use of Energy &rsaquo;</a>
</li>
<li>
<a href="/energyexplained/index.cfm?page=environment_home">Energy &amp; Environment &rsaquo;</a>
</li>
<li>
<a href="/energyexplained/index.cfm?page=oil_home">Petroleum &rsaquo;</a>
</li>
<li>
<a href="/energyexplained/index.cfm?page=natural_gas_home">Natural Gas &rsaquo;</a>
</li>
<li>
<a href="/energyexplained/index.cfm?page=coal_home">Coal &rsaquo;</a>
</li>
<li>
<a href="/energyexplained/index.cfm?page=nuclear_home">Nuclear &rsaquo;</a>
</li>
</ul>
</div>                <ul class="energy-explained-list right">
<li>
<a href="/energyexplained/index.cfm?page=electricity_home">Electricity &rsaquo;</a>
</li>
<li>
<a href="/energyexplained/index.cfm?page=hydropower_home">Hydropower &rsaquo;</a>
</li>
<li>
<a href="/energyexplained/index.cfm?page=biofuel_home">Biofuels: Ethanol &amp; Biodiesel &rsaquo;</a>
</li>
<li>
<a href="/energyexplained/index.cfm?page=wind_home">Wind &rsaquo;</a>
</li>
<li>
<a href="/energyexplained/index.cfm?page=geothermal_home">Geothermal &rsaquo;</a>
</li>
<li>
<a href="/energyexplained/index.cfm?page=solar_home">Solar &rsaquo;</a>
</li>
</ul>
</div>
<div class="nav-menu energy-in-brief">
<i class="ico ico-nav energy-in-brief">
</i>
<h3>
<a href="/energy_in_brief/">Energy in Brief</a>
</h3>
<ul>
<li>
<a href="/energy_in_brief/article/renewable_electricity.cfm">How much U.S. electricity is generated from renewable energy? &rsaquo;</a>
</li>
<li>
<a href="/energy_in_brief/article/shale_in_the_united_states.cfm">Shale in the United States &rsaquo;</a>
</li>
<li>
<a href="/energy_in_brief/article/foreign_oil_dependence.cfm">How dependent are we on foreign oil? &rsaquo;</a>
</li>
<li>
<a href="/energy_in_brief/article/role_coal_us.cfm">What is the role of coal in the United States? &rsaquo;</a>
</li>
</ul>
</div>
<div class="learn right">
<div class="nav-menu eia-glossary">
<i class="ico ico-nav eia-glossary">
</i>
<h3>
<a href="/tools/glossary/">Glossary</a>
</h3>
<form action="http://www.eia.gov/tools/glossary/index.cfm" method="post" name="frmGlossary">
<input class="fancy-search-box" name="glossary" value="Search the glossary" type="text" />
<input type="button" value="Search" name="search" alt="enter terms to search" onClick="validate()" class="arrow_go" border="0" title="Search Glossary">
</form>
</div>
<div class="nav-menu faq">
<i class="ico ico-nav faq">
</i>
<h3>
<a href="/tools/faqs/">FAQs</a>
</h3>
<ul class="faq-list left">
<li>
<a href="http://www.eia.gov/tools/faqs/#coal">Coal &rsaquo;</a>
</li>
<li>
<a href="http://www.eia.gov/tools/faqs/#conversion equivalents">Conversion &amp; Equivalents &rsaquo;</a>
</li>
<li>
<a href="http://www.eia.gov/tools/faqs/#crudeoil">Crude Oil &rsaquo;</a>
</li>
<li>
<a href="http://www.eia.gov/tools/faqs/#diesel">Diesel &rsaquo;</a>
</li>
<li>
<a href="http://www.eia.gov/tools/faqs/#electricity">Electricity &rsaquo;</a>
</li>
<li>
<a href="http://www.eia.gov/tools/faqs/#environment">Environment &rsaquo;</a>
</li>
</ul>
</div>                <ul class="faq-list right">
<li>
<a href="/tools/faqs/index.cfm#gasoline">Gasoline &rsaquo;</a>
</li>
<li>
<a href="/tools/faqs/index.cfm#generalenergy">General Energy &rsaquo;</a>
</li>
<li>
<a href="/tools/faqs/index.cfm#naturalgas">Natural Gas &rsaquo;</a>
</li>
<li>
<a href="/tools/faqs/index.cfm#nuclear">Nuclear &rsaquo;</a>
</li>
<li>
<a href="/tools/faqs/index.cfm#prices">Prices &rsaquo;</a>
</li>
<li>
<a href="/tools/faqs/index.cfm#renewables">Renewables &rsaquo;</a>
</li>
</ul>
</div>
<div class="nav-menu teachers">
<div class="left">
<i class="ico ico-nav teachers">
</i>
<h3>
<a href="/kids/energy.cfm?page=6">For Teachers</a>
</h3>
<li>Lesson plans, science fair experiments, field trips, teacher guide, and career corner.</p>
</div>
<div class="right">
<a href="/kids/">
</a>
</div>
</div>
</div>
</div>
<!--News-->
<div id="news">
<div class="news left">
<div class="nav-menu featured-reports">
<i class="ico ico-nav featured-reports">
</i>
<h3>
<a href="#">Featured Reports</a>
</h3>
<li>Reports requested by congress or otherwise deemed important.</p>
<ul>
<li>
<a href="#">Important Report #1 &rsaquo;</a>
</li>
<li>
<a href="#">Important Report #2 &rsaquo;</a>
</li>
<li>
<a href="#">Important Report #3 &rsaquo;</a>
</li>
<li>
<a href="#">Important Report #4 &rsaquo;</a>
</li>
</ul>
</div>
<div class="nav-menu press-room">
<i class="ico ico-nav press-room">
</i>
<h3>
<a href="/pressroom/">Press Room</a>
</h3>
<ul>
<li>
<a href="/pressroom/releases.cfm">Press Releases &rsaquo;</a>
</li>
<li>
<a href="/pressroom/testimony.cfm">Congressional Testimony &rsaquo;</a>
</li>
<li>
<a href="/pressroom/presentations.cfm">Presentations &rsaquo;</a>
</li>
<li>
<a href="/pressroom/events.cfm">Events &rsaquo;</a>
</li>
<li>
<a href="/radio/">Radio Spots &rsaquo;</a>
</li>
</ul>
</div>
<div class="news right">
<div class="nav-menu whats-new">
<i class="ico ico-nav whats-new">
</i>
<h3>
<a href="/about/new/">What's New?</a>
</h3>
<!--- Jquery is loading the What's new file ---->
<div id="whatsnew3">
</div>
</div>
<div class="nav-menu coming-up">
<i class="ico ico-nav coming-up">
</i>
<h3>
<a href="#">Coming Up</a>
</h3>
<ul>
<li>
<a href="#">Annual Coal Distribution Report &rsaquo;</a>
</li>
<li>
<a href="#">International Energy Outlook &rsaquo;</a>
</li>
<li>
<a href="#">Annual Coal Report &rsaquo;</a>
</li>
</ul>
</div>
</div>
<div class="nav-menu az-index">
<i class="ico ico-nav az-index">
</i>
<h3>
<a href="/tools/a-z/">A-Z Index</a>
</h3>
<div class="az-list">
<a href="/tools/a-z/index.cfm?id=a">A</a> |
<a href="/tools/a-z/index.cfm?id=b">B</a> |
<a href="/tools/a-z/index.cfm?id=c">C</a> |
<a href="/tools/a-z/index.cfm?id=d">D</a> |
<a href="/tools/a-z/index.cfm?id=e">E</a> |
<a href="/tools/a-z/index.cfm?id=f">F</a> |
<a href="/tools/a-z/index.cfm?id=g">G</a> |
<a href="/tools/a-z/index.cfm?id=h">H</a> |
<a href="/tools/a-z/index.cfm?id=i">I</a> |
<a href="/tools/a-z/index.cfm?id=j">J</a> |
<a href="/tools/a-z/index.cfm?id=k">K</a> |
<a href="/tools/a-z/index.cfm?id=l">L</a> |
<a href="/tools/a-z/index.cfm?id=m">M</a> |
<a href="/tools/a-z/index.cfm?id=n">N</a> |
<a href="/tools/a-z/index.cfm?id=o">O</a> |
<a href="/tools/a-z/index.cfm?id=p">P</a> |
<a href="/tools/a-z/index.cfm?id=q">Q</a> |
<a href="/tools/a-z/index.cfm?id=r">R</a> |
<a href="/tools/a-z/index.cfm?id=s">S</a> |
<a href="/tools/a-z/index.cfm?id=t">T</a> |
<a href="/tools/a-z/index.cfm?id=u">U</a> |
<a href="/tools/a-z/index.cfm?id=v">V</a> |
<a href="/tools/a-z/index.cfm?id=w">W</a> |
<a href="/tools/a-z/index.cfm?id=xyz">XYZ</a>
</div>
</div>
</div>
</div>
<div class="nav-search search-panel">
<div class="search">
<form accept-charset="UTF-8" action="//search.usa.gov/search" id="search_form" method="get">
<input name="utf8" type="hidden" value="&#x2713;" />
<input id="affiliate" name="affiliate" type="hidden" value="eia.doe.gov" />
<label class="accessibility" for="query">Enter Search Term(s):</label>
<i class="ico magnifying-glass">
</i>
<input autocomplete="off" class="usagov-search-autocomplete search-box" name="query" type="text" maxlength="256" value="Search eia.gov" />
<input type="submit" name="search" alt="enter terms to search" class="arrow_go" border="0" title="Click to search EIA">
</form>
<script type="text/javascript">
//<![CDATA[
var usasearch_config = { siteHandle:"eia.doe.gov" };
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://www.eia.gov/global/scripts/search.usa.gov/remote.loader.js"; // NOTE this may need to be updated from //search.usa.gov/javascripts/remote.loader.js" periodically
document.getElementsByTagName("head")[0].appendChild(script);
//]]>
</script>
</div>
</div>
</nav>
</header>
<section class="content">
<div class="l-outer-wrapper">
<div class="l-inner-wrapper">
<div class="content">
