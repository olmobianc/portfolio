var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader", //3. Inject styles into DOM
                    "css-loader",   //2. Turns css into js
                    "sass-loader"   //1. Turns sass into css
                ], 
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: 
                        {
                            loader: 'file-loader',
                            options: {
                                name: "[name].[hash].[ext]",
                                outputPath: 'images',  //needed to display the background image
                            }    
                        },
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })]
};