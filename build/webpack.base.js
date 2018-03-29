var Webpack = require('webpack')
var path = require('path')
module.exports = {
    entry: {
        demo: path.resolve("./src/demo/index.js")
    },
    output: {
        path: path.resolve('./dist/'),
        filename: '[name]/[name].js',
        publicPath: '/',
    }
}