const path = require("path")
const fs = require("fs")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserJSPlugin = require("terser-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

// Required for babel-preset-react-app
process.env.NODE_ENV = "production"
process.env.BABEL_ENV = "production"

module.exports = {
	entry: path.resolve(__dirname, "src"),
	output: {
		publicPath: "/style-guide/",
		path: __dirname + "/build",
		filename: "bundle.js"
	},
	//devServer: {
	//	historyApiFallback: true
	//},
	mode: "production",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
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
			},
			{
				test: /\.(png|j?g|svg|gif)?$/,
				use: "file-loader"
			}
		]
	},
	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
	},
	plugins: [
		new MiniCssExtractPlugin(), // Re-generate index.html with injected script tag. // The injected script tag contains a src value of the // filename output defined above.
		/*
		{
			filename: "global/styles/global.min.css"
		})
		*/ new HtmlWebpackPlugin({
			inject: true,
			template: resolveAppPath("public/index.html")
		})
	]
	//externals: {
	//	jquery: "jQuery",
	//	jqueryui: "jqueryui"
	//}
}
