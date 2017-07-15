/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const smartImport = require('postcss-smart-import')
const precss = require('precss')
const autoprefixer = require('autoprefixer')
const calc = require('postcss-calc')

module.exports = ({ webpack }) => {
    const isLess = /^\.less$/i.test(path.extname(webpack.resourcePath))

    const autoprefixerPlugin = autoprefixer({
        browsers: [
            'last 2 versions',
            'Firefox ESR',
            '> 1%',
            'ie >= 10',
        ],
    })

    const config = {}

    if (isLess) {
        config.plugins = [
            autoprefixerPlugin,
        ]
    } else {
        config.plugins = [
            smartImport({
                path: webpack.options.resolve.modules,
                addDependencyTo: webpack,
            }),
            calc(),
            precss(),
            autoprefixerPlugin,
        ]
    }

    return config
}
