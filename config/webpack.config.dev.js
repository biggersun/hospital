/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.config.basic')
const {
    resolve,
 } = require('path')

const publicPath = '/'
const projectDir = process.cwd()
const distDir = resolve(projectDir, 'dist')
const srcDir = resolve(projectDir, 'src')
const mainDir = resolve(srcDir, 'main')
const appJsPath = resolve(mainDir, 'index.jsx')

const port = 4000
const host = '0.0.0.0'
const hot = process.env.NODE_PROJECT_HOT === 'true'

process.env.BABEL_ENV = hot ? 'development.hot' : 'development'

const hotEntry = [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
]

const hotPlugins = [
    // 开启全局的模块热替换(HMR)
    new webpack.HotModuleReplacementPlugin(),
    // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
    new webpack.NamedModulesPlugin(),
]

module.exports = ({
    apiProxyHost = '182.92.2.176',
    apiProxyPort = '8888',
    apiProxyProtocol = 'http:',
} = {}) => webpackMerge(commonConfig(), {
    devtool: 'cheap-source-map',

    entry: {
        vendor: [
            'moment',
            'react',
            'react-dom',
            'classnames',
            'react-router',
            'urijs',
        ],
        app: hot ? [
            ...hotEntry,
            appJsPath,
        ] : appJsPath,
    },

    output: {
        publicPath,
        filename: 'dist/[name].js',
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?importLoaders=2',
                    'postcss-loader',
                ],
            },
        ],
    },

    plugins: hot ? hotPlugins : [],

    devServer: {
        port,
        host,
        hot,
        contentBase: distDir,
        historyApiFallback: true,
        disableHostCheck: true,
        stats: {
            chunks: false,
        },
        proxy: {
            '/lemonbaby': {
                target: `${apiProxyProtocol}//${apiProxyHost}:${apiProxyPort}`,
                headers: {
                    Host: apiProxyHost,
                },
            },
        },
    },
})

