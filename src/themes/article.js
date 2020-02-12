﻿import React, { Component } from "react";

class ThemesArticle extends Component {
	render() {
		return (<ul class="style-guide">
			<li class="section-container">
				<h1 class="_h1">Article Page Layout</h1>
				<h3 class="_h3">Article</h3>
				<p class="_p">
					To create an article page, simply add the following: <code>$locale = 'article';</code>, to the PHP page definitions on the page. Then use <a href="../layouts/index.html">page layouts</a>, <a href="../modules/page-headers.html">page headers</a>, headers, paragraphs, and lists as normal.
                                        </p>
				<h5 class="_h5">Article Example</h5>

				<div class="_example">
					<pre><code class="html">&lt;!-- Article Example --&gt;
&lt;!doctype html&gt;
&lt;?php
$globalTitle = 'U.S. Energy Information Administration (EIA)';
$pageTitle = '';
$locale = 'article';
?&gt;
&lt;html&gt;
&lt;head&gt;
&lt;?php include('global/head/includes/head.inc'); ?&gt;
&lt;title&gt;&lt;?=$pageTitle?&gt; - &lt;?=$globalTitle?&gt;&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;?php include('global/header/includes/header.inc'); ?&gt;
&lt;div class="l-row l-full-width-col"&gt;
&lt;div class="l-col"&gt;
&lt;div class="article"&gt;
&lt;h1&gt;&lt;?=$pageTitle?&gt;&lt;/h1&gt;

&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;?php include('global/footer/includes/footer.inc'); ?&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
				</div>
			</li>
			<li class="section-container">
				<h3 class="_h3">Article Example</h3>
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-full-width-col">
							<div class="l-col">
								<div class="article">
									<span class="_module-bg">
										<h1>Explanatory notes, sources, and related links: EIA New England Dashboard</h1>
										<p class="release">Last updated: January 2019 | <a href="pdf/notes_sources.pdf" target="_blank"><span class="ico pdf"><span>PDF</span></span></a></p>
										<h2>New England Energy Dashboard Background&mdash;Description of Sections</h2>
										<p>In January 2019, the U.S. Energy Information Administration (EIA)
											introduced the interactive, daily New England Energy Dashboard
											(NED) showing energy market conditions in New England to help
											users examine many key aspects of the New England energy market.
                                                                These key aspects include</p>
										<ul>
											<li>Fuel diversification</li>
											<li>Wholesale price volatility</li>
											<li>Energy delivery dynamics</li>
											<li>Weather&rsquo;s effect on operations</li>
											<li>Electricity prices&rsquo; effect on fuel prices</li>
											<li>Regional and on-site fuel stocks</li>
										</ul>
										<p>NED integrates our view of the energy commodities&mdash;natural gas,
											electricity, and petroleum products&mdash;and factors that can
											influence energy consumption, prices, flows, and energy security
											in New England. The dashboard includes detailed regional information
											on
                                                            </p>
										<ul>
											<li>Temperatures</li>
											<li>Various fuel prices</li>
											<li>Locational marginal prices</li>
											<li>Electric grid status, outages, and available capacity</li>
											<li>Current and projected load</li>
											<li>Liquefied natural gas (LNG) imports</li>
											<li>Electricity generation fuel mix</li>
											<li>Interregional electricity transmission and natural gas flows</li>
											<li>Petroleum product stocks </li>
										</ul>
										<p>Energy delivery infrastructure constraints and outages can have a
											pronounced influence on New England&rsquo;s wholesale energy
											prices, energy flows, and operations. As a result, NED illustrates
											these constraints, including
                                                            </p>
										<ul>
											<li>Nuclear generating capacity availability</li>
											<li>Real-time locational marginal prices by Independent Service Operator
                                                                    New England (ISO-NE) zone and electric interface</li>
											<li>Electricity generation outages and reductions</li>
											<li>A map indicating natural gas pipeline capacity use at key flow
												points
                                                                </li>
										</ul>
										<p>Energy systems in a country as large as the United States must be
											managed regionally because of varying resources, delivery infrastructure,
											and consumption patterns. Extensive discussion of electricity
                                                                reliability as a result of the <em>bomb cyclone</em> event in
		New England during the winter of 2017&ndash;18 within the U.S.
		Department of Energy, and notably at the EIA Energy Conference,
		underscored the interest in and need for a regional energy dashboard.
		NED responds to growing concern about U.S. electricity resilience
                                                                energy management in the winter in New England.</p>
										<p>NED condenses significant timely, contextual information on energy
                                                                use in New England into a dense, web-based product that includes</p>
										<ul>
											<li>An overview</li>
											<li>Views on key elements of the overall energy system including
                                                                    electricity, natural gas, and petroleum </li>
											<li>EIA staff commentary </li>
										</ul>
										<p>NED draws on information that EIA collected and produced or gathered
											automatically from others to provide a picture of energy supply
											and use in New England that is as close to real-time as data
											sources will allow. To support this goal, NED is updated every
											day no later than 10:30 a.m. Eastern Standard Time. However,
                                                                some sources of information are updated every five minutes.</p>
										<p>This document provides a guide to the sections of NED, including
											their purpose, the data included, and recommendations for interpretation
											and use. It also includes a detailed list of data sources used
                                                                to produce NED.</p>
										<p>If you have questions about NED or suggestions for future changes,
                                                                contact EIA staff at <a href="mailto:newenglanddashboard@eia.gov">newenglanddashboard@eia.gov</a>.</p>
										<p>The NED explanatory notes, sources, and related links documentation
                                                                is organized into three sections:</p>
										<ul>
											<li>A description of the overview, electricity, natural gas, and
                                                                    petroleum sections of the documentation</li>
											<li>A summary of the sources of information used for NED</li>
											<li>A list of the related links providing additional sources of information
                                                                    about New England market issues and fundamental drivers</li>
										</ul>
										<h2>Overview Section</h2>
										<p>The NED Overview section summarizes many indicators and types of
                                                                visualizations related to New England</p>
										<ul>
											<li>Electric generating capacity availability</li>
											<li>Natural gas flows</li>
											<li>Interchange</li>
											<li>Outages/reductions</li>
											<li>Projected and actual loads</li>
											<li>Commodity prices</li>
											<li>Temperature measurements</li>
											<li>Real-time fuel mix data</li>
											<li>Basis/spark spreads</li>
											<li>Nuclear availability</li>
										</ul>
										<h3>Key Overview page indicators include:</h3>
										<h4>Today&rsquo;s capacity</h4>
										<p>This indicator shows the generating capacity that ISO-NE expects
											to be available for the current operating day, expressed in megawatts.
											We update this section once a day using an Application Programming
                                                                Interface (API) call to the ISO-NE <em>Morning Report</em>. The
                                                                <em><a href="https://www.iso-ne.com/markets-operations/system-forecast-status/morning-report">Morning Report</a></em> provides ISO-NE&rsquo;s preliminary summary of the expected capacity
		available to reliably meet the peak-hour electricity demand and
		reserve requirements to operate the New England power systems
                                                                . </p>
										<h4>Current grid status</h4>
										<p>ISO-NE informs stakeholders about conditions of the New England regional
											power system by updating the grid status in real-time. EIA accesses
											the current grid status with an API call to ISO-NE data. Under
                                                                typical conditions, ISO-NE reports the grid status as <em>Normal</em>,
		meaning the electricity supply is sufficient to meet expected
		demand plus required operating reserves. However, ISO-NE has
                                                                many other <a href="https://www.iso-ne.com/markets-operations/system-forecast-status/current-system-status/alert-descriptions">codes</a> explaining the status of the power system condition, including
                                                                varying circumstances when the status is not normal. </p>
										<h4>Today&rsquo;s forecasted peak demand</h4>
										<p>This indicator reports on the expected peak electric demand for the
											current operating day and the hour of the day that demand will
                                                                occur. These values come from data reported to EIA-930.</p>
										<h4>Current demand</h4>
										<p>This indicator reflects the most current hourly electricity demand
											data for the New England balancing authority that is reported
											to the EIA-930. This data is updated hourly and is typically
											about two hours behind the actual time. The current demand indicator
											will change every hour; as the day progresses, NED users can
											see how current demand compares with the forecasted peak demand
											and available capacity for that day.
                                                            </p>
										<h4>Yesterday&rsquo;s peak demand</h4>
										<p>This indicator reports yesterday&rsquo;s peak electric demand and
											the hour that yesterday&rsquo;s peak demand took place. These
											values come from data reported to theEIA-930. This number provides
                                                                a comparison with the current operating day demand. </p>
										<h4>Historic peak demand</h4>
										<p>
											This indicator shows the historic record demand in ISO-NE for each season. NED automatically changes the peak demand depending
											on whether it is summer or winter. The summer period is assumed to
											be from April 1 through October 31. By contrast, the winter period
											runs from November 1 through March 31. If a new historic record is
											set, NED will automatically transition to a new record indicator,
                                                                depending on the season.</p>

										<h4>Generation outages/reductions</h4>
										<p>Each day ISO-NE reports generator-related outages or reductions affecting
											the New England power grid. ISO-NE posts a new estimate of these
											outages each day. EIA obtains that information from the ISO-NE
                                                                <em>Morning Report</em>. Generation outages/reductions are reported
		in megawatts. ISO-NE does not account for transmission line outages.
                                                            </p>
										<h4>Regional nuclear utilization</h4>
										<p>This indicator shows the regional average availability of nuclear
											generating units in New England. EIA calculates the average by
											adding the megawatts of the available units on a given day and
											dividing that value by total summer or winter generating capacity
											for those units, depending on the season. Summer-weighting applies
											to April through October, and winter-weighting applies to November
											through March. EIA acquires the information each morning from
											the Nuclear Regulatory Commission (NRC). Three nuclear power
											plants were operating in New England as of January 2019: Pilgrim,
											Seabrook, and Yankee. Pilgrim is set to retire during the summer
											of 2019. After it retires, EIA will adjust the nuclear-availability
											calculation to account for this change. Planned nuclear plant
											outages are highly seasonal and cyclical. Nuclear plant operators
											routinely take plants down for maintenance in the spring and
											fall (called shoulder periods) when electric loads tend to be
											lower. Further, most nuclear generating plants require fuel recycling
                                                                every 18â€“24 months, which can affect the <a href="/todayinenergy/detail.php?id=37252">availability of nuclear generation</a>.
		The unavailability of nuclear generating units can influence
		locational marginal prices. When nuclear units cannot be dispatched,
		ISO-NE may dispatch units that require more expensive energy
		sources, especially in the winter, which can raise locational
                                                                marginal prices. </p>
										<h4>Today&rsquo;s peak hour interchange</h4>
										<p>In the <em>Morning Report</em>, ISO-NE reports each day on the expected
											level of net electric interchange that will occur during the
											5:00 p.m. hour. This level provides an indicator of how much
											electricity interchange is likely to occur between the ISO-NE
											balancing authority and the NYSIO, Hydro-Quebec, and New Brunswick
											balancing authorities. The values are expressed in megawatts.
											Negative values represent imports, and positive values represent
											exports.
                                                            </p>
										<h4>Net natural gas inflows</h4>
										<p>This indicator shows the estimated level of total daily net natural
											gas inflows into New England for the current operating day. The
											flows account for the total amount of natural gas imported into
											and exported out of New England each day. Because New England
											is not a natural gas-producing region, it relies on natural gas
											deliveries from other North American supply areas. This indicator
											does not include natural gas imports from these liquefied natural
											gas (LNG) regasification facilities: the Everett LNG Facility
											and the Northeast Gateway Deepwater Port. Operations at a third
                                                                facility, the Neptune LNG Deepwater Port, are currently suspended.</p>
										<h4>Algonquin Citygate basis to the Henry Hub</h4>
										<p>This indicator measures the daily natural gas spot price spread between
											the Algonquin Citygate (Boston) price and the Henry Hub price&mdash;the
											nation&rsquo;s primary benchmark location for natural gas price
											formation. The difference in prices between these two trading
											hubs can vary significantly depending on several factors, including:
											seasonality or the time of year, the availability of natural
											gas pipeline capacity in New England, and the disposition of
											storms in the Gulf Coast. High basis at the Algonquin Citygate
											can be a key indicator of weather or outage-related pipeline
											constraints, which in turn, can affect fuel selection for power
                                                                generation, electric reliability, and LNG needs <br /> This high
		basis can require electricity imports and use of natural gas
                                                                peak-shaving(electricity demand response).</p>
										<h4>Spark spread</h4>
										<p>This indicator is a proxy measure for the relative profitability
											or gross margin associated with operating a natural gas combined-cycle
											plant in New England with a standard 7,000 British thermal unit
											heat rate per kilowatthour. To find the heat rate, EIA multiplies
											the spot price of natural gas at the Algonquin Citygate times
											7 and subtracts that value by the spot price of power at Nepool-MA.
											EIA has made no other adjustments for fixed or variable operations
											and maintenance costs or for emissions costs. The difference
											between the on-peak price of power and the heat rate-adjusted
											spot natural gas price is the spark spread. Higher spark spread
											values represent potentially greater profits from generating
											electricity from natural gas combined-cycle plants given the
											market-clearing price of wholesale power and the price of wholesale
											natural gas expressed in dollars per megawatthour. EIA publishes
                                                                spark spreads on its website on trade days on its <em><a href="/todayinenergy/prices.php">Today in Energy price page</a></em>.
		EIA derives the spark spread for New England based on information
                                                                from S&amp;P Global Market Intelligence.</p>
										<h4>Daily spot prices and weekly and annual price ranges&mdash;by fuel</h4>
										<p>These three visualizations show the price of energy commodities in
											the Northeast region for natural gas, electricity, heating oil,
											and crude oil more broadly. These prices reflect current spot
											prices, the range of prices during the past week, and the range
											of prices for the past year&mdash;or for the most recent 365
											days. These visualizations show the relationships between energy
											commodity prices in New England during similar periods. The charts
											also show how current prices compare with prices during the past
                                                                week and prices during the past year.</p>

										<p>Spot prices are shown for</p>
										<ul>
											<li>Natural gas: Daily spot prices for natural gas at the Algonquin
												Citygate (Boston), Transco Zone 6 NY (New York City), and
												TETCO M3 (Texas Eastern's M3 market zone) reflecting prices
												in Eastern PA, New Jersey, and New York City. Prices are
                                                                    shown in dollars per million British thermal units.</li>
											<li>On-peak electricity: Daily spot bilateral prices for on-peak
												electricity at the Nepool-MA (Central Massachusetts), PJM
												West hub (Mid-Atlantic), and New York Independent System
												Operator Zone J (Manhattan). Prices are shown in dollars
                                                                    per megawatthours. Prices cover only weekday peak hours.</li>
											<li>Crude oil and heating oil: Daily spot prices for crude oil and
												petroleum products with weekly and annual ranges that are
												updated each day. Crude oil prices are shown in dollars per
												barrel, and product prices are shown in dollars per gallon.
                                                                </li>
										</ul>
										<p>The source of information for the natural gas and electricity prices
											is S&amp;P Global Market Intelligences. The oil-related prices
                                                                source is Refinitiv, formerly known as Thomson Reuters.</p>
										<h4>Real-time net generation by energy source</h4>
										<p>This visualization is based on an API call to ISO-NE&rsquo;s real-time
											fuel mix information. It shows net generation by energy source
											for the New England system in megawatthours for the most current
											reporting interval. The energy source definitions used in this
											chart are slightly different from those provided by ISO-NE. The
											reported value in the center of the
                                                                <em>donut</em> chart reflects total generation across all fuel
		sources for the most recent interval. The timing of the interval
		updates can vary. ISO-NE&rsquo;s power grid depends on natural
		gas to meet regional electricity needs. However, when natural
		prices spike as a result of various constraints, the relative
		share of natural gas in the dispatch fuel mix can fall in relative
		terms because of the unavailability or price of natural gas compared
		with other energy sources. The source of information for the
                                                                real-time dispatch fuel mix data is ISO-NE.</p>
										<h4>Daily average departure from previous day&rsquo;s temperature by
                                                                New England climate division</h4>
										<p>This heat map shows the average change in temperature in degrees
											Fahrenheit between yesterday and today. The geographic regions
											are National Oceanic and Atmospheric Administration (NOAA) climate
											divisions in New England. This heat map is derived from NOAA
                                                                temperature data.</p>
										<h4>Daily average departure from 30-year normal temperature by New England
											climate division
                                                            </h4>
										<p>This heat map represents the difference between average temperatures
											today in New England by climate divisions compared with the average
											(30-year) normal temperatures by New England climate divisions.
											This map shows how current weather differs from long-term norms;
											significant departures from normal weather can affect energy
											loads, prices, outages, flows, constraints, and required fuels.
											This map is derived from NOAA temperature data.
                                                            </p>
										<h4>Daily average temperature by New England climate division</h4>
										<p>This heat map represents average daily temperatures by New England
											climate divisions. The map shows absolute temperatures in degrees
											Fahrenheit. The gradient blue colors signify relatively cooler
											temperatures and the gradient tan colors signify relatively warmer
                                                                temperatures. This map is derived from NOAA temperature data.</p>
										<h4>Animation of average temperatures by New England climate division
                                                                during a 10-day period</h4>
										<p>This visualization animates daily temperatures by climate region
											within New England. It shows the most recent five days of history
											and the most recent five forecast days, including the current
											day&rsquo;s temperature. NED users can control the display of
                                                                information by clicking on the <em>play</em> or <em>pause</em> buttons. This map is derived from NOAA temperature data.
                                                            </p>
										<h4>Boston temperatures</h4>
										<p>This bar chart shows the actual or forecasted high and low temperature
											range in Boston each day during a 10-day period&mdash;five days
											of historical actual temperature information and five days of
											forecasted temperature information that includes the current
											day. It also shows the 30-year normal high and low range for
											a given day of the year and the relevant historic record high
											and low for that date. This chart is derived from NOAA temperature
											data.
                                                            </p>
										<h4>Average daily temperatures and departures from normal temperatures
                                                                by New England states</h4>
										<p>The heat table provides the average daily population-weighted temperature
											by state and the departure from the 30-year normal average temperatures
											for each state in New England on a population-weighted basis.
											The value reported in each cell of the table measures the average
											daily temperature by state. The color of each cell indicates
											whether that temperature is warmer (tan gradients) or colder
											(blue gradients) than normal. The values are expressed in degrees
											Fahrenheit. This visualization is derived from NOAA temperature
											data.
                                                            </p>
										<h2>Electricity Section</h2>

										<h4>Current grid status</h4>
										<p>ISO-NE updates the grid status in real time to provide information
											about conditions on the New England regional power system. EIA
											accesses the current grid status with an API call to ISO-NE data.
                                                                Under typical conditions, ISO-NE reports the grid status as <em>Normal</em>,
		meaning the electricity supply is sufficient to meet expected
		demand plus required operating reserves. However, ISO-NE has
                                                                many other <a href="https://www.iso-ne.com/markets-operations/system-forecast-status/current-system-status/alert-descriptions">codes</a> explaining the status of the power system condition, including
                                                                varying circumstances when the condition is not normal.</p>
										<h4>Today&rsquo;s peak load</h4>
										<p>Today&rsquo;s peak load represents the hour when the peak load is
											expected to occur based on data supplied to EIA by the ISO-NE
											Balancing Authority respondent. The hour when the peak load may
											occur can change from day to day, but usually it occurs in the
											early evening. The values for the forecasted peak demand and
                                                                the projected hour comes from data reported to the EIA-930.</p>
										<h4>Available generating capacity in ISONE for current day</h4>
										<p>This indicator shows the generating capacity that ISO-NE expects
											for the current operating day expressed in megawatts. This value
											is updated once a day using an Application Programming Interface
											(API) call to the ISO-NE
                                                                <em>Morning Report</em>. The <em><a href="https://www.iso-ne.com/markets-operations/system-forecast-status/morning-report">Morning Report</a></em> provides ISO-NE&rsquo;s preliminary summary of the expected capacity
		available to meet the peak hour electricity demand and reserve
		requirements to operate the New England power systems reliably.
		ISO-NE&rsquo;s
                                                                <em>Morning Report</em> explains how total available capacity
		is calculated.
                                                            </p>
										<h4>Day-ahead price</h4>
										<p>This indicator shows the locational marginal price at the Internal
											Hub (see New England electricity infrastructure map) determined
											in the ISO-NE day-ahead market for heavy load hours or any average
											of the prices from 7:00 a.m. until11:00 p.m. This price is a
											proxy for the price of electricity in New England. EIA calculates
											this price based on ISO-NE data. This price is available each
                                                                day because it is not an on-peak price.</p>

										<h3>Visualizations</h3>
										<h4>Hourly electricity demand, net generation, and net imports for New
											England
                                                            </h4>
										<p>This chart shows the hourly supply and demand of electricity in New
											England. Electricity supplied each hour includes the electricity
											generated within New England and the total electricity imported
											into the region. If net imports are positive, New England is
											supplementing its generation with electricity imports from other
											balancing authorities for that hour. If net imports are negative,
											New England is exporting more electricity than it is importing
											from other balancing authorities, which reduces the amount supplied
											in New England on a net basis for that hour. Although net imports
											are equivalent to net interchange, for this visualization, they
											are referred to as imports to explain the daily electricity supply
											stack in New England. The chart also shows the actual hourly
											demand and the forecasted demand by hour and by day expressed
											in megawatthours. Users can select different default periods
											for this visualization: two days, two weeks, or one year. The
											hourly data are only reported for the two-day and two-week options.
                                                            </p>
										<p>The main source of this information is the <a href="/electricity/data/guide/pdf/guide.pdf">EIA-930</a> electric system operating data.</p>
										<h4>Hourly net generation by energy source for the New England system</h4>
										<p>This stacked area chart shows the energy source for net generation
											within ISO-NE each hour expressed in megawatthours. The sources
                                                                of net generation include: </p>
										<ul>
											<li>Other</li>
											<li>Solar</li>
											<li>Petroleum products</li>
											<li>Coal</li>
											<li>Wind </li>
											<li>Hydroelectric and pumped storage</li>
											<li>Wind</li>
											<li>Coal </li>
											<li>Nuclear</li>
											<li>Natural gas</li>
										</ul>
										<p>EIA&rsquo;s <em>other</em> category includes energy sources such
											as batteries, geothermal, waste heat, wood, and biomass. EIA&rsquo;s
											energy source definitions are slightly different from those provided
											by ISO-NE. Users can select different default periods for this
											visualization: two days, two weeks, or one year. The hourly data
                                                                are only reported for the two-day and two-week options.</p>
										<p>Users can select or deselect energy sources to include in the area
                                                                chart by clicking on<em> options</em> in the legend. When users
		change fuels to be charted, the cumulative totals automatically
		change.
                                                            </p>
										<p>The source of information for this visualization is the EIA-930 U.S.
                                                                electric system operating data.</p>
										<h4>Hourly locational marginal prices at the ISO New England Hub</h4>
										<p>This chart shows locational marginal prices (LMPs) at the Internal
											Hub in New England for the real-time market and the day-ahead
											market in dollars per megawatthour. In ISO-NE, real-time prices
											reflect the prices determined in the current operating day for
											which ISO-NE dispatches resources to provide electric energy
											and regulation service and, if necessary, commits additional
											resources. Day-ahead market prices reflect the prices determined
											by ISO-NE for each hour of the upcoming day on the calendar day
											preceding the operating day. Users can select different default
											periods for this visualization: two days, two weeks, or one year.
											The hourly data are only reported for the two-day and two-week
											options.
                                                            </p>
										<p>The source of information for this visualization is ISO-NE.</p>
										<h4>Daily peak-hour electricity load in New England</h4>
										<p>This chart shows the total megawatts associated with the peak hour
											or hour of a given day that has the highest actual electric operating
											load for that day, which comes from hourly data reported to the
											EIA-930. The peak could be at in any hour of the day but typically
                                                                represents an early evening hour. </p>
										<p>This chart shows the following for the New England balancing authority:</p>
										<ul>
											<li>The current-year daily peak loads</li>
											<li>The previous-year daily peak loads</li>
											<li>The five-year average of peak loads</li>
											<li>The minimum/maximum range of daily peak loads for the most current
												five-year period
                                                                </li>
										</ul>
										<p>The source of information is the U.S. Energy Information Administration,
                                                                <a href="/electricity/data/guide/pdf/guide.pdf">EIA-930</a> electric
		operating data and ISO-NE data, mostly for the period before
		July 2015.
                                                            </p>
										<h4>Hourly electricity interchange between New England other balancing
											authorities
                                                            </h4>
										<p>This area chart shows the net hourly interchange between the ISO-NE
											balancing authority and the Canadian balancing authorities (Hydro-Quebec
											and New Brunswick) and the New York Independent System Operator
											(NYISO) in megawatthours. Three interfaces between NYISO and
											ISO-NE are reflected in the NYISO total interchange number: Roseton,
											Northport, and Shoreham. ISO-NE is generally a net importer of
											electricity. Users can select different default periods for this
											visualization: two days, two weeks, or one year. The hourly data
                                                                are only reported for the two-day and two-week options. </p>
										<p>The source of information is the U.S. Energy Information Administration,
                                                                <a href="/electricity/data/guide/pdf/guide.pdf">EIA-930</a> electric
		operating data.
                                                            </p>
										<h4>Monthly distillate fuel oil stocks held on-site by New England generators</h4>
										<p>This chart shows aggregate monthly distillate fuel oil stocks held
											by generators in New England states in million barrels. Reporting
											typically lags about two months from the current month. This
											information comes from data reported on the Form EIA-933 survey.
											This information is summed by region and fuel type, but plant
											level information is also available.
                                                            </p>

										<p>This chart shows the following items for the New England balancing
											authority:
                                                            </p>
										<ul>
											<li>The current-year monthly distillate fuel oil stocks held on-site
                                                                    by New England generators</li>
											<li>The previous-year monthly distillate fuel oil stocks held on-site
                                                                    by New England generators</li>
											<li>The five-year average monthly distillate fuel oil stocks held
                                                                    on-site by New England generators</li>
											<li>The minimum/maximum range of monthly distillate fuel oil stocks
												held on-site by New England generators for the most current
												five-year period
                                                                </li>
										</ul>
										<p>The source of information is the U.S. Energy Information Administration
											Form
                                                                <a href="/electricity/data/eia923/">EIA-923</a>. The survey Form
		EIA-923 collects detailed electric power data&mdash;monthly and
		annually&mdash;on electricity generation, fuel consumption, fossil
		fuel stocks, and receipts at the power-plant and prime-mover
		levels.
                                                            </p>
										<h4>Monthly residual fuel oil stocks held on-site by New England generators</h4>
										<p>This chart shows the aggregate residual fuel oil stocks held by generators
											in New England states on a monthly basis in million barrels.
											Reporting typically lags about two months from the current month.
                                                            </p>
										<p>This chart shows the following for the New England balancing authority:</p>
										<ul>
											<li>The current-year monthly residual fuel oil stocks held on-site
                                                                    by New England generators</li>
											<li>The previous-year monthly residual fuel oil stocks held on-site
                                                                    by New England generators</li>
											<li>The five-year average monthly residual fuel oil stocks held on-site
                                                                    by New England generators</li>
											<li>The minimum/maximum range of monthly residual fuel oil stocks
												held on-site by New England generators for the most current
												five-year period
                                                                </li>
										</ul>
										<p>The source of information is the U.S. Energy Information Administration
											Form
                                                                <a href="/electricity/data/eia923/">EIA-923</a>. The survey Form
		EIA-923 collects detailed electric power data&mdash;monthly and
		annually&mdash;on electricity generation, fuel consumption, fossil
		fuel stocks, and receipts at the power-plant and prime-mover
		levels.
                                                            </p>
										<h4>Real-time locational marginal prices by zone and interface in New
											England
                                                            </h4>
										<p>This map shows real-time locational marginal prices and updates every
											five minutes based on an API call to ISO-NE information. Prices
											are shown for the major zonal hubs and for the electricity interfaces
											between ISO-NE and neighboring balancing authorities. Significant
											changes in prices between zones or interfaces or from one reporting
											period to the next period can signal constraints or other operating
                                                                condition changes that may indicate a disruption or emergency.</p>
										<p>The source of information for this map is ISO-NE. The map was created
                                                                by the U.S. Energy Information Administration.</p>
										<h4>New England electricity infrastructure map</h4>
										<p>This map shows the New England regional electricity infrastructure
											including major transmission lines, interfaces with neighboring
											balancing authorities, electric generating plants by type, and
											the Internal Hub power trading point.
                                                            </p>
										<p>The source for this map is the U.S. Energy Information Administration
                                                                <a href="/state/maps.php">U.S. Energy Mapping System</a>. </p>
										<h2>Natural Gas Section<br />
										</h2>

										<h4>Demand</h4>
										<p>This indicator provides an estimate of total daily natural gas consumption
											in New England from the residential/commercial, industrial, and
											electric power sectors. OPIS Point Logic is the source of this
											data. Total daily natural gas consumption is a key element affecting
                                                                energy flows and prices in New England.<br />
										</p>
										<h4>Demand change</h4>
										<p>This indicator reflects the change in natural gas demand from the
											previous day. The New England Energy Dashboard provides estimates
											of natural gas demand and changes in demand every day, including
                                                                weekends. OPIS Point Logic is the source of this data.</p>
										<h4>Regional pipeline utilization</h4>
										<p>This indicator provides a daily estimate of the utilization of the
											New England natural gas grid. The utilization measures the flow
											of natural into New England and compares it with estimated delivery
											capacity. The flow data and regional capacity values are derived
											from OPIS Point Logic regional flow data for two corridors in
											New England: the New York-New Jersey-to-New England corridor
											and the Canada-to-New England corridor. EIA uses this information
											to assess natural gas flows relative to estimated regional delivery
											capacity. Natural gas pipeline constraints can significantly
                                                                affect New England energy prices and energy security.</p>
										<h4>Spot natural gas price (Algonquin Citygate)</h4>
										<p>This indicator shows the most recent spot price of natural gas at
											the Algonquin Citygate (Boston). The Algonquin Citygate price
											is one of the traditional benchmarks of the price of delivering
											natural gas into New England in the wholesale market. High spot
											natural gas prices are a key indicator of market stress in New
											England. S&amp;P Global Market Intelligence is the source of
                                                                information for the Algonquin Citygate price.</p>

										<h3>Visualizations</h3>
										<h4>Daily natural gas consumption by sector in New England</h4>
										<p>This area chart shows the estimated daily natural gas consumption
											for residential/commercial, industrial, and electric power sectors
											in New England in billion cubic feet per day. Analysts can use
											the tabs to create a chart for the past two weeks or the past
											year.
                                                            </p>
										<p>The source of information for this chart is OPIS Point Logic. More
											detailed information is available from the OPIS Point Logic Northeast
											Gas Fundamentals Daily report. Data for this chart cannot be
											downloaded.
                                                            </p>
										<h4>Daily deliveries of liquefied natural gas in New England</h4>
										<p>This line chart provides estimated daily send-out (delivery) of liquefied
											natural gas at the two operational facilities in New England:
											Everett or Northeast Gateway terminals. The estimates include
											third-party assumptions about local LNG transferred from the
                                                                Everett terminal by truck in billion cubic feet per day.</p>
										<p>The source of information for this chart is OPIS Point Logic. More
											detailed information is available from the OPIS Point Logic Northeast
											Gas Fundamentals Daily report. Data for this chart cannot be
											downloaded.

                                                                <br clear="all" />
										</p>
										<h4>Net daily natural gas flows into New England</h4>
										<p>The area chart shows the estimated daily net natural gas flows into
											New England expressed in billion cubic feet per day. This graph
											reflects two major sources of deliveries into New England: net
											flows from Canada (mostly on the Maritimes &amp; Northeast Pipeline
											and the Portland Natural Gas Transmission System) and net natural
											gas flows from New York/New Jersey into New England on the Algonquin,
                                                                Tennessee, and Iroquois pipelines.</p>
										<p>The source of information for this chart is OPIS Point Logic. More
											detailed information is available from the OPIS Point Logic Northeast
											Gas Fundamentals Daily report. Data for this chart cannot be
											downloaded.
                                                            </p>
										<h4>Total daily natural gas consumption in New England</h4>
										<p>This multi-year chart shows estimated total daily natural gas consumption
											across sectors in billion cubic feet per day. The chart includes
											consumption from the residential/commercial, industrial, and
											electric power sectors. This measurement is a proxy for total
											regional natural gas consumption; it excludes losses from pipeline
                                                                operations or fuel use to operate the pipeline. The chart shows</p>
										<ul>
											<li>The current-year natural gas consumption</li>
											<li>The previous-year natural gas consumption</li>
											<li>The five-year average natural gas consumption</li>
											<li>The minimum/maximum range of natural gas consumption for the
                                                                    most current five-year period</li>
										</ul>
										<p>The source of information for this chart is OPIS Point Logic. More
											detailed information is available from the OPIS Point Logic Northeast
											Gas Fundamentals Daily report. Data for this chart cannot be
											downloaded.
                                                            </p>
										<h4>Daily spot price of natural gas at the Algonquin Citygate</h4>
										<p>This line chart shows the spot price of natural gas at the Algonquin
											Citygate expressed in dollars per million British thermal units.
											It displays prices for the current year and previous year. The
											Algonquin Citygate is a commonly referenced benchmark price for
											delivered natural gas in New England. Because it represents a
											delivered commodity price, this price reflects constraints on
                                                                the natural gas system, especially in the winter.</p>
										<p>The source of information for the wholesale spot price at the Algonquin
											Citygate is S&amp;P Global Market Intelligence. Data for this
											chart cannot be downloaded.
                                                            </p>
										<h4>Daily electricity generation from natural gas in New England</h4>
										<p>This daily double-axis line chart shows the amount of megawatts generated
											by natural gas-fired units in ISO New England and the natural
											gas share of total generation produced within ISO New England
											each day. The daily natural gas generation share is derived from
                                                                EIA-930 data.</p>
										<p>The source of information for this chart is the U.S. Energy Information
											Administration, EIA-930 U.S. electric system operating data.
                                                                See the <a href="/realtime_grid/docs/userguide-knownissues.pdf">EIA-930 User&rsquo;s Guide</a> for more details.</p>
										<h4>New England natural gas infrastructure map</h4>
										<p>New England regional natural gas infrastructure map shows the locations
											of LNG regasification terminals, major natural gas pipelines,
											the Algonquin Citygate trading point, and natural gas constraint
											points. The map shows daily natural gas flows and changes in
											million cubic feet per day. It also shows the utilization percent
											of the natural gas network at locations in New England or adjacent
											market locations that affect the regional availability of natural
                                                                gas supplies.</p>
										<p>OPIS Point Logic is the source of the natural gas flow information.
											Point Logic acquires much of this data by scraping the Informational
											Postings disseminated by interstate natural gas pipeline on their
											electronic bulletin boards. EIA calculates the daily change in
											flow and estimated utilization at each flow point. The utilization
											measure reflects the daily flow divided by a reported or determined
											value and represents the capacity at a given pipeline location.
											If a natural gas pipeline capacity value at given point is unavailable,
                                                                EIA estimates a historic maximum by reviewing daily data trends.</p>

										<h2>Petroleum Section</h2>
										<h4>Distillate stocks (Petroleum Administration for Defense (PADD) 1A)</h4>
										<p>This indicator shows the most current weekly distillate stocks information
											for New England. Distillate oil availability is key to New England&rsquo;s
											heating and electricity markets. The source of this information
                                                                is the U.S. Energy Information Administration.</p>
										<h4>Distillate stock change from previous week (PADD 1A)</h4>
										<p>This indicator shows the change in distillate stocks in New England
											compared with the previous week. The source of this information
                                                                is the U.S. Energy Information Administration.</p>
										<h4>Spot New York Harbor heating oil price</h4>
										<p>The spot price of New York Harbor heating oil is a proxy for the
											price of Northeast heating oil on days. This heating oil price
											is a key fundamental that can influence fuel selection in the
											New England electricity market and indicate stress in the market
											as a result of supply chain logistics. The source of this information
                                                                is Refinitiv, formerly Thomson Reuters. See <a href="/dnav/pet/hist/eer_epd2f_pf4_y35ny_dpgD.htm">historical information</a> for this indicator on EIA&rsquo;s website.</p>
										<h3>Visualizations</h3>
										<h4>Weekly distillate oil stocks in New England (PADD 1A)</h4>
										<p>The multi-year range chart shows weekly distillate oil stocks in
											New England (PADD 1A) in million barrels. These data are typically
											updated on Wednesday at 10:30 a.m. Eastern Standard Time as part
                                                                of the <em>Weekly Petroleum Status Repor</em><em>t </em>update.
                                                                For PADD 1A, this chart shows</p>
										<ul>
											<li>The current-year weekly distillate stocks</li>
											<li>The previous-year weekly distillate stocks</li>
											<li>The five-year average of distillate stocks</li>
											<li>The minimum/maximum range of distillate stocks for the most current
												five-year period
                                                                </li>
										</ul>
										<p>This source of information for this chart is the U.S. Energy Information
											Administration,&nbsp;
                                                                <a href="/dnav/pet/hist/LeafHandler.ashx?n=PET&amp;s=WDIST1A1&amp;f=W" target="_blank" title="View U.S. Energy Information Administration, Weekly New England (PADD 1A) Ending Stocks of Distillate Fuel Oil">Weekly New England (PADD 1A) Ending Stocks of Distillate Fuel Oil</a>.</p>
										<h4>Weekly distillate oil stocks in the Central Atlantic (PADD 1B)</h4>
										<p>The multi-year range chart shows weekly distillate oil stocks in
											the Central Atlantic region (PADD 1B) in million barrels. These
											data are typically updated on Wednesday at 10:30 a.m. Eastern
											Standard Time as part of the
                                                                <em>Weekly Petroleum Status Report</em> update. For PADD 1B,
		this chart shows
                                                            </p>
										<ul>
											<li>The current-year weekly distillate stocks</li>
											<li>The previous-year weekly distillate stocks</li>
											<li>The five-year average of distillate stocks</li>
											<li>The minimum/maximum range of distillate stocks for the most current
												five-year period
                                                                </li>
										</ul>
										<p>The source of information for this chart is the U.S. Energy Information
											Administration,
                                                                <a href="/dnav/pet/hist/LeafHandler.ashx?n=PET&amp;s=WDIST1B1&amp;f=W" target="_blank" title="View U.S. Energy Information Administration, Weekly Central Atlantic (PADD 1B) Ending Stocks of Distillate Fuel Oil">Weekly Central Atlantic (PADD 1B) Ending Stocks of Distillate Fuel Oil</a>.</p>
										<h4>Weekly residual oil stocks in New England (PADD 1A)</h4>
										<p>This multi-year range chart shows weekly residual oil stocks in New
											England (PADD 1A) in million barrels. These data are typically
											updated on Wednesday at 10:30 a.m. Eastern Standard Time as part
                                                                of the <em>Weekly Petroleum Status Report</em> update. For PADD
                                                                1A, the chart shows</p>
										<ul>
											<li>The current-year weekly residual fuel oil stocks</li>
											<li>The previous-year weekly residual fuel oil stocks</li>
											<li>The five-year average of residual fuel oil stocks</li>
											<li>The minimum/maximum range of residual fuel oil stocks for the
                                                                    most current five-year period</li>
										</ul>
										<p>The source of information is the U.S. Energy Information Administration,
                                                                <a href="/dnav/pet/hist/LeafHandler.ashx?n=PET&amp;s=WREST1A1&amp;f=W" target="_blank" title="View U.S. Energy Information Administration, Weekly New England (PADD 1A) Ending Stocks of Residual Fuel Oil">Weekly New England (PADD 1A) Ending Stocks of Residual Fuel Oil</a>.</p>
										<h4>Weekly residual oil stocks in the Central Atlantic (PADD 1B)</h4>
										<p>This multi-year range chart shows weekly residual oil stocks in the
											Central Atlantic region (PADD 1B) in million barrels. These data
											are typically updated on Wednesday at 10:30 a.m. Eastern Standard
											Time as part of the
                                                                <em>Weekly Petroleum Status Report</em> update. For PADD 1B,
		the chart shows
                                                            </p>
										<ul>
											<li>The current-year weekly residual fuel oil stocks</li>
											<li>The previous-year weekly residual fuel oil stocks</li>
											<li>The five-year average of residual fuel oil stocks</li>
											<li>The minimum/maximum range of residual fuel oil stocks for the
                                                                    most current five-year period</li>
										</ul>
										<p>The source of information is the U.S. Energy Information Administration,
                                                                <a href="/dnav/pet/hist/LeafHandler.ashx?n=PET&amp;s=WREST1B1&amp;f=W" target="_blank" title="View U.S. Energy Information Administration, Weekly Central Atlantic (PADD 1B) Ending Stocks of Residual Fuel Oil">Weekly Central Atlantic (PADD 1B) Ending Stocks of Residual Fuel Oil</a>.
                                                            </p>
										<h4>Weekly propane and propylene stocks in New England (PADD 1A)</h4>
										<p>This multi-year range chart shows the weekly propane and propylene
											stocks in New England (PADD 1A) in million barrels. These data
											are typically updated on Wednesday at 10:30 a.m. Eastern Standard
											Time as part of the
                                                                <em>Weekly Petroleum Status Report</em> update. For PADD 1A,
		the chart shows
                                                            </p>
										<ul>
											<li>The current-year weekly propane and propylene stocks</li>
											<li>The previous-year weekly propane and propylene stocks</li>
											<li>The five-year average of propane and propylene stocks</li>
											<li>The minimum/maximum range of propane and propylene stocks for
                                                                    the most current five-year period</li>
										</ul>
										<p>The source of this information is the U.S. Energy Information Administration,&nbsp;
                                                                <a href="/dnav/pet/hist/LeafHandler.ashx?n=PET&amp;s=WPRST1A1&amp;f=W" target="_blank" title="View U.S. Energy Information Administration, Weekly New England (PADD1A) Ending Stocks of Propane and Propylene">Weekly New England (PADD 1A) Ending Stocks of Propane and Propylene</a>.
                                                            </p>
										<h4>Weekly propane and propylene stocks in the Central Atlantic (PADD
											1B)
                                                            </h4>
										<p>This multi-year range chart shows the weekly propane and polypropylene
											stocks in the Central Atlantic (PADD 1B) in million barrels.
											These data are typically updated on Wednesday at 10:30 a.m. Eastern
                                                                Standard Time as part of the <em>Weekly Petroleum Status Report</em> update. For PADD 1B, the chart shows </p>
										<ul>
											<li>The current-year weekly propane and propylene stocks</li>
											<li>The previous-year weekly propane and propylene stocks</li>
											<li>The five-year average of propane and propylene stocks</li>
											<li>The minimum/maximum range of propane and propylene stocks for
                                                                    the most current five-year period</li>
										</ul>
										<p>The source of this information is the U.S. Energy Information Administration,&nbsp;
                                                                <a href="/dnav/pet/hist/LeafHandler.ashx?n=PET&amp;s=WPRST1B1&amp;f=W" target="_blank" title="View U.S. Energy Information Administration, Weekly Central Atlantic (PADD 1B) Ending Stocks of Propane and Propylene">Weekly Central Atlantic (PADD 1B) Ending Stocks of Propane and Propylene</a>.</p>
										<h4>Weekly average price of residential heating oil in New England (PADD
											1A)
                                                            </h4>
										<p>This multi-year range chart shows weekly average price of residential
											heating oil in New England (PADD 1A) in dollars per gallon. These
											data are only available between October and March when EIA publishes
											its State Heating Oil and Propane Program data. For PADD 1A,
                                                                the chart shows</p>
										<ul>
											<li>The current-year average weekly residential heating oil prices</li>
											<li>The previous-year average weekly residential heating oil prices</li>
											<li>The five-year average of residential heating oil prices</li>
											<li>The minimum/maximum range of residential heating oil prices for
                                                                    the most current five-year period</li>
										</ul>
										<p>The source of information for this chart is the U.S. Energy Information
											Administration. More information can be found at EIA&rsquo;s
                                                                <a href="/petroleum/heatingoilpropane/pdf/explanatorynotes.pdf">Winter Fuels Explanatory Notes</a> and <a href="/petroleum/heatingoilpropane/#itn-tabs-2">Heating Oil and Propane Update</a>.</p>
										<h4>Weekly average price of residential heating oil in the Central Atlantic
											(PADD 1B)
                                                            </h4>
										<p>This multi-year range chart shows weekly average price of residential
											heating oil in the Central Atlantic region (PADD 1B) in dollars
											per gallon. These data are only available between October and
											March when EIA publishes its State Heating Oil and Propane Program
											data. For PADD 1B, the chart shows
                                                            </p>
										<ul>
											<li>The current-year average weekly residential heating oil prices</li>
											<li>The previous-year average weekly residential heating oil prices</li>
											<li>The five-year average of residential heating oil prices</li>
											<li>The minimum/maximum range of residential heating oil prices for
                                                                    the most current five-year period</li>
										</ul>
										<p>The source of information for this chart is the U.S. Energy Information
											Administration. More information can be found at EIA&rsquo;s
                                                                <a href="/petroleum/heatingoilpropane/pdf/explanatorynotes.pdf">Winter Fuels Explanatory Notes</a> and <a href="/petroleum/heatingoilpropane/#itn-tabs-2">Heating Oil and Propane Update</a>.</p>
										<h4>Weekly average price of residential propane in New England (PADD
											1A)
                                                            </h4>
										<p>This multi-year range chart shows weekly average price of residential
											propane in New England (PADD 1A) in dollars per gallon. These
											data are only available between October and March when EIA publishes
											its State Heating Oil and Propane Program data. For PADD 1A the
											chart shows
                                                            </p>
										<ul>
											<li>The current-year average weekly residential propane prices</li>
											<li>The previous-year average weekly residential propane prices</li>
											<li>The five-year average of residential propane prices</li>
											<li>The minimum/maximum range of residential propane prices for the
                                                                    most current five-year period</li>
										</ul>
										<p>The main source of information for this chart is the U.S. Energy
											Information Administration. More information can be found at
                                                                EIA&rsquo;s <a href="/petroleum/heatingoilpropane/pdf/explanatorynotes.pdf">Winter Fuels Explanatory Notes</a> and <a href="/petroleum/heatingoilpropane/#itn-tabs-1">Heating Oil and Propane Update</a>.</p>
										<h4>Weekly average price of residential propane in the Central Atlantic
											(PADD 1B)
                                                            </h4>
										<p>This multi-year range chart shows the weekly average price of residential
											propane in the Central Atlantic region (PADD 1B) in dollars per
											gallon. These data are only available between October and March
											when EIA publishes its State Heating Oil and Propane Program
											data. For PADD 1B the chart shows
                                                            </p>
										<ul>
											<li>The current-year average weekly residential propane prices</li>
											<li>The previous-year average weekly residential propane prices</li>
											<li>The five-year average of residential propane prices</li>
											<li>The minimum/maximum range of residential propane prices for the
                                                                    most current five-year period</li>
										</ul>
										<p>The main source of information for this chart is the U.S. Energy
											Information Administration. More information can be found at
                                                                EIA&rsquo;s <a href="/petroleum/heatingoilpropane/pdf/explanatorynotes.pdf">Winter Fuels Explanatory Notes</a> and <a href="/petroleum/heatingoilpropane/#itn-tabs-1">Heating Oil and Propane Update</a>.</p>
										<h4>Spot New York Harbor heating oil price</h4>
										<p>This chart shows trends in the spot price of heating oil at the New
											York Harbor. These daily prices are only reported for trade days.
                                                                The chart shows the following prices</p>
										<ul>
											<li>Current-year prices</li>
											<li>Previous-year prices</li>
											<li>Five-year average of prices</li>
											<li>Minimum/maximum range of New York Harbor heating oil prices for
                                                                    the most current five-year period</li>
										</ul>
										<p>The source of information for these prices is Refinitiv (formerly
											known as Thomson Reuters). These data are available on EIA&rsquo;s
											website under
                                                                <a href="/dnav/pet/hist/eer_epd2f_pf4_y35ny_dpgD.htm">New York Harbor No. 2 Heating Oil Spot Price FOB</a>.</p>
										<h4>New England petroleum infrastructure (PADD 1A) map</h4>
										<p>This map shows the main sources of petroleum products supplied to
											New England from PADD 1B, Canada, and other imports. Infrastructure
											includes bulk terminals, product pipelines, product flows, marine
											movements, ports, and key urban areas. The map also indicates
                                                                how petroleum products are transported (rail, truck, barge, tanker).<br /> The source of information for this map is the U.S. Energy
                                                                Information Administration, <a href="/analysis/transportationfuels/padd1n3/">East Coast and Gulf Coast Transportation Fuels Market</a> report. This map is not routinely updated.</p>
										<h4>Central Atlantic petroleum infrastructure (PADD 1B) map</h4>
										<p>This map shows the product supply infrastructure for the Central
											Atlantic region (PADD 1B). Infrastructure includes bulk terminals,
											refineries and refinery centers, product pipelines, product flows,
											marine movements, ports, and key urban areas. The map also indicates
											how petroleum products are transported (rail, truck, barge, product
											pipeline, and tanker).
                                                            </p>
										<p>The source of information for this map is the U.S. Energy Information
											Administration,
                                                                <a href="/analysis/transportationfuels/padd1n3/">East Coast and Gulf Coast Transportation Fuels Market</a> report. This map is not routinely updated.</p>

										<h2 class="sources">Sources</h2>
										<p>Data used to prepare the New England Energy Dashboard come from a
											mix of third-party and U.S. Energy Information Administration
											sources:
                                                            </p>
										<p><strong>ISO New England (</strong><a href="https://www.iso-ne.com">https://www.iso-ne.com</a><strong>) </strong>The
											Independent System Operator of New England (ISO-NE) is a key
											third-party source of information for NED&rsquo;s locational
											marginal prices by load zone and interface, real-time fuel mix,
											capacity operating parameters, power grid status, and outages.
											Some of these data are updated every five minutes or in real
											time.
                                                            </p>
										<p><strong>National Oceanic and Atmospheric Administration&nbsp;</strong>(
                                                                <a href="https://www.noaa.gov/">www.noaa.gov</a>) NED uses NOAA&nbsp;
                                                                <a href="https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/cdus/degree_days/">heating degree day (HDD) and cooling degree day (CDD) data</a>&nbsp;by
		climate division and by state within New England to create temperature
		visualizations such as heat maps, bar charts, and heat tables.
                                                                The NOAA HDD and CDD data used are weighted by population.</p>
										<p><strong>Nuclear Regulatory Commission</strong>&nbsp;(<a href="https://www.nrc.gov/reading-rm/doc-collections/event-status/reactor-status/">https://www.nrc.gov/reading-rm/doc-collections/event-status/reactor-status/</a>)
											The Nuclear Regulatory Commission (NRC) is the source of daily
											power reactor status reports for the U.S. nuclear generating
											fleet. EIA uses this information to calculate the daily regional
											average nuclear plant operating status for nuclear units in New
											England.
                                                            </p>
										<p><strong>OPIS Point Logic</strong>&nbsp;(<a href="https://www.pointlogicenergy.com/">www.pointlogicenergy.com</a>)
											Point Logic Energy is part of OPIS (Oil Price Information Service)
											by IHS Markit. OPIS Point Logic is the source of daily natural
											gas consumption estimates by sector (residential/commercial,
											industrial, and electric power); natural gas flows by region
											(New York/New Jersey and Canada); estimated daily LNG send-out;
											and natural flows by pipeline segment/locations. OPIS Point Logic
											publishes information in its Northeast Gas Fundamentals Daily
											(Supply &amp; Demand Analytics for the Northeast Region) product.
											OPIS Point Logic has established daily natural gas flows between
											New England and the New York and New Jersey are and between New
											England and Canada. OPIS Point Logic scrapes information from
											interstate natural gas pipeline electronic bulletin boards and
											from other sources to create databases and estimates of natural
                                                                gas consumption and flows.</p>
										<p><strong>Refinitiv </strong>(<a href="https://www.refinitiv.com">www.refinitiv.com</a>)
											formerly known as Thomson Reuters. Refinitiv is the source of
											spot prices for West Texas Intermediate crude oil, Dated Brent
                                                                crude oil, and New York Harbor heating oil.</p>
										<p><strong>S&amp;P Global Market Intelligence</strong> (www.sp.com)
											S&amp;P Global Market Intelligence is the source of spot prices
											for natural gas at Tetco M3, Transco Zone 6 (New York), and the
											Algonquin Citygate (Boston) and for on-peak, electricity at PJM
											West, NYISO Zone J (New York City), and Nepool-Mass (Central
											Massachusetts).
                                                            </p>
										<p><strong>U.S. Energy Information Administration</strong>&nbsp;(
                                                                <a href="https://www.eia.gov">www.eia.gov</a>) EIA is the primary
                                                                source of information for much of the information in NED, including</p>
										<ul>
											<li>Daily estimates of electricity demand, forecasted demand, net
												generation and interchange by balancing authority from EIA-930
												electric operating data.
                                                                </li>
											<li>Daily peak load across all hours by balancing Aathority derived
                                                                    from EIA-930 electric operating data.</li>
											<li>Net generation by fuel source by balancing authority from EIA-930
                                                                    electric operating data.</li>
											<li>Daily natural gas generation and shares of total generation derived
                                                                    from EIA-930 electric operating data.</li>
											<li>Estimates of weekly distillate, residual fuel oil, and propane
                                                                    and propylene stocks in PADDs 1A and 1B.</li>
											<li>Estimates of monthly residual fuel oil stocks and distillate
												stocks held on-site by generators in New England derived
                                                                    from the EIA-923.</li>
											<li>Estimates of weekly residential heating oil and propane prices
												in PADD 1A and 1B from October through March from EIA&rsquo;s
												SHOPP program.
                                                                </li>
											<li>Estimates of weekly net changes in underground natural gas storage
                                                                    inventories for the Lower 48 states and by storage region.</li>
										</ul>
										<p>Geospatial information for natural gas, electricity, and petroleum
                                                                for the U.S. EIA mapping system.</p>

										<h2>Commentary/Related links</h2>
										<h4>Commentary</h4>
										<p>EIA will occasionally include short posts on the daily <em>New England Energy Dashboard</em> discussing regional price volatility, changes in the fuel mix
											to produce electricity, constraints, petroleum stock levels,
											and energy flows. The posts may introduce new visualizations
											and sources of information.
                                                            </p>
										<h4>Related links</h4>
										<p>NED provides a series of links to help stakeholders find more detailed
											information about the New England market. Links include information
											about electricity, natural gas, petroleum products, and multi-fuel
											sources. The sources include EIA and non-EIA sources of energy
                                                                and related information. These additional links include:</p>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>);
	}
}

export default ThemesArticle;