import React, { Component } from "react";


class BaseColorPalette extends Component {
	render() {
		return (
			<React.Fragment>
				<BaseSubNavigation />
				<div id="mainContent">
					<ul class="style-guide">
						<li class="section-container">
							<h1 class="_h1">Color Palette</h1>
							<h3 class="_h3 blue">
								<a name="one"></a>Blues</h3>
							<div class="swatch-wrapper">
								<div class="eia-dark-blue swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-blue-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-blue-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-blue-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-blue swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-blue-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-blue-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-blue-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-blue swatch"></div>
							</div>
						</li>
						<li class="section-container">
							<h3 class="_h3">Consolidate</h3>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#003851;"><span>#003851;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#003c57;"><span>#003c57;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#00405d;"><span>#00405d;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#0096d7;"><span>#0096d7;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#189bd7;"><span>#189bd7;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#4db6e3;"><span>#4db6e3;</span></div>
							</div>
						</li>
						<li class="section-container">
							<h3 class="_h3 green">
								<a name="two"></a>Greens</h3>
							<div class="swatch-wrapper">
								<div class="eia-dark-green swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-green-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-green-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-green-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-green swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-green-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-green-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-green-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-green swatch"></div>
							</div>
						</li>
						<li class="section-container red">
							<h3 class="_h3">
								<a name="thr"></a>Reds</h3>
							<div class="swatch-wrapper">
								<div class="eia-dark-red swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-red-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-red-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-red-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-red swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-red-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-red-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-red-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-red swatch"></div>
							</div>
						</li>
						<li class="section-container">
							<h3 class="_h3">Consolidate</h3>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#a33340;"><span>#a33340;</span></div>
							</div>
						</li>
						<li class="section-container yellow">
							<h3 class="_h3">
								<a name="fou"></a>Yellows</h3>
							<div class="swatch-wrapper">
								<div class="eia-dark-yellow swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-yellow-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-yellow-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-yellow-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-yellow swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-yellow-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-yellow-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-yellow-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-yellow swatch"></div>
							</div>
						</li>
						<li class="section-container brown">
							<h3 class="_h3">
								<a name="fiv"></a>Browns</h3>
							<div class="swatch-wrapper">
								<div class="eia-dark-brown swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-brown-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-brown-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-brown-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-brown swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-brown-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-brown-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-brown-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-brown swatch"></div>
							</div>
						</li>
						<li class="section-container purple">
							<h3 class="_h3">
								<a name="six"></a>Purples</h3>
							<div class="swatch-wrapper">
								<div class="eia-dark-purple swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-purple-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-purple-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-purple-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-purple swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-purple-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-purple-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-purple-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-purple swatch"></div>
							</div>
						</li>
						<li class="section-container orange">
							<h3 class="_h3">
								<a name="six"></a>Oranges</h3>
							<div class="swatch-wrapper">
								<div class="eia-dark-orange swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-orange-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-orange-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-orange-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-orange swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-orange-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-orange-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-orange-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-orange swatch"></div>
							</div>
						</li>
						<li class="section-container white">
							<h3 class="_h3">
								<a name="sev"></a>Whites</h3>
							<div class="swatch-wrapper">
								<div class="eia-dark-white swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-white-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-white-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-white-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-white-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-white-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-white-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-white-80 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-white-85 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-white swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-white swatch"></div>
							</div>
						</li>
						<li class="section-container black">
							<h3 class="_h3"><a name="eig"></a>Blacks</h3>
							<div class="swatch-wrapper">
								<div class="eia-black swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-black swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-black-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-grey swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-black-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dark-black-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-black-25 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-black-50 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-black-75 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-light-black swatch"></div>
							</div>
						</li>
						<li class="section-container">
							<h3 class="_h3">Consolidate</h3>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#5e625e;"><span>#5e625e;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#666666;"><span>#666666;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#7d7d7d;"><span>#7d7d7d;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#7e7c6f;"><span>#7e7c6f;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#858585;"><span>#858585;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#999999;"><span>#999999;</span></div>
							</div>
						</li>
						<li class="section-container">
							<h3 class="_h3">
								<a name="nin"></a>Commonly used shades of white</h3>
							<div class="swatch-wrapper">
								<div class="eia-white swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-ededed swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-e5e5e5 swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="eia-dddddd swatch"></div>
							</div>

							<div class="swatch-wrapper">
								<div class="eia-d4d4d4 swatch"></div>
							</div>

							<div class="swatch-wrapper">
								<div class="eia-d3d3d3 swatch"></div>
							</div>

							<div class="swatch-wrapper">
								<div class="eia-b2b2b2 swatch"></div>
							</div>

							<div class="swatch-wrapper">
								<div class="eia-efefef swatch"></div>
							</div>

							<div class="swatch-wrapper">
								<div class="swatch"></div>
							</div>

							<div class="swatch-wrapper">
								<div class="swatch"></div>
							</div>
						</li>
						<li class="section-container">
							<h3 class="_h3">Consolidate</h3>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#a6a5a6;"><span>#a6a5a6;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#b3c2c9;"><span>#b3c2c9;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#d3d3d3;"><span>#d3d3d3;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#d8d8d8;"><span>#d8d8d8;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#dadada;"><span>#dadada;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#dff2fB;"><span>#dff2fB;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#e8cccf;"><span>#e8cccf;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#e8ecf2;"><span>#e8ecf2;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#f5fbfd;"><span>#f5fbfd;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#f7f7f7;"><span>#f7f7f7;</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#f9f9f9;"><span>#f9f9f9;</span></div>
							</div>
						</li>
						<li class="section-container">
							<h3 class="_h3">Misc Colors</h3>
							<div class="swatch-wrapper">
								<div class="swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="misc-two swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="misc-thr swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="misc-fou swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="misc-fiv swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="misc-six swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch"></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#66a0b9"><span>@eia-muted-blue</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#92a753"><span>@eia-muted-green</span></div>
							</div>
							<div class="swatch-wrapper">
								<div class="swatch" style="background-color:#a27d33"><span>@eia-muted-brown</span></div>
							</div>
						</li>
					</ul>	</div>
			</React.Fragment>
		);
	}
}
export default BaseColorPalette;
