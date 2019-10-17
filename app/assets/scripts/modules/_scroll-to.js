class ScrollTo {
    constructor() {

        var reportsPage = ($('.l-body-wrapper.ap').length);
        console.log(reportsPage)
        if(reportsPage == 1) {
            //console.log('REPORTS PAGE');
        } else if (reportsPage == 0) {
            //console.log('NOT A REPORTS PAGE');
        }

 
    }
}
export default ScrollTo;