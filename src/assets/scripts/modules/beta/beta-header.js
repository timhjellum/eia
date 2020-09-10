class BetaHeader {
	constructor() {
		//console.log("beta-header checking in");
		var newPage = document.querySelectorAll("body > div.beta");
		if (newPage.length > 0) {
			//console.log("converted");
			var betaLogo = document.querySelector("a.logo");
			betaLogo.setAttribute("class", "logo beta");
			var logoAnchor = document.querySelector('a.logo[href="/"]');
			if (logoAnchor) {
				logoAnchor.setAttribute("href", "/beta/");
			}
		} else if (newPage.length < 1) {
			//console.log("not converted");
			var betaLogo = document.querySelector("a.logo");
			betaLogo.setAttribute("class", "logo-beta");
			//$("a.logo").attr("class", "logo-beta");
			var logoAnchor = document.querySelector('a.logo-beta[href="/"]');
			if (logoAnchor) {
				logoAnchor.setAttribute("href", "/beta/");
			}
		}
	}
}
export default BetaHeader;
