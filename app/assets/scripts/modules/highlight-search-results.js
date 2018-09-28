class Highlight {
    constructor() {


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
export default Highlight;