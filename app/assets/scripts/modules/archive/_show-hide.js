import $ from 'jquery';

class ShowHide {
    constructor() {
        $(".show").click(function () {
            $(this).next().toggle();
            if ($(this).next().is(":visible")) { $(this).html("[-] See less"); }
            else { $(this).html("[+] See more"); };
        });
    }
}
export default ListSplitter;