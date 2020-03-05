import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";

class IconLargeRSS extends Component {
    constructor() {
        super();
        const initialCodeString = `<ul class="icon-list">\n	<li class="ico rss">\n		<a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>\n	</li>\n</ul>`;
        this.state = {
            selected: "tomorrow",
            style: require("../../assets/styles/hljs/tomorrow").default,
            code: initialCodeString,
            showLineNumbers: true,
            copied: false
        };
    }
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

export default IconLargeRSS;
