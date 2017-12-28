<link rel="stylesheet" type="text/css" href="/global/scripts/jquery/slick/slick_CUSTOMIZED.css"/><script type="text/javascript" src="/global/scripts/jquery/slick/slick.js">
</script>
<script type="text/javascript">
$(document).ready(function(){
$('.slick-slider').slick({
dots: false,
infinite: false,
speed: 600,
slidesToShow: 5,
touchMove: true,
swipe: true,
slidesToScroll: 5,
slide: 'div',
easing: 'swing'
});
$('.one-contentarea p a').contents().filter(function(){
return this.textContent === 'Issues & Trends';
}).replaceWith('Natural Gas');
});