import React, { Component } from "react"

class AccessibilityImageContent extends Component {
	render() {
		return (
			<>
				<h2 className="_h2">Images</h2>
				<h2 className="_h2">Table of&nbsp;Contents</h2>
				<ol className="_accessibility _ol">
					<li className="_accessibility _li">
						<a href="#people-with-disabilities">How People with Disabilities Interact with Images</a>
					</li>
					<li className="_accessibility _li">
						<a href="#alt-text-long-descriptions">Alternative Text and Long Descriptions</a>
					</li>
					<li className="_accessibility _li">
						<a href="#image-guidelines">Image Guidelines</a>
					</li>
					<li className="_accessibility _li">
						<a href="#images-of-text">Images of Text</a>
					</li>
					<li className="_accessibility _li">
						<a href="#complex-images">Charts, Graphs, and other Complex Images</a>
					</li>
					<li className="_accessibility _li">
						<a href="#developers">Developer Best Practices</a>
						<ol>
							<li className="_accessibility _li">
								<a href="#img-tags-alt-attributes">All img Tags must have alt attributes</a>
							</li>
							<li className="_accessibility _li">
								<a href="#other-ways-text-alternatives">Other Ways to Provide Text Alternatives</a>
							</li>
							<li className="_accessibility _li">
								<a href="#hiding-decorative-images">Hiding Decorative Images from Assistive Technology</a>
							</li>
							<li className="_accessibility _li">
								<a href="#svg-accessibility">SVG Accessibility</a>
							</li>
						</ol>
					</li>
				</ol>

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
				<h2 className="_h2">
					<a href="alt-text-long-descriptions" id="alt-text-long-descriptions"></a>Alternative Text and Long&nbsp;Descriptions
				</h2>
				<p className="_accessibility _p">Whenever a page presents images and other non-text content, it should present text alternatives. These text alternatives provide the same information presented by the image.</p>
				<p className="_accessibility _p">
					The most common form text alternative is <code>alt</code> text. <code>alt</code> text is a brief label contained in the HTML code for the image. Content editors can generally provide <code>alt</code> text at the same time they upload images into websites. Screen readers read <code>alt</code> text aloud, and browsers pages <code>alt</code> text when images fails to load.
				</p>
				<p className="_accessibility _p">
					Long descriptions are lengthier amounts of text provided nearby the image, such as in the next paragraph. Long descriptions are helpful when a brief <code>alt</code> text is not enough to convey information, such as in a complex chart or graph.
				</p>
				<p className="_accessibility _p">
					(Developers and content editors should avoid using the <code>longdesc</code> HTML attribute altogether. Confusingly, long descriptions never should be provided directly in the <code>longdesc</code>.)
				</p>
				<h2 className="_h2">
					<a href="image-guidelines" id="image-guidelines"></a>Image&nbsp;Guidelines
				</h2>
				<p className="_accessibility _p">
					Understanding what makes good <code>alt</code> text is subtle and important. It should be brief: less than 250 characters. It should convey the purpose of the image, not describe the image. When writing <code>alt</code> text, consider what details the author thought was most important. The same image can have quite different <code>alt</code> text depending on its context. Consult the content editor slides at the top of the page for more examples.
				</p>
				<p className="_accessibility _p">Some other best practices include:</p>
				<ul className="_accessibility _ul bullet">
					<li className="_accessibility _li">Avoid “image of”, “photo of”, etc, unless the medium is particularly important.</li>
					<li className="_accessibility _li">
						Avoid using the title attribute in lieu of <code>alt</code> text. Keyboard-only users or mobile users may never see the title.
					</li>
					<li className="_accessibility _li">Image links should describe the purpose of the link, and must never describe the image.</li>
					<li className="_accessibility _li">
						Decorative images should have blank or empty <code>alt</code> text
					</li>
					<li className="_accessibility _li">
						Complex images, like charts or graphs, should have long description located near the image. The image’s <code>alt</code> text should describe where the close by image is.
					</li>
					<li className="_accessibility _li">Posters, flyers, and the like must have the same information presented in nearby text/</li>
					<li className="_accessibility _li">
						<p className="_accessibility _p">Provide color contrast and other design elements to help color blind users</p>
					</li>
				</ul>
				<p className="_accessibility _p">To learn more about images, consider the following resources:</p>
				<ul className="_accessibility _ul bullet">
					<li className="_accessibility _li">
						<a href="https://www.w3.org/WAI/tutorials/images/">Image Concepts (Web Accessibility Tutorials)</a>
					</li>
					<li className="_accessibility _li">
						<a href="https://www.w3.org/WAI/tutorials/images/decision-tree/">
							An <code>alt</code> Decision Tree (Web Accessibility Tutorials)
						</a>
					</li>
					<li className="_accessibility _li">
						<a href="https://webaim.org/techniques/alttext/">Alternative Text (WebAIM)</a>
					</li>
					<li className="_accessibility _li">
						<a href="http://accessibility.psu.edu/images/imageshtml/">
							Image <code>alt</code> Tag Tips for HTML (Penn State)
						</a>
					</li>
					<li className="_accessibility _li">
						<a href="http://accessibility.psu.edu/images/charts/">Charts &amp; Accessibility (Penn State)</a>
					</li>
				</ul>
				<h2 className="_h2">
					<a href="images-of-text" id="images-of-text"></a>Images of&nbsp;Text
				</h2>
				<p className="_accessibility _p">
					In general, websites should avoid images of text. Images of text are best reserved when a particular visual presentation is essential, such as a logo. If the image is of a small amount of text, the <code>alt</code> text must match the text in the image exactly. If the image contains a considerable amount of text, the text should also be elsewhere on the page.
				</p>
				<p className="_accessibility _p">In general, text in images should be a generous size to mitigate pixelation when zoomed. A minimum size of 19px is a good rule of thumb, with larger being better. Text in images should match color contrast ratio minimums. For text that is at least 24px and normal weight or 19px and bold, use a contrast ratio that is at least 3:1. Ideally, use a contrast ratio that is at least 4.5:1.</p>
				<h2 className="_h2">
					<a href="complex-images" id="complex-images"></a>Charts, Graphs, and Other Complex&nbsp;Images
				</h2>
				<p className="_accessibility _p">
					For charts, graphs, diagrams, illustrations, and other complex images, simple <code>alt</code> text may not be sufficient to convey the information. In such cases, the information should be provided in addition in text on the page. For charts and graphs, authors may want to provide a data table with the equivalent information. For flow charts and diagrams, a discussion of the relevant information in the following paragraphs may be best. In any case, the image’s <code>alt</code> text should direct the user to the long description.
				</p>
				<p className="_accessibility _p">
					<strong>Example:&nbsp;</strong>Below is a complex flow chart describing Yale’s foreign language requirements for undergrads. On the site where this chart is presented, the author should present bullet points or paragraphs presenting the same information contained in the flowchart.
				</p>
				<p className="_accessibility _p">{/*
					<img alt="Yale foreign language requirements flowchart. Example for providing alt text to complex images." src="/sites/default/files/images/Picture1.png" style="width:1302px; height:714px" width="1302" height="714">
					*/}</p>
				<p className="_accessibility _p">
					The alt text should be something like <code>alt="Yale College foreign language requirements. See below for discussion"</code>.
				</p>
				<h2 className="_h2">
					<a href="developers" id="developers"></a>Developer Best&nbsp;Practices
				</h2>
				<h3>
					<a href="img-tags-alt-attributes" id="img-tags-alt-attributes"></a>All <code>&lt;img&gt;</code>&nbsp;Tags Must Have <code>alt</code> Attributes
				</h3>
				<p className="_accessibility _p">If an image does not have an alt attribute, a screen reader may announce the image’s src attribute instead. So, all images must have an alt attribute. When an image does not have alt text, provide a null alt attribute, like so:</p>
				<pre>
					<code>&lt;img alt ... /&gt;</code>
				</pre>
				<p className="_accessibility _p">or</p>
				<pre>
					<code>&lt;img alt="" ... /&gt;</code>
				</pre>
				<h3>
					<span>
						<a href="other-ways-text-alternatives" id="other-ways-text-alternatives"></a>Other Ways to Provide Text Alternatives
					</span>
				</h3>
				<p className="_accessibility _p">
					Developers can provide accessible names to images with the <code>aria-label</code> and <code>aria-labelledby</code> attributes. When these attributes are present, assistive technology will ignore the image’s alt text and read the ARIA label instead.
				</p>
				<p className="_accessibility _p">
					Developers can{" "}
					<a href="https://www.w3.org/TR/WCAG20-TECHS/ARIA15.html">
						associate text elsewhere on the page using the <code>aria-describedby</code>&nbsp;attribute
						<span>
							<span class="element-invisible"> (link is external)</span>
						</span>
					</a>
					. This can be particularly helpful when using captions for complex images.
				</p>
				<p className="_accessibility _p">
					Developers can also{" "}
					<a href="http://html5doctor.com/the-figure-figcaption-elements/">
						use the <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> to associate visible text with an image
						<span>
							<span class="element-invisible"> (link is external)</span>
						</span>
					</a>
					. When using&nbsp;<code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;,</code> the <code>alt</code> attribute can be more minimal, and the <code>&lt;figcaption&gt;</code> can be more expressive.{" "}
					<a href="https://www.w3.org/WAI/tutorials/images/groups/#a-collection-of-images">
						The <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> elements can be used for groups of images
						<span>
							<span class="element-invisible"> (link is external)</span>
						</span>
					</a>
					, as well.
				</p>
				<h3>
					<a href="hiding-decorative-images" id="hiding-decorative-images"></a>Hiding Decorative Images from Assistive Technology
				</h3>
				<p className="_accessibility _p">Images that have no function or information content whatsoever are decorative images. These images can include stock photos included just for “eye candy.” Such images should be hidden from assistive technologies.</p>
				<p className="_accessibility _p">Decorative images can be hidden from screen readers in multiple ways:</p>
				<ul className="_accessibility _ul bullet">
					<li className="_accessibility _li">
						using a null <code>alt</code> attribute
					</li>
					<li className="_accessibility _li">
						using ARIA <code>role="presentation"</code>
					</li>
					<li className="_accessibility _li">using a CSS background image</li>
				</ul>
				<h3>
					<a href="svg-accessibility" id="svg-accessibility"></a>SVG Accessibility
				</h3>
				<p className="_accessibility _p">
					<span>Implementing images as SVGs can solve accessibility challenges related to pixelated images and zooming. However, ensuring that SVG images are accessible requires some extra care.</span>
				</p>
				<p className="_accessibility _p">
					SVG images implemented as <code>&lt;img&gt;</code> tags should also include the <code>role="image"</code>&nbsp;attribute.
				</p>
				<p className="_accessibility _p">
					SVG images implemented using the <code>&lt;svg&gt;</code> element should include the <code>&lt;title&gt;</code> and <code>&lt;desc&gt;</code>.
				</p>
				<p className="_accessibility _p">
					<span>References for SVG accessibility:</span>
				</p>
				<ul className="_accessibility _ul bullet">
					<li className="_accessibility _li">
						<a href="https://developer.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/">Using ARIA to enhance SVG accessibility (The Paciello Group)</a>
					</li>
					<li className="_accessibility _li">
						<a href="https://simplyaccessible.com/article/7-solutions-svgs/">7 solutions for creating more accessible SVGs (Simply Accessible)</a>
					</li>
					<li className="_accessibility _li">
						<a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title">
							The <code>&lt;title&gt;</code> element (Mozilla)
						</a>
					</li>
					<li className="_accessibility _li">
						<a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/desc">
							The <code>&lt;desc&gt;</code> element (Mozilla)
						</a>
					</li>
				</ul>
			</>
		)
	}
}

export default AccessibilityImageContent
