import React, { Component } from "react"
import { Tabs } from "@yazanaabed/react-tabs"
import Page from "./Page"

import LoremIpsumP from "./Placeholders/LoremIpsumP"
import LoremIpsumH1 from "./Placeholders/LoremIpsumH1"
import LoremIpsumH2 from "./Placeholders/LoremIpsumH2"
import LoremIpsumH3 from "./Placeholders/LoremIpsumH3"
import LoremIpsumH4 from "./Placeholders/LoremIpsumH4"
import LoremIpsumH5 from "./Placeholders/LoremIpsumH5"
import LoremIpsumH6 from "./Placeholders/LoremIpsumH6"

import ContainerWrapper from "./Containers/ContainerWrapper"
import ContainerLayout from "./Containers/ContainerLayout"

class BaseTypography extends Component {
	render() {
		return (
			<Page title="Coming Soon">
				<span className="base">
					<h1 className="_h1">Typography</h1>
					<h3 className="_h3">Header 1</h3>
				</span>
				<div className="tab-base">
					<Tabs
						activeTab={{
							id: "tab1"
						}}
					>
						<Tabs.Tab id="tab1" title="Primary">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="primary">
										<LoremIpsumH1 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab2" title="Primary-alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="primary-alt">
										<LoremIpsumH1 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab3" title="Secondary">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="secondary">
										<LoremIpsumH1 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab4" title="Secondary-Alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="secondary-alt">
										<LoremIpsumH1 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab5" title="Article">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="article">
										<LoremIpsumH1 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab6" title="Article-Alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="article-alt">
										<LoremIpsumH1 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
					</Tabs>
				</div>

				<h3 className="_h3">Header 2</h3>
				<div className="base">
					<Tabs
						activeTab={{
							id: "tab1"
						}}
					>
						<Tabs.Tab id="tab1" title="Primary">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="primary">
										<LoremIpsumH2 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab2" title="Primary-alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="primary-alt">
										<LoremIpsumH2 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab3" title="Secondary">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="secondary">
										<LoremIpsumH2 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab4" title="Secondary-Alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="secondary-alt">
										<LoremIpsumH2 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab5" title="Article">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="article">
										<LoremIpsumH2 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab6" title="Article-Alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="article-alt">
										<LoremIpsumH2 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
					</Tabs>
				</div>

				<h3 className="_h3">Header 3</h3>

				<div className="base">
					<Tabs
						activeTab={{
							id: "tab1"
						}}
					>
						<Tabs.Tab id="tab1" title="Primary">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="primary">
										<LoremIpsumH3 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab2" title="Primary-alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="primary-alt">
										<LoremIpsumH3 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab3" title="Secondary">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="secondary">
										<LoremIpsumH3 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab4" title="Secondary-Alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="secondary-alt">
										<LoremIpsumH3 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab5" title="Article">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="article">
										<LoremIpsumH3 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab6" title="Article-Alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="article-alt">
										<LoremIpsumH3 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
					</Tabs>
				</div>
				<h3 className="_h3">Header 4</h3>
				<div className="base">
					<Tabs
						activeTab={{
							id: "tab1"
						}}
					>
						<Tabs.Tab id="tab1" title="Primary">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="primary">
										<LoremIpsumH4 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab2" title="Primary-alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="primary-alt">
										<LoremIpsumH4 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab3" title="Secondary">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="secondary">
										<LoremIpsumH4 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab4" title="Secondary-Alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="secondary-alt">
										<LoremIpsumH4 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab5" title="Article">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="article">
										<LoremIpsumH4 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab6" title="Article-Alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="article-alt">
										<LoremIpsumH4 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
					</Tabs>
				</div>
				<h3 className="_h3">Header 5</h3>

				<div className="base">
					<Tabs
						activeTab={{
							id: "tab1"
						}}
					>
						<Tabs.Tab id="tab1" title="Primary">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="primary">
										<LoremIpsumH5 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab2" title="Primary-alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="primary-alt">
										<LoremIpsumH5 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab3" title="Secondary">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="secondary">
										<LoremIpsumH5 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab4" title="Secondary-Alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="secondary-alt">
										<LoremIpsumH5 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab5" title="Article">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="article">
										<LoremIpsumH5 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab6" title="Article-Alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="article-alt">
										<LoremIpsumH5 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
					</Tabs>
				</div>
				<h3 className="_h3">Header 6</h3>

				<div className="base">
					<Tabs
						activeTab={{
							id: "tab1"
						}}
					>
						<Tabs.Tab id="tab1" title="Primary">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="primary">
										<LoremIpsumH6 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab2" title="Primary-alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="primary-alt">
										<LoremIpsumH6 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab3" title="Secondary">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="secondary">
										<LoremIpsumH6 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab4" title="Secondary-Alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="secondary-alt">
										<LoremIpsumH6 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab5" title="Article">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="article">
										<LoremIpsumH6 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab6" title="Article-Alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="article-alt">
										<LoremIpsumH6 />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
					</Tabs>
				</div>

				<div className="base">
					<Tabs
						activeTab={{
							id: "tab1"
						}}
					>
						<Tabs.Tab id="tab1" title="Primary">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="primary">
										<LoremIpsumP />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab2" title="Primary-alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="primary-alt">
										<LoremIpsumP />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab3" title="Secondary">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="secondary">
										<LoremIpsumP />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab4" title="Secondary-Alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="secondary-alt">
										<LoremIpsumP />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab5" title="Article">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="article">
										<LoremIpsumP />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
						<Tabs.Tab id="tab6" title="Article-Alt">
							<ContainerWrapper>
								<ContainerLayout>
									<div className="article-alt">
										<LoremIpsumP />
									</div>
								</ContainerLayout>
							</ContainerWrapper>
						</Tabs.Tab>
					</Tabs>
				</div>
				{/*
				<h3 className="_h3">Headers - Primary</h3>
				<Legend />
				<ContainerWrapper>
					<ContainerLayout>
						<div className="l-row l-two-col-right-narrow">
							<div className="l-col">
								<div className="primary">
									<span className="h1_module-bg">
										<span className="h1_border">
											<h1>.primary h1 - The five boxing wizards jump quickly</h1>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
									<span className="h2_module-bg">
										<span className="h2_border">
											<h2>.primary h2 - The five boxing wizards jump quickly</h2>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
									<span className="h3_module-bg">
										<span className="h3_border">
											<h3>.primary h3 - The five boxing wizards jump quickly</h3>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
									<span className="h4_module-bg">
										<span className="h4_border">
											<h4>.primary h4 - The five boxing wizards jump quickly</h4>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
									<span className="h5_module-bg">
										<span className="h5_border">
											<h5>.primary h5 - The five boxing wizards jump quickly</h5>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
									<span className="h6_module-bg">
										<span className="h6_border">
											<h6>.primary h6 - The five boxing wizards jump quickly</h6>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
								</div>
							</div>
							<div className="l-col">
								<div className="primary-alt">
									<span className="h1_module-bg">
										<span className="h1_border">
											<h1>Primary-Alt h1</h1>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu.</p>
									<span className="h2_module-bg">
										<span className="h2_border">
											<h2>Primary-Alt h2</h2>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu.</p>
									<span className="h3_module-bg">
										<span className="h3_border">
											<h3>Primary-Alt h3</h3>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu.</p>
									<span className="h4_module-bg">
										<span className="h4_border">
											<h4>Primary-Alt h4</h4>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu.</p>
									<span className="h5_module-bg">
										<span className="h5_border">
											<h5>Primary-Alt h5</h5>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu.</p>
									<span className="h6_module-bg">
										<span className="h6_border">
											<h6>Primary-Alt h6</h6>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu.</p>
								</div>
							</div>
						</div>
					</ContainerLayout>
				</ContainerWrapper>

				<h3 className="_h3">Headers - Secondary</h3>
				<Legend />
				<ContainerWrapper>
					<ContainerLayout>
						<div className="l-row l-two-col-right-narrow">
							<div className="l-col">
								<div className="secondary">
									<span className="h1_module-bg">
										<span className="h1_border">
											<h1>Secondary h1 - The five boxing wizards jump quickly</h1>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
									<span className="h2_module-bg">
										<span className="h2_border">
											<h2>secondary h2 - The five boxing wizards jump quickly</h2>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
									<span className="h3_module-bg">
										<span className="h3_border">
											<h3>Secondary h3 - The five boxing wizards jump quickly</h3>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
									<span className="h4_module-bg">
										<span className="h4_border">
											<h4>Secondary h4 - The five boxing wizards jump quickly</h4>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
									<span className="h5_module-bg">
										<span className="h5_border">
											<h5>Secondary h5 - The five boxing wizards jump quickly</h5>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
									<span className="h6_module-bg">
										<span className="h6_border">
											<h6>Scondary h6 - The five boxing wizards jump quickly</h6>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
								</div>
							</div>
							<div className="l-col">
								<div className="secondary-alt">
									<span className="h1_module-bg">
										<span className="h1_border">
											<h1>Secondary-Alt h1</h1>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu.</p>
									<span className="h2_module-bg">
										<span className="h2_border">
											<h2>Secondary-Alt h2</h2>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu.</p>
									<span className="h3_module-bg">
										<span className="h3_border">
											<h3>Secondary-Alt h3</h3>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu.</p>
									<span className="h4_module-bg">
										<span className="h4_border">
											<h4>Secondary-Alt h4</h4>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu.</p>
									<span className="h5_module-bg">
										<span className="h5_border">
											<h5>Secondary-Alt h5</h5>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu.</p>
									<span className="h6_module-bg">
										<span className="h6_border">
											<h6>Secondary-Alt h6</h6>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu.</p>
								</div>
							</div>
						</div>
					</ContainerLayout>
				</ContainerWrapper>

				<h3 className="_h3">Article</h3>
				<Legend />
				<ContainerWrapper>
					<ContainerLayout>
						<div className="l-row l-two-col-right-narrow">
							<div className="l-col">
								<div className="article">
									<span className="h1_module-bg">
										<span className="h1_border">
											<h1>Article - The five boxing wizards jump quickly</h1>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
									<span className="h2_module-bg">
										<span className="h2_border">
											<h2>Article - The five boxing wizards jump quickly</h2>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
									<span className="h3_module-bg">
										<span className="h3_border">
											<h3>Article - The five boxing wizards jump quickly</h3>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
									<span className="h4_module-bg">
										<span className="h4_border">
											<h4>Article - The five boxing wizards jump quickly</h4>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
									<span className="h5_module-bg">
										<span className="h5_border">
											<h5>Article - The five boxing wizards jump quickly</h5>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
									<span className="h6_module-bg">
										<span className="h6_border">
											<h6>Article - The five boxing wizards jump quickly</h6>
										</span>
									</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada, dolor tellus finibus leo, vitae justo nulla ac neque.</p>
								</div>
							</div>
							<div className="l-col"></div>
						</div>
				*/}
			</Page>
		)
	}
}

export default BaseTypography
