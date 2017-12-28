/**
 * @displayname Credit Card Generator
 * @hint I will generate a credit card number that passes validation for testing purposes
 * @output false
 */
component {


/**
Constructor.
@hint I am cool
*/
public function init()
{
	return this;
}


/**
 * @description I will generate the number all you need to tell me is what type of card you you are trying to generate: visa, mastercard, discover, amex
 * @hint I return a credit card
 * @output false
 */
public string function generateCreditCardNumber(String type){
	var ccnumber = arrayNew(1);
	var cclen = 16;
	var start = 1;
	var generatedNumber = "";

	if(isValidType(lcase(arguments.type))){

		switch(lcase(arguments.type)){
			case "visa" : {
				ccnumber[start++] = 4;
				break;
			}
			case "mastercard" : {
				ccnumber[start++] = 5;
				ccnumber[start++] = Int(rand() * 5) + 1;
				break;
			}
			case "discover" : {
				ccnumber[start++] = 6;
				ccnumber[start++] = 0;
				ccnumber[start++] = 1;
				ccnumber[start++] = 1;
				break;
			}
			case "amex" : case "american express" : {
				ccnumber[start++] = 3;
				ccnumber[start++] = round(rand()) ? 7 : 4 ;
				cclen = 15;
				break;
			}
		}

		for(i = start; i <= cclen; i++){
			ccnumber[i] = Int(rand() * 10);
		}

		/* the luhn Algorithm is used to create the check digit number */

		var sum = 0;
		for(j=1; j < cclen; j++) {
			var digit = ccnumber[j];
			// length of 16 for Visa|Mastercard|Discover && length of 15 for Amex
			if( (cclen == 16 && j % 2 != 0) || (cclen == 15 && j % 2 == 0) ){
				digit = digit * 2;
				if(digit > 9){
					digit = ( left(digit,1) + right(digit,1) );
				} else {
					digit = digit;
				}
			}
			sum += digit;
		}

		var check_digit = [0,9,8,7,6,5,4,3,2,1];
		ccnumber[cclen] = check_digit[(sum % 10 + 1)];

		/* turn our array into the actual number */
		for(n=1; n <= cclen; n++){
			generatedNumber = generatedNumber & ccnumber[n];
		}

	} else {
		throw(type="Invalid Credit Card Type",message="Please use one of the following types: 'visa,mastercard,discover,amex'");
	}

	return generatedNumber;
}

/**
 * @hint I will check the type of card to make sure its one of the cards we support
 * @output false
 */
private boolean function isValidType(String type){
	var types = "visa,mastercard,discover,amex,american express";
	return listContains(types,arguments.type) > 0;
}

}