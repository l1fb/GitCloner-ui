const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./client/src/index.jsx"],
  output: {
    path: path.resolve(__dirname, "./client/public"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.(css)$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  }
};
