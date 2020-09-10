import React, { Component } from "react"
import { Link, a, BrowserRouter as Router, Route } from "react-router-dom"
import Top from "../Placeholders/Top"

import ContainerLayout from "../Containers/ContainerLayout"

import ThemeListDefaultExample from "../Lists/ThemeListDefaultExample"
import ThemeListDefault from "../Lists/ThemeListDefault"

import ThemeListBasicExample from "../Lists/ThemeListBasicExample"
import ThemeListBasic from "../Lists/ThemeListBasic"

import ThemeListHeadExample from "../Lists/ThemeListHeadExample"
import ThemeListHead from "../Lists/ThemeListHead"

import ThemeListFootExample from "../Lists/ThemeListFootExample"
import ThemeListFoot from "../Lists/ThemeListFoot"

import ThemeListSpacerExample from "../Lists/ThemeListSpacerExample"
import ThemeListSpacer from "../Lists/ThemeListSpacer"

import ThemeListSeperatorExample from "../Lists/ThemeListSeperatorExample"
import ThemeListSeperator from "../Lists/ThemeListSeperator"

import ThemeListBulletedExample from "../Lists/ThemeListBulletedExample"
import ThemeListBulleted from "../Lists/ThemeListBulleted"

import ThemeListSingleBulletExample from "../Lists/ThemeListSingleBulletExample"
import ThemeListSingleBullet from "../Lists/ThemeListSingleBullet"

import ThemeListNestedBulletedExample from "../Lists/ThemeListNestedBulletedExample"
import ThemeListNestedBulleted from "../Lists/ThemeListNestedBulleted"

import ThemeListNestedBulletedSpacerExample from "../Lists/ThemeListNestedBulletedSpacerExample"
import ThemeListNestedBulletedSpacer from "../Lists/ThemeListNestedBulletedSpacer"

import ThemeListHighlightExample from "../Lists/ThemeListHighlightExample"
import ThemeListHighlight from "../Lists/ThemeListHighlight"

import ThemeSubListExample from "../Lists/ThemeSubListExample"
import ThemeSubList from "../Lists/ThemeSubList"

import IconicListItemsExample from "../IconicListItems/IconicListItemsExample"

import ThemeListNumberedExample from "../Lists/ThemeListNumberedExample"
import ThemeListNumbered from "../Lists/ThemeListNumbered"

import ThemeReleaseScheduleExample from "../Lists/ThemeReleaseScheduleExample"
import ThemeReleaseSchedule from "../Lists/ThemeReleaseSchedule"

import ThemeUnorderedListExample from "../Lists/ThemeUnorderedListExample"
import ThemeUnorderedList from "../Lists/ThemeUnorderedList"

import CalculatedNumberedListsExample from "../Lists/CalculatedNumberedListsExample"
import CalculatedNumberedLists from "../Lists/CalculatedNumberedLists"

import ThemeUpdatedDataSeriesExample from "../Lists/ThemeUpdatedDataSeriesExample"
import ThemeUpcomingReleasesExample from "../Lists/ThemeUpcomingReleasesExample"

class ExamplesOfAllLists extends Component {
	render() {
		return (
			<>
				<h3 className="_h3">Default List (List with no styling)</h3>

				<ThemeListDefaultExample />
				<Top />
				<h3 className="_h3">Basic List (Basic List has universal spacing and padding)</h3>
				<ThemeListBasicExample />

				<h3 className="_h3">List Head</h3>
				<ThemeListHeadExample />
				<h3 className="_h3">List Foot</h3>
				<ThemeListFootExample />
				<h3 className="_h3">List Spacer</h3>
				<ThemeListSpacerExample />
				<h3 className="_h3">List Seperator</h3>
				<ThemeListSeperatorExample />

				<h3 className="_h3">Bullet List</h3>
				<ThemeListBulletedExample />

				<h3 className="_h3">Nested Sub-List</h3>
				<ThemeSubListExample />
				<h3 className="_h3">Nested Single-Bullet List</h3>
				<ThemeListSingleBulletExample />
				<h3 className="_h3">Nested Bulleted List</h3>
				<ThemeListNestedBulletedExample />
				{/*
				<h3 className="_h3">Nested Bulleted List with Spacer</h3>
				<ThemeListNestedBulletedSpacerExample />
				*/}

				{/* <p className="_p">Lists Features</p> */}
				<h3 className="_h3">Highlight List-item</h3>
				<ThemeListHighlightExample />

				<h3 className="_h3">Numbered List Items</h3>
				<ThemeListNumberedExample />

				<h3 className="_h3">Calculated Numbered List Items</h3>
				<p className="_p">
					(See <Link to="/states/calculated-numbered-lists">Calculated Numbered Lists</Link> for more information)
				</p>
				<CalculatedNumberedListsExample />

				<h3 className="_h3">Unordered List</h3>
				<ThemeUnorderedListExample />

				<h3 className="_h3">Release Schedule (Custom)</h3>
				<ThemeReleaseScheduleExample />

				<h3 className="_h3">Iconic List-Items</h3>
				<IconicListItemsExample />

				<h3 className="_h3">Link-Lists with Trailing Link-label</h3>
				<p className="_p">
					(See {/* <Link to="/states/link-lists">Link Lists</Link> and */}
					<Link to="/style-guide/states/empty-list-items">Empty List-items</Link> for more information)
				</p>
				<ThemeUpdatedDataSeriesExample />
				<h3 className="_h3">Link-Lists with Link-label (Month)</h3>
				<ThemeUpcomingReleasesExample />
			</>
		)
	}
}
export default ExamplesOfAllLists
