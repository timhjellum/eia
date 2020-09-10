import React, { Component } from "react"

import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

class ExampleIconXXX extends Component {
	constructor() {
		super()
		const initialCodeString = `<thead className="double-head">\n  <tr>\n    <th>Align left</th>\n    <th colSpan="3">Aligned Left</th>\n    <th>Aligned right</th>\n  </tr>\n  <tr>\n    <th>Aligned Left</th>\n    <th>Aligned right</th>\n    <th>Aligned right</th>\n    <th>Aligned right</th>\n    <th>Aligned right</th>\n  </tr>\n  </thead>`
		this.state = {
			selected: tomorrow,
			//style: require("../../assets/styles/hljs/tomorrow").default,
			code: initialCodeString,
			showLineNumbers: true,
			copied: false
			//width: window.innerWidth,
			//height: window.innerHeight
		}
	}
	//state = {
	//value: '<div class="l-row l-header">\n Dilly\n </div>',
	//copied: false
	//};
	render() {
		return (
			<div className="_example">
				<h4 className="_h4">HTML Code Example</h4>
				<SyntaxHighlighter language="html" style={this.state.selected}>
					{this.state.code}
				</SyntaxHighlighter>
				<input hidden value={this.state.code} onChange={({ target: { value } }) => this.setState({ value, copied: false })} />
				<CopyToClipboard text={this.state.code} onCopy={() => this.setState({ copied: true })}>
					<button>Copy to clipboard</button>
				</CopyToClipboard>

				{this.state.copied ? <span className="copied">The HTML has been copied to your clipboard.</span> : null}
			</div>
		)
	}
}

export default ExampleIconXXX

{
	/*
<pre><code class="html"><!-- PDF -->
<span class="ico inline pdf">\n  <span>PDF</span>\n</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- XLS -->
<span class="ico xls">
<span>XLS</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- CSV -->
<span class="ico csv">
<span>CSV</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- interactive -->
<span class="ico interactive">
<span>INTERACTIVE</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- PPT -->
<span class="ico ppt">
<span>PPT</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- html -->
<span class="ico html">
<span>HTML</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- doc -->
<span class="ico doc">
<span>DOC</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- image -->
<span class="ico image">
<span>IMAGE</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- json -->
<span class="ico json">
<span>JSON</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- eFile -->
<span class="ico efile">
<span>eFile</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- txt -->
<span class="ico txt">
<span>TXT</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- PDF -->
<a to="/" class="ico pdf">
<span>PDF</span>
</a></code></pre>
*/
}

{
	/*
<span className="ico <code class="html"><!-- XLS -->
<a to="/" class="ico xls">
<span>XLS</span>
</a></code></pre>
*/
}

{
	/*
<span className="ico <code class="html"><!-- CSV -->
<a to="/" class="ico csv">
<span>CSV</span>
</a></code></pre>
*/
}

{
	/*
<span className="ico <code class="html"><!-- interactive -->
<a to="/" class="ico interactive">
<span>INTERACTIVE</span>
</a></code></pre>
*/
}

{
	/*
<span className="ico <code class="html"><!-- PPT -->
<a to="/" class="ico ppt">
<span>PPT</span>
</a></code></pre>
*/
}

{
	/*
<span className="ico <code class="html"><!-- html -->
<a to="/" class="ico html">
<span>HTML</span>
</a></code></pre>
*/
}

{
	/*
<span className="ico <code class="html"><!-- doc -->
<a to="/" class="ico doc">
<span>DOC</span>
</a></code></pre>
*/
}

{
	/*
<span className="ico <code class="html"><!-- image -->
<a to="/" class="ico image">
<span>IMAGE</span>
</a></code></pre>
*/
}

{
	/*
<span className="ico <code class="html"><!-- pedro -->
<a to="/" class="ico pedro">
<span>PEDRO</span>
</a></code></pre>
*/
}

{
	/*
<span className="ico <code class="html"><!-- eFile -->
<a to="/" class="ico efile">
<span>eFile</span>
</a></code></pre>
*/
}

