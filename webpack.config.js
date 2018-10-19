const webpack = require('webpack');
const path = require('path');


//const dist = './app/temp/scripts/';
//const dist = '//REPLICATOR/website/adaptive/global/scripts';


module.exports = {
    entry: {
        global: "./app/assets/scripts/global.js",
        scripts: "./app/assets/scripts/scripts.js"
    },
    output: {
        path: path.resolve(__dirname, './app/temp/scripts/'),
        filename: "[name].js"
    },
    module: {
        loaders: [{
            loader: 'babel',
            "babel-preset-env": "^1.7.0",
            query: {
                presets: ['es2015']
            },
            // only test js files
            test: /\.js$/,
            // ignore the mode modules folder
            exclude: /node_modules/
        }],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery"
        })
    ]

}