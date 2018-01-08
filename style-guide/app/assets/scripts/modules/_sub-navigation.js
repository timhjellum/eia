



//console.log("ready");
/*
$(document).ready(function() {
	$(".dropdown").mouseover(function() {
		//alert("over");
		$(this).addClass("on");
		$(this).next("div").addClass("show-dropdown").fadeIn(300);
	  });
	  $(".dropdown").mouseout(function() {
		//alert("over");
		$(this).removeClass("on");
		$(this).next("div").removeClass("show-dropdown").fadeOut(300);
	  });
});
*/
// EIA Global JS Include
/*
$.fn.dd = function( options ){
	var settings = {
		'dropDownClass'	: 'dat_block',
		//'activeImg'			:	'/global/images/menu_fix/active.png',
		'addDownArrow'	: true,
		'activeClass'		:	'on'
	};
	
	if( options )
		$.extend( settings, options );
	
	return this.each(function(){
		var $this = $(this),
				dropdown = $this.next('div')
				.addClass( settings.dropDownClass );
		
		if( settings.addDownArrow )
			$this.children('a').append('<span class="arrow_d"></span>');

		var $left, 
				$off = $this.offset().left,
				$borderW = parseInt( $this.css('border-right-width') ),
				$padLeft = parseInt( $this.children('a').css('padding-left') ),
				$top = $this.offset().top + $this.height();
		
		$left = $off + $borderW - $padLeft;
		
		if( settings.align == 'center' ) {
			$left -= dropdown.width()/2;
		}

		dropdown.css({
			//position	: 'absolute', in css stylesheet
			left			:	$left,
			top				:	$top//,
			//display		:	'none'
		});
//		.scale9Grid({ top:10, bottom:10, left:15, right:15 });

		$(window).resize(function(){
			var $borderW = parseInt($this.css('border-right-width')),
				$padLeft = parseInt($this.children('a').css('padding-left'));
			if( settings.align == 'center' ) {
				$left = $this.offset().left + $borderW - $padLeft - (dropdown.width()/2);
			} else {
				$left = $this.offset().left + $borderW - $padLeft;
			}
			
			dropdown.css({ left	:	$left });
		});

		dropdown.add(this).hover(function(){
			$this.addClass( settings.activeClass);
			
			if( settings.activeImg ){
				$this.css({'background-image': 'url('+settings.activeImg+')'});
			}

			dropdown.show();
		}, function(){
      $this.removeClass( settings.activeClass);
			dropdown.hide();
		});
    
	});	
};
*/