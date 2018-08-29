$(function(){ // This is shorthand for $(document).ready(function() {
	/*
	*SD 2012-06-19 Tab and menu hover events are separated.
	* A window timeout is set on each in an out event amounting to a total of 4 events for each tab
	*e.g.timeout_sources_tab_on    sets a time delay on showing the menu when moving into   hovering on tab
	*    timeout_sources_tab_off   sets a time delay on hiding  the menu when moving out of hovering on tab
	*    timeout_sources_menu_on   sets a time delay on showing the menu when moving into   hovering on menu
	*    timeout_sources_menu_off  sets a time delay on hiding  the menu when moving out of hovering on menu
	*  Event destroying should be put on a loop by placing the timeout_X_X_X events as an array
	*/
  //Timeout control
	var numOfmillisecs_tab_on = 180;  //time delay to display menu after entering hover over tab
	var numOfmillisecs_tab_off = 180; //time delay to hide    menu after leaveing hover over tab
	var numOfmillisecs_menu_on = 0;   //time delay to display menu after entering hover over menu (currently set to 0)
	var numOfmillisecs_menu_off = 50;  //time delay to hide    menu after leaveing hover over menu (should be small but not too small so that if you enter the tab from the menu it does not flash)
  
	var subObj = {
					  tab:{ 
							  on:'sources_tab_on',
							  off:'sources_tab_off'
						  },
					  menu:{ 
							  on:'sources_tab_on',
							  off:'sources_tab_off'
						  }
				  };
	var timeout = {
					  sources : {
								  tab:{ 
										  on:'sources_tab_on',
										  off:'sources_tab_off'
									  },
								  menu:{ 
										  on:'sources_tab_on',
										  off:'sources_tab_off'
									  }
							  },
					  topics : {
								  tab:{ 
										  on:'sources_tab_on',
										  off:'sources_tab_off'
									  },
								  menu:{ 
										  on:'sources_tab_on',
										  off:'sources_tab_off'
									  }
							  },
					  tools : {
								  tab:{ 
										  on:'sources_tab_on',
										  off:'sources_tab_off'
									  },
								  menu:{ 
										  on:'sources_tab_on',
										  off:'sources_tab_off'
									  }
							  },
					  learn : {
								  tab:{ 
										  on:'sources_tab_on',
										  off:'sources_tab_off'
									  },
								  menu:{ 
										  on:'sources_tab_on',
										  off:'sources_tab_off'
									  }
							  },
					  news : {
								  tab:{ 
										  on:'sources_tab_on',
										  off:'sources_tab_off'
									  },
								  menu:{ 
										  on:'sources_tab_on',
										  off:'sources_tab_off'
									  }
							  },
					  az : {
								  tab:{ 
										  on:'sources_tab_on',
										  off:'sources_tab_off'
									  },
								  menu:{ 
										  on:'sources_tab_on',
										  off:'sources_tab_off'
									  }
							  },
					  geo : {
								  tab:{ 
										  on:'sources_tab_on',
										  off:'sources_tab_off'
									  },
								  menu:{ 
										  on:'sources_tab_on',
										  off:'sources_tab_off'
									  }
							  }
				  };
	  function clearTimeoutAllOthers(currentSelection)
	  {
		  $.each( timeout, function(k, v){
			  if(v != currentSelection)
			  {
				  $.each( v, function(k1, v1){
					  $.each( v1, function(k2, v2){
						  window.clearTimeout(v2);
					  });
				  });
			  }
		  });
	  }
  // Sources Nav START *************
	var sourcesOn  = function(){$('.global-es').attr('class', 'global-es_on');$('.global_es_menu').show();};
	var sourcesOff = function(){$('.global-es_on').attr('class', 'global-es');$('.global_es_menu').hide()};
	//Hover event for sources tab
	$(".global-es").hover(function(){
	  //Kill sources tab and menu off events
	  window.clearTimeout(timeout.sources.tab.off);
	  window.clearTimeout(timeout.sources.menu.off);
	  
	  timeout.sources.tab.on = window.setTimeout(sourcesOn, numOfmillisecs_tab_on );
	}, function() {
	  window.clearTimeout(timeout.sources.tab.on); //To avoid flashing if you step in and out of the tab
	  timeout.sources.tab.off = window.setTimeout(sourcesOff, numOfmillisecs_tab_off );
	});
	//Hover event for sources menu
	$(".global_es_menu").hover(function(){
	  //Kill all other events
	  clearTimeoutAllOthers('sources');
	  //Kill sources tab off event
	  window.clearTimeout(timeout.sources.tab.off);
	  timeout.sources.menu.on = window.setTimeout(sourcesOn, numOfmillisecs_menu_on );
	}, function() {
	  timeout.sources.menu.off = window.setTimeout(sourcesOff, numOfmillisecs_menu_off );
	});
  // Sources Nav END *************
  
  // Topics Nav START *************
	var topicsOn  = function(){$('.global-topics').attr('class', 'global-topics_on');$('.global_topics_menu').show();};
	var topicsOff = function(){$('.global-topics_on').attr('class', 'global-topics');$('.global_topics_menu').hide();};
	//Hover event for Topics tab
	$(".global-topics").hover(function(){
	  //Kill topics tab and menu off events
	  window.clearTimeout(timeout.topics.tab.off);
	  window.clearTimeout(timeout.topics.menu.off);
	  timeout.topics.tab.on	= window.setTimeout(topicsOn,numOfmillisecs_tab_on);
	}, function() {
	  window.clearTimeout(timeout.topics.tab.on); //To avoid flashing if you step in and out of the tab
	  timeout.topics.tab.off = window.setTimeout(topicsOff,numOfmillisecs_tab_off);
	});
	//Hover event for Topics menu
	$(".global_topics_menu").hover(function(){
	  //Kill all other events
	  clearTimeoutAllOthers('topics');
	  //Kill topics tab off event
	  window.clearTimeout(timeout.topics.tab.off);
	  timeout_topics_menu_on	= window.setTimeout(topicsOn,numOfmillisecs_menu_on);
	}, function() {
	  timeout_topics_menu_off = window.setTimeout(topicsOff,numOfmillisecs_menu_off);
	});
  // Topics Nav END *************
  
  
  // Geo Nav START *************
	var geoOn  = function(){$('.global-geo').attr('class', 'global-geo_on');$('.global_geo_menu').show();};
	var geoOff = function(){$('.global-geo_on').attr('class', 'global-geo');$('.global_geo_menu').hide();};
	//Hover event for Geo tab
	$(".global-geo").hover(function(){
	  //Kill geo tab and menu off events
	  window.clearTimeout(timeout.geo.tab.off);
	  window.clearTimeout(timeout.geo.menu.off);
	  timeout.geo.tab.on	= window.setTimeout(geoOn,numOfmillisecs_tab_on);
	}, function() {
	  window.clearTimeout(timeout.geo.tab.on); //To avoid flashing if you step in and out of the tab
	  timeout.geo.tab.off = window.setTimeout(geoOff,numOfmillisecs_tab_off);
	});
	//Hover event for Geo menu
	$(".global_geo_menu").hover(function(){
	  //Kill all other events
	  clearTimeoutAllOthers('geo');
	  //Kill geo tab off event
	  window.clearTimeout(timeout.geo.tab.off);
	  timeout_geo_menu_on	= window.setTimeout(geoOn,numOfmillisecs_menu_on);
	}, function() {
	  timeout_geo_menu_off = window.setTimeout(geoOff,numOfmillisecs_menu_off);
	});
  // Geo Nav END *************
  
  // Tools Nav START *************
	var toolsOn  = function(){$('.global-tools').attr('class', 'global-tools_on');$('.global_tools_menu').show();};
	var toolsOff = function(){$('.global-tools_on').attr('class', 'global-tools');$('.global_tools_menu').hide();};
	//Hover event for Tools tab
	$(".global-tools").hover(function(){
	  //Kill tools tab and menu off events
	  window.clearTimeout(timeout.tools.tab.off);
	  window.clearTimeout(timeout.tools.menu.off);
	  timeout.tools.tab.on	= window.setTimeout(toolsOn,numOfmillisecs_tab_on);
	}, function() {
	  window.clearTimeout(timeout.tools.tab.on); //To avoid flashing if you step in and out of the tab
	  timeout.tools.tab.off = window.setTimeout(toolsOff,numOfmillisecs_tab_off);
	});
	//Hover event for Tools menu
	$(".global_tools_menu").hover(function(){
	  //Kill all other events
	  clearTimeoutAllOthers('tools');
	  //Kill tools tab off event
	  window.clearTimeout(timeout.tools.tab.off);
	  timeout_tools_menu_on	= window.setTimeout(toolsOn,numOfmillisecs_menu_on);
	}, function() {
	  timeout_tools_menu_off = window.setTimeout(toolsOff,numOfmillisecs_menu_off);
	});
  // Tools Nav END *************
  
  // Learn About Energy Nav START *************
	var learnOn  = function(){$('.global-learn').attr('class', 'global-learn_on');$('.global_learn_menu').show();};
	var learnOff = function(){$('.global-learn_on').attr('class', 'global-learn');$('.global_learn_menu').hide();};
	//Hover event for Learn About Energy tab
	$(".global-learn").hover(function(){
	  //Kill learn tab and menu off events
	  window.clearTimeout(timeout.learn.tab.off);
	  window.clearTimeout(timeout.learn.menu.off);
	  timeout.learn.tab.on	= window.setTimeout(learnOn,numOfmillisecs_tab_on);
	}, function() {
	  window.clearTimeout(timeout.learn.tab.on); //To avoid flashing if you step in and out of the tab
	  timeout.learn.tab.off = window.setTimeout(learnOff,numOfmillisecs_tab_off);
	});
	//Hover event for Learn About Energy menu
	$(".global_learn_menu").hover(function(){
	  //Kill all other events
	  clearTimeoutAllOthers('learn');
	  //Kill learn tab off event
	  window.clearTimeout(timeout.learn.tab.off);
	  timeout_learn_menu_on	= window.setTimeout(learnOn,numOfmillisecs_menu_on);
	}, function() {
	  timeout_learn_menu_off = window.setTimeout(learnOff,numOfmillisecs_menu_off);
	});
  // Learn About Energy Nav END *************
  
  // News Nav START *************
	var newsOn  = function(){$('.global-news').attr('class', 'global-news_on');$('.global_news_menu').show();};
	var newsOff = function(){$('.global-news_on').attr('class', 'global-news');$('.global_news_menu').hide();};
	//Hover event for News tab
	$(".global-news").hover(function(){
	  //Kill news tab and menu off events
	  window.clearTimeout(timeout.news.tab.off);
	  window.clearTimeout(timeout.news.menu.off);
	  timeout.news.tab.on	= window.setTimeout(newsOn,numOfmillisecs_tab_on);
	}, function() {
	  window.clearTimeout(timeout.news.tab.on); //To avoid flashing if you step in and out of the tab
	  timeout.news.tab.off = window.setTimeout(newsOff,numOfmillisecs_tab_off);
	});
	//Hover event for News menu
	$(".global_news_menu").hover(function(){
	  //Kill all other events
	  clearTimeoutAllOthers('news');
	  //Kill news tab off event
	  window.clearTimeout(timeout.news.tab.off);
	  timeout_news_menu_on	= window.setTimeout(newsOn,numOfmillisecs_menu_on);
	}, function() {
	  timeout_news_menu_off = window.setTimeout(newsOff,numOfmillisecs_menu_off);
	});
  // News Nav END *************
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // A-Z Nav START *************
	var azOn  = function(){$('.global-a-z').attr('class', 'global-a-z_on');$('.global_a-z_menu').show();};
	var azOff = function(){$('.global-a-z_on').attr('class', 'global-a-z');$('.global_a-z_menu').hide();};
	//Hover event for A-Z tab
	$(".global-a-z").hover(function(){
	  //Kill a-z tab and menu off events
	  window.clearTimeout(timeout.az.tab.off);
	  window.clearTimeout(timeout.az.menu.off);
	  timeout.az.tab.on	= window.setTimeout(azOn,numOfmillisecs_tab_on);
	}, function() {
	  window.clearTimeout(timeout.az.tab.on); //To avoid flashing if you step in and out of the tab
	  timeout.az.tab.off = window.setTimeout(azOff,numOfmillisecs_tab_off);
	});
	//Hover event for A-Z menu
	$(".global_a-z_menu").hover(function(){
	  //Kill all other events
	  clearTimeoutAllOthers('az');
	  //Kill az tab off event
	  window.clearTimeout(timeout.az.tab.off);
	  timeout_az_menu_on	= window.setTimeout(azOn,numOfmillisecs_menu_on);
	}, function() {
	  timeout_az_menu_off = window.setTimeout(azOff,numOfmillisecs_menu_off);
	});
  // A-Z Nav END *************
  
  // Geo Nav 
	/*
	$(".global-geo, .global_geo_menu").hover(function(){
	  $('.global-geo').attr('class', 'global-geo_on');$('.global_geo_menu').show();
	}, function() {
	  $('.global-geo_on').attr('class', 'global-geo');$('.global_geo_menu').hide();
	});
  // Tools Nav 
	$(".global-tools, .global_tools_menu").hover(function(){
	  $('.global-tools').attr('class', 'global-tools_on');$('.global_tools_menu').show();
	}, function() {
	  $('.global-tools_on').attr('class', 'global-tools');$('.global_tools_menu').hide();
	});
  // Learn About Energy Nav 
	$(".global-learn, .global_learn_menu").hover(function(){
	  $('.global-learn').attr('class', 'global-learn_on');$('.global_learn_menu').show();
	}, function() {
	  $('.global-learn_on').attr('class', 'global-learn');$('.global_learn_menu').hide();
	});
  // News Nav 
	$(".global-news, .global_news_menu").hover(function(){
	  $('.global-news').attr('class', 'global-news_on');$('.global_news_menu').show();
	}, function() {
	  $('.global-news_on').attr('class', 'global-news');$('.global_news_menu').hide();
	});
  // A-Z Index 
	$(".global-a-z, .global_a-z_menu").hover(function(){
	  $('.global-a-z').attr('class', 'global-a-z_on');$('.global_a-z_menu').show();
	}, function() {
	  $('.global-a-z_on').attr('class', 'global-a-z');$('.global_a-z_menu').hide();
	});
	*/
  