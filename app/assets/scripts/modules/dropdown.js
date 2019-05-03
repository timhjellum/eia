

class DropDown {
    constructor() {
        this.dropDown = $('.dropdown-container.js');
        if (this.dropDown.length) {
            this.dropDownModule();
        }
    }

    dropDownModule() {
        console.log('dropdown module found');
        const dropDownButton = $('.dropdown-container.js .dropdown-button');
        const dropDownMenu = $('.dropdown-container.js .dropdown-menu');        

        function positionDropDownMenu() {
            dropDownMenu.position({
                'left': dropDownButton.position().left - dropDownMenu.outerWidth() + dropDownButton.outerWidth()
            });
        }

        dropDownButton.on('click', function openDropDownMenu(event) {
            dropDownButton.toggleClass('open', true);
            if(!dropDownMenu.is(':visible')) {
                dropDownMenu.show();
                positionDropDownMenu();
                $(window).on('resize', positionDropDownMenu);

                setTimeout(function() {
                    $(window).one('click', function(event) {
                        dropDownButton.toggleClass('open', false);
                        dropDownMenu.hide();
                        $(window).off('resize', positionDropDownMenu);
                    });
                }, 0);
            }
        });



        dropDownMenu.on('change', function frequencySelected(event) {
            //setDropDownButtonText();
            dropDownButton.toggleClass('open', false);
            dropDownMenu.hide();
            $(window).off('resize', positionDropDownMenu);
        });
        //dropDownMenu.on('change', tagChangeHandler);
    }
}
export default DropDown;


