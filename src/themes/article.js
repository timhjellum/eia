import React, { Component } from "react";

import Top from "../assets/components/Top.js";
import Legend from "../assets/components/Legend.js";
import ExamplePlaceholder from "../assets/examples/Placeholder.js";
import LoremIpsumList from "../assets/containers/LoremIpsumList.js";
import LoremIpsumH1 from "../assets/containers/LoremIpsumH1.js";
import LoremIpsumH2 from "../assets/containers/LoremIpsumH2.js";
import LoremIpsumH3 from "../assets/containers/LoremIpsumH3.js";
import LoremIpsumH4 from "../assets/containers/LoremIpsumH4.js";
import LoremIpsumParagraph from "../assets/containers/LoremIpsumParagraph.js";

class Article extends Component {
	render() {
		return (
			<div className="right-content">
				<h1 className="_h1">Article Page Layout</h1>
				<h3 className="_h3">Article</h3>
				<p className="_p">
					To create an article page, simply add the following:{" "}
					<code>$locale = 'article';</code>, to the PHP page
					definitions on the page. Then use{" "}
					<a href="../layouts/index.html">page layouts</a>,{" "}
					<a href="../modules/page-headers.html">page headers</a>,
					headers, paragraphs, and lists as normal.
				</p>
				<ExamplePlaceholder />

				<h3 className="_h3">Article Example</h3>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="l-col">
								<div className="article">
									<span className="_module-bg">
										<LoremIpsumH1 />
										<LoremIpsumH2 />
										<LoremIpsumParagraph />
										<LoremIpsumH4 />
										<LoremIpsumList />
										<LoremIpsumParagraph />
										<LoremIpsumH4 />
										<LoremIpsumList />
										<LoremIpsumParagraph />
										<LoremIpsumH3 />
										<LoremIpsumParagraph />
										<LoremIpsumH3 />
										<LoremIpsumParagraph />
										<LoremIpsumH4 />
										<LoremIpsumList />
										<LoremIpsumParagraph />
										<LoremIpsumH4 />
										<LoremIpsumList />
										<LoremIpsumH2 />
										<LoremIpsumParagraph />
										<LoremIpsumH4 />
										<LoremIpsumList />
										<LoremIpsumH2 />
										<LoremIpsumParagraph />
										<LoremIpsumH4 />
										<LoremIpsumList />
										<LoremIpsumH2 />
										<LoremIpsumParagraph />
										<LoremIpsumH4 />
										<LoremIpsumList />
										<LoremIpsumH2 />
										<LoremIpsumParagraph />
										<LoremIpsumH2 />
										<LoremIpsumH3 />
										<LoremIpsumParagraph />
										<LoremIpsumH3 />
										<LoremIpsumParagraph />
										<LoremIpsumH3 />
										<LoremIpsumParagraph />
										<LoremIpsumH4 />
										<LoremIpsumList />
										<LoremIpsumParagraph />
										<LoremIpsumH4 />
										<LoremIpsumList />
										<LoremIpsumH2 />
										<LoremIpsumParagraph />
										<LoremIpsumH4 />
										<LoremIpsumList />
										<LoremIpsumH2 />
										<LoremIpsumParagraph />
										<LoremIpsumH4 />
										<LoremIpsumList />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Top />
			</div>
		);
	}
}

export default Article;
