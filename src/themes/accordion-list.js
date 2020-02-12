import React, { Component } from "react";

class ThemesAccordionLists extends Component {
	render() {
		return (<ul class="style-guide">

			<li className="section-container">
				<h1 class="_h1">"Accordion" List Theme</h1>
				<p class="_p">A use case was defined that had the style of an expanded accordion panel, without the expand/collapse capability. Essentially an all-expanded accordion. The problem is that the jQuery UI Accordion adds unused HTML and the <code>prevent default</code> to click behaviour. The <code>prevent default</code> on an anchor tag will disable the link navigation behaviour that you would expect when you click a link. Therefore, the accordion theme can be used with or without the accordion module but it was too late to change the naming of the theme. therefore, accordion classnames may be used without the accordion expand/collapse functionality.</p>
				<p class="_p">These styles below are specific to the accordion lists. However, all existing <a href="../base/lists.html">list styles</a> still apply.</p>
				<p class="_p">As mentioined previously, the accordion list style can be used without the accordion expand/collapse functionality. It's important to distinguish how to differentiate when the theme is used with an accordion, and when it's used without.</p>
				<div class="l-row l-two-col-even">
					<div class="l-col">
						{/*start module */}
						{/*start module */}
						{/*start module */}
						<div class="_example _html">
							<h4>HTML Code Example</h4>
							<pre>
								{/*
<textarea class="_copy-textarea" rows="8"><div class="accordion">
									<div class="accordion-content">
										<ul>
											<li>Lorem ipsum dolor sit amet.</li>
											<li>Lorem ipsum dolor sit amet.</li>
										</ul>
									</div>
								</div></textarea>
*/}
							</pre>
							<div class="_button-container">
								<button type="button" class="_copy">Copy to clipboard</button>
							</div>
						</div>
						{/*end module */}
						{/*end module */}
						{/*end module */}
					</div>
					<div class="l-col">
						{/*start module */}
						{/*start module */}
						{/*start module */}
						<div class="_example _html">
							<h4>HTML Code Example</h4>
							<pre>
								{/*
<textarea class="_copy-textarea" rows="8"><div class="primary-alt">
									<div class="accordion-content">
										<ul>
											<li>Lorem ipsum dolor sit amet.</li>
											<li>Lorem ipsum dolor sit amet.</li>
										</ul>
									</div>
								</div></textarea>
*/}
							</pre>
							<div class="_button-container">
								<button type="button" class="_copy">Copy to clipboard</button>
							</div>
						</div>
						{/*end module */}
						{/*end module */}
						{/*end module */}
					</div>
				</div>
				{/****** ***** ***** ***** ***** ***** ***** ***** ***** ***** */}
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
			</li>
			<li className="section-container">
				<h5 class="_h5">Automatic List Seperator</h5>
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
				{/****** ***** ***** ***** ***** ***** ***** ***** ***** ***** */}
				<div class="l-row l-two-col-even">
					<div class="l-col">
						{/*start module */}
						{/*start module */}
						{/*start module */}
						<div class="accordion">
							<div class="accordion-content">
								<ul>
									<li class="head"><a>Lorem ipsum dolor sit amet</a></li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
								<ul>
									<li class="head"><a>Lorem ipsum dolor sit amet</a></li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
								<ul>
									<li class="head"><a>Lorem ipsum dolor sit amet</a></li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
							</div>
						</div>
						{/*end module */}
						{/*end module */}
						{/*end module */}
					</div>
					<div class="l-col">
						{/*start module */}
						{/*start module */}
						{/*start module */}

						<div class="_example _html">
							<h4>HTML Code Example</h4>
							<pre>
								{/*
<textarea class="_copy-textarea" rows="12"><div class="accordion">
									<div class="accordion-content">
										<ul>
											<li>Lorem ipsum dolor sit amet.</li>
											<li>Lorem ipsum dolor sit amet.</li>
										</ul>
										<ul>
											<li>Lorem ipsum dolor sit amet.</li>
											<li>Lorem ipsum dolor sit amet.</li>
										</ul>
									</div>
								</div></textarea>
*/}
							</pre>
							<div class="_button-container">
								<button type="button" class="_copy">Copy to clipboard</button>
							</div>
						</div>
						{/*end module */}
						{/*end module */}
						{/*end module */}
					</div>
				</div>
				{/****** ***** ***** ***** ***** ***** ***** ***** ***** ***** */}
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
			</li>
			<li className="section-container">
				<h5 class="_h5">Automatic List Seperator</h5>
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
				{/****** ***** ***** ***** ***** ***** ***** ***** ***** ***** */}
				<div class="l-row l-two-col-even">
					<div class="l-col">
						{/*start module */}
						{/*start module */}
						{/*start module */}
						<div class="primary-alt">
							<div class="accordion-content">
								<ul>
									<li class="head"><a>Lorem ipsum dolor sit amet</a></li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
								<ul>
									<li class="head"><a>Lorem ipsum dolor sit amet</a></li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
								<ul>
									<li class="head"><a>Lorem ipsum dolor sit amet</a></li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
							</div>
						</div>
						{/*end module */}
						{/*end module */}
						{/*end module */}
					</div>
					<div class="l-col">
						{/*start module */}
						{/*start module */}
						{/*start module */}

						<div class="_example _html">
							<h4>HTML Code Example</h4>
							<pre>
								{/*
<textarea class="_copy-textarea" rows="12"><div class="primary-alt">
									<div class="accordion-content">
										<ul>
											<li>Lorem ipsum dolor sit amet.</li>
											<li>Lorem ipsum dolor sit amet.</li>
										</ul>
										<ul>
											<li>Lorem ipsum dolor sit amet.</li>
											<li>Lorem ipsum dolor sit amet.</li>
										</ul>
									</div>
								</div></textarea>
*/}
							</pre>
							<div class="_button-container">
								<button type="button" class="_copy">Copy to clipboard</button>
							</div>
						</div>
						{/*end module */}
						{/*end module */}
						{/*end module */}
					</div>
				</div>
				{/****** ***** ***** ***** ***** ***** ***** ***** ***** ***** */}
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
			</li>
			<li className="section-container">
				<h5 class="_h5">Bullet List</h5>
				<p class="_p">Article themes have bulletid lists by default. Primary and Secondary lists do not have bulletid lists by default and therefore adding the <code>bullet</code> class is required to force bullets.</p>
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
				{/****** ***** ***** *****             ***** ***** ***** ***** */}
				{/****** ***** ***** ***** ***** ***** ***** ***** ***** ***** */}
				<div class="l-row l-two-col-even">
					<div class="l-col">
						{/*start module */}
						{/*start module */}
						{/*start module */}
						<div class="primary-alt">
							<div class="accordion-content">
								<ul>
									<li>
										<ul class="bullet">
											<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
										</ul>
									</li>
								</ul>
								<ul>
									<li>
										<ul class="bullet">
											<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
						{/*end module */}
						{/*end module */}
						{/*end module */}
					</div>
					<div class="l-col">
						{/*start module */}
						{/*start module */}
						{/*start module */}
						<div class="_example _html">
							<h4>HTML Code Example</h4>
							<pre>
								{/*
<textarea class="_copy-textarea" rows="8"><ul>
									<li>
										<ul class="bullet">
											<li>Lorem ipsum dolor sit amet.</li>
											<li>Lorem ipsum dolor sit amet.</li>
										</ul>
									</li>
								</ul></textarea>
*/}
							</pre>
							<div class="_button-container">
								<button type="button" class="_copy">Copy to clipboard</button>
							</div>
						</div>
					</div>
				</div>

			</li>
		</ul >);
	}
}

export default ThemesAccordionLists;