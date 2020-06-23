const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "../src/index.jsx"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "../build"),
    publicPath: "/",
    hot: true
  },
  plugins: [
    new CopyWebpackPlugin([{ from: "public" }]),
    new Webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: path.join(__dirname, "../build"),
    filename: "bundle.js"
  }
};
