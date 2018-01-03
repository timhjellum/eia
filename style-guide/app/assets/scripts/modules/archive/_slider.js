//class Slider {  
    $(document).ready(function() {
        $('.slick-slider').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 600, /* This should match the transition set for .slick-prev:before, .slick-next:before in slick_CUSTOMIZED.css */
            slidesToShow: 5,
            touchMove: true,
            swipe: true,
            slidesToScroll: 5,
            slide: 'div',
            easing: 'swing',
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                arrows: false,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                arrows: false,
                dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true
                }
            }]

        });
    });
//}
//export default Slider;