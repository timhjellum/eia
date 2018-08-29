var jQuery = require('jquery');
import fittext from '../../../../node_modules/fittext/dist/jquery.fittext.js';

class FitText {
	constructor() {
        $('.slider-home h2').fitText();
		//$('.slider-home h3').fitText(1.8);
		$('.slider-home h3').fitText(1.6, { minFontSize: '18px', maxFontSize: '32px' });
	}
}
export default FitText;