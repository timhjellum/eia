import React, { Component } from "react"

class ImageIntroduction extends Component {
	render() {
		return (
			<>
				{/*
				<h2>Table of&nbsp;Contents</h2>
				<ol className="_accessibility _ol">
					<li className="_accessibility _li"><a href="#people-with-disabilities">How People with Disabilities Interact with Images</a></li>
					<li className="_accessibility _li"><a href="#alt-text-long-descriptions">Alternative Text and Long Descriptions</a></li>
					<li className="_accessibility _li"><a href="#image-guidelines">Image Guidelines</a></li>
					<li className="_accessibility _li"><a href="#images-of-text">Images of Text</a></li>
					<li className="_accessibility _li"><a href="#complex-images">Charts, Graphs, and other Complex Images</a></li>
					<li className="_accessibility _li"><a href="#developers">Developer Best Practices</a>
						<ol className="_accessibility _ol">
							<li className="_accessibility _li"><a href="#img-tags-alt-attributes">All img Tags must have alt attributes</a></li>
							<li className="_accessibility _li"><a href="#other-ways-text-alternatives">Other Ways to Provide Text Alternatives</a></li>
							<li className="_accessibility _li"><a href="#hiding-decorative-images">Hiding Decorative Images from Assistive Technology</a></li>
							<li className="_accessibility _li"><a href="#svg-accessibility">SVG Accessibility</a></li>
						</ol>
					</li>
				</ol>
				*/}

				<h2 className="_h2">
					<a href="people-with-disabilities" id="people-with-disabilities"></a>How People with Disabilities Interact with&nbsp;Images
				</h2>
				<p className="_accessibility _p">
					Editors, developers, and designers should consider screen reader users when using images. Screen reader users include people who are blind, have low vision, or have cognitive disabilities. Pages should provide effective text alternatives for screen readers in the form of <code>alt</code> text. When a screen reader encounters an image, it will attempt to read a text alternative.
				</p>
				<p className="_accessibility _p">
					Text alternatives are also important when images do not load. Users with cognitive impairments may prefer to disable images from loading. Likewise, images may not load when a user has a slow internet connection. In both cases, the browser will show the image’s <code>alt</code> text.
				</p>
				<p className="_accessibility _p">Users with cognitive impairments, motion sensitivity, or seizure disorders may not tolerate some kinds of images well. They can find moving, flashing, or automatically animating images (including gifs) problematic.</p>
				<p className="_accessibility _p">Users with low vision often magnify the page. When magnified, images can appear pixelated and hard to understand. Colorblind users benefit when all content, including images, uses generous color contrast ratios.</p>
			</>
		)
	}
}

export default ImageIntroduction
