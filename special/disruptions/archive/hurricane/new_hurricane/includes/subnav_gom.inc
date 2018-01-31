<?php /* Renewable Sub Nav */ ?>
    <div class="title bg_default"><?php /* Page/Section Title */ ?>
      <h1>Gulf of Mexico Fact Sheet</h1>
    </div><?php /*/ Page/Section Title */ ?>
    
    <div class="subnav"><?php /* Page/Sub Nav */ ?>
      <ul>
        <li <?php if ( $locale == 'overview') {?>class="active"<?php  } // end if ?>><a href="/special/new_gom/">Overview</a></li>
        <li <?php if ( $locale == 'data') {?>class="active"<?php  } // end if ?>><a href="/special/new_gom/data.cfm">Energy Data</a></li>
        <li <?php if ( $locale == 'map') {?>class="active"<?php  } // end if ?>><a href="/special/new_gom/map.cfm">Map</a></li>
     	<li <?php if ( $locale == 'hurricane') {?>class="active"<?php  } // end if ?>><a href="/special/new_gom/hurricane_outlook.cfm">Hurricane Season Outlook</a></li>
        <li <?php if ( $locale == 'tropical') {?>class="active"<?php  } // end if ?>><a href="/special/new_gom/tropical_outlook.cfm">Current Tropical Outlook</a></li>
      </ul>
    </div><?php /*/ Page/Sub Nav */ ?>