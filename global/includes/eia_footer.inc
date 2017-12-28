<?phpif (
isset($_GET['n']) && $_GET['n'] && (
strpos($_SERVER['HTTP_HOST'],'wwwdev') !== false ||
strpos($_SERVER['HTTP_HOST'],'wwwtest') !== false
)
) {
include('eia_footer_new_for_css.inc');
}
else {
isset($interests) || $interests = isset($_GET['ints']) ? $_GET['ints'] : '';
isset($sect) || $sect = '';
?>
<div id="footer">
<a name="btm">
</a>
<div class="clear">
<div id="rs_home">
</div>
</div>
<div id="addbar">
<a href="/">
<h2 class="right">EIA - 1000 Independence Avenue, SW, Washington, DC 20585</h2>
</a>
<h3>
<a href="/about/">About EIA</a>
</h3>
<h3>
<a href="/beta/api/">Open Data</a>
</h3>
<h3>
<a href="/pressroom/">Press Room</a>
</h3>
<h3>
<a href="/about/careers/">Careers</a>
</h3>
<h3>
<a href="/about/contact/">Contact Us</a>
</h3>
</div>
<div id="quicklinks">
<li>
<strong>Sources & Uses</strong>
<br/>
<a href="/petroleum/">Petroleum</a>
<br/>
<a href="/coal/">Coal</a>
<br/>
<a href="/naturalgas/">Natural Gas</a>
<br/>
<a href="/renewable/">Renewable</a>
<br/>
<a href="/nuclear/">Nuclear</a>
<br/>
<a href="/electricity/">Electricity</a>
<br/>
<a href="/consumption/">Consumption</a>
<br/>
<a href="/totalenergy/">Total Energy</a>
</p>
<li>
<strong>Topics</strong>
<br/>
<a href="/analysis/">Analysis & Projections</a>
<br/>
<a href="/environment">Environment</a>
<br/>
<a href="/finance/">Markets & Finance</a>
<br/>
<a href="/todayinenergy/">Today in Energy</a>
<br>
<br>
<strong>Geography</strong>
<br/>
<a href="/state/">States</a>
<br/>
<a href="/countries/">Countries</a>
<br/>
<a href="/maps/">Maps</a>
<br/>
<li>
<strong>Tools</strong>
<br/>
<a href="/tools/a-z/">A-Z Index</a>
<br />
<a href="/reports/">All Reports<br />& Publications</a>
<br />
<a href="/tools/">Data Tools, Apps,<br />and Maps</a>
<br />
<a href="/survey/">EIA Survey Forms</a>
<br />
<a href="/beta/">EIA Beta</a>
</p>
<li>
<strong>Policies</strong>
<br/>
<a href="/about/privacy_security_policy.cfm">Privacy/Security</a>
<br/>
<a href="/about/copyrights_reuse.cfm">Copyright & Reuse</a>
<br/>
<a href="/about/accessability.cfm">Accessibility</a>
</p>
<li>
<strong>Related Sites</strong>
<br/>
<a href="https://www.energy.gov/">U.S. Department of Energy</a>
<br/>
<a href="https://www.usa.gov/">USA.gov</a>
<br/>
<a href="https://fedstats.sites.usa.gov/">FedStats</a>
</p>
<li>
<strong>Stay Connected</strong>
<br/>
<a href="https://facebook.com/eiagov/" target="_blank" class="ico_facebook ft_icon_pad">Facebook<span class="external">&nbsp;</span>
</a>
<br/>
<a href="https://twitter.com/eiagov/"  target="_blank" class="ico_twitter ft_icon_pad">Twitter<span class="external">&nbsp;</span>
</a>
<br/>
<a href="https://youtube.com/eiagov/"  target="_blank" class="ico_youtube ft_icon_pad">YouTube<span class="external">&nbsp;</span>
</a>
<br/>
<a href="https://www.flickr.com/photos/eiagov/" target="_blank" class="ico_flickr ft_icon_pad">Flickr<span class="external">&nbsp;</span>
</a>
<br/>
<a href="https://www.linkedin.com/company/u-s-energy-information-administration" target="_blank" class="ico_linkedin ft_icon_pad">LinkedIn<span class="external">&nbsp;</span>
</a>
<br/>
<a href="/tools/emailupdates/" class="ico_email ft_icon_pad">Email Updates</a>
<br/>
<a href="/tools/rssfeeds/" class="ico_rss ft_icon_pad">RSS Feeds</a>
</p>
</div>
</div>
</div>
</div>
<script type="text/javascript">
jQuery(document).ready(function(){
$(".page_tabs").tabs();
$(".page_tabs").localScroll({
target:".page_tabs",
duration:0,
hash:true
});
});
</script>