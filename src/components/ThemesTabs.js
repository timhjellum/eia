import React, { Component } from "react"
import Page from "./Page"
import ContainerLayout from "./Containers/ContainerLayout"
import PrimaryLists from "./Themes/PrimaryLists"
import { Tabs } from "@yazanaabed/react-tabs"

class ThemesTabs extends Component {
	render() {
		return (
			<Page title="Tabs">
				<span className="themes">
					<h1 className="_h1">Tabs</h1>
				</span>
				<ContainerLayout>
					<div className="tab-themes">
						<Tabs
							activeTab={{
								id: "tab1"
							}}
						>
							<Tabs.Tab id="tab1" title="Article">
								<br />
								<div className="article">
									<div className="tabs ui-tabs ui-corner-all ui-widget ui-widget-content">
										<ul role="tablist" className="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
											<li role="tab" tabIndex="-1" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="crude-oil" aria-labelledby="ui-id-7" aria-selected="false" aria-expanded="false">
												<a href="/" className="ui-tabs-anchor">
													Crude oil
												</a>
											</li>
											<li role="tab" tabIndex="0" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active" aria-controls="natural-gas" aria-labelledby="ui-id-8" aria-selected="true" aria-expanded="true">
												<a href="/" className="ui-tabs-anchor">
													Natural gas
												</a>
											</li>
										</ul>
										<div id="crude-oil" aria-labelledby="ui-id-7" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style={{ display: "none" }}></div>
										<div id="natural-gas" aria-labelledby="ui-id-8" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="false" style={{ display: "block" }}>
											<div className="tab-content">
												<PrimaryLists />
											</div>
										</div>
									</div>
								</div>
							</Tabs.Tab>
							<Tabs.Tab id="tab2" title="Primary & Primary-Alt">
								<br />
								<div className="Primary">
									<div className="tabs ui-tabs ui-corner-all ui-widget ui-widget-content">
										<ul role="tablist" className="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
											<li role="tab" tabIndex="-1" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="crude-oil" aria-labelledby="ui-id-7" aria-selected="false" aria-expanded="false">
												<a href="/" className="ui-tabs-anchor">
													Crude oil
												</a>
											</li>
											<li role="tab" tabIndex="0" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active" aria-controls="natural-gas" aria-labelledby="ui-id-8" aria-selected="true" aria-expanded="true">
												<a href="/" className="ui-tabs-anchor">
													Natural gas
												</a>
											</li>
										</ul>
										<div id="crude-oil" aria-labelledby="ui-id-7" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style={{ display: "none" }}></div>
										<div id="natural-gas" aria-labelledby="ui-id-8" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="false" style={{ display: "block" }}>
											<div className="tab-content">
												<PrimaryLists />
											</div>
										</div>
									</div>
								</div>
							</Tabs.Tab>
							<Tabs.Tab id="tab4" title="Secondary">
								<br />
								<div className="secondary">
									<div className="tabs ui-tabs ui-corner-all ui-widget ui-widget-content">
										<ul role="tablist" className="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
											<li role="tab" tabIndex="-1" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="crude-oil" aria-labelledby="ui-id-7" aria-selected="false" aria-expanded="false">
												<a href="/" className="ui-tabs-anchor">
													Crude oil
												</a>
											</li>
											<li role="tab" tabIndex="0" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active" aria-controls="natural-gas" aria-labelledby="ui-id-8" aria-selected="true" aria-expanded="true">
												<a href="/" className="ui-tabs-anchor">
													Natural gas
												</a>
											</li>
										</ul>
										<div id="crude-oil" aria-labelledby="ui-id-7" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style={{ display: "none" }}></div>
										<div id="natural-gas" aria-labelledby="ui-id-8" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="false" style={{ display: "block" }}>
											<div className="tab-content">
												<PrimaryLists />
											</div>
										</div>
									</div>
								</div>
							</Tabs.Tab>
							<Tabs.Tab id="tab5" title="Secondary-Alt">
								<br />
								<div className="secondary-alt">
									<div className="tabs ui-tabs ui-corner-all ui-widget ui-widget-content">
										<ul role="tablist" className="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
											<li role="tab" tabIndex="-1" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="crude-oil" aria-labelledby="ui-id-7" aria-selected="false" aria-expanded="false">
												<a href="/" className="ui-tabs-anchor">
													Crude oil
												</a>
											</li>
											<li role="tab" tabIndex="0" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active" aria-controls="natural-gas" aria-labelledby="ui-id-8" aria-selected="true" aria-expanded="true">
												<a href="/" className="ui-tabs-anchor">
													Natural gas
												</a>
											</li>
										</ul>
										<div id="crude-oil" aria-labelledby="ui-id-7" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style={{ display: "none" }}></div>
										<div id="natural-gas" aria-labelledby="ui-id-8" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="false" style={{ display: "block" }}>
											<div className="tab-content">
												<PrimaryLists />
											</div>
										</div>
									</div>
								</div>
							</Tabs.Tab>
						</Tabs>
					</div>
				</ContainerLayout>
			</Page>
		)
	}
}
export default ThemesTabs
