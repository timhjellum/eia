import React, { Component } from "react"

import Page from "./Page"
import Top from "./Placeholders/Top"
import SVGBestPractices from "./Images/SVGBestPractices"
import AccessibilityImageBestPractices from "./Accessibility/AccessibilityImageBestPractices"
import ResponsiveImage from "./Images/ResponsiveImage"
import ImageIntroduction from "./Images/ImageIntroduction"

class ModulesImages extends Component {
	render() {
		return (
			<Page title="Images">
				<span className="modules">
					<h1 className="_h1">Images</h1>

					<p className="_p">
						Please refer to the <a href="fancybox.html">FancyBox Modal section</a> for modal functionality of images.
					</p>

					<ImageIntroduction />

					<ResponsiveImage />
					<Top />
					{/*
					<h3 className="_h3">ImageDescriptions</h3>
					<ContainerLayout>
						<ImageDescriptions />
					</ContainerLayout>
					<Top />
					*/}

					<AccessibilityImageBestPractices />

					<Top />
					{/*
					<h3 className="_h3">SVGBestPractices</h3>
	
						<SVGBestPractices />

					<Top />



<Placeholder4 />
<Placeholder6 />
<Placeholder7 />
<Placeholder8 />
<Placeholder9 />
<Placeholder10 />
<ProtoFiveColumnsEven />
<ProtoFourColumnsEven />
<ProtoFullWidthColumn />
<ProtoSixColumnsEven />
<ProtoThreeColumns255025 />
<ProtoThreeColumnsEven />
<ProtoTwoColumns3366 />
<ProtoTwoColumns6633 />
<ProtoTwoColumns2575 />
<ProtoTwoColumns7525 />
<ProtoTwoColumns4258 />
<ProtoTwoColumns5842 />
<ProtoTwoColumnsEven />
<Top />
<p className="_p">Assuming the image is full width these common layouts provide the a variable.</p>
<div className="_example">
<ProtoTwoColumns3366 />
<ProtoTwoColumns6633 />
</div>
<div className="_example">
<ProtoTwoColumns2575 />
<ProtoTwoColumns7525 />
</div>
<div className="_example">
<ProtoFullWidthColumn />
</div>
<Top />
*/}
				</span>
			</Page>
		)
	}
}

export default ModulesImages
