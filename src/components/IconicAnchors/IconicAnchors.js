import React, { Component } from "react"

import AnchorIcoPDF from "./PDF"
import AnchorIcoXLS from "./XLS"
import AnchorIcoCSV from "./CSV"
import AnchorIcoDOC from "./DOC"
import AnchorIcoPPT from "./PPT"
import AnchorIcoInt from "./Interactive"
import AnchorIcoHTML from "./HTML"
import AnchorIcoTXT from "./TXT"
import AnchorIcoImage from "./Image"
import AnchorIcoJSON from "./JSON"
import AnchorIcoEFILE from "./EFILE"
import AnchorIcoPEDRO from "./PEDRO"

class IconicAnchors extends Component {
	render() {
		return (
			<span class="iconic-anchors">
				<h3 className="_h3">Iconic Anchors</h3>
				<p className="_p">Trailing icon</p>
				<ul className="_ul">
					<li className="_li">
						<a className="ico pdf">PDF</a>
					</li>
					<li className="_li">
						<a className="ico xls">XLS</a>
					</li>
					<li className="_li">
						<a className="ico csv">CSV</a>
					</li>
					<li className="_li">
						<a className="ico interactive">Interactive</a>
					</li>
					<li className="_li">
						<a className="ico ppt">PPT</a>
					</li>
					<li className="_li">
						<a className="ico html">HTML</a>
					</li>
					<li className="_li">
						<a className="ico doc">DOC</a>
					</li>
					<li className="_li">
						<a className="ico image">IMAGE</a>
					</li>
					<li className="_li">
						<a className="ico json">JSON</a>
					</li>
					<li className="_li">
						<a className="ico efile">EFILE</a>
					</li>
					{/*
					<li className="_li">
						<a className="ico txt">TEXT</a>
					</li>
					*/}
					<li className="_li">
						<a className="ico pedro">PEDRO</a>
					</li>
				</ul>
				<div className="_source-icon">
					<a className="ico pdf">
						<span>PDF</span>
					</a>
					<AnchorIcoPDF />
				</div>
				<div className="_source-icon">
					<a className="ico xls">
						<span>XLS</span>
					</a>
					<AnchorIcoXLS />
				</div>
				<div className="_source-icon">
					<a className="ico csv">
						<span>CSV</span>
					</a>
					<AnchorIcoCSV />
				</div>
				<div className="_source-icon">
					<a className="ico interactive">
						<span>Interactive</span>
					</a>
					<AnchorIcoInt />
				</div>
				<div className="_source-icon">
					<a className="ico ppt">
						<span>PPT</span>
					</a>
					<AnchorIcoPPT />
				</div>
				<div className="_source-icon">
					<a className="ico html">
						<span>HTML</span>
					</a>
					<AnchorIcoHTML />
				</div>
				<div className="_source-icon">
					<a className="ico doc">
						<span>DOC</span>
					</a>
					<AnchorIcoDOC />
				</div>
				<div className="_source-icon">
					<a className="ico jspn">
						<span>JSON</span>
					</a>
					<AnchorIcoJSON />
				</div>
				<div className="_source-icon">
					<a className="ico image">
						<span>IMAGE</span>
					</a>
					<AnchorIcoImage />
				</div>

				<div className="_source-icon">
					<a className="ico efile">
						<span>eFile</span>
					</a>
					<AnchorIcoEFILE />
				</div>
				<div className="_source-icon">
					<a className="ico txt">
						<span>TXT</span>
					</a>
					<AnchorIcoTXT />
				</div>
				<div className="_source-icon">
					<a className="ico pedro">
						<span>PEDRO</span>
					</a>
					<AnchorIcoPEDRO />
				</div>
			</span>
		)
	}
}

export default IconicAnchors
