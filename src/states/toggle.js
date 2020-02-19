import React, { Component } from "react";
import Top from "../assets/components/Top.js";
import Legend from "../assets/components/Legend.js";
import ExamplePlaceholder from "../assets/examples/Placeholder.js";

class Toggle extends Component {
	render() {
		return (
			<div class="right-content">
				<h1 className="_h1">Reusable Toggles</h1>
				<h2 className="_h2">Expand/Collapse Toggle</h2>
				<p className="_p">
					The Expand/Collapse Toggle functions like the accordion, can
					be styled like the accordion, and can replace the accordion,
					but is not the accordion which is used on various pages. So
					while this toggle can be used as an accordion, it was
					created as a expand-collapse toggle module.
				</p>
				<ExamplePlaceholder />
				<p className="_p">
					The Expand/Collapse Toggle is not styled so you can apply
					any style you want. Additionally, the script can be activate
					by using any element that you can attach a click function to
					(anchor, button, title bar).
				</p>
				<h3 className="_h3">Expand/Collapse Accordion</h3>
				<ExamplePlaceholder />
				<Top />
				<h3 className="_h3">Vertical Toggle</h3>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="l-col">
								<div className="expand-collapse-toggle-vertical-slide">
									<a
										className="toggle expand-collapse"
										href=""
									>
										<span className="active-text">
											Hide
										</span>
										<span className="inactive-text">
											Show
										</span>
									</a>
									<div className="expand-collapse-content">
										<div className="primary">
											<span className="_module-bg">
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit.
												Donec lorem massa, semper nec
												eros a, lacinia porttitor nunc.
												Phasellus ex dolor, ultricies eu
												ornare ut, placerat non sapien.
												Suspendisse sagittis risus eu
												sem suscipit sodales. Vivamus
												ligula turpis, aliquam et
												maximus vel, tempor sed lectus.
												Mauris quis posuere massa. Ut
												quis diam sed mi placerat
												efficitur eu sed felis. Aliquam
												ipsum metus, bibendum vel ipsum
												sed, lobortis fringilla sem.
												Vestibulum ut odio id nulla
												commodo dignissim. Proin a
												pharetra tellus. Lorem ipsum
												dolor sit amet, consectetur
												adipiscing elit. Donec lorem
												massa, semper nec eros a,
												lacinia porttitor nunc.
												Phasellus ex dolor, ultricies eu
												ornare ut, placerat non sapien.
												Suspendisse sagittis risus eu
												sem suscipit sodales. Vivamus
												ligula turpis, aliquam et
												maximus vel, tempor sed lectus.
												Mauris quis posuere massa. Ut
												quis diam sed mi placerat
												efficitur eu sed felis. Aliquam
												ipsum metus, bibendum vel ipsum
												sed, lobortis fringilla sem.
												Vestibulum ut odio id nulla
												commodo dignissim. Proin a
												pharetra tellus.
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
				<h3 className="_h3">
					Expand/Collapse Content (button below content)
				</h3>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row header l-full-width-col">
							<div className="l-col">
								<div className="expand-collapse-content-above-toggle-vertical-slide"></div>
							</div>
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
				<h3 className="_h3">Show/Hide Toggle</h3>
				<p className="_p">
					The Show/Hide Toggle is not styled so you can apply any
					style you want. Additionally, the script can be activate by
					using any element that you can attach a click function to
					(anchor, button, title bar).
				</p>
				<ExamplePlaceholder />
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="l-col">
								<div className="show-hide-toggle">
									<a className="toggle show-hide" href="">
										<span className="active-text">
											Hide
										</span>
										<span className="inactive-text">
											Show
										</span>
									</a>
									<div className="show-hide-content">
										<div className="primary-fixed">
											<span className="_module-bg">
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit.
												Donec lorem massa, semper nec
												eros a, lacinia porttitor nunc.
												Phasellus ex dolor, ultricies eu
												ornare ut, placerat non sapien.
												Suspendisse sagittis risus eu
												sem suscipit sodales. Vivamus
												ligula turpis, aliquam et
												maximus vel, tempor sed lectus.
												Mauris quis posuere massa. Ut
												quis diam sed mi placerat
												efficitur eu sed felis. Aliquam
												ipsum metus, bibendum vel ipsum
												sed, lobortis fringilla sem.
												Vestibulum ut odio id nulla
												commodo dignissim. Proin a
												pharetra tellus. Lorem ipsum
												dolor sit amet, consectetur
												adipiscing elit. Donec lorem
												massa, semper nec eros a,
												lacinia porttitor nunc.
												Phasellus ex dolor, ultricies eu
												ornare ut, placerat non sapien.
												Suspendisse sagittis risus eu
												sem suscipit sodales. Vivamus
												ligula turpis, aliquam et
												maximus vel, tempor sed lectus.
												Mauris quis posuere massa. Ut
												quis diam sed mi placerat
												efficitur eu sed felis. Aliquam
												ipsum metus, bibendum vel ipsum
												sed, lobortis fringilla sem.
												Vestibulum ut odio id nulla
												commodo dignissim. Proin a
												pharetra tellus.
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
				<h2 className="_h2">Show/Hide Toggle (two elements)</h2>
				<p className="_p">
					The Show/Hide Toggle is not styled so you can apply any
					style you want. Additionally, the script can be activate by
					using any element that you can attach a click function to
					(anchor, button, title bar).
				</p>
				<ExamplePlaceholder />
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-right-wide">
							<div className="l-col">
								<a className="policy toggle show-hide" href="">
									<span className="active-text">
										Hide our feedback policy.
									</span>
									<span className="inactive-text">
										Show our feedback policy.
									</span>
								</a>
							</div>
							<div className="l-col">
								<div className="show-hide-content">
									{/* style="{display: block}" */}
									<p>Layer 1</p>
								</div>
								<div className="show-hide-content">
									{/* style="{display: none}" */}

									<p>Layer 2</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
			</div>
		);
	}
}
export default Toggle;
