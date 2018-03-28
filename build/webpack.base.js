var Webpack = require('webpack')
var path = require('path')
module.exports = {
    entry: {
        demo: path.resolve("./src/index.js")
    },
    output: {
        path: path.resolve('./dist/'),
        filename: '[name]/[name].js',
        publicPath: 'dist/',
    }
}