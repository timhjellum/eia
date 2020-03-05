import React, { Component } from "react";

import Top from "../assets/components/Top.js";
import Legend from "../assets/components/Legend.js";
import ExamplePlaceholder from "../assets/examples/Placeholder.js";

class Forms extends Component {
	render() {
		return (
			<div className="right-content">
				<h1 className="_h1">Forms</h1>

				<div className="alert">
					<p>
						Not all these form elements have been approved. Please refer to
						Miroslava for usage.
					</p>
				</div>

				<h3 className="_h3">Select Item / Dropdown</h3>
				<p>
					The width is defined by the layout container, for example:{" "}
					<code>l-col</code>.
				</p>

				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-four-col-even">
							<div className="l-col">
								<fieldset>
									<legend>Legend Label</legend>
									<div className="dropdown-container no-js">
										<div className="dropdown-button">
											<span className="text">For data year:</span>
											<span className="ico d-arrow">
												<span>dropdown arrow</span>
											</span>
										</div>
										<div className="dropdown-menu">
											<ul>
												<li className="ico pdf">
													<a href="/">2011</a>
												</li>
												<li className="ico pdf">
													<a href="/">2010</a>
												</li>
												<li className="ico pdf">
													<a href="/">2009</a>
												</li>
												<li className="ico pdf">
													<a href="/">2008</a>
												</li>
												<li>
													<a href="/totalenergy/data/annual/archive/">
														all archives
													</a>
												</li>
											</ul>
										</div>
									</div>
								</fieldset>
							</div>
							<div className="l-col"></div>
							<div className="l-col"></div>
							<div className="l-col"></div>
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
				<h3 className="_h3">Select Item / Dropdown</h3>
				<p>
					Secondary content areas spacing and style can be easily defined by
					adding a primary/secondary: <code>l-col</code>.
				</p>

				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-four-col-even">
							<div className="l-col">
								<div className="secondary">
									<ul>
										<li className="ico pdf">
											<a href="/petroleum/archive/comparison7822010.pdf">
												Full report
											</a>
										</li>
									</ul>

									<fieldset>
										<legend>Previous editions</legend>
										<div className="dropdown-container no-js">
											<div className="dropdown-button">
												<span className="text">Year</span>
												<span className="ico d-arrow">
													<span>dropdown arrow</span>
												</span>
											</div>
											<div className="dropdown-menu">
												<ul>
													<li className="ico pdf">
														<a href="/petroleum/archive/comparison7822009.pdf">
															1998 to 2007
														</a>
													</li>
													<li className="ico pdf">
														<a href="/petroleum/archive/comparison7822008.pdf">
															1994-2006
														</a>
													</li>
													<li className="ico pdf">
														<a href="/petroleum/archive/comparison7822007.pdf">
															1994-2005
														</a>
													</li>
													<li className="ico pdf">
														<a href="/petroleum/archive/article782.pdf">
															1995-2003
														</a>
													</li>
													<li className="ico pdf">
														<a href="/petroleum/archive/comparison782.pdf">
															1995-2001
														</a>
													</li>
													<li className="ico pdf">
														<a href="/petroleum/archive/art9912.pdf">
															1983-1998
														</a>
													</li>
												</ul>
											</div>
										</div>
									</fieldset>
								</div>
							</div>
							<div className="l-col"></div>
							<div className="l-col"></div>
							<div className="l-col"></div>
						</div>
					</div>
				</div>

				<ExamplePlaceholder />
				<Top />
				<h3 className="_h3">Select Item / Dropdown - No Javascript</h3>
				<p>
					Setting the width of the select form is as simple as setting the width
					of the <code>form-container</code>.
				</p>

				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-report-header">
							<div className="l-col">
								<div className="form-container do-not-print">
									<fieldset>
										<legend>Annual Energy Review archives</legend>
										<div className="dropdown-container">
											<div className="dropdown-button">
												<span className="text">Year</span>
												<span className="ico d-arrow">
													<span>dropdown arrow</span>
												</span>
											</div>
											<div className="dropdown-menu">
												<ul>
													<li className="ico pdf">
														<a href="/">2011</a>
													</li>
													<li className="ico pdf">
														<a href="/">2010</a>
													</li>
													<li className="ico pdf">
														<a href="/">2009</a>
													</li>
													<li className="ico pdf">
														<a href="/">2008</a>
													</li>
													<li>
														<a href="/">all archives</a>
													</li>
												</ul>
											</div>
										</div>
									</fieldset>
								</div>
							</div>
						</div>
					</div>
				</div>

				<ExamplePlaceholder />
				<Top />

				<h3 className="_h3">Javascript</h3>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="l-col">
								<div className="form-container do-not-print">
									<fieldset>
										<legend>Archive</legend>
										<div className="dropdown-container js">
											<div className="dropdown-button">
												<span className="text">Need to add archive</span>
												<span className="ico d-arrow">
													<span>dropdown arrow</span>
												</span>
											</div>
											<div className="dropdown-menu">
												<ul>
													<li>Lorem ipsum dolor sit amet</li>
													<li>Consectetur adipiscing elit</li>
													<li>Cras dictum</li>
													<li>Orci quis aliquet hendrerit</li>
													<li>Lorem ipsum dolor sit amet</li>
													<li>Consectetur adipiscing elit</li>
													<li>Cras dictum</li>
													<li>Orci quis aliquet hendrerit</li>
												</ul>
											</div>
										</div>
									</fieldset>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
				{/*}
<h3 className="_h3">Date Picker</h3>
<p className="_p">Not approved!</p>
<Legend />
<div className="_module-wrapper">
<div className="_module-container">
<div className="l-row l-two-col-left">
<div className="l-col">
<p className="_p">Date Picker.</p>
</div>
<div className="l-col">
<div className="form-container do-not-print">
<label>Select Date</label>
<input id="date" type="date" className="date-picker" value="">
</div>
</div>
</div>
</div>
</div>
<ExamplePlaceholder />
<Top />
*/}

				{/*
<h3 className="_h3">tbd</h3>
<div className="l-row l-full-width-col">
<div className="l-col">

<div className="dropdown-container">
<h4>Label</h4>

<div className="dropdown-button">
<span className="text">All available</span>
<span className="ico d-arrow">
<span>dropdown arrow</span>
</span>
</div>
<div className="dropdown-menu">
<ul>
<li className="head">
<h2>Most requested data</h2>
</li>
<li className="ico pdf"><a href="/">Item</a></li>
<li className="ico xls"><a href="/">Item</a></li>
<li className="ico csv"><a href="/">Item</a></li>
<li className="ico html"><a href="/">Item</a></li>
<li className="ico json"><a href="/">Item</a></li>
<li className="ico doc"><a href="/">Item</a></li>
<li className="ico ppt"><a href="/">Item</a></li>
</ul>

</div>
<div>
<ExamplePlaceholder />
<Top />
*/}
				{/*
<h3 className="_h3">fieldset</h3>
<Legend />
<div className="_module-wrapper">
	<div className="_module-container">
		<div className="l-row l-two-col-left">
			<div className="l-col">
			<span className="attribute-name"><code className="tag">fieldset</code></span>
			<p className="_p">Defines a <strong>group of controls</strong> within a form.</p>
		</div>
		<div className="l-col">
			<code className="tag">n/a</code>
			<span className="_example">
				<form action="/subscribe" method="post">
					<fieldset>
						<legend>Subscribe to the Newsletter</legend>
						<input type="email" name="email" />
						<button>Ok</button>
					</fieldset>
				</form>
			</span>
		</div>
	</div>
</div>
*/}

				{/*}
<Legend />
<div className="_module-wrapper">
<div className="_module-container">
<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute-name"><code className="tag">disabled</code></span>
<p className="_p">Disables the controls the fieldset contains.
</div>
<div className="l-col">
<code className="tag">n/a</code>
<span className="_example">
<fieldset disabled="">
<legend>Subscribe to the Newsletter</legend>
<input type="email" name="email" />
<button>Ok</button>
</fieldset></textarea>

</span>
</div>
</div>
</div>
</div>
*/}

				{/*}
<h3 className="_h3">form</h3>
<Legend />
<div className="_module-wrapper">
<div className="_module-container">
<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute-name"><code className="tag">action</code></span>
<p className="_p">Defines which URL the form's information is sent to when submitted.</p>
</div>
<div className="l-col">
<span className="attribute-name"><code className="tag">"/contact"</code></span>
<p className="_p">You can use a <strong>relative</strong> URL.</p>

{/*
<span className="_html">
<textarea className="textarea" rows="5"><form action="/contact">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>

<hr />

<span className="attribute-name"><code className="tag">action</code></span>
<code>"https://htmlreference.io/contact"</code>
<p className="_p">You can use an <strong>absolute</strong> URL.</p>

<span className="_html">
<textarea className="textarea" rows="5"><form action="https://htmlreference.io/contact">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
</div>
</div>
*/}

				{/*}
<Legend />
<div className="_module-wrapper">
<div className="_module-container">
<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute">method</span>
<p className="_p">Defines the HTTP method used when submitting the form.</p>
</div>
<div className="l-col">
<span className="attribute-name"><code className="tag">"post"</code></span>
<p className="_p">The form information is sent to the server as part of the <strong>request body</strong>.</p>


{/*
<span className="_html">
<textarea className="textarea" rows="5">
<form method="post">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</textarea>
</span>

<hr />
<span className="attribute">
<code className="tag">"get"</code></span>
<p className="_p">The form information is sent to the server as part <strong>URL parameters</strong>: <code>/contact?first_name=Alex&amp;last_name=Smith</code>.</p>


<span className="_html">
<textarea className="textarea" rows="5"><form method="get">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
</div>
</div>


















<Legend />
<div className="_module-wrapper">
<div className="_module-container">
<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute">name</span>
<p className="_p">The form's name when sent to the server. Useful when multiple forms are present on the same web page.</p>
</div>
<div className="l-col">
<span className="attribute-name"><code className="tag">"sign_up_form"</code></span>
<p className="_p">The name value must be unique within the context of the whole web page.</p>
<p className="_p">It can only contain alphanumeric characters <code>a-z</code> <code>A-Z</code> <code>0-9</code> and some special characters like <code>-</code> <code>_</code>… but no space.</p>

{/*
<span className="_html">
<textarea className="textarea" rows="5"><form name="sign_up_form">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
</div>
</div>

















<Legend />
<div className="_module-wrapper">
<div className="_module-container">
<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute">autocomplete</span>
<p className="_p">Determines if the browser can autocomplete all the form's controls.</p>
</div>
<div className="l-col">
<span className="attribute-name"><code className="tag">"off"</code></span>
<p className="_p">The browser will <strong>disable</strong> autocomplete functions. This can however be overriden for each control individually.</p>
<span className="_example">
<form autocomplete="off">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span className="_html">
<textarea className="textarea" rows="5"><form autocomplete="off">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
<hr />
<span className="attribute"><code className="tag">"on"</code></span>
<p className="_p">The browser will <strong>enable</strong> autocomplete functions. This can however be overriden for each control individually.</p>
<p className="_p">Try pressing "down" in this input. It will show previously entered email addresses.</p>

<span className="_example">
<form autocomplete="on">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span className="_html">
<textarea className="textarea" rows="5"><form autocomplete="on">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
</div>
</div>




















<Legend />
<div className="_module-wrapper">
<div className="_module-container">
<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute">target</span>
<p className="_p">Defines in which tab or window the clicked link will show up.</p>
</div>
<div className="l-col">
<span className="attribute-name"><code className="tag">"_blank"</code></span>
<p className="_p">Opens in a new browsing context, which is usually a <strong>new tab</strong>.</p>
<span className="_example">
<form href="https://htmlreference.io" target="_blank">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span className="_html">
<textarea className="textarea" rows="5"><form href="https://htmlreference.io" target="_blank">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
<hr />
<span className="attribute"><code className="tag">"_self"</code></span>
<p className="_p">Opens in the current tab.</p>
<span className="_example">
<form href="https://htmlreference.io" target="_self">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span className="_html">
<textarea className="textarea" rows="5"><form href="https://htmlreference.io" target="_self">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
<hr />
<span className="attribute"><code className="tag">"_parent"</code></span>
<p className="_p">Opens in the parent browsing context, or <code>_self</code> is there is none.</p>

</div>
<div className="l-col">

<span className="_example">
<form href="https://htmlreference.io" target="_parent">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span className="_html">
<textarea className="textarea" rows="5"><form href="https://htmlreference.io" target="_parent">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
<hr />
<span className="attribute"> <code className="tag">"_top"</code></span>
<p className="_p">Opens in the top browsing context, or <code>_self</code> is there is none.</p>

</div>
<div className="l-col">

<span className="_example">
<form href="https://htmlreference.io" target="_top">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span className="_html">
<textarea className="textarea" rows="5"><form href="https://htmlreference.io" target="_top">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>
</span>

</div>
</div>




















<Legend />
<div className="_module-wrapper">
<div className="_module-container">
<div className="l-row l-two-col-left">
<div className="l-col">

<span className="attribute">enctype</span>
<p className="_p">Defines the <a href="https://www.iana.org/assignments/media-types/media-types.xhtml">MIME type</a> of the information sent to the server. Only works if the method is <code>post</code>.</p>

</div>
<div className="l-col">

<span className="attribute-name"><code className="tag">"application/x-www-form-urlencoded"</code></span>
<strong className="value-is-default">Default.</strong>
<p className="_p">The <strong>default</strong> value.</p>
<span className="_example">
<form enctype="application/x-www-form-urlencoded">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span className="_html">
<textarea className="textarea" rows="5"><form enctype="application/x-www-form-urlencoded">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
<hr />
<span className="attribute"><code className="tag">"text/plain"</code></span>
<p className="_p">For HTML5 plain text.</p>
<span className="_example">
<form enctype="text/plain">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span className="_html">
<textarea className="textarea" rows="5"><form enctype="text/plain">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
<hr />
<span className="attribute"><code className="tag">"multipart/form-data"</code></span>
<p className="_p">Needed when using an <code>&lt;input type="file"&gt;</code> element.</p>

</div>
<div className="l-col">

<span className="_example">
<form enctype="multipart/form-data">
<label>Upload</label>
<input type="file">
</form>
</span>

{/*
<span className="_html">
<textarea className="textarea" rows="5"><form enctype="multipart/form-data">
<label>Upload</label>
<input type="file">
</form></textarea>

</span>
</div>
</div>




















<Legend />
<div className="_module-wrapper">
<div className="_module-container">
<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute-name"> <code className="tag">novalidate</code></span>
<p className="_p">Tells the browser to not validate the form on submission.
</div>
<div className="l-col">
<span className="_example">
<form novalidate="">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span className="_html">
<textarea className="textarea" rows="5"><form novalidate="">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
</div>
</div>










<h3 className="_h3">input</h3>
<p className="_p">Defines an <strong>interactive control</strong> within a web form.</p>
<Legend />
<div className="_module-wrapper">
<div className="_module-container">
<div className="l-row l-two-col-left">
<div className="l-col">

<code className="tag">n/a</code>
<span className="_example"><input type="text" name="first_name" placeholder="e.g. Alex"></span>

<span className="attribute-name"><code className="tag">type</code></span>
<p className="_p">Defines the type of form input.</p>
<span className="attribute-is-required">Required.</span>
</div>
<div className="l-col">
<span className="attribute-values"><code className="tag">"text"</code></span>
<p className="_p">Simple single line text input that accepts any type of character</p>
<hr />
<span className="attribute-name"><code className="tag">"email"</code></span>
<p className="_p">Like a text input, but the browser will try to only allow valid email addresses.</p>
<p className="_p">On mobile devices, the email keyboard will show up.</p>
<hr />
<span className="attribute-name"><code className="tag">"number"</code></span>
<p className="_p">Like a text input, but the browser will try to only allow valid numbers.</p>
<p className="_p">On mobile devices, the number keyboard will show up.</p>

<hr />

<h4>Radiobuttons and Checkboxes</h4>
<p className="_p">
Radiobuttons and Checkboxes must be clearly organized into groups and generally aligned uniformly with a corresponding textual label.
</p>
<h5>Checkboxes</h5>
<p className="_p">
Checkboxes should be utilized when the user has a list of options to choose from. Checkboxes should always allow for multiple selections.
</p>
<span className="attribute-name"><code className="tag">"checkbox"</code></span>
<p className="_p">A toggle checkbox that can only be one of two states: checked or unchecked. The value is only submitted by the form if the checkbox is checked.</p>
<pre><code className="html">&lt;ul className="checkbox-container"&gt;
&lt;li className="custom-checkbox"&gt;&lt;input type="checkbox" name="lists" className="custom-checkbox-input" value="valueOne" id="valueOne"&gt;&lt;label for="valueOne" className="custom-checkbox-label"&gt;&lt;span className="custom-checkbox-label-inside"&gt;&lt;a&gt;Label One&lt;/a&gt;&lt;/span&gt;&lt;/label&gt;&lt;/li&gt;
&lt;li className="custom-checkbox"&gt;&lt;input type="checkbox" name="lists" className="custom-checkbox-input" value="valueTwo" id="valueTwo"&gt;&lt;label for="valueTwo" className="custom-checkbox-label"&gt;&lt;span className="custom-checkbox-label-inside"&gt;&lt;a&gt;Label Two&lt;/a&gt;&lt;/span&gt;&lt;/label&gt;&lt;/li&gt;
&lt;li className="custom-checkbox"&gt;&lt;input type="checkbox" name="lists" className="custom-checkbox-input" value="valueThr" id="valueThr"&gt;&lt;label for="valueThr" className="custom-checkbox-label"&gt;&lt;span className="custom-checkbox-label-inside"&gt;&lt;a&gt;Label Thr&lt;/a&gt;&lt;/span&gt;&lt;/label&gt;&lt;/li&gt;
&lt;li className="custom-checkbox"&gt;&lt;input type="checkbox" name="lists" className="custom-checkbox-input" value="valueFou" id="valueFou"&gt;&lt;label for="valueFou" className="custom-checkbox-label"&gt;&lt;span className="custom-checkbox-label-inside"&gt;&lt;a&gt;Label Fou&lt;/a&gt;&lt;/span&gt;&lt;/label&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>

<span className="_example">
<ul className="checkbox-container">
<li className="custom-checkbox"><input type="checkbox" name="lists" className="custom-checkbox-input" value="valueOne" id="valueOne"><label for="valueOne" className="custom-checkbox-label"><span className="custom-checkbox-label-inside"><a>Label One</a></span></label></li>
<li className="custom-checkbox"><input type="checkbox" name="lists" className="custom-checkbox-input" value="valueTwo" id="valueTwo"><label for="valueTwo" className="custom-checkbox-label"><span className="custom-checkbox-label-inside"><a>Label Two</a></span></label></li>
<li className="custom-checkbox"><input type="checkbox" name="lists" className="custom-checkbox-input" value="valueThr" id="valueThr"><label for="valueThr" className="custom-checkbox-label"><span className="custom-checkbox-label-inside"><a>Label Thr</a></span></label></li>
<li className="custom-checkbox"><input type="checkbox" name="lists" className="custom-checkbox-input" value="valueFou" id="valueFou"><label for="valueFou" className="custom-checkbox-label"><span className="custom-checkbox-label-inside"><a>Label Fou</a></span></label></li>
</ul>
</span>
<h5>Stand-alone Check-Box</h5>
<p className="_p"></p>
A stand-alone checkbox should be utilized when the user has a single option to choose from. The label should always be positive and never negative. For example: "Active rather than Not Active," or "Yes rather than No."
</p>

<span className="_example">
<ul>
<li className="custom-checkbox"><input type="checkbox" name="lists" className="custom-checkbox-input" value="Terms" id="Terms"><label for="Terms" className="custom-checkbox-label">I accept the terms</label></li>
</ul>
</span>
<pre><code className="html">&lt;ul&gt;
&lt;li className="custom-checkbox"&gt;&lt;input type="checkbox" name="lists" className="custom-checkbox-input" value="Terms" id="Terms"&gt;&lt;label for="Terms" className="custom-checkbox-label"&gt;I accept the terms&lt;/label&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>


<hr />

<h5>Radiobuttons</h5>
<p className="_p">
Radiobuttons should be utilized when the user must choose from two or more options and where each option is mutually exclusive of all other options. Radiobuttons should also be used in place of Select-field if the fixed number of options is less than six. Unless there are business rules that state otherwise, Radiobuttons should always have a default selection. If there's an instance where the user can not have a selection, then offer a "none" option.
</p>
<span className="attribute-name"><code className="tag">"radio"</code></span>
<p className="_p">Needs to be used used in combination with other radio buttons, so that they are mutually exclusive.</p>

<span className="_example">
<input type="radio">
</span>
{/*
<span className="_html">
<textarea className="textarea" rows="1"><input type="radio"></textarea>

</span>

</div>
</div>




<p className="_p">You link radio buttons through a similar <code>name</code> value:</p>
<code>
<pre><code className="language-html" data-lang="html"><span className="nt">&lt;label&gt;</span><br data-jekyll-commonmark-ghpages="">  <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"radio"</span> <span className="na">name=</span><span className="s">"newsletter"</span> <span className="na">value=</span><span className="s">"yes"</span><span className="nt">&gt;</span><br data-jekyll-commonmark-ghpages="">  Yes<br data-jekyll-commonmark-ghpages=""><span className="nt">&lt;/label&gt;</span><br data-jekyll-commonmark-ghpages=""><span className="nt">&lt;label&gt;</span><br data-jekyll-commonmark-ghpages="">  <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"radio"</span> <span className="na">name=</span><span className="s">"newsletter"</span> <span className="na">value=</span><span className="s">"no"</span><span className="nt">&gt;</span><br data-jekyll-commonmark-ghpages="">  No<br data-jekyll-commonmark-ghpages=""><span className="nt">&lt;/label&gt;</span></code></pre>
</code>
<p className="_p">Notice how clicking one deselects the other.</p>

<span className="_example">
<label><input type="radio" name="newsletter" value="yes">Yes</label><label>
<input type="radio" name="newsletter" value="no">No</label>
</span>

{/*
<span className="_html">
<textarea className="textarea" rows="3"><label><input type="radio" name="newsletter" value="yes">Yes</label><label>
<input type="radio" name="newsletter" value="no">No</label></textarea>

</span>

<Legend />
<div className="_module-wrapper">
<div className="_module-container">
<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute-name"><code className="tag">name</code></span>
<p className="_p">Defines the unique identifier for that input within the form. It allows the server to access each input's value when submitted.</p>
<span className="attribute-is-required">Required.</span>
</div>
<div className="l-col">
<span className="attribute-values"><code className="tag">"first_name"</code></span>
<p className="_p">The name value must be unique within the context of a <code>&lt;form&gt;</code> container.</p>
<p className="_p">It can only contain alphanumeric characters <code>a-z</code> <code>A-Z</code> <code>0-9</code> and some special characters like <code>-</code> <code>_</code>… but no space.</p>
</div>
</div>








<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute">placeholder</span>
<p className="_p">Defines a non-selectable placeholder text that only appears when the input is empty.</p>
</div>
<div className="l-col">
<span className="attribute-name"><code className="tag">"e.g. alex@smith.com"</code></span>
<p className="_p">You can hint at the format expected for the input.</p>

<span className="_example">
<input placeholder="e.g. alex@smith.com">
</span>

<p className="_p">As a best practice, it is recommended to have a label to describe the input, and use the placeholder to showcase an example:</p>
<p className="_p">Notice how the placeholder disappears on focus, hence the need to maintain a separate label.</p>

<span className="_example">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
</span>
</div>
</div>








<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute-name"> <code className="tag">required</code></span>
<p className="_p">Tells the browser that this input is <strong>required</strong>. Leaving it empty will show a warning.</p>
</div>
<div className="l-col">

<p className="_p">You simply need to add the <code>required</code> attribute with no value:</p>
<code>
<pre><code className="language-html" data-lang="html"><span className="nt">&lt;form&gt;</span><br data-jekyll-commonmark-ghpages="">  <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span className="na">required</span><span className="nt">&gt;</span><br data-jekyll-commonmark-ghpages=""><span className="nt">&lt;/form&gt;</span></code></pre>
</code>

<p className="_p">The browser should show a warning if you try to submit the form with an empty text input.</p>

<span className="_example">
<form>
<input type="text" className="invalid" required="required"><span></span>
</form>
</span>



{/*
<span className="_html">
<textarea className="textarea" rows="3"><form>
<input type="text" required="">
</form></textarea>

</span>

</div>
</div>








<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute-name"> <code className="tag">disabled</code></span>
<p className="_p">Disables the input.</p>
</div>
<div className="l-col">
<span className="_example">
<input disabled="">
</span>

{/*
<span className="_html">
<textarea className="textarea" rows="3"><input disabled=""></textarea>

</span>
</div>
</div>
</li>





<div className="right-content">
<h3 className="_h3">legend</h3>

<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute-name"> <code className="tag">legend</code></span>
<p className="_p">Defines a <strong>caption</strong> for a parent's content.</p>
</div>
<div className="l-col">
<code className="tag">n/a</code>
<span className="_example">
<form action="/subscribe" method="post">
<fieldset>
<legend>Subscribe to the Newsletter</legend>
<input type="email" name="email" />
<button>Ok</button>
</fieldset>
</form>
</span>
</div>
</div>

</li>






<div className="right-content">
<h3 className="_h3">textarea</h3>

<p className="_p">Defines a <strong>multi-line text control</strong> within a web form.</p>
<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute-name"> <code className="tag">name</code></span>
<p className="_p">Defines the unique identifier for that textarea within the form. It allows the server to access each textarea's value when submitted.</p>
<span className="attribute-is-required">Required.</span>
</div>
<div className="l-col">
<span className="attribute-values"><code className="tag">"message"</code></span>
<p className="_p">The name value must be unique within the context of a <code>&lt;form&gt;</code> container.</p>
<p className="_p">It can only contain alphanumeric characters <code>a-z</code> <code>A-Z</code> <code>0-9</code> and some special characters like <code>-</code> <code>_</code>… but no space.</p>
<span className="_example">
<textarea className="textarea" rows="10" placeholder="e.g. Hello my name is Alex" name="message"></textarea>

</span>

{/*
<span className="_html">
<textarea className="textarea" rows="1"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex" name="message"></textarea>
</textarea>

</span>
</div>
</div>
<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute">autocomplete</span>
<p className="_p">Determines if the browser can autocomplete the textarea.</p>
</div>
<div className="l-col">
<span className="attribute-name"><code className="tag">"off"</code></span>
<p className="_p">The browser will <strong>disable</strong> autocomplete functions..</p>

<span className="_example">
<textarea className="textarea" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>

</span>
{/*
<span className="_html">
<textarea className="textarea" rows="3"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>
</textarea>

</span>

<hr />
<span className="attribute">"on"</code></span>
<p className="_p">The browser will <strong>enable</strong> autocomplete functions.</p>

example coming soon...

<span className="_example">
<textarea className="textarea" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>

</span>
{/*
<span className="_html">
<textarea className="textarea" rows="3"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>
</textarea>

</span>

</div>
</div>





<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute">minlength</span>
<p className="_p">Defines the minimum amount of characters the textarea required to be valid.</p>
</div>
<div className="l-col">
<span className="attribute-name"><code className="tag">"15"</code></span>
<p className="_p">You can use <strong>integers</strong>.</p>

<span className="_example">
<textarea className="textarea" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>

</span>
{/*
<span className="_html">
<textarea className="textarea" rows="3"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>
</textarea>

</span>

</div>
</div>





<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute">maxlength</span>
<p className="_p">Defines the maxlength amount of characters allowed.</p>
</div>
<div className="l-col">
<span className="attribute-name"><code className="tag">"140"</code></span>
<p className="_p">You can use <strong>integers</strong>.</p>


<span className="_example">
<textarea className="textarea" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>

</span>
{/*
<span className="_html">
<textarea className="textarea" rows="3"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>
</textarea>

</span>

</div>
</div>





<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute">placeholder</span>
<p className="_p">Defines a non-selectable placeholder text that only appears when the textarea is empty.</p>
</div>
<div className="l-col">
<span className="attribute-name"><code className="tag">"e.g. Hello my name is Alex"</code></span>
<p className="_p">You can hint at the format expected for the textarea.</p>

<span className="_example">
<textarea className="textarea" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>

</span>
{/*
<span className="_html">
<textarea className="textarea" rows="3"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>
</textarea>

</span>

</div>
</div>





<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute">cols</span>
<p className="_p">Defines the number of columns.</p>
</div>
<div className="l-col">
<span className="attribute-name"><code className="tag">"40"</code></span>
<p className="_p">You can use <strong>integers</strong>.</p>
<p>Example of <code className="tag"> columns="40"</code>:</p>

<span className="_example">
<textarea columns="40" rows="10"></textarea>

</span>
</div>
</div>





<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute">rows</span>
<p className="_p">Defines the number of rows.</p>
</div>
<div className="l-col">
<span className="attribute-name"><code className="tag">"2"</code></span>
<p className="_p">You can use <strong>integers</strong>.</p>
<p>Example of <code className="tag">rows="2"</code>:</p>
<span className="_example">
<textarea className="textarea" rows="2"></textarea>

</span>
</div>
</div>





<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute">wrap</span>
<p className="_p">Defines how the text should be wrapped.</p>
</div>
<div className="l-col">
<span className="attribute-name"><code className="tag">"hard"</code></span>
<p className="_p">The text will always be wrapped depending on the <code>cols</code> value.</p>

<span className="_example">
<textarea className="textarea" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>

</span>
{/*
<span className="_html">
<textarea className="textarea" rows="3"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>
</textarea>

</span>


<span className="attribute-values"><code className="tag">"soft"</code></span>
<p className="_p">The text will only break when needed.</p>


<span className="_example">
<textarea className="textarea" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>

</span>
{/*
<span className="_html">
<textarea className="textarea" rows="3"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>
</textarea>

</span>

</div>
</div>
<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute-name"><code className="tag">disabled</code></span>
<p className="_p">Disables the textarea.</p>
</div>
<div className="l-col">
<span className="_example">
<textarea className="textarea" rows="5"></textarea>

</span>

{/*
<span className="_html">
<textarea className="textarea" rows="3"><textarea columns="40" rows="5" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft" disabled=""></textarea>
</textarea>

</span>

</div>
</div>
<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute-name"><code className="tag">required</code></span>
<p className="_p">Tells the browser that this textarea is <strong>required</strong>. Leaving it empty will show a warning.
</div>
<div className="l-col">
<span className="_example">
<textarea className="textarea invalid" rows="5"></textarea>
<span></span>
</span>


{/*
<span className="_html">
<textarea className="textarea" rows="3"><textarea columns="40" rows="5" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft" disabled="" required=""></textarea>
</textarea>

</span>

</div>
</div>
<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute-name"><code className="tag">autofocus</code></span>
<p className="_p">Sets focus on the textarea when the web page loads.
</div>
<div className="l-col">

<span className="_example">
<textarea className="textarea" rows="5" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft" disabled="" required=""></textarea>

</span>

</div>
</div>
<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute-name"><code className="tag">readonly</code></span>
<p className="_p">Turns the textarea into a read-only element.</p>
</div>
<div className="l-col">
<span className="_example">
<textarea className="textarea" rows="5" placeholder="This textarea is read only" name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft" disabled="" required="" readonly=""></textarea>

</span>
</div>
</div>
<div className="l-row l-two-col-left">
<div className="l-col">
<span className="attribute-name"><code className="tag">spellcheck</code></span>
<p className="_p">Enables the browser spell checker.
</div>
<div className="l-col">

<span className="_example">
<textarea className="textarea" rows="5" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft" disabled="" required="" readonly="" spellcheck=""></textarea>

</span>
{/*
<span className="_html">
<textarea className="textarea" rows="3"><textarea columns="40" rows="5" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft" disabled="" required="" readonly="" spellcheck=""></textarea>
</textarea>

</span>

</div>
</div>
</li>
<div className="right-content">
<h3 className="_h3">Validation</h3>
<div className="form-container">
<label>Form Label</label><textarea className="textarea invalid" rows="10" placeholder="e.g. Hello my name is Alex" name="message"></textarea>
<span></span>
</div>
<div className="form-container">
<label>Form Label</label><textarea className="textarea valid" rows="10" placeholder="e.g. Hello my name is Alex" name="message"></textarea>
<span></span>
</div>

<div className="form-container">
<label>Title</label>
<ul className="radio-container">
<li><label><input type="radio" name="title" value="mr">Mr</label></li>
<li><label><input type="radio" name="title" value="mrs"><label>Mrs</label></li>
<li><label><input type="radio" name="title" value="miss"><label>Miss</label></li>
</ul>
</div>
<div className="form-container">
<label>First name</label>
<input type="text" name="first_name" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
</div>
<div className="form-container">
<label>Last name</label>
<input type="text" name="last_name">
</div>
<div className="form-container">
<label>Email</label>
<input type="email" name="email" required="">
</div>
<div className="form-container">
<label>Phone number</label>
<input type="tel" name="phone">
</div>
<div className="form-container">
<label>Password</label>
<input type="password" name="password" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
</div>
<div className="form-container">
<label>Country</label>
<div className="select-container">
<select>
<option>China</option>
<option>India</option>
<option>United States</option>
<option>Indonesia</option>
<option>Brazil</option>
</select>
</div>
</div>
<div className="form-container">
<label><input type="checkbox" vale="terms"> I agree to the <a href="/">terms and conditions</a></label>
</div>
<div className="button-container">
<button>Sign up</button>
<button type="reset">Resetform</button>
</div></div>
*/}
			</div>
		);
	}
}

export default Forms;
