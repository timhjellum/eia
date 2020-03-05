const canvg = require("canvg");
//const blueimpCanvasToBlob = require('blueimp-canvas-to-blob');
//const XMLSerializer = require('xmlserializer');

//class exportSVG {
//	constructor(svg, width, height) {
function exportSVG(svg, width, height) {
	var data = new XMLSerializer().serializeToString(
		document.querySelector("#" + svg)
	);
	data = data.replace(
		"<svg",
		"<svg width='" + width + "' height='" + height + "' "
	);
	var canvas = document.createElement("canvas");
	canvg(canvas, data, {
		//log: true,
		ignoreDimensions: false,
		renderCallback: function() {
			canvas.toBlob(function(blob) {
				download("chart.png", blob);
			});
		}
	});
}
function download(filename, blob) {
	if (window.navigator.msSaveOrOpenBlob) {
		window.navigator.msSaveBlob(blob, filename);
	} else {
		const elem = window.document.createElement("a");
		elem.href = window.URL.createObjectURL(blob);
		elem.download = filename;
		document.body.appendChild(elem);
		elem.click();
		document.body.removeChild(elem);
	}
}
//}
//export default exportSVG;
module.exports = { svgExporter: exportSVG };
