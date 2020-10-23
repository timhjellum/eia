"use strict"

const chalk = require("chalk")

function printHostingInstructions() {
	console.log(`${chalk.green("SUCCESS!")} ${chalk.cyan("The files are ready for you in the")} ${chalk.yellow("/_weekly/")} ${chalk.cyan("folder at the root of the style-guide.")}`)
	console.log(`Move the ${chalk.yellow("/_weekly/scripts/weekly.min.js")} file to the ${chalk.yellow("/petroleum/weekly/scripts/")} folder on Test or Dev.`)
	console.log(`Move the ${chalk.yellow("/_weekly/styles/weekly.min.css")} file to the ${chalk.yellow("/petroleum/weekly/styles/")} folder on Test or Dev.`)
}
module.exports = printHostingInstructions
