<div class="l-row header report-details">
        <div class="l-split-wide">
        
                <a href="/petroleum/reports.php">&lsaquo; See All Petroleum & Other Liquids Reports</a>
                <h2><?php echo "$headtitle"?></h2>

                <div class="release-dates">
                        <div class="label-series"><?php echo "$data_series"?></div>
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
                <span class="form-wrapper-outer">
                        <h4>Previous Issues</h4>
                        <span class="form-wrapper-inner">
                                <form name="form" id="form">
                                        <label>Month:</label>
                                        <select name="jumpMenu" id="jumpMenu">
<!--option value="/petroleum/supply/monthly/archive/2017/2017_08/psm_2017_08.php" selected="selected">August 2017</option-->
                                                <option value="/petroleum/supply/monthly/archive/2017/2017_07/psm_2017_07.php" selected="selected">July 2017</option>
                                                <option value="/petroleum/supply/monthly/archive/2017/2017_06/psm_2017_06.php">June 2017</option>
                                                <option value="/petroleum/supply/monthly/archive/2017/2017_05/psm_2017_05.php">May 2017</option>
                                                <option value="/petroleum/supply/monthly/archive/2017/2017_04/psm_2017_04.php">April 2017</option>
                                                <option value="/petroleum/supply/monthly/archive/2017/2017_03/psm_2017_03.php">March 2017</option>
                                                <option value="/petroleum/supply/monthly/archive/2017/2017_02/psm_2017_02.php">February 2017</option>
                                                <option value="/petroleum/supply/monthly/archive/2017/2017_01/psm_2017_01.php">January 2017</option>
                                                <option value="/petroleum/supply/monthly/archive/">prior issues</option>
                                        </select>
                                        <input type="button" name="go_button" class="arrow_go" id="go_button" value="Go" />
                                </form>
                        </span>
                </span>
        </div>
</div>

