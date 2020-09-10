import React, { Component } from "react"
import FormLayout from "../Containers/FormLayout"
import Top from "../Placeholders/Top"

class TextInputConfig extends Component {
	state = { showing: true }
	render() {
		const { showing } = this.state
		return (
			<>
				<div className="_example">
					<button onClick={() => this.setState({ showing: !showing })} className="configuration">
						Textarea Configuration
					</button>
					<div style={{ display: showing ? "block" : "none" }}>
						<h2 className="_h2">Text Input Configurations</h2>

						<h3 className="_h3">Input Text</h3>

						<ul className="_ul">
							<li className="_li">
								The <code>type="text"</code> is single line text input that accepts any type of character
							</li>
						</ul>
						<h3 className="_h3">Input Number</h3>
						<ul className="_ul">
							<li className="_li">
								The <code>type="number"</code> the browser will try to only allow valid numbers
							</li>
							<li className="_li">
								The <code>type="number"</code> on mobile devices, the number keyboard will show up
							</li>
						</ul>
						<h3 className="_h3">Input Email</h3>
						<ul className="_ul">
							<li className="_li">
								The <code>type="email"</code> the browser will try to only allow valid email addresses
							</li>
							<li className="_li">
								The <code>type="email"</code> on mobile devices, the email keyboard will show up.
							</li>
						</ul>
						<h3 className="_h3">Input TelephoneEmail</h3>
						<ul className="_ul">
							<li className="_li">
								The <code>type="tel"</code> the browser will try to only allow valid phone numbers
							</li>
							<li className="_li">
								The <code>type="tel"</code> on mobile devices, the numeric keyboard will show up.
							</li>
							{/*
							<li className="_li">Additional <code>tel</code> configurations:
								<ul className="_ul">
									<li className="_li">
										<code>type="tel-country-code"</code>
									</li>
									<li className="_li">
										<code>type="tel-national"</code>
									</li>
									<li className="_li">
										<code>type="tel-area-code"</code>
									</li>
									<li className="_li">
										<code>type="tel-local"</code>
									</li>
									<li className="_li">
										<code>type="tel-local-prefix"</code>
									</li>
									<li className="_li">
										<code>type="tel-local-suffix"</code>
									</li>
									<li className="_li">
										<code>type="tel-extension"</code>
									</li>
								</ul>
							</li>
							*/}
						</ul>

						<h3 className="_h3">Text Input Autocomplete</h3>
						<p className="_p">
							What controls fall into each group is described here: <a href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#inappropriate-for-the-control">https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#inappropriate-for-the-control</a>.
						</p>
						<ul className="_ul">
							<li className="_li">
								The <code>autocomplete="on"</code> will <strong>enable</strong> autocomplete functionality in the browser.
							</li>

							<li className="_li">
								The <code>autocomplete="off"</code> will <strong>disable</strong> autocomplete functionality in the browser.
							</li>
						</ul>
						<Top />

						<h3 className="_h3">Text Input Autofocus</h3>
						<p className="_accessibility _p">
							<strong>
								<span className="_accessibility-requirement">Accessibility best-practices:</span>
							</strong>
						</p>
						<ul className="_accessibility _ul">
							<li className="_accessibility _li">
								Do not use the <code>autofocus=""</code>.
							</li>
						</ul>

						<Top />

						<h3 className="_h3">Text Input Disabled</h3>
						<ul className="_ul">
							<li className="_li">
								<code>disabled=""</code> defines the number of columns.
							</li>
							<li className="_li">
								Disables the input, e.g.: <code>disabled="true"</code>.
							</li>
						</ul>

						<FormLayout>
							<fieldset>
								<div className="form-container">
									<input type="text" placeholder="Disabled" disabled="disabled" />
								</div>
							</fieldset>
						</FormLayout>

						<Top />

						<h3 className="_h3">Text Input Max-Length</h3>
						<ul className="_ul">
							<li className="_li">
								<code>maxlength=""</code> defines the maxlength amount of characters allowed.
							</li>
							<li className="_li">
								You can use <strong>integers</strong>, e.g.: <code>maxlength="50"</code>.
							</li>
						</ul>
						<FormLayout>
							<fieldset>
								<div className="form-container">
									<input type="text" placeholder="maxlength = 10" maxLength="10" />
								</div>
							</fieldset>
						</FormLayout>

						<Top />

						<h3 className="_h3">Text Input minlength</h3>
						<ul className="_ul">
							<li className="_li">
								<code>minlength=""</code> defines the minimum amount of characters the input required to be valid.
							</li>
							<li className="_li">
								You can use <strong>integers</strong>, e.g.: <code>minlength="15"</code>.
							</li>
						</ul>
						<FormLayout>
							<fieldset>
								<div className="form-container">
									<input type="text" placeholder="minlength = 10" minLength="15" />
								</div>
							</fieldset>
						</FormLayout>

						<Top />

						<h3 className="_h3">Text Input Placeholder</h3>
						<ul className="_ul">
							<li className="_li">
								<code>placeholder=""</code> defines a non-selectable placeholder text that only appears when the input is empty.
							</li>
							<li className="_li">
								You can hint at the format expected for the input, e.g.: <code>placeholder="Leave feedback"</code>
							</li>
						</ul>
						<FormLayout>
							<fieldset>
								<div className="form-container">
									<input type="text" placeholder="Leave feedback" />
								</div>
							</fieldset>
						</FormLayout>

						<Top />

						<h3 className="_h3">Text Input Spellcheck</h3>

						<ul className="_ul">
							<li className="_li">
								<code>spellcheck="true"</code> enables the browser spell-checker.
							</li>
						</ul>
						<FormLayout>
							<fieldset>
								<div className="form-container">
									<input columns="40" rows="10" spellCheck="true" />
								</div>
							</fieldset>
						</FormLayout>
					</div>
				</div>
			</>
		)
	}
}
export default TextInputConfig
