import React, { Component } from "react"

import { Tabs } from "@yazanaabed/react-tabs"
import Page from "./Page"
import Legend from "./Placeholders/Legend"
import ExampleLayoutsRowDefault from "./Layouts/ExampleLayoutsRowDefault"
import ExampleLayoutsRowHeader from "./Layouts/ExampleLayoutsRowHeader"
import LoremIpsum from "./Placeholders/LoremIpsum"
import ContainerWrapper from "./Containers/ContainerWrapper"
import ContainerLayout from "./Containers/ContainerLayout"

class LayoutsRows extends Component {
	render() {
		return (
			<Page title="Layout Row Examples">
				<span className="layouts">
					<h1 className="_h1">Layout Row Examples</h1>
					<p className="_p">
						There's only two types of row class names, <code>l-row</code> and <code>l-row header</code>. The difference it that the default row adds a <span className="_row">22px</span> space on the left and sometimes has a <span className="_col">22px</span> space on the right (based on the type of content). As a developer or content editor, always use the <code>l-row</code> as the other is reserved for special applications.
					</p>
					{/*
		  <div className="_example">
            <p className="_p">Good CSS structure might look something like this:</p>
            <pre>
              <code className="html">&lt;!-- default row --&gt; &lt;div className="l-row"&gt;&lt;/div&gt;</code>
            </pre>
          </div>
          <h3 className="_h3">Row (Default)</h3>
          <ul className="live-examples">
            <li className="_li">
              <strong>Live example(s)</strong>
            </li>
            <li className="_li">
              Everything below the 'PETROLEUM and OTHER LIQUIDS' section of <a to="https://www.eia.gov/petroleum/">https://www.eia.gov/petroleum/</a>
            </li>
          </ul>		  
		  */}
				</span>
				<div className="tab-layouts">
					<Tabs
						activeTab={{
							id: "tab1"
						}}
					>
						<Tabs.Tab id="tab1" title="Default Row">
							<div style={{ padding: 10 }}>
								<ContainerWrapper>
									<ContainerLayout>
										<div className="l-row l-full-width-col">
											<LoremIpsum />
										</div>
									</ContainerLayout>
								</ContainerWrapper>
								<Legend />
								<ExampleLayoutsRowDefault />
							</div>
						</Tabs.Tab>
						<Tabs.Tab id="tab2" title="Header Row">
							<div style={{ padding: 10 }}>
								<h3 className="_h3">Header Row</h3>
								<ul className="live-examples">
									<li className="_li">
										<strong>Live example(s)</strong>
									</li>
									<li></li>
									<li>
										The 'PETROLEUM and OTHER LIQUIDS' section of <a to="https://www.eia.gov/petroleum/">https://www.eia.gov/petroleum/</a>
									</li>
								</ul>
								<ContainerWrapper>
									<ContainerLayout>
										<div className="l-row header l-full-width-col">
											<LoremIpsum />
										</div>
									</ContainerLayout>
								</ContainerWrapper>
								<Legend />
								<ExampleLayoutsRowHeader />
							</div>
						</Tabs.Tab>
					</Tabs>
				</div>
			</Page>
		)
	}
}
export default LayoutsRows
