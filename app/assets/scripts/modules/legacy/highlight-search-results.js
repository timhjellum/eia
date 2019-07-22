class HighlightSearchResults {
    constructor() {
    
        var referrer = document.referrer;
        var query;

        if(referrer) {
            console.log('referrer detected');
            var hasQuery = referrer.indexOf('query='); 
            var queryEnd = referrer.indexOf('&', hasQuery); 
            var query = referrer.substring(hasQuery + 6, queryEnd);
            var queryKeywords = query.replace(/[^\w\s]/gi, ' ');
            console.log(queryKeywords);

            var checkIfQuery = ((hasQuery > -1) == (queryEnd > -1)); // true | false
            if (checkIfQuery == true) {
                
                var accordionWrapperInner = document.getElementsByClassName('accordion')[0].innerHTML;
                var accordionWrapper = document.getElementsByClassName('accordion')[0];
                var search = queryKeywords;
                console.log(queryKeywords);
                search = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); //https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
    
                var re = new RegExp(search, 'gi');
    
                if (search.length > 0)
                accordionWrapper.innerHTML = accordionWrapperInner.replace(re, '<mark>$&</mark>');
                else accordionWrapper.innerHTML = accordionWrapperInner;
                console.log('query detected');
            } else {
                console.log('NO query detected');
            }

            var dataPageContent = document.getElementsByTagName('mark');
            for (var i = 0; i < dataPageContent.length; i++) {
                var dataAccordionContent = dataPageContent[i].closest('div');
                dataAccordionContent.style.display = "block";
            }

        }
    }
}
export default HighlightSearchResults;