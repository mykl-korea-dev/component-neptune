const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: "source-map",
    mode: "development",
    resolve: {
        extensions: [".js"],
    },
    entry: { mykl_ui: [ "./mykl-default", "./mykl-ajax"] },
    output: {
        filename: 'js/[name].js',
        assetModuleFilename: 'images/[name][ext]',
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "./index.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "./ajax.html",
            filename: "./ajax.html",
            inject: false
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name]_style.css"
        }),
        autoprefixer
    ],
    target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env'],
                    // plugins: [["transform-remove-console", {"exclude": ["error", "warn"]}]]
                },
                exclude: /node_modules\/(?!(axios|@redux-saga|redux-logger))/
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        },
                    },
                    // 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    // 'sass-loader'
                ],

                exclude: /node_modules\/(?!(axios|@redux-saga|redux-logger))/
            },
        ]
    },
    devServer: {
        static: {directory: path.join(__dirname)},
        port: 3001,
        hot: true,
    }
}