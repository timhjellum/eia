import $ from "jquery";

class ModuleScripts {
	constructor() {
		$(".toggle.expand-collapse").click(function(e) {
			e.preventDefault();
			$(this).toggleClass("active");
			$(this)
				.next(".expand-collapse-content")
				.slideToggle("slow", function() {
					//console.log("expand-collapse-content")
				});
		});
		$(".toggle.expand-collapse-content-above").click(function(e) {
			e.preventDefault();
			$(this).toggleClass("active");
			$(this)
				.prev(".expand-collapse-content")
				.slideToggle("slow", function() {
					//console.log("expand-collapse-content")
				});
		});
		$(".toggle.show-hide").click(function(e) {
			e.preventDefault();
			$(this).toggleClass("active");
			$(".show-hide-content").toggle();
			//console.log("show-hide-content")
		});
		$("a").each(function() {
			var a = new RegExp("/" + window.location.host + "/");
			if (
				!a.test(this.href) &&
				$(this).find("img").length === 1 &&
				$(this).attr("href")
			) {
				$(this).addClass("external-image-link");
			}
			//console.log("external-image-link")
		});

		var primaryHide = document.querySelectorAll(".primary.hide-mt a"),
			a;
		for (a = 0; a < primaryHide.length; ++a) {
			var $aTrue = primaryHide[a].getAttribute("href") === "";
			if ($aTrue === true) {
				primaryHide[a].parentElement.style.display = "none";
			}
			//console.log(".primary.hide-mt a")
		}
		var primaryAltHide = document.querySelectorAll(
				".primary-alt.hide-mt a"
			),
			b;
		for (b = 0; b < primaryAltHide.length; ++b) {
			var $bTrue = primaryAltHide[b].getAttribute("href") === "";
			if ($bTrue === true) {
				primaryAltHide[b].parentElement.style.display = "none";
			}
			//console.log(".primary-alt.hide-mt a")
		}
		var secondaryHide = document.querySelectorAll(".secondary.hide-mt a"),
			c;
		for (c = 0; c < secondaryHide.length; ++c) {
			var $cTrue = secondaryHide[c].getAttribute("href") === "";
			if ($cTrue === true) {
				secondaryHide[c].parentElement.style.display = "none";
			}
			//console.log(".secondary.hide-mt a")
		}
		var secondaryAltHide = document.querySelectorAll(
				".secondary-alt.hide-mt a"
			),
			d;
		for (d = 0; d < secondaryAltHide.length; ++d) {
			var $dTrue = secondaryAltHide[d].getAttribute("href") === "";
			if ($dTrue === true) {
				secondaryAltHide[d].parentElement.style.display = "none";
			}
			//console.log(".secondary-alt.hide-mt a")
		}
		var energyEducationFoot = document.querySelectorAll(
				".energy-education li.foot a"
			),
			e;
		for (e = 0; e < energyEducationFoot.length; ++e) {
			var $eTrue = energyEducationFoot[e].getAttribute("href") === "";
			if ($eTrue === true) {
				energyEducationFoot[e].parentElement.style.display = "none";
			}
			//console.log(".energy-education li.foot a")
		}
		var updatedDataDeries = document.querySelectorAll(
				".updated-data-series a"
			),
			f;
		for (f = 0; f < updatedDataDeries.length; ++f) {
			var $fTrue = updatedDataDeries[f].getAttribute("href") === "";
			if ($fTrue === true) {
				updatedDataDeries[f].parentElement.style.display = "none";
			}
			//console.log(".updated-data-series a")
		}
		var energyEducation = document.querySelectorAll(
				".energy-education h2 a"
			),
			g;
		for (g = 0; g < energyEducation.length; ++g) {
			var $gTrue = energyEducation[g].getAttribute("href") === "";
			if ($gTrue === true) {
				energyEducation[
					g
				].parentElement.parentElement.parentElement.style.display =
					"none";
			}
			//console.log(".energy-education h2 a")
		}
		var visualizations = document.querySelectorAll(".visualizations a"),
			h;
		for (h = 0; h < visualizations.length; ++h) {
			var $hTrue = visualizations[h].getAttribute("href") === "";
			if ($hTrue === true) {
				visualizations[
					h
				].parentElement.parentElement.parentElement.style.display =
					"none";
			}
			//console.log(".visualizations a")
		}
	}
}
export default ModuleScripts;
