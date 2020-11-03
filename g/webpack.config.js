const currentTask = process.env.npm_lifecycle_event
const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const fse = require("fs-extra")

/*
const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('postcss-hexrgba'),
  require('autoprefixer')
]
*/

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap("Copy images", function () {
      fse.copySync("./app/assets/images", "./docs/assets/images")
    })
  }
}

let cssConfig = {
  test: /\.(scss)$/,
  use: [
    {
      loader: "style-loader" // inject CSS to page
    },
    {
      loader: "css-loader" // translates CSS into CommonJS modules
    },
    {
      loader: "postcss-loader", // Run postcss actions
      options: {
        plugins: function () {
          // postcss plugins, can be exported to postcss.config.js
          return [require("autoprefixer")]
        }
      }
    },
    {
      loader: "sass-loader" // compiles Sass to CSS
    }
  ]
}

let fontConfig = {
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        outputPath: "fonts/"
      }
    }
  ]
}

let pages = fse
  .readdirSync("./app")
  .filter(function (file) {
    return file.endsWith(".html")
  })
  .map(function (page) {
    return new HtmlWebpackPlugin({
      filename: page,
      template: `./app/${page}`
      //filename: ("./app/index.html", "./app/home.html")
    })
  })

let config = {
  entry: "./app/assets/scripts/App.js",
  plugins: pages,
  module: {
    rules: [cssConfig]
  }
}

if (currentTask == "dev") {
  cssConfig.use.unshift("style-loader")
  fontConfig.use.unshift("file-loader")
  config.output = {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app")
  }
  config.devServer = {
    before: function (app, server) {
      server._watch("./app/**/*.html")
    },
    contentBase: path.join(__dirname, "app"),
    hot: true,
    port: 3030
    //host: '0.0.0.0'
  }
  config.mode = "development"
}

if (currentTask == "build") {
  config.module.rules.push({
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"]
      }
    }
  })

  cssConfig.use.unshift(MiniCssExtractPlugin.loader)
  fontConfig.use.unshift("file-loader")
  //postCSSPlugins.push(require("cssnano"))
  config.output = {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "docs")
  }
  config.mode = "production"
  config.optimization = {
    splitChunks: { chunks: "all" }
  }
  config.plugins.push(new CleanWebpackPlugin(), new MiniCssExtractPlugin({ filename: "styles.[chunkhash].css" }), new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }), new RunAfterCompile())
}

module.exports = config
