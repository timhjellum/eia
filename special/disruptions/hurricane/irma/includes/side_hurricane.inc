<style>
  	.green_top{
		border-top:none;
	}
  </style>

<span class="grey_side blue_top">
 <?php /*/ Today in Energy Widget Top3 */ ?>
  <?php
  require_once 'global/includes/utils/utils.inc';
  require_once 'global/includes/utils/Neic.inc';
  $neic      = new NEIC();
  ?>
<?php
//hsh_sql:
//associated with query name tie_lookup
$bindVariables = array();
$neic->sql = " Select *
    from neic.today_in_energy
    Where active = :active
    AND tags like :tags1 OR tags like :tags2 OR tags like :tags3 OR tags like :tags4 OR tags like :tags5
    ORDER BY ID DESC ";
$bindVariables[":active"] = "yes";
$bindVariables[":tags1"] = '%crude oil%';
$bindVariables[":tags2"] = '%petroleum%';
$bindVariables[":tags3"] = '%coal%';
$bindVariables[":tags4"] = '%production%';
$bindVariables[":tags5"] = '%natural gas%';

//print $neic->sql;
//print_r($bindVariables);
$tie_lookup = $neic->get($bindVariables);
?>
<?php /*--WHERE ROWNUM <= 1*/ ?>

<?php if (!empty($tie_lookup)) {?>
<?php $tietopic = 'weather'; ?>

<div class="green_top tie_container">
 <h4><a href="/todayinenergy/">Today in Energy<br><span>Energy Analysis Every Weekday</span></a></h4>
  <?php include ('todayinenergy/outreach/file_scrub_tie_side_sm_top3.php') ; ?>

</div>

<?php  } // end if ?>
</span>