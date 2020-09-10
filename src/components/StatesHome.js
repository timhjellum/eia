import React, { Component } from "react"
import Page from "./Page"

class StatesHome extends Component {
	render() {
		return (
			<Page title="States Home">
				<span className="states">
					<h1 className="_h1">States</h1>
					<h3 className="_h3">State Rules</h3>
					<p className="_p">A state is something that augments and overrides all other styles. For example, an accordion section may be in a collapsed or expanded state. A message may be in a success or error state.</p>
					<p className="_p">States are generally applied to the same element as a layout rule or applied to the same element as a base module class.</p>
					{/* <ExamplePlaceholder /> */}
					<p className="_p">
						The header element just has an ID. As such we can assume that any styles, if there are any, on this element are for layout purposes and that the <code>is-collapsed</code> represents a collapsed state. One might presume that without this state rule, the default is an expanded state.
					</p>
					<p className="_p">
						The <code>msg</code> module is simple enough and has an error state applied to it. One could imagine a success state could be applied to the message, alternatively.
					</p>
					<p className="_p">Finally, the field label has a hidden state applied to hide it from sight but still keep it for screen readers. In this case, we are actually applying the state to a base element and not overriding a layout or module.</p>
					<h3 className="_h3">Isnʼt it just a module?</h3>
					<p className="_p">There is plenty of similarity between a sub-module style and a state style. They both modify the existing look of an element. However, they differ in two key ways:</p>
					<ol className="_ol">
						<li className="_li">State styles can apply to layout and/or module styles; and</li>
						<li className="_li">State styles indicate a JavaScript dependency.</li>
					</ol>
					<p className="_p">It is this second point that is the most important distinction. Sub-module styles are applied to an element at render time and then are never changed again. State styles, however, are applied to elements to indicate a change in state while the page is still running on the client machine.</p>
					<p className="_p">
						For example, clicking on a tab will activate that tab. Therefore, an <code>is-active</code> or <code>is-tab-active</code> class is appropriate. Clicking on a dialog close button will hide the dialog. Therefore, an <code>is-hidden</code> class is appropriate.
					</p>
					<h2 id="tips">Using !important</h2>
					<p className="_p">States should be made to stand alone and are usually built of a single class selector.</p>
					<p className="_p">
						Since the state will likely need to override the style of a more complex rule set, the use of <code>!important</code> is allowed and, dare I say, recommended. (I used to say that <code>!important</code> was never needed but on complex systems, it is often a necessity.) You won’t normally have two states applied to the same module or two states that tend to affect the same set of styles, so specificity conflicts from using <code>!important</code> should be few and far between.
					</p>
					<p className="_p">
						With that said, be cautious. Leave <code>!important</code> off until you actually and truly need it (and you will see why in this next example). Remember, the use of <code>!important</code> should be avoided for all other rule types. Only states should have it.
					</p>
					<h2>Combining State Rules with Modules</h2>
					<p className="_p">Inevitably, a state rule will not be able to rely on inheritance to apply its style in the right place. Sometimes a state is very specific to a particular module where styling is very unique.</p>
					<p className="_p">In a case where a state rule is made for a specific module, the state class name should include the module name in it. The state rule should also reside with the module rules and not with the rest of the global state rules.</p>
					{/* <ExamplePlaceholder /> */}
					<p className="_p">If you are doing just-in-time loading of your CSS, generic states should be considered part of the base and global styles and loaded on initial page load. The styles for a particular module wonʼt need to be loaded until that particular module is loaded.</p>
				</span>
			</Page>
		)
	}
}

export default StatesHome
