const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],  //first happens css loader and then style-loader!!
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: 'file-loader',
            },
        ],
    },
};