{
	/*
<span className="ico <code class="html"><!-- txt -->
<a to="/" class="ico txt">
<span>TXT</span>
</a></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- PDF -->
<span class="ico icon-only pdf">
<span>PDF</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- XLS -->
<span class="ico icon-only xls">
<span>XLS</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- CSV -->
<span class="ico icon-only csv">
<span>CSV</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- interactive -->
<span class="ico icon-only interactive">
<span>Interactive</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- PPT -->
<span class="ico icon-only ppt">
<span>PPT</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- html -->
<span class="ico icon-only html">
<span>HTML</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- doc -->
<span class="ico icon-only doc">
<span>DOC</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- image -->
<span class="ico icon-only image">
<span>IMAGE</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- pedro -->
<span  class="ico icon-only pedro">
<span>PEDRO</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- eFile -->
<span  class="ico icon-only efile">
<span>eFile</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- txt -->
<span  class="ico icon-only txt">
<span>TXT</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- PDF -->
<li class="ico pdf">
<a to="/">Lorem ipsum...</a>
</li></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- XLS -->
<li class="ico xls">
<a to="/">Lorem ipsum...</a>
</li></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- CSV -->
<li class="ico csv">
<a to="/">Lorem ipsum...</a>
</li></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- interactive -->
<li class="ico interactive">
<a to="/">Lorem ipsum...</a>
</li></code></pre>
*/
}
{
	/*
<pre><code class="html"><!-- PPT -->
<li class="ico ppt">
<a to="/">Lorem ipsum...</a>
</li></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- html -->
<li class="ico html">
<a to="/">Lorem ipsum...</a>
</li></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- doc -->
<li class="ico doc">
<a to="/">Lorem ipsum...</a>
</li></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- image -->
<li class="ico image">
<a to="/">Lorem ipsum...</a>
</li></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- pedro -->
<li  class="ico pedro">
<a to="/">Lorem ipsum...</a>
</li></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- eFile -->
<li  class="ico efile">
<a to="/">Lorem ipsum...</a>
</li></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- txt -->
<li  class="ico txt">
<a to="/">Lorem ipsum...</a>
</li></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- PDF -->
<td class="ico pdf">
<a to="/">Lorem ipsum...</a>
</td></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- XLS -->
<td class="ico xls">
<a to="/">Lorem ipsum...</a>
</td></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- CSV -->
<td class="ico csv">
<a to="/">Lorem ipsum...</a>
</td></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- interactive -->
<td class="ico interactive">
<a to="/">Lorem ipsum...</a>
</td></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- PPT -->
<td class="ico ppt">
<a to="/">Lorem ipsum...</a>
</td></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- html -->
<td class="ico html">
<a to="/">Lorem ipsum...</a>
</td></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- doc -->
<td class="ico doc">
<a to="/">Lorem ipsum...</a>
</td></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- image -->
<td class="ico image">
<a to="/">Lorem ipsum...</a>
</td></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- pedro -->
<td  class="ico pedro">
<a to="/">Lorem ipsum...</a>
</td></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- eFile -->
<td  class="ico efile">
<a to="/">Lorem ipsum...</a>
</td></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- txt -->
<td  class="ico txt">
<a to="/">Lorem ipsum...</a>
</td></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- close-menu -->
<span class="ico close-menu">
<span>CLOSE MENU</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- search-submit -->
<span class="ico search-submit">
<span>SUBMIT</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- analysis -->
<span class="ico analysis">
<span>analysis</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- cancel -->
<span class="ico cancel">
<span>cancel</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- column-chart -->
<span class="ico column-chart">
<span>column-chart</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- compare -->
<span class="ico compare">
<span>compare</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- d-arrow -->
<span class="ico d-arrow">
<span>DOWN ARROW</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- download -->
<span class="ico download">
<span>download</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- edit -->
<span class="ico edit">
<span>edit</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- filter -->
<span class="ico filter">
<span>filter</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- grab-dot -->
<span class="ico grab-dot">
<span>grab-dot</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- grid-column -->
<span class="ico grid-column">
<span>grid column</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- grid-line -->
<span class="ico grid-line">
<span>grid line</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- grid-map -->
<span class="ico grid-map">
<span>grid map</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- grid-parent-column -->
<span class="ico grid-parent-column">
<span>grid parent column</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- grid-parent-line -->
<span class="ico grid-parent-line">
<span>grid parent line</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- grid-parent-map -->
<span class="ico grid-parent-map">
<span>grid-parent-map</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- grid-parent-pin -->
<span class="ico grid-parent-pin">
<span>grid-parent-pin</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- grid-pin -->
<span class="ico grid-pin">
<span>grid-pin</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- grid-key -->
<span class="ico grid-key">
<span>grid-key</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- help -->
<span class="ico help">
<span>help</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- key -->
<span class="ico key">
<span>key</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- l-arrow -->
<span class="ico l-arrow">
<span>l-arrow</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- l-range -->
<span class="ico l-range">
<span>l-range</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- line-chart -->
<span class="ico line-chart">
<span>line-chart</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- map -->
<span class="ico map">
<span>map</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- pause -->
<span class="ico pause">
<span>pause</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- pin -->
<span class="ico pin">
<span>pin</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- play -->
<span class="ico play">
<span>play</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- r-arrow -->
<span class="ico r-arrow">
<span>r-arrow</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- r-range -->
<span class="ico r-range">
<span>r-range</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- remove -->
<span class="ico remove">
<span>remove</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- reset -->
<span class="ico reset">
<span>reset</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- reset-animation -->
<span class="ico reset-animation">
<span>reset-animation</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- scroll-h -->
<span class="ico scroll-h">
<span>scroll-h</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- scroll-v -->
<span class="ico scroll-v">
<span>scroll-v</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- search-icon -->
<span class="ico search-icon">
<span>SEARCH</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- slide -->
<span class="ico slide">
<span>slide</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- sort -->
<span class="ico sort">
<span>sort</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- sort-down -->
<span class="ico sort-down">
<span>sort-down</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- sort-up -->
<span class="ico sort-up">
<span>sort-up</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- submit -->
<span class="ico submit">
<span>submit</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- checkmark -->
<span class="ico checkmark">
<span>checkmark</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- dash -->
<span class="ico dash">
<span>dash</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- dot -->
<span class="ico dot">
<span>dot</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- add-chart -->
<span class="ico add-chart">
<span>add-chart</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- add-download -->
<span class="ico add-download">
<span>add-download</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- full-screen -->
<span class="ico full-screen">
<span>full-screen</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- options -->
<span class="ico options">
<span>options</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- table -->
<span class="ico table">
<span>table</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- lock -->
<span class="ico lock">
<span>lock</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- unlock -->
<span class="ico unlock">
<span>unlock</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- submit -->
<span class="ico submit">
<span>submit</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- clone -->
<span class="ico clone">
<span>clone</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- d -->
<span class="ico d">
<span>ico d</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- a -->
<span class="ico a">
<span>ico a</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- p -->
<span class="ico p">
<span>ico p</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- da -->
<span class="ico da">
<span>ico da</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- ap -->
<span class="ico ap">
<span>ico ap</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- dp -->
<span class="ico dp">
<span>ico dp</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- dap -->
<span class="ico dap">
<span>ico dap</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- print -->
<span class="ico print">
<span>PRINT</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- info -->
<span class="ico info">
<span>Info</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- tour -->
<span class="ico tour">
<span>Tour</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- external-link -->
<span class="external-link">
<span>External Link</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!--  analysis-projections -->
<span class="ico-menu analysis-projections-icon">
<span>analysis-projections</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- az-index -->
<span class="ico-menu a-z-index-icon">
<span>az-index</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- beta -->
<span class="ico-menu beta-icon">
<span>beta</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- coal -->
<span class="ico-menu coal-icon">
<span>coal</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- upcoming -->
<span class="ico-menu upcoming-icon">
<span>upcoming</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- consumption -->
<span class="ico-menu consumption-icon">
<span>consumption</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- data-tools-model -->
<span class="ico-menu data-tools-model-icon">
<span>data-tools-model</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- electricity -->
<span class="ico-menu electricity-icon">
<span>electricity</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- email-complex -->
<span class="ico-menu email-complex-icon">
<span>email-complex</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- email-simple -->
<span class="ico-menu email-simple">
<span>email-simple</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- energy-explained -->
<span class="ico-menu energy-explained-icon">
<span>energy-explained</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- energy-in-brief -->
<span class="ico-menu energy-in-brief-icon">
<span>energy-in-brief</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- environment -->
<span class="ico-menu environment-icon">
<span>environment</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- disruptions -->
<span class="ico-menu disruptions-icon">
<span>disruptions</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- faq -->
<span class="ico-menu faq-icon">
<span>faq</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- featured-reports -->
<span class="ico-menu featured-reports-icon">
<span>featured-reports</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- markets-finance -->
<span class="ico-menu markets-finance-icon">
<span>markets-finance</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- follow-us -->
<span class="ico-menu follow-us-icon">
<span>follow-us</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- glossary -->
<span class="ico-menu eia-glossary-icon">
<span>glossary</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- international -->
<span class="ico-menu international-icon">
<span>international</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- maps -->
<span class="ico-menu maps-icon">
<span>maps</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- natural-gas -->
<span class="ico-menu natural-gas-icon">
<span>natural-gas</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- nuclear -->
<span class="ico-menu nuclear-icon">
<span>nuclear</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- open-data -->
<span class="ico-menu open-data-icon">
<span>open-data</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- petroleum -->
<span class="ico-menu petroleum-icon">
<span>petroleum</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- press-room -->
<span class="ico-menu press-room-icon">
<span>press-room</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!--  regional-icon -->
<span class="ico-menu regional-icon">
<span>regional-icons</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- renewable -->
<span class="ico-menu renewable-icon">
<span>renewable</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- reports -->
<span class="ico-menu reports-icon">
<span>reports</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- rss-complex -->
<span class="ico-menu rss-complex-icon">
<span>rss-complex</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- survey-forms -->
<span class="ico-menu survey-forms-icon">
<span>survey-forms</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- teachers -->
<span class="ico-menu teachers-icon">
<span>teachers</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- today-in-energy -->
<span class="ico-menu today-in-energy-icon">
<span>today-in-energy</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- total-energy -->
<span class="ico-menu total-energy-icon">
<span>total-energy</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- states -->
<span class="ico-menu states-icon">
<span>states</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- whats-new -->
<span class="ico-menu whats-new-icon">
<span>whats-new</span>
</span></code></pre>
*/
}

{
	/*
	<pre><code class="html">
<ul class="ico icon-list">
<li class="ico reports-icon">
<a href>Link</a>
</li>
</ul></code></pre>
*/
}

{
	/*
<pre><code class="html">
<ul class="ico icon-list">
<li class="ico email-simple">
<a href>Link</a>
</li>
</ul></code></pre>
*/
}

{
	/*
<pre><code class="html">
<ul class="ico icon-list">
<li class="ico rss-complex-icon">
<a href>Link</a>
</li>
</ul></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- residential -->
<span class="residential-icon">
<span>residential</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- commercial -->
<span class="commercial-icon">
<span>commercial</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- industrial -->
<span class="industrial-icon">
<span>industrial</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- facebook -->
<span class="facebook">
<span>facebook</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- twitter -->
<span class="twitter">
<span>twitter</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- youtube -->
<span class="youtube">
<span>youtube</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- flickr -->
<span class="flickr">
<span>flickr</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- linkedin -->
<span class="linkedin">
<span>linkedin</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- email -->
<span class="email">
<span>email</span>
</span></code></pre>
*/
}

{
	/*
<pre><code class="html"><!-- rss -->
<span class="rss">
<span>rss</span>
</span></code></pre>
*/
}
