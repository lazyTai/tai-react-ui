var Webpack = require('webpack')
var path = require('path')
module.exports = {
    entry: {
        demo: path.resolve("./src/demo/index.js"),
    },
    resolve: { alias: {} },
    output: {
        path: path.resolve('./dist/'),
        filename: '[name]/[name].js',
        publicPath: '/',
    },
    plugins: []
}