import React, { Component } from "react"

class ThemeUpdatedDataSeriesExample extends Component {
	render() {
		return (
			<div className="primary hide-mt">
				<ul className="updated-data-series">
					<li className="head">
						<h2>Updated Data Series</h2>
					</li>
					<li>
						<span className="date">1/15/2020</span>
						<a href="/dnav/pet/pet_sum_sndw_dcus_nus_w.htm" title="Weekly supply estimates">
							Weekly supply estimates
						</a>
					</li>
					<li>
						<span className="date">1/15/2020</span>
						<a href="/dnav/pet/pet_pri_spt_s1_d.htm" title="Spot prices">
							Spot prices
						</a>
					</li>
					<li>
						<span className="date">1/15/2020</span>
						<a href="/dnav/pet/pet_pri_fut_s1_d.htm" title="Futures prices (NYMEX)">
							Futures prices (NYMEX)
						</a>
					</li>
					<li>
						<span className="date">1/15/2020</span>
						<a href="/dnav/pet/pet_sum_sndw_dcus_nus_w.htm" title="Weekly inputs &amp; utilization">
							Weekly inputs &amp; utilization
						</a>
					</li>
					<li style={{ display: "none" }}>
						<span className="date"></span>
						<a href="" title=""></a>
					</li>
					<li style={{ display: "none" }}>
						<span className="date"></span>
						<a href="" title=""></a>
					</li>
				</ul>
			</div>
		)
	}
}

export default ThemeUpdatedDataSeriesExample
