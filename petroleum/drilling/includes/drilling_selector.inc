<div class="l-row header report-details">
        <div class="l-split-wide">
        
                <a href="/petroleum/reports.cfm">&lsaquo; See All Petroleum Reports</a>
<?php
if(strstr( $_SERVER['PHP_SELF'], 'archive'))
print "<a href=\"/petroleum/drilling/\">&lsaquo; See Current Issue</a>";
?>
                <h2><?php echo "$headtitle"?></h2>

                <div class="release-dates">
                        <div class="date-container">
                                <div class="label">Release Date:</div>
                                <div class="date"><?php echo "$release"?></div>
                        </div>
                        <div class="date-container">		<div class="label">Next Release:</div>
                                <div class="date"><?php /* echo "$next" */?></div>
                        </div>
                        <div class="report-download-container"><!-- /report-download-container -->
                                        <a href="pdf/dpr-full.pdf">full report</a><i class="ico pdf">PDF</i></div>
</div>
</div><div class="l-split-narrow gradient">
                <span class="form-wrapper-outer">
                        <h4>Previous Issues</h4>
                        <span class="form-wrapper-inner">
                                <form name="form" id="form">
<label style="color:#000">month:&nbsp;</label>
<select name="jumpMenu" size="1" id="jumpMenu" style="width:120px">\
                                                <option value="/petroleum/drilling/archive/2017/08/" selected="selected">August 2017</option>
                                                <option value="/petroleum/drilling/archive/2017/07/">July 2017</option>
                                                <option value="/petroleum/drilling/archive/2017/06/">June 2017</option>
                                                <option value="/petroleum/drilling/archive/2017/05/">May 2017</option>
                                                <option value="/petroleum/drilling/archive/2017/04/">April 2017</option>
                                                <option value="/petroleum/drilling/archive/2017/03/">March 2017</option>
                                                <option value="/petroleum/drilling/archive/2017/02/">February 2017</option>
                                                <option value="/petroleum/drilling/archive/2017/01/">January 2017</option>
                                                <option value="/petroleum/drilling/archive/2016/12/">December 2016</option>
                                                <option value="/petroleum/drilling/archive/2016/11/">November 2016</option>
                                                <option value="/petroleum/drilling/archive/2016/10/">October 2016</option>
                                                <option value="/petroleum/drilling/archive/2016/09/">September 2016</option>
                                                <option value="/petroleum/drilling/archive/2016/08/">August 2016</option>
                                                <option value="/petroleum/drilling/archive/2016/07/">July 2016</option>
                                                <option value="/petroleum/drilling/archive/2016/06/">June 2016</option>
                                                <option value="/petroleum/drilling/archive/2016/05/">May 2016</option>
                                                <option value="/petroleum/drilling/archive/2016/04/">April 2016</option>
                                                <option value="/petroleum/drilling/archive/2016/03/">March 2016</option>
                                                <option value="/petroleum/drilling/archive/2016/02/">February 2016</option>
                                                <option value="/petroleum/drilling/archive/2016/01/">January 2016</option>
                                                <option value="/petroleum/drilling/archive/2015/12/">December 2015</option>
                                                <option value="/petroleum/drilling/archive/2015/11/">November 2015</option>
                                                <option value="/petroleum/drilling/archive/2015/10/">October 2015</option>
                                                <option value="/petroleum/drilling/archive/2015/09/">September 2015</option>
                                                <option value="/petroleum/drilling/archive/2015/08/">August 2015</option>
                                                <option value="/petroleum/drilling/archive/2015/07/">July 2015</option>
                                                <option value="/petroleum/drilling/archive/2015/06/">June 2015</option>
                                                <option value="/petroleum/drilling/archive/2015/05/">May 2015</option>
                                                <option value="/petroleum/drilling/archive/2015/04/">April 2015</option>
                                                <option value="/petroleum/drilling/archive/2015/03/">March 2015</option>
                                                <option value="/petroleum/drilling/archive/2015/02/">February 2015</option>
                                                <option value="/petroleum/drilling/archive/2015/01/">January 2015</option>
                                                <option value="/petroleum/drilling/archive/2014/12/">December 2014</option>
                                                <option value="/petroleum/drilling/archive/2014/11/">November 2014</option>
                                                <option value="/petroleum/drilling/archive/2014/10/">October 2014</option>
                                                <option value="/petroleum/drilling/archive/2014/09/">September 2014</option>
                                                <option value="/petroleum/drilling/archive/2014/08/">August 2014</option>
                                                <option value="/petroleum/drilling/archive/2014/07/">July 2014</option>
                                                <option value="/petroleum/drilling/archive/2014/06/">June 2014</option>
                                                <option value="/petroleum/drilling/archive/2014/05/">May 2014</option>
                                                <option value="/petroleum/drilling/archive/2014/04/">April 2014</option>
                                                <option value="/petroleum/drilling/archive/2014/03/">March 2014</option>
                                                <option value="/petroleum/drilling/archive/2014/02/">February 2014</option>
                                                <option value="/petroleum/drilling/archive/2014/01/">January 2014</option>
                                                <option value="/petroleum/drilling/archive/2013/12/">December 2013</option>
                                                <option value="/petroleum/drilling/archive/2013/11/">November 2013</option>
                                                <option value="/petroleum/drilling/archive/2013/10/">October 2013</option>
                                        </select>
                                        <input type="button" name="go_button" class="arrow_go" id="go_button" value="Go" />
                                </form>
                        </span>
                </span>
        </div>
</div>

