<!--- <cfcache action="flush"> --->
<!--- Social links --->
<cfif #cgi.HTTP_HOST# NEQ 'wwwdev.eia.gov' AND #cgi.HTTP_HOST# NEQ 'wwwtest.eia.gov' AND #cgi.HTTP_HOST# NEQ 'wwwdev'>
<!--- Disable the social media icons on the 404 File Not Found page --->
<cfparam name="a40412" default="">
<cfif a40412 NEQ 'y'>
<script>
$(document).ready(function() {
    function position() {
      $( "#sticker.positionable" ).position({
        of: $( "#outerX" ),
        my: "left top",
        at: "right top"
      });
	  $('#sticker').offset({top:$(window).scrollTop()+10});
    }
 
    position();

	$('#sticker').hover(function(event){
	   $(this).stop(true,false).animate({right: '-125px', width: '160px'}, 'slow');
	},function(event){  
		$(this).stop(true,true).animate({right: '0', width: '35px'}, 'slow');
	});
	$(window).scroll(function () {position();});
	$(window).resize(function () {position();});
});
</script>
<div id="sticker" class="social-fixed positionable">
  <div class="addthis_toolbox addthis_default_style ">
    <ul class="social shider">
      <li><a href="https://twitter.com/EIAgov" target="_blank"><img src="/global/images/icons/social-twitter.jpg" class="imgalpha"></a>
        <div class="link twt">
          <div class="tweet"><a class="addthis_button_tweet"></a></div>
        </div>
      </li>
      <li><a href="https://www.facebook.com/eiagov" target="_blank"><img src="/global/images/icons/social-facebook.jpg" class="imgalpha"></a>
        <div class="link facebook">
          <div id="share-facebook"><a class="addthis_button_facebook_like at300b" fb:like:layout="button_count"></a></div>
        </div>
      </li>
    </ul>
  </div>
</div>
<!---script type="text/javascript">var addthis_config = {"data_track_addressbar":true};</script---> 
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-514b0d4a047a687f" async="async"></script>
</cfif></cfif>
<!---/Social links --->
<div id="innerX"><!--- Inner Wrapper --->
  <div class="content"><!--- Page Wrapper --->
<!--- Print Header --->
<!--- Header --->
    <div id="header">
    <div class="print"><img src="/global/images/logos/eia_logo_print.png"/></div>
