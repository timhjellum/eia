import React, { Component } from "react"

import InlineIcoPDF from "./InlineIcoPDF"
import InlineIcoXLS from "./InlineIcoXLS"
import InlineIcoCSV from "./InlineIcoCSV"
import InlineIcoDOC from "./InlineIcoDOC"
import InlineIcoPPT from "./InlineIcoPPT"
import InlineIcoInteractive from "./InlineIcoInteractive"
import InlineIcoHTML from "./InlineIcoHTML"
import InlineIcoTXT from "./InlineIcoTXT"
import InlineIcoImage from "./InlineIcoImage"
import InlineIcoJSON from "./InlineIcoJSON"
import InlineIcoEFILE from "./InlineIcoEFILE"
import InlineIcoPEDRO from "./InlineIcoPEDRO"

class IconOnly extends Component {
	render() {
		return (
			<span className="inline">
				<h3 className="_h3">Inline Usage</h3>
				<ul className="_ul">
					<li className="_li">
						<a>
							Lorem ipsum dolor sit amet <span className="ico pdf">PDF</span>
						</a>
						.
					</li>
					<li className="_li">
						<a>
							Lorem ipsum dolor sit amet <span className="ico xls">XLS</span>
						</a>
						.
					</li>
					<li className="_li">
						<a>
							Lorem ipsum dolor sit amet <span className="ico csv">CSV</span>
						</a>
						.
					</li>
					<li className="_li">
						<a>
							Lorem ipsum dolor sit amet <span className="ico interactive">Interactive</span>
						</a>
						.
					</li>
					<li className="_li">
						<a>
							Lorem ipsum dolor sit amet <span className="ico ppt">PPT</span>
						</a>
						.
					</li>
					<li className="_li">
						<a>
							Lorem ipsum dolor sit amet <span className="ico html">HTML</span>
						</a>
						.
					</li>
					<li className="_li">
						<a>
							Lorem ipsum dolor sit amet <span className="ico doc">DOC</span>
						</a>
						.
					</li>
					<li className="_li">
						<a>
							Lorem ipsum dolor sit amet <span className="ico image">IMAGE</span>
						</a>
						.
					</li>
					<li className="_li">
						<a>
							Lorem ipsum dolor sit amet <span className="ico json">JSON</span>
						</a>
						.
					</li>
					<li className="_li">
						<a>
							Lorem ipsum dolor sit amet <span className="ico efile">EFILE</span>
						</a>
						.
					</li>
					{/*
					<li className="_li">
						<a>Lorem ipsum dolor sit amet <span className="ico txt">TEXT</span></a>.
					</li>
					*/}
					<li className="_li">
						<a>
							Lorem ipsum dolor sit amet <span className="ico pedro">PEDRO</span>
						</a>
						.
					</li>
				</ul>

				<InlineIcoPDF />
				<InlineIcoXLS />
				<InlineIcoCSV />
				<InlineIcoInteractive />
				<InlineIcoPPT />
				<InlineIcoHTML />
				<InlineIcoDOC />
				<InlineIcoImage />
				<InlineIcoJSON />
				<InlineIcoEFILE />
				<InlineIcoTXT />
				<InlineIcoPEDRO />
			</span>
		)
	}
}

export default IconOnly
