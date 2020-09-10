import React, { Component } from "react"
import Page from "./Page"
import Top from "./Placeholders/Top.js"
import Legend from "./Placeholders/Legend"
import Placeholder from "./Placeholders/Placeholder"
import ContainerWrapper from "./Containers/ContainerWrapper"
import ContainerLayout from "./Containers/ContainerLayout"

class StatesToggle extends Component {
	render() {
		return (
			<Page title="Toggle or Show/Hide Elements">
				<span className="states">
					<h1 className="_h1">Toggle or Show/Hide Elements</h1>

					<h2 className="_h2">Expand/Collapse Toggle</h2>

					<p className="_p">The Expand/Collapse Toggle functions like the accordion, can be styled like the accordion, and can replace the accordion, but is not the accordion which is used on various pages. So while this toggle can be used as an accordion, it was created as a expand-collapse toggle module.</p>
					<Placeholder />
					<p className="_p">The Expand/Collapse Toggle is not styled so you can apply any style you want. Additionally, the script can be activate by using any element that you can attach a click function to (anchor, button, title bar).</p>
					<h3 className="_h3">Expand/Collapse Accordion</h3>
					<Placeholder />
					<Top />
					<h3 className="_h3">Vertical Toggle</h3>
					<Legend />
					<ContainerWrapper>
						<ContainerLayout>
							<div className="l-row l-full-width-col">
								<div className="l-col">
									<div className="expand-collapse-toggle-vertical-slide">
										<a href="/" className="toggle expand-collapse">
											<span className="active-text">Hide</span>
											<span className="inactive-text">Show</span>
										</a>
										<div className="expand-collapse-content">
											<div className="primary">
												<span className="_module-bg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</ContainerLayout>
					</ContainerWrapper>
					<Placeholder />
					<Top />
					<h3 className="_h3">Expand/Collapse Content (button below content)</h3>
					<Legend />
					<ContainerWrapper>
						<ContainerLayout>
							<div className="l-row header l-full-width-col">
								<div className="l-col">
									<div className="expand-collapse-content-above-toggle-vertical-slide"></div>
								</div>
							</div>
						</ContainerLayout>
					</ContainerWrapper>
					<Placeholder />
					<Top />
					<h3 className="_h3">Show/Hide Toggle</h3>
					<p className="_p">The Show/Hide Toggle is not styled so you can apply any style you want. Additionally, the script can be activate by using any element that you can attach a click function to (anchor, button, title bar).</p>
					<Placeholder />
					<Legend />
					<ContainerWrapper>
						<ContainerLayout>
							<div className="l-row l-full-width-col">
								<div className="l-col">
									<div className="show-hide-toggle">
										<a href="/" className="toggle show-hide">
											<span className="active-text">Hide</span>
											<span className="inactive-text">Show</span>
										</a>
										<div className="show-hide-content">
											<div className="primary-fixed">
												<span className="_module-bg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</ContainerLayout>
					</ContainerWrapper>
					<Placeholder />
					<Top />
					<h2 className="_h2">Show/Hide Toggle (two elements)</h2>
					<p className="_p">The Show/Hide Toggle is not styled so you can apply any style you want. Additionally, the script can be activate by using any element that you can attach a click function to (anchor, button, title bar).</p>
					<Placeholder />
					<Legend />
					<ContainerWrapper>
						<ContainerLayout>
							<div className="l-row l-two-col-right-wide">
								<div className="l-col">
									<a href="/" className="policy toggle show-hide">
										<span className="active-text">Hide our feedback policy.</span>
										<span className="inactive-text">Show our feedback policy.</span>
									</a>
								</div>
								<div className="l-col">
									<div className="show-hide-content" style={{ display: "block" }}>
										<p>Layer 1</p>
									</div>
									<div className="show-hide-content" style={{ display: "none" }}>
										<p>Layer 2</p>
									</div>
								</div>
							</div>
						</ContainerLayout>
					</ContainerWrapper>
					<Placeholder />
					<Top />
				</span>
			</Page>
		)
	}
}
export default StatesToggle
