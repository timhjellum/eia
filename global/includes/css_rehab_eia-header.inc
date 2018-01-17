<?php include ('global/includes/css_rehab_eia-social-sticker.inc'); ?>
<div class="page-wrapper">
	<header>
		<div class="print">
			<img src="/global/images/logos/eia_logo_print.png" />
		</div>
		<nav class="navigation">
			<a class="logo" href="/">
				<h1>U.S. Energy Information Administration - EIA - Independent Statistics and Analysis</h1>
			</a>
			<a href="#" class="search-menu-toggle">
				<i class="ico search">Search</i>
			</a>
			<a class="fancybox-menu menu-toggle" href="#menu" data-target="default">
				<div class="toggle-bar">
				</div>
				<div class="toggle-bar">
				</div>
				<div class="toggle-bar">
				</div>
				<p>Menu</p>
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
			<ul class="nav-secondary">
				<li class="nav-secondary-item">
					<a class="fancybox-menu" href="#menu" data-target="tools">
						<i class="ico plus-greyish-blue">+</i> Tools</a>
				</li>
				<li class="nav-secondary-item">
					<a class="fancybox-menu" href="#menu" data-target="learn">
						<i class="ico plus-greyish-blue">+</i> Learn About Energy</a>
				</li>
				<li class="nav-secondary-item">
					<a class="fancybox-menu" href="#menu" data-target="news">
						<i class="ico plus-greyish-blue">+</i> News</a>
				</li>
			</ul>
			<div class="nav-menu" style="display: none">
				<div class="section-tabs" id="menu">
					<div class="tabs-wrapper">
						<ul>
							<li>
								<a href="#sources">Sources &amp; Uses</a>
							</li>
							<li>
								<a href="#topics">Topics</a>
							</li>
							<li>
								<a href="#geography">Geography</a>
							</li>
							<li>
								<a href="#tools">Tools</a>
							</li>
							<li>
								<a href="#learn">Learn About Energy</a>
							</li>
							<li>
								<a href="#news">News</a>
							</li>
						</ul>
					</div>
					<!--Sources and Uses-->
					<div id="sources">
						<div class="sources-uses left">
							<div class="nav-menu petroleum">
								<i class="ico ico-nav petroleum"></i>
								<h3>
									<a href='/petroleum/'>Petroleum &amp; Other Liquids</a>
								</h3>
								<p>Crude oil, gasoline, heating oil, diesel, propane, and other liquids including biofuels and natural gas liquids.</p>
								<ul>
									<li>
										<a href='/petroleum/weekly/'>This Week in Petroleum</a>
									</li>
									<li>
										<a href='/petroleum/supply/weekly/'>Weekly Petroleum Status Report</a>
									</li>
								</ul>
							</div>
							<div class="nav-menu natural-gas">
								<i class="ico ico-nav natural-gas"></i>
								<h3>
									<a href='/naturalgas/'>Natural Gas</a>
								</h3>
								<p>Exploration and reserves, storage, imports and exports, production, prices, sales.</p>
								<ul>
									<li>
										<a href='http://ir.eia.gov/ngs/ngs.html'>Weekly Natural Gas Status Report</a>
									</li>
									<li>
										<a href='/naturalgas/weekly/'>Natural Gas Weekly Update</a>
									</li>
								</ul>
							</div>
							<div class="nav-menu electricity">
								<i class="ico ico-nav electricity"></i>
								<h3>
									<a href="electricity/">Electricity</a>
								</h3>
								<p>Sales, revenue and prices, power plants, fuel use, stocks, generation, trade, demand &amp; emissions.
								</p>
								<ul>
									<li>
										<a href='/electricity/monthly/'>Electric Power Monthly</a>
									</li>
									<li>
										<a href='/electricity/data/browser/'>Electricity Data Browser</a>
									</li>
								</ul>
							</div>
							<div class="nav-menu consumption">
								<i class="ico ico-nav consumption"></i>
								<h3>
									<a href="consumption/">Consumption &amp; Efficiency</a>
								</h3>
								<p>Energy use in homes, commercial buildings, manufacturing, and transportation.</p>
								<ul>
									<li>
										<a href='/consumption/data.php#rec'>RECS 2009</a>
									</li>
									<li>
										<a href='/consumption/data.php#cec'>CBECS</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="sources-uses right">
							<div class="nav-menu coal">
								<i class="ico ico-nav coal"></i>
								<h3>
									<a href="coal">Coal</a>
								</h3>
								<p>Reserves, production, prices, employment and productivity, distribution, stocks, imports and exports.</p>
								<ul>
									<li>
										<a href='/coal/production/quarterly/'>Quarterly Coal Report</a>
									</li>
									<li>
										<a href='/beta/coal/data/browser/'>Coal Data Browser</a>
									</li>
								</ul>
							</div>
							<div class="nav-menu renewable">
								<i class="ico ico-nav renewable"></i>
								<h3>
									<a href="/renewable/">Renewable &amp; Alternative Fuels</a>
								</h3>
								<p>Includes hydropower, solar, wind, geothermal, biomass and ethanol.</p>
								<ul>
									<li>
										<a href='/renewable/afv/'>Alternative Fuel Vehicle Browser</a>
									</li>
								</ul>
							</div>
							<div class="nav-menu nuclear">
								<i class="ico ico-nav nuclear"></i>
								<h3>
									<a href="/nuclear/">Nuclear &amp; Uranium</a>
								</h3>
								<p>Uranium fuel, nuclear reactors, generation, spent fuel.</p>
								<ul>
									<li>
										<a href='/nuclear/outages/'>Status of Nuclear Outages</a>
									</li>
								</ul>
							</div>
							<div class="nav-menu total-energy">
								<i class="ico ico-nav total-energy"></i>
								<h3>
									<a href="/totalenergy/">Total Energy</a>
								</h3>
								<p>Comprehensive data summaries, comparisons, analysis, and projections integrated across all energy sources.</p>
								<ul>
									<li>
										<a href='/totalenergy/data/monthly/'>Monthly Energy Review</a>
									</li>
									<li>
										<a href='/totalenergy/data/annual/i'>Annual Energy Review</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<!--Topics-->
					<div id="topics">
						<div class="topics left">
							<div class="nav-menu analysis">
								<i class="ico ico-nav analysis-projections"></i>
								<h3>
									<a href="/analysis/">Analysis &amp; Projections</a>
								</h3>
								<p>Monthly and yearly energy forecasts, analysis of energy topics, financial analysis, Congressional reports.
								</p>
								<ul>
									<li>
										<a href='/outlooks/steo/'>Short Term Energy Outlook</a>
									</li>
									<li>
										<a href='/analysis/reports.php/#T186,T128'>Annual Energy Outlook</a>
									</li>
									<li>
										<a href='/analysis/reports.php/#T186,T132'>International Energy Outlook</a>
									</li>
								</ul>
							</div>
							<div class="nav-menu markets-finance">
								<i class="ico ico-nav markets-finance"></i>
								<h3>
									<a href="/finance/">Markets &amp; Finance</a>
								</h3>
								<p>Financial market analysis and financial data for major energy companies.</p>
								<ul>
									<li>
										<a href='/finance/data.php#mpurc'>Market Prices and Uncertainty Report</a>
									</li>
									<li>
										<a href='/'>Energy &amp; Financial Markets: What Drives Crude Oil Prices?</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="topics right">
							<div class="nav-menu environment">
								<i class="ico ico-nav environment"></i>
								<h3>
									<a href="environment/">Environment</a>
								</h3>
								<p>Greenhouse gas data, voluntary report-ing, electric power plant emissions.</p>
								<ul>
									<li>
										<a href='/'>Energy-Related Carbon Dioxide Emissions at the State Level, 2000-2013</a>
									</li>
									<li>
										<a href='/environment/emissions/state/'>State Carbon Dioxide Emissions</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<!--Geography-->
					<div id="geography">
						<div class="geography left">
							<div class="nav-menu states">
								<i class="ico ico-nav states"></i>
								<h3>
									<a href="state/">U.S. States</a>
								</h3>
								<p>State energy information, including overviews, rankings, data, and analyses.</p>
								<ul>
									<li>
										<a href='/state/seds/'>State Energy Data System (SEDS)</a>
									</li>
								</ul>
							</div>
							<div class="nav-menu maps">
								<i class="ico ico-nav maps"></i>
								<h3>
									<a href="maps/">Maps</a>
								</h3>
								<p>Maps by energy source and topic, includes forecast maps.</p>
								<ul>
									<li>
										<a href='/state/maps.php'>U.S. Energy Mapping System</a>
									</li>
									<li>
										<a href='/'>Gulf of Mexico</a>
									</li>
									<li>
										<a href='/special/disruptions/'>Energy Disruptions</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="geography right">
							<div class="nav-menu international">
								<i class="ico ico-nav international"></i>
								<h3>
									<a href="beta/international/">International</a>
								</h3>
								<p>International energy information, including overviews, rankings, data, and analyses.</p>
								<ul>
									<li>
										<a href='/beta/international/data/browser/'>International Energy Statistics</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<!--Tools-->
					<div id="tools">
						<div class="tools left">
							<div class="nav-menu eia-glossary" style="width: 100%">
								<i class="ico ico-nav eia-glossary"></i>
								<h3>
									<a href="tools/glossary/">Glossary</a>
								</h3>
								<?php include('global/includes/css_rehab_eia-header-glossary.inc'); ?>
							</div>
							<div class="nav-menu data-tools-model">
								<i class="ico ico-nav data-tools-model"></i>
								<h3>
									<a href="tools/models/">Data Tools &amp; Models</a>
								</h3>
								<p>Tools to customize searches, view specific data sets, study detailed documentation, and access time-series data.</p>
							</div>
							<div class="nav-menu open-data">
								<i class="ico ico-nav open-data"></i>
								<h3>
									<a href="beta/api/">Open Data</a>
								</h3>
								<p>EIA's free and open data available as API, Excel add-in, bulk files, and widgets</p>
							</div>
							<div class="nav-menu beta">
								<i class="ico ico-nav beta"></i>
								<h3>
									<a href="beta">EIA Beta</a>
								</h3>
								<p>Come test out some of the products still in development and let us know what you think!</p>
							</div>
							<div class="nav-menu follow-us">
								<i class="ico ico-nav follow-us"></i>
								<h3>Follow us. . .</h3>
								<p>
									<a href="http://facebook.com/eiagov/" target="_blank">
										<i class="ico ico-menu facebook"></i>
									</a>
									<a href="http://twitter.com/eiagov/" target="_blank">
										<i class="ico ico-menu twitter"></i>
									</a>
									<a href="http://youtube.com/eiagov/" target="_blank">
										<i class="ico ico-menu youtube"></i>
									</a>
									<a href="https://www.flickr.com/photos/eiagov/">
										<i class="ico ico-menu flickr"></i>
									</a>
									<a href="https://www.linkedin.com/company/u-s-energy-information-administration">
										<i class="ico ico-menu linkedin"></i>
									</a>
								</p>
							</div>
						</div>
						<div class="tools right">
							<div class="nav-menu reports" style="width: 100%">
								<i class="ico ico-nav reports"></i>
								<h3>
									<a href="reports/">All Reports &amp; Publications</a>
								</h3>
								<script type="text/javascript">
									function byId(id) { return document.getElementById(id) }
									// useful for HtmlCollection, NodeList, String types
									function forEach(array, callback, scope) { for (var i = 0, n = array.length; i < n; i++)callback.call(scope, array[i], i, array); } // passes back stuff we need
									window.addEventListener('load', onDocLoaded, false);
									function onDocLoaded(evt) {
										byId('goBtn').addEventListener('click', onGoBtnClicked);
									}
									function onGoBtnClicked(evt) {
										// get the user input
										var inputString = byId('userInput').value;
										// split it into an array of terms, based on the | char
										var searchTerms = inputString.split('+');
										// init the result
										var result = '';
										// for each element in the array of search terms, call the function to trim wrap with "" and encode
										forEach(searchTerms, addCurTermToResult);
										// update the output display
										window.location.href = '/reports/#/' + result;
										function addCurTermToResult(curTerm, index) {
											if (index != 0)                     // put a comma before all terms except the first one
												result += ',';
											var trimmedTerm = curTerm.trim();   // remove leading/trailing spaces
											result += 'K' + encodeURI(trimmedTerm);    // wrap with "" then URI encode it, suitable for use as a URL
										}
									}
								</script>
								<div class="reports-publication-search form-wrapper">
									<textarea type="text" class="fancy-search-box" id="userInput" placeholder="Enter tags. Tags should be seperated with the + character"
									 onfocus="this.placeholder=''" onblur="this.placeholder='Enter tags. Tags should be seperated with the + character'">
									</textarea>
									<button type="submit" id="goBtn" class="search-submit">
										<i class="ico search-submit">Search</i>
									</button>
								</div>
							</div>
							<div class="nav-menu survey-forms" style="width: 100%">
								<i class="ico ico-nav survey-forms"></i>
								<h3>
									<a href="survey/">EIA Survey Forms</a>
								</h3>
								<?php include('global/includes/css_rehab_eia-header-survey-search.inc'); ?>
							</div>
							<div class="nav-menu email-complex">
								<i class="ico ico-nav email-complex"></i>
								<h3>
									<a href="tools/emailupdates/">Email Updates</a>
								</h3>
								<p>Sign up for email subcriptions to receive messages about specific EIA products</p>
							</div>
							<div class="nav-menu rss-complex">
								<i class="ico ico-nav rss-complex"></i>
								<h3>
									<a href="tools/rssfeeds/">RSS Feeds</a>
								</h3>
								<p>Subscribe to feeds for updates on EIA products including Today in Energy and What's New.</p>
							</div>
						</div>
					</div>
					<!--Learn-->
					<div id="learn">
						<div class="learn left">
							<div class="nav-menu today-in-energy">
								<i class="ico ico-nav today-in-energy"></i>
								<h3>
									<a href="todayinenergy/">Today in Energy</a>
								</h3>
								<p>Short, timely articles with graphics on energy, facts, issues, and trends.</p>
							</div>
							<div class="nav-menu energy-explained">
								<i class="ico ico-nav energy-explained"></i>
								<h3>
									<a href="energyexplained/">Energy Explained</a>
								</h3>
								<ul class="energy-explained-list left">
									<li>
										<a href="energyexplained/index.cfm?page=about_home">What is Energy?</a>
									</li>
									<li>
										<a href="energyexplained/index.cfm?page=about_energy_units">Units &amp; Calculators</a>
									</li>
									<li>
										<a href="energyexplained/index.cfm?page=us_energy_use">Use of Energy</a>
									</li>
									<li>
										<a href="energyexplained/index.cfm?page=environment_home">Energy &amp; Environment</a>
									</li>
									<li>
										<a href="energyexplained/index.cfm?page=oil_home">Petroleum</a>
									</li>
									<li>
										<a href="energyexplained/index.cfm?page=natural_gas_home">Natural Gas</a>
									</li>
									<li>
										<a href="energyexplained/index.cfm?page=coal_home">Coal</a>
									</li>
									<li>
										<a href="energyexplained/index.cfm?page=nuclear_home">Nuclear</a>
									</li>
								</ul>
								<ul class="energy-explained-list right">
									<li>
										<a href="energyexplained/index.cfm?page=electricity_home">Electricity</a>
									</li>
									<li>
										<a href="energyexplained/index.cfm?page=hydropower_home">Hydropower</a>
									</li>
									<li>
										<a href="energyexplained/index.cfm?page=biofuel_home">Biofuels: Ethanol &amp; Biodiesel</a>
									</li>
									<li>
										<a href="energyexplained/index.cfm?page=wind_home">Wind</a>
									</li>
									<li>
										<a href="energyexplained/index.cfm?page=geothermal_home">Geothermal</a>
									</li>
									<li>
										<a href="energyexplained/index.cfm?page=solar_home">Solar</a>
									</li>
								</ul>
							</div>

							<div class="nav-menu teachers">
								<i class="ico ico-nav teachers"></i>
								<h3>
									<a href="kids/energy.cfm?page=6">For Teachers</a>
								</h3>
								<p>Lesson plans, science fair experiments, field trips, teacher guide, and career corner.</p>
							</div>

						</div>
						<div class="learn right">
							<div class="nav-menu eia-glossary" style="width: 100%">
								<i class="ico ico-nav eia-glossary"></i>
								<h3>
									<a href="tools/glossary/">Glossary</a>
								</h3>
								<?php include('global/includes/css_rehab_eia-header-glossary.inc'); ?>
							</div>
							<div class="nav-menu faq">
								<i class="ico ico-nav faq"></i>
								<h3>
									<a href="tools/faqs/">FAQs</a>
								</h3>
								<ul class="faq-list left">
									<li>
										<a href="tools/faqs/#coal">Coal</a>
									</li>
									<li>
										<a href="tools/faqs/#conversion equivalents">Conversion &amp; Equivalents</a>
									</li>
									<li>
										<a href="tools/faqs/#crudeoil">Crude Oil</a>
									</li>
									<li>
										<a href="tools/faqs/#diesel">Diesel</a>
									</li>
									<li>
										<a href="tools/faqs/#electricity">Electricity</a>
									</li>
									<li>
										<a href="tools/faqs/#environment">Environment</a>
									</li>
								</ul>
								<ul class="faq-list right">
									<li>
										<a href="tools/faqs/index.cfm#gasoline">Gasoline</a>
									</li>
									<li>
										<a href="tools/faqs/index.cfm#generalenergy">General Energy</a>
									</li>
									<li>
										<a href="tools/faqs/index.cfm#naturalgas">Natural Gas</a>
									</li>
									<li>
										<a href="tools/faqs/index.cfm#nuclear">Nuclear</a>
									</li>
									<li>
										<a href="tools/faqs/index.cfm#prices">Prices</a>
									</li>
									<li>
										<a href="tools/faqs/index.cfm#renewables">Renewables</a>
									</li>
								</ul>
							</div>
							<div class="nav-menu energy-kids">
								<a href="kids/" class="energy-kids"></a>
							</div>
						</div>
					</div>
					<!--News-->
					<div id="news">
						<div class="news left">
							<div class="nav-menu featured-reports">
								<i class="ico ico-nav featured-reports"></i>
								<h3>
									<a href='/'>Featured Reports</a>
								</h3>
								<p>Reports requested by congress or otherwise deemed important.</p>
								<ul>
									<li>
										<a href='/'>Important Report #1</a>
									</li>
									<li>
										<a href='/'>Important Report #2</a>
									</li>
									<li>
										<a href='/'>Important Report #3</a>
									</li>
									<li>
										<a href='/'>Important Report #4</a>
									</li>
								</ul>
							</div>
							<div class="nav-menu press-room">
								<i class="ico ico-nav press-room"></i>
								<h3>
									<a href="pressroom/">Press Room</a>
								</h3>
								<ul>
									<li>
										<a href="pressroom/releases.cfm">Press Releases</a>
									</li>
									<li>
										<a href="pressroom/testimony.cfm">Congressional Testimony</a>
									</li>
									<li>
										<a href="pressroom/presentations.cfm">Presentations</a>
									</li>
									<li>
										<a href="pressroom/events.cfm">Events</a>
									</li>
									<li>
										<a href="radio/">Radio Spots</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="news right">
							<div class="nav-menu whats-new">
								<i class="ico ico-nav whats-new"></i>
								<h3>
									<a href="/about/new/">What's New?</a>
								</h3>
								<?php include('global/includes/css_rehab_eia-header-whats-new.inc'); ?>
							</div>
							<div class="nav-menu upcoming">
								<i class="ico ico-nav upcoming"></i>
								<h3>
									<a href='/'>Coming Up</a>
								</h3>
								<ul>
									<li>
										<a href='/'>Annual Coal Distribution Report</a>
									</li>
									<li>
										<a href='/'>International Energy Outlook</a>
									</li>
									<li>
										<a href='/'>Annual Coal Report</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="nav-menu az-index">
						<i class="ico ico-nav az-index"></i>
						<h3>
							<a href="tools/a-z/">A-Z Index</a>
						</h3>
						<div class="az-list">
							<a href="tools/a-z/index.cfm?id=a">A</a> |
							<a href="tools/a-z/index.cfm?id=b">B</a> |
							<a href="tools/a-z/index.cfm?id=c">C</a> |
							<a href="tools/a-z/index.cfm?id=d">D</a> |
							<a href="tools/a-z/index.cfm?id=e">E</a> |
							<a href="tools/a-z/index.cfm?id=f">F</a> |
							<a href="tools/a-z/index.cfm?id=g">G</a> |
							<a href="tools/a-z/index.cfm?id=h">H</a> |
							<a href="tools/a-z/index.cfm?id=i">I</a> |
							<a href="tools/a-z/index.cfm?id=j">J</a> |
							<a href="tools/a-z/index.cfm?id=k">K</a> |
							<a href="tools/a-z/index.cfm?id=l">L</a> |
							<a href="tools/a-z/index.cfm?id=m">M</a> |
							<a href="tools/a-z/index.cfm?id=n">N</a> |
							<a href="tools/a-z/index.cfm?id=o">O</a> |
							<a href="tools/a-z/index.cfm?id=p">P</a> |
							<a href="tools/a-z/index.cfm?id=q">Q</a> |
							<a href="tools/a-z/index.cfm?id=r">R</a> |
							<a href="tools/a-z/index.cfm?id=s">S</a> |
							<a href="tools/a-z/index.cfm?id=t">T</a> |
							<a href="tools/a-z/index.cfm?id=u">U</a> |
							<a href="tools/a-z/index.cfm?id=v">V</a> |
							<a href="tools/a-z/index.cfm?id=w">W</a> |
							<a href="tools/a-z/index.cfm?id=xyz">XYZ</a>
						</div>
					</div>
				</div>
			</div>
			<div class="nav-search search-panel form-wrapper">
				<div class="search">
					<form accept-charset="UTF-8" action="//search.usa.gov/search" id="search_form" method="get">
						<input name="utf8" type="hidden" value="&#x2713;" />
						<input id="affiliate" name="affiliate" type="hidden" value="eia.doe.gov" />
						<label class="accessibility" for="query">Enter Search Term(s):</label>
						<i class="ico search"></i>
						<input autocomplete="off" class="usagov-search-autocomplete search-box" name="query" type="text" maxlength="256"
						 placeholder="Search eia.gov" onfocus="this.placeholder=''" onblur="this.placeholder='Search eia.gov'"/>
						<button type="submit" name="search" id="goBtn" class="search-submit">
							<i class="ico search-submit">Search</i>
						</button> 
					</form>
					<script type="text/javascript">
						//<![CDATA[
						var usasearch_config = { siteHandle: "eia.doe.gov" };
						var script = document.createElement("script");
						script.type = "text/javascript";
						script.src = "/global/scripts/search.usa.gov/remote.loader.js"; // NOTE this may need to be updated from //search.usa.gov/javascripts/remote.loader.js" periodically
						document.getElementsByTagName("head")[0].appendChild(script);
                        //]]>
					</script>
				</div>
			</div>
		</nav>
	</header>
	<section>
		<div class="l-outer-wrapper" id="outerX">
			<div class="l-inner-wrapper" id="innerX">