<!--- Global Navigation --->
      <a href="/"><h1>U.S. Energy Information Administration - EIA - Independent Statistics and Analysis</h1></a>
      <ul class="global-width" id="g-margin3">
        <li class="global-es"><a>Sources &amp; Uses</a></li>
          <div class="global_es_menu">
            <span class="global_menu_col1">
              <a href="/petroleum/"><h3>Petroleum &amp; Other Liquids</h3><p>Crude oil, gasoline, heating oil, diesel, propane, and other liquids including biofuels and natural gas liquids.</p></a>
              <a href="/naturalgas/"><h3>Natural Gas</h3><p>Exploration and reserves, storage, imports and exports, production, prices, sales.</p></a>
              <a href="/electricity/"><h3>Electricity</h3><p>Sales, revenue and prices, power plants, fuel use, stocks, generation, trade, demand & emissions.</p></a>
              <a href="/consumption/"><h3>Consumption & Efficiency</h3><p class="no-border no-btm">Energy use in homes, commercial buildings, manufacturing, and transportation.</p></a>
            </span>
            <span class="global_menu_col2">
              <a href="/coal/"><h3>Coal</h3><p>Reserves, production, prices, employ- ment and productivity, distribution, stocks, imports and exports.</p></a>
              <a href="/renewable/"><h3>Renewable &amp;<br>Alternative Fuels</h3><p class="sp-renewable">Includes hydropower, solar, wind, geothermal, biomass and ethanol.</p></a>
              <a href="/nuclear/"><h3>Nuclear &amp; Uranium</h3><p>Uranium fuel, nuclear reactors, generation, spent fuel.<br />&nbsp;</p></a>
              <a href="/totalenergy/"><h3>Total Energy</h3><p class="no-border">Comprehensive data summaries, comparisons, analysis, and projections integrated across all energy sources.</p></a>
            </span>
            <span class="global_menu_col3">
              <h3>Highlights</h3>
              <a href="/petroleum/weekly/">This Week in Petroleum&nbsp;&rsaquo;</a>
              <a href="/petroleum/supply/weekly/">Weekly Petroleum Status Report&nbsp;&rsaquo;</a>
              <a href="http://ir.eia.gov/ngs/ngs.html">Weekly Natural Gas Storage Report&nbsp;&rsaquo;</a>
              <a href="/naturalgas/weekly/">Natural Gas Weekly Update&nbsp;&rsaquo;</a>
              <a href="/electricity/monthly/">Electric Power Monthly&nbsp;&rsaquo;</a>
              <a href="/coal/production/quarterly/">Quarterly Coal Report&nbsp;&rsaquo;</a>
              <a href="/totalenergy/data/monthly/">Monthly Energy Review&nbsp;&rsaquo;</a>
              <a href="/consumption/residential/">Residential Energy Consumption Survey 2015&nbsp;&rsaquo;</a>
              <a href="/electricity/data/browser/">Electricity Data Browser&nbsp;&rsaquo;</a>
            </span>
            <!---span class="global_menu_col4"><a href="/totalenergy/"><h3>All Sources</h3><p class="no-border">Data summaries, comparisons, analysis, and projections integrated across all energy sources.</p></a></span--->
          </div>
        <li class="global-topics" id="g-margin1"><a>Topics</a></li>
          <div class="global_topics_menu">
            <span class="global_menu_col1">
              <a href="/analysis/"><h3>Analysis &amp; Projections</h3><p>Monthly and yearly energy forecasts, analysis of energy topics, financial analysis, Congressional reports.</p></a>
              <a href="/finance/"><h3>Markets &amp; Finance</h3><p class="no-border no-btm">Financial market analysis and financial data for major energy companies.</p></a>
            </span>
            <span class="global_menu_col2">
              <a href="/environment/"><h3>Environment</h3><p class="sp-environment">Greenhouse gas data, voluntary report- ing, electric power plant emissions.</p></a>
            </span>
            <span class="global_menu_col3">
              <h3>Highlights</h3>
              <a href="/outlooks/steo/">Short-Term Energy Outlook&nbsp;&rsaquo;</a>
              <a href="/outlooks/aeo/">Annual Energy Outlook&nbsp;&rsaquo;</a>
              <a href="/special/disruptions/">Energy Disruptions&nbsp;&rsaquo;</a>
              <a href="/outlooks/ieo/">International Energy Outlook&nbsp;&rsaquo;</a>
              <a href="/beta/api/excel/">Excel Data Add-In&nbsp;&rsaquo;</a>
            </span>
          </div>
        <li class="global-geo"><a>Geography</a></li>
          <div class="global_geo_menu">
            <span class="global_menu_col1">
              <a href="/state/"><h3>U.S. States</h3><p>State energy information, including overviews, rankings, data, and analyses.</p></a>
              <a href="/maps/"><h3>Maps</h3><p class="no-border no-btm">Maps by energy source and topic, includes forecast maps.</p></a>
            </span>
            <span class="global_menu_col2">
              <a href="/beta/international/"><h3>International</h3><p>International energy information, including overviews, rankings, data, and analyses.</p></a>
              <!---a href="/regions/"><h3>Energy Regions</h3><p class="no-border no-btm">Energy use and cost by geographic region.</p></a--->
            </span>
            <span class="global_menu_col3">
              <h3>Highlights</h3>
              <a href="/state/seds/">State Energy Data System (SEDS)&nbsp;&rsaquo;</a>
              <a href="/cfapps/ipdbproject/IEDIndex3.cfm">International Energy Statistics&nbsp;&rsaquo;</a>
              <a href="/special/gulf_of_mexico/">Gulf of Mexico&nbsp;&rsaquo;</a>
              <a href="/state/maps.cfm">U.S. Energy<br />Mapping System&nbsp;&rsaquo;</a>
              <!---a href="/countries/mena/">Middle East &amp; North Africa&nbsp;&rsaquo;</a--->
            </span>
          </div>
      </ul>
      <ul class="utils">
        <li class="global-tools" id="g-margin2"><a>Tools</a></li>
          <div class="global_tools_menu">
            <span class="global_menu_col5">
              <p class="no-border">
              <a href="/tools/glossary/" class="ico_glossary_dblue header_icon_pad">Glossary&nbsp;&rsaquo;</a><br />
              <a href="/reports/" class="ico_reports header_icon_pad">All Reports &amp; Publications&nbsp;&rsaquo;</a><br />
              <a href="/tools/" class="ico_mining header_icon_pad">Data Tools, Apps, and Maps&nbsp;&rsaquo;</a><br />
              <a href="/survey/" class="ico_survey header_icon_pad">EIA Survey Forms&nbsp;&rsaquo;</a>              
              <a href="/beta/api/" class="ico_api header_icon_pad">Open Data&nbsp;&rsaquo;</a>              
              </p>
            </span>
            <span class="global_menu_col6">
              <p class="no-border"><a href="https://facebook.com/eiagov/" target="_blank" class="ico_facebook header_icon_pad">Facebook</a><br />
              <a href="https://twitter.com/eiagov/" target="_blank" class="ico_twitter header_icon_pad">Twitter</a><br />
              <a href="https://youtube.com/eiagov/" target="_blank" class="ico_youtube header_icon_pad">YouTube</a><br />
              <a href="/tools/emailupdates/" class="ico_email header_icon_pad">Email Updates</a><br />
              <a href="/tools/rssfeeds/" class="ico_rss header_icon_pad">RSS Feeds</a></p>
            </span>
          </div>
        <li class="global-learn" id="g-margin2"><a>Learn About Energy</a></li>
          <div class="global_learn_menu">
            <span class="global_menu_col8a">
              <h3><a href="/todayinenergy/">Today in Energy</a></h3>
              <p>Short, timely articles with graphics on energy, facts, issues, and trends.</p>
            </span>
            <span class="global_menu_col6">
              <p class="no-border"><a href="/tools/faqs/" class="ico_faqs header_icon_pad">FAQs</a><br />
              <a href="/tools/glossary/" class="ico_glossary header_icon_pad">Glossary</a><br />
              <a href="/kids/energy.cfm?page=6" class="ico_teachers header_icon_pad border_learn">For Teachers</a></p>
            </span>
            <span class="global_menu_col8">
              <h3><a href="/energyexplained/">Energy Explained</a></h3>
              <p class="width152"><a href="/energyexplained/index.cfm?page=about_home">What is Energy?&nbsp;&rsaquo;</a><br />
              <a href="/energyexplained/index.cfm?page=about_energy_units">Units &amp; Calculators&nbsp;&rsaquo;</a><br />
              <a href="/energyexplained/index.cfm?page=us_energy_use">Use of Energy&nbsp;&rsaquo;</a><br />
              <a href="/energyexplained/index.cfm?page=environment_home">Energy & Environment&nbsp;&rsaquo;</a><br>
              <a href="/energyexplained/index.cfm?page=electricity_home">Electricity&nbsp;&rsaquo;</a></p>
              <p class="width110"><a href="/energyexplained/index.cfm?page=oil_home">Petroleum&nbsp;&rsaquo;</a>
              <a href="/energyexplained/index.cfm?page=hgls_home">Hydrocarbon Gas Liquids&nbsp;&rsaquo;</a><br />
              <a href="/energyexplained/index.cfm?page=natural_gas_home">Natural Gas&nbsp;&rsaquo;</a><br />
              <a href="/energyexplained/index.cfm?page=coal_home">Coal&nbsp;&rsaquo;</a><br />
              <a href="/energyexplained/index.cfm?page=nuclear_home">Nuclear&nbsp;&rsaquo;</a></p>
              <p class="width181"><a href="/energyexplained/index.cfm?page=electricity_home">Electricity&nbsp;&rsaquo;</a><br>
              <a href="/energyexplained/index.cfm?page=hydropower_home">Hydropower&nbsp;&rsaquo;</a><br />
              <a href="/energyexplained/index.cfm?page=biofuel_home">Biofuels: Ethanol &amp; Biodiesel&nbsp;&rsaquo;</a><br />
              <a href="/energyexplained/index.cfm?page=wind_home">Wind&nbsp;&rsaquo;</a><br />
              <a href="/energyexplained/index.cfm?page=geothermal_home">Geothermal&nbsp;&rsaquo;</a><br />
              <a href="/energyexplained/index.cfm?page=solar_home">Solar&nbsp;&rsaquo;</a></p>
            </span>
            <!---span class="global_menu_col9">
              <h3><a href="/energy_in_brief/">Energy in Brief</a></h3>
				<p class="no-border global_menu_col10"><a href="/energy_in_brief/article/renewable_electricity.cfm">How much U.S. electricity is generated from renewable energy?&nbsp;&rsaquo;</a><br />
				<a href="/energy_in_brief/article/shale_in_the_united_states.cfm">Shale in the United States&nbsp;&rsaquo;</a></p>
				<p class="no-border global_menu_col10"><a href="/energy_in_brief/article/world_oil_market.cfm">Who are the major players supplying the world oil market?&nbsp;&rsaquo;</a><br />
				<a href="/energy_in_brief/article/role_coal_us.cfm">What is the role of coal in the United States?&nbsp;&rsaquo;</a></p>
            </span--->
            <span class="global_menu_col6 mt_40">
              <p class="no-border"><a href="/kids/" class="ant_banner">Energy Kids</a></p>
            </span>
          </div>
        <li class="global-news"><a>News</a></li>
          <div class="global_news_menu">
            <span class="global_menu_col7">
              <h3><a href="/about/new/">What's New?</a></h3>
              <!--- Jquery is loading the What's new file --->
              <div id="whatsnew3"></div>
            </span>
            <span class="global_menu_col3">
              <h3><a href="/pressroom/" style="color:#fff !important;">Press Room</a></h3>
              <a href="/pressroom/releases.cfm">Press Releases&nbsp;&rsaquo;</a>
              <a href="/pressroom/presentations.cfm">Presentations&nbsp;&rsaquo;</a>
              <a href="/pressroom/testimony.cfm">Congressional Testimony&nbsp;&rsaquo;</a>
              <a href="/radio/">Radio Spots&nbsp;&rsaquo;</a>
            </span>
          </div>
      </ul>
      <ul class="utils2">
      <div class="global-search">
          <!--- Disable site search on dev site to speed up iterative development, and to keep the typeahead history data accurate -SNW --->
          <cfif Find('wwwdev',CGI.HTTP_HOST)>
            <span style="color:#777">Site search disabled on dev</span>
          <cfelse>
      			<!--- NOTE the "affiliate" and "siteHandle" of "eia.doe.gov" are just an arbitrary identifier associated with type-ahead history built up over years, so it doesn't matter that the site is now "www.eia.gov" --->
      			<form accept-charset="UTF-8" action="//search.usa.gov/search" id="search_form" method="get">
                <input name="utf8" type="hidden" value="&#x2713;" />
      			    <input id="affiliate" name="affiliate" type="hidden" value="eia.doe.gov" />
      			    <label class="accessibility" for="query">Enter Search Term(s):</label>
      			    <input autocomplete="off" class="usagov-search-autocomplete" id="search-input" name="query" type="text" maxlength="256" style="width:150px" value="Search eia.gov" />
     	          <input type="submit" name="search" alt="enter terms to search" class="arrow_go" align="absmiddle" border="0" title="Click to search EIA">
      			</form>
            <script type="text/javascript">
            //<![CDATA[
                var usasearch_config = { siteHandle:"eia.doe.gov" };
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = "/global/scripts/search.usa.gov/remote.loader.js"; // NOTE this may need to be updated from //search.usa.gov/javascripts/remote.loader.js" periodically
                document.getElementsByTagName("head")[0].appendChild(script);
            //]]>
            </script>
          </cfif>
      </div>
      <li class="global-a-z"><a href="/tools/a-z/">A-Z Index</a></li>
      <div class="global_a-z_menu">
        <span class="global_menu_col11">
        <h3><a href="/tools/a-z/">A-Z Index</a></h3>
          <a href="/tools/a-z/index.cfm?id=a">A</a>
          <a href="/tools/a-z/index.cfm?id=b">B</a>
          <a href="/tools/a-z/index.cfm?id=c">C</a>
          <a href="/tools/a-z/index.cfm?id=d">D</a>
          <a href="/tools/a-z/index.cfm?id=e">E</a>
          <a href="/tools/a-z/index.cfm?id=f">F</a>
          <a href="/tools/a-z/index.cfm?id=g">G</a>
          <a href="/tools/a-z/index.cfm?id=h">H</a>
          <a href="/tools/a-z/index.cfm?id=i">I</a>
          <a href="/tools/a-z/index.cfm?id=j">J</a>
          <a href="/tools/a-z/index.cfm?id=k">K</a>
          <a href="/tools/a-z/index.cfm?id=l">L</a>
          <a href="/tools/a-z/index.cfm?id=m">M</a>
          <a href="/tools/a-z/index.cfm?id=n">N</a>
          <a href="/tools/a-z/index.cfm?id=o">O</a>
          <a href="/tools/a-z/index.cfm?id=p">P</a>
          <a href="/tools/a-z/index.cfm?id=q">Q</a>
          <a href="/tools/a-z/index.cfm?id=r">R</a>
          <a href="/tools/a-z/index.cfm?id=s">S</a>
          <a href="/tools/a-z/index.cfm?id=t">T</a>
          <a href="/tools/a-z/index.cfm?id=u">U</a>
          <a href="/tools/a-z/index.cfm?id=v">V</a>
          <a href="/tools/a-z/index.cfm?id=w">W</a>
          <a href="/tools/a-z/index.cfm?id=xyz">XYZ</a>
        </span>
      </div>
      </ul>
    </div><!---/ Global Navigation --->
    <!--- EIA Con banner --->
      <!---div style="height: 60px; background-color:#b3ddf5; padding:8px; text-align:center;" class="conBanner do-not-print">
        <a href="https://www.eia.gov/conference/2017/?src=home-b3" ><img src="/global/images/web_3.jpg"/></a>
      </div--->
    <!--- EIA Con banner --->
