"use strict";

const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "/lib"),
    filename: "index.js",
    library: {
      name: "react-chat-widget",
      type: "umd",
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  target: "web",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/, /dev/],
        use: ["babel-loader", "ts-loader"],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
                includePaths: [path.resolve(__dirname, "src/scss/")],
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
      },
      {
        test: /\.(jpg|png|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    /**
     * Known issue for the CSS Extract Plugin in Ubuntu 16.04: You'll need to install
     * the following package: sudo apt-get install libpng16-dev
     */
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "[id].css",
    }),
  ],
  externals: {
    react: {
      commonjs: "React",
      commonjs2: "react",
      amd: "react",
    },
    "react-dom": {
      commonjs: "ReactDOM",
      commonjs2: "react-dom",
      amd: "react-dom",
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },
};
