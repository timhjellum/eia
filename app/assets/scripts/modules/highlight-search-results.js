class Highlight {
    constructor() {
        //$('.a-z a[href*="#"]')
        if (window.location.href.indexOf('?id=') > -1) {
            function getQueryVariable(variable) {
               var query = window.location.search.substring(1);
               var vars = query.split("&");
               for (var i=0;i<vars.length;i++) {
                       var pair = vars[i].split("=");
                       if(pair[0] == variable){
                        return pair[1];
                      }
               }
            }
            
            
            var id_is = getQueryVariable("id");
            
            window.onload = function(){
              console.log(id_is);
              $('.'+id_is).css({
                  'background-color': '#0096d7',
                  'color': '#ffffff'
              });
            }
        }

        if (window.location.href.indexOf('query=') > -1) {
            console.log('query= found!');
            var referrer = document.referrer;
            var query;

            //if(referrer) {
            //console.log('referrer detected');
            //var hasQuery = referrer.indexOf('query='); 
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
            } else {
            //    console.log('NO query detected');
            }

            var dataPageContent = document.getElementsByTagName('mark');
            for (var i = 0; i < dataPageContent.length; i++) {
                var dataAccordionContent = dataPageContent[i].closest('div');
                dataAccordionContent.style.display = "block";
            }
            //}
        }
        else {
            //console.log('query= Not Found!');
        }


        /*
        
                */
        //if (ref.match(/^https?:\/\/([^\/]+\.)?eia\.goc(\/|$)/i)) {

    }
}
export default Highlight;

/*




        const dataPage = document.querySelector('.data');
        if (dataPage !== null) {

            var referrer = document.referrer;
            var query;
            //referrer = document.location.href;  //REMOVE AFTER TESTING
            if(referrer){
                var posQ = referrer.indexOf('query=');
                if(posQ>-1){
                    posEnd = referrer.indexOf('&', posQ);
                    if(posEnd>-1){
                        query = referrer.substring(posQ + 6, posEnd);
                    } else {
                        query = referrer.substring(posQ + 6);
                    }
                    var aryKeywords = query.split('+');
                    for(var i=0;i<aryKeywords.length;i++){
                        //can't get this to work!  var patt = new  RegExp('(\b' + aryKeywords[i] + ')(?!([^<]+)?>)','ig');
                        var patt = new  RegExp('(\\b' + aryKeywords[i] + '\\w*)(?!([^<]+)?>)','ig');
                        ///var patt = new  RegExp('(\\w*' + aryKeywords[i] + '\\w*)(?!([^<]+)?>)','ig');
                        var pageHTML = $('div.pagecontent').find('td').each(function(){
                            if(patt.test(this.innerHTML)){
                                var spannedContent = this.innerHTML.replace(patt, '<span class="highlight keyword' + i + '">$1</span>');
                                this.innerHTML = spannedContent;
                            }
                        });
                    }
                    if(document.location.href.toLowerCase().indexOf('/data.cfm')>0 || document.location.href.toLowerCase().indexOf('totalenergy/data/')>0){
                        // open the tab containing the most highlighted keywords
                        var maxAppearances=0;
                        var aryCountObj = [];
                        $('table.contable tbody').each(function(){
                            var countObj = {
                                tbody: this,
                                appearances: 0,
                                count: 0
                            };
                            for(var i=0;i<aryKeywords.length;i++){
                                var found = $(this).find('span.highlight.keyword' + i).length;
                                countObj.count =+ found;
                                if(found>0) countObj.appearances++ ;
                            }
                            if(maxAppearances<countObj.appearances) maxAppearances = countObj.appearances;
                            aryCountObj.push(countObj)
                        });
                        for(var i=0;i<aryCountObj.length;i++){ //open section with most
                            if(aryCountObj[i].appearances == maxAppearances){
                                $(aryCountObj[i].tbody).prev('thead').last().click()
                            }
                        }
                    }
                    $('.highlight').click(function(){
                        $('.highlight').removeClass('highlight').addClass('highlight_off');
                    });
                }
            }
        } // dataPage
    }
}


*/