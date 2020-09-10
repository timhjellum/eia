const path = require("path")
//const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
//const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: "./src/global",
  output: {
    //publicPath: "/",
    publicPath: "/adaptive/style-guide/_global/",
    filename: "scripts/global.min.js",
    path: path.resolve(__dirname, "/adaptive/style-guide/_global/")
    //publicPath: "/adaptive/style-guide/_global/",
    //filename: "global.min.js",
    //path: "/global/scripts/"
    //path: paths.appGlobal, // "_global"
    //publicPath: "/adaptive/style-guide/_global/",
    //filename: "scripts/global.min.js",
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
            //presets: ["es2015"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", { loader: "less-loader" }]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "global/styles/global.min.css"
    })
  ],
  externals: {
    jquery: "jQuery",
    jqueryui: "jqueryui"
  }
}
/*
  "babel": {
    "presets": [
      "react-app"
    ]
  },
  "devDependencies": {
    "@babel/preset-env": "^7.8.7",
    "less": "^3.11.1",
    "less-loader": "^5.0.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.11.0"
  }
}

  */
