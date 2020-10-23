import React, { Component } from "react"
import { Link, a, BrowserRouter as Router, Route } from "react-router-dom"
import Top from "../Placeholders/Top"

import ThemeListDefault from "../Lists/ThemeListDefault"
import ThemeListBasic from "../Lists/ThemeListBasic"
import ThemeListHead from "../Lists/ThemeListHead"
import ThemeListFoot from "../Lists/ThemeListFoot"
import ThemeListSpacer from "../Lists/ThemeListSpacer"
import ThemeListSeperator from "../Lists/ThemeListSeperator"
import ThemeListBulleted from "../Lists/ThemeListBulleted"
import ThemeListSingleBullet from "../Lists/ThemeListSingleBullet"
import ThemeListNestedBulleted from "../Lists/ThemeListNestedBulleted"
import ThemeListCorrectNesting from "../Lists/ThemeListCorrectNesting"
import ThemeListHighlight from "../Lists/ThemeListHighlight"
import ThemeListSub from "../Lists/ThemeListSub"
import ThemeUpdatedDataSeries from "../Lists/ThemeUpdatedDataSeries"
import IconicListItems from "../IconicListItems/IconicListItems"
import ThemeListNumbered from "../Lists/ThemeListNumbered"
import ThemeReleaseSchedule from "../Lists/ThemeReleaseSchedule"
import ThemeUnorderedList from "../Lists/ThemeUnorderedList"
import CalculatedNumberedLists from "../Lists/CalculatedNumberedLists"
import ThemeUpcomingReleases from "../Lists/ThemeUpcomingReleases"

class SecondaryLists extends Component {
	constructor() {
		super()
		this.state = {
			isArticle: false,
			isPrimary: false,
			isPrimaryAlt: false
		}
	}
	render() {
		return (
			<>
				<ThemeListDefault />
				<Top />
				<ThemeListBasic />
				<Top />
				<ThemeListHead />
				<Top />
				<ThemeListFoot />
				<Top />
				<ThemeListSpacer />
				<Top />
				<ThemeListSeperator />
				<Top />
				<ThemeListBulleted />
				<Top />

				<ThemeListCorrectNesting />
				<Top />
				<ThemeListSub />
				<Top />
				<ThemeListSingleBullet />
				<Top />
				<ThemeListNestedBulleted />
				<Top />
				{/*
				<h3 className="_h3">Nested Bulleted List with Spacer</h3>
				<ThemeListCorrectNesting />
				<Top />
				*/}

				{/* <p className="_p">Lists Features</p> */}
				<ThemeListHighlight />
				<Top />
				<ThemeListNumbered />
				<Top />

				<h3 className="_h3">Calculated Numbered List Items</h3>
				<p className="_p">
					(See <Link to="/states/calculated-numbered-lists">Calculated Numbered Lists</Link> for more information)
				</p>
				<CalculatedNumberedLists />

				<ThemeUnorderedList />
				<Top />

				<ThemeReleaseSchedule />
				<Top />

				<IconicListItems />

				<h3 className="_h3">Link-Lists with Trailing Link-label</h3>
				<p className="_p">
					(See {/* <Link to="/states/link-lists">Link Lists</Link> and */}
					<Link to="/style-guide/states/empty-list-items">Empty List-items</Link> for more information)
				</p>
				<ThemeUpdatedDataSeries />
				<Top />
				<h3 className="_h3">Link-Lists with Link-label (Month)</h3>
				<ThemeUpcomingReleases />
				<Top />
			</>
		)
	}
}
export default SecondaryLists
