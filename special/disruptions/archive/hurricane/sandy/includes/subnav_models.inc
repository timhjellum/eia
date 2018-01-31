<?php /* Renewable Sub Nav */ ?>
    <div class="title bg_models"><?php /* Page/Section Title */ ?>
      <h1>Data Tools & Models</h1>
    </div><?php /*/ Page/Section Title */ ?>
    
    <div class="subnav"><?php /* Page/Sub Nav */ ?>
    <span class="right"><a href="<?php echo "$glossary_path"?>">Glossary &rsaquo;</a> <a href="<?php echo "$faqs_path"?>">FAQS &rsaquo;</a></span>
       <ul>
        <li <?php if ( $locale == 'overview') {?>class="active"<?php  } // end if ?>><a href="/tools/models/">Overview</a></li>
        <li <?php if ( $locale == 'datatools') {?>class="active"<?php  } // end if ?>><a href="/tools/models/datatools.cfm">Data Tools</a></li>
        <li <?php if ( $locale == 'timeseries') {?>class="active"<?php  } // end if ?>><a href="/tools/models/timeseries.cfm">Time Series</a></li>
     	<li <?php if ( $locale == 'models') {?>class="active"<?php  } // end if ?>><a href="/tools/models/models.cfm">Models &amp Documentation</a></li>
      </ul>
    </div><?php /*/ Page/Sub Nav */ ?>