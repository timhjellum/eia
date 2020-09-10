import React, { useState } from "react"

import SideNavBase from "./SideNavBase"
import SideNavLayouts from "./SideNavLayouts"
import SideNavModules from "./SideNavModules"
import SideNavThemes from "./SideNavThemes"
import SideNavStates from "./SideNavStates"
import MainNav from "./MainNav"

function SideNav() {
	const [sideNav, setSideNav] = useState()
	return (
		<>
			<MainNav />
			{sideNav === "base" ? <SideNavBase setSideNav={setSideNav} /> : sideNav === "layouts" ? <SideNavLayouts setSideNav={setSideNav} /> : sideNav === "modules" ? <SideNavModules setSideNav={setSideNav} /> : sideNav === "themes" ? <SideNavThemes setSideNav={setSideNav} /> : sideNav === "states" ? <SideNavStates setSideNav={setSideNav} /> : "n/a"}
		</>
	)
}
export default SideNav
