import React, { Component } from "react";

class Home extends Component {
	render() {
		return (
			<div class="right-content">
				<h3 className="_h3">Page Layouts</h3>
				<h3 className="_h3">Introduction</h3>
				<p className="_p">
					Page layouts have two required definitions,{" "}
					<a href="row-examples.html">rows</a> and{" "}
					<a href="examples.html">columns</a>. You should be familiar
					with both in order to use them correctly. Below are the
					available page layouts:
				</p>
				{/*
        <a
          href="examples.html#l-full-width-col"
          className="prototype-link l-full-width-col"
        >
          <div className="prototype-thumb">
            <div className="prototype-column-container w100">
              <div className="prototype-column"></div>
            </div>
          </div>
        </a>

        <a
          href="examples.html#l-two-col-left-narrow"
          className="prototype-link l-two-col-left-narrow"
        >
          <div className="prototype-thumb">
            <div className="prototype-column-container w25">
              <div className="prototype-column prototype-secondary"></div>
            </div>
            <div className="prototype-column-container w75">
              <div className="prototype-column"></div>
            </div>
          </div>
        </a>

        <a
          href="examples.html#l-two-col-left"
          className="prototype-link l-two-col-left"
        >
          <div className="prototype-thumb">
            <div className="prototype-column-container w33">
              <div className="prototype-column prototype-secondary"></div>
            </div>
            <div className="prototype-column-container w66">
              <div className="prototype-column"></div>
            </div>
          </div>
        </a>

        <a
          href="examples.html#l-two-col-right-wide"
          className="prototype-link l-two-col-right-wide"
        >
          <div className="prototype-thumb">
            <div className="prototype-column-container w42">
              <div className="prototype-column prototype-secondary"></div>
            </div>
            <div className="prototype-column-container w58">
              <div className="prototype-column"></div>
            </div>
          </div>
        </a>

        <a
          href="examples.html#l-two-col-even"
          className="prototype-link l-two-col-even"
        >
          <div className="prototype-thumb">
            <div className="prototype-column-container w50">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w50">
              <div className="prototype-column"></div>
            </div>
          </div>
        </a>

        <a
          href="examples.html#l-two-col-left-wide"
          className="prototype-link l-two-col-left-wide"
        >
          <div className="prototype-thumb">
            <div className="prototype-column-container w58">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w42">
              <div className="prototype-column prototype-secondary"></div>
            </div>
          </div>
        </a>

        <a
          href="examples.html#l-two-col-right"
          className="prototype-link l-two-col-right"
        >
          <div className="prototype-thumb">
            <div className="prototype-column-container w66">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w33">
              <div className="prototype-column prototype-secondary"></div>
            </div>
          </div>
        </a>

        <a
          href="examples.html#l-two-col-right-narrow"
          className="prototype-link l-two-col-right-narrow"
        >
          <div className="prototype-thumb">
            <div className="prototype-column-container w75">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w25">
              <div className="prototype-column prototype-secondary"></div>
            </div>
          </div>
        </a>

        <a
          href="examples.html#l-three-col"
          className="prototype-link l-three-col"
        >
          <div className="prototype-thumb">
            <div className="prototype-column-container w25">
              <div className="prototype-column prototype-secondary"></div>
            </div>
            <div className="prototype-column-container w50">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w25">
              <div className="prototype-column prototype-secondary"></div>
            </div>
          </div>
        </a>

        <a
          href="examples.html#l-three-col-even"
          className="prototype-link l-three-col-even"
        >
          <div className="prototype-thumb">
            <div className="prototype-column-container w33">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w33">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w33">
              <div className="prototype-column"></div>
            </div>
          </div>
        </a>

        <a
          href="examples.html#l-four-col-even"
          className="prototype-link l-four-col-even"
        >
          <div className="prototype-thumb">
            <div className="prototype-column-container w25">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w25">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w25">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w25">
              <div className="prototype-column"></div>
            </div>
          </div>
        </a>

        <a
          href="examples.html#l-five-col-even"
          className="prototype-link l-five-col-even"
        >
          <div className="prototype-thumb">
            <div className="prototype-column-container w20">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w20">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w20">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w20">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w20">
              <div className="prototype-column"></div>
            </div>
          </div>
        </a>

        <a
          href="examples.html#l-six-col-even"
          className="prototype-link l-six-col-even"
        >
          <div className="prototype-thumb">
            <div className="prototype-column-container w16">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w16">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w16">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w16">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w16">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w16">
              <div className="prototype-column"></div>
            </div>
          </div>
		</a>
		
		*/}
				<p className="_p">
					Layout class names begin with a{" "}
					<code>
						l-row{" "}
						<span className="l-full-width-col">
							l-full-width-col
						</span>
						<span className="l-two-col-left-narrow">
							l-row l-two-col-left-narrow
						</span>
						<span
							className="l-two-col-left"
							className="prototype-link "
						>
							l-row l-two-col-left"
						</span>
						<span className="l-two-col-right-wide">
							l-row l-two-col-right-wide
						</span>
						<span className="l-two-col-even">
							l-row l-two-col-even
						</span>
						<span className="l-two-col-left-wide">
							l-row l-two-col-left-wide
						</span>
						<span className="l-two-col-right">
							l-row l-two-col-right
						</span>
						<span className="l-two-col-right-narrow">
							l-row l-two-col-right-narrow
						</span>
						<span className="l-three-col">l-three-col</span>
						<span className="l-three-col-even">
							l-row l-three-col-even
						</span>
						<span className="l-four-col-even">
							l-row l-four-col-even
						</span>
						<span className="l-five-col-even">
							l-row l-five-col-even
						</span>
						<span className="l-six-col-even">
							l-row l-six-col-even
						</span>
					</code>
					.
				</p>

				<h3 className="_h3">Architecture</h3>
				<p className="_p">
					We leverage a custom{" "}
					<a href="https://www.w3schools.com/css/css_grid.asp">
						CSS Grid
					</a>{" "}
					system for the page layouts. The page layouts allow for the
					pages and elements on the page to be responsive based on the
					users' media device (e.g. print, mobile, laptop, desktop).
					To accomplish this, we use break points based off of the
					width of the users' media device. The breakpoints are as
					follows:
				</p>
				<div className="table-wrapper">
					<table className="basic-table align-left-col-4">
						<thead>
							<tr>
								<th>Break Name</th>
								<th>Minimum Width (px)</th>
								<th>Maximum Width (px)</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>mobile</td>
								<td>1</td>
								<td>479</td>
								<td>
									Smartphones, portrait iPhone, portrait
									480x320 phones (Android)
								</td>
							</tr>
							<tr>
								<td>mobile-landscape</td>
								<td>480</td>
								<td>599</td>
								<td>
									Smartphones, Android phones, landscape
									iPhone
								</td>
							</tr>
							<tr>
								<td>tablet</td>
								<td>600</td>
								<td>800</td>
								<td>Mobile panorama</td>
							</tr>
							<tr>
								<td>tablet-landscape</td>
								<td>801</td>
								<td>955</td>
								<td>
									Tablet, landscape iPad, lo-resolution
									laptops and desktops
								</td>
							</tr>
							<tr>
								<td>laptop</td>
								<td>956</td>
								<td>1355</td>
								<td>
									big landscape tablets, laptops, and desktops
								</td>
							</tr>
							<tr>
								<td>desktop</td>
								<td>1366</td>
								<td>2299</td>
								<td>
									Big landscape tablets, hi-resolution
									laptops, and desktops
								</td>
							</tr>
							<tr>
								<td>desktop-lg</td>
								<td>2300</td>
								<td>&#8734;</td>
								<td>Desktop and television</td>
							</tr>
							<tr>
								<td>mobile-only</td>
								<td>1</td>
								<td>599px</td>
								<td>
									Mmartphones, portrait iPhone, portrait
									480x320 phones (Android)
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="notice">
					<p>
						Notice that on the upper right of every page of this
						style-guide there's a small box with the resolution
						defined media-query type that you are viewing this page.
					</p>
				</div>

				<h3 className="_h3">Naming Conventions</h3>
				<ul className="_ul">
					<li>
						All style naming conventions use classes and not ID
						selectors.
					</li>
					<li>All class names are lowercase and hyphenated.</li>
					<li>
						Layout class names begin with a <code>l-</code>.
					</li>
				</ul>

				<h2 className="_h2">Examples</h2>

				<div className="_example">
					<p className="_p">
						Bad CSS structure might look something like this:
					</p>
					<pre>
						<code className="html">
							&lt;!-- examples of bad naming conventions --&gt;
							&lt;div id="Row"&gt;&lt;/div&gt; &lt;div
							className="Row_Header"&gt;&lt;/div&gt; &lt;div
							className="row"&gt;&lt;/div&gt;
						</code>
					</pre>
				</div>
				<div className="_example">
					<p className="_p">
						Good CSS structure might look something like this:
					</p>
					<pre>
						<code className="html">
							&lt;!-- examples of bad naming conventions --&gt;
							&lt;div className="l-row l-header"&gt;&lt;/div&gt;
							&lt;div className="l-col"&gt; &lt;/div&gt;
						</code>
					</pre>
				</div>
				<h2 className="_h2">The Structure</h2>
				<p className="_p">
					Page layouts have two required definitions,{" "}
					<a href="row-examples.html">rows</a> and{" "}
					<a href="examples.html">columns</a>.
				</p>
			</div>
		);
	}
}
export default Home;
