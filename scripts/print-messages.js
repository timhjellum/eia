"use strict"

const chalk = require("chalk")

function printHostingInstructions() {
	console.log(`${chalk.green("SUCCESS!")} ${chalk.cyan("The files are ready for you in the")} ${chalk.yellow("/_print/")} ${chalk.cyan("folder at the root of the style-guide.")}`)
	console.log(`Move the ${chalk.yellow("/_print/styles/global.print.min.css")} file to the ${chalk.yellow("/global/styles/")} folder on Test or Dev.`)
}
module.exports = printHostingInstructions
