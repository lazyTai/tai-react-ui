var baseConfig = require('./webpack.base.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack')
var path = require('path')
var express = require('express')
var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: baseConfig.entry,
    output: baseConfig.output,
    resolve: baseConfig.resolve,
    module: baseConfig.module,
    plugins: baseConfig.plugins
};

/* HtmlWebpackPlugin
使用插件，開發時候，不需要修改demo.html
发布的时候，记得删掉注释
*/
Object.keys(config.entry).forEach((key) => {
    config.plugins.push(new HtmlWebpackPlugin({
        template: `./dist/${key}.html`,
        filename: `${key}.html`,
        chunks: ['manifest', key],
    }));
});

config.plugins.push(new webpack.HotModuleReplacementPlugin())

module.exports = config