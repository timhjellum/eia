<?php include('modal_header.inc'); ?><div class="padd_map">
<img src="../images/PADD_map.png" />
<p><strong>PADD:</strong> Petroleum Administration for Defense Districts</p>
<p class="padd1"><strong>PAD District 1 (East Coast) is composed of the following three subdistricts:</strong></p>
<span>
<p class="padd1 a"><strong>Subdistrict 1A (New England):</strong> Connecticut, Maine, Massachusetts, New Hampshire, Rhode Island, Vermont.
</p>
<p class="padd1 b"><strong>Subdistrict 1B (Central Atlantic):</strong> Delaware, District of Columbia, Maryland, New Jersey, New York, Pennsylvania.
</p>
<p class="padd1 c"><strong>Subdistrict 1C (Lower Atlantic):</strong> Florida, Georgia, North Carolina, South Carolina, Virginia, West Virginia.
</p>
</span>
<p class="padd2"><strong>PAD District 2 (Midwest):</strong> Illinois, Indiana, Iowa, Kansas, Kentucky, Michigan, Minnesota, Missouri, Nebraska, North Dakota, South Dakota, Ohio, Oklahoma, Tennessee, Wisconsin.
</p>
<p class="padd3"><strong>PAD District 3 (Gulf Coast):</strong> Alabama, Arkansas, Louisiana, Mississippi, New Mexico, Texas.
</p>
<p class="padd4"><strong>PAD District 4 (Rocky Mountain):</strong>Colorado, Idaho, Montana, Utah, Wyoming.
</p>
<p class="padd5"><strong>PAD District 5 (West Coast):</strong> Alaska, Arizona, California, Hawaii, Nevada, Oregon, Washington.
</p>
</div>
<script type="text/javascript">
$(document).ready(function() {
switch (window.location.hash) {
case "#1":
$(".padd1").css("background-color", "#76d5ff");
break;
case "#1a":
$(".padd1.a").css("background-color", "#76d5ff");
break;
case "#1b":
$(".padd1.b").css("background-color", "#76d5ff");
break;
case "#1c":
$(".padd1.c").css("background-color", "#76d5ff");
break;
case "#2":
$(".padd2").css("background-color", "#76d5ff");
break;
case "#3":
$(".padd3").css("background-color", "#76d5ff");
break;
case "#4":
$(".padd4").css("background-color", "#76d5ff");
break;
case "#5":
$(".padd5").css("background-color", "#76d5ff");
break;
}
});
