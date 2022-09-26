const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    devtool: "source-map",
    mode: "development",
    resolve: {
        extensions: [".js"],
    },
    entry: "./index",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "./dist",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new MiniCssExtractPlugin({filename: "style.css"})
    ],
    target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env'],
                },
                exclude: /node_modules\/(?!(axios|@redux-saga|redux-logger))/
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    // 'postcss-loader',
                    // 'sass-loader'
                ],
                exclude: /node_modules\/(?!(axios|@redux-saga|redux-logger))/
            },
        ]
    },
    // optimization: {
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
}