class SelectArrow {
    constructor() {

        setTimeout(function() {
            const selectArrowExists = document.querySelector('.select-arrow');
            if (selectArrowExists !== null) {

                $('.select-arrow').each(function() {
var arrowPosition = $(this).find('select').width();
                    $(this).css('width', (arrowPosition - 10));
                    $(this).find('select').css({
                        'width': (arrowPosition + 10),
                        //'opacity': 1
                    });
                    console.log(arrowPosition);
                });
            }
        }, 2000);

        $('.select-arrow select').change(function() {
            $('.select-arrow').each(function() {
var arrowPosition = $(this).find('select').width();
                $(this).css('width', (arrowPosition - 10));
                $(this).find('select').css({
                    'width': (arrowPosition + 10),
                    //'opacity': 1
                });
            });
            console.log("select changed: " + arrowPosition);
        });

    }
}
export default SelectArrow;


