var baseConfig = require('./webpack.base.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack')
var path = require('path')
var config = {
    externals: {
        "react": 'React',
        "react-dom": 'ReactDOM',
        "react-router": 'ReactRouter'
    },
    entry: baseConfig.entry,
    output: baseConfig.output,
    resolve: baseConfig.resolve,
    module: baseConfig.module,
    plugins: baseConfig.plugins
};

config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: ['manifest'],
}))
config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    names: Object.keys(baseConfig.entry),
    async: true,
    children: true,
    minChunks: 3,
}))
config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: ['manifest'],
}))
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
    },
    output: {
        comments: false,
    },
    sourceMap: true,
    mangle: true,
}))
config.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
    __DEBUG__: false,
}))
module.exports = config