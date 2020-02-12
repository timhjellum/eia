import React, { Component } from "react";
import Top from "../../assets/components/Top.js";
import Legend from "../../assets/components/Legend.js";
import ExamplePlaceholder from "../../assets/examples/Placeholder.js";

class ModulesAccordionAllOpen extends Component {
	render() {
		return (
			<li className="section-container">
				<h3 className="_h3">All Open</h3>
				<p>
					Add <code>all-open</code> to the accordion div
				</p>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div className="l-row l-two-col-right-narrow">
							<div className="l-col">
								<span className="expand-collapse-container">
									<span className="ico expand">
										<span>Expand all</span>
									</span>
									<span className="ico collapse">
										<span>Collapse all</span>
									</span>
								</span>
								<div className="accordion all-open">
									<h3>Lorem ipsum dolor sit amet</h3>
									<div className="content">
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit. Nullam
											ut nibh purus. In justo leo,
											hendrerit a libero pellentesque,
											consectetur aliquet libero. Nullam
											aliquam mauris vel erat interdum
											finibus. Nam nec nisl commodo lorem
											maximus scelerisque eu vel augue. In
											vitae vehicula dui. Sed porttitor
											nisi vitae sem mattis efficitur.
											Donec ut quam risus. Vestibulum nec
											arcu in purus venenatis pretium non
											vitae elit. Nunc hendrerit est id
											nisl egestas finibus. Cras non
											iaculis velit, nec congue orci.
											Proin vitae molestie sapien, eget
											cursus sapien. Nam posuere tincidunt
											metus, nec lobortismassa feugiat
											pulvinar.
										</p>
									</div>
									<h3>Lorem ipsum dolor sit amet</h3>
									<div className="content">
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit. Nullam
											ut nibh purus. In justo leo,
											hendrerit a libero pellentesque,
											consectetur aliquet libero. Nullam
											aliquam mauris vel erat interdum
											finibus. Nam nec nisl commodo lorem
											maximus scelerisque eu vel augue. In
											vitae vehicula dui. Sed porttitor
											nisi vitae sem mattis efficitur.
											Donec ut quam risus. Vestibulum nec
											arcu in purus venenatis pretium non
											vitae elit. Nunc hendrerit est id
											nisl egestas finibus. Cras non
											iaculis velit, nec congue orci.
											Proin vitae molestie sapien, eget
											cursus sapien. Nam posuere tincidunt
											metus, nec lobortismassa feugiat
											pulvinar.
										</p>
									</div>
									<h3>Lorem ipsum dolor sit amet</h3>
									<div className="content">
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit. Nullam
											ut nibh purus. In justo leo,
											hendrerit a libero pellentesque,
											consectetur aliquet libero. Nullam
											aliquam mauris vel erat interdum
											finibus. Nam nec nisl commodo lorem
											maximus scelerisque eu vel augue. In
											vitae vehicula dui. Sed porttitor
											nisi vitae sem mattis efficitur.
											Donec ut quam risus. Vestibulum nec
											arcu in purus venenatis pretium non
											vitae elit. Nunc hendrerit est id
											nisl egestas finibus. Cras non
											iaculis velit, nec congue orci.
											Proin vitae molestie sapien, eget
											cursus sapien. Nam posuere tincidunt
											metus, nec lobortismassa feugiat
											pulvinar.
										</p>
									</div>
								</div>
							</div>
							<div className="l-col">
								<div className="secondary">
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Nullam ut nibh purus.
										In justo leo, hendrerit a libero
										pellentesque, consectetur aliquet
										libero. Nullam aliquam mauris vel erat
										interdum finibus. Nam nec nisl commodo
										lorem maximus scelerisque eu vel augue.
										In vitae vehicula dui. Sed porttitor
										nisi vitae sem mattis efficitur. Donec
										ut quam risus. Vestibulum nec arcu in
										purus venenatis pretium non vitae elit.
										Nunc hendrerit est id nisl egestas
										finibus. Cras non iaculis velit, nec
										congue orci. Proin vitae molestie
										sapien, eget cursus sapien. Nam posuere
										tincidunt metus, nec lobortismassa
										feugiat pulvinar.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Legend />
				<ExamplePlaceholder />
				<Top />
			</li>
		);
	}
}
export default ModulesAccordionAllOpen;
