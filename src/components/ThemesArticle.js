import React, { Component } from "react"

import Page from "./Page"
import Top from "./Placeholders/Top.js"
import Legend from "./Placeholders/Legend"
import Placeholder from "./Placeholders/Placeholder"
import LoremIpsumUL from "./Placeholders/LoremIpsumUL"
import LoremIpsumH1 from "./Placeholders/LoremIpsumH1"
import LoremIpsumH2 from "./Placeholders/LoremIpsumH2"
import LoremIpsumH3 from "./Placeholders//LoremIpsumH3"
import LoremIpsumH4 from "./Placeholders/LoremIpsumH4"
import LoremIpsumP from "./Placeholders/LoremIpsumP"
import ContainerWrapper from "./Containers/ContainerWrapper"
import ContainerLayout from "./Containers/ContainerLayout"

import ParagraphListHeader from "./Templates/ParagraphListHeader"

class ThemesArticle extends Component {
	render() {
		return (
			<Page title="Coming Soon">
				<span className="themes">
					<h1 className="_h1">Article Page Layout</h1>
					<h3 className="_h3">Article</h3>
					<p className="_p">
						To create an article page, simply add the following: <code>$locale = 'article';</code>, to the PHP page definitions on the page. Then use <a to="./index.html">page layouts</a>, <a to="./modules/page-headers.html">page headers</a>, headers, paragraphs, and lists as normal.
					</p>
					<ParagraphListHeader />

					<h3 className="_h3">Article Example</h3>
					<Legend />
					<ContainerWrapper>
						<ContainerLayout>
							<div className="l-row l-full-width-col">
								<div className="l-col">
									<div className="article">
										<span className="_module-bg">
											<LoremIpsumH1 />
											<LoremIpsumH2 />
											<LoremIpsumP />
											<LoremIpsumH4 />
											<LoremIpsumUL />
											<LoremIpsumP />
											<LoremIpsumH4 />
											<LoremIpsumUL />
											<LoremIpsumP />
											<LoremIpsumH3 />
											<LoremIpsumP />
											<LoremIpsumH3 />
											<LoremIpsumP />
											<LoremIpsumH4 />
											<LoremIpsumUL />
											<LoremIpsumP />
											<LoremIpsumH4 />
											<LoremIpsumUL />
											<LoremIpsumH2 />
											<LoremIpsumP />
											<LoremIpsumH4 />
											<LoremIpsumUL />
											<LoremIpsumH2 />
											<LoremIpsumP />
											<LoremIpsumH4 />
											<LoremIpsumUL />
											<LoremIpsumH2 />
											<LoremIpsumP />
											<LoremIpsumH4 />
											<LoremIpsumUL />
											<LoremIpsumH2 />
											<LoremIpsumP />
											<LoremIpsumH2 />
											<LoremIpsumH3 />
											<LoremIpsumP />
											<LoremIpsumH3 />
											<LoremIpsumP />
											<LoremIpsumH3 />
											<LoremIpsumP />
											<LoremIpsumH4 />
											<LoremIpsumUL />
											<LoremIpsumP />
											<LoremIpsumH4 />
											<LoremIpsumUL />
											<LoremIpsumH2 />
											<LoremIpsumP />
											<LoremIpsumH4 />
											<LoremIpsumUL />
											<LoremIpsumH2 />
											<LoremIpsumP />
											<LoremIpsumH4 />
											<LoremIpsumUL />
										</span>
									</div>
								</div>
							</div>
						</ContainerLayout>
					</ContainerWrapper>
					<Top />
				</span>
			</Page>
		)
	}
}

export default ThemesArticle