<!---/Header --->
<!--- Shutdown --->
<!---cfif sect NEQ 'home'>
<div style="background-color:#fff6bf;padding:4px 10px 4px 10px;margin:0px;border-bottom:2px solid #ffd324;">
    <h2 style="color: #000;font-family:Arial, Helvetica, sans-serif;font-size:18px;margin:6px;line-height:1.3em;text-align:center;">EIA is closed due to a lapse in appropriations. EIA will not update this website until the agency reopens.</h2>
</div>
</cfif--->
<!---/Shutdown--->
<!---Beta header --->
<cfparam name="betasite" default="">
<cfif betasite EQ 'y'>
<cftry>
  <script type="text/javascript" src="/beta/includes/beta_header.js"></script>
  <cfinclude template="/beta/includes/subnav_beta.cfm">
  <cfif betafback EQ 'y'>
    <link rel="stylesheet" href="/beta/includes/feedback.css" type="text/css" media="screen, projection">
    <!---[if IE]><link rel="stylesheet" href="/beta/includes/feedbackie.css" type="text/css" media="screen, projection"><![endif]--->
    <!---script type="text/javascript" src="/global/scripts/JQuery/pslide/jquery.pageslide.min.js"></script--->
    <cfinclude template="/beta/includes/fback_form.cfm">
    <div class="fblink_give hide_menu">Feedback</div>
  </cfif>
<cfcatch><h1>ERROR... I'm working on it...</h1><cfdump var="#cfcatch#"><cfabort></cfcatch>
</cftry>
</cfif>
<!---/Beta header--->
