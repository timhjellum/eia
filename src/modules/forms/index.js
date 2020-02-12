import React, { Component } from "react";
import Top from "../../assets/components/Top.js";
import Legend from "../../assets/components/Legend.js";
import ExamplePlaceholder from "../../assets/examples/Placeholder.js";

class ModulesForms extends Component {
	render() {
		return (
			<li class="section-container">
				<h1 class="_h1">Forms</h1>

				<div class="alert">
					<p>
						Not all these form elements have been approved. Please
						refer to Miroslava for usage.
					</p>
				</div>

				<h3 class="_h3">Select Item / Dropdown</h3>
				<p>
					The width is defined by the layout container, for example:{" "}
					<code>l-col</code>.
				</p>

				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-four-col-even">
							<div class="l-col">
								<fieldset>
									<legend>Legend Label</legend>
									<div class="dropdown-container no-js">
										<div class="dropdown-button">
											<span class="text">
												For data year:
											</span>
											<span class="ico d-arrow">
												<span>dropdown arrow</span>
											</span>
										</div>
										<div class="dropdown-menu">
											<ul>
												<li class="ico pdf">
													<a href="/">2011</a>
												</li>
												<li class="ico pdf">
													<a href="/">2010</a>
												</li>
												<li class="ico pdf">
													<a href="/">2009</a>
												</li>
												<li class="ico pdf">
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
							<div class="l-col"></div>
							<div class="l-col"></div>
							<div class="l-col"></div>
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
				<h3 class="_h3">Select Item / Dropdown</h3>
				<p>
					Secondary content areas spacing and style can be easily
					defined by adding a primary/secondary: <code>l-col</code>.
				</p>

				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-four-col-even">
							<div class="l-col">
								<div class="secondary">
									<ul>
										<li class="ico pdf">
											<a href="/petroleum/archive/comparison7822010.pdf">
												Full report
											</a>
										</li>
									</ul>

									<fieldset>
										<legend>Previous editions</legend>
										<div class="dropdown-container no-js">
											<div class="dropdown-button">
												<span class="text">Year</span>
												<span class="ico d-arrow">
													<span>dropdown arrow</span>
												</span>
											</div>
											<div class="dropdown-menu">
												<ul>
													<li class="ico pdf">
														<a href="/petroleum/archive/comparison7822009.pdf">
															1998 to 2007
														</a>
													</li>
													<li class="ico pdf">
														<a href="/petroleum/archive/comparison7822008.pdf">
															1994-2006
														</a>
													</li>
													<li class="ico pdf">
														<a href="/petroleum/archive/comparison7822007.pdf">
															1994-2005
														</a>
													</li>
													<li class="ico pdf">
														<a href="/petroleum/archive/article782.pdf">
															1995-2003
														</a>
													</li>
													<li class="ico pdf">
														<a href="/petroleum/archive/comparison782.pdf">
															1995-2001
														</a>
													</li>
													<li class="ico pdf">
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
							<div class="l-col"></div>
							<div class="l-col"></div>
							<div class="l-col"></div>
						</div>
					</div>
				</div>

				<ExamplePlaceholder />
				<Top />
				<h3 class="_h3">Select Item / Dropdown - No Javascript</h3>
				<p>
					Setting the width of the select form is as simple as setting
					the width of the <code>form-container</code>.
				</p>

				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-report-header">
							<div class="l-col">
								<div class="form-container do-not-print">
									<fieldset>
										<legend>
											Annual Energy Review archives
										</legend>
										<div class="dropdown-container">
											<div class="dropdown-button">
												<span class="text">Year</span>
												<span class="ico d-arrow">
													<span>dropdown arrow</span>
												</span>
											</div>
											<div class="dropdown-menu">
												<ul>
													<li class="ico pdf">
														<a href="/">2011</a>
													</li>
													<li class="ico pdf">
														<a href="/">2010</a>
													</li>
													<li class="ico pdf">
														<a href="/">2009</a>
													</li>
													<li class="ico pdf">
														<a href="/">2008</a>
													</li>
													<li>
														<a href="/">
															all archives
														</a>
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

				<h3 class="_h3">Javascript</h3>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-full-width-col">
							<div class="l-col">
								<div class="form-container do-not-print">
									<fieldset>
										<legend>Archive</legend>
										<div class="dropdown-container js">
											<div class="dropdown-button">
												<span class="text">
													Need to add archive
												</span>
												<span class="ico d-arrow">
													<span>dropdown arrow</span>
												</span>
											</div>
											<div class="dropdown-menu">
												<ul>
													<li>
														Lorem ipsum dolor sit
														amet
													</li>
													<li>
														Consectetur adipiscing
														elit
													</li>
													<li>Cras dictum</li>
													<li>
														Orci quis aliquet
														hendrerit
													</li>
													<li>
														Lorem ipsum dolor sit
														amet
													</li>
													<li>
														Consectetur adipiscing
														elit
													</li>
													<li>Cras dictum</li>
													<li>
														Orci quis aliquet
														hendrerit
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
				{/*}
<h3 class="_h3">Date Picker</h3>
<p class="_p">Not approved!</p>
<Legend />
<div class="_module-wrapper">
<div class="_module-container">
<div class="l-row l-two-col-left">
<div class="l-col">
<p class="_p">Date Picker.</p>
</div>
<div class="l-col">
<div class="form-container do-not-print">
<label>Select Date</label>
<input id="date" type="date" class="date-picker" value="">
</div>
</div>
</div>
</div>
</div>
<ExamplePlaceholder />
<Top />
*/}

				{/*
<h3 class="_h3">tbd</h3>
<div class="l-row l-full-width-col">
<div class="l-col">

<div class="dropdown-container">
<h4>Label</h4>

<div class="dropdown-button">
<span class="text">All available</span>
<span class="ico d-arrow">
<span>dropdown arrow</span>
</span>
</div>
<div class="dropdown-menu">
<ul>
<li class="head">
<h2>Most requested data</h2>
</li>
<li class="ico pdf"><a href="/">Item</a></li>
<li class="ico xls"><a href="/">Item</a></li>
<li class="ico csv"><a href="/">Item</a></li>
<li class="ico html"><a href="/">Item</a></li>
<li class="ico json"><a href="/">Item</a></li>
<li class="ico doc"><a href="/">Item</a></li>
<li class="ico ppt"><a href="/">Item</a></li>
</ul>

</div>
<div>
<ExamplePlaceholder />
<Top />
*/}
				{/*
<h3 class="_h3">fieldset</h3>
<Legend />
<div class="_module-wrapper">
	<div class="_module-container">
		<div class="l-row l-two-col-left">
			<div class="l-col">
			<span class="attribute-name"><code class="tag">fieldset</code></span>
			<p class="_p">Defines a <strong>group of controls</strong> within a form.</p>
		</div>
		<div class="l-col">
			<code class="tag">n/a</code>
			<span class="_example">
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
<div class="_module-wrapper">
<div class="_module-container">
<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute-name"><code class="tag">disabled</code></span>
<p class="_p">Disables the controls the fieldset contains.
</div>
<div class="l-col">
<code class="tag">n/a</code>
<span class="_example">
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
<h3 class="_h3">form</h3>
<Legend />
<div class="_module-wrapper">
<div class="_module-container">
<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute-name"><code class="tag">action</code></span>
<p class="_p">Defines which URL the form's information is sent to when submitted.</p>
</div>
<div class="l-col">
<span class="attribute-name"><code class="tag">"/contact"</code></span>
<p class="_p">You can use a <strong>relative</strong> URL.</p>

{/*
<span class="_html">
<textarea class="textarea" rows="5"><form action="/contact">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>

<hr />

<span class="attribute-name"><code class="tag">action</code></span>
<code>"https://htmlreference.io/contact"</code>
<p class="_p">You can use an <strong>absolute</strong> URL.</p>

<span class="_html">
<textarea class="textarea" rows="5"><form action="https://htmlreference.io/contact">
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
<div class="_module-wrapper">
<div class="_module-container">
<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute">method</span>
<p class="_p">Defines the HTTP method used when submitting the form.</p>
</div>
<div class="l-col">
<span class="attribute-name"><code class="tag">"post"</code></span>
<p class="_p">The form information is sent to the server as part of the <strong>request body</strong>.</p>


{/*
<span class="_html">
<textarea class="textarea" rows="5">
<form method="post">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</textarea>
</span>

<hr />
<span class="attribute">
<code class="tag">"get"</code></span>
<p class="_p">The form information is sent to the server as part <strong>URL parameters</strong>: <code>/contact?first_name=Alex&amp;last_name=Smith</code>.</p>


<span class="_html">
<textarea class="textarea" rows="5"><form method="get">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
</div>
</div>


















<Legend />
<div class="_module-wrapper">
<div class="_module-container">
<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute">name</span>
<p class="_p">The form's name when sent to the server. Useful when multiple forms are present on the same web page.</p>
</div>
<div class="l-col">
<span class="attribute-name"><code class="tag">"sign_up_form"</code></span>
<p class="_p">The name value must be unique within the context of the whole web page.</p>
<p class="_p">It can only contain alphanumeric characters <code>a-z</code> <code>A-Z</code> <code>0-9</code> and some special characters like <code>-</code> <code>_</code>… but no space.</p>

{/*
<span class="_html">
<textarea class="textarea" rows="5"><form name="sign_up_form">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
</div>
</div>

















<Legend />
<div class="_module-wrapper">
<div class="_module-container">
<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute">autocomplete</span>
<p class="_p">Determines if the browser can autocomplete all the form's controls.</p>
</div>
<div class="l-col">
<span class="attribute-name"><code class="tag">"off"</code></span>
<p class="_p">The browser will <strong>disable</strong> autocomplete functions. This can however be overriden for each control individually.</p>
<span class="_example">
<form autocomplete="off">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span class="_html">
<textarea class="textarea" rows="5"><form autocomplete="off">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
<hr />
<span class="attribute"><code class="tag">"on"</code></span>
<p class="_p">The browser will <strong>enable</strong> autocomplete functions. This can however be overriden for each control individually.</p>
<p class="_p">Try pressing "down" in this input. It will show previously entered email addresses.</p>

<span class="_example">
<form autocomplete="on">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span class="_html">
<textarea class="textarea" rows="5"><form autocomplete="on">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
</div>
</div>




















<Legend />
<div class="_module-wrapper">
<div class="_module-container">
<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute">target</span>
<p class="_p">Defines in which tab or window the clicked link will show up.</p>
</div>
<div class="l-col">
<span class="attribute-name"><code class="tag">"_blank"</code></span>
<p class="_p">Opens in a new browsing context, which is usually a <strong>new tab</strong>.</p>
<span class="_example">
<form href="https://htmlreference.io" target="_blank">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span class="_html">
<textarea class="textarea" rows="5"><form href="https://htmlreference.io" target="_blank">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
<hr />
<span class="attribute"><code class="tag">"_self"</code></span>
<p class="_p">Opens in the current tab.</p>
<span class="_example">
<form href="https://htmlreference.io" target="_self">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span class="_html">
<textarea class="textarea" rows="5"><form href="https://htmlreference.io" target="_self">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
<hr />
<span class="attribute"><code class="tag">"_parent"</code></span>
<p class="_p">Opens in the parent browsing context, or <code>_self</code> is there is none.</p>

</div>
<div class="l-col">

<span class="_example">
<form href="https://htmlreference.io" target="_parent">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span class="_html">
<textarea class="textarea" rows="5"><form href="https://htmlreference.io" target="_parent">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
<hr />
<span class="attribute"> <code class="tag">"_top"</code></span>
<p class="_p">Opens in the top browsing context, or <code>_self</code> is there is none.</p>

</div>
<div class="l-col">

<span class="_example">
<form href="https://htmlreference.io" target="_top">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span class="_html">
<textarea class="textarea" rows="5"><form href="https://htmlreference.io" target="_top">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>
</span>

</div>
</div>




















<Legend />
<div class="_module-wrapper">
<div class="_module-container">
<div class="l-row l-two-col-left">
<div class="l-col">

<span class="attribute">enctype</span>
<p class="_p">Defines the <a href="https://www.iana.org/assignments/media-types/media-types.xhtml">MIME type</a> of the information sent to the server. Only works if the method is <code>post</code>.</p>

</div>
<div class="l-col">

<span class="attribute-name"><code class="tag">"application/x-www-form-urlencoded"</code></span>
<strong class="value-is-default">Default.</strong>
<p class="_p">The <strong>default</strong> value.</p>
<span class="_example">
<form enctype="application/x-www-form-urlencoded">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span class="_html">
<textarea class="textarea" rows="5"><form enctype="application/x-www-form-urlencoded">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
<hr />
<span class="attribute"><code class="tag">"text/plain"</code></span>
<p class="_p">For HTML5 plain text.</p>
<span class="_example">
<form enctype="text/plain">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span class="_html">
<textarea class="textarea" rows="5"><form enctype="text/plain">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
<hr />
<span class="attribute"><code class="tag">"multipart/form-data"</code></span>
<p class="_p">Needed when using an <code>&lt;input type="file"&gt;</code> element.</p>

</div>
<div class="l-col">

<span class="_example">
<form enctype="multipart/form-data">
<label>Upload</label>
<input type="file">
</form>
</span>

{/*
<span class="_html">
<textarea class="textarea" rows="5"><form enctype="multipart/form-data">
<label>Upload</label>
<input type="file">
</form></textarea>

</span>
</div>
</div>




















<Legend />
<div class="_module-wrapper">
<div class="_module-container">
<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute-name"> <code class="tag">novalidate</code></span>
<p class="_p">Tells the browser to not validate the form on submission.
</div>
<div class="l-col">
<span class="_example">
<form novalidate="">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form>
</span>

{/*
<span class="_html">
<textarea class="textarea" rows="5"><form novalidate="">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
<button>Ok</button>
</form></textarea>

</span>
</div>
</div>










<h3 class="_h3">input</h3>
<p class="_p">Defines an <strong>interactive control</strong> within a web form.</p>
<Legend />
<div class="_module-wrapper">
<div class="_module-container">
<div class="l-row l-two-col-left">
<div class="l-col">

<code class="tag">n/a</code>
<span class="_example"><input type="text" name="first_name" placeholder="e.g. Alex"></span>

<span class="attribute-name"><code class="tag">type</code></span>
<p class="_p">Defines the type of form input.</p>
<span class="attribute-is-required">Required.</span>
</div>
<div class="l-col">
<span class="attribute-values"><code class="tag">"text"</code></span>
<p class="_p">Simple single line text input that accepts any type of character</p>
<hr />
<span class="attribute-name"><code class="tag">"email"</code></span>
<p class="_p">Like a text input, but the browser will try to only allow valid email addresses.</p>
<p class="_p">On mobile devices, the email keyboard will show up.</p>
<hr />
<span class="attribute-name"><code class="tag">"number"</code></span>
<p class="_p">Like a text input, but the browser will try to only allow valid numbers.</p>
<p class="_p">On mobile devices, the number keyboard will show up.</p>

<hr />

<h4>Radiobuttons and Checkboxes</h4>
<p class="_p">
Radiobuttons and Checkboxes must be clearly organized into groups and generally aligned uniformly with a corresponding textual label.
</p>
<h5>Checkboxes</h5>
<p class="_p">
Checkboxes should be utilized when the user has a list of options to choose from. Checkboxes should always allow for multiple selections.
</p>
<span class="attribute-name"><code class="tag">"checkbox"</code></span>
<p class="_p">A toggle checkbox that can only be one of two states: checked or unchecked. The value is only submitted by the form if the checkbox is checked.</p>
<pre><code class="html">&lt;ul class="checkbox-container"&gt;
&lt;li class="custom-checkbox"&gt;&lt;input type="checkbox" name="lists" class="custom-checkbox-input" value="valueOne" id="valueOne"&gt;&lt;label for="valueOne" class="custom-checkbox-label"&gt;&lt;span class="custom-checkbox-label-inside"&gt;&lt;a&gt;Label One&lt;/a&gt;&lt;/span&gt;&lt;/label&gt;&lt;/li&gt;
&lt;li class="custom-checkbox"&gt;&lt;input type="checkbox" name="lists" class="custom-checkbox-input" value="valueTwo" id="valueTwo"&gt;&lt;label for="valueTwo" class="custom-checkbox-label"&gt;&lt;span class="custom-checkbox-label-inside"&gt;&lt;a&gt;Label Two&lt;/a&gt;&lt;/span&gt;&lt;/label&gt;&lt;/li&gt;
&lt;li class="custom-checkbox"&gt;&lt;input type="checkbox" name="lists" class="custom-checkbox-input" value="valueThr" id="valueThr"&gt;&lt;label for="valueThr" class="custom-checkbox-label"&gt;&lt;span class="custom-checkbox-label-inside"&gt;&lt;a&gt;Label Thr&lt;/a&gt;&lt;/span&gt;&lt;/label&gt;&lt;/li&gt;
&lt;li class="custom-checkbox"&gt;&lt;input type="checkbox" name="lists" class="custom-checkbox-input" value="valueFou" id="valueFou"&gt;&lt;label for="valueFou" class="custom-checkbox-label"&gt;&lt;span class="custom-checkbox-label-inside"&gt;&lt;a&gt;Label Fou&lt;/a&gt;&lt;/span&gt;&lt;/label&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>

<span class="_example">
<ul class="checkbox-container">
<li class="custom-checkbox"><input type="checkbox" name="lists" class="custom-checkbox-input" value="valueOne" id="valueOne"><label for="valueOne" class="custom-checkbox-label"><span class="custom-checkbox-label-inside"><a>Label One</a></span></label></li>
<li class="custom-checkbox"><input type="checkbox" name="lists" class="custom-checkbox-input" value="valueTwo" id="valueTwo"><label for="valueTwo" class="custom-checkbox-label"><span class="custom-checkbox-label-inside"><a>Label Two</a></span></label></li>
<li class="custom-checkbox"><input type="checkbox" name="lists" class="custom-checkbox-input" value="valueThr" id="valueThr"><label for="valueThr" class="custom-checkbox-label"><span class="custom-checkbox-label-inside"><a>Label Thr</a></span></label></li>
<li class="custom-checkbox"><input type="checkbox" name="lists" class="custom-checkbox-input" value="valueFou" id="valueFou"><label for="valueFou" class="custom-checkbox-label"><span class="custom-checkbox-label-inside"><a>Label Fou</a></span></label></li>
</ul>
</span>
<h5>Stand-alone Check-Box</h5>
<p class="_p"></p>
A stand-alone checkbox should be utilized when the user has a single option to choose from. The label should always be positive and never negative. For example: "Active rather than Not Active," or "Yes rather than No."
</p>

<span class="_example">
<ul>
<li class="custom-checkbox"><input type="checkbox" name="lists" class="custom-checkbox-input" value="Terms" id="Terms"><label for="Terms" class="custom-checkbox-label">I accept the terms</label></li>
</ul>
</span>
<pre><code class="html">&lt;ul&gt;
&lt;li class="custom-checkbox"&gt;&lt;input type="checkbox" name="lists" class="custom-checkbox-input" value="Terms" id="Terms"&gt;&lt;label for="Terms" class="custom-checkbox-label"&gt;I accept the terms&lt;/label&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>


<hr />

<h5>Radiobuttons</h5>
<p class="_p">
Radiobuttons should be utilized when the user must choose from two or more options and where each option is mutually exclusive of all other options. Radiobuttons should also be used in place of Select-field if the fixed number of options is less than six. Unless there are business rules that state otherwise, Radiobuttons should always have a default selection. If there's an instance where the user can not have a selection, then offer a "none" option.
</p>
<span class="attribute-name"><code class="tag">"radio"</code></span>
<p class="_p">Needs to be used used in combination with other radio buttons, so that they are mutually exclusive.</p>

<span class="_example">
<input type="radio">
</span>
{/*
<span class="_html">
<textarea class="textarea" rows="1"><input type="radio"></textarea>

</span>

</div>
</div>




<p class="_p">You link radio buttons through a similar <code>name</code> value:</p>
<code>
<pre><code class="language-html" data-lang="html"><span class="nt">&lt;label&gt;</span><br data-jekyll-commonmark-ghpages="">  <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"newsletter"</span> <span class="na">value=</span><span class="s">"yes"</span><span class="nt">&gt;</span><br data-jekyll-commonmark-ghpages="">  Yes<br data-jekyll-commonmark-ghpages=""><span class="nt">&lt;/label&gt;</span><br data-jekyll-commonmark-ghpages=""><span class="nt">&lt;label&gt;</span><br data-jekyll-commonmark-ghpages="">  <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"newsletter"</span> <span class="na">value=</span><span class="s">"no"</span><span class="nt">&gt;</span><br data-jekyll-commonmark-ghpages="">  No<br data-jekyll-commonmark-ghpages=""><span class="nt">&lt;/label&gt;</span></code></pre>
</code>
<p class="_p">Notice how clicking one deselects the other.</p>

<span class="_example">
<label><input type="radio" name="newsletter" value="yes">Yes</label><label>
<input type="radio" name="newsletter" value="no">No</label>
</span>

{/*
<span class="_html">
<textarea class="textarea" rows="3"><label><input type="radio" name="newsletter" value="yes">Yes</label><label>
<input type="radio" name="newsletter" value="no">No</label></textarea>

</span>

<Legend />
<div class="_module-wrapper">
<div class="_module-container">
<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute-name"><code class="tag">name</code></span>
<p class="_p">Defines the unique identifier for that input within the form. It allows the server to access each input's value when submitted.</p>
<span class="attribute-is-required">Required.</span>
</div>
<div class="l-col">
<span class="attribute-values"><code class="tag">"first_name"</code></span>
<p class="_p">The name value must be unique within the context of a <code>&lt;form&gt;</code> container.</p>
<p class="_p">It can only contain alphanumeric characters <code>a-z</code> <code>A-Z</code> <code>0-9</code> and some special characters like <code>-</code> <code>_</code>… but no space.</p>
</div>
</div>








<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute">placeholder</span>
<p class="_p">Defines a non-selectable placeholder text that only appears when the input is empty.</p>
</div>
<div class="l-col">
<span class="attribute-name"><code class="tag">"e.g. alex@smith.com"</code></span>
<p class="_p">You can hint at the format expected for the input.</p>

<span class="_example">
<input placeholder="e.g. alex@smith.com">
</span>

<p class="_p">As a best practice, it is recommended to have a label to describe the input, and use the placeholder to showcase an example:</p>
<p class="_p">Notice how the placeholder disappears on focus, hence the need to maintain a separate label.</p>

<span class="_example">
<label>Email</label>
<input type="email" name="email" placeholder="e.g. alex@smith.com">
</span>
</div>
</div>








<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute-name"> <code class="tag">required</code></span>
<p class="_p">Tells the browser that this input is <strong>required</strong>. Leaving it empty will show a warning.</p>
</div>
<div class="l-col">

<p class="_p">You simply need to add the <code>required</code> attribute with no value:</p>
<code>
<pre><code class="language-html" data-lang="html"><span class="nt">&lt;form&gt;</span><br data-jekyll-commonmark-ghpages="">  <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">required</span><span class="nt">&gt;</span><br data-jekyll-commonmark-ghpages=""><span class="nt">&lt;/form&gt;</span></code></pre>
</code>

<p class="_p">The browser should show a warning if you try to submit the form with an empty text input.</p>

<span class="_example">
<form>
<input type="text" class="invalid" required="required"><span></span>
</form>
</span>



{/*
<span class="_html">
<textarea class="textarea" rows="3"><form>
<input type="text" required="">
</form></textarea>

</span>

</div>
</div>








<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute-name"> <code class="tag">disabled</code></span>
<p class="_p">Disables the input.</p>
</div>
<div class="l-col">
<span class="_example">
<input disabled="">
</span>

{/*
<span class="_html">
<textarea class="textarea" rows="3"><input disabled=""></textarea>

</span>
</div>
</div>
</li>





<li class="section-container">
<h3 class="_h3">legend</h3>

<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute-name"> <code class="tag">legend</code></span>
<p class="_p">Defines a <strong>caption</strong> for a parent's content.</p>
</div>
<div class="l-col">
<code class="tag">n/a</code>
<span class="_example">
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






<li class="section-container">
<h3 class="_h3">textarea</h3>

<p class="_p">Defines a <strong>multi-line text control</strong> within a web form.</p>
<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute-name"> <code class="tag">name</code></span>
<p class="_p">Defines the unique identifier for that textarea within the form. It allows the server to access each textarea's value when submitted.</p>
<span class="attribute-is-required">Required.</span>
</div>
<div class="l-col">
<span class="attribute-values"><code class="tag">"message"</code></span>
<p class="_p">The name value must be unique within the context of a <code>&lt;form&gt;</code> container.</p>
<p class="_p">It can only contain alphanumeric characters <code>a-z</code> <code>A-Z</code> <code>0-9</code> and some special characters like <code>-</code> <code>_</code>… but no space.</p>
<span class="_example">
<textarea class="textarea" rows="10" placeholder="e.g. Hello my name is Alex" name="message"></textarea>

</span>

{/*
<span class="_html">
<textarea class="textarea" rows="1"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex" name="message"></textarea>
</textarea>

</span>
</div>
</div>
<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute">autocomplete</span>
<p class="_p">Determines if the browser can autocomplete the textarea.</p>
</div>
<div class="l-col">
<span class="attribute-name"><code class="tag">"off"</code></span>
<p class="_p">The browser will <strong>disable</strong> autocomplete functions..</p>

<span class="_example">
<textarea class="textarea" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>

</span>
{/*
<span class="_html">
<textarea class="textarea" rows="3"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>
</textarea>

</span>

<hr />
<span class="attribute">"on"</code></span>
<p class="_p">The browser will <strong>enable</strong> autocomplete functions.</p>

example coming soon...

<span class="_example">
<textarea class="textarea" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>

</span>
{/*
<span class="_html">
<textarea class="textarea" rows="3"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>
</textarea>

</span>

</div>
</div>





<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute">minlength</span>
<p class="_p">Defines the minimum amount of characters the textarea required to be valid.</p>
</div>
<div class="l-col">
<span class="attribute-name"><code class="tag">"15"</code></span>
<p class="_p">You can use <strong>integers</strong>.</p>

<span class="_example">
<textarea class="textarea" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>

</span>
{/*
<span class="_html">
<textarea class="textarea" rows="3"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>
</textarea>

</span>

</div>
</div>





<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute">maxlength</span>
<p class="_p">Defines the maxlength amount of characters allowed.</p>
</div>
<div class="l-col">
<span class="attribute-name"><code class="tag">"140"</code></span>
<p class="_p">You can use <strong>integers</strong>.</p>


<span class="_example">
<textarea class="textarea" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>

</span>
{/*
<span class="_html">
<textarea class="textarea" rows="3"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>
</textarea>

</span>

</div>
</div>





<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute">placeholder</span>
<p class="_p">Defines a non-selectable placeholder text that only appears when the textarea is empty.</p>
</div>
<div class="l-col">
<span class="attribute-name"><code class="tag">"e.g. Hello my name is Alex"</code></span>
<p class="_p">You can hint at the format expected for the textarea.</p>

<span class="_example">
<textarea class="textarea" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>

</span>
{/*
<span class="_html">
<textarea class="textarea" rows="3"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>
</textarea>

</span>

</div>
</div>





<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute">cols</span>
<p class="_p">Defines the number of columns.</p>
</div>
<div class="l-col">
<span class="attribute-name"><code class="tag">"40"</code></span>
<p class="_p">You can use <strong>integers</strong>.</p>
<p>Example of <code class="tag"> columns="40"</code>:</p>

<span class="_example">
<textarea columns="40" rows="10"></textarea>

</span>
</div>
</div>





<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute">rows</span>
<p class="_p">Defines the number of rows.</p>
</div>
<div class="l-col">
<span class="attribute-name"><code class="tag">"2"</code></span>
<p class="_p">You can use <strong>integers</strong>.</p>
<p>Example of <code class="tag">rows="2"</code>:</p>
<span class="_example">
<textarea class="textarea" rows="2"></textarea>

</span>
</div>
</div>





<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute">wrap</span>
<p class="_p">Defines how the text should be wrapped.</p>
</div>
<div class="l-col">
<span class="attribute-name"><code class="tag">"hard"</code></span>
<p class="_p">The text will always be wrapped depending on the <code>cols</code> value.</p>

<span class="_example">
<textarea class="textarea" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>

</span>
{/*
<span class="_html">
<textarea class="textarea" rows="3"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>
</textarea>

</span>


<span class="attribute-values"><code class="tag">"soft"</code></span>
<p class="_p">The text will only break when needed.</p>


<span class="_example">
<textarea class="textarea" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>

</span>
{/*
<span class="_html">
<textarea class="textarea" rows="3"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="off"></textarea>
</textarea>

</span>

</div>
</div>
<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute-name"><code class="tag">disabled</code></span>
<p class="_p">Disables the textarea.</p>
</div>
<div class="l-col">
<span class="_example">
<textarea class="textarea" rows="5"></textarea>

</span>

{/*
<span class="_html">
<textarea class="textarea" rows="3"><textarea columns="40" rows="5" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft" disabled=""></textarea>
</textarea>

</span>

</div>
</div>
<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute-name"><code class="tag">required</code></span>
<p class="_p">Tells the browser that this textarea is <strong>required</strong>. Leaving it empty will show a warning.
</div>
<div class="l-col">
<span class="_example">
<textarea class="textarea invalid" rows="5"></textarea>
<span></span>
</span>


{/*
<span class="_html">
<textarea class="textarea" rows="3"><textarea columns="40" rows="5" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft" disabled="" required=""></textarea>
</textarea>

</span>

</div>
</div>
<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute-name"><code class="tag">autofocus</code></span>
<p class="_p">Sets focus on the textarea when the web page loads.
</div>
<div class="l-col">

<span class="_example">
<textarea class="textarea" rows="5" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft" disabled="" required=""></textarea>

</span>

</div>
</div>
<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute-name"><code class="tag">readonly</code></span>
<p class="_p">Turns the textarea into a read-only element.</p>
</div>
<div class="l-col">
<span class="_example">
<textarea class="textarea" rows="5" placeholder="This textarea is read only" name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft" disabled="" required="" readonly=""></textarea>

</span>
</div>
</div>
<div class="l-row l-two-col-left">
<div class="l-col">
<span class="attribute-name"><code class="tag">spellcheck</code></span>
<p class="_p">Enables the browser spell checker.
</div>
<div class="l-col">

<span class="_example">
<textarea class="textarea" rows="5" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft" disabled="" required="" readonly="" spellcheck=""></textarea>

</span>
{/*
<span class="_html">
<textarea class="textarea" rows="3"><textarea columns="40" rows="5" placeholder="e.g. Hello my name is Alex" name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft" disabled="" required="" readonly="" spellcheck=""></textarea>
</textarea>

</span>

</div>
</div>
</li>
<li class="section-container">
<h3 class="_h3">Validation</h3>
<div class="form-container">
<label>Form Label</label><textarea class="textarea invalid" rows="10" placeholder="e.g. Hello my name is Alex" name="message"></textarea>
<span></span>
</div>
<div class="form-container">
<label>Form Label</label><textarea class="textarea valid" rows="10" placeholder="e.g. Hello my name is Alex" name="message"></textarea>
<span></span>
</div>

<div class="form-container">
<label>Title</label>
<ul class="radio-container">
<li><label><input type="radio" name="title" value="mr">Mr</label></li>
<li><label><input type="radio" name="title" value="mrs"><label>Mrs</label></li>
<li><label><input type="radio" name="title" value="miss"><label>Miss</label></li>
</ul>
</div>
<div class="form-container">
<label>First name</label>
<input type="text" name="first_name" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
</div>
<div class="form-container">
<label>Last name</label>
<input type="text" name="last_name">
</div>
<div class="form-container">
<label>Email</label>
<input type="email" name="email" required="">
</div>
<div class="form-container">
<label>Phone number</label>
<input type="tel" name="phone">
</div>
<div class="form-container">
<label>Password</label>
<input type="password" name="password" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
</div>
<div class="form-container">
<label>Country</label>
<div class="select-container">
<select>
<option>China</option>
<option>India</option>
<option>United States</option>
<option>Indonesia</option>
<option>Brazil</option>
</select>
</div>
</div>
<div class="form-container">
<label><input type="checkbox" vale="terms"> I agree to the <a href="/">terms and conditions</a></label>
</div>
<div class="button-container">
<button>Sign up</button>
<button type="reset">Resetform</button>
</div></div>
*/}
			</li>
		);
	}
}

export default ModulesForms;
