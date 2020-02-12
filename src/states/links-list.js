﻿import React, { Component } from "react";

class StatesLinkLists extends Component {
	render() {
		return (<ul class="style-guide">
			<li class="section-container">
				<p class="_p">
					Some editible include files contain editible variables which write the values to corresponding HTML elements. Notice the fourth and fifth variables have been left blank.
                </p>

				<pre>
					<code class="html">&lt;?php
					/* edit the link URL and Title below */

					$OneUrl = "/";
					$OneTitle = "Row Number One";

					$TwoUrl = "/";
					$TwoTitle = "Row Number Two";

					$ThrUrl = "/";
					$ThrTitle = "Row Number Three";

					$FouUrl = "";
					$FouTitle = "";

					$FivUrl = "";
					$FivTitle = "";

					$SixUrl = "/";
					$SixTitle = "Row Number Six";

					?&gt;
					&lt;?php
					/* DO NOT EDIT BELOW */
					?&gt;

					&lt;div class="standard-container hide-mt"&gt;
						&lt;ul&gt;
							&lt;li class="head"&gt;&lt;h2&gt;Survey Forms, Changes &amp;amp; Announcements&lt;/h2&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a href='&lt;?=$OneURL?&gt;' title='&lt;?=$OneTitle?&gt;'&gt;&lt;?=$OneTitle?&gt;&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a href='&lt;?=$TwoURL?&gt;' title='&lt;?=$TwoTitle?&gt;'&gt;&lt;?=$TwoTitle?&gt;&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a href='&lt;?=$ThrURL?&gt;' title='&lt;?=$ThrTitle?&gt;'&gt;&lt;?=$ThrTitle?&gt;&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a href='&lt;?=$FouURL?&gt;' title='&lt;?=$FouTitle?&gt;'&gt;&lt;?=$FouTitle?&gt;&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a href='&lt;?=$FivURL?&gt;' title='&lt;?=$FivTitle?&gt;'&gt;&lt;?=$FivTitle?&gt;&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a href='&lt;?=$SixURL?&gt;' title='&lt;?=$SixTitle?&gt;'&gt;&lt;?=$SixTitle?&gt;&lt;/a&gt;&lt;/li&gt;
						&lt;/ul&gt;
&lt;/div&gt;</code></pre>


				<p class="_p">
					The list item will be hidden:
                </p>

				<pre>
					<code class="html">&lt;div class="standard-container hide-mt"&gt;
						&lt;ul&gt;
							&lt;li class="head"&gt;&lt;h2&gt;Survey Forms, Changes &amp;amp; Announcements&lt;/h2&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a href="/" title="Row Number One"&gt;Row Number One&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a href="/" title="Row Number Two"&gt;Row Number Two&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a href="/" title="Row Number Three"&gt;Row Number Three&lt;/a&gt;&lt;/li&gt;
							&lt;!-- li&gt;&lt;a href="/" title=""&gt;&lt;/a&gt;&lt;/li --&gt;
							&lt;!-- li&gt;&lt;a href="/" title=""&gt;&lt;/a&gt;&lt;/li --&gt;
							&lt;li&gt;&lt;a href="/" title="Row Number Six"&gt;Row Number Six&lt;/a&gt;&lt;/li&gt;
						&lt;/ul&gt;
&lt;/div&gt;</code></pre>



				<p class="_p">
					Here's how the link list would display on the page with the fourth and fifth list items hidden from the user.
                </p>

				<div class="secondary hide-mt" style="padding: 12px 20px;">
					<ul>
						<li class="head">
							<h2>Survey Forms, Changes &amp; Announcements</h2>
						</li>
						<li><a href="/" title="Row Number One">Row Number One</a></li>
						<li><a href="/" title="Row Number Two">Row Number Two</a></li>
						<li><a href="/" title="Row Number Three">Row Number Three</a></li>
						<li><a href="/" title="Row Number Six">Row Number Six</a></li>
					</ul>
				</div>
				<p class="_p">
					Some editible include files contain editible variables which write the values to corresponding HTML elements. Notice the fourth and fifth variables have been left blank.
                    </p>

				<pre>
					<code class="html">/* edit the link URL, Label and Date below */
						/* leave fields blank if unused - a script will hide unused list items*/

						$OneUrl = "/some-link/";
						$OneLabel = "U.S. Petroleum Infrastructure Map";
						$OneImageName = "petroleum-map";// .png is not needed

						$TwoUrl = "/some-link/";
						$TwoLabel = "U.S. Fossil Fuel Resource Map";
						$TwoImageName = "fossil-fuel-map";// .png is not needed

						$ThrUrl = "/some-link/";
						$ThrLabel = "U.S. Crude Import Tracking Tool";
						$ThrImageName = "crude-oil-import-data";// .png is not needed

						$FouUrl = "/some-link/";
						$FouLabel = "STEO Data Browser";
						$FouImageName = "steo-data-browser";// .png is not needed

						$FivUrl = "/radio";
						$FivLabel = "Radio Spot";
						$FivImageName = "radio";// .png is not needed

						$SixUrl = "";
						$SixLabel = ""; // &lt;-------------leave empty
						$SixImageName = ""; // .png is not needed

						?&gt;
						&lt;?php
						/* DO NOT EDIT BELOW */
						?&gt;

						&lt;div class="l-row"&gt;
							&lt;div&gt;
								&lt;h1&gt;Interactive Visualizations, Data, &amp;amp; Multimedia&lt;/h1&gt;
								&lt;ul class="visualizations"&gt;
									&lt;li class="l-col"&gt;&lt;a href="&lt;?=$OneURL?&gt;"&gt;&lt;span class="circle"&gt;&lt;img src="../&lt;?=$OneImageName?&gt;.png" alt="&lt;?=$OneLabel?&gt;"&gt;&lt;/span&gt;&lt;/a&gt;&lt;h3&gt;&lt;a href="&lt;?=$OneURL?&gt;" title="&lt;?=$OneLabel?&gt;"&gt;&lt;?=$OneLabel?&gt;&lt;/a&gt;&lt;/h3&gt;&lt;/li&gt;
									&lt;li class="l-col"&gt;&lt;a href="&lt;?=$TwoURL?&gt;"&gt;&lt;span class="circle"&gt;&lt;img src="../&lt;?=$TwoImageName?&gt;.png" alt="&lt;?=$TwoLabel?&gt;"&gt;&lt;/span&gt;&lt;/a&gt;&lt;h3&gt;&lt;a href="&lt;?=$TwoURL?&gt;" title="&lt;?=$TwoLabel?&gt;"&gt;&lt;?=$TwoLabel?&gt;&lt;/a&gt;&lt;/h3&gt;&lt;/li&gt;
									&lt;li class="l-col"&gt;&lt;a href="&lt;?=$ThrURL?&gt;"&gt;&lt;span class="circle"&gt;&lt;img src="../&lt;?=$ThrImageName?&gt;.png" alt="&lt;?=$ThrLabel?&gt;"&gt;&lt;/span&gt;&lt;/a&gt;&lt;h3&gt;&lt;a href="&lt;?=$ThrURL?&gt;" title="&lt;?=$ThrLabel?&gt;"&gt;&lt;?=$ThrLabel?&gt;&lt;/a&gt;&lt;/h3&gt;&lt;/li&gt;
									&lt;li class="l-col"&gt;&lt;a href="&lt;?=$FouURL?&gt;"&gt;&lt;span class="circle"&gt;&lt;img src="../&lt;?=$FouImageName?&gt;.png" alt="&lt;?=$FouLabel?&gt;"&gt;&lt;/span&gt;&lt;/a&gt;&lt;h3&gt;&lt;a href="&lt;?=$FouURL?&gt;" title="&lt;?=$FouLabel?&gt;"&gt;&lt;?=$FouLabel?&gt;&lt;/a&gt;&lt;/h3&gt;&lt;/li&gt;
									&lt;li class="l-col"&gt;&lt;a href="&lt;?=$FivURL?&gt;"&gt;&lt;span class="circle"&gt;&lt;img src="../&lt;?=$FivImageName?&gt;.png" alt="&lt;?=$FivLabel?&gt;"&gt;&lt;/span&gt;&lt;/a&gt;&lt;h3&gt;&lt;a href="&lt;?=$FivURL?&gt;" title="&lt;?=$FivLabel?&gt;"&gt;&lt;?=$FivLabel?&gt;&lt;/a&gt;&lt;/h3&gt;&lt;/li&gt;
									&lt;li class="l-col"&gt;&lt;a href="&lt;?=$SixURL?&gt;"&gt;&lt;span class="circle"&gt;&lt;img src="../&lt;?=$SixImageName?&gt;.png" alt="&lt;?=$SixLabel?&gt;"&gt;&lt;/span&gt;&lt;/a&gt;&lt;h3&gt;&lt;a href="&lt;?=$SixURL?&gt;" title="&lt;?=$SixLabel?&gt;"&gt;&lt;?=$SixLabel?&gt;&lt;/a&gt;&lt;/h3&gt;&lt;/li&gt;
								&lt;/ul&gt;
							&lt;div&gt;
&lt;/div&gt;</code></pre>


				<p class="_p">
					The list item will be hidden:
                    </p>

				<pre>
					<code class="html">&lt;div class="l-row"&gt;
						&lt;div&gt;
							&lt;h1&gt;Interactive Visualizations, Data, &amp;amp; Multimedia&lt;/h1&gt;
							&lt;ul class="visualizations"&gt;
								&lt;li class="l-col"&gt;&lt;a href="/some-link/"&gt;&lt;span class="circle"&gt;&lt;img src="../petroleum-map.png" alt="U.S. Petroleum Infrastructure Map"&gt;&lt;/span&gt;&lt;/a&gt;
									&lt;h3&gt;&lt;a href="/some-link/" title="U.S. Petroleum Infrastructure Map"&gt;U.S. Petroleum Infrastructure Map&lt;/a&gt;&lt;/h3&gt;
								&lt;/li&gt;
								&lt;li class="l-col"&gt;&lt;a href="/some-link/"&gt;&lt;span class="circle"&gt;&lt;img src="../fossil-fuel-map.png" alt="U.S. Fossil Fuel Resource Map"&gt;&lt;/span&gt;&lt;/a&gt;
									&lt;h3&gt;&lt;a href="/some-link/" title="U.S. Fossil Fuel Resource Map"&gt;U.S. Fossil Fuel Resource Map&lt;/a&gt;&lt;/h3&gt;
								&lt;/li&gt;
								&lt;li class="l-col"&gt;&lt;a href="/some-link/"&gt;&lt;span class="circle"&gt;&lt;img src="../crude-oil-import-data.png" alt="U.S. Crude Import Tracking Tool"&gt;&lt;/span&gt;&lt;/a&gt;
									&lt;h3&gt;&lt;a href="/some-link/" title="U.S. Crude Import Tracking Tool"&gt;U.S. Crude Import Tracking Tool&lt;/a&gt;&lt;/h3&gt;
								&lt;/li&gt;
								&lt;li class="l-col"&gt;&lt;a href="/some-link/"&gt;&lt;span class="circle"&gt;&lt;img src="../steo.png" alt="STEO Data Browser"&gt;&lt;/span&gt;&lt;/a&gt;
									&lt;h3&gt;&lt;a href="/some-link/" title="STEO Data Browser"&gt;STEO Data Browser&lt;/a&gt;&lt;/h3&gt;
								&lt;/li&gt;
								&lt;li class="l-col"&gt;&lt;a href="/some-link/"&gt;&lt;span class="circle"&gt;&lt;img src="../radio.png" alt="Radio Spot"&gt;&lt;/span&gt;&lt;/a&gt;
									&lt;h3&gt;&lt;a href="/some-link/" title="Radio Spot"&gt;Radio Spot&lt;/a&gt;&lt;/h3&gt;
								&lt;/li&gt;
								&lt;!-- &lt;li class="l-col hide"&gt;&lt;a href=""&gt;&lt;span class="circle"&gt;&lt;img src="../.png" alt=""&gt;&lt;/span&gt;&lt;/a&gt;
									&lt;h3&gt;&lt;a href="" title=""&gt;&lt;/a&gt;&lt;/h3&gt;
								&lt;/li&gt; --&gt;
							&lt;/ul&gt;
						&lt;/div&gt;
&lt;/div&gt;</code></pre>



				<p class="_p">
					Here's how the link list would display on the page with the fourth and fifth list items hidden from the user.
                    </p>


				{/*
<h2>Interactive Visualizations, Data, &amp; Multimedia</h2>
				
				
				<ul class="visualizations">
					<li class="l-col"><a href="/some-link/"><span class="circle"><img src="https://www.eia.gov/global/images/issue-trends/interactive/petroleum-map.png" alt="U.S. Petroleum Infrastructure Map"></span></a>
						<h3><a href="/some-link/" title="U.S. Petroleum Infrastructure Map">U.S. Petroleum Infrastructure Map</a></h3>
                            </li>
						<li class="l-col"><a href="/some-link/"><span class="circle"><img src="https://www.eia.gov/global/images/issue-trends/interactive/fossil-fuel-map.png" alt="U.S. Fossil Fuel Resource Map"></span></a>
							<h3><a href="/some-link/" title="U.S. Fossil Fuel Resource Map">U.S. Fossil Fuel Resource Map</a></h3>
                            </li>
							<li class="l-col"><a href="/some-link/"><span class="circle"><img src="https://www.eia.gov/global/images/issue-trends/interactive/crude-oil-import-data.png" alt="U.S. Crude Import Tracking Tool"></span></a>
								<h3><a href="/some-link/" title="U.S. Crude Import Tracking Tool">U.S. Crude Import Tracking Tool</a></h3>
                            </li>
								<li class="l-col"><a href="/some-link/"><span class="circle"><img src="https://www.eia.gov/global/images/issue-trends/interactive/steo.png" alt="STEO Data Browser"></span></a>
									<h3><a href="/some-link/" title="STEO Data Browser">STEO Data Browser</a></h3>
                            </li>
									<li class="l-col"><a href="/radio"><span class="circle"><img src="https://www.eia.gov/global/images/issue-trends/interactive/radio.png" alt="Radio Spot"></span></a>
										<h3><a href="/radio" title="Radio Spot">Radio Spot</a></h3>
                            </li>
										<li class="l-col hide"><a href=""><span class="circle"><img src="https://www.eia.gov/global/images/issue-trends/interactive/.png" alt=""></span></a>
											<h3>
												<a href="" title=""></a>
											</h3>
												</li>
												</ul>
*/}

			</li>
		</ul>);
	}
}

export default StatesLinkLists;