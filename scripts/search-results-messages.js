"use strict";

const chalk = require("chalk");

function printHostingInstructions() {
	console.log(
		`${chalk.green("SUCCESS!")} ${chalk.cyan(
			"The files are ready for you in the"
		)} ${chalk.yellow("/_search-results/")} ${chalk.cyan(
			"folder at the root of the style-guide."
		)}`
	);
	console.log(
		`Move the ${chalk.yellow(
			"/_search-results/scripts/search-results.min.js"
		)} file to the ${chalk.yellow("/global/scripts/")} folder on Test or Dev.`
	);
	console.log(
		`Move the ${chalk.yellow(
			"/_search-results/styles/search-results.min.css"
		)} file to the ${chalk.yellow("/global/styles/")} folder on Test or Dev.`
	);
}
module.exports = printHostingInstructions;
