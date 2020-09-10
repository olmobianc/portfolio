const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "main.[contentHash].js", //adding content Hash to prevent cache busting from browsers
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader, //3. Extract css into files
                    "css-loader",   //2. Turns css into js
                    "sass-loader"   //1. Turns sass into css
                ], 
            },
        ]
    },
    plugins: [ new MiniCssExtractPlugin({filename: "[name].[contentHash].css"}),
               new CleanWebpackPlugin()]
});