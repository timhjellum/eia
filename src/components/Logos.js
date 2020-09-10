import React, { Component } from "react"
import Page from "./Page"
import { Tabs } from "@yazanaabed/react-tabs"
import Logo from "./Logos/Logo"
import LogoShrunk from "./Logos/LogoShrunk"
import BETALogo from "./Logos/BETALogo"
import BETALogoShrunk from "./Logos/BETALogoShrunk"
import LogoWhiteBackgroundPNG from "./Logos/LogoWhiteBackgroundPNG"
import LogoWhiteBackgroundCSS from "./Logos/LogoWhiteBackgroundCSS"

class Logos extends Component {
	render() {
		const headerLogo = {
			backgroundColor: "#003c57",
			padding: "10px"
		}
		const printLogo = {
			backgroundColor: "#fff"
		}
		return (
			<Page title="Icons">
				<span className="base">
					<h1 className="_h1">Icons</h1>
					<p className="_p">The graphic images below are SVG, an image format for vector graphics. These images are not physical images that you link to like a typical .gif, .jpg or .png. Vvector-based icons look great in a high pixel density world and offers design control, and predictability. The examples below are the base examples with minimal customizing. They also have a nested span and label which is used for accessibility.</p>
				</span>
				<div className="tab-base">
					<Tabs
						activeTab={{
							id: "tab1"
						}}
					>
						<Tabs.Tab id="tab1" title="Logos (Dark Background)">
							<div style={{ padding: 10 }} className="logos">
								<Logo />
								<LogoShrunk />
							</div>
						</Tabs.Tab>
						<Tabs.Tab id="tab2" title="Logos (White Background)">
							<div style={{ padding: 10 }}>
								<LogoWhiteBackgroundCSS />
								<LogoWhiteBackgroundPNG />
							</div>
						</Tabs.Tab>
						<Tabs.Tab id="tab3" title="BETA Logo (Dark Background)">
							<div style={{ padding: 10 }} className="logos">
								<BETALogo />
								<BETALogoShrunk />
							</div>
						</Tabs.Tab>
					</Tabs>
				</div>
			</Page>
		)
	}
}

export default Logos
