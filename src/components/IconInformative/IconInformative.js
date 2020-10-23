import React, { Component } from "react"

import PIcoINFO from "./PIcoINFO"
import SpanIcoINFO from "./SpanIcoINFO"
import AnchorIcoINFO from "./AnchorIcoINFO"
import SpanIcoPRINTER from "./SpanIcoPRINTER"
import ContainerLayout from "../Containers/ContainerLayout"
import Information from "../Banners/Information"
import InformationExample from "../Banners/InformationExample"

class IconInformative extends Component {
	render() {
		return (
			<div className="_icon-vertical">
				<h2 className="_h2">Informative Icons</h2>

				<SpanIcoINFO />
				<AnchorIcoINFO />
				<PIcoINFO />
				<div className="_source-icon">
					<h4 className="_h4">Information Icon DIV</h4>
					<InformationExample />
					<Information />
				</div>

				<div className="_source-icon">
					<h4 className="_h4">Tour Icon</h4>
					<ContainerLayout>
						<a>
							<span className="ico tour">
								<span>Tour</span>
							</span>
						</a>
					</ContainerLayout>
				</div>

				<div className="_source-icon">
					<h4 className="_h4">Printer</h4>
					<ContainerLayout>
						<a>
							<span className="ico printer">
								<span>PRINT</span>
							</span>
						</a>
					</ContainerLayout>
					<SpanIcoPRINTER />
				</div>

				<h2 className="_h2">External Link</h2>
				<div className="_source-icon">
					<ContainerLayout>
						<a href="https://www.google.com">https://www.google.com</a>
					</ContainerLayout>
				</div>

				<div className="_source-icon">
					<h4 className="_h4">External Link to Image</h4>
					<ContainerLayout>
						<div className="image-container">
							<a href="https://www.google.com">
								<img src={require("../../assets/images/main.png")} alt="Bab el-Mandeb Strait" style={{ width: "300px" }} />
							</a>
						</div>
					</ContainerLayout>
				</div>
			</div>
		)
	}
}

export default IconInformative
