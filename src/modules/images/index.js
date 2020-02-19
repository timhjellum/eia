import React, { Component } from "react";

import Top from "../../assets/components/Top.js";
import Legend from "../../assets/components/Legend.js";
import ExamplePlaceholder from "../../assets/examples/Placeholder.js";

class ModulesImages extends Component {
	render() {
		return (
			<div class="right-content">
				<h1 className="_h1">Images</h1>
				<p className="_p">
					Please refer to the{" "}
					<a href="fancybox.html">FancyBox Modal section</a> for modal
					functionality of images.
				</p>
				<h3 className="_h3">Responsive Image</h3>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-right">
							<div className="l-col">
								<div className="image-container">
									<img
										src="../assets/images/main.png"
										alt="Bab el-Mandeb Strait"
										className="responsive"
									/>
								</div>
							</div>
							<div className="l-col">
								<div className="image-container">
									<img
										src="../assets/images/main.png"
										alt="Bab el-Mandeb Strait"
										className="responsive"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<ExamplePlaceholder />
				<Top />
				<h3 className="_h3">Responsive Image with a Frame</h3>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-right">
							<div className="l-col">
								<div className="image-container">
									<img
										src="../assets/images/responsive-image.jpg"
										alt=""
										className="responsive frame"
									/>
								</div>
							</div>
							<div className="l-col">
								<div className="image-container">
									<img
										src="../assets/images/responsive-image.jpg"
										alt=""
										className="responsive frame"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<ExamplePlaceholder />
				<Top />
				<h1 className="_h1">Images</h1>
				<h3 className="_h3">
					Responsive Images for 1x and 2x Display Types.
				</h3>
				<p className="_p">
					When should You Make Both 1x and 2x Graphics?
					<br />
					Most (if not all) of today’s mobile phones and tablets have
					2x or higher resolution screens, so the non-@2x are optional
					for the image with the media queries of 479px and 800px.
					However, if the procedure is automated, the 1x images are
					best practices.
					<br />
					While most laptops and desktops have 1x screens, it's best
					to create @2x versions.
				</p>
				<p className="_p">
					The responsive code that has the minimal number of image to
					create (3 to 6) and is the most simple to implement.
				</p>

				<pre>
					<code>
						<picture>
							<source
								media="(min-width: 479px)"
								srcset="images/image-name-575.jpg, images/image-name-1150@2x.jpg 2x"
							/>
							<source
								media="(min-width: 800px)"
								srcset="images/image-name-758.jpg, images/image-name-1516@2x.png 2x"
							/>
							<img
								src="images/image-name-(a).jpg"
								srcset="images/image-name-(b)@2x.png 2x"
								alt=""
							/>
						</picture>
					</code>
				</pre>
				<pre>
					<code className="html">
						a = the size of the image (desired) b = (a + a)
					</code>
				</pre>

				<p className="_p">
					Assuming the image is full width these common layouts
					provide the a variable.
				</p>
				<div className="_example">
					<a
						href="../layouts/examples.html#l-two-col-left"
						className="prototype-link l-two-col-left"
					>
						<div className="prototype-thumb">
							<div className="prototype-column-container w33">
								<div className="prototype-column prototype-secondary"></div>
							</div>
							<div className="prototype-column-container w66">
								<div className="prototype-column">
									<div className="image"></div>
								</div>
							</div>
						</div>
						{/* Two Columns (33% 66%)<br /><code>l-row l-two-col-left"</code> */}
					</a>
					<a
						href="../layouts/examples.html#l-two-col-right"
						className="prototype-link l-two-col-right"
					>
						<div className="prototype-thumb">
							<div className="prototype-column-container w66">
								<div className="prototype-column">
									<div className="image"></div>
								</div>
							</div>
							<div className="prototype-column-container w33">
								<div className="prototype-column prototype-secondary"></div>
							</div>
						</div>
						{/*Two Columns (66% 33%)<br /><code>l-row l-two-col-right</code> */}
					</a>
					<p className="_p">
						l-two-col-(left/right) main column width = 591.05
					</p>
				</div>
				<div className="_example">
					<a
						href="#l-two-col-left-narrow"
						className="prototype-link l-two-col-left-narrow"
					>
						<div className="prototype-thumb">
							<div className="prototype-column-container w25">
								<div className="prototype-column prototype-secondary"></div>
							</div>
							<div className="prototype-column-container w75">
								<div className="prototype-column">
									<div className="image"></div>
								</div>
							</div>
						</div>
						{/*Two Columns (25% 75%)<br /><code>l-row l-two-col-left-narrow</code> */}
					</a>
					<a
						href="#l-two-col-right-narrow"
						className="prototype-link l-two-col-right-narrow"
					>
						<div className="prototype-thumb">
							<div className="prototype-column-container w75">
								<div className="prototype-column">
									<div className="image"></div>
								</div>
							</div>
							<div className="prototype-column-container w25">
								<div className="prototype-column prototype-secondary"></div>
							</div>
						</div>
						{/*Two Columns (75% 25%)<br /><code>l-row l-two-col-right-narrow</code> */}
					</a>
					<p className="_p">
						l-two-col-(left/right)-narrow main column width = 514.88
					</p>
				</div>
				<div className="_example">
					<a
						href="#l-full-width-col"
						className="prototype-link l-full-width-col"
					>
						<div className="prototype-thumb">
							<div className="prototype-column-container w100">
								<div className="prototype-column">
									<div className="image"></div>
								</div>
							</div>
						</div>
						{/*Full-Width Column<br /><code>l-row l-full-width-col</code> */}
					</a>
					<p className="_p">
						l-full-width-col main column width = 934
					</p>
				</div>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-right">
							<div className="l-col">
								<div className="article">
									{/*start module */}
									{/*start module */}
									{/*start module */}
									<picture>
										<source
											media="(min-width: 479px)"
											srcset="../assets/images/image-name-592@1x.jpg, ../assets/images/image-name-1184@2x.jpg 2x"
										/>
										<source
											media="(min-width: 800px)"
											srcset="../assets/images/image-name-758@1x.jpg, ../assets/images/image-name-1516@2x.png 2x"
										/>
										<img
											src="../assets/images/image-name-455@1x.jpg"
											srcset="../assets/images/image-name-910@2x.jpg 2x"
											alt=""
											style="margin: 0 auto;"
										/>
									</picture>
									{/*end module */}
									{/*end module */}
									{/*end module */}
								</div>
							</div>
							<div className="l-col">
								<picture>
									<source
										media="(min-width: 479px)"
										srcset="../assets/images/image-name-592@1x.jpg, ../assets/images/image-name-1184@2x.jpg 2x"
									/>
									<source
										media="(min-width: 800px)"
										srcset="../assets/images/image-name-758@1x.jpg, ../assets/images/image-name-1516@2x.png 2x"
									/>
									<img
										src="../assets/images/image-name-455@1x.jpg"
										srcset="../assets/images/image-name-910@2x.jpg 2x"
										alt=""
										style="margin: 0 auto;"
									/>
								</picture>
							</div>
						</div>
					</div>
				</div>

				<p className="_p">
					The <code>&lt;picture&gt;</code> element is currently
					available Chrome 38. Try it out with screen emulation in the
					Chrome DevTools.
				</p>

				<ExamplePlaceholder />
				<Top />
			</div>
		);
	}
}

export default ModulesImages;
