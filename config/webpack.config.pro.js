/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackChunkHash = require('webpack-chunk-hash')
const commonConfig = require('./webpack.config.basic')
const { appJsPath } = require('./files.config')

const publicPath = '/lemonbaby/'

const extractCSS = new ExtractTextPlugin('css/[name].[contenthash:20].css')

const uglifyJs = new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    comments: false,
    compress: {
        warnings: false,
        drop_console: false,
        collapse_vars: true,
        reduce_vars: true,
    },
})

module.exports = () => webpackMerge(commonConfig(), {
    bail: true,

    entry: {
        vendor: [
            'babel-polyfill',
            'moment',
            'react',
            'react-dom',
            'classnames',
            'react-router',
            'urijs',
        ],
        app: appJsPath,
    },

    output: {
        publicPath,
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[chunkhash].js',
    },

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: extractCSS.extract([
                    'css-loader?importLoaders=1&minimize',
                    'postcss-loader',
                ]),
            },
            {
                test: /\.less$/,
                use: extractCSS.extract([
                    'css-loader?importLoaders=2&minimize',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                    },
                ]),
            },
        ],
    },

    plugins: [
        new WebpackChunkHash(),
        extractCSS,
        uglifyJs,
    ],
})
