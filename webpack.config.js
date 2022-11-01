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
    entry: { polyfill: ["./polyfill", "whatwg-fetch", "@babel/polyfill"], mykl_ui: [ "./mykl-default", "./mykl-ajax"], mykl_expanded: './mykl-expanded' },
    output: {
        filename: 'js/[name].js',
        assetModuleFilename: 'images/[name][ext]',
        path: path.resolve(__dirname, "dist"),
        publicPath: "./dist",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            // template: "./index.html"
            template: "./index.html"
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
                },
                exclude: /node_modules\/(?!(axios|@redux-saga|redux-logger))/
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
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