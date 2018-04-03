var webConfig = require('./webpack.dev')
var express = require('express')
var app = express();
var webpack = require('webpack')
var compiler = webpack(webConfig)


var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webConfig.output.publicPath,
})
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => { }
})

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})


// serve webpack bundle output
app.use(devMiddleware)
app.use(hotMiddleware)
/* 设置静态目录 */
app.use('/', express.static('./build'));

app.listen(3000, function () {
    console.log("listent to 3000")
})