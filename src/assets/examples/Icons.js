import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";

class ExampleIconXXX extends Component {
	constructor() {
		super();
		const initialCodeString = `<thead className="double-head">\n	<tr>\n	  <th>Align left</th>\n	  <th colspan="3">Aligned Left</th>\n	  <th>Aligned right</th>\n	</tr>\n	<tr>\n	  <th>Aligned Left</th>\n	  <th>Aligned right</th>\n	  <th>Aligned right</th>\n	  <th>Aligned right</th>\n	  <th>Aligned right</th>\n	</tr>\n  </thead>`;
		this.state = {
			selected: "tomorrow",
			style: require("../../assets/styles/hljs/tomorrow").default,
			code: initialCodeString,
			showLineNumbers: true,
			copied: false
			//width: window.innerWidth,
			//height: window.innerHeight
		};
	}
	//state = {
	//value: '<div class="l-row l-header">\n Dilly\n </div>',
	//copied: false
	//};
	render() {
		return (
			<div className="_example">
				<h4 className="_h4">HTML Code Example</h4>
				<SyntaxHighlighter language="html">
					{this.state.code}
				</SyntaxHighlighter>
				<input
					hidden
					value={this.state.code}
					onChange={({ target: { value } }) =>
						this.setState({ value, copied: false })
					}
				/>
				<CopyToClipboard
					text={this.state.code}
					onCopy={() => this.setState({ copied: true })}
				>
					<button>Copy to clipboard</button>
				</CopyToClipboard>

				{this.state.copied ? (
					<span style={{ color: "red" }}>Copied.</span>
				) : null}
			</div>
		);
	}
}

export default ExampleIconXXX;

{
	/*
<pre><code class="html">&lt;!-- PDF --&gt;
&lt;span class="ico pdf"&gt;
&lt;span&gt;PDF&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- XLS --&gt;
&lt;span class="ico xls"&gt;
&lt;span&gt;XLS&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- CSV --&gt;
&lt;span class="ico csv"&gt;
&lt;span&gt;CSV&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- interactive --&gt;
&lt;span class="ico interactive"&gt;
&lt;span&gt;INTERACTIVE&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- PPT --&gt;
&lt;span class="ico ppt"&gt;
&lt;span&gt;PPT&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- html --&gt;
&lt;span class="ico html"&gt;
&lt;span&gt;HTML&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- doc --&gt;
&lt;span class="ico doc"&gt;
&lt;span&gt;DOC&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- image --&gt;
&lt;span class="ico image"&gt;
&lt;span&gt;IMAGE&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- json --&gt;
&lt;span class="ico json"&gt;
&lt;span&gt;JSON&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- eFile --&gt;
&lt;span class="ico efile"&gt;
&lt;span&gt;eFile&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- txt --&gt;
&lt;span class="ico txt"&gt;
&lt;span&gt;TXT&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- PDF --&gt;
&lt;a href="/" class="ico pdf"&gt;
&lt;span&gt;PDF&lt;/span&gt;
&lt;/a&gt;</code></pre>
*/
}

{
	/*
<span className="ico <code class="html">&lt;!-- XLS --&gt;
&lt;a href="/" class="ico xls"&gt;
&lt;span&gt;XLS&lt;/span&gt;
&lt;/a&gt;</code></pre>
*/
}

{
	/*
<span className="ico <code class="html">&lt;!-- CSV --&gt;
&lt;a href="/" class="ico csv"&gt;
&lt;span&gt;CSV&lt;/span&gt;
&lt;/a&gt;</code></pre>
*/
}

{
	/*
<span className="ico <code class="html">&lt;!-- interactive --&gt;
&lt;a href="/" class="ico interactive"&gt;
&lt;span&gt;INTERACTIVE&lt;/span&gt;
&lt;/a&gt;</code></pre>
*/
}

{
	/*
<span className="ico <code class="html">&lt;!-- PPT --&gt;
&lt;a href="/" class="ico ppt"&gt;
&lt;span&gt;PPT&lt;/span&gt;
&lt;/a&gt;</code></pre>
*/
}

{
	/*
<span className="ico <code class="html">&lt;!-- html --&gt;
&lt;a href="/" class="ico html"&gt;
&lt;span&gt;HTML&lt;/span&gt;
&lt;/a&gt;</code></pre>
*/
}

