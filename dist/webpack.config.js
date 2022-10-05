"use strict";

var path = require('path');

var HtmlWebpackPlugin = require("html-webpack-plugin");

var TerserPlugin = require("terser-webpack-plugin");

var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "source-map",
  mode: "development",
  resolve: {
    extensions: [".js"]
  },
  entry: {
    mykl_ui: "./mykl-default",
    mykl_expanded: './mykl-expanded'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "dist"),
    publicPath: "./dist",
    clean: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./index.html"
  }), new MiniCssExtractPlugin({
    filename: "style.css"
  })],
  target: ['web', 'es5'],
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env']
      },
      exclude: /node_modules\/(?!(axios|@redux-saga|redux-logger))/
    }, {
      test: /\.s?css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: './images/'
        }
      }, // 'style-loader',
      'css-loader', 'postcss-loader' // 'sass-loader'
      ],
      exclude: /node_modules\/(?!(axios|@redux-saga|redux-logger))/
    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: "file-loader",
      options: {
        // publicPath: "",
        outputPath: './images/',
        name: "[name].[ext]"
      }
    } // {
    //     test: /\.(png|jpe?g|gif|svg)$/,
    //     use: {
    //         loader: 'url-loader',
    //         options: {
    //             // publicPath: './images/',
    //             outputPath: './images/',
    //             name: '[name].[ext]',
    //             limit: 5000
    //         }
    //     }
    // }
    ]
  } // optimization: {
  //     minimize: true,
  //     minimizer: [new TerserPlugin({
  //         minify: TerserPlugin.uglifyJsMinify,
  //         terserOptions: {
  //             compress: {unused: false},
  //             mangle: { keep_fnames: true }
  //         }
  //     })]
  // },
  // devServer: {
  //     devMiddleware: {publicPath: "/dist"},
  //     static: {directory: path.join(__dirname)},
  //     hot: true,
  // }

};
//# sourceMappingURL=webpack.config.js.map