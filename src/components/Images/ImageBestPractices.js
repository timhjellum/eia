import React, { Component } from "react"

class AccessibilityImageBestPractices extends Component {
	render() {
		return (
			<>
				<h2 className="_h2">
					<a href="developers" id="developers"></a>Developer Best&nbsp;Practices
				</h2>
				<h4 className="_h4">
					<a href="img-tags-alt-attributes" id="img-tags-alt-attributes"></a>All <code>&lt;img&gt;</code>&nbsp;Tags Must Have <code>alt</code> Attributes
				</h4>
				<p className="_p">If an image does not have an alt attribute, a screen reader may announce the image’s src attribute instead. So, all images must have an alt attribute. When an image does not have alt text, provide a null alt attribute, like so:</p>
				<pre>
					<code>&lt;img alt ... /&gt;</code>
				</pre>
				<p className="_p">or</p>
				<pre>
					<code>&lt;img alt="" ... /&gt;</code>
				</pre>

				<h4 className="_h4">
					<span>
						<a href="other-ways-text-alternatives" id="other-ways-text-alternatives"></a>Other Ways to Provide Text Alternatives
					</span>
				</h4>
				<p className="_p">
					Developers can provide accessible names to images with the <code>aria-label</code> and <code>aria-labelledby</code> attributes. When these attributes are present, assistive technology will ignore the image’s alt text and read the ARIA label instead.
				</p>
				<p className="_p">
					Developers can{" "}
					<a href="https://www.w3.org/TR/WCAG20-TECHS/ARIA15.html">
						associate text elsewhere on the page using the <code>aria-describedby</code>&nbsp;attribute
						<span>
							<span className="element-invisible"> (link is external)</span>
						</span>
					</a>
					. This can be particularly helpful when using captions for complex images.
				</p>
				<p className="_p">
					Developers can also{" "}
					<a href="http://html5doctor.com/the-figure-figcaption-elements/">
						use the <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> to associate visible text with an image
						<span>
							<span className="element-invisible"> (link is external)</span>
						</span>
					</a>
					. When using&nbsp;<code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;,</code> the <code>alt</code> attribute can be more minimal, and the <code>&lt;figcaption&gt;</code> can be more expressive.{" "}
					<a href="https://www.w3.org/WAI/tutorials/images/groups/#a-collection-of-images">
						The <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> elements can be used for groups of images
						<span>
							<span className="element-invisible"> (link is external)</span>
						</span>
					</a>
					, as well.
				</p>

				<h4 className="_h4">
					<a href="hiding-decorative-images" id="hiding-decorative-images"></a>Hiding Decorative Images from Assistive Technology
				</h4>
				<p className="_p">Images that have no function or information content whatsoever are decorative images. These images can include stock photos included just for “eye candy.” Such images should be hidden from assistive technologies.</p>

				<p className="_p">Decorative images can be hidden from screen readers in multiple ways:</p>
				<ul className="_ul bullet">
					<li className="_li">
						using a null <code>alt</code> attribute
					</li>
					<li className="_li">
						using ARIA <code>role="presentation"</code>
					</li>
					<li className="_li">using a CSS background image</li>
				</ul>
			</>
		)
	}
}

export default AccessibilityImageBestPractices
