const path = require("path")
//const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
//const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: "./src/assets/styles/sas.css",
	output: {
		publicPath: "/adaptive/style-guide/_sas/",
		//filename: "scripts/print-preview.min.js",
		path: path.resolve(__dirname, "/adaptive/style-guide/_sas/")
	},
	mode: "production",
	module: {
		rules: [
			/*
	  {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
            //presets: ["es2015"]
          }
        }
	  },
	  */
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader", { loader: "less-loader" }]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "styles/_sas.min.css"
		})
	]
}
