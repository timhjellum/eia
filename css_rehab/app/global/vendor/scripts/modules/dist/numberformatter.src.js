
/**
 *	The 'numberformatter' module does stuff.
 *
 *	@module numberformatter
 *	@requires classy
 */
 
define('numberformatter',
[
	'classy'
],
function(
	Class
)
{
	return Class.$extend({
		
		/**
		 *	Constructor Function for numberformatter. Does nothing.
		 *	@method __init__
		 */
		__init__ : function(){
		
		},
		__classvars__ :{
			round : function(num, precision) {
				precision = precision ? precision : 0;
				return (Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision)).toFixed(precision);
			},
			
			addCommas : function(num) {
				num +='';
				var x = num.split('.');
				var x1 = x[0];
				var x2 = x.length > 1 ? '.' + x[1] : '';
				var rgx = /(\d+)(\d{3})/;
				while(rgx.test(x1)) {
					x1 = x1.replace(rgx, '$1' + ',' + '$2');
				}
				return x1 + x2;
			}
		}
	});
});