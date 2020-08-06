const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new ModuleFederationPlugin({
      name: "app_one_remote",
      remotes: {},
      exposes: {
        moduleA: "./src/module-a",
        moduleB: "./src/module-b",
      },
      shared: [],
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      chunks: ["main"],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
