const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./main.js",
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};