{
	/*
<span className="ico <code class="html">&lt;!-- doc --&gt;
&lt;a href="/" class="ico doc"&gt;
&lt;span&gt;DOC&lt;/span&gt;
&lt;/a&gt;</code></pre>
*/
}

{
	/*
<span className="ico <code class="html">&lt;!-- image --&gt;
&lt;a href="/" class="ico image"&gt;
&lt;span&gt;IMAGE&lt;/span&gt;
&lt;/a&gt;</code></pre>
*/
}

{
	/*
<span className="ico <code class="html">&lt;!-- pedro --&gt;
&lt;a href="/" class="ico pedro"&gt;
&lt;span&gt;PEDRO&lt;/span&gt;
&lt;/a&gt;</code></pre>
*/
}

{
	/*
<span className="ico <code class="html">&lt;!-- eFile --&gt;
&lt;a href="/" class="ico efile"&gt;
&lt;span&gt;eFile&lt;/span&gt;
&lt;/a&gt;</code></pre>
*/
}

{
	/*
<span className="ico <code class="html">&lt;!-- txt --&gt;
&lt;a href="/" class="ico txt"&gt;
&lt;span&gt;TXT&lt;/span&gt;
&lt;/a&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- PDF --&gt;
&lt;span class="ico icon-only pdf"&gt;
&lt;span&gt;PDF&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- XLS --&gt;
&lt;span class="ico icon-only xls"&gt;
&lt;span&gt;XLS&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- CSV --&gt;
&lt;span class="ico icon-only csv"&gt;
&lt;span&gt;CSV&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- interactive --&gt;
&lt;span class="ico icon-only interactive"&gt;
&lt;span&gt;Interactive&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- PPT --&gt;
&lt;span class="ico icon-only ppt"&gt;
&lt;span&gt;PPT&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- html --&gt;
&lt;span class="ico icon-only html"&gt;
&lt;span&gt;HTML&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- doc --&gt;
&lt;span class="ico icon-only doc"&gt;
&lt;span&gt;DOC&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- image --&gt;
&lt;span class="ico icon-only image"&gt;
&lt;span&gt;IMAGE&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- pedro --&gt;
&lt;span href="/" class="ico icon-only pedro"&gt;
&lt;span&gt;PEDRO&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- eFile --&gt;
&lt;span href="/" class="ico icon-only efile"&gt;
&lt;span&gt;eFile&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- txt --&gt;
&lt;span href="/" class="ico icon-only txt"&gt;
&lt;span&gt;TXT&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- PDF --&gt;
&lt;li class="ico pdf"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/li&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- XLS --&gt;
&lt;li class="ico xls"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/li&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- CSV --&gt;
&lt;li class="ico csv"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/li&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- interactive --&gt;
&lt;li class="ico interactive"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/li&gt;</code></pre>
*/
}
{
	/*
<pre><code class="html">&lt;!-- PPT --&gt;
&lt;li class="ico ppt"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/li&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- html --&gt;
&lt;li class="ico html"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/li&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- doc --&gt;
&lt;li class="ico doc"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/li&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- image --&gt;
&lt;li class="ico image"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/li&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- pedro --&gt;
&lt;li href="/" class="ico pedro"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/li&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- eFile --&gt;
&lt;li href="/" class="ico efile"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/li&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- txt --&gt;
&lt;li href="/" class="ico txt"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/li&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- PDF --&gt;
&lt;td class="ico pdf"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/td&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- XLS --&gt;
&lt;td class="ico xls"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/td&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- CSV --&gt;
&lt;td class="ico csv"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/td&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- interactive --&gt;
&lt;td class="ico interactive"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/td&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- PPT --&gt;
&lt;td class="ico ppt"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/td&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- html --&gt;
&lt;td class="ico html"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/td&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- doc --&gt;
&lt;td class="ico doc"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/td&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- image --&gt;
&lt;td class="ico image"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/td&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- pedro --&gt;
&lt;td href="/" class="ico pedro"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/td&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- eFile --&gt;
&lt;td href="/" class="ico efile"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/td&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- txt --&gt;
&lt;td href="/" class="ico txt"&gt;
&lt;a href="/"&gt;Lorem ipsum...&lt;/a&gt;
&lt;/td&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- close-menu --&gt;
&lt;span class="ico close-menu"&gt;
&lt;span&gt;CLOSE MENU&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- search-submit --&gt;
&lt;span class="ico search-submit"&gt;
&lt;span&gt;SUBMIT&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- analysis --&gt;
&lt;span class="ico analysis"&gt;
&lt;span&gt;analysis&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- cancel --&gt;
&lt;span class="ico cancel"&gt;
&lt;span&gt;cancel&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- column-chart --&gt;
&lt;span class="ico column-chart"&gt;
&lt;span&gt;column-chart&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- compare --&gt;
&lt;span class="ico compare"&gt;
&lt;span&gt;compare&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- d-arrow --&gt;
&lt;span class="ico d-arrow"&gt;
&lt;span&gt;DOWN ARROW&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- download --&gt;
&lt;span class="ico download"&gt;
&lt;span&gt;download&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- edit --&gt;
&lt;span class="ico edit"&gt;
&lt;span&gt;edit&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- filter --&gt;
&lt;span class="ico filter"&gt;
&lt;span&gt;filter&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- grab-dot --&gt;
&lt;span class="ico grab-dot"&gt;
&lt;span&gt;grab-dot&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- grid-column --&gt;
&lt;span class="ico grid-column"&gt;
&lt;span&gt;grid column&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- grid-line --&gt;
&lt;span class="ico grid-line"&gt;
&lt;span&gt;grid line&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- grid-map --&gt;
&lt;span class="ico grid-map"&gt;
&lt;span&gt;grid map&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- grid-parent-column --&gt;
&lt;span class="ico grid-parent-column"&gt;
&lt;span&gt;grid parent column&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- grid-parent-line --&gt;
&lt;span class="ico grid-parent-line"&gt;
&lt;span&gt;grid parent line&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- grid-parent-map --&gt;
&lt;span class="ico grid-parent-map"&gt;
&lt;span&gt;grid-parent-map&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- grid-parent-pin --&gt;
&lt;span class="ico grid-parent-pin"&gt;
&lt;span&gt;grid-parent-pin&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- grid-pin --&gt;
&lt;span class="ico grid-pin"&gt;
&lt;span&gt;grid-pin&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- grid-key --&gt;
&lt;span class="ico grid-key"&gt;
&lt;span&gt;grid-key&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- help --&gt;
&lt;span class="ico help"&gt;
&lt;span&gt;help&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- key --&gt;
&lt;span class="ico key"&gt;
&lt;span&gt;key&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- l-arrow --&gt;
&lt;span class="ico l-arrow"&gt;
&lt;span&gt;l-arrow&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- l-range --&gt;
&lt;span class="ico l-range"&gt;
&lt;span&gt;l-range&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- line-chart --&gt;
&lt;span class="ico line-chart"&gt;
&lt;span&gt;line-chart&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- map --&gt;
&lt;span class="ico map"&gt;
&lt;span&gt;map&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- pause --&gt;
&lt;span class="ico pause"&gt;
&lt;span&gt;pause&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- pin --&gt;
&lt;span class="ico pin"&gt;
&lt;span&gt;pin&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- play --&gt;
&lt;span class="ico play"&gt;
&lt;span&gt;play&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- r-arrow --&gt;
&lt;span class="ico r-arrow"&gt;
&lt;span&gt;r-arrow&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- r-range --&gt;
&lt;span class="ico r-range"&gt;
&lt;span&gt;r-range&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- remove --&gt;
&lt;span class="ico remove"&gt;
&lt;span&gt;remove&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- reset --&gt;
&lt;span class="ico reset"&gt;
&lt;span&gt;reset&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- reset-animation --&gt;
&lt;span class="ico reset-animation"&gt;
&lt;span&gt;reset-animation&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- scroll-h --&gt;
&lt;span class="ico scroll-h"&gt;
&lt;span&gt;scroll-h&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- scroll-v --&gt;
&lt;span class="ico scroll-v"&gt;
&lt;span&gt;scroll-v&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- search-icon --&gt;
&lt;span class="ico search-icon"&gt;
&lt;span&gt;SEARCH&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- slide --&gt;
&lt;span class="ico slide"&gt;
&lt;span&gt;slide&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- sort --&gt;
&lt;span class="ico sort"&gt;
&lt;span&gt;sort&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- sort-down --&gt;
&lt;span class="ico sort-down"&gt;
&lt;span&gt;sort-down&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- sort-up --&gt;
&lt;span class="ico sort-up"&gt;
&lt;span&gt;sort-up&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- submit --&gt;
&lt;span class="ico submit"&gt;
&lt;span&gt;submit&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- checkmark --&gt;
&lt;span class="ico checkmark"&gt;
&lt;span&gt;checkmark&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- dash --&gt;
&lt;span class="ico dash"&gt;
&lt;span&gt;dash&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- dot --&gt;
&lt;span class="ico dot"&gt;
&lt;span&gt;dot&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- add-chart --&gt;
&lt;span class="ico add-chart"&gt;
&lt;span&gt;add-chart&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- add-download --&gt;
&lt;span class="ico add-download"&gt;
&lt;span&gt;add-download&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- full-screen --&gt;
&lt;span class="ico full-screen"&gt;
&lt;span&gt;full-screen&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- options --&gt;
&lt;span class="ico options"&gt;
&lt;span&gt;options&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- table --&gt;
&lt;span class="ico table"&gt;
&lt;span&gt;table&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- lock --&gt;
&lt;span class="ico lock"&gt;
&lt;span&gt;lock&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- unlock --&gt;
&lt;span class="ico unlock"&gt;
&lt;span&gt;unlock&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- submit --&gt;
&lt;span class="ico submit"&gt;
&lt;span&gt;submit&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- clone --&gt;
&lt;span class="ico clone"&gt;
&lt;span&gt;clone&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- d --&gt;
&lt;span class="ico d"&gt;
&lt;span&gt;ico d&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- a --&gt;
&lt;span class="ico a"&gt;
&lt;span&gt;ico a&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- p --&gt;
&lt;span class="ico p"&gt;
&lt;span&gt;ico p&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- da --&gt;
&lt;span class="ico da"&gt;
&lt;span&gt;ico da&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- ap --&gt;
&lt;span class="ico ap"&gt;
&lt;span&gt;ico ap&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- dp --&gt;
&lt;span class="ico dp"&gt;
&lt;span&gt;ico dp&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- dap --&gt;
&lt;span class="ico dap"&gt;
&lt;span&gt;ico dap&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- print --&gt;
&lt;span class="ico print"&gt;
&lt;span&gt;PRINT&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- info --&gt;
&lt;span class="ico info"&gt;
&lt;span&gt;Info&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- tour --&gt;
&lt;span class="ico tour"&gt;
&lt;span&gt;Tour&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- external-link --&gt;
&lt;span class="external-link"&gt;
&lt;span&gt;External Link&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!--  analysis-projections --&gt;
&lt;span class="ico-menu analysis-projections-icon"&gt;
&lt;span&gt;analysis-projections&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- az-index --&gt;
&lt;span class="ico-menu a-z-index-icon"&gt;
&lt;span&gt;az-index&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- beta --&gt;
&lt;span class="ico-menu beta-icon"&gt;
&lt;span&gt;beta&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- coal --&gt;
&lt;span class="ico-menu coal-icon"&gt;
&lt;span&gt;coal&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- upcoming --&gt;
&lt;span class="ico-menu upcoming-icon"&gt;
&lt;span&gt;upcoming&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- consumption --&gt;
&lt;span class="ico-menu consumption-icon"&gt;
&lt;span&gt;consumption&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- data-tools-model --&gt;
&lt;span class="ico-menu data-tools-model-icon"&gt;
&lt;span&gt;data-tools-model&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- electricity --&gt;
&lt;span class="ico-menu electricity-icon"&gt;
&lt;span&gt;electricity&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- email-complex --&gt;
&lt;span class="ico-menu email-complex-icon"&gt;
&lt;span&gt;email-complex&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- email-simple --&gt;
&lt;span class="ico-menu email-simple"&gt;
&lt;span&gt;email-simple&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- energy-explained --&gt;
&lt;span class="ico-menu energy-explained-icon"&gt;
&lt;span&gt;energy-explained&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- energy-in-brief --&gt;
&lt;span class="ico-menu energy-in-brief-icon"&gt;
&lt;span&gt;energy-in-brief&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- environment --&gt;
&lt;span class="ico-menu environment-icon"&gt;
&lt;span&gt;environment&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- disruptions --&gt;
&lt;span class="ico-menu disruptions-icon"&gt;
&lt;span&gt;disruptions&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- faq --&gt;
&lt;span class="ico-menu faq-icon"&gt;
&lt;span&gt;faq&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- featured-reports --&gt;
&lt;span class="ico-menu featured-reports-icon"&gt;
&lt;span&gt;featured-reports&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- markets-finance --&gt;
&lt;span class="ico-menu markets-finance-icon"&gt;
&lt;span&gt;markets-finance&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- follow-us --&gt;
&lt;span class="ico-menu follow-us-icon"&gt;
&lt;span&gt;follow-us&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- glossary --&gt;
&lt;span class="ico-menu eia-glossary-icon"&gt;
&lt;span&gt;glossary&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- international --&gt;
&lt;span class="ico-menu international-icon"&gt;
&lt;span&gt;international&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- maps --&gt;
&lt;span class="ico-menu maps-icon"&gt;
&lt;span&gt;maps&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- natural-gas --&gt;
&lt;span class="ico-menu natural-gas-icon"&gt;
&lt;span&gt;natural-gas&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- nuclear --&gt;
&lt;span class="ico-menu nuclear-icon"&gt;
&lt;span&gt;nuclear&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- open-data --&gt;
&lt;span class="ico-menu open-data-icon"&gt;
&lt;span&gt;open-data&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- petroleum --&gt;
&lt;span class="ico-menu petroleum-icon"&gt;
&lt;span&gt;petroleum&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- press-room --&gt;
&lt;span class="ico-menu press-room-icon"&gt;
&lt;span&gt;press-room&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!--  regional-icon --&gt;
&lt;span class="ico-menu regional-icon"&gt;
&lt;span&gt;regional-icons&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- renewable --&gt;
&lt;span class="ico-menu renewable-icon"&gt;
&lt;span&gt;renewable&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- reports --&gt;
&lt;span class="ico-menu reports-icon"&gt;
&lt;span&gt;reports&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- rss-complex --&gt;
&lt;span class="ico-menu rss-complex-icon"&gt;
&lt;span&gt;rss-complex&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- survey-forms --&gt;
&lt;span class="ico-menu survey-forms-icon"&gt;
&lt;span&gt;survey-forms&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- teachers --&gt;
&lt;span class="ico-menu teachers-icon"&gt;
&lt;span&gt;teachers&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- today-in-energy --&gt;
&lt;span class="ico-menu today-in-energy-icon"&gt;
&lt;span&gt;today-in-energy&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- total-energy --&gt;
&lt;span class="ico-menu total-energy-icon"&gt;
&lt;span&gt;total-energy&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- states --&gt;
&lt;span class="ico-menu states-icon"&gt;
&lt;span&gt;states&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- whats-new --&gt;
&lt;span class="ico-menu whats-new-icon"&gt;
&lt;span&gt;whats-new&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
	<pre><code class="html">
&lt;ul class="ico icon-list"&gt;
&lt;li class="ico reports-icon"&gt;
&lt;a href&gt;Link&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">
&lt;ul class="ico icon-list"&gt;
&lt;li class="ico email-simple"&gt;
&lt;a href&gt;Link&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">
&lt;ul class="ico icon-list"&gt;
&lt;li class="ico rss-complex-icon"&gt;
&lt;a href&gt;Link&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- residential --&gt;
&lt;span class="residential-icon"&gt;
&lt;span&gt;residential&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- commercial --&gt;
&lt;span class="commercial-icon"&gt;
&lt;span&gt;commercial&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- industrial --&gt;
&lt;span class="industrial-icon"&gt;
&lt;span&gt;industrial&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- facebook --&gt;
&lt;span class="facebook"&gt;
&lt;span&gt;facebook&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- twitter --&gt;
&lt;span class="twitter"&gt;
&lt;span&gt;twitter&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- youtube --&gt;
&lt;span class="youtube"&gt;
&lt;span&gt;youtube&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- flickr --&gt;
&lt;span class="flickr"&gt;
&lt;span&gt;flickr&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- linkedin --&gt;
&lt;span class="linkedin"&gt;
&lt;span&gt;linkedin&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- email --&gt;
&lt;span class="email"&gt;
&lt;span&gt;email&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}

{
	/*
<pre><code class="html">&lt;!-- rss --&gt;
&lt;span class="rss"&gt;
&lt;span&gt;rss&lt;/span&gt;
&lt;/span&gt;</code></pre>
*/
}
