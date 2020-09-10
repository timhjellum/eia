import React, { Component } from "react"
import ContainerLayout from "../Containers/ContainerLayout"

class ImageAlt extends Component {
	render() {
		return (
			<>
				<h4 className="_h4">Alt tags best practices</h4>
				<p className="_accessibility _p">
					<strong>
						<span className="_accessibility-requirement">Accessibility requirement: </span>
					</strong>
				</p>
				<p className="_accessibility _p">
					All image tags must have <code>alt</code> Attributes. If an image does not have an alt attribute, a screen reader may announce the image’s src attribute instead. So, all images must have an alt attribute. When an image does not have alt text, provide a null alt attribute, like so:
				</p>
				<p className="_accessibility _p">
					Understanding what makes good <code>alt</code> text is subtle and important. It should be brief: less than 250 characters. It should convey the purpose of the image, not describe the image. When writing <code>alt</code> text, consider what details the author thought was most important. The same image can have quite different <code>alt</code> text depending on its context. Consult the content editor slides at the top of the page for more examples.
				</p>
				<h5 className="_accessibility _h4">Some other best practices include:</h5>
				<ul className="_accessibility _ul bullet">
					<li className="_accessibility _li">Avoid “image of”, “photo of”, etc, unless the medium is particularly important.</li>
					<li className="_accessibility _li">
						Avoid using the title attribute in lieu of <code>alt</code> text. Keyboard-only users or mobile users may never see the title.
					</li>
					{/* <li className="_accessibility _li">Image links should describe the purpose of the link, and must never describe the image.</li> */}
					{/* <li className="_accessibility _li">Decorative images should have blank or empty <code>alt</code> text</li> */}
					{/* <li className="_accessibility _li">Complex images, like charts or graphs, should have long description located near the image. The image’s <code>alt</code> text should describe where the close by image is.</li> */}
					{/* <li className="_accessibility _li">Posters, flyers, and the like must have the same information presented in nearby text/</li> */}
				</ul>
				<ContainerLayout>
					<div className="l-row l-two-col-right">
						<div className="l-col">
							<div className="image-container">
								<img src={require("../../assets/images/main.png")} alt="Bab el-Mandeb Strait" className="responsive" />
							</div>
						</div>
						<div className="l-col"></div>
					</div>
				</ContainerLayout>
			</>
		)
	}
}
export default ImageAlt
