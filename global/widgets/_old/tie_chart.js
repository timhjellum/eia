function HttpRequest2(url){
var pageRequest2 = false //variable to hold ajax object

if (!pageRequest2 && typeof XMLHttpRequest != 'undefined')
   pageRequest2 = new XMLHttpRequest()

if (pageRequest2){ //if pageRequest is not false
   pageRequest2.open('GET', url, false) //get page synchronously 
   pageRequest2.send(null)
   embedpage(pageRequest2)
   }
}

function embedpage(request2){
//if viewing page offline or the document was successfully retrieved online (status code=200)
if (window.location.href.indexOf("http")==-1 || request2.status==200)
   document.write(request2.responseText)
}

HttpRequest2("http://www.eia.gov/global/widgets/ris1.cfm") //include "external.htm" onto current page