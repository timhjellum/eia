<div class="l-row header report-details">
        <div class="l-split-wide">
        
                <a href="/petroleum/reports.cfm">&lsaquo; See All Petrolem Reports</a>
                <h2><?php echo "$headtitle"?></h2>

                <div class="release-dates">
                        <div class="date-container">
                                <div class="label">Release Date:</div>
                                <div class="date"><?php echo "$release"?></div>
                        </div>
                        <div class="date-container">
                                <div class="label">Next Release Date:</div>
                                <div class="date"><?php echo "$next"?></div>
                        </div>
                </div>
        </div>
        <div class="l-split-narrow gradient">
                <span class="form-container-outer">
                        <h4>Previous Issues</h4>
                        <span class="form-container-inner">
                                <form name="form" id="form">
                                        <label>Year:</label>
                                        <select name="jumpMenu" id="jumpMenu">
                                                <option value="/petroleum/ethanolcapacity/archive/2017/index.php" selected="selected">2017</option>
                                                <option value="/petroleum/ethanolcapacity/archive/2016/index.php">2016</option>
                                                <option value="/petroleum/ethanolcapacity/archive/2015/index.php">2015</option>
                                                <option value="/petroleum/ethanolcapacity/archive/2014/index.php">2014</option>
                                                <option value="/petroleum/ethanolcapacity/archive/2013/index.php">2013</option>
                                                <option value="/petroleum/ethanolcapacity/archive/2012/index.php">2012</option>
                                                <option value="/petroleum/ethanolcapacity/archive/2011/index.php">2011</option>
                                        </select>
                                        <input type="button" name="go_button" class="arrow_go" id="go_button" value="Go" />
                                </form>
                        </span>
                </span>
        </div>
</div>

