
define('dateCodeUtils', [], {
	
	months : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	
	parseDateCode : function(code, freq){
		// Make sure we are dealing with a string
		code = code.toString();
		var	y = code.substring(0,4),
		date, m;
		
		switch(freq.toUpperCase()){
			case 'A':
				m = 0;
				break;
			case 'Q':
				m = (code.substring(4) - 1) * 3;
				break;
			case 'M':
				m = code.substring(4) - 1;
				break;
		}
		
		if(m !== void 0)
			date = new Date(y, m);
		return date;
	},
	
	createDateCode : function(date, freq){
		var y = date.getFullYear().toString(),
		code, qm;
		
		switch(freq.toUpperCase()){
			case 'A':
				qm = '';
				break;
			case 'Q':
				qm = Math.ceil((date.getMonth() + 1) / 3)
				qm = qm < 10 ? '0' + qm : qm;
				break;
			case 'M':
				qm = date.getMonth() + 1;
				qm = qm < 10 ? '0' + qm : qm;
				break;
		}
		
		if(qm !== void 0)
			code = y + '' + qm;
		return code;
	},
	
	formatDateCode : function(code, freq){
		var y = code.toString().substring(0,4),
		qm = code.toString().substring(4,6),
		ret = '';
		
		switch(freq){
			case 'A':
				ret = y;
				break;
			case 'Q':
				ret = 'Q' + parseInt(qm, 10) + ' ' + y;
				break;
			case 'M':
				ret = this.months[parseInt(qm, 10) - 1] + ' ' + y;
				break;
		}
		
		return ret;
	},
	
	deincrementDateCode : function(code, freq){
		return this.deincrementOrIncrementDateCode(code, freq, false);
	},
	
	incrementDateCode : function(code, freq){
		return this.deincrementOrIncrementDateCode(code, freq, true);
	},
	
	deincrementOrIncrementDateCode : function(code, freq, inc){
		var d = this.parseDateCode(code, freq);
		switch(freq){
			case 'A':
				d = new Date(d.getFullYear() + (inc ? 1 : -1), 0);
				break;
			case 'Q':
				d = new Date(d.getFullYear(), d.getMonth() + (inc ? 3 : -3));
				break;
			case 'M':
				d = new Date(d.getFullYear(), d.getMonth() + (inc ? 1 : -1));
				break;
		}
		
		return this.createDateCode(d, freq);
	}
});