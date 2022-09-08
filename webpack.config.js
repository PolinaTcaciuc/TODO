const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

/* ------------------- mode ------------------- */
const isDev = process.env.NODE_ENV === 'development';
/* ------------------- mode reverse ------------------- */
const isProd = !isDev;
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;
 
module.exports = {
    mode: 'development',
    devtool: isProd ? false : 'source-map',
    devServer: {
        historyApiFallback: true,
        open: true,
        hot: true,
        compress: true,
        static: {
            directory: 'dist'
        },
    },
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'js/script.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: `./js/${filename('js')}`,
        assetModuleFilename: 'assets/images/[name][ext]'

    },
    /* ------------------- plugins ------------------- */
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
            favicon: path.resolve(__dirname, 'src', 'favicon.ico'),
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`
        }),
    ],
    /* ------------------- module ------------------- */
    module: {
        rules: [{
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev
                        },
                    },
                    'css-loader'
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
                type: 'asset/resource',

            },
            {
                test: /\.ttf$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [['@babel/preset-env', {
                      corejs: 3,
                  }]]
                }
              }
            },
        ]
    }
};
