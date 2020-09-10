import React, { Component } from "react"
import FormLayout from "../Containers/FormLayout"
import Top from "../Placeholders/Top"

class TextareaConfig extends Component {
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
						<h2 className="_h2">Textarea Configuration</h2>

						<h3 className="_h3">Textarea Autocomplete</h3>
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

						<h3 className="_h3">Textarea Autofocus</h3>
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

						<h3 className="_h3">Textarea Cols</h3>
						<ul className="_ul">
							<li className="_li">
								<code>cols=""</code> defines the number of columns.
							</li>
							<li className="_li">
								You can use <strong>integers</strong>, e.g.: <code>cols="40"</code>.
							</li>
						</ul>
						<FormLayout>
							<fieldset>
								<div className="form-container">
									<textarea columns="40" rows="10"></textarea>
								</div>
							</fieldset>
						</FormLayout>

						<Top />

						<h3 className="_h3">Textarea Disabled</h3>
						<ul className="_ul">
							<li className="_li">
								<code>disabled=""</code> defines the number of columns.
							</li>
							<li className="_li">
								Disables the textarea, e.g.: <code>disabled="true"</code>.
							</li>
						</ul>

						<FormLayout>
							<fieldset>
								<div className="form-container">
									<textarea columns="40" rows="5" placeholder="Disabled" disabled="disabled"></textarea>
								</div>
							</fieldset>
						</FormLayout>

						<Top />

						<h3 className="_h3">Textarea Max-Length</h3>
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
									<textarea columns="40" rows="5" placeholder="maxlength = 10" maxLength="10"></textarea>
								</div>
							</fieldset>
						</FormLayout>

						<Top />

						<h3 className="_h3">Textarea minlength</h3>
						<ul className="_ul">
							<li className="_li">
								<code>minlength=""</code> defines the minimum amount of characters the textarea required to be valid.
							</li>
							<li className="_li">
								You can use <strong>integers</strong>, e.g.: <code>minlength="15"</code>.
							</li>
						</ul>
						<FormLayout>
							<fieldset>
								<div className="form-container">
									<textarea columns="40" rows="5" placeholder="minlength = 10" minLength="15"></textarea>
								</div>
							</fieldset>
						</FormLayout>

						<Top />

						<h3 className="_h3">Textarea Placeholder</h3>
						<ul className="_ul">
							<li className="_li">
								<code>placeholder=""</code> defines a non-selectable placeholder text that only appears when the textarea is empty.
							</li>

							<li className="_li">
								You can hint at the format expected for the textarea, e.g.: <code>placeholder="Leave feedback"</code>
							</li>
						</ul>
						<FormLayout>
							<fieldset>
								<div className="form-container">
									<textarea columns="40" rows="5" placeholder="Leave feedback"></textarea>
								</div>
							</fieldset>
						</FormLayout>

						<Top />

						<h3 className="_h3">Textarea Rows</h3>
						<ul className="_ul">
							<li className="_li">
								<code>rows=""</code> defines the number of rows.
							</li>
							<li className="_li">
								You can use <strong>integers</strong>, e.g.: <code>rows="5"</code>.
							</li>
						</ul>
						<FormLayout>
							<fieldset>
								<div className="form-container">
									<textarea columns="40" rows="5"></textarea>
								</div>
							</fieldset>
						</FormLayout>

						<Top />

						<h3 className="_h3">Textarea Spellcheck</h3>
						<ul className="_ul">
							<li className="_li">
								<code>spellcheck="true"</code> enables the browser spell-checker.
							</li>
						</ul>
						<FormLayout>
							<fieldset>
								<div className="form-container">
									<textarea columns="40" rows="10" spellCheck="true"></textarea>
								</div>
							</fieldset>
						</FormLayout>

						<Top />

						<h3 className="_h3">Textarea Wrap</h3>
						<ul className="_ul">
							<li className="_li">
								<code>wrap=""</code> defines how the text should be wrapped.
							</li>
							<li className="_li">
								<code>wrap="hard"</code> will always be wrapped depending on the <code>cols</code> value.
							</li>
							<li className="_li">
								<code>wrap="soft"</code> the text will only break when needed.
							</li>
						</ul>
					</div>
				</div>
			</>
		)
	}
}
export default TextareaConfig
