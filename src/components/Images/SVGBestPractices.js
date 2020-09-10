import React, { Component } from "react"

class SVGBestPractices extends Component {
	render() {
		return (
			<>
				<h2>
					<a href="svg-accessibility" id="svg-accessibility"></a>SVG Accessibility
				</h2>
				<p className="_p">
					<span>Implementing images as SVGs can solve accessibility challenges related to pixelated images and zooming. However, ensuring that SVG images are accessible requires some extra care.</span>
				</p>
				<p className="_p">
					SVG images implemented as <code>&lt;img&gt;</code> tags should also include the <code>role="image"</code>&nbsp;attribute.
				</p>
				<p className="_p">
					SVG images implemented using the <code>&lt;svg&gt;</code> element should include the <code>&lt;title&gt;</code> and <code>&lt;desc&gt;</code>.
				</p>
				<p className="_p">
					<span>References for SVG accessibility:</span>
				</p>
				<ul className="_ul">
					<li className="_li">
						<a href="https://developer.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/" className="ext">
							Using ARIA to enhance SVG accessibility (The Paciello Group)
							<span className="ext">
								<span className="element-invisible"> (link is external)</span>
							</span>
						</a>
					</li>
					<li className="_li">
						<a href="https://simplyaccessible.com/article/7-solutions-svgs/" className="ext">
							7 solutions for creating more accessible SVGs (Simply Accessible)
							<span className="ext">
								<span className="element-invisible"> (link is external)</span>
							</span>
						</a>
					</li>
					<li className="_li">
						<a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title" className="ext">
							The <code>&lt;title&gt;</code> element (Mozilla)
							<span className="ext">
								<span className="element-invisible"> (link is external)</span>
							</span>
						</a>
					</li>
					<li className="_li">
						<a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/desc" className="ext">
							The <code>&lt;desc&gt;</code> element (Mozilla)
							<span className="ext">
								<span className="element-invisible"> (link is external)</span>
							</span>
						</a>
					</li>
				</ul>
			</>
		)
	}
}

export default SVGBestPractices
