import React, { Component } from "react";

class StatesToggle extends Component {
	render() {
		return (<ul class="style-guide">
			<li class="section-container"><h1 class="_h1">Reusable Toggles</h1>



				<h2 class="_h2">Expand/Collapse Toggle</h2>
				<p class="_p">The Expand/Collapse Toggle functions like the accordion, can be styled like the accordion,
				and can replace the accordion, but is not the accordion which is used on various
				pages. So while this toggle can be used as an accordion, it was created as a expand-collapse
toggle module.</p>
				<div class="_example">
					<p class="_p">The bare minimum HTML is below:</p>
					<pre><code class="html">&lt;!-- toggle expand-collapse --&gt;
					&lt;a class="toggle expand-collapse" href=""&gt;Link&lt;/a&gt;
					&lt;div class="expand-collapse-content"&gt;
					&lt;!-- content --&gt;
					&lt;/div&gt;
</code></pre>
				</div>
				<p class="_p">The Expand/Collapse Toggle is not styled so you can apply any style you want. Additionally,
				the script can be activate by using any element that you can attach a click function
to (anchor, button, title bar).</p>
				<h3 class="_h3">Expand/Collapse Accordion</h3>


				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-full-width-col">
							<div class="l-col">
								<div class="expand-collapse-toggle-accordion">
									{/*start style-guide code */}
									<h3 class="toggle expand-collapse" href="">Title 1</h3>
									<div class="expand-collapse-content">
										<div class="primary">
											<span class="_module-bg">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.
</span>
										</div>
									</div>

									<h3 class="toggle expand-collapse" href="">Title 2</h3>
									<div class="expand-collapse-content">
										<div class="primary">
											<span class="_module-bg">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.
</span>
										</div>
									</div>

									<h3 class="toggle expand-collapse" href="">Title 3</h3>
									<div class="expand-collapse-content">
										<div class="primary">
											<span class="_module-bg">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.
</span>
										</div>
									</div>
									{/*end style-guide code */}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="_example _html">
					<h4>HTML Code Example</h4>
					{/*Target */}
					{/*
<textarea class="_copy-textarea" rows="15"><h3 class="toggle expand-collapse" href="">Title 1</h3>
						<div class="expand-collapse-content">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>

						<h3 class="toggle expand-collapse" href="">Title 2</h3>
						<div class="expand-collapse-content">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>

						<h3 class="toggle expand-collapse" href="">Title 3</h3>
						<div class="expand-collapse-content">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div></textarea>
*/}
					{/*Trigger */}
					<div class="_button-container">
						<button type="button" class="_copy">Copy to clipboard</button>
					</div>
				</div>
			</li>
			<li class="section-container">


				<h3 class="_h3">Vertical Toggle</h3>
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-full-width-col">
							<div class="l-col">
								<div class="expand-collapse-toggle-vertical-slide">
									{/*start style-guide code */}
									<a class="toggle expand-collapse" href="">
										<span class="active-text">Hide</span>
										<span class="inactive-text">Show</span>
									</a>
									<div class="expand-collapse-content">
										<div class="primary">
											<span class="_module-bg">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.
</span>
										</div>
									</div>
									{/*end style-guide code */}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="_example _html">
					<h4>HTML Code Example</h4>
					{/*Target */}
					{/*
<textarea class="_copy-textarea" rows="7"><a class="toggle expand-collapse" href="">
						<span class="active-text">Hide</span>
						<span class="inactive-text">Show</span>
					</a>
						<div class="expand-collapse-content">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div></textarea>
*/}
					{/*Trigger */}
					<div class="_button-container">
						<button type="button" class="_copy">Copy to clipboard</button>
					</div>
				</div>
			</li>
			<li class="section-container">
				{/*
				<h3 class="_h3">Expand/Collapse Content (button below content)</h3>
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row header l-full-width-col">
							<div class="l-col">
							
								<div class="expand-collapse-content-above-toggle-vertical-slide">
									
									<div class="expand-collapse-content beta-feedback-form">
										<div class="l-row l-two-col-right-wide">
											<div class="l-col">
												<h2>Give Us Your Feedback</h2>
												<p>We welcome your feedback and insights on this project.</p>
												<form>
													<div class="form-container">
														<label>Your Country:</label>
														<select id="country">
															<option value="United States" selected="selected">United States</option>
															<option></option>
															<option value="Afghanistan">Afghanistan</option>
															<option value="Albania">Albania</option>
															<option value="Algeria">Algeria</option>
															<option value="American Samoa">American Samoa</option>
															<option value="Angola">Angola</option>
															<option value="Antarctica">Antarctica</option>
															<option value="Antigua and Barbuda">Antigua and Barbuda</option>
															<option value="Argentina">Argentina</option>
															<option value="Armenia">Armenia</option>
															<option value="Aruba">Aruba</option>
															<option value="Australia">Australia</option>
															<option value="Austria">Austria</option>
															<option value="Azerbaijan">Azerbaijan</option>
															<option value="Bahamas, The">Bahamas, The</option>
															<option value="Bahrain">Bahrain</option>
															<option value="Bangladesh">Bangladesh</option>
															<option value="Barbados">Barbados</option>
															<option value="Belarus">Belarus</option>
															<option value="Belgium">Belgium</option>
															<option value="Belize">Belize</option>
															<option value="Benin">Benin</option>
															<option value="Bermuda">Bermuda</option>
															<option value="Bhutan">Bhutan</option>
															<option value="Bolivia">Bolivia</option>
															<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
															<option value="Botswana">Botswana</option>
															<option value="Brazil">Brazil</option>
															<option value="Brunei">Brunei</option>
															<option value="Bulgaria">Bulgaria</option>
															<option value="Burkina Faso">Burkina Faso</option>
															<option value="Burma (Myanmar)">Burma (Myanmar)</option>
															<option value="Burundi">Burundi</option>
															<option value="Cambodia">Cambodia</option>
															<option value="Cameroon">Cameroon</option>
															<option value="Canada">Canada</option>
															<option value="Cape Verde">Cape Verde</option>
															<option value="Cayman Islands">Cayman Islands</option>
															<option value="Central African Republic">Central African Republic</option>
															<option value="Chad">Chad</option>
															<option value="Chile">Chile</option>
															<option value="China">China</option>
															<option value="Colombia">Colombia</option>
															<option value="Comoros">Comoros</option>
															<option value="Congo (Brazzaville)">Congo (Brazzaville)</option>
															<option value="Congo (Kinshasa)">Congo (Kinshasa)</option>
															<option value="Cook Islands">Cook Islands</option>
															<option value="Costa Rica">Costa Rica</option>
															<option value="Cote dIvoire (IvoryCoast)">Cote dIvoire (IvoryCoast)</option>
															<option value="Croatia">Croatia</option>
															<option value="Cuba">Cuba</option>
															<option value="Cyprus">Cyprus</option>
															<option value="Czech Republic">Czech Republic</option>
															<option value="Denmark">Denmark</option>
															<option value="Djibouti">Djibouti</option>
															<option value="Dominica">Dominica</option>
															<option value="Dominican Republic">Dominican Republic</option>
															<option value="Ecuador">Ecuador</option>
															<option value="Egypt">Egypt</option>
															<option value="El Salvador">El Salvador</option>
															<option value="Equatorial Guinea">Equatorial Guinea</option>
															<option value="Eritrea">Eritrea</option>
															<option value="Estonia">Estonia</option>
															<option value="Ethiopia">Ethiopia</option>
															<option value="Falkland Islands (Islas Malvinas)">Falkland Islands (Islas Malvinas)</option>
															<option value="Faroe Islands">Faroe Islands</option>
															<option value="Fiji">Fiji</option>
															<option value="Finland">Finland</option>
															<option value="France">France</option>
															<option value="French Guiana">French Guiana</option>
															<option value="French Polynesia">French Polynesia</option>
															<option value="Gabon">Gabon</option>
															<option value="Gambia, The">Gambia, The</option>
															<option value="Georgia">Georgia</option>
															<option value="Germany">Germany</option>
															<option value="Ghana">Ghana</option>
															<option value="Gibraltar">Gibraltar</option>
															<option value="Greece">Greece</option>
															<option value="Greenland">Greenland</option>
															<option value="Grenada">Grenada</option>
															<option value="Guadeloupe">Guadeloupe</option>
															<option value="Guam">Guam</option>
															<option value="Guatemala">Guatemala</option>
															<option value="Guinea">Guinea</option>
															<option value="Guinea-Bissau">Guinea-Bissau</option>
															<option value="Guyana">Guyana</option>
															<option value="Haiti">Haiti</option>
															<option value="Honduras">Honduras</option>
															<option value="Hong Kong">Hong Kong</option>
															<option value="Hungary">Hungary</option>
															<option value="Iceland">Iceland</option>
															<option value="India">India</option>
															<option value="Indonesia">Indonesia</option>
															<option value="Iran">Iran</option>
															<option value="Iraq">Iraq</option>
															<option value="Ireland">Ireland</option>
															<option value="Israel">Israel</option>
															<option value="Italy">Italy</option>
															<option value="Jamaica">Jamaica</option>
															<option value="Japan">Japan</option>
															<option value="Jordan">Jordan</option>
															<option value="Kazakhstan">Kazakhstan</option>
															<option value="Kenya">Kenya</option>
															<option value="Kiribati">Kiribati</option>
															<option value="Korea, North">Korea, North</option>
															<option value="Korea, South">Korea, South</option>
															<option value="Kuwait">Kuwait</option>
															<option value="Kyrgyzstan">Kyrgyzstan</option>
															<option value="Laos">Laos</option>
															<option value="Latvia">Latvia</option>
															<option value="Lebanon">Lebanon</option>
															<option value="Lesotho">Lesotho</option>
															<option value="Liberia">Liberia</option>
															<option value="Libya">Libya</option>
															<option value="Lithuania">Lithuania</option>
															<option value="Luxembourg">Luxembourg</option>
															<option value="Macau">Macau</option>
															<option value="Macedonia">Macedonia</option>
															<option value="Madagascar">Madagascar</option>
															<option value="Malawi">Malawi</option>
															<option value="Malaysia">Malaysia</option>
															<option value="Maldives">Maldives</option>
															<option value="Mali">Mali</option>
															<option value="Malta">Malta</option>
															<option value="Martinique">Martinique</option>
															<option value="Mauritania">Mauritania</option>
															<option value="Mauritius">Mauritius</option>
															<option value="Mexico">Mexico</option>
															<option value="Moldova">Moldova</option>
															<option value="Mongolia">Mongolia</option>
															<option value="Montenegro">Montenegro</option>
															<option value="Montserrat">Montserrat</option>
															<option value="Morocco">Morocco</option>
															<option value="Mozambique">Mozambique</option>
															<option value="Namibia">Namibia</option>
															<option value="Nauru">Nauru</option>
															<option value="Nepal">Nepal</option>
															<option value="Netherlands">Netherlands</option>
															<option value="Netherlands Antilles">Netherlands Antilles</option>
															<option value="New Caledonia">New Caledonia</option>
															<option value="New Zealand">New Zealand</option>
															<option value="Nicaragua">Nicaragua</option>
															<option value="Niger">Niger</option>
															<option value="Nigeria">Nigeria</option>
															<option value="Niue">Niue</option>
															<option value="Norway">Norway</option>
															<option value="Oman">Oman</option>
															<option value="Pakistan">Pakistan</option>
															<option value="Palestine">Palestine</option>
															<option value="Panama">Panama</option>
															<option value="Papua New Guinea">Papua New Guinea</option>
															<option value="Paraguay">Paraguay</option>
															<option value="Peru">Peru</option>
															<option value="Philippines">Philippines</option>
															<option value="Poland">Poland</option>
															<option value="Portugal">Portugal</option>
															<option value="Puerto Rico">Puerto Rico</option>
															<option value="Qatar">Qatar</option>
															<option value="Reunion">Reunion</option>
															<option value="Romania">Romania</option>
															<option value="Russia">Russia</option>
															<option value="Rwanda">Rwanda</option>
															<option value="Saint Helena">Saint Helena</option>
															<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
															<option value="Saint Lucia">Saint Lucia</option>
															<option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
															<option value="Saint Vincent/Grenadines">Saint Vincent/Grenadines</option>
															<option value="Samoa">Samoa</option>
															<option value="Sao Tome and Principe">Sao Tome and Principe</option>
															<option value="Saudi Arabia">Saudi Arabia</option>
															<option value="Senegal">Senegal</option>
															<option value="Serbia">Serbia</option>
															<option value="Seychelles">Seychelles</option>
															<option value="Sierra Leone">Sierra Leone</option>
															<option value="Singapore">Singapore</option>
															<option value="Slovakia">Slovakia</option>
															<option value="Slovenia">Slovenia</option>
															<option value="Solomon Islands">Solomon Islands</option>
															<option value="Somalia">Somalia</option>
															<option value="South Africa">South Africa</option>
															<option value="Spain">Spain</option>
															<option value="Sri Lanka">Sri Lanka</option>
															<option value="Sudan">Sudan</option>
															<option value="Suriname">Suriname</option>
															<option value="Swaziland">Swaziland</option>
															<option value="Sweden">Sweden</option>
															<option value="Switzerland">Switzerland</option>
															<option value="Syria">Syria</option>
															<option value="Taiwan">Taiwan</option>
															<option value="Tajikistan">Tajikistan</option>
															<option value="Tanzania">Tanzania</option>
															<option value="Thailand">Thailand</option>
															<option value="Timor-Leste (East Timor)">Timor-Leste (East Timor)</option>
															<option value="Togo">Togo</option>
															<option value="Tonga">Tonga</option>
															<option value="Trinidad and Tobago">Trinidad and Tobago</option>
															<option value="Tunisia">Tunisia</option>
															<option value="Turkey">Turkey</option>
															<option value="Turkmenistan">Turkmenistan</option>
															<option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
															<option value="U.S. Pacific Islands">U.S. Pacific Islands</option>
															<option value="Uganda">Uganda</option>
															<option value="Ukraine">Ukraine</option>
															<option value="United Arab Emirates">United Arab Emirates</option>
															<option value="United Kingdom">United Kingdom</option>
															<option value="Uruguay">Uruguay</option>
															<option value="Uzbekistan">Uzbekistan</option>
															<option value="Vanuatu">Vanuatu</option>
															<option value="Venezuela">Venezuela</option>
															<option value="Vietnam">Vietnam</option>
															<option value="Virgin Islands,  U.S.">Virgin Islands,  U.S.</option>
															<option value="Virgin Islands, British">Virgin Islands, British</option>
															<option value="Wake Island">Wake Island</option>
															<option value="Western Sahara">Western Sahara</option>
															<option value="Yemen">Yemen</option>
															<option value="Zambia">Zambia</option>
															<option value="Zimbabwe">Zimbabwe</option>
														</select>
													</div>
													<div class="form-container">
														<label>Your State:</label>
														<select>
															<option></option>
															<option value="Alabama">Alabama</option>
															<option value="Alaska">Alaska</option>
															<option value="Arizona">Arizona</option>
															<option value="Arkansas">Arkansas</option>
															<option value="California">California</option>
															<option value="Colorado">Colorado</option>
															<option value="Connecticut">Connecticut</option>
															<option value="Delaware">Delaware</option>
															<option value="District of Columbia">District of Columbia</option>
															<option value="Florida">Florida</option>
															<option value="Georgia">Georgia</option>
															<option value="Hawaii">Hawaii</option>
															<option value="Idaho">Idaho</option>
															<option value="Illinois">Illinois</option>
															<option value="Indiana">Indiana</option>
															<option value="Iowa">Iowa</option>
															<option value="Kansas">Kansas</option>
															<option value="Kentucky">Kentucky</option>
															<option value="Louisiana">Louisiana</option>
															<option value="Maine">Maine</option>
															<option value="Maryland">Maryland</option>
															<option value="Massachusetts">Massachusetts</option>
															<option value="Michigan">Michigan</option>
															<option value="Minnesota">Minnesota</option>
															<option value="Mississippi">Mississippi</option>
															<option value="Missouri">Missouri</option>
															<option value="Montana">Montana</option>
															<option value="Nebraska">Nebraska</option>
															<option value="Nevada">Nevada</option>
															<option value="New Hampshire">New Hampshire</option>
															<option value="New Jersey">New Jersey</option>
															<option value="New Mexico">New Mexico</option>
															<option value="New York">New York</option>
															<option value="North Carolina">North Carolina</option>
															<option value="North Dakota">North Dakota</option>
															<option value="Ohio">Ohio</option>
															<option value="Oklahoma">Oklahoma</option>
															<option value="Oregon">Oregon</option>
															<option value="Pennsylvania">Pennsylvania</option>
															<option value="Rhode Island">Rhode Island</option>
															<option value="South Carolina">South Carolina</option>
															<option value="South Dakota">South Dakota</option>
															<option value="Tennessee">Tennessee</option>
															<option value="Texas">Texas</option>
															<option value="Utah">Utah</option>
															<option value="Vermont">Vermont</option>
															<option value="Virginia">Virginia</option>
															<option value="Washington">Washington</option>
															<option value="West Virginia">West Virginia</option>
															<option value="Wisconsin">Wisconsin</option>
															<option value="Wyoming">Wyoming</option>
														</select>
													</div>
													<div class="form-container">
														<label>Your Email: <span>(optional - will not be published)</span></label>
														<input name="email" type="text" />

													</div>
													<div class="form-container">
														<label>Your Comments: <span>(maximum of 500 character)</span></label>
														<textarea name="feedback" cols="40" rows="5"></textarea>
*/}
													</div>
													<div class="button-container">
														<button class="submit-btn">SUBMIT</button>
													</div>

													<a class="policy toggle show-hide" href="">Read our feedback policy.</a>



													</div>
											</div>
											<div class="l-col">
												<div class="show-hide-content" style="display: block;">
													<h2>Project Feedback</h2>
													<p>None have been submitted and reviewed for this project.
Be the first!</p>
													<p>Read what others are saying about this project.</p>
													<div id="feedcomments">
														<div class="fbcomment">
															<p><b></b><br />
																<blockquote></blockquote>
															</p>
														</div>
													</div>
												</div>
												<div class="show-hide-content" style="display: none;">
													<h2>Feedback Policy</h2>
													<p>Policy for public posting of feedback submitted during
beta testing of EIA experimental web products:</p>
													<ul>
														<li> User feedback of beta products is moderated.
															EIA will review all feedback submissions
within one business day.</li>
														<li> EIA reserves the right to edit feedback for brevity
and grammar prior to posting.</li>
														<li> Feedback submissions that use profanity, offensive
															language, or fail to address the product
undergoing beta testing will not be posted.</li>
														<li> Personally identifiable information, such as
															full names or email addresses, will be redacted
from the published feedback.</li>
														<li> Constructive criticism, suggestions, and kudos
are welcome. </li>
													</ul>
													<p> Thanks for helping us to make EIA's products better!</p>
												</div>
											</div>

										</div>
									</div>
									
									<a class="toggle expand-collapse-content-above" href="">
										<span class="active-text">Hide</span>
										<span class="inactive-text">Show</span>
									</a>

									
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="_example _html">
					<h4>HTML Code Example</h4>
		
					{/*
<textarea class="_copy-textarea" rows="7"><div class="expand-collapse-content">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
						<a class="toggle expand-collapse-content-above" href="">
							<span class="active-text">Hide</span>
							<span class="inactive-text">Show</span>
						</a></textarea>
*/}
					
					<div class="_button-container">
						<button type="button" class="_copy">Copy to clipboard</button>
					</div>
				</div>
				*/}
			</li>






















			<li class="section-container">
				<h2 class="_h2">Show/Hide Toggle</h2>
				<div class="_example">
					<p class="_p">The bare minimum HTML is below:</p>
					<pre><code class="html">&lt;!-- toggle show-hide --&gt;
					&lt;a class="toggle show-hide" href=""&gt;Link&lt;/a&gt;
					&lt;div class="show-hide-content"&gt;
					&lt;!-- content --&gt;
					&lt;/div&gt;
</code></pre>
				</div>
				<p class="_p">The Show/Hide Toggle is not styled so you can apply any style you want. Additionally,
				the script can be activate by using any element that you can attach a click function
to (anchor, button, title bar).</p>
				<h3 class="_h3">Show/Hide Toggle Layer</h3>
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-full-width-col">
							<div class="l-col">
								{/*start style-guide code */}
								<div class="show-hide-toggle">

									<a class="toggle show-hide" href="">
										<span class="active-text">Hide</span>
										<span class="inactive-text">Show</span>
									</a>
									<div class="show-hide-content">
										<div class="primary-fixed">
											<span class="_module-bg">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.
</span>
										</div>
									</div>

								</div>
								{/*end style-guide code */}
							</div>
						</div>
					</div>
				</div>

				<div class="_example _html">
					<h4>HTML Code Example</h4>
					{/*Target */}
					{/*
<textarea class="_copy-textarea" rows="7"><a class="toggle show-hide" href="">
						<span class="active-text">Hide</span>
						<span class="inactive-text">Show</span>
					</a>
						<div class="show-hide-content">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div></textarea>
*/}
					{/*Trigger */}
					<div class="_button-container">
						<button type="button" class="_copy">Copy to clipboard</button>
					</div>
				</div>
			</li>
			<li class="section-container _policy-example">
				<h2 class="_h2">Show/Hide Toggle (two elements)</h2>
				<div class="_example">
					<p class="_p">The bare minimum HTML is below:</p>
					<pre><code class="html">&lt;!-- Show/Hide Toggle (two elements) --&gt;
					&lt;a class="toggle show-hide" href=""&gt;Link&lt;/a&gt;
					&lt;div class="show-hide-content"&gt;
					&lt;!-- content --&gt;
					&lt;/div&gt;
</code></pre>
				</div>
				<p class="_p">The Show/Hide Toggle is not styled so you can apply any style you want. Additionally,
				the script can be activate by using any element that you can attach a click function
to (anchor, button, title bar).</p>
				<h3 class="_h3">Show/Hide Toggle Layer</h3>
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-right-wide">
							<div class="l-col">
								<a class="policy toggle show-hide" href="">
									<span class="active-text">Hide our feedback policy.</span>
									<span class="inactive-text">Show our feedback policy.</span>
								</a>
							</div>
							<div class="l-col">
								<div class="show-hide-content" style="display: block;">
									<p>Layer 1</p>
								</div>
								<div class="show-hide-content" style="display: none;">
									<p>Layer 2</p>
								</div>
							</div>
						</div>
						{/*end style-guide code */}
					</div>
				</div>

				<div class="_example _html">
					<h4>HTML Code Example</h4>
					{/*Target */}
					{/*
<textarea class="_copy-textarea" rows="7"><a class="policy toggle show-hide" href="">
						<span class="active-text">Hide Layer</span>
						<span class="inactive-text">Show Layer</span>
					</a>
						<div class="show-hide-content" style="display: block;">Layer 1</div>
						<div class="show-hide-content" style="display: none;">Layer 2</div></textarea>
*/}
					{/*Trigger */}
					<div class="_button-container">
						<button type="button" class="_copy">Copy to clipboard</button>
					</div>
				</div>
			</li>
		</ul>);
	}
}

export default StatesToggle;