import React, { Component } from "react"
import Page from "./Page"
import { Tabs } from "@yazanaabed/react-tabs"
import ProtoLayouts from "./Layouts/ProtoLayouts"
import ProtoNested from "./Layouts/ProtoNested"
import ProtoUnused from "./Layouts/ProtoUnused"
import Architecture from "./Layouts/Architecture"

class LayoutsHome extends Component {
	render() {
		return (
			<Page title="Layouts Home">
				<span className="layouts">
					<h1 className="_h1">Page Layouts</h1>

					<Architecture />

					<h3 className="_h3">Naming Conventions</h3>
					<ul className="_ul">
						<li className="_li">All style naming conventions use classes and not ID selectors.</li>
						<li className="_li">All class names are lowercase and hyphenated.</li>
						<li className="_li">
							Layout class names begin with a <code>l-</code>.
						</li>
					</ul>
					{/*<h3 className="_h3">Introduction</h3>
		            <div className="notice">
            <p>Notice that on the upper right of every page of this style-guide there's a small box with the resolution defined media-query type that you are viewing this page.</p>
          </div>
		  
		            <p className="_p">
            Page layouts have two required definitions,
            <p className="_p">
              Page layouts have two required definitions, <a to="/style-guide/layouts/home">Layouts Home</a>, <a to="/style-guide/layouts/default-layouts">Default Layouts</a>, <a to="/style-guide/layouts/rows">Rows</a>, <a to="/style-guide/layouts/nested-rows">Nested Rows</a> and <a to="/style-guide/layouts/full-page">Full Page</a>.
            </p>{" "}
            You should be familiar with both in order to use them correctly. Below are the available page layouts:
          </p>
          <h2 className="_h2">Examples</h2>

          <div className="_example">
            <p className="_p">Bad CSS structure might look something like this:</p>
            <pre>
              <code className="html">
                <div id="Row"></div> <div className="Row_Header"></div>
                <div className="row"></div>
              </code>
            </pre>
          </div>
          <div className="_example">
            <p className="_p">Good CSS structure might look something like this:</p>
            <pre>
              <code className="html">
                <div className="l-row l-header"></div>
                <div className="l-col"> </div>
              </code>
            </pre>
          </div>

          <h2 className="_h2">The Structure</h2>
          <p className="_p">
            Page layouts have two required definitions, <a to="/style-guide/layouts/home">Layouts Home</a>, <a to="/style-guide/layouts/default-layouts">Default Layouts</a>, <a to="/style-guide/layouts/rows">Rows</a>, <a to="/style-guide/layouts/nested-rows">Nested Rows</a> and <a to="/style-guide/layouts/full-page">Full Page</a>.
		  </p>
	*/}
				</span>
				<div className="tab-layouts">
					<Tabs
						activeTab={{
							id: "tab1"
						}}
					>
						<Tabs.Tab id="tab1" title="Page Layouts">
							<div style={{ padding: 10 }}>
								<ProtoLayouts />
							</div>
						</Tabs.Tab>
						<Tabs.Tab id="tab2" title="Module Layouts">
							<div style={{ padding: 10 }}>
								<ProtoNested />
							</div>
						</Tabs.Tab>
						<Tabs.Tab id="tab3" title="Unused Layouts">
							<div style={{ padding: 10 }}>
								<ProtoUnused />
							</div>
						</Tabs.Tab>
					</Tabs>
				</div>
			</Page>
		)
	}
}
export default LayoutsHome
