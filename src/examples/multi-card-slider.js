﻿import React, { Component } from "react";

class Examples1 extends Component {
	render() {
		return (<ul class="style-guide">
			<div class="right-content">
				<h1 class="_h1">Multi-Card Slider</h1>
				<p class="_p">The sliders use the
<a href="https://bxslider.com/">bxslider</a> which is a fully responsive and highly
<a href="https://bxslider.com/options">configurable</a> jQuery based slider. The bxslider node package can be found in the /global/vendor/ folder.</p>

				{/*start prototype specific files */}
				{/*start prototype specific files */}
				{/*start prototype specific files */}

				<div class="l-row header">
					<div class="feature-section">
						<div class="l-row header">
							<div class="left">
								Current Issues &amp; Trends
</div>
							<div class="right">
								<a href="/" class="see-more">See more ›</a>
								<div class="slider-pager-location"></div>
							</div>
						</div>

						<div class="slider-multi-cards-container">
							<ul class="bxslider">
								<li>
									<a href="/" class="thumbnail" style="background-image: url('https://www.eia.gov/todayinenergy/images/2017.08.15/main.png');"></a>
									<div class="slide-content">
										<h3 class="ellipsis" data-truncate-lines="4" data-truncate-position="end">
											<a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
											ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.</a>
										</h3>
										<p class="tags" class="ellipsis" data-truncate-lines="2" data-truncate-position="end">
											<a href="/" class="capsule" title="aaaaa">aaaaa</a>,
<a href="/" class="capsule" title="bbbbb">bbbbb</a>,
<a href="/" class="capsule" title="ccccc">ccccc</a>,
<a href="/" class="capsule" title="ddddd">ddddd</a>,
<a href="/" class="capsule" title="eeeee">eeeee</a>,
<a href="/" class="capsule" title="fffff">fffff</a>,
<a href="/" class="capsule" title="ggggg">ggggg</a>,
<a href="/" class="capsule" title="hhhhh">hhhhh</a>,
<a href="/" class="capsule" title="iiiii">iiiii</a>,
<a href="/" class="capsule" title="jjjjj">jjjjj</a>,
<a href="/" class="capsule" title="kkkkk">kkkkk</a>,
</p>
									</div>
								</li>
								<li>
									<a href="/" class="thumbnail" style="background-image: url('https://www.eia.gov/todayinenergy/images/2017.08.11/main.png');"></a>
									<div class="slide-content">
										<h3 class="ellipsis" data-truncate-lines="4" data-truncate-position="end">
											<a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
											ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.</a>
										</h3>
										<p class="tags">
											<a href="/" class="capsule" title="aaaaa">aaaaa</a>,
<a href="/" class="capsule" title="bbbbb">bbbbb</a>,
<a href="/" class="capsule" title="ccccc">ccccc</a>,
<a href="/" class="capsule" title="ddddd">ddddd</a>,
<a href="/" class="capsule" title="eeeee">eeeee</a>,
<a href="/" class="capsule" title="fffff">fffff</a>,
<a href="/" class="capsule" title="ggggg">ggggg</a>,
<a href="/" class="capsule" title="hhhhh">hhhhh</a>,
<a href="/" class="capsule" title="iiiii">iiiii</a>,
<a href="/" class="capsule" title="jjjjj">jjjjj</a>,
<a href="/" class="capsule" title="kkkkk">kkkkk</a>,
</p>
									</div>
								</li>
								<li>
									<a href="/" class="thumbnail" style="background-image: url('https://www.eia.gov/petroleum/weekly/archive/2017/170809/article_images/twip170809fig1.png');"></a>
									<div class="slide-content">
										<h3 class="ellipsis" data-truncate-lines="4" data-truncate-position="end">
											<a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
											ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.</a>
										</h3>
										<p class="tags">
											<a href="/" class="capsule" title="aaaaa">aaaaa</a>,
<a href="/" class="capsule" title="bbbbb">bbbbb</a>,
<a href="/" class="capsule" title="ccccc">ccccc</a>,
<a href="/" class="capsule" title="ddddd">ddddd</a>,
<a href="/" class="capsule" title="eeeee">eeeee</a>,
<a href="/" class="capsule" title="fffff">fffff</a>,
<a href="/" class="capsule" title="ggggg">ggggg</a>,
<a href="/" class="capsule" title="hhhhh">hhhhh</a>,
<a href="/" class="capsule" title="iiiii">iiiii</a>,
<a href="/" class="capsule" title="jjjjj">jjjjj</a>,
<a href="/" class="capsule" title="kkkkk">kkkkk</a>,
</p>
									</div>
								</li>
								<li>
									<a href="/" class="thumbnail" style="background-image: url('https://www.eia.gov/petroleum/weekly/archive/2017/170809/article_images/twip170809fig2.png');"></a>
									<div class="slide-content">
										<h3 class="ellipsis" data-truncate-lines="4" data-truncate-position="end">
											<a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
											ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.</a>
										</h3>
										<p class="tags">
											<a href="/" class="capsule" title="aaaaa">aaaaa</a>,
<a href="/" class="capsule" title="bbbbb">bbbbb</a>,
<a href="/" class="capsule" title="ccccc">ccccc</a>,
<a href="/" class="capsule" title="ddddd">ddddd</a>,
<a href="/" class="capsule" title="eeeee">eeeee</a>,
<a href="/" class="capsule" title="fffff">fffff</a>,
<a href="/" class="capsule" title="ggggg">ggggg</a>,
<a href="/" class="capsule" title="hhhhh">hhhhh</a>,
<a href="/" class="capsule" title="iiiii">iiiii</a>,
<a href="/" class="capsule" title="jjjjj">jjjjj</a>,
<a href="/" class="capsule" title="kkkkk">kkkkk</a>,
</p>
									</div>
								</li>
								<li>
									<a href="/" class="thumbnail" style="background-image: url('https://www.eia.gov/todayinenergy/images/2017.08.04/main.png');"></a>
									<div class="slide-content">
										<h3 class="ellipsis" data-truncate-lines="4" data-truncate-position="end">
											<a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
											ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.</a>
										</h3>
										<p class="tags">
											<a href="/" class="capsule" title="aaaaa">aaaaa</a>,
<a href="/" class="capsule" title="bbbbb">bbbbb</a>,
<a href="/" class="capsule" title="ccccc">ccccc</a>,
<a href="/" class="capsule" title="ddddd">ddddd</a>,
<a href="/" class="capsule" title="eeeee">eeeee</a>,
<a href="/" class="capsule" title="fffff">fffff</a>,
<a href="/" class="capsule" title="ggggg">ggggg</a>,
<a href="/" class="capsule" title="hhhhh">hhhhh</a>,
<a href="/" class="capsule" title="iiiii">iiiii</a>,
<a href="/" class="capsule" title="jjjjj">jjjjj</a>,
<a href="/" class="capsule" title="kkkkk">kkkkk</a>,
</p>
									</div>
								</li>
								<li>
									<a href="/" class="thumbnail" style="background-image: url('https://www.eia.gov/petroleum/weekly/archive/2017/170803/article_images/twip170802fig1.png');"></a>
									<div class="slide-content">
										<h3 class="ellipsis" data-truncate-lines="4" data-truncate-position="end">
											<a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
											ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.</a>
										</h3>
										<p class="tags">
											<a href="/" class="capsule" title="aaaaa">aaaaa</a>,
<a href="/" class="capsule" title="bbbbb">bbbbb</a>,
<a href="/" class="capsule" title="ccccc">ccccc</a>,
<a href="/" class="capsule" title="ddddd">ddddd</a>,
<a href="/" class="capsule" title="eeeee">eeeee</a>,
<a href="/" class="capsule" title="fffff">fffff</a>,
<a href="/" class="capsule" title="ggggg">ggggg</a>,
<a href="/" class="capsule" title="hhhhh">hhhhh</a>,
<a href="/" class="capsule" title="iiiii">iiiii</a>,
<a href="/" class="capsule" title="jjjjj">jjjjj</a>,
<a href="/" class="capsule" title="kkkkk">kkkkk</a>,
</p>
									</div>
								</li>
								<li>
									<a href="/" class="thumbnail" style="background-image: url('https://www.eia.gov/petroleum/weekly/archive/2017/170803/article_images/twip170802fig1.png');"></a>
									<div class="slide-content">
										<h3 class="ellipsis" data-truncate-lines="4" data-truncate-position="end">
											<a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
											ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.</a>
										</h3>
										<p class="tags">
											<a href="/" class="capsule" title="aaaaa">aaaaa</a>,
<a href="/" class="capsule" title="bbbbb">bbbbb</a>,
<a href="/" class="capsule" title="ccccc">ccccc</a>,
<a href="/" class="capsule" title="ddddd">ddddd</a>,
<a href="/" class="capsule" title="eeeee">eeeee</a>,
<a href="/" class="capsule" title="fffff">fffff</a>,
<a href="/" class="capsule" title="ggggg">ggggg</a>,
<a href="/" class="capsule" title="hhhhh">hhhhh</a>,
<a href="/" class="capsule" title="iiiii">iiiii</a>,
<a href="/" class="capsule" title="jjjjj">jjjjj</a>,
<a href="/" class="capsule" title="kkkkk">kkkkk</a>,
</p>
									</div>
								</li>
								<li>
									<a href="/" class="thumbnail" style="background-image: url('https://www.eia.gov/petroleum/weekly/archive/2017/170803/article_images/twip170802fig1.png');"></a>
									<div class="slide-content">
										<h3 class="ellipsis" data-truncate-lines="4" data-truncate-position="end">
											<a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
											ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.</a>
										</h3>
										<p class="tags">
											<a href="/" class="capsule" title="aaaaa">aaaaa</a>,
<a href="/" class="capsule" title="bbbbb">bbbbb</a>,
<a href="/" class="capsule" title="ccccc">ccccc</a>,
<a href="/" class="capsule" title="ddddd">ddddd</a>,
<a href="/" class="capsule" title="eeeee">eeeee</a>,
<a href="/" class="capsule" title="fffff">fffff</a>,
<a href="/" class="capsule" title="ggggg">ggggg</a>,
<a href="/" class="capsule" title="hhhhh">hhhhh</a>,
<a href="/" class="capsule" title="iiiii">iiiii</a>,
<a href="/" class="capsule" title="jjjjj">jjjjj</a>,
<a href="/" class="capsule" title="kkkkk">kkkkk</a>,
</p>
									</div>
								</li>
								<li>
									<a href="/" class="thumbnail" style="background-image: url('https://www.eia.gov/petroleum/weekly/archive/2017/170803/article_images/twip170802fig1.png');"></a>
									<div class="slide-content">
										<h3 class="ellipsis" data-truncate-lines="4" data-truncate-position="end">
											<a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
											ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.</a>
										</h3>
										<p class="tags">
											<a href="/" class="capsule" title="aaaaa">aaaaa</a>,
<a href="/" class="capsule" title="bbbbb">bbbbb</a>,
<a href="/" class="capsule" title="ccccc">ccccc</a>,
<a href="/" class="capsule" title="ddddd">ddddd</a>,
<a href="/" class="capsule" title="eeeee">eeeee</a>,
<a href="/" class="capsule" title="fffff">fffff</a>,
<a href="/" class="capsule" title="ggggg">ggggg</a>,
<a href="/" class="capsule" title="hhhhh">hhhhh</a>,
<a href="/" class="capsule" title="iiiii">iiiii</a>,
<a href="/" class="capsule" title="jjjjj">jjjjj</a>,
<a href="/" class="capsule" title="kkkkk">kkkkk</a>,
</p>
									</div>
								</li>
								<li>
									<a href="/" class="thumbnail" style="background-image: url('https://www.eia.gov/petroleum/weekly/archive/2017/170803/article_images/twip170802fig1.png');"></a>
									<div class="slide-content">
										<h3 class="ellipsis" data-truncate-lines="4" data-truncate-position="end">
											<a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
											ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.</a>
										</h3>
										<p class="tags">
											<a href="/" class="capsule" title="aaaaa">aaaaa</a>,
<a href="/" class="capsule" title="bbbbb">bbbbb</a>,
<a href="/" class="capsule" title="ccccc">ccccc</a>,
<a href="/" class="capsule" title="ddddd">ddddd</a>,
<a href="/" class="capsule" title="eeeee">eeeee</a>,
<a href="/" class="capsule" title="fffff">fffff</a>,
<a href="/" class="capsule" title="ggggg">ggggg</a>,
<a href="/" class="capsule" title="hhhhh">hhhhh</a>,
<a href="/" class="capsule" title="iiiii">iiiii</a>,
<a href="/" class="capsule" title="jjjjj">jjjjj</a>,
<a href="/" class="capsule" title="kkkkk">kkkkk</a>,
</p>
									</div>
								</li>
								<li>
									<a href="/" class="thumbnail" style="background-image: url('https://www.eia.gov/petroleum/weekly/archive/2017/170803/article_images/twip170802fig1.png');"></a>
									<div class="slide-content">
										<h3 class="ellipsis" data-truncate-lines="4" data-truncate-position="end">
											<a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
											ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.</a>
										</h3>
										<p class="tags">
											<a href="/" class="capsule" title="aaaaa">aaaaa</a>,
<a href="/" class="capsule" title="bbbbb">bbbbb</a>,
<a href="/" class="capsule" title="ccccc">ccccc</a>,
<a href="/" class="capsule" title="ddddd">ddddd</a>,
<a href="/" class="capsule" title="eeeee">eeeee</a>,
<a href="/" class="capsule" title="fffff">fffff</a>,
<a href="/" class="capsule" title="ggggg">ggggg</a>,
<a href="/" class="capsule" title="hhhhh">hhhhh</a>,
<a href="/" class="capsule" title="iiiii">iiiii</a>,
<a href="/" class="capsule" title="jjjjj">jjjjj</a>,
<a href="/" class="capsule" title="kkkkk">kkkkk</a>,
</p>
									</div>
								</li>
								<li>
									<a href="/" class="thumbnail" style="background-image: url('https://www.eia.gov/petroleum/weekly/archive/2017/170803/article_images/twip170802fig1.png');"></a>
									<div class="slide-content">
										<h3 class="ellipsis" data-truncate-lines="4" data-truncate-position="end">
											<a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
											ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.</a>
										</h3>
										<p class="tags">
											<a href="/" class="capsule" title="aaaaa">aaaaa</a>,
<a href="/" class="capsule" title="bbbbb">bbbbb</a>,
<a href="/" class="capsule" title="ccccc">ccccc</a>,
<a href="/" class="capsule" title="ddddd">ddddd</a>,
<a href="/" class="capsule" title="eeeee">eeeee</a>,
<a href="/" class="capsule" title="fffff">fffff</a>,
<a href="/" class="capsule" title="ggggg">ggggg</a>,
<a href="/" class="capsule" title="hhhhh">hhhhh</a>,
<a href="/" class="capsule" title="iiiii">iiiii</a>,
<a href="/" class="capsule" title="jjjjj">jjjjj</a>,
<a href="/" class="capsule" title="kkkkk">kkkkk</a>,
</p>
									</div>
								</li>
								<li>
									<a href="/" class="thumbnail" style="background-image: url('https://www.eia.gov/petroleum/weekly/archive/2017/170803/article_images/twip170802fig1.png');"></a>
									<div class="slide-content">
										<h3 class="ellipsis" data-truncate-lines="4" data-truncate-position="end">
											<a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
											ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.</a>
										</h3>
										<p class="tags">
											<a href="/" class="capsule" title="aaaaa">aaaaa</a>,
<a href="/" class="capsule" title="bbbbb">bbbbb</a>,
<a href="/" class="capsule" title="ccccc">ccccc</a>,
<a href="/" class="capsule" title="ddddd">ddddd</a>,
<a href="/" class="capsule" title="eeeee">eeeee</a>,
<a href="/" class="capsule" title="fffff">fffff</a>,
<a href="/" class="capsule" title="ggggg">ggggg</a>,
<a href="/" class="capsule" title="hhhhh">hhhhh</a>,
<a href="/" class="capsule" title="iiiii">iiiii</a>,
<a href="/" class="capsule" title="jjjjj">jjjjj</a>,
<a href="/" class="capsule" title="kkkkk">kkkkk</a>,
</p>
									</div>
								</li>
								<li>
									<a href="/" class="thumbnail" style="background-image: url('https://www.eia.gov/petroleum/weekly/archive/2017/170803/article_images/twip170802fig1.png');"></a>
									<div class="slide-content">
										<h3 class="ellipsis" data-truncate-lines="4" data-truncate-position="end">
											<a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
											ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.</a>
										</h3>
										<p class="tags">
											<a href="/" class="capsule" title="aaaaa">aaaaa</a>,
<a href="/" class="capsule" title="bbbbb">bbbbb</a>,
<a href="/" class="capsule" title="ccccc">ccccc</a>,
<a href="/" class="capsule" title="ddddd">ddddd</a>,
<a href="/" class="capsule" title="eeeee">eeeee</a>,
<a href="/" class="capsule" title="fffff">fffff</a>,
<a href="/" class="capsule" title="ggggg">ggggg</a>,
<a href="/" class="capsule" title="hhhhh">hhhhh</a>,
<a href="/" class="capsule" title="iiiii">iiiii</a>,
<a href="/" class="capsule" title="jjjjj">jjjjj</a>,
<a href="/" class="capsule" title="kkkkk">kkkkk</a>,
</p>
									</div>
								</li>
								<li>
									<a href="/" class="thumbnail" style="background-image: url('https://www.eia.gov/petroleum/weekly/archive/2017/170803/article_images/twip170802fig1.png');"></a>
									<div class="slide-content">
										<h3 class="ellipsis" data-truncate-lines="4" data-truncate-position="end">
											<a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
											ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.</a>
										</h3>
										<p class="tags">
											<a href="/" class="capsule" title="aaaaa">aaaaa</a>,
<a href="/" class="capsule" title="bbbbb">bbbbb</a>,
<a href="/" class="capsule" title="ccccc">ccccc</a>,
<a href="/" class="capsule" title="ddddd">ddddd</a>,
<a href="/" class="capsule" title="eeeee">eeeee</a>,
<a href="/" class="capsule" title="fffff">fffff</a>,
<a href="/" class="capsule" title="ggggg">ggggg</a>,
<a href="/" class="capsule" title="hhhhh">hhhhh</a>,
<a href="/" class="capsule" title="iiiii">iiiii</a>,
<a href="/" class="capsule" title="jjjjj">jjjjj</a>,
<a href="/" class="capsule" title="kkkkk">kkkkk</a>,
</p>
									</div>
								</li>
								<li>
									<a href="/" class="thumbnail" style="background-image: url('https://www.eia.gov/petroleum/weekly/archive/2017/170803/article_images/twip170802fig1.png');"></a>
									<div class="slide-content">
										<h3 class="ellipsis" data-truncate-lines="4" data-truncate-position="end">
											<a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
											ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
											eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.</a>
										</h3>
										<p class="tags">
											<a href="/" class="capsule" title="aaaaa">aaaaa</a>,
<a href="/" class="capsule" title="bbbbb">bbbbb</a>,
<a href="/" class="capsule" title="ccccc">ccccc</a>,
<a href="/" class="capsule" title="ddddd">ddddd</a>,
<a href="/" class="capsule" title="eeeee">eeeee</a>,
<a href="/" class="capsule" title="fffff">fffff</a>,
<a href="/" class="capsule" title="ggggg">ggggg</a>,
<a href="/" class="capsule" title="hhhhh">hhhhh</a>,
<a href="/" class="capsule" title="iiiii">iiiii</a>,
<a href="/" class="capsule" title="jjjjj">jjjjj</a>,
<a href="/" class="capsule" title="kkkkk">kkkkk</a>,
</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>


				{/*end  style guide */}
				{/*end  style guide */}
				{/*end  style guide */}
			</li >
		</ul >);
	}
}

export default Examples1;