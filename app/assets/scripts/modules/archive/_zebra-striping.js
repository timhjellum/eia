  // Zebra striping 
/*  $("table.zebra").each(function(){
	$("tbody tr:even", this).not(".odd").addClass("zebra_odd");
  });*/
  // Side List / 2 column 
  $("span.side_list, span.side_list2").each(function(){
	$("li:odd", this).not(".odd").addClass("textright");
  });