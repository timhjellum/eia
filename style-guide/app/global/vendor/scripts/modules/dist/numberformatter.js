define("numberformatter",["classy"],function(Class){return Class.$extend({__init__:function(){},__classvars__:{round:function(num,precision){return precision=precision?precision:0,(Math.round(num*Math.pow(10,precision))/Math.pow(10,precision)).toFixed(precision)},addCommas:function(num){num+="";var x=num.split("."),x1=x[0],x2=x.length>1?"."+x[1]:"",rgx=/(\d+)(\d{3})/;while(rgx.test(x1))x1=x1.replace(rgx,"$1,$2");return x1+x2}}})})