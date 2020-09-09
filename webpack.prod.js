const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main.[contentHash].js", //adding content Hash to prevent cache busting from browsers
        path: path.resolve(__dirname, "dist")
    },
});