"use strict";

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "dev/main.tsx"),
    vendor: ["react", "react-dom"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  target: "web",
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: false,
    port: 3000,
    hot: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
            options: {
              esModule: false,
              injectType: "singletonStyleTag",
            },
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("postcss-flexbugs-fixes"),
                  autoprefixer({
                    overrideBrowserslist: [
                      ">1%",
                      "last 4 versions",
                      "Firefox ESR",
                      "not ie <9",
                    ],
                    flexbox: "no-2009",
                  }),
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, "src/scss")],
              },
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./dev/index.html",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  performance: {
    hints: false,
  },
};
