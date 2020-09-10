const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

process.env.NODE_ENV = "production"
process.env.BABEL_ENV = "production"

module.exports = {
	entry: "./src/sas",
	output: {
		publicPath: "/",
		filename: "scripts/global.electricity-monthly.min.js",
		path: path.resolve(__dirname, "_sas/")
	},
	mode: "production",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.less$/,
				loader: "less-loader"
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", { loader: "less-loader" }]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "styles/eia_sas.css"
		})
	]
}
