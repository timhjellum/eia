import React, { Component } from "react"

class HiDefinitionImages extends Component {
	render() {
		return (
			<>
				<h2 className="_h2">Hi-Definition Images</h2>
				<h3 className="_h3">Method 2: 1x and 2x Display Types.</h3>
				<p className="_p">
					When should You Make Both 1x and 2x Graphics?
					<br />
					Most (if not all) of today’s mobile phones and tablets have 2x or higher resolution screens, so the non-@2x are optional for the image with the media queries of 479px and 800px. However, if the procedure is automated, the 1x images are best practices.
					<br />
					While most laptops and desktops have 1x screens, it's best to create @2x versions.
				</p>
				<p className="_p">The responsive code that has the minimal number of image to create (3 to 6) and is the most simple to implement.</p>
				{/*
				<pre>
					<code>
						<picture>
							<source media="(min-width: 479px)" srcset="images/image-name-575.jpg, images/image-name-1150@2x.jpg 2x" />
							<source media="(min-width: 800px)" srcset="images/image-name-758.jpg, images/image-name-1516@2x.png 2x" />
							<img src="images/image-name-(a).jpg" srcset="images/image-name-(b)@2x.png 2x" alt="" />
						</picture>
					</code>
				</pre>
				<pre>
					<code className="html">a = the size of the image (desired) b = (a + a)</code>
				</pre>

				<h3 className="_h3">Method 2: 1x and 2x Display Types.</h3>
				<div className="l-row l-two-col-right">
					<div className="l-col">
						<div className="article">
							<picture>
								<source media="(min-width: 479px)" srcset="../assets/images/image-name-592@1x.jpg, ../assets/images/image-name-1184@2x.jpg 2x" />
								<source media="(min-width: 800px)" srcset="../assets/images/image-name-758@1x.jpg, ../assets/images/image-name-1516@2x.png 2x" />
								<img src="../assets/images/image-name-455@1x.jpg" srcset="../assets/images/image-name-910@2x.jpg 2x" alt="" className="blizzard" />
							</picture>
						</div>
					</div>
					<div className="l-col">
						<picture>
							<source media="(min-width: 479px)" srcset="../assets/images/image-name-592@1x.jpg, ../assets/images/image-name-1184@2x.jpg 2x" />
							<source media="(min-width: 800px)" srcset="../assets/images/image-name-758@1x.jpg, ../assets/images/image-name-1516@2x.png 2x" />
							<img src="../assets/images/image-name-455@1x.jpg" srcset="../assets/images/image-name-910@2x.jpg 2x" alt="" className="blizzard" />
						</picture>
					</div>
				</div>
*/}

				<p className="_p">
					The <code>&lt;picture&gt;</code> element is currently available Chrome 38. Try it out with screen emulation in the Chrome DevTools.
				</p>
			</>
		)
	}
}

export default HiDefinitionImages
