import React, { Component } from "react";
import ExamplePlaceholder from "../assets/examples/Placeholder.js";

class ModulesHome extends Component {
	render() {
		return (
			<li className="section-container">
				<h1 className="_h1"></h1>
				<h3 className="_h3">Module Rules</h3>

				<p className="_p">
					A module is a more discrete component of the page. It is
					your navigation bars and your carousels and your dialogs and
					your widgets and so on. This is the meat of the page.
					Modules sit inside Layout components. Modules can sometimes
					sit within other Modules, too. Each Module should be
					designed to exist as a standalone component. In doing so,
					the page will be more flexible. If done right, Modules can
					easily be moved to different parts of the layout without
					breaking.
				</p>

				<p className="_p">
					When defining the rule set for a module, avoid using IDs and
					element selectors, sticking only to class names. A module
					will likely contain a number of elements and there is likely
					to be a desire to use descendent or child selectors to
					target those elements.
				</p>
				<ExamplePlaceholder />

				<h3 className="_h3">Avoid element selectors</h3>

				<p className="_p">
					Use child or descendant selectors with element selectors if
					the element selectors will and can be predictable. Using
					<code>.module span</code> is great if a span will
					predictably be used and styled the same way every time while
					within that module.
				</p>

				<ExamplePlaceholder />

				<p className="_p">
					The problem is that as a project grows in complexity, the
					more likely that you will need to expand a component’s
					functionality and the more limited you will be in having
					used such a generic element within your rule.
				</p>

				<ExamplePlaceholder />

				<p className="_p">
					Now we are in a pickle. We don’t want the icon to appear on
					both elements within our folder module. Which leads me to my
					next point:
				</p>

				<p className="_p">
					<em>Only include a selector that includes semantics.</em> A
					span or div holds none. A heading has some. A class defined
					on an element has plenty.
				</p>

				<ExamplePlaceholder />

				<p className="_p">
					By adding the classes to the elements, we have increased the
					semantics of what those elements mean and removed any
					ambiguity when it comes to styling them.
				</p>

				<p className="_p">
					If you do wish to use an element selector, it should be
					within one level of a class selector. In other words, you
					should be in a situation to use child selectors.
					Alternatively, you should be extremely confident that the
					element in question will not be confused with another
					element. The more semantically generic the HTML element
					(like a span or div), the more likely it will create a
					conflict down the road. Elements with greater semantics like
					headings are more likely to appear by themselves within a
					container and you are more likely able to use an element
					selector successfully.
				</p>

				<h3 className="_h3">New Contexts</h3>
				<p className="_p">
					Using the module approach also allows us to better
					understand where context changes are likely to occur. The
					need for a new positioning context, for example, is likely
					to happen at either the layout level or at the root of a
					module.
				</p>

				<h3 className="_h3">Subclassing Modules</h3>

				<p className="_p">
					When we have the same module in different sections, the
					first instinct is to use a parent element to style that
					module differently.
				</p>

				<ExamplePlaceholder />

				<p className="_p">
					The problem with this approach is that you can run into
					specificity issues that require adding even more selectors
					to battle against it or to quickly fall back to using
					<code>!important</code>.
				</p>

				<p className="_p">
					Expanding on our example pod, we have an input with two
					different widths. Throughout the site, the input has a label
					beside it and therefore the field should only be half the
					width. In the sidebar, however, the field would be too small
					so we increase it to 100% and have the label on top. All
					looks well and good. Now, we need to add a new component to
					our page. It uses most of the same styling as a
					<code>.pod</code> and so we re-use that class. However, this
					pod is special and has a constrained width no matter where
					it is on the site. It is a little different, though, and
					needs a width of 180px.
				</p>

				<ExamplePlaceholder />

				<p className="_p">
					We are doubling up on our selectors to be able to override
					the specificity of <code>#sidebar</code>.
				</p>

				<p className="_p">
					What we should do instead is recognize that the constrained
					layout in the sidebar is a subclass of the pod and style it
					accordingly.
				</p>

				<ExamplePlaceholder />

				<p className="_p">
					With sub-classing the module, both the base module and the
					sub-module class names get applied to the HTML element.
				</p>

				<ExamplePlaceholder />

				<p className="_p">
					Try to avoid conditional styling based on location. If you
					are changing the look of a module for usage elsewhere on the
					page or site, sub-class the module instead.
				</p>

				<p className="_p">
					To help battle against specificity (and if IE6 isn’t a
					concern), then you can double up on your class names like in
					the next example.
				</p>
				<ExamplePlaceholder />

				<p className="_p">
					You may be concerned about this, depending on the order of
					loading. For example, on Yahoo! Mail, we have code coming
					from different places. We had our base button styles and
					then we had a special set of buttons for the compose screen.
					However, when you clicked to add a contact to your address
					book, it loaded a component from a different product:
					Address Book. (Yes, the address book is a different product
					within Yahoo!.) The address book loaded its own base button
					styles, thereby overwriting the sub-classed button styles
					that we had.
				</p>

				<p className="_p">
					If load order is a factor in your project, watch out for
					specificity issues.
				</p>

				<p className="_p">
					While more specific layout components assigned with IDs
					could be used to provide specialized styling for modules,
					sub-classing the module will allow the module to be moved to
					other sections of the site more easily and you will avoid
					increasing the specificity unnecessarily.
				</p>

				<p className="_p">
					Modules are the reusable and modular components of the page.
					Modules can be
					<strong>nested</strong> and each Module should be designed
					to exist as a<strong>standalone component</strong>. In doing
					so, the page will be more flexible. If done right, Modules
					can easily be moved to different parts of the layout without
					breaking.
				</p>
				<h3 className="_h3">Examples of modules</h3>
				<ul className="style-guide">
					<li>Navigation elements</li>
					<li>Sliders</li>
					<li>Dialogs</li>
					<li>Content Containers</li>
				</ul>

				<h3 className="_h3">Naming Best-Practices</h3>
				<p className="_p">
					Unlike layouts that have a designation within the class name
					to indicate it's a layout element, Modules do not and
					instead have symantec names to indicate what the module is.
				</p>

				<p className="_p">
					When defining the rule set for a module, Avoid using IDs and
					element selectors, sticking only to class names. A module
					will likely contain a number of elements and there is likely
					to be a desire to use descendent or child selectors to
					target those elements.
				</p>
				<ExamplePlaceholder />

				<p className="_p">
					Use child or descendant selectors with element selectors if
					the element selectors will and can be predictable. Using
					.module span is great if a span will predictably be used and
					styled the same way every time while within that module.
				</p>

				<ExamplePlaceholder />

				<ExamplePlaceholder />

				<p className="_p">
					The problem is that as a project grows in complexity, the
					more likely that you will need to expand a component’s
					functionality and the more limited you will be in having
					used such a generic element within your rule.
				</p>

				<ExamplePlaceholder />
				<p className="_p">
					Now we are in a pickle. We don’t want the icon to appear on
					both elements within our folder module. Which leads me to my
					next point:
				</p>
				<p className="_p">
					Only include a selector that includes semantics. A span or
					div holds none. A heading has some. A class defined on an
					element has plenty.
				</p>

				<ExamplePlaceholder />

				<p className="_p">
					By adding the classes to the elements, we have increased the
					semantics of what those elements mean and removed any
					ambiguity when it comes to styling them.
				</p>
				<p className="_p">
					If you do wish to use an element selector, it should be
					within one level of a class selector. In other words, you
					should be in a situation to use child selectors.
					Alternatively, you should be extremely confident that the
					element in question will not be confused with another
					element. The more semantically generic the HTML element
					(like a span or div), the more likely it will create a
					conflict down the road. Elements with greater semantics like
					headings are more likely to appear by themselves within a
					container and you are more likely able to use an element
					selector successfully.
				</p>

				<p className="_p">
					Using the module approach also allows us to better
					understand where context changes are likely to occur. The
					need for a new positioning context, for example, is likely
					to happen at either the layout level or at the root of a
					module.
				</p>

				<div className="row-style-guide">
					<h3 className="_h3">Subclassing Modules</h3>
				</div>
				<p className="_p">
					When we have the same module in different sections, the
					first instinct is to use a parent element to style that
					module differently.
				</p>

				<ExamplePlaceholder />

				<p className="_p">
					The problem with this approach is that you can run into
					specificity issues that require adding even more selectors
					to battle against it or to quickly fall back to using
					<code>!important</code>.
				</p>
				<p className="_p">
					Expanding on our example pod, we have an input with two
					different widths. Throughout the site, the input has a label
					beside it and therefore the field should only be half the
					width. In the sidebar, however, the field would be too small
					so we increase it to 100% and have the label on top. All
					looks well and good. Now, we need to add a new component to
					our page. It uses most of the same styling as a .pod and so
					we re-use that class. However, this pod is special and has a
					constrained width no matter where it is on the site. It is a
					little different, though, and needs a width of 180px.
				</p>

				<ExamplePlaceholder />

				<p className="_p">
					We are doubling up on our selectors to be able to override
					the specificity of #sidebar.
				</p>
				<p className="_p">
					What we should do instead is recognize that the constrained
					layout in the sidebar is a subclass of the pod and style it
					accordingly.
				</p>

				<ExamplePlaceholder />

				<p className="_p">
					With sub-classing the module, both the base module and the
					submodule class names get applied to the HTML element.
				</p>

				<ExamplePlaceholder />
				<p className="_p">
					Try to Avoid conditional styling based on location. If you
					are changing the look of a module for usage elsewhere on the
					page or site, sub-class the module instead.
				</p>
				<p className="_p">
					To help battle against specificity (and if IE6 isn’t a
					concern), then you can double up on your class names like in
					the next example.
				</p>
				<ExamplePlaceholder />
				<ExamplePlaceholder />
				<p className="_p">
					While more specific layout components assigned with IDs
					could be used to provide specialized styling for modules,
					sub-classing the module will allow the module to be moved to
					other sections of the site more easily and you will Avoid
					increasing the specificity unnecessarily.
				</p>
			</li>
		);
	}
}

export default ModulesHome;
