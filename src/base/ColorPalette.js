import React, { Component } from "react";
import Top from "../assets/components/Top.js";
import Legend from "../assets/components/Legend.js";
import ExamplePlaceholder from "../assets/examples/Placeholder.js";
import LoremIpsum from "../assets/containers/LoremIpsum.js";

class ColorPalette extends Component {
	render() {
		return (
			<div class="right-content">
				<h1 className="_h1">Color Palette</h1>
				<h3 className="_h3 blue">
					<a name="one"></a>Blues
				</h3>
				<div className="swatch-wrapper">
					<div className="eia-dark-blue swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-blue-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-blue-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-blue-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-blue swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-blue-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-blue-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-blue-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-blue swatch"></div>
				</div>
				<Top />
				<h3 className="_h3">Consolidate</h3>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#003851;"*/}
						<span>#003851;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#003c57;"*/}
						<span>#003c57;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#00405d;"*/}
						<span>#00405d;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#0096d7;"*/}
						<span>#0096d7;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#189bd7;"*/}
						<span>#189bd7;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#4db6e3;"*/}
						<span>#4db6e3;</span>
					</div>
				</div>
				<Top />
				<h3 className="_h3 green">
					<a name="two"></a>Greens
				</h3>
				<div className="swatch-wrapper">
					<div className="eia-dark-green swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-green-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-green-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-green-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-green swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-green-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-green-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-green-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-green swatch"></div>
				</div>
				<Top />
				<h3 className="_h3">
					<a name="thr"></a>Reds
				</h3>
				<div className="swatch-wrapper">
					<div className="eia-dark-red swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-red-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-red-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-red-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-red swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-red-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-red-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-red-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-red swatch"></div>
				</div>
				<Top />
				<h3 className="_h3">Consolidate</h3>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#a33340;"*/}
						<span>#a33340;</span>
					</div>
				</div>
				<Top />
				<h3 className="_h3">
					<a name="fou"></a>Yellows
				</h3>
				<div className="swatch-wrapper">
					<div className="eia-dark-yellow swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-yellow-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-yellow-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-yellow-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-yellow swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-yellow-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-yellow-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-yellow-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-yellow swatch"></div>
				</div>
				<Top />
				<h3 className="_h3">
					<a name="fiv"></a>Browns
				</h3>
				<div className="swatch-wrapper">
					<div className="eia-dark-brown swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-brown-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-brown-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-brown-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-brown swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-brown-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-brown-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-brown-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-brown swatch"></div>
				</div>
				<Top />
				<h3 className="_h3">
					<a name="six"></a>Purples
				</h3>
				<div className="swatch-wrapper">
					<div className="eia-dark-purple swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-purple-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-purple-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-purple-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-purple swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-purple-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-purple-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-purple-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-purple swatch"></div>
				</div>
				<Top />
				<h3 className="_h3">
					<a name="six"></a>Oranges
				</h3>
				<div className="swatch-wrapper">
					<div className="eia-dark-orange swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-orange-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-orange-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-orange-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-orange swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-orange-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-orange-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-orange-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-orange swatch"></div>
				</div>
				<Top />
				<h3 className="_h3">
					<a name="sev"></a>Whites
				</h3>
				<div className="swatch-wrapper">
					<div className="eia-dark-white swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-white-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-white-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-white-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-white-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-white-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-white-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-white-80 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-white-85 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-white swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-white swatch"></div>
				</div>
				<Top />
				<h3 className="_h3">
					<a name="eig"></a>Blacks
				</h3>
				<div className="swatch-wrapper">
					<div className="eia-black swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-black swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-black-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-grey swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-black-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dark-black-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-black-25 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-black-50 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-black-75 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-light-black swatch"></div>
				</div>
				<Top />
				<h3 className="_h3">Consolidate</h3>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#5e625e;"*/}
						<span>#5e625e;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#666666;"*/}
						<span>#666666;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#7d7d7d;"*/}
						<span>#7d7d7d;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#7e7c6f;"*/}
						<span>#7e7c6f;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#858585;"*/}
						<span>#858585;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#999999;"*/}
						<span>#999999;</span>
					</div>
				</div>
				<Top />
				<h3 className="_h3">
					<a name="nin"></a>Commonly used shades of white
				</h3>
				<div className="swatch-wrapper">
					<div className="eia-white swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-ededed swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-e5e5e5 swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="eia-dddddd swatch"></div>
				</div>

				<div className="swatch-wrapper">
					<div className="eia-d4d4d4 swatch"></div>
				</div>

				<div className="swatch-wrapper">
					<div className="eia-d3d3d3 swatch"></div>
				</div>

				<div className="swatch-wrapper">
					<div className="eia-b2b2b2 swatch"></div>
				</div>

				<div className="swatch-wrapper">
					<div className="eia-efefef swatch"></div>
				</div>

				<div className="swatch-wrapper">
					<div className="swatch"></div>
				</div>

				<div className="swatch-wrapper">
					<div className="swatch"></div>
				</div>
				<Top />
				<h3 className="_h3">Consolidate</h3>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#a6a5a6;"*/}
						<span>#a6a5a6;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#b3c2c9;"*/}
						<span>#b3c2c9;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#d3d3d3;"*/}
						<span>#d3d3d3;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#d8d8d8;"*/}
						<span>#d8d8d8;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#dadada;"*/}
						<span>#dadada;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#dff2fB;"*/}
						<span>#dff2fB;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#e8cccf;"*/}
						<span>#e8cccf;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#e8ecf2;"*/}
						<span>#e8ecf2;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#f5fbfd;"*/}
						<span>#f5fbfd;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#f7f7f7;"*/}
						<span>#f7f7f7;</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#f9f9f9;"*/}
						<span>#f9f9f9;</span>
					</div>
				</div>
				<Top />
				<h3 className="_h3">Misc Colors</h3>
				<div className="swatch-wrapper">
					<div className="swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="misc-two swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="misc-thr swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="misc-fou swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="misc-fiv swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="misc-six swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch"></div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#66a0b9"*/}
						<span>@eia-muted-blue</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#92a753"*/}
						<span>@eia-muted-green</span>
					</div>
				</div>
				<div className="swatch-wrapper">
					<div className="swatch">
						{/* style="background-color:#a27d33"*/}
						<span>@eia-muted-brown</span>
					</div>
				</div>
				<Top />
			</div>
		);
	}
}

export default ColorPalette;
