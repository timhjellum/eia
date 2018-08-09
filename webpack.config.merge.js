const webpack = require('webpack');
const path = require('path');
const dist = './global/scripts';
//const dist = '//REPLICATOR/website/css_rehab/archive/global/scripts';


module.exports = {
        entry: {
            global: "./style-guide/assets/scripts/global",
        },
        output: {
            path: path.resolve(__dirname, dist),
            filename: "[name].min.js"
        },
        module: {
            loaders: [{
                loader: 'babel',
                "babel-preset-env": "^1.7.0",
                query: {
                    presets: ['es2015']
                },

                //new
                //query: {
                //     presets: ['env']
                //},



                //newer
                /*
                query: {
                    "presets": [
                        ["env", {
                            "targets": {
                                // The % refers to the global coverage of users from browserslist
                                "browsers": [">0.25%", "not ie 11", "not op_mini all"]
                            }
                        }]
                    ]
                },
                */








                // only test js files
                test: /\.js$/,
                // ignore the mode modules folder
                exclude: /node_modules/
            }],
        }
        /*
        ,
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
                "window.$": "jquery"
            })
        ]
        */
    } // module.exports