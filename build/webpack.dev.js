var baseConfig = require('./webpack.base.js')

var webpack = require('webpack')
var path = require('path')
module.exports = {
    devtool: 'source-map',
    externals: {
        "react": 'React',
        "react-dom": 'ReactDOM',
        // "react-router": 'ReactRouter'
    },
    entry: baseConfig.entry,
    output: baseConfig.output,
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css'],
        alias: {
            // 'vue$': 'vue/dist/vue.esm.js',
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: [path.resolve('./src')]
            },
            {
                test: /\.css$/,
                use: "style-loader!css-loader",
            },

            // {
            //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            //     loader: 'url-loader',
            //     query: {
            //         limit: 10000,
            //         // name: utils.assetsPath('img/[name].[hash:7].[ext]')
            //     }
            // },
            // {
            //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            //     loader: 'url-loader',
            //     query: {
            //         limit: 10000,
            //         // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            //     }
            // }
        ]
    },
    plugins: [
    ]